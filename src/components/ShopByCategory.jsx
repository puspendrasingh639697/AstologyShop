

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import useCategoryStore from "../store/useCategoryStore";

// const ShopByCategory = () => {
//   const navigate = useNavigate();
//   const { categories, loading, error, fetchCategories } = useCategoryStore();

//   const scrollRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   useEffect(() => {
//     fetchCategories();
//   }, [fetchCategories]);

//   const scrollByAmount = (direction) => {
//     if (!scrollRef.current) return;
//     const container = scrollRef.current;
//     const card = container.firstChild;
//     const cardWidth = card?.offsetWidth || 200;
//     const gap = 20;
//     const scrollAmount = (cardWidth + gap) * 2;
//     container.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   const updateScrollButtons = () => {
//     if (!scrollRef.current) return;
//     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//     setCanScrollLeft(scrollLeft > 5);
//     setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
//   };

//   useEffect(() => {
//     updateScrollButtons();
//     const container = scrollRef.current;
//     if (container) {
//       container.addEventListener("scroll", updateScrollButtons);
//       window.addEventListener("resize", updateScrollButtons);
//     }
//     return () => {
//       if (container) container.removeEventListener("scroll", updateScrollButtons);
//       window.removeEventListener("resize", updateScrollButtons);
//     };
//   }, [categories]);

//   return (
//     <section className="py-2 sm:py-4 bg-white">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

//         {/* ===== Heading ===== */}
//         <div className="text-center mb-2 sm:mb-4">
//           <h2
            
//             className="inline-block text-3xl sm:text-4xl  text-black tracking-wide px-6 py-2 transition-all duration-300 cursor-pointer"
//           >
//             Shop by Category
//           </h2>

//           <div className="flex items-center justify-center gap-3 mt-3">
//             <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
//             <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
//             <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
//           </div>
//         </div>

//         {/* ===== Loading / Error ===== */}
//         {loading && (
//           <p className="text-center text-gray-600 font-medium py-10">
//             Loading categories...
//           </p>
//         )}
//         {error && (
//           <p className="text-center text-red-600 font-medium py-10">
//             Error: {error}
//           </p>
//         )}

//         {/* ===== Slider ===== */}
//         {!loading && !error && categories.length > 0 && (
//           <div className="relative">

//             {/* Left Arrow */}
//             <button
//               onClick={() => scrollByAmount("left")}
//               disabled={!canScrollLeft}
//               aria-label="Scroll left"
//               className={`absolute -left-3 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-gray-600 transition-all duration-300 ${
//                 canScrollLeft
//                   ? "opacity-100 hover:bg-gradient-to-r hover:from-red-800 hover:to-red-600 hover:text-white hover:border-transparent"
//                   : "opacity-0 pointer-events-none"
//               }`}
//             >
//               <BiChevronLeft className="text-xl" />
//             </button>

//             {/* Right Arrow */}
//             <button
//               onClick={() => scrollByAmount("right")}
//               disabled={!canScrollRight}
//               aria-label="Scroll right"
//               className={`absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-gray-600 transition-all duration-300 ${
//                 canScrollRight
//                   ? "opacity-100 hover:bg-gradient-to-r hover:from-red-800 hover:to-red-600 hover:text-white hover:border-transparent"
//                   : "opacity-0 pointer-events-none"
//               }`}
//             >
//               <BiChevronRight className="text-xl" />
//             </button>

//             {/* Scroll Container */}
//             <div
//               ref={scrollRef}
//               className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//             >
//               {categories.map((item) => (
//                 <div
//                   key={item._id}
//                   onClick={() => navigate(`/category/${item.slug}`)}
//                   className="group flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] cursor-pointer"
//                 >
//                   {/* ===== Card with gradient border ===== */}
//                   <div className="relative rounded-md  bg-transparent group-hover:bg-gradient-to-r group-hover:from-red-800 group-hover:to-red-600 transition-all duration-300 shadow-md">

//                     {/* Inner Card */}
//                     <div className="bg-white rounded-md overflow-hidden transition-all duration-300">

//                       {/* Image */}
//                       <div className="w-full aspect-square overflow-hidden">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
//                         />
//                       </div>

//                       {/* Name - Hover par white text, gradient bg */}
//                       <div className="px-2 py-2.5 sm:py-3 text-center  group-hover:bg-gradient-to-r group-hover:from-red-800 group-hover:to-red-600 transition-all duration-300">
//                         <h3 className="text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-black group-hover:text-white transition-colors duration-300 line-clamp-2">
//                           {item.name}
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ShopByCategory;





import React, { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useCategoryStore from "../store/useCategoryStore";

// ✅ Icon imports
import iconChiromancy from "../assets/chiromancy.png";
import iconFlower from "../assets/flower.png";
import iconGanesha from "../assets/ganesha.png";
import iconGemstone from "../assets/gemstone.png";
import iconHinduism from "../assets/hinduism.png";
import iconJapaMala from "../assets/japa-mala.png";
import iconPisces from "../assets/pisces.png";
import iconPuja from "../assets/puja.png";

// ✅ Icon mapping
const iconMap = {
  "puja samagri": iconPuja,
  "puja items": iconPuja,
  "puja kit": iconPuja,
  "puja kits": iconPuja,
  "brass diya": iconPuja,
  "diya": iconPuja,
  "samagri": iconPuja,
  "havan samagri": iconPuja,
  "puja thali": iconPuja,
  "brass idols": iconGanesha,
  "idols": iconGanesha,
  "idol": iconGanesha,
  "murti": iconGanesha,
  "ganesha": iconGanesha,
  "brass idol": iconGanesha,
  "god idols": iconGanesha,
  "incense & dhoop": iconFlower,
  "incense": iconFlower,
  "dhoop": iconFlower,
  "agarbatti": iconFlower,
  "incense sticks": iconFlower,
  "mala & spiritual": iconJapaMala,
  "mala": iconJapaMala,
  "rudraksha": iconJapaMala,
  "rudraksha mala": iconJapaMala,
  "japa mala": iconJapaMala,
  "spiritual": iconJapaMala,
  "prayer beads": iconJapaMala,
  "yantra": iconHinduism,
  "yantras": iconHinduism,
  "shree yantra": iconHinduism,
  "kuber yantra": iconHinduism,
  "gemstones": iconGemstone,
  "gemstone": iconGemstone,
  "gems": iconGemstone,
  "stones": iconGemstone,
  "crystals": iconGemstone,
  "gifting": iconFlower,
  "gift": iconFlower,
  "gifts": iconFlower,
  "festivals": iconPisces,
  "festival": iconPisces,
  "festival collections": iconPisces,
  "festival collection": iconPisces,
  "astrology": iconChiromancy,
  "remedies": iconChiromancy,
  "astrology & remedies": iconChiromancy,
  "astrology remedies": iconChiromancy,
  "remedy": iconChiromancy,
  "horoscope": iconChiromancy,
};

// ✅ Helper
const getCategoryIcon = (name) => {
  if (!name) return iconPuja;
  const key = name.toLowerCase().trim();
  if (iconMap[key]) return iconMap[key];
  for (const k in iconMap) {
    if (key.includes(k) || k.includes(key)) return iconMap[k];
  }
  return iconPuja;
};

const ShopByCategory = () => {
  const { categories, loading, error, fetchCategories } = useCategoryStore();

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const scrollByAmount = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.firstChild;
    const cardWidth = card?.offsetWidth || 200;
    const gap = 20;
    const scrollAmount = (cardWidth + gap) * 2;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
    }
    return () => {
      if (container) container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [categories]);

  return (
    <section className="py-6 sm:py-8 bg-[#F5EBDD]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#173B32] tracking-wide px-2">
              Shop by Category
            </h2>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
            Everything you need for your spiritual journey.
          </p>
        </div>

        {loading && (
          <p className="text-center text-[#6B5038] font-medium py-10">
            Loading categories...
          </p>
        )}
        {error && (
          <p className="text-center text-[#B58A3A] font-medium py-10">
            Error: {error}
          </p>
        )}

        {!loading && !error && categories.length > 0 && (
          <div className="relative">
            <button
              onClick={() => scrollByAmount("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`absolute -left-3 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#B58A3A]/40 shadow-md text-[#173B32] transition-all duration-300 ${
                canScrollLeft
                  ? "opacity-100 hover:bg-[#173B32] hover:text-[#F5EBDD] hover:border-[#173B32]"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <BiChevronLeft className="text-xl" />
            </button>

            <button
              onClick={() => scrollByAmount("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#B58A3A]/40 shadow-md text-[#173B32] transition-all duration-300 ${
                canScrollRight
                  ? "opacity-100 hover:bg-[#173B32] hover:text-[#F5EBDD] hover:border-[#173B32]"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <BiChevronRight className="text-xl" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-3 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((item) => (
                <div
                  key={item._id}
                  className="group flex-shrink-0 w-[110px] sm:w-[125px] md:w-[140px] lg:w-[155px]"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-full aspect-square bg-white rounded-lg border border-[#B58A3A]/30 p-2 flex items-center justify-center transition-all duration-500 group-hover:border-[#B58A3A] group-hover:shadow-lg">
                      {/* ✅ Icon with brown/maroon filter */}
                      <img
                        src={getCategoryIcon(item.name)}
                        alt={item.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = iconPuja;
                        }}
                        style={{
                          filter:
                            "sepia(1) saturate(3) hue-rotate(-25deg) brightness(0.85)",
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-center gap-1 mt-2 text-center">
                      <h3 className="text-[11px] sm:text-[12px] lg:text-[13px] font-medium text-[#173B32] group-hover:text-[#B58A3A] transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                      <span className="text-[#B58A3A] text-sm">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopByCategory;