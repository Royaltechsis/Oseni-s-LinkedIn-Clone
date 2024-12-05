// src/store/useAuthStore.js
import create from "zustand";
import { account } from "../appwrite";

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  // Sign up function
  signup: async (email, password, name) => {
    set({ loading: true });
    try {
      await account.create("unique()", email, password, name);
      set({ loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Login function
  login: async (email, password) => {
    set({ loading: true });
    try {
      const session = await account.createEmailSession(email, password);
      set({ user: session, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Fetch the current user session
  fetchUser: async () => {
    try {
      const user = await account.get();
      set({ user });
    } catch (error) {
      set({ user: null });
    }
  },

  // Logout function
  logout: async () => {
    await account.deleteSession("current");
    set({ user: null });
  },
}));

export default useAuthStore;
