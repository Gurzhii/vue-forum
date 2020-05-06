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
    setPost(state, { post, postId }) {
      Vue.set(state.posts, postId, post);
    },
    setUser(state, { user, userId }) {
      Vue.set(state.users, userId, user);
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads[threadId];
      Vue.set(thread.posts, postId, postId);
    },
    appendPostToUser(state, { postId, userId }) {
      const user = state.users[userId];
      Vue.set(user.posts, postId, postId);
    },
  },
});
