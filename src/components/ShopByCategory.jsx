

// // // import React, { useEffect, useRef, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// // // import useCategoryStore from "../store/useCategoryStore";

// // // const ShopByCategory = () => {
// // //   const navigate = useNavigate();
// // //   const { categories, loading, error, fetchCategories } = useCategoryStore();

// // //   const scrollRef = useRef(null);
// // //   const [canScrollLeft, setCanScrollLeft] = useState(false);
// // //   const [canScrollRight, setCanScrollRight] = useState(true);

// // //   useEffect(() => {
// // //     fetchCategories();
// // //   }, [fetchCategories]);

// // //   const scrollByAmount = (direction) => {
// // //     if (!scrollRef.current) return;
// // //     const container = scrollRef.current;
// // //     const card = container.firstChild;
// // //     const cardWidth = card?.offsetWidth || 200;
// // //     const gap = 20;
// // //     const scrollAmount = (cardWidth + gap) * 2;
// // //     container.scrollBy({
// // //       left: direction === "left" ? -scrollAmount : scrollAmount,
// // //       behavior: "smooth",
// // //     });
// // //   };

// // //   const updateScrollButtons = () => {
// // //     if (!scrollRef.current) return;
// // //     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
// // //     setCanScrollLeft(scrollLeft > 5);
// // //     setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
// // //   };

// // //   useEffect(() => {
// // //     updateScrollButtons();
// // //     const container = scrollRef.current;
// // //     if (container) {
// // //       container.addEventListener("scroll", updateScrollButtons);
// // //       window.addEventListener("resize", updateScrollButtons);
// // //     }
// // //     return () => {
// // //       if (container) container.removeEventListener("scroll", updateScrollButtons);
// // //       window.removeEventListener("resize", updateScrollButtons);
// // //     };
// // //   }, [categories]);

// // //   return (
// // //     <section className="py-2 sm:py-4 bg-white">
// // //       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

// // //         {/* ===== Heading ===== */}
// // //         <div className="text-center mb-2 sm:mb-4">
// // //           <h2
            
// // //             className="inline-block text-3xl sm:text-4xl  text-black tracking-wide px-6 py-2 transition-all duration-300 cursor-pointer"
// // //           >
// // //             Shop by Category
// // //           </h2>

// // //           <div className="flex items-center justify-center gap-3 mt-3">
// // //             <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
// // //             <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
// // //             <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
// // //           </div>
// // //         </div>

// // //         {/* ===== Loading / Error ===== */}
// // //         {loading && (
// // //           <p className="text-center text-gray-600 font-medium py-10">
// // //             Loading categories...
// // //           </p>
// // //         )}
// // //         {error && (
// // //           <p className="text-center text-red-600 font-medium py-10">
// // //             Error: {error}
// // //           </p>
// // //         )}

// // //         {/* ===== Slider ===== */}
// // //         {!loading && !error && categories.length > 0 && (
// // //           <div className="relative">

// // //             {/* Left Arrow */}
// // //             <button
// // //               onClick={() => scrollByAmount("left")}
// // //               disabled={!canScrollLeft}
// // //               aria-label="Scroll left"
// // //               className={`absolute -left-3 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-gray-600 transition-all duration-300 ${
// // //                 canScrollLeft
// // //                   ? "opacity-100 hover:bg-gradient-to-r hover:from-red-800 hover:to-red-600 hover:text-white hover:border-transparent"
// // //                   : "opacity-0 pointer-events-none"
// // //               }`}
// // //             >
// // //               <BiChevronLeft className="text-xl" />
// // //             </button>

// // //             {/* Right Arrow */}
// // //             <button
// // //               onClick={() => scrollByAmount("right")}
// // //               disabled={!canScrollRight}
// // //               aria-label="Scroll right"
// // //               className={`absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-gray-600 transition-all duration-300 ${
// // //                 canScrollRight
// // //                   ? "opacity-100 hover:bg-gradient-to-r hover:from-red-800 hover:to-red-600 hover:text-white hover:border-transparent"
// // //                   : "opacity-0 pointer-events-none"
// // //               }`}
// // //             >
// // //               <BiChevronRight className="text-xl" />
// // //             </button>

// // //             {/* Scroll Container */}
// // //             <div
// // //               ref={scrollRef}
// // //               className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
// // //             >
// // //               {categories.map((item) => (
// // //                 <div
// // //                   key={item._id}
// // //                   onClick={() => navigate(`/category/${item.slug}`)}
// // //                   className="group flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] cursor-pointer"
// // //                 >
// // //                   {/* ===== Card with gradient border ===== */}
// // //                   <div className="relative rounded-md  bg-transparent group-hover:bg-gradient-to-r group-hover:from-red-800 group-hover:to-red-600 transition-all duration-300 shadow-md">

// // //                     {/* Inner Card */}
// // //                     <div className="bg-white rounded-md overflow-hidden transition-all duration-300">

// // //                       {/* Image */}
// // //                       <div className="w-full aspect-square overflow-hidden">
// // //                         <img
// // //                           src={item.image}
// // //                           alt={item.name}
// // //                           className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
// // //                         />
// // //                       </div>

// // //                       {/* Name - Hover par white text, gradient bg */}
// // //                       <div className="px-2 py-2.5 sm:py-3 text-center  group-hover:bg-gradient-to-r group-hover:from-red-800 group-hover:to-red-600 transition-all duration-300">
// // //                         <h3 className="text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-black group-hover:text-white transition-colors duration-300 line-clamp-2">
// // //                           {item.name}
// // //                         </h3>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ShopByCategory;





// // // import React, { useEffect, useRef, useState } from "react";
// // // import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// // // import useCategoryStore from "../store/useCategoryStore";

// // // // ✅ Icon imports
// // // import iconChiromancy from "../assets/chiromancy.png";
// // // import iconFlower from "../assets/flower.png";
// // // import iconGanesha from "../assets/ganesha.png";
// // // import iconGemstone from "../assets/gemstone.png";
// // // import iconHinduism from "../assets/hinduism.png";
// // // import iconJapaMala from "../assets/japa-mala.png";
// // // import iconPisces from "../assets/pisces.png";
// // // import iconPuja from "../assets/puja.png";

// // // // ✅ Icon mapping
// // // const iconMap = {
// // //   "puja samagri": iconPuja,
// // //   "puja items": iconPuja,
// // //   "puja kit": iconPuja,
// // //   "puja kits": iconPuja,
// // //   "brass diya": iconPuja,
// // //   "diya": iconPuja,
// // //   "samagri": iconPuja,
// // //   "havan samagri": iconPuja,
// // //   "puja thali": iconPuja,
// // //   "brass idols": iconGanesha,
// // //   "idols": iconGanesha,
// // //   "idol": iconGanesha,
// // //   "murti": iconGanesha,
// // //   "ganesha": iconGanesha,
// // //   "brass idol": iconGanesha,
// // //   "god idols": iconGanesha,
// // //   "incense & dhoop": iconFlower,
// // //   "incense": iconFlower,
// // //   "dhoop": iconFlower,
// // //   "agarbatti": iconFlower,
// // //   "incense sticks": iconFlower,
// // //   "mala & spiritual": iconJapaMala,
// // //   "mala": iconJapaMala,
// // //   "rudraksha": iconJapaMala,
// // //   "rudraksha mala": iconJapaMala,
// // //   "japa mala": iconJapaMala,
// // //   "spiritual": iconJapaMala,
// // //   "prayer beads": iconJapaMala,
// // //   "yantra": iconHinduism,
// // //   "yantras": iconHinduism,
// // //   "shree yantra": iconHinduism,
// // //   "kuber yantra": iconHinduism,
// // //   "gemstones": iconGemstone,
// // //   "gemstone": iconGemstone,
// // //   "gems": iconGemstone,
// // //   "stones": iconGemstone,
// // //   "crystals": iconGemstone,
// // //   "gifting": iconFlower,
// // //   "gift": iconFlower,
// // //   "gifts": iconFlower,
// // //   "festivals": iconPisces,
// // //   "festival": iconPisces,
// // //   "festival collections": iconPisces,
// // //   "festival collection": iconPisces,
// // //   "astrology": iconChiromancy,
// // //   "remedies": iconChiromancy,
// // //   "astrology & remedies": iconChiromancy,
// // //   "astrology remedies": iconChiromancy,
// // //   "remedy": iconChiromancy,
// // //   "horoscope": iconChiromancy,
// // // };

// // // // ✅ Helper
// // // const getCategoryIcon = (name) => {
// // //   if (!name) return iconPuja;
// // //   const key = name.toLowerCase().trim();
// // //   if (iconMap[key]) return iconMap[key];
// // //   for (const k in iconMap) {
// // //     if (key.includes(k) || k.includes(key)) return iconMap[k];
// // //   }
// // //   return iconPuja;
// // // };

// // // const ShopByCategory = () => {
// // //   const { categories, loading, error, fetchCategories } = useCategoryStore();

// // //   const scrollRef = useRef(null);
// // //   const [canScrollLeft, setCanScrollLeft] = useState(false);
// // //   const [canScrollRight, setCanScrollRight] = useState(true);

// // //   useEffect(() => {
// // //     fetchCategories();
// // //   }, [fetchCategories]);

// // //   const scrollByAmount = (direction) => {
// // //     if (!scrollRef.current) return;
// // //     const container = scrollRef.current;
// // //     const card = container.firstChild;
// // //     const cardWidth = card?.offsetWidth || 200;
// // //     const gap = 20;
// // //     const scrollAmount = (cardWidth + gap) * 2;
// // //     container.scrollBy({
// // //       left: direction === "left" ? -scrollAmount : scrollAmount,
// // //       behavior: "smooth",
// // //     });
// // //   };

// // //   const updateScrollButtons = () => {
// // //     if (!scrollRef.current) return;
// // //     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
// // //     setCanScrollLeft(scrollLeft > 5);
// // //     setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
// // //   };

// // //   useEffect(() => {
// // //     updateScrollButtons();
// // //     const container = scrollRef.current;
// // //     if (container) {
// // //       container.addEventListener("scroll", updateScrollButtons);
// // //       window.addEventListener("resize", updateScrollButtons);
// // //     }
// // //     return () => {
// // //       if (container) container.removeEventListener("scroll", updateScrollButtons);
// // //       window.removeEventListener("resize", updateScrollButtons);
// // //     };
// // //   }, [categories]);

// // //   return (
// // //     <section className="py-6 sm:py-8 bg-[#F5EBDD]">
// // //       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

// // //         {/* Heading */}
// // //         <div className="text-center mb-6 sm:mb-8">
// // //           <div className="flex items-center justify-center gap-3 mb-2">
// // //             <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
// // //             <span className="text-[#B58A3A] text-sm">✦</span>
// // //             <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#173B32] tracking-wide px-2">
// // //               Shop by Category
// // //             </h2>
// // //             <span className="text-[#B58A3A] text-sm">✦</span>
// // //             <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
// // //           </div>
// // //           <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
// // //             Everything you need for your spiritual journey.
// // //           </p>
// // //         </div>

// // //         {loading && (
// // //           <p className="text-center text-[#6B5038] font-medium py-10">
// // //             Loading categories...
// // //           </p>
// // //         )}
// // //         {error && (
// // //           <p className="text-center text-[#B58A3A] font-medium py-10">
// // //             Error: {error}
// // //           </p>
// // //         )}

// // //         {!loading && !error && categories.length > 0 && (
// // //           <div className="relative">
// // //             <button
// // //               onClick={() => scrollByAmount("left")}
// // //               disabled={!canScrollLeft}
// // //               aria-label="Scroll left"
// // //               className={`absolute -left-3 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#B58A3A]/40 shadow-md text-[#173B32] transition-all duration-300 ${
// // //                 canScrollLeft
// // //                   ? "opacity-100 hover:bg-[#173B32] hover:text-[#F5EBDD] hover:border-[#173B32]"
// // //                   : "opacity-0 pointer-events-none"
// // //               }`}
// // //             >
// // //               <BiChevronLeft className="text-xl" />
// // //             </button>

// // //             <button
// // //               onClick={() => scrollByAmount("right")}
// // //               disabled={!canScrollRight}
// // //               aria-label="Scroll right"
// // //               className={`absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#B58A3A]/40 shadow-md text-[#173B32] transition-all duration-300 ${
// // //                 canScrollRight
// // //                   ? "opacity-100 hover:bg-[#173B32] hover:text-[#F5EBDD] hover:border-[#173B32]"
// // //                   : "opacity-0 pointer-events-none"
// // //               }`}
// // //             >
// // //               <BiChevronRight className="text-xl" />
// // //             </button>

// // //             <div
// // //               ref={scrollRef}
// // //               className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-3 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
// // //             >
// // //               {categories.map((item) => (
// // //                 <div
// // //                   key={item._id}
// // //                   className="group flex-shrink-0 w-[110px] sm:w-[125px] md:w-[140px] lg:w-[155px]"
// // //                 >
// // //                   <div className="flex flex-col items-center">
// // //                     <div className="w-full aspect-square bg-white rounded-lg border border-[#B58A3A]/30 p-2 flex items-center justify-center transition-all duration-500 group-hover:border-[#B58A3A] group-hover:shadow-lg">
// // //                       {/* ✅ Icon with brown/maroon filter */}
// // //                       <img
// // //                         src={getCategoryIcon(item.name)}
// // //                         alt={item.name}
// // //                         className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
// // //                         loading="lazy"
// // //                         onError={(e) => {
// // //                           e.target.src = iconPuja;
// // //                         }}
// // //                         style={{
// // //                           filter:
// // //                             "sepia(1) saturate(3) hue-rotate(-25deg) brightness(0.85)",
// // //                         }}
// // //                       />
// // //                     </div>

// // //                     <div className="flex items-center justify-center gap-1 mt-2 text-center">
// // //                       <h3 className="text-[11px] sm:text-[12px] lg:text-[13px] font-medium text-[#173B32] group-hover:text-[#B58A3A] transition-colors line-clamp-2">
// // //                         {item.name}
// // //                       </h3>
// // //                       <span className="text-[#B58A3A] text-sm">→</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ShopByCategory;


// // import React, { useEffect, useRef, useState } from "react";
// // import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// // import useCategoryStore from "../store/useCategoryStore";

// // // ✅ Icon imports
// // import iconChiromancy from "../assets/chiromancy.png";
// // import iconFlower from "../assets/flower.png";
// // import iconGanesha from "../assets/ganesha.png";
// // import iconGemstone from "../assets/gemstone.png";
// // import iconHinduism from "../assets/hinduism.png";
// // import iconJapaMala from "../assets/japa-mala.png";
// // import iconPisces from "../assets/pisces.png";
// // import iconPuja from "../assets/puja.png";

// // // ✅ Icon mapping
// // const iconMap = {
// //   "puja samagri": iconPuja,
// //   "puja items": iconPuja,
// //   "puja kit": iconPuja,
// //   "puja kits": iconPuja,
// //   "brass diya": iconPuja,
// //   "diya": iconPuja,
// //   "samagri": iconPuja,
// //   "havan samagri": iconPuja,
// //   "puja thali": iconPuja,
// //   "brass idols": iconGanesha,
// //   "idols": iconGanesha,
// //   "idol": iconGanesha,
// //   "murti": iconGanesha,
// //   "ganesha": iconGanesha,
// //   "brass idol": iconGanesha,
// //   "god idols": iconGanesha,
// //   "incense & dhoop": iconFlower,
// //   "incense": iconFlower,
// //   "dhoop": iconFlower,
// //   "agarbatti": iconFlower,
// //   "incense sticks": iconFlower,
// //   "mala & spiritual": iconJapaMala,
// //   "mala": iconJapaMala,
// //   "rudraksha": iconJapaMala,
// //   "rudraksha mala": iconJapaMala,
// //   "japa mala": iconJapaMala,
// //   "spiritual": iconJapaMala,
// //   "prayer beads": iconJapaMala,
// //   "yantra": iconHinduism,
// //   "yantras": iconHinduism,
// //   "shree yantra": iconHinduism,
// //   "kuber yantra": iconHinduism,
// //   "gemstones": iconGemstone,
// //   "gemstone": iconGemstone,
// //   "gems": iconGemstone,
// //   "stones": iconGemstone,
// //   "crystals": iconGemstone,
// //   "gifting": iconFlower,
// //   "gift": iconFlower,
// //   "gifts": iconFlower,
// //   "festivals": iconPisces,
// //   "festival": iconPisces,
// //   "festival collections": iconPisces,
// //   "festival collection": iconPisces,
// //   "astrology": iconChiromancy,
// //   "remedies": iconChiromancy,
// //   "astrology & remedies": iconChiromancy,
// //   "astrology remedies": iconChiromancy,
// //   "remedy": iconChiromancy,
// //   "horoscope": iconChiromancy,
// // };

// // // ✅ Helper
// // const getCategoryIcon = (name) => {
// //   if (!name) return iconPuja;
// //   const key = name.toLowerCase().trim();
// //   if (iconMap[key]) return iconMap[key];
// //   for (const k in iconMap) {
// //     if (key.includes(k) || k.includes(key)) return iconMap[k];
// //   }
// //   return iconPuja;
// // };

// // const ShopByCategory = () => {
// //   const { categories, loading, error, fetchCategories } = useCategoryStore();

// //   const scrollRef = useRef(null);
// //   const [canScrollLeft, setCanScrollLeft] = useState(false);
// //   const [canScrollRight, setCanScrollRight] = useState(true);

// //   useEffect(() => {
// //     fetchCategories();
// //   }, [fetchCategories]);

// //   const scrollByAmount = (direction) => {
// //     if (!scrollRef.current) return;
// //     const container = scrollRef.current;
// //     const card = container.firstChild;
// //     const cardWidth = card?.offsetWidth || 200;
// //     const gap = 20;
// //     const scrollAmount = (cardWidth + gap) * 2;
// //     container.scrollBy({
// //       left: direction === "left" ? -scrollAmount : scrollAmount,
// //       behavior: "smooth",
// //     });
// //   };

// //   const updateScrollButtons = () => {
// //     if (!scrollRef.current) return;
// //     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
// //     setCanScrollLeft(scrollLeft > 5);
// //     setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
// //   };

// //   useEffect(() => {
// //     updateScrollButtons();
// //     const container = scrollRef.current;
// //     if (container) {
// //       container.addEventListener("scroll", updateScrollButtons);
// //       window.addEventListener("resize", updateScrollButtons);
// //     }
// //     return () => {
// //       if (container) container.removeEventListener("scroll", updateScrollButtons);
// //       window.removeEventListener("resize", updateScrollButtons);
// //     };
// //   }, [categories]);

// //   return (
// //     <section className="py-6 sm:py-8 bg-[#F5EBDD]">
// //       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

// //         {/* Heading */}
// //         <div className="text-center mb-6 sm:mb-8">
// //           <div className="flex items-center justify-center gap-3 mb-2">
// //             <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
// //             <span className="text-[#5A1F1F] text-sm">✦</span>
// //             <h2 className="text-2xl sm:text-3xl md:text-4xl  text-[#5A1F1F] tracking-wide px-2">
// //               Shop by Category
// //             </h2>
// //             <span className="text-[#5A1F1F] text-sm">✦</span>
// //             <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
// //           </div>
// //           <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
// //             Everything you need for your spiritual journey.
// //           </p>
// //         </div>

// //         {loading && (
// //           <p className="text-center text-[#6B5038] font-medium py-10">
// //             Loading categories...
// //           </p>
// //         )}
// //         {error && (
// //           <p className="text-center text-[#B58A3A] font-medium py-10">
// //             Error: {error}
// //           </p>
// //         )}

// //         {!loading && !error && categories.length > 0 && (
// //           <div className="relative">
// //             <button
// //               onClick={() => scrollByAmount("left")}
// //               disabled={!canScrollLeft}
// //               aria-label="Scroll left"
// //               className={`absolute -left-3 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#B58A3A]/40 shadow-md text-[#173B32] transition-all duration-300 ${
// //                 canScrollLeft
// //                   ? "opacity-100 hover:bg-[#173B32] hover:text-[#F5EBDD] hover:border-[#173B32]"
// //                   : "opacity-0 pointer-events-none"
// //               }`}
// //             >
// //               <BiChevronLeft className="text-xl" />
// //             </button>

// //             <button
// //               onClick={() => scrollByAmount("right")}
// //               disabled={!canScrollRight}
// //               aria-label="Scroll right"
// //               className={`absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#B58A3A]/40 shadow-md text-[#173B32] transition-all duration-300 ${
// //                 canScrollRight
// //                   ? "opacity-100 hover:bg-[#173B32] hover:text-[#F5EBDD] hover:border-[#173B32]"
// //                   : "opacity-0 pointer-events-none"
// //               }`}
// //             >
// //               <BiChevronRight className="text-xl" />
// //             </button>

// //             <div
// //               ref={scrollRef}
// //               className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-3 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
// //             >
// //               {categories.map((item) => (
// //                 <div
// //                   key={item._id}
// //                   className="group flex-shrink-0 w-[110px] sm:w-[125px] md:w-[140px] lg:w-[155px]"
// //                 >
// //                   <div className="flex flex-col items-center">
// //                     <div className="w-full aspect-squarebg-[#F5EBDD]   p-2 flex items-center justify-center transition-all duration-500 group-hover:border-[#B58A3A] group-hover:shadow-lg">
// //                       {/* ✅ GOLD Icon Filter — black/brown → gold */}
// //                       <img
// //                         src={getCategoryIcon(item.name)}
// //                         alt={item.name}
// //                         className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
// //                         loading="lazy"
// //                         onError={(e) => {
// //                           e.target.src = iconPuja;
// //                         }}
// //                         style={{
// //                           filter:
// //                             "brightness(0) saturate(100%) invert(60%) sepia(64%) saturate(561%) hue-rotate(2deg) brightness(93%) contrast(87%)",
// //                         }}
// //                       />
// //                     </div>

// //                     <div className="flex items-center justify-center gap-1 mt-2 text-center">
// //                       <h3 className="text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-[#173B32] group-hover:text-[#B58A3A] transition-colors line-clamp-2">
// //                         {item.name}
// //                       </h3>
                      
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ShopByCategory;


// import React, { useEffect, useRef, useState } from "react";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import useCategoryStore from "../store/useCategoryStore";

// // ✅ Icon imports
// import iconChiromancy from "../assets/chiromancy.png";
// import iconFlower from "../assets/flower.png";
// import iconGanesha from "../assets/ganesha.png";
// import iconGemstone from "../assets/gemstone.png";
// import iconHinduism from "../assets/hinduism.png";
// import iconJapaMala from "../assets/japa-mala.png";
// import iconPisces from "../assets/pisces.png";
// import iconPuja from "../assets/puja.png";

// // ✅ Icon mapping
// const iconMap = {
//   "puja samagri": iconPuja,
//   "puja items": iconPuja,
//   "puja kit": iconPuja,
//   "puja kits": iconPuja,
//   "brass diya": iconPuja,
//   "diya": iconPuja,
//   "samagri": iconPuja,
//   "havan samagri": iconPuja,
//   "puja thali": iconPuja,
//   "brass idols": iconGanesha,
//   "idols": iconGanesha,
//   "idol": iconGanesha,
//   "murti": iconGanesha,
//   "ganesha": iconGanesha,
//   "brass idol": iconGanesha,
//   "god idols": iconGanesha,
//   "incense & dhoop": iconFlower,
//   "incense": iconFlower,
//   "dhoop": iconFlower,
//   "agarbatti": iconFlower,
//   "incense sticks": iconFlower,
//   "mala & spiritual": iconJapaMala,
//   "mala": iconJapaMala,
//   "rudraksha": iconJapaMala,
//   "rudraksha mala": iconJapaMala,
//   "japa mala": iconJapaMala,
//   "spiritual": iconJapaMala,
//   "prayer beads": iconJapaMala,
//   "yantra": iconHinduism,
//   "yantras": iconHinduism,
//   "shree yantra": iconHinduism,
//   "kuber yantra": iconHinduism,
//   "gemstones": iconGemstone,
//   "gemstone": iconGemstone,
//   "gems": iconGemstone,
//   "stones": iconGemstone,
//   "crystals": iconGemstone,
//   "gifting": iconFlower,
//   "gift": iconFlower,
//   "gifts": iconFlower,
//   "festivals": iconPisces,
//   "festival": iconPisces,
//   "festival collections": iconPisces,
//   "festival collection": iconPisces,
//   "astrology": iconChiromancy,
//   "remedies": iconChiromancy,
//   "astrology & remedies": iconChiromancy,
//   "astrology remedies": iconChiromancy,
//   "remedy": iconChiromancy,
//   "horoscope": iconChiromancy,
// };

// // ✅ Helper
// const getCategoryIcon = (name) => {
//   if (!name) return iconPuja;
//   const key = name.toLowerCase().trim();
//   if (iconMap[key]) return iconMap[key];
//   for (const k in iconMap) {
//     if (key.includes(k) || k.includes(key)) return iconMap[k];
//   }
//   return iconPuja;
// };

// const ShopByCategory = () => {
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
//     <section className="py-6 sm:py-8 bg-[#F5EBDD]">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

//         {/* Heading */}
//         <div className="text-center mb-6 sm:mb-8">
//           <div className="flex items-center justify-center gap-3 mb-2">
//             <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#5A1F1F]"></span>
//             <span className="text-[#5A1F1F] text-sm">✦</span>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#5A1F1F] tracking-wide px-2">
//               Shop by Category
//             </h2>
//             <span className="text-[#5A1F1F] text-sm">✦</span>
//             <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#5A1F1F]"></span>
//           </div>
//           <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
//             Everything you need for your spiritual journey.
//           </p>
//         </div>

//         {loading && (
//           <p className="text-center text-[#6B5038] font-medium py-10">
//             Loading categories...
//           </p>
//         )}
//         {error && (
//           <p className="text-center text-[#5A1F1F] font-medium py-10">
//             Error: {error}
//           </p>
//         )}

//         {!loading && !error && categories.length > 0 && (
//           <div className="relative">
//             <button
//               onClick={() => scrollByAmount("left")}
//               disabled={!canScrollLeft}
//               aria-label="Scroll left"
//               className={`absolute -left-3 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#5A1F1F]/40 shadow-md text-[#5A1F1F] transition-all duration-300 ${
//                 canScrollLeft
//                   ? "opacity-100 hover:bg-[#5A1F1F] hover:text-[#F5EBDD] hover:border-[#5A1F1F]"
//                   : "opacity-0 pointer-events-none"
//               }`}
//             >
//               <BiChevronLeft className="text-xl" />
//             </button>

//             <button
//               onClick={() => scrollByAmount("right")}
//               disabled={!canScrollRight}
//               aria-label="Scroll right"
//               className={`absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#5A1F1F]/40 shadow-md text-[#5A1F1F] transition-all duration-300 ${
//                 canScrollRight
//                   ? "opacity-100 hover:bg-[#5A1F1F] hover:text-[#F5EBDD] hover:border-[#5A1F1F]"
//                   : "opacity-0 pointer-events-none"
//               }`}
//             >
//               <BiChevronRight className="text-xl" />
//             </button>

//             <div
//               ref={scrollRef}
//               className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-3 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//             >
//               {categories.map((item) => (
//                 <div
//                   key={item._id}
//                   className="group flex-shrink-0 w-[110px] sm:w-[125px] md:w-[140px] lg:w-[155px]"
//                 >
//                   <div className="flex flex-col items-center">
//                     <div className="w-full aspect-square p-2 flex items-center justify-center transition-all duration-500">
//                       {/* ✅ Icon color: #5A1F1F */}
//                       <img
//                         src={getCategoryIcon(item.name)}
//                         alt={item.name}
//                         className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
//                         loading="lazy"
//                         onError={(e) => {
//                           e.target.src = iconPuja;
//                         }}
//                         style={{
//                           filter:
//                             "brightness(0) saturate(100%) invert(15%) sepia(50%) saturate(1000%) hue-rotate(330deg) brightness(85%) contrast(95%)",
//                         }}
//                       />
//                     </div>

//                     <div className="flex items-center justify-center gap-1 mt-2 text-center">
//                       <h3 className="text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-[#5A1F1F] group-hover:text-[#B58A3A] transition-colors line-clamp-2">
//                         {item.name}
//                       </h3>
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

// import React, { useEffect } from "react";
// import useCategoryStore from "../store/useCategoryStore";

// // ✅ Icon imports (Aapke diye hue exact paths ke hisaab se)
// import iconFlower from "../assets/flower.png";
// import iconGanesha from "../assets/ganesha.png";
// import iconGemstone from "../assets/gemstone.png";
// import iconHinduism from "../assets/hinduism.png";
// import iconJapaMala from "../assets/japa-mala.png";
// import iconMentalHealth from "../assets/mental-health.png";
// import iconPuja from "../assets/puja.png";
// import iconWealthManagement from "../assets/wealth-management.png";

// // ✅ Exact Mapping (Jo aapne bola waisa hi)
// const iconMap = {
//   "yantra & idols": iconFlower,
//   "yantra and idols": iconFlower,
//   "idols": iconGanesha,
//   "idol": iconGanesha,
//   "gemstones": iconGemstone,
//   "gemstone": iconGemstone,
//   "festival collections": iconHinduism,
//   "festival collection": iconHinduism,
//   "rudraksha": iconJapaMala,
//   "astrology & remedies": iconMentalHealth,
//   "astrology and remedies": iconMentalHealth,
//   "puja kits & anushthan": iconPuja,
//   "puja kits and anushthan": iconPuja,
//   "spiritual accessories & personalized": iconWealthManagement,
//   "spiritual accessories and personalized": iconWealthManagement,
// };

// // ✅ Helper (Exact match pehle, phir includes check)
// const getCategoryIcon = (name) => {
//   if (!name) return iconPuja;
//   const key = name.toLowerCase().trim();
  
//   // 1. Exact match
//   if (iconMap[key]) return iconMap[key];
  
//   // 2. Partial match (agar naam thoda alag ho)
//   for (const k in iconMap) {
//     if (key.includes(k) || k.includes(key)) return iconMap[k];
//   }
  
//   // 3. Fallback
//   return iconPuja;
// };

// const ShopByCategory = () => {
//   const { categories, loading, error, fetchCategories } = useCategoryStore();

//   useEffect(() => {
//     fetchCategories();
//   }, [fetchCategories]);

//   // ✅ Duplicate remove logic (image ke base par)
//   const uniqueCategories = categories.filter(
//     (item, index, self) =>
//       index === self.findIndex((t) => t.image === item.image)
//   );

//   // ✅ Upar 5 aur neeche 5 (total 10) categories
//   const topRow = uniqueCategories.slice(0, 5);    // First 5
//   const bottomRow = uniqueCategories.slice(5, 10); // Next 5

//   // ✅ Single category card component
//   const CategoryCard = ({ item }) => (
//     <div className="group flex flex-col items-center cursor-pointer">
//       <div className="w-full aspect-square bg-[#F5EBDD] p-2 flex items-center justify-center transition-all duration-500">
//         {/* ✅ Original color image (No filter) */}
//         <img
//           src={getCategoryIcon(item.name)}
//           alt={item.name}
//           className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
//           loading="lazy"
//           onError={(e) => {
//             e.target.src = iconPuja;
//           }}
//         />
//       </div>
//       <h3 className="mt-2 text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-[#5A1F1F] group-hover:text-[#B58A3A] transition-colors text-center line-clamp-2">
//         {item.name}
//       </h3>
//     </div>
//   );

//   return (
//     <section className="py-6 sm:py-8 bg-[#F5EBDD]">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

//         {/* Heading */}
//         <div className="text-center mb-6 sm:mb-8">
//           <div className="flex items-center justify-center gap-3 mb-2">
//             <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#5A1F1F]"></span>
//             <span className="text-[#5A1F1F] text-sm">✦</span>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#5A1F1F] tracking-wide px-2">
//               Shop by Category
//             </h2>
//             <span className="text-[#5A1F1F] text-sm">✦</span>
//             <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#5A1F1F]"></span>
//           </div>
//           <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
//             Everything you need for your spiritual journey.
//           </p>
//         </div>

//         {loading && (
//           <p className="text-center text-[#6B5038] font-medium py-10">
//             Loading categories...
//           </p>
//         )}
//         {error && (
//           <p className="text-center text-[#5A1F1F] font-medium py-10">
//             Error: {error}
//           </p>
//         )}

//         {/* ✅ Grid: 5 upar + 5 neeche */}
//         {!loading && !error && uniqueCategories.length > 0 && (
//           <div className="space-y-6 sm:space-y-8">

//             {/* Top Row: 5 items */}
//             <div className="grid grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
//               {topRow.map((item) => (
//                 <CategoryCard key={item._id} item={item} />
//               ))}
//             </div>

//             {/* Bottom Row: 5 items */}
//             {bottomRow.length > 0 && (
//               <div className="grid grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
//                 {bottomRow.map((item) => (
//                   <CategoryCard key={item._id} item={item} />
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ShopByCategory;


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCategoryStore from "../store/useCategoryStore";

// ✅ Aapki saari local images (assets folder se)
import imgAstrology from "../assets/mental-health.png";
import imgFestival from "../assets/hinduism.png";
import imgGemstone from "../assets/gemstone.png";
import imgIdols from "../assets/ganesha.png";
import imgPuja from "../assets/puja.png";
import imgRudraksha from "../assets/japa-mala.png";
import imgSpiritual from "../assets/wealth-management.png";
import imgYantra from "../assets/flower.png";
import img9 from "../assets/chiromancy.png";    // ✅ 9 wali image
import img10 from "../assets/mental-health.png"; // ✅ 10 wali image

const ShopByCategory = () => {
  const navigate = useNavigate();
  const { fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // ✅ Sirf local images (API ki koi image nahi)
  const allCategories = [
    { _id: "1", name: "Astrology & Remedies", slug: "astrology-remedies", image: imgAstrology },
    { _id: "2", name: "Festival Collections", slug: "festival-collections", image: imgFestival },
    { _id: "3", name: "Gemstones & Rudraksha", slug: "gemstones-rudraksha", image: imgGemstone },
    { _id: "4", name: "Idols", slug: "idols", image: imgIdols },
    { _id: "5", name: "Puja Kits & Anushthan", slug: "puja-kits-anushthan", image: imgPuja },
    { _id: "6", name: "Rudraksha", slug: "rudraksha", image: imgRudraksha },
    { _id: "7", name: "Spiritual Accessories & Personalized", slug: "spiritual-accessories", image: imgSpiritual },
    { _id: "8", name: "Yantra & Idols", slug: "yantra-idols", image: imgYantra },
    { _id: "9", name: "Chiromancy", slug: "chiromancy", image: img9 },          // ✅ 9
    { _id: "10", name: "Mental Health", slug: "mental-health", image: img10 },  // ✅ 10
  ];

  const topRow = allCategories.slice(0, 5);
  const bottomRow = allCategories.slice(5, 10);

  // ✅ Card component
  const CategoryCard = ({ item }) => (
    <div
      onClick={() => navigate(`/category/${item.slug}`)}
      className="group flex flex-col items-center cursor-pointer"
    >
      {/* ✅ Round White BG — Image andar fit */}
      <div className="w-full aspect-square rounded-full bg-[#5A1F1F] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 group-hover:scale-105">
  <img
    src={item.image}
    alt={item.name}
    className="w-3/4 h-3/4 object-contain"
    loading="lazy"
    style={{
      filter: "brightness(0) invert(1)", // ✅ Image ko white kar dega
    }}
  />
</div>

      <h3 className="mt-3 text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-[#173B32] group-hover:text-[#B58A3A] transition-colors duration-300 text-center line-clamp-2">
        {item.name}
      </h3>
    </div>
  );

  return (
    <section className="py-4 sm:py-6 bg-[#F5EBDD">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">

        <div className="text-center mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5A1F1F] tracking-wide px-2">
              Shop by Category
            </h2>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
          </div>
         
        </div>

        {/* Heading */}
        {/* <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#173B32] tracking-wide">
            Shop by Category
          </h2>

          
          
        </div> */}

        {/* ✅ Grid: 5 upar + 5 neeche */}
        <div className="space-y-6 sm:space-y-8">
          {/* Top Row */}
          <div className="grid grid-cols-5 gap-4 sm:gap-6">
            {topRow.map((item) => (
              <CategoryCard key={item._id} item={item} />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-5 gap-4 sm:gap-6">
            {bottomRow.map((item) => (
              <CategoryCard key={item._id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShopByCategory;