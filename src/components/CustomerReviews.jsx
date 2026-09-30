import React from "react";
import { Star } from "lucide-react";

// Images
import userImg1 from "../assets/pop_3.avif";
import userImg2 from "../assets/pop_6.avif";
import userImg3 from "../assets/popo_5.avif";

const reviews = [
  {
    id: 1,
    name: "Kavita Lynn",
    role: "Shashi's Colonial Coffeero",
    rating: 5,
    comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable.",
    avatar: userImg1,
  },
  {
    id: 2,
    name: "Tomas Campbell",
    role: "Service Technician",
    rating: 5,
    comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable.",
    avatar: userImg2,
  },
  {
    id: 3,
    name: "Robert Ocampo",
    role: "Aquatic Biologist",
    rating: 5,
    comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable.",
    avatar: userImg3,
  },
];

const CustomerReviews = () => {
  return (
    <section className="relative w-full py-6 sm:py-8 md:py-10 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ====== HEADER ====== */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#4a2e18] tracking-wide">
            Customers Review
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
          </div>
        </div>

        {/* ====== CARDS GRID ====== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 sm:gap-10 md:gap-6 lg:gap-8 mt-6 sm:mt-8 md:mt-10">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================
   REVIEW CARD
========================================================== */
const ReviewCard = ({ review }) => {
  return (
    <div className="relative group">

      {/* ====== FLOATING AVATAR (top, overlapping card) ====== */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] ring-4 ring-white transition-transform duration-500 group-hover:scale-105">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ====== CARD ====== */}
      <div className="relative bg-[#f5f5f7] rounded-md px-5 sm:px-6 md:px-7 pt-12 sm:pt-14 pb-5 sm:pb-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] hover:bg-white transition-all duration-500 hover:-translate-y-1.5 border border-transparent hover:border-[#8c0a15]/10">

        {/* ====== COMMENT ====== */}
        <p className="text-[13px] sm:text-[13.5px] md:text-sm text-black leading-[1.7] sm:leading-[1.75] mb-5 sm:mb-6 min-h-[110px] sm:min-h-[120px]">
          {review.comment}
        </p>

        {/* ====== DIVIDER ====== */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#8c0a15] to-transparent mb-4 sm:mb-5"></div>

        {/* ====== FOOTER: NAME+ROLE (left) | STARS (right) ====== */}
        <div className="flex items-center justify-between gap-3 sm:gap-4">

          {/* Left: Name + Role */}
          <div className="min-w-0 flex-1">
            <h4 className="text-[13.5px] sm:text-[14px] md:text-[15px] font-bold text-[#1a1a2e] leading-tight truncate">
              {review.name}
            </h4>
            <p className="text-[11px] sm:text-[11.5px] md:text-xs text-gray-500 leading-tight mt-1 truncate">
              {review.role}
            </p>
          </div>

          {/* Right: Stars */}
          <div className="flex gap-0.5 flex-shrink-0">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;