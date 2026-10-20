


import { create } from "zustand";
import API_BASE_URL from "../config/api"; // ✅ Central URL

const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      // ✅ API_BASE_URL use karein
      const response = await fetch(`${API_BASE_URL}/categories`);
      const data = await response.json();

      if (data.success) {
        set({ categories: data.categories, loading: false });
      } else {
        set({ error: "Failed to fetch categories", loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useCategoryStore;