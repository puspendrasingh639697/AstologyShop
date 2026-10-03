import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Images
import userImg1 from "../assets/pop_3.avif";
import userImg2 from "../assets/pop_6.avif";
import userImg3 from "../assets/popo_5.avif";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Verified Buyer",
    rating: 5,
    comment: "The quality of the products is excellent and the packaging is so beautiful. Truly a divine experience!",
    avatar: userImg1,
  },
  {
    id: 2,
    name: "Rohit Mehta",
    role: "Verified Buyer",
    rating: 5,
    comment: "Authentic products, great service and super fast delivery. Highly recommended. Aardhya for all puja needs.",
    avatar: userImg2,
  },
  {
    id: 3,
    name: "Neha Kapoor",
    role: "Verified Buyer",
    rating: 5,
    comment: "I ordered a puja kit for my home and it was perfect. Everything was well packed and of great quality.",
    avatar: userImg3,
  },
  {
    id: 4,
    name: "Anjali Verma",
    role: "Verified Buyer",
    rating: 5,
    comment: "Pure and authentic items. The rudraksha mala I received was of excellent quality. Will order again!",
    avatar: userImg1,
  },
  {
    id: 5,
    name: "Suresh Iyer",
    role: "Verified Buyer",
    rating: 5,
    comment: "Very satisfied with the puja samagri. Packaging was beautiful and delivery was quick. Highly recommended.",
    avatar: userImg2,
  },
  {
    id: 6,
    name: "Meera Joshi",
    role: "Verified Buyer",
    rating: 5,
    comment: "Beautifully crafted idols and yantras. Truly authentic. My family loved every product we ordered.",
    avatar: userImg3,
  },
];

const CustomerReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / cardsPerPage);

  const currentReviews = reviews.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full py-10 sm:py-12 md:py-14 bg-[#F5EBDD] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ====== HEADER ====== */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
            <span className="text-[#B58A3A] text-xs">✦</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#173B32] tracking-wide px-2">
              What Our Customers Say
            </h2>
            <span className="text-[#B58A3A] text-xs">✦</span>
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
            Real stories. True devotion.
          </p>
        </div>

        {/* ====== CAROUSEL ====== */}
        <div className="relative px-8 sm:px-10 md:px-12">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#B58A3A]/40 shadow-sm flex items-center justify-center text-[#173B32] hover:bg-[#173B32] hover:text-[#F5EBDD] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-5 md:gap-5">
            {currentReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#B58A3A]/40 shadow-sm flex items-center justify-center text-[#173B32] hover:bg-[#173B32] hover:text-[#F5EBDD] transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* ====== DOTS ====== */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              aria-label={`Page ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                currentPage === i
                  ? "w-2 h-2 bg-[#173B32]"
                  : "w-1.5 h-1.5 bg-[#B58A3A]/40 hover:bg-[#B58A3A]/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================================
   REVIEW CARD — Aardhya EXACT (avatar INSIDE card)
========================================================== */
const ReviewCard = ({ review }) => {
  return (
    <div className="bg-[#FCF8F2] rounded-md px-4 py-4 border border-[#B58A3A]/30 shadow-[0_6px_25px_-15px_rgba(23,59,50,0.10)] hover:shadow-[0_15px_40px_-15px_rgba(23,59,50,0.18)] hover:border-[#B58A3A]/60 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">

      {/* ====== TOP ROW: AVATAR + COMMENT ====== */}
      <div className="flex gap-3 items-start mb-3">

        {/* AVATAR — small, inside card, left */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white border border-[#B58A3A]/40 shadow-sm flex-shrink-0">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* COMMENT */}
        <p className="text-[11.5px] sm:text-[12px] text-[#6B5038] leading-[1.6] italic flex-1">
          "{review.comment}"
        </p>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#B58A3A]/40 to-transparent mb-2.5"></div>

      {/* ====== BOTTOM ROW: NAME + STARS ====== */}
      <div className="flex items-center justify-between gap-2 mt-auto">
        <div className="min-w-0 flex-1">
          <h4 className="text-[12px] sm:text-[13px] font-bold text-[#173B32] leading-tight truncate">
            {review.name}
          </h4>
          <p className="text-[10px] text-[#6B5038]/80 leading-tight mt-0.5 truncate">
            {review.role}
          </p>
        </div>

        <div className="flex gap-0.5 flex-shrink-0">
          {[...Array(review.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#B58A3A] text-[#B58A3A]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;