// import React from "react";
// import { Star } from "lucide-react";

// // Images
// import userImg1 from "../assets/pop_3.avif";
// import userImg2 from "../assets/pop_6.avif";
// import userImg3 from "../assets/popo_5.avif";

// const reviews = [
//   {
//     id: 1,
//     name: "Kavita Lynn",
//     role: "Shashi's Colonial Coffeero",
//     rating: 5,
//     comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable.",
//     avatar: userImg1,
//   },
//   {
//     id: 2,
//     name: "Tomas Campbell",
//     role: "Service Technician",
//     rating: 5,
//     comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable.",
//     avatar: userImg2,
//   },
//   {
//     id: 3,
//     name: "Robert Ocampo",
//     role: "Aquatic Biologist",
//     rating: 5,
//     comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable.",
//     avatar: userImg3,
//   },
// ];

// const CustomerReviews = () => {
//   return (
//     <section className="relative w-full py-6 sm:py-8 md:py-10 bg-white overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

//         {/* ====== HEADER ====== */}
//         <div className="text-center mb-6 sm:mb-8 md:mb-10">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#4a2e18] tracking-wide">
//             Customers Review
//           </h2>
//           <div className="flex items-center justify-center gap-3 mt-3">
//             <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
//             <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
//             <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
//           </div>
//         </div>

//         {/* ====== CARDS GRID ====== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 sm:gap-10 md:gap-6 lg:gap-8 mt-6 sm:mt-8 md:mt-10">
//           {reviews.map((review) => (
//             <ReviewCard key={review.id} review={review} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ==========================================================
//    REVIEW CARD
// ========================================================== */
// const ReviewCard = ({ review }) => {
//   return (
//     <div className="relative group">

//       {/* ====== FLOATING AVATAR (top, overlapping card) ====== */}
//       <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
//         <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] ring-4 ring-white transition-transform duration-500 group-hover:scale-105">
//           <img
//             src={review.avatar}
//             alt={review.name}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* ====== CARD ====== */}
//       <div className="relative bg-[#f5f5f7] rounded-md px-5 sm:px-6 md:px-7 pt-12 sm:pt-14 pb-5 sm:pb-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] hover:bg-white transition-all duration-500 hover:-translate-y-1.5 border border-transparent hover:border-[#8c0a15]/10">

//         {/* ====== COMMENT ====== */}
//         <p className="text-[13px] sm:text-[13.5px] md:text-sm text-black leading-[1.7] sm:leading-[1.75] mb-5 sm:mb-6 min-h-[110px] sm:min-h-[120px]">
//           {review.comment}
//         </p>

//         {/* ====== DIVIDER ====== */}
//         <div className="w-full h-px bg-gradient-to-r from-transparent via-[#8c0a15] to-transparent mb-4 sm:mb-5"></div>

//         {/* ====== FOOTER: NAME+ROLE (left) | STARS (right) ====== */}
//         <div className="flex items-center justify-between gap-3 sm:gap-4">

//           {/* Left: Name + Role */}
//           <div className="min-w-0 flex-1">
//             <h4 className="text-[13.5px] sm:text-[14px] md:text-[15px] font-bold text-[#1a1a2e] leading-tight truncate">
//               {review.name}
//             </h4>
//             <p className="text-[11px] sm:text-[11.5px] md:text-xs text-gray-500 leading-tight mt-1 truncate">
//               {review.role}
//             </p>
//           </div>

//           {/* Right: Stars */}
//           <div className="flex gap-0.5 flex-shrink-0">
//             {[...Array(review.rating)].map((_, i) => (
//               <Star
//                 key={i}
//                 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-amber-400 text-amber-400"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;

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

  // ✅ 6 cards → 3 per page → 2 pages
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

        {/* ====== HEADER (Aardhya style) ====== */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#173B32] tracking-wide px-2">
              What Our Customers Say
            </h2>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
          </div>
          <p className="text-xs sm:text-sm text-[#6B5038] italic">
            Real stories. True devotion.
          </p>
        </div>

        {/* ====== CAROUSEL WRAPPER ====== */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#B58A3A]/30 shadow-md flex items-center justify-center text-[#173B32] hover:bg-[#173B32] hover:text-[#F5EBDD] hover:border-[#173B32] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* CARDS GRID — 3 per page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 sm:gap-8 md:gap-6 lg:gap-8 px-2 sm:px-4">
            {currentReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#B58A3A]/30 shadow-md flex items-center justify-center text-[#173B32] hover:bg-[#173B32] hover:text-[#F5EBDD] hover:border-[#173B32] transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ====== DOTS ====== */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              aria-label={`Page ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                currentPage === i
                  ? "w-2.5 h-2.5 bg-[#173B32]"
                  : "w-2 h-2 bg-[#B58A3A]/40 hover:bg-[#B58A3A]/70"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ==========================================================
   REVIEW CARD — Aardhya exact compact style
========================================================== */
const ReviewCard = ({ review }) => {
  return (
    <div className="relative group">

      {/* ====== FLOATING AVATAR ====== */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white ring-4 ring-[#F5EBDD] border-2 border-[#B58A3A]/50 shadow-[0_8px_25px_rgba(23,59,50,0.12)] transition-transform duration-500 group-hover:scale-105">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ====== CARD (Compact) ====== */}
      <div className="relative bg-[#FCF8F2] rounded-md px-4 sm:px-5 pt-10 sm:pt-11 pb-4 sm:pb-5 border border-[#B58A3A]/30 shadow-[0_10px_40px_-20px_rgba(23,59,50,0.10)] hover:shadow-[0_25px_60px_-15px_rgba(23,59,50,0.20)] hover:border-[#B58A3A]/60 transition-all duration-500 hover:-translate-y-1.5">

        {/* COMMENT */}
        <p className="text-[12.5px] sm:text-[13px] text-[#6B5038] leading-[1.65] mb-4 min-h-[100px] italic">
          "{review.comment}"
        </p>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#B58A3A]/50 to-transparent mb-3"></div>

        {/* FOOTER */}
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h4 className="text-[13px] sm:text-[14px] font-bold text-[#173B32] leading-tight truncate">
              {review.name}
            </h4>
            <p className="text-[10.5px] sm:text-[11px] text-[#6B5038]/80 leading-tight mt-0.5 truncate">
              {review.role}
            </p>
          </div>

          <div className="flex gap-0.5 flex-shrink-0">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#B58A3A] text-[#B58A3A]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;