// src/store/useReturnStore.js
import { create } from 'zustand';
import apiClient from '../config/apiClient';

const useReturnStore = create((set, get) => ({
  returns: [],
  loading: false,
  error: null,

  // ✅ Fetch MY returns (logged-in user)
  fetchMyReturns: async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      set({
        returns: [],
        loading: false,
        error: null,
      });
      return { success: false, error: 'Not authenticated' };
    }

    set({ loading: true, error: null });

    try {
      console.log('🔍 Fetching my returns...');

      const res = await apiClient.get('/returns/my-returns');

      console.log('✅ Returns response:', res.data);

      const returns = res.data.returns || [];

      set({
        returns,
        loading: false,
        error: null,
      });

      return { success: true, returns };
    } catch (err) {
      console.error('❌ Returns fetch error:', err);
      const errorMsg =
        err.response?.data?.message || err.message || 'Failed to fetch returns';

      set({
        error: errorMsg,
        loading: false,
      });

      return { success: false, error: errorMsg };
    }
  },

  // ✅ Create Return Request (user side)
  createReturn: async (returnData) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return { success: false, error: 'Not authenticated' };
    }

    set({ loading: true, error: null });

    try {
      console.log('🔍 Creating return:', returnData);

      const res = await apiClient.post('/returns', returnData);

      console.log('✅ Return created:', res.data);

      // ✅ New return add karo
      const newReturn = res.data.return;

      set((state) => ({
        returns: [newReturn, ...state.returns],
        loading: false,
        error: null,
      }));

      return { success: true, return: newReturn };
    } catch (err) {
      console.error('❌ Create return error:', err);
      const errorMsg =
        err.response?.data?.message || err.message || 'Failed to create return';

      set({ loading: false, error: errorMsg });

      return { success: false, error: errorMsg };
    }
  },

  // ✅ Get single return by ID
  getReturnById: async (id) => {
    try {
      const res = await apiClient.get(`/returns/${id}`);
      return { success: true, return: res.data.return };
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  // ✅ Cancel Return (user side)
  cancelReturn: async (returnId) => {
    set({ loading: true, error: null });

    try {
      await apiClient.delete(`/returns/${returnId}`);

      // ✅ State se hata do
      const updatedReturns = get().returns.filter(
        (r) => r._id !== returnId
      );

      set({
        returns: updatedReturns,
        loading: false,
        error: null,
      });

      return { success: true };
    } catch (err) {
      console.error('❌ Cancel return error:', err);
      const errorMsg =
        err.response?.data?.message || err.message || 'Failed to cancel return';

      set({ loading: false, error: errorMsg });

      return { success: false, error: errorMsg };
    }
  },

  // ✅ Reset store
  resetReturns: () => {
    set({
      returns: [],
      loading: false,
      error: null,
    });
  },
}));

export default useReturnStore;