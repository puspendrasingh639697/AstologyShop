// import { create } from 'zustand';

// const useReviewStore = create((set) => ({
//   addReview: async (productId, rating, comment) => {
//     // LocalStorage se userId nikalne ka tareeqa (jaise humne cart mein kiya tha)
//     let userId = localStorage.getItem("userId");
//     if (!userId) {
//       const userStr = localStorage.getItem("user");
//       if (userStr) {
//         try {
//           const userObj = JSON.parse(userStr);
//           userId = userObj._id || userObj.id;
//         } catch (e) {}
//       }
//     }

//     if (!userId) {
//       return { success: false, message: "Please login first to write a review." };
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/reviews/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           user: userId,
//           targetId: productId,
//           targetModel: "Product",
//           rating: Number(rating),
//           comment
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         return { success: true, message: data.message || "Review added successfully!" };
//       }
//       return { success: false, message: data.message || "Failed to add review" };
//     } catch (error) {
//       console.error("Error adding review:", error);
//       return { success: false, message: "Server error" };
//     }
//   }
// }));

// export default useReviewStore;

import { create } from 'zustand';
import axios from 'axios';

const useReviewStore = create((set) => ({
  loading: false,
  error: null,

  addReview: async (reviewData, token) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post('http://localhost:5000/api/reviews/add', reviewData, {
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