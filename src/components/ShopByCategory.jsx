import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCategoryStore from "../store/useCategoryStore";

const ShopByCategory = () => {
  const navigate = useNavigate();
  const { categories, loading, error, fetchCategories } = useCategoryStore();

  // Component load hote hi backend se categories fetch hongi
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <section className="bg-[#fff3df] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#4a2e18] tracking-wide">
            Shop by Category
          </h2>
          <div className="w-24 h-[1px] bg-[#4a2e18]/30 mx-auto mt-3"></div>
        </div>

        {/* Loading & Error States */}
        {loading && <p className="text-center text-[#4a2e18] font-medium py-10">Loading categories...</p>}
        {error && <p className="text-center text-red-600 font-medium py-10">Error: {error}</p>}

        {/* Categories Grid - 4 Columns Layout */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {categories.map((item) => (
              <div 
                key={item._id} 
                onClick={() => navigate(`/category/${item.slug}`)} 
                className="group flex flex-col justify-between bg-white border border-stone-200/80 rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative w-full h-52 sm:h-60 bg-stone-50 overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={item.image} // 👈 Yahan seedha Cloudinary ka URL aayega bina localhost ke
                      alt={item.name} 
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Details Container */}
                  <div className="p-5 text-center bg-[#fff3df]">
                    <h3 className="text-sm sm:text-[15px] font-semibold text-[#4a2e18] tracking-normal uppercase line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-5 pt-0 bg-[#fff3df]">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/category/${item.slug}`);
                    }}
                    className="w-full py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-none shadow-sm bg-[#8c0a15] hover:bg-[#321e10] text-white active:scale-[0.98]"
                  >
                    Explore
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ShopByCategory;