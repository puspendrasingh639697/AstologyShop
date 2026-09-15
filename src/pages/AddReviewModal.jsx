import React, { useState } from 'react';
import useReviewStore from '../store/useReviewStore';

const AddReview = ({ productId, onReviewAdded }) => {
  const { addReview, loading } = useReviewStore();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      alert("Please write a comment for your review!");
      return;
    }

    const token = localStorage.getItem('token') || JSON.parse(localStorage.getItem('user') || '{}').token;

    const reviewPayload = {
      targetId: productId,
      targetModel: "Product",
      rating: Number(rating),
      comment: comment
    };

    const result = await addReview(reviewPayload, token);

    if (result.success) {
      alert("Review added successfully! 🎉");
      setComment('');
      if (onReviewAdded) onReviewAdded(result.data.review);
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-[#e6d5c3] max-w-lg mt-6">
      <h3 className="text-xl font-serif text-[#4a2e18] mb-4">Write a Review</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Rating Star / Number Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rating (1 to 5)</label>
          <select 
            value={rating} 
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4a2e18]"
          >
            <option value="5">⭐⭐⭐⭐⭐ (5 - Excellent)</option>
            <option value="4">⭐⭐⭐⭐ (4 - Good)</option>
            <option value="3">⭐⭐⭐ (3 - Average)</option>
            <option value="2">⭐⭐ (2 - Poor)</option>
            <option value="1">⭐ (1 - Terrible)</option>
          </select>
        </div>

        {/* Comment Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
          <textarea
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Aapko product kaisa laga yahan likhein..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#4a2e18]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#4a2e18] text-white py-2 rounded-md hover:bg-[#352010] transition font-medium"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default AddReview;