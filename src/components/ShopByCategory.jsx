

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useCategoryStore from "../store/useCategoryStore";

const ShopByCategory = () => {
  const navigate = useNavigate();
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
    <section className="py-2 sm:py-4 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ===== Heading ===== */}
        <div className="text-center mb-2 sm:mb-4">
          <h2
            
            className="inline-block text-3xl sm:text-4xl  text-black tracking-wide px-6 py-2 transition-all duration-300 cursor-pointer"
          >
            Shop by Category
          </h2>

          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
          </div>
        </div>

        {/* ===== Loading / Error ===== */}
        {loading && (
          <p className="text-center text-gray-600 font-medium py-10">
            Loading categories...
          </p>
        )}
        {error && (
          <p className="text-center text-red-600 font-medium py-10">
            Error: {error}
          </p>
        )}

        {/* ===== Slider ===== */}
        {!loading && !error && categories.length > 0 && (
          <div className="relative">

            {/* Left Arrow */}
            <button
              onClick={() => scrollByAmount("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`absolute -left-3 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-gray-600 transition-all duration-300 ${
                canScrollLeft
                  ? "opacity-100 hover:bg-gradient-to-r hover:from-red-800 hover:to-red-600 hover:text-white hover:border-transparent"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <BiChevronLeft className="text-xl" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollByAmount("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`absolute -right-3 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-gray-600 transition-all duration-300 ${
                canScrollRight
                  ? "opacity-100 hover:bg-gradient-to-r hover:from-red-800 hover:to-red-600 hover:text-white hover:border-transparent"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <BiChevronRight className="text-xl" />
            </button>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((item) => (
                <div
                  key={item._id}
                  onClick={() => navigate(`/category/${item.slug}`)}
                  className="group flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] cursor-pointer"
                >
                  {/* ===== Card with gradient border ===== */}
                  <div className="relative rounded-md  bg-transparent group-hover:bg-gradient-to-r group-hover:from-red-800 group-hover:to-red-600 transition-all duration-300 shadow-md">

                    {/* Inner Card */}
                    <div className="bg-white rounded-md overflow-hidden transition-all duration-300">

                      {/* Image */}
                      <div className="w-full aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Name - Hover par white text, gradient bg */}
                      <div className="px-2 py-2.5 sm:py-3 text-center  group-hover:bg-gradient-to-r group-hover:from-red-800 group-hover:to-red-600 transition-all duration-300">
                        <h3 className="text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-black group-hover:text-white transition-colors duration-300 line-clamp-2">
                          {item.name}
                        </h3>
                      </div>
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