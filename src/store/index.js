import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from '@/data';

Vue.use(Vuex);

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
      commit('appendPostToThread', { threadId: newPost.threadId, postId });
      commit('appendPostToUser', { postId, userId: newPost.userId });
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
        commit('appendThreadToForum', { forumId, threadId });
        commit('appendThreadToUser', { userId, threadId });

        dispatch('createPost', { text, threadId });

        resolve(state.threads[threadId]);
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
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads[threadId];
      if (!thread.posts) {
        Vue.set(thread, 'posts', {});
      }
      Vue.set(thread.posts, postId, postId);
    },
    appendPostToUser(state, { postId, userId }) {
      const user = state.users[userId];
      if (!user.posts) {
        Vue.set(user, 'posts', {});
      }
      Vue.set(user.posts, postId, postId);
    },
    appendThreadToForum(state, { forumId, threadId }) {
      const forum = state.forums[forumId];
      if (!forum.threads) {
        Vue.set(forum, 'threads', {});
      }
      Vue.set(forum.threads, threadId, threadId);
    },
    appendThreadToUser(state, { userId, threadId }) {
      const user = state.users[userId];
      if (!user.threads) {
        Vue.set(user, 'threads', {});
      }
      Vue.set(user.threads, threadId, threadId);
    },
  },
});
