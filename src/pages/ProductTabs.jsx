import React, { useState } from "react";
import { BiListCheck, BiStar } from "react-icons/bi";
import AuthenticitySection from "./ProductPage/AuthenticitySection";
import ShippingReturnsFAQ from "./ProductPage/ShippingReturnsFAQ";


const ProductTabs = ({ product, reviewsList, onAddReview }) => {
  const [newReview, setNewReview] = useState({ name: "", rating: "5", comment: "" });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return alert("Please fill in all fields.");
    onAddReview(newReview);
    setNewReview({ name: "", rating: "5", comment: "" });
  };

  return (
    <div className="space-y-6">
      {/* Spiritual Significance & Purpose */}
      {product.spiritualUse && (
        <div className="border border-[#e8dcc4] bg-[#fffbf2] p-6 rounded-sm shadow-sm relative overflow-hidden">
          <h3 className="text-base font-serif text-[#4a2e18] mb-3 flex items-center gap-2">
            <span className="text-xl text-[#b8860b]"></span> Spiritual Significance & Purpose
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif">
            {product.spiritualUse}
          </p>
        </div>
      )}

      {/* How to Use */}
      {product.howToUse && (
        <div className="bg-white p-6 border border-stone-200 rounded-sm">
          <h3 className="text-lg font-serif text-[#4a2e18] mb-3">📖 How to Use</h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif">
            {product.howToUse}
          </p>
        </div>
      )}

      {/* Authenticity & Certification Section */}
      <AuthenticitySection product={product} />

      {/* Shipping, Returns & FAQs Section */}
      <ShippingReturnsFAQ />

      {/* Product Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <div className="bg-stone-50/50 p-6 border border-stone-200 rounded-sm">
          <h3 className="text-lg font-serif text-[#4a2e18] mb-4 flex items-center gap-2">
            <BiListCheck className="text-xl text-[#8b3a2b]" /> Product Specifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="bg-white p-3.5 border border-stone-200 rounded-sm">
                <span className="block text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                  {spec.label}
                </span>
                <span className="text-xs font-bold text-[#4a2e18]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Customer Ratings & Reviews */}
      <div className="bg-white p-6 border border-stone-200 rounded-sm">
        <h3 className="text-xl font-serif text-[#4a2e18] mb-6">Customer Ratings & Reviews</h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {reviewsList.map((rev) => (
              <div key={rev.id} className="bg-stone-50 p-4 border border-stone-200 rounded-sm shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm text-[#4a2e18]">{rev.name}</span>
                  <span className="text-xs text-stone-400">{rev.date}</span>
                </div>
                <div className="flex items-center text-amber-500 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <BiStar key={i} className="fill-amber-500 text-sm" />
                  ))}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{rev.comment}</p>
              </div>
            ))}
          </div>

          <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm shadow-sm h-fit">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#4a2e18] mb-4">Write a Review</h4>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">Your Name</label>
                <input 
                  type="text" 
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  placeholder="Enter your name" 
                  className="w-full p-2.5 text-xs border border-stone-300 rounded-sm focus:outline-none focus:border-[#8b3a2b] bg-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">Rating</label>
                <select 
                  value={newReview.rating}
                  onChange={(e) => setNewReview({...newReview, rating: e.target.value})}
                  className="w-full p-2.5 text-xs border border-stone-300 rounded-sm focus:outline-none focus:border-[#8b3a2b] bg-white"
                >
                  <option value="5">5 Stars - Excellent</option>
                  <option value="4">4 Stars - Good</option>
                  <option value="3">3 Stars - Average</option>
                  <option value="2">2 Stars - Poor</option>
                  <option value="1">1 Star - Terrible</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1">Review</label>
                <textarea 
                  rows="3"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  placeholder="Write your experience..." 
                  className="w-full p-2.5 text-xs border border-stone-300 rounded-sm focus:outline-none focus:border-[#8b3a2b] bg-white"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#4a2e18] hover:bg-[#321e10] text-white py-2.5 text-xs font-bold tracking-widest uppercase transition-all shadow-sm cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;

