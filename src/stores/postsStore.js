import { defineStore } from 'pinia';
import postsService from '../services/postsService.js'

export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    posts: [],
    loading: false
  }),
  getters: {
    totalPostsLength() {
      return this.posts.length
    },
  },
  actions: {
    async getPosts() {
      this.loading = true;
      try {
        this.posts = await postsService.fetchPosts();
      } catch (e) {
        console.error(e);
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    },

    addPost(payload) {
      const maxId = this.posts.reduce((max, post) => Math.max(max, post.id), 0);
      const newPost = { ...payload, id: maxId + 1 };
      this.posts.push(newPost);
    }
  },
})

