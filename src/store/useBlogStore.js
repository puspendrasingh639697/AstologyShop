import { create } from 'zustand';
import apiClient from '../config/apiClient'; // Aapka frontend apiClient

const useBlogStore = create((set) => ({
  blogs: [],
  singleBlog: null,
  loading: false,
  error: null,

  // ✅ 1. Fetch All Published Blogs (For Blog List Page)
  fetchPublicBlogs: async () => {
    set({ loading: true, error: null });
    try {
      const res = await apiClient.get('/blogs'); // Public API
      set({ blogs: res.data.blogs || [], loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ✅ 2. Fetch Single Blog by Slug (For Article Page)
  fetchBlogBySlug: async (slug) => {
    set({ loading: true, error: null, singleBlog: null });
    try {
      const res = await apiClient.get(`/blogs/${slug}`);
      set({ singleBlog: res.data.blog, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ✅ 3. Clear Single Blog (Jab user wapas list par jaye)
  clearSingleBlog: () => set({ singleBlog: null }),
}));

export default useBlogStore;