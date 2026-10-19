


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useCategoryStore from "../store/useCategoryStore";

// import imgAstrology from "../assets/mental-health.png";
// import imgFestival from "../assets/hinduism.png";
// import imgGemstone from "../assets/gemstone.png";
// import imgIdols from "../assets/ganesha.png";
// import imgPuja from "../assets/puja.png";
// import imgRudraksha from "../assets/japa-mala.png";
// import imgSpiritual from "../assets/wealth-management.png";
// import imgYantra from "../assets/flower.png";
// import img9 from "../assets/chiromancy.png";
// import img10 from "../assets/mental-health.png";

// const ShopByCategory = () => {
//   const navigate = useNavigate();
//   const { fetchCategories } = useCategoryStore();
//   const [hoveredId, setHoveredId] = useState(null);

//   useEffect(() => {
//     fetchCategories();
//   }, [fetchCategories]);

//   const allCategories = [
//     { _id: "1", name: "Astrology & Remedies", slug: "astrology-remedies", image: imgAstrology },
//     { _id: "2", name: "Festival Collections", slug: "festival-collections", image: imgFestival },
//     { _id: "3", name: "Gemstones & Rudraksha", slug: "gemstones-rudraksha", image: imgGemstone },
//     { _id: "4", name: "Idols", slug: "idols", image: imgIdols },
//     { _id: "5", name: "Puja Kits & Anushthan", slug: "puja-kits-anushthan", image: imgPuja },
//     { _id: "6", name: "Rudraksha", slug: "rudraksha", image: imgRudraksha },
//     { _id: "7", name: "Spiritual Accessories & Personalized", slug: "spiritual-accessories", image: imgSpiritual },
//     { _id: "8", name: "Yantra & Idols", slug: "yantra-idols", image: imgYantra },
//     { _id: "9", name: "Chiromancy", slug: "chiromancy", image: img9 },
//     { _id: "10", name: "Mental Health", slug: "mental-health", image: img10 },
//   ];

//   const topRow = allCategories.slice(0, 5);
//   const bottomRow = allCategories.slice(5, 10);

//   // ✅ "GHAR MEIN LIGHT JALI" EFFECT
//   const CategoryCard = ({ item }) => {
//     const isHovered = hoveredId === item._id;

//     return (
//       <div
//         // onClick={() => navigate(`/category/${item.slug}`)}
//         onMouseEnter={() => setHoveredId(item._id)}
//         onMouseLeave={() => setHoveredId(null)}
//         className="group flex flex-col items-center cursor-pointer relative"
//       >
        
//         <div className="relative w-[70%] sm:w-[65%] aspect-square">

        
//           <div
//             className="absolute inset-0 rounded-full pointer-events-none transition-all duration-700"
//             style={{
//               background: isHovered
//                 ? "radial-gradient(circle, #FFD27A 0%, #FFB84D 30%, transparent 70%)"
//                 : "transparent",
//               transform: isHovered ? "scale(2.2)" : "scale(1)",
//               opacity: isHovered ? 0.55 : 0,
//               filter: "blur(20px)",
//             }}
//           />

//           {/* 💡 MID GLOW — thodi aur light */}
//           <div
//             className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500"
//             style={{
//               background: isHovered
//                 ? "radial-gradient(circle, #FFE4A8 0%, #FFC96B 40%, transparent 75%)"
//                 : "transparent",
//               transform: isHovered ? "scale(1.5)" : "scale(1)",
//               opacity: isHovered ? 0.8 : 0,
//               filter: "blur(10px)",
//             }}
//           />

//           {/* MAIN CIRCLE — yahi bulb hai */}
//           <div
//             className="relative w-full h-full rounded-full flex items-center justify-center p-1 sm:p-2 transition-all duration-500 overflow-hidden"
//             style={{
//               background: isHovered
//                 ? "radial-gradient(circle at 35% 30%, #8B3A3A 0%, #6B2626 40%, #4A1515 100%)"
//                 : "radial-gradient(circle at 35% 30%, #6B2626 0%, #5A1F1F 55%, #3D0F0F 100%)",
//               boxShadow: isHovered
//                 ? "0 0 30px 4px rgba(255, 200, 100, 0.55), 0 0 60px 8px rgba(255, 180, 80, 0.35), 0 8px 20px rgba(90, 31, 31, 0.5), inset 0 0 20px rgba(255, 220, 150, 0.35), inset 0 3px 8px rgba(255, 255, 255, 0.2)"
//                 : "0 4px 12px rgba(90, 31, 31, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.08), inset 0 -3px 8px rgba(0, 0, 0, 0.3)",
//               transform: isHovered ? "scale(1.05)" : "scale(1)",
//             }}
//           >
//             {/* 💡 INNER LIGHT RAYS — jaise bulb ke andar roshni */}
//             <div
//               className="absolute inset-0 rounded-full transition-opacity duration-700 pointer-events-none"
//               style={{
//                 background:
//                   "radial-gradient(circle at 50% 40%, rgba(255, 230, 170, 0.6) 0%, transparent 60%)",
//                 opacity: isHovered ? 1 : 0,
//               }}
//             />

//             {/* 🌟 TOP SHINE — bulb ke upar ka bright spot */}
//             <div
//               className="absolute top-[12%] left-[25%] w-[30%] h-[20%] rounded-full transition-opacity duration-700 pointer-events-none"
//               style={{
//                 background: "radial-gradient(ellipse, rgba(255, 245, 210, 0.9) 0%, transparent 70%)",
//                 filter: "blur(4px)",
//                 opacity: isHovered ? 1 : 0,
//               }}
//             />

//             {/* Gold inner ring — light on hone pe bright */}
//             <div
//               className="absolute inset-[7%] rounded-full transition-all duration-500 pointer-events-none"
//               style={{
//                 border: isHovered
//                   ? "1.5px solid rgba(255, 215, 140, 0.7)"
//                   : "1px solid rgba(181, 138, 58, 0.15)",
//                 boxShadow: isHovered ? "inset 0 0 15px rgba(255, 210, 130, 0.4)" : "none",
//               }}
//             />

//             {/* IMAGE — light on hone pe golden glow */}
//             <img
//               src={item.image}
//               alt={item.name}
//               loading="lazy"
//               className="relative z-10 w-1/2 h-1/2 object-contain transition-all duration-500"
//               style={{
//                 filter: isHovered
//                   ? "brightness(0) invert(1) drop-shadow(0 0 10px #FFD27A) drop-shadow(0 0 4px #FFE4A8)"
//                   : "brightness(0) invert(1)",
//                 transform: isHovered ? "scale(1.08)" : "scale(1)",
//               }}
//             />

//             {/* ✨ LIGHT FLICKER on hover start — jaise bulb on hote waqt */}
//             {isHovered && (
//               <div
//                 className="absolute inset-0 rounded-full pointer-events-none"
//                 style={{
//                   background: "radial-gradient(circle, rgba(255, 235, 180, 0.5) 0%, transparent 70%)",
//                   animation: "bulbFlicker 0.6s ease-out 1",
//                 }}
//               />
//             )}
//           </div>
//         </div>

//         {/* Label — light on hone pe golden */}
//         <h3
//           className="mt-3 text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-center line-clamp-2 transition-all duration-500"
//           style={{
//             color: isHovered ? "#B58A3A" : "#173B32",
//             textShadow: isHovered ? "0 0 8px rgba(255, 200, 100, 0.5)" : "none",
//           }}
//         >
//           {item.name}
//         </h3>
//       </div>
//     );
//   };

//   return (
//     <section className="py-2 sm:py-4 bg-[#F7F1E5]">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">

//         <div className="text-center mb-4 sm:mb-6">
//           <div className="flex items-center justify-center gap-3 mb-2">
//             <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
//             <span className="text-[#B58A3A] text-sm">✦</span>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5A1F1F] tracking-wide px-2">
//               Shop by Category
//             </h2>
//             <span className="text-[#B58A3A] text-sm">✦</span>
//             <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
//           </div>
//           <p>Loved by thousands. Trusted for purity</p>
//         </div>

//         <div className="space-y-1 sm:space-y-2">
//           <div className="grid grid-cols-5 gap-4 sm:gap-6">
//             {topRow.map((item) => (
//               <CategoryCard key={item._id} item={item} />
//             ))}
//           </div>

//           <div className="grid grid-cols-5 gap-4 sm:gap-6">
//             {bottomRow.map((item) => (
//               <CategoryCard key={item._id} item={item} />
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* Flicker animation — jaise bulb on hone pe ek baar blink */}
//       <style>{`
//         @keyframes bulbFlicker {
//           0% { opacity: 0; transform: scale(0.8); }
//           30% { opacity: 1; transform: scale(1.1); }
//           50% { opacity: 0.6; transform: scale(1); }
//           70% { opacity: 1; transform: scale(1.02); }
//           100% { opacity: 0.8; transform: scale(1); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ShopByCategory;



import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useCategoryStore from "../store/useCategoryStore";

import imgAstrology from "../assets/mental-health.png";
import imgFestival from "../assets/hinduism.png";
import imgGemstone from "../assets/gemstone.png";
import imgIdols from "../assets/ganesha.png";
import imgPuja from "../assets/puja.png";
import imgRudraksha from "../assets/japa-mala.png";
import imgSpiritual from "../assets/wealth-management.png";
import imgYantra from "../assets/flower.png";
import img9 from "../assets/chiromancy.png";
import img10 from "../assets/mental-health.png";

const ShopByCategory = () => {
  const navigate = useNavigate();
  const { fetchCategories } = useCategoryStore();
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const allCategories = [
    { _id: "1", name: "Divine Incense", slug: "divine-incense", image: imgAstrology },
    { _id: "2", name: "Lakshmi Ganesh", slug: "lakshmi-ganesh", image: imgFestival },
    { _id: "3", name: "Pooja Samagri", slug: "pooja-samagri", image: imgGemstone },
    { _id: "4", name: "Pure Brass Idols", slug: "pure-brass-idols", image: imgIdols },
    { _id: "5", name: "Puja Kits", slug: "puja-kits", image: imgPuja },
    { _id: "6", name: "Rudraksha", slug: "rudraksha", image: imgRudraksha },
    { _id: "7", name: "Spiritual Items", slug: "spiritual-items", image: imgSpiritual },
    { _id: "8", name: "Yantra", slug: "yantra", image: imgYantra },
    { _id: "9", name: "Chiromancy", slug: "chiromancy", image: img9 },
    { _id: "10", name: "Mental Health", slug: "mental-health", image: img10 },
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.7;
      sliderRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative group/slider">

        {/* Left Arrow Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 sm:left-2 top-[38%] -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-[#B58A3A] hover:bg-[#96702c] text-white rounded-full flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100"
          aria-label="Previous categories"
        >
          &#10094;
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 sm:right-2 top-[38%] -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-[#B58A3A] hover:bg-[#96702c] text-white rounded-full flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100"
          aria-label="Next categories"
        >
          &#10095;
        </button>

        {/* Slider Container - Scrollbar Hidden */}
        <div
          ref={sliderRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto py-2 px-6 no-scrollbar scroll-smooth"
        >
          {allCategories.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/category/${item.slug}`)}
              className="flex-shrink-0 w-[110px] sm:w-[130px] md:w-[150px] flex flex-col items-center cursor-pointer group"
            >
              {/* Image Box - Deep Maroon Gradient Background & White Icon Style */}
              <div
                className="w-full aspect-square rounded-[22px] overflow-hidden flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: "radial-gradient(circle at 35% 30%, #6B2626 0%, #5A1F1F 55%, #3D0F0F 100%)",
                  boxShadow: "0 4px 12px rgba(90, 31, 31, 0.25)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-2/3 h-2/3 object-contain transition-all duration-300"
                  style={{
                    filter: "brightness(0) invert(1)", // Icon ko white color dene ke liye
                  }}
                />
              </div>

              {/* Title Text */}
              <h3 className="mt-2.5 text-[13px] sm:text-[14px] font-medium text-gray-900 text-center leading-tight line-clamp-2 px-1">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>

      {/* Hide Scrollbar CSS */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ShopByCategory;