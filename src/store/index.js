import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from '@/data';
import { countObjectProperties } from '@/utils';

Vue.use(Vuex);

/*eslint-disable */
const makeAppendChildToParentMutation = ({ parent, child }) => {
  return (state, { childId, parentId }) => {
    const resource = state[parent][parentId];
    if (!resource[child]) {
      Vue.set(resource, child, {});
    }
    Vue.set(resource[child], childId, childId);
  };
};
/* eslint-enable */

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3',
  },
  actions: {
    createPost({ commit, state }, post) {
      const postId = `greatPost${Math.random()}`;
      const newPost = { ...post, '.key': postId };
      newPost.userId = state.authId;
      newPost.publishedAt = Math.floor(Date.now() / 1000);

      commit('setPost', { post: newPost, postId });
      commit('appendPostToThread', { parentId: newPost.threadId, childId: postId });
      commit('appendPostToUser', { parentId: newPost.userId, childId: postId });

      return Promise.resolve(state.posts[postId]);
    },
    createThread({ commit, state, dispatch }, { text, title, forumId }) {
      return new Promise((resolve) => {
        const userId = state.authId;
        const threadId = `greatPost${Math.random()}`;
        const publishedAt = Math.floor(Date.now() / 1000);

        const thread = {
          '.key': threadId,
          forumId,
          title,
          publishedAt,
          userId,
        };

        commit('setThread', { threadId, thread });
        commit('appendThreadToForum', { parentId: forumId, childId: threadId });
        commit('appendThreadToUser', { parentId: userId, childId: threadId });

        dispatch('createPost', { text, threadId }).then((post) => {
          commit('setThread', { threadId, thread: { ...thread, firstPostId: post['.key'] } });
        });

        resolve(state.threads[threadId]);
      });
    },
    updateThread({ state, commit, dispatch }, { title, text, id }) {
      return new Promise((resolve) => {
        const thread = state.threads[id];

        const newThread = { ...thread, title };

        commit('setThread', { thread: newThread, threadId: id });
        dispatch('updatePost', { id: thread.firstPostId, text }).then(() => {
          resolve(newThread);
        });
      });
    },
    updatePost({ state, commit }, { id, text }) {
      return new Promise((resolve) => {
        const post = state.posts[id];
        commit('setPost', {
          postId: id,
          post: {
            ...post,
            text,
            edited: {
              at: Math.floor(Date.now() / 1000),
              by: state.authId,
            },
          },
        });
        resolve(post);
      });
    },
    updateUser({ commit }, user) {
      commit('setUser', { userId: user['.key'], user });
    },
  },
  getters: {
    authUser(state) {
      return state.users[state.authId];
    },
    userPostsCount: (state) => (id) => countObjectProperties(state.users[id].posts),
    userThreadsCount: (state) => (id) => countObjectProperties(state.users[id].threads),
  },
  mutations: {
    setThread(state, { thread, threadId }) {
      Vue.set(state.threads, threadId, thread);
    },
    setPost(state, { post, postId }) {
      Vue.set(state.posts, postId, post);
    },
    setUser(state, { user, userId }) {
      Vue.set(state.users, userId, user);
    },
    appendPostToThread: makeAppendChildToParentMutation({ parent: 'threads', child: 'posts' }),
    appendPostToUser: makeAppendChildToParentMutation({ parent: 'users', child: 'posts' }),
    appendThreadToForum: makeAppendChildToParentMutation({ parent: 'forums', child: 'threads' }),
    appendThreadToUser: makeAppendChildToParentMutation({ parent: 'users', child: 'threads' }),
  },
});
