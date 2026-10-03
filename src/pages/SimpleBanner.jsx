import React from "react";
import bgBanner from "../assets/bgbaner.png";

const SimpleBanner = () => {
  return (
    <section className="w-full bg-red-500 my-0">
      <div className="w-full">
        <img
          src={bgBanner}
          alt="Background Banner"
          className="w-full h-[30vh] sm:h-[40vh] object-cover"
        />
      </div>
    </section>
  );
};

export default SimpleBanner;