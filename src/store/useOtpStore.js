import { create } from 'zustand';
import API from '../services/api';

const useOtpStore = create((set) => ({
    loading: false,
    message: '',
    error: '',

    // 1. Send OTP Action
    sendOtp: async (email, phone) => {
        set({ loading: true, error: '', message: '' });
        try {
            const { data } = await API.post('/auth/send-otp', { email, phone });
            set({ loading: false, message: data.message || 'OTP sent successfully!' });
            return { success: true, message: data.message };
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Failed to send OTP';
            set({ loading: false, error: errorMsg });
            return { success: false, message: errorMsg };
        }
    },

    // 2. Verify OTP Action
    verifyOtp: async (email, otp) => {
        set({ loading: true, error: '', message: '' });
        try {
            const { data } = await API.post('/auth/verify-otp', { email, otp });
            set({ loading: false, message: data.message || 'OTP Verified Successfully!' });
            return { success: true, message: data.message };
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Invalid or expired OTP';
            set({ loading: false, error: errorMsg });
            return { success: false, message: errorMsg };
        }
    },

    // 3. Forgot Password Action
    forgotPassword: async (email) => {
        set({ loading: true, error: '', message: '' });
        try {
            const { data } = await API.post('/auth/forgot-password', { email });
            set({ loading: false, message: data.message || 'Reset link sent to your email!' });
            return { success: true, message: data.message };
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Forgot password request failed';
            set({ loading: false, error: errorMsg });
            return { success: false, message: errorMsg };
        }
    }
}));

export default useOtpStore;