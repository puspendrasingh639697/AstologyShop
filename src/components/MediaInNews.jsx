import React from "react";
import bannerLogoImg from "../assets/banerlogo4.jpeg";

const MediaInNews = () => {
  return (
    <section className="w-full bg-[#F5EBDD] my-0 overflow-hidden">
      <div className="w-full">
        <img
          src={bannerLogoImg}
          alt="Background Banner"
          className="
            w-full
            h-auto
            object-contain
            block
            select-none
            pointer-events-none
          "
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default MediaInNews;