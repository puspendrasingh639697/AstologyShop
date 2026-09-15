import { create } from 'zustand';
import axios from 'axios';

const useOrderStore = create((set) => ({
  orders: [],
  loading: false,
  error: null,
  successOrder: null,

  // 1. Order Place API
  placeOrder: async (orderData, token) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post('https://astologyshop-e.onrender.com/api/orders/place', orderData, {
        headers: { 'Authorization': `Bearer ${token}` },
        withCredentials: true
      });
      set({ loading: false, successOrder: response.data.order });
      return { success: true, data: response.data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to place order';
      set({ loading: false, error: errorMsg });
      return { success: false, error: errorMsg };
    }
  },

  // 2. Fetch User Orders API (My Orders)
  fetchMyOrders: async (token) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('https://astologyshop-e.onrender.com/api/orders/my-orders', {
        headers: { 'Authorization': `Bearer ${token}` },
        withCredentials: true
      });
      
      set({ 
        orders: response.data.orders || response.data, 
        loading: false 
      });
    } catch (error) {
      set({ 
        loading: false, 
        error: error.response?.data?.message || 'Failed to fetch orders' 
      });
    }
  },

  // 3. Cancel Order API
  cancelOrder: async (orderId, token) => {
    try {
      const response = await axios.put(`https://astologyshop-e.onrender.com/api/orders/${orderId}/cancel`, {}, {
        headers: { 'Authorization': `Bearer ${token}` },
        withCredentials: true
      });

      set((state) => ({
        orders: state.orders.map((ord) => 
          ord._id === orderId ? { ...ord, status: 'Cancelled', isCancelled: true } : ord
        )
      }));

      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to cancel order' 
      };
    }
  },

  // 4. Razorpay Checkout API
  createRazorpayOrder: async (amount, orderId, token) => {
    try {
      const response = await axios.post('https://astologyshop-e.onrender.com/api/payment/checkout', {
        amount,
        orderId
      }, {
        headers: { 'Authorization': `Bearer ${token}` },
        withCredentials: true
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Payment initiation failed' };
    }
  },

  // 5. Razorpay Verify API
  verifyRazorpayPayment: async (paymentData, token) => {
    try {
      const response = await axios.post('https://astologyshop-e.onrender.com/api/payment/verify', paymentData, {
        headers: { 'Authorization': `Bearer ${token}` },
        withCredentials: true
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Payment verification failed' };
    }
  }
}));

export default useOrderStore;