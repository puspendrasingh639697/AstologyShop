import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("http://localhost:5000/api/categories");
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