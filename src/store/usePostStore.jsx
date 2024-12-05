// src/store/usePostStore.js
import create from "zustand";
import { databases } from "../appwrite";

const usePostStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,

  // Fetch posts
  fetchPosts: async () => {
    set({ loading: true });
    try {
      const response = await databases.listDocuments("databaseId", "collectionId");
      set({ posts: response.documents, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Create post
  createPost: async (content, userId) => {
    set({ loading: true });
    try {
      const response = await databases.createDocument("databaseId", "collectionId", "unique()", {
        content,
        userId,
      });
      set((state) => ({ posts: [...state.posts, response], loading: false }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default usePostStore;
