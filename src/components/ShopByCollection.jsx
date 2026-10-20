

import React, { useState, useRef, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import Bestsellers from "./Bestsellers";
import PujaKits from "./PujaKits";
import YantraCollection from "./YantraCollection";
import RudrakshaMalas from "./RudrakshaMalas";
import FestivalCollection from "./FestivalCollection";

const collectionCategories = [
  "Best Sellers",
  "Puja Kits",
  "Yantra",
  "Rudraksha & Malas",
  "Festival Collections",
];

const ShopByCollection = () => {
  const [activeTab, setActiveTab] = useState("Best Sellers");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Best Sellers":
        return <Bestsellers />;
      case "Puja Kits":
        return <PujaKits />;
      case "Yantra":
        return <YantraCollection />;
      case "Rudraksha & Malas":
        return <RudrakshaMalas />;
      case "Festival Collections":
        return <FestivalCollection />;
      default:
        return <Bestsellers />;
    }
  };

  return (
    <div className="bg-white py-8 px-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADING ROW */}
        <div className="relative mb-6 sm:mb-8 z-[9999]">

          {/* HEADING — CENTER */}
          <div className="text-center">
            {activeTab === "Best Sellers" ? (
              <>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5A1F1F] tracking-wide">
                  Bestsellers of the Month
                </h2>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <span className="w-12 h-[1px] bg-gradient-to-r from-[#5A1F1F] to-transparent"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A1F1F]"></span>
                  <span className="w-12 h-[1px] bg-gradient-to-l from-[#5A1F1F] to-transparent"></span>
                </div>
              </>
            ) : (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5A1F1F] tracking-wide">
                Shop by{" "}
                <span className="italic font-normal text-[#B58A3A]">
                  {activeTab}
                </span>
              </h2>
            )}
            <p className="text-xs sm:text-sm text-[#6B5038] mt-2">
              {activeTab === "Best Sellers"
                ? "Loved by thousands. Trusted for purity."
                : `Explore our curated ${activeTab.toLowerCase()} collection.`}
            </p>
          </div>

          {/* FILTER — RIGHT with HIGH z-index */}
          <div
            className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex justify-end mt-4 lg:mt-0 z-[9999]"
            ref={dropdownRef}
          >
            <div className="relative z-[9999]">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#5A1F1F]/40 rounded-md text-sm font-medium text-[#5A1F1F] hover:border-[#5A1F1F] transition-colors min-w-[200px] justify-between relative z-[9999]"
              >
                <span className="flex items-center gap-2">
                  <span className="text-[#5A1F1F] text-xs uppercase tracking-wider">
                    Filter:
                  </span>
                  {activeTab}
                </span>
                <BiChevronDown
                  className={`text-lg text-[#5A1F1F] transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown — HIGH z-index */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-full min-w-[220px] bg-white border border-[#5A1F1F]/30 rounded-md shadow-xl z-[9999] overflow-hidden">
                  {collectionCategories.map((category, index) => {
                    const isActive = activeTab === category;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveTab(category);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          isActive
                            ? "text-[#5A1F1F] font-bold bg-[#5A1F1F]/5"
                            : "text-[#6B5038] hover:bg-[#5A1F1F]/10 hover:text-[#5A1F1F]"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="transition-all duration-500 relative z-0">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default ShopByCollection;