

// import { create } from 'zustand';
// import axios from 'axios';

// const useReviewStore = create((set) => ({
//   loading: false,
//   error: null,

//   addReview: async (reviewData, token) => {
//     set({ loading: true, error: null });
//     try {
//       const response = await axios.post('https://astologyshop-e.onrender.com/api/reviews/add', reviewData, {
//         headers: { 
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         },
//         withCredentials: true
//       });
//       set({ loading: false });
//       return { success: true, data: response.data };
//     } catch (error) {
//       const errorMsg = error.response?.data?.message || 'Failed to submit review';
//       set({ loading: false, error: errorMsg });
//       return { success: false, error: errorMsg };
//     }
//   }
// }));

// export default useReviewStore;

import { create } from 'zustand';
import axios from 'axios';
import API_BASE_URL from '../config/api'; // ✅ Central URL

const useReviewStore = create((set) => ({
  loading: false,
  error: null,

  addReview: async (reviewData, token) => {
    set({ loading: true, error: null });
    try {
      // ✅ API_BASE_URL use karein
      const response = await axios.post(`${API_BASE_URL}/reviews/add`, reviewData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      set({ loading: false });
      return { success: true, data: response.data };
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to submit review';
      set({ loading: false, error: errorMsg });
      return { success: false, error: errorMsg };
    }
  }
}));

export default useReviewStore;