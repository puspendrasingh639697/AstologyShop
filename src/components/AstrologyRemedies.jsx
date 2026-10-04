import React from "react";

// ✅ Icon imports
import iconLoveMarriage from "../assets/dance.png";
import iconCareerBusiness from "../assets/success.png";
import iconHealthWellbeing from "../assets/mental-health.png";
import iconWealthProsperity from "../assets/wealth-management.png";

// 4 remedy categories
const remediesCategories = [
  { id: 1, title: "Love & Marriage", icon: iconLoveMarriage },
  { id: 2, title: "Career & Business", icon: iconCareerBusiness },
  { id: 3, title: "Health & Wellbeing", icon: iconHealthWellbeing },
  { id: 4, title: "Wealth & Prosperity", icon: iconWealthProsperity },
];

// ✅ Maroon filter for icons
const MAROON_FILTER =
  "brightness(0) saturate(100%) invert(15%) sepia(50%) saturate(1000%) hue-rotate(330deg) brightness(85%) contrast(95%)";

const AstrologyRemedies = () => {
  return (
    <section className="bg-[#F7F1E5] py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5A1F1F] tracking-wide px-2">
             Astrology Remedies
            </h2>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
            Balance your energies. Attract positivity
          </p>
        </div>

        

        {/* CARDS GRID — Compact Height */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {remediesCategories.map((item) => (
            <div
              key={item.id}
              className="group bg-[#5A1F1F]  rounded-md px-4 py-4 sm:px-5 sm:py-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:border-[#B58A3A] hover:shadow-md hover:-translate-y-0.5"
            >
              {/* ✅ Compact Icon Container */}
              <div className="w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-white border border-[#B58A3A]/30 flex items-center justify-center mb-2.5 transition-all duration-300 group-hover:border-[#B58A3A] group-hover:scale-105 overflow-hidden">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  style={{ filter: MAROON_FILTER }}
                  loading="lazy"
                />
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-white transition-colors leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AstrologyRemedies;