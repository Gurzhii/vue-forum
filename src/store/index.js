import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from '@/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: sourceData,
  actions: {
    createPost(context, post) {
      const postId = `greatPost${Math.random()}`;
      const newPost = { ...post, '.key': postId };
      context.commit('setPost', { post: newPost, postId });
      context.commit('appendPostToThread', { threadId: newPost.threadId, postId });
      context.commit('appendPostToUser', { postId, userId: newPost.userId });
    },
  },
  mutations: {
    setPost(state, { post, postId }) {
      Vue.set(state.posts, postId, post);
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
