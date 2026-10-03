// import React from "react";
// import { ArrowRight } from "lucide-react";
// import idolsImg from "../assets/Idols5.png";

// // Categories data
// const sacredCategories = [
//   {
//     id: 1,
//     title: "Chardham",
//     description: "The four abodes of God in the Himalayas – Yamunotri, Gangotri, Kedarnath, and Badrinath.",
//     image: idolsImg,
//   },
//   {
//     id: 2,
//     title: "Jyotirlinga",
//     description: "The twelve divine manifestations of Lord Shiva in the form of Jyotirlingas across India.",
//     image: idolsImg,
//   },
//   {
//     id: 3,
//     title: "Shaktipeeth",
//     description: "The sacred sites where parts of Goddess Sati's body fell, representing divine feminine energy.",
//     image: idolsImg,
//   },
//   {
//     id: 4,
//     title: "Vaikunthpeeth",
//     description: "The four abodes of God in the Himalayas – Yamunotri, Gangotri, Kedarnath, and Badrinath.",
//     image: idolsImg,
//   },
// ];

// const SpiritualBlog = () => {
//   return (
//     <section className="relative w-full bg-[#F5EBDD] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-[1400px] mx-auto">

//         {/* HEADING */}
//         <div className="text-center mb-12 sm:mb-14">
//           <div className="flex items-center justify-center gap-3 mb-2">
//             <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
//             <span className="text-[#B58A3A] text-sm">✦</span>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5A1F1F] tracking-wide px-2">
//               Explore Sacred Categories
//             </h2>
//             <span className="text-[#B58A3A] text-sm">✦</span>
//             <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
//           </div>
//           <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
//             Learn about India's most revered pilgrimage circuits
//           </p>
//         </div>

//         {/* CARDS GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
//           {sacredCategories.map((cat) => (
//             <div
//               key={cat.id}
//               className="group cursor-pointer"
//             >
//               {/* IMAGE — Full width (no padding, no rounded top) */}
//               <div className="relative w-full h-52 sm:h-60 overflow-hidden">
//                 <img
//                   src={cat.image}
//                   alt={cat.title}
//                   className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
//                 />

//                 {/* Subtle dark gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
//               </div>

//               {/* WHITE CARD — Overlap (negative margin) */}
//               <div className="-mt-16 mx-3 relative z-10 bg-white rounded-lg p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300">

//                 {/* Title */}
//                 <h3 className="text-base sm:text-lg font-bold text-[#173B32] mb-2">
//                   {cat.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-[11.5px] sm:text-xs text-[#4a4a4a] leading-relaxed mb-3">
//                   {cat.description}
//                 </p>

//                 {/* Explore Now */}
//                 <span className="text-[#1e6db8] text-[11px] sm:text-xs font-bold flex items-center gap-1 transition-all">
//                   Explore Now
//                   <ArrowRight className="w-3.5 h-3.5" />
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpiritualBlog;


import React from "react";
import { ArrowRight } from "lucide-react";
import pojakitImg from "../assets/pojakit_8.jpg";

// Categories data
const sacredCategories = [
  {
    id: 1,
    title: "Chardham",
    description: "The four abodes of God in the Himalayas – Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    image: pojakitImg,
  },
  {
    id: 2,
    title: "Jyotirlinga",
    description: "The twelve divine manifestations of Lord Shiva in the form of Jyotirlingas across India.",
    image: pojakitImg,
  },
  {
    id: 3,
    title: "Shaktipeeth",
    description: "The sacred sites where parts of Goddess Sati's body fell, representing divine feminine energy.",
    image: pojakitImg,
  },
  {
    id: 4,
    title: "Vaikunthpeeth",
    description: "The four abodes of God in the Himalayas – Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    image: pojakitImg,
  },
];

const SpiritualBlog = () => {
  return (
    <section className="relative w-full bg-[#F5EBDD] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">

        {/* =============================================
            HEADING — Same as before (✦ + lines style)
        ============================================= */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5A1F1F] tracking-wide px-2">
              Explore Sacred Blog
            </h2>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
            Learn about India's most revered pilgrimage circuits
          </p>
        </div>

        {/* =============================================
            CATEGORIES GRID — EasyDarshan Overlap Style
        ============================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

          {sacredCategories.map((cat) => (
            <div
              key={cat.id}
              className="relative cursor-pointer"
            >
              {/* ============================================
                  IMAGE — Full width, rounded corners
              ============================================ */}
              <div className="relative w-full h-52 sm:h-56 overflow-hidden rounded-2xl">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* ============================================
                  WHITE CARD — Overlap
              ============================================ */}
              <div className="-mt-14 mx-2 relative z-10 bg-white rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#5A1F1F] mb-2">
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-[11.5px] sm:text-xs text-[#4a4a4a] leading-relaxed mb-3">
                  {cat.description}
                </p>

                {/* Explore Now */}
                <span className="text-[#1e6db8] text-[11.5px] sm:text-xs font-bold flex items-center gap-1">
                  Read Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SpiritualBlog;