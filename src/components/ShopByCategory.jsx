// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useCategoryStore from "../store/useCategoryStore";

// const ShopByCategory = () => {
//   const navigate = useNavigate();
//   const { categories, loading, error, fetchCategories } = useCategoryStore();

//   // Component load hote hi backend se categories fetch hongi
//   useEffect(() => {
//     fetchCategories();
//   }, [fetchCategories]);

//   return (
//     <section className="bg-[#fff3df] py-16 px-4 sm:px-6 lg:px-12">
//       <div className="max-w-[1400px] mx-auto">

//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#4a2e18] tracking-wide">
//             Shop by Category
//           </h2>
//           <div className="w-24 h-[1px] bg-[#4a2e18]/30 mx-auto mt-3"></div>
//         </div>

//         {/* Loading & Error States */}
//         {loading && <p className="text-center text-[#4a2e18] font-medium py-10">Loading categories...</p>}
//         {error && <p className="text-center text-red-600 font-medium py-10">Error: {error}</p>}

//         {/* Categories Grid - 4 Columns Layout */}
//         {!loading && !error && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {categories.map((item) => (
//               <div 
//                 key={item._id} 
//                 onClick={() => navigate(`/category/${item.slug}`)} 
//                 className="group flex flex-col justify-between bg-white border border-stone-200/80 rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
//               >
//                 <div>
//                   {/* Image Container */}
//                   <div className="relative w-full h-52 sm:h-60 bg-stone-50 overflow-hidden flex items-center justify-center p-4">
//                     <img 
//                       src={item.image} // 👈 Yahan seedha Cloudinary ka URL aayega bina localhost ke
//                       alt={item.name} 
//                       className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
//                     />
//                   </div>

//                   {/* Details Container */}
//                   <div className="p-5 text-center bg-[#fff3df]">
//                     <h3 className="text-sm sm:text-[15px] font-semibold text-[#4a2e18] tracking-normal uppercase line-clamp-1">
//                       {item.name}
//                     </h3>
//                     <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Action Button */}
//                 <div className="p-5 pt-0 bg-[#fff3df]">
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigate(`/category/${item.slug}`);
//                     }}
//                     className="w-full py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-none shadow-sm bg-[#8c0a15] hover:bg-[#321e10] text-white active:scale-[0.98]"
//                   >
//                     Explore
//                   </button>
//                 </div>

//               </div>
//             ))}
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

const ShopByCategory = () => {
  const navigate = useNavigate();
  const { categories, loading, error, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Duplicate array for seamless infinite loop
  const marqueeCategories = categories ? [...categories, ...categories] : [];

  return (
    <section className="bg-[#fff3df] py-4 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#4a2e18] tracking-wide">
            Shop by Category
          </h2>
          <div className="w-24 h-[1px] bg-[#4a2e18]/30 mx-auto mt-3"></div>
        </div>

        {/* Loading & Error */}
        {loading && <p className="text-center text-[#4a2e18] font-medium py-10">Loading categories...</p>}
        {error && <p className="text-center text-red-600 font-medium py-10">Error: {error}</p>}
      </div>

      {/* Infinite Marquee Row */}
      {!loading && !error && categories.length > 0 && (
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex w-max animate-marquee-left-to-right gap-6">
            {marqueeCategories.map((item, idx) => (
              <div
                key={`${item._id}-${idx}`}
                onClick={() => navigate(`/category/${item.slug}`)}
                className="group relative flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[340px] h-[200px] sm:h-[220px] lg:h-[240px] rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Full Background Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Bottom Blur/Gradient Overlay - jaisa Sanatan Sansaar me hai */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/40 to-transparent backdrop-blur-[2px]"></div>

                {/* Category Name - Bottom Left */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <h3 className="text-white sm:text-lg lg:text-xl font-serif font-semibold tracking-wide drop-shadow-md">
                    {item.name}
                  </h3>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#8c0a15]/50 transition-colors duration-500 rounded-lg pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Animation CSS */}
      <style>{`
        @keyframes marquee-left-to-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left-to-right {
          animation: marquee-left-to-right 40s linear infinite;
        }
        .animate-marquee-left-to-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ShopByCategory;