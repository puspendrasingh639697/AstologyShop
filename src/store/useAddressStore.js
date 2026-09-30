// src/store/useAddressStore.js
import { create } from 'zustand';
import apiClient from '../config/apiClient';

const useAddressStore = create((set, get) => ({
  addresses: [],
  loading: false,
  error: null,
  isAuthenticated: false,

  // ✅ Fetch all addresses
  fetchAddresses: async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      set({
        addresses: [],
        loading: false,
        isAuthenticated: false,
        error: null,
      });
      return { success: false, error: 'Not authenticated' };
    }

    set({ loading: true, error: null });

    try {
      const res = await apiClient.get('/user/addresses');

      const addresses = res.data.addresses || res.data || [];

      set({
        addresses,
        loading: false,
        isAuthenticated: true,
        error: null,
      });

      return { success: true, addresses };
    } catch (err) {
      console.error('❌ Addresses fetch error:', err);
      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });
      return { success: false, error: err.message };
    }
  },

  // ✅ Add new address
  addAddress: async (addressData) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return { success: false, error: 'Not authenticated' };
    }

    set({ loading: true, error: null });

    try {
      const res = await apiClient.post('/user/addresses', addressData);

      const newAddresses = res.data.addresses || res.data || [];

      set({
        addresses: newAddresses,
        loading: false,
        error: null,
      });

      return { success: true, addresses: newAddresses };
    } catch (err) {
      console.error('❌ Add address error:', err);
      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });
      return { success: false, error: err.message };
    }
  },

  // ✅ Update address
  updateAddress: async (addressId, addressData) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return { success: false, error: 'Not authenticated' };
    }

    set({ loading: true, error: null });

    try {
      const res = await apiClient.put(
        `/user/addresses/${addressId}`,
        addressData
      );

      const updatedAddresses = res.data.addresses || res.data || [];

      set({
        addresses: updatedAddresses,
        loading: false,
        error: null,
      });

      return { success: true, addresses: updatedAddresses };
    } catch (err) {
      console.error('❌ Update address error:', err);
      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });
      return { success: false, error: err.message };
    }
  },

  // ✅ Delete address
  deleteAddress: async (addressId) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return { success: false, error: 'Not authenticated' };
    }

    set({ loading: true, error: null });

    try {
      await apiClient.delete(`/user/addresses/${addressId}`);

      const updatedAddresses = get().addresses.filter(
        (a) => (a._id || a.id) !== addressId
      );

      set({
        addresses: updatedAddresses,
        loading: false,
        error: null,
      });

      return { success: true };
    } catch (err) {
      console.error('❌ Delete address error:', err);
      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });
      return { success: false, error: err.message };
    }
  },

  // ✅ Get default address
  getDefaultAddress: () => {
    const state = get();
    return state.addresses.find((a) => a.isDefault) || state.addresses[0] || null;
  },

  // ✅ Reset store
  resetAddresses: () => {
    set({
      addresses: [],
      loading: false,
      error: null,
      isAuthenticated: false,
    });
  },
}));

export default useAddressStore;