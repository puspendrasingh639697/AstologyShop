import React, { useState, useEffect } from "react";
import { remediesData } from "../data/remedies";
import { BiChevronLeft, BiChevronRight, BiStar } from "react-icons/bi";

const AstrologyRemedies = () => {
  const largeBannerItem = remediesData.find((item) => item.isLargeBanner) || remediesData[0];
  const gridItems = remediesData.filter((item) => !item.isLargeBanner);

  const itemsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % gridItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [gridItems.length, isPaused]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % gridItems.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? gridItems.length - 1 : prev - 1));
  };

  // Infinite loop of visible items (wrap-around)
  const visibleItems = Array.from({ length: itemsPerPage }, (_, i) => {
    return gridItems[(startIndex + i) % gridItems.length];
  });

  return (
    <section className="bg-[#fff3df] py-4 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header - CENTERED */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#4a2e18] tracking-wide">
            Astrology <span className="italic font-normal">Remedies</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#4a2e18]/30 mx-auto mt-3 mb-3"></div>
          <a 
            href="/" 
            className="inline-block text-xs font-bold text-[#8b3a2b] hover:text-[#8c0a15] uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-[#8b3a2b] pb-0.5"
          >
            View All
          </a>
        </div>

        {/* Main Layout */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Side Large Banner */}
          <div className="lg:col-span-1 group relative bg-[#8c0a15] text-white overflow-hidden shadow-lg rounded-md cursor-pointer">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full lg:min-h-[480px]">
              <img
                src={largeBannerItem.image}
                alt={largeBannerItem.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Text at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-amber-300 font-bold mb-2">
                  Featured
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold tracking-wide leading-tight">
                  {largeBannerItem.title}
                </h3>
                {largeBannerItem.subTitle && (
                  <p className="text-xs sm:text-sm text-white/80 mt-2 font-light leading-relaxed">
                    {largeBannerItem.subTitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Side Slider Container */}
          <div className="lg:col-span-3 relative">
            
            {/* Arrows - Desktop */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-red-800 border border-stone-300 w-10 h-10 rounded-full items-center justify-center shadow-md text-[#4a2e18] hover:bg-[#8c0a15] hover:text-white hover:border-[#8c0a15] transition-all duration-300"
              aria-label="Previous"
            >
              <BiChevronLeft className="text-2xl text-white" />
            </button>
            <button
              onClick={handleNext}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-red-800 border border-stone-300 w-10 h-10 rounded-full items-center justify-center shadow-md text-[#4a2e18] hover:bg-[#8c0a15] hover:text-white hover:border-[#8c0a15] transition-all duration-300"
              aria-label="Next"
            >
              <BiChevronRight className="text-2xl text-white" />
            </button>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
              {visibleItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="group flex flex-col justify-between bg-[#fff3df] border border-stone-200/80 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative w-full h-56 sm:h-60 bg-[#fff3df] overflow-hidden flex items-center justify-center p-4">
                      {item.tag && (
                        <span className="absolute top-3 left-3 z-10 bg-[#8c0a15] text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-sm uppercase shadow-sm">
                          {item.tag}
                        </span>
                      )}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Details */}
                    <div className="p-4">
                      <h4 className="text-xs sm:text-sm font-medium text-black line-clamp-2 min-h-[40px] leading-snug group-hover:text-[#8c0a15] transition-colors">
                        {item.title}
                      </h4>

                      {/* Rating */}
                      <div className="flex items-center gap-0.5 text-amber-500 text-xs mt-2">
                        {[...Array(5)].map((_, i) => (
                          <BiStar key={i} className="text-sm" />
                        ))}
                        <span className="text-stone-600 text-[10px] ml-1">(120)</span>
                      </div>

                      {/* Price */}
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <span className="font-bold text-black">
                          ₹ {item.price}
                        </span>
                        {item.oldPrice && (
                          <span className="text-stone-400 line-through text-xs font-normal">
                            ₹ {item.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows - Mobile (below grid) */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="bg-white border border-stone-300 w-10 h-10 rounded-full flex items-center justify-center shadow-sm text-[#4a2e18] hover:bg-[#8c0a15] hover:text-white transition-all"
                aria-label="Previous"
              >
                <BiChevronLeft className="text-2xl" />
              </button>
              <button
                onClick={handleNext}
                className="bg-white border border-stone-300 w-10 h-10 rounded-full flex items-center justify-center shadow-sm text-[#4a2e18] hover:bg-[#8c0a15] hover:text-white transition-all"
                aria-label="Next"
              >
                <BiChevronRight className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstrologyRemedies;