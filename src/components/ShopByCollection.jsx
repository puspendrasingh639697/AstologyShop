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
    <div className="bg-white py-4 px-4 overflow-hidden ">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl  text-[#4a2e18] tracking-wide inline-block font-semibold">
            {activeTab === "Best Sellers" ? (
              <>Bestsellers of the Month
              <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
          </div> </>
            ) : (
              <>Shop by <span className="italic font-normal">Collection</span></>
            )}
          </h2>
          
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {collectionCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer ${
                activeTab === category
                  ? "bg-gradient-to-r from-red-800 to-red-600 text-white shadow-md scale-105"
                  : "bg-white text-black border border-[#e6d0b3] hover:bg-[#fdf2f0] hover:border-[#8b3a2b]"
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