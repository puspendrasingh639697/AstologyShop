// import { create } from 'zustand';
// import apiClient from '../config/api';

// const useSettingsStore = create((set, get) => ({
//   settings: null,
//   loading: false,
//   error: null,

//   // ✅ Fetch settings from backend
//   fetchSettings: async () => {
//     set({ loading: true, error: null });
//     try {
//       const res = await apiClient.get('/settings');
//       const settingsData = res.data.settings || res.data;

//       set({ settings: settingsData, loading: false });

//       // ✅ localStorage mein save karein (fast access)
//       localStorage.setItem('siteSettings', JSON.stringify(settingsData));

//       return { success: true, settings: settingsData };
//     } catch (err) {
//       console.error('Fetch settings error:', err);
//       set({
//         error: err.response?.data?.message || err.message,
//         loading: false,
//       });
//       return { success: false, error: err.message };
//     }
//   },

//   // ✅ Get site name
//   getSiteName: () => {
//     const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
//     return s?.siteName || 'PujaHetu';
//   },

//   // ✅ Get site logo
//   getSiteLogo: () => {
//     const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
//     return s?.siteLogo || '';
//   },

//   // ✅ Get contact info
//   getContactInfo: () => {
//     const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
//     return {
//       email: s?.contactEmail || '',
//       phone: s?.contactPhone || '',
//       address: s?.contactAddress || '',
//     };
//   },

//   // ✅ Get social links
//   getSocialLinks: () => {
//     const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
//     return {
//       facebook: s?.facebookUrl || '',
//       instagram: s?.instagramUrl || '',
//       whatsapp: s?.whatsappNumber || '',
//     };
//   },

//   // ✅ Get shipping charges
//   getShippingCharges: () => {
//     const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
//     return {
//       standard: s?.standardShippingCharge || 99,
//       express: s?.expressShippingCharge || 199,
//       freeThreshold: s?.freeShippingThreshold || 999,
//     };
//   },

//   // ✅ Check COD enabled
//   isCODEnabled: () => {
//     const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
//     return s?.codEnabled !== false;
//   },

//   // ✅ Check Razorpay enabled
//   isRazorpayEnabled: () => {
//     const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
//     return s?.razorpayEnabled !== false;
//   },

//   // ✅ Get Razorpay Key
//   getRazorpayKey: () => {
//     const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
//     return s?.razorpayKeyId || '';
//   },

//   // ✅ Get coupons
//   getCoupons: () => {
//     const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
//     return s?.coupons || [];
//   },
// }));

// export default useSettingsStore;

import { create } from 'zustand';
import axios from 'axios';   // ✅ axios import
import API_BASE_URL from '../config/api';   // ✅ URL import

const useSettingsStore = create((set, get) => ({
  settings: null,
  loading: false,
  error: null,

  // ✅ Fetch settings from backend
  fetchSettings: async () => {
    set({ loading: true, error: null });
    try {
      // ✅ axios use karein — apiClient ki jagah
      const res = await axios.get(`${API_BASE_URL}/settings`);
      const settingsData = res.data.settings || res.data;

      set({ settings: settingsData, loading: false });

      // ✅ localStorage mein save karein (fast access)
      localStorage.setItem('siteSettings', JSON.stringify(settingsData));

      return { success: true, settings: settingsData };
    } catch (err) {
      console.error('Fetch settings error:', err);
      set({
        error: err.response?.data?.message || err.message,
        loading: false,
      });
      return { success: false, error: err.message };
    }
  },

  // ✅ Get site name
  getSiteName: () => {
    const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
    return s?.siteName || 'PujaHetu';
  },

  // ✅ Get site logo
  getSiteLogo: () => {
    const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
    return s?.siteLogo || '';
  },

  // ✅ Get contact info
  getContactInfo: () => {
    const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
    return {
      email: s?.contactEmail || '',
      phone: s?.contactPhone || '',
      address: s?.contactAddress || '',
    };
  },

  // ✅ Get social links
  getSocialLinks: () => {
    const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
    return {
      facebook: s?.facebookUrl || '',
      instagram: s?.instagramUrl || '',
      whatsapp: s?.whatsappNumber || '',
    };
  },

  // ✅ Get shipping charges
  getShippingCharges: () => {
    const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
    return {
      standard: s?.standardShippingCharge || 99,
      express: s?.expressShippingCharge || 199,
      freeThreshold: s?.freeShippingThreshold || 999,
    };
  },

  // ✅ Check COD enabled
  isCODEnabled: () => {
    const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
    return s?.codEnabled !== false;
  },

  // ✅ Check Razorpay enabled
  isRazorpayEnabled: () => {
    const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
    return s?.razorpayEnabled !== false;
  },

  // ✅ Get Razorpay Key
  getRazorpayKey: () => {
    const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
    return s?.razorpayKeyId || '';
  },

  // ✅ Get coupons
  getCoupons: () => {
    const s = get().settings || JSON.parse(localStorage.getItem('siteSettings') || '{}');
    return s?.coupons || [];
  },
}));

export default useSettingsStore;