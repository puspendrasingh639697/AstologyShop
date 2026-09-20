import React, { useState } from "react";
import Bestsellers from "./Bestsellers";
import PujaKits from "./PujaKits";
import YantraCollection from "./YantraCollection";
import RudrakshaMalas from "./RudrakshaMalas";
import FestivalCollection from "./FestivalCollection";

// ✅ Category names API ke hisaab se correct karo
const collectionCategories = [
  "Best Sellers",
  "Puja Kits",           // API mein "Puja Kits" hai
  "Yantra",              // ✅ API mein "Yantra" hai, "Yantra Collection" nahi
  "Rudraksha & Malas",   // ✅ API mein "Rudraksha & Malas" hai
  "Festival Collections" // ✅ API mein "Festival Collections" hai (plural)
];

const ShopByCollection = () => {
  const [activeTab, setActiveTab] = useState("Best Sellers");

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Best Sellers":
        return <Bestsellers />;
      case "Puja Kits":
        return <PujaKits />;
      case "Yantra":  // ✅ Yahan bhi change karo
        return <YantraCollection />;
      case "Rudraksha & Malas":
        return <RudrakshaMalas />;
      case "Festival Collections":  // ✅ Yahan bhi change karo
        return <FestivalCollection />;
      default:
        return <Bestsellers />;
    }
  };

  return (
    <div className="bg-[#fff3df] py-16 px-4 overflow-hidden border-y border-[#edd5b9]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#4a2e18] tracking-wide inline-block font-semibold">
            {activeTab === "Best Sellers" ? (
              <>Bestsellers of <span className="italic font-normal">the Month</span></>
            ) : (
              <>Shop by <span className="italic font-normal">Collection</span></>
            )}
          </h2>
          <div className="w-16 h-[2px] bg-[#8b3a2b] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {collectionCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer ${
                activeTab === category
                  ? "bg-[#6b2314] text-white shadow-md scale-105"
                  : "bg-white text-[#4a2e18] border border-[#e6d0b3] hover:bg-[#fdf2f0] hover:border-[#8b3a2b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="transition-all duration-500">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default ShopByCollection;