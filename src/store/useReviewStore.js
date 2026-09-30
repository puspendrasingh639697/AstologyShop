

// // import { create } from 'zustand';
// // import axios from 'axios';

// // const useReviewStore = create((set) => ({
// //   loading: false,
// //   error: null,

// //   addReview: async (reviewData, token) => {
// //     set({ loading: true, error: null });
// //     try {
// //       const response = await axios.post('https://astologyshop-e.onrender.com/api/reviews/add', reviewData, {
// //         headers: { 
// //           'Authorization': `Bearer ${token}`,
// //           'Content-Type': 'application/json'
// //         },
// //         withCredentials: true
// //       });
// //       set({ loading: false });
// //       return { success: true, data: response.data };
// //     } catch (error) {
// //       const errorMsg = error.response?.data?.message || 'Failed to submit review';
// //       set({ loading: false, error: errorMsg });
// //       return { success: false, error: errorMsg };
// //     }
// //   }
// // }));

// // export default useReviewStore;

// import { create } from 'zustand';
// import axios from 'axios';
// import API_BASE_URL from '../config/api'; // ✅ Central URL

// const useReviewStore = create((set) => ({
//   loading: false,
//   error: null,

//   addReview: async (reviewData, token) => {
//     set({ loading: true, error: null });
//     try {
//       // ✅ API_BASE_URL use karein
//       const response = await axios.post(`${API_BASE_URL}/reviews/add`, reviewData, {
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

// src/store/useReviewStore.js
import { create } from 'zustand';
import apiClient from '../config/apiClient';

const useReviewStore = create((set, get) => ({
  reviews: [],
  myReviews: [],
  loading: false,
  error: null,

  // ✅ Add or Update Review
  addReview: async (reviewData) => {
    set({ loading: true, error: null });

    try {
      const res = await apiClient.post('/reviews/add', reviewData);

      set({ loading: false, error: null });

      return { success: true, data: res.data };
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || 'Failed to submit review';
      set({ loading: false, error: errorMsg });
      return { success: false, error: errorMsg };
    }
  },

  // ✅ Fetch reviews for a product (public)
  fetchReviewsByTarget: async (targetId) => {
    set({ loading: true, error: null });

    try {
      const res = await apiClient.get(`/reviews/${targetId}`);

      set({
        reviews: res.data.reviews || [],
        loading: false,
        error: null,
      });

      return { success: true, reviews: res.data.reviews };
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || 'Failed to fetch reviews';
      set({ loading: false, error: errorMsg });
      return { success: false, error: errorMsg };
    }
  },

  // ✅ Fetch MY reviews (logged-in user)
  fetchMyReviews: async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      set({
        myReviews: [],
        loading: false,
        error: null,
      });
      return { success: false, error: 'Not authenticated' };
    }

    set({ loading: true, error: null });

    try {
      const res = await apiClient.get('/reviews/my-reviews');

      const myReviews = res.data.reviews || [];

      set({
        myReviews,
        loading: false,
        error: null,
      });

      return { success: true, reviews: myReviews };
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || 'Failed to fetch your reviews';
      set({ loading: false, error: errorMsg });
      return { success: false, error: errorMsg };
    }
  },

  // ✅ Delete Review
  deleteReview: async (reviewId) => {
    set({ loading: true, error: null });

    try {
      await apiClient.delete(`/reviews/${reviewId}`);

      // Update myReviews
      const updatedMyReviews = get().myReviews.filter(
        (r) => r._id !== reviewId
      );

      set({
        myReviews: updatedMyReviews,
        loading: false,
        error: null,
      });

      return { success: true };
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || 'Failed to delete review';
      set({ loading: false, error: errorMsg });
      return { success: false, error: errorMsg };
    }
  },

  // ✅ Reset store
  resetReviews: () => {
    set({
      reviews: [],
      myReviews: [],
      loading: false,
      error: null,
    });
  },
}));

export default useReviewStore;