import React from "react";
import bannerLogoImg from "../assets/banerlogo6.jpeg";

const MediaInNews = () => {
  return (
    // Section ko full width kiya hai aur background white/cream rakha hai
    <section className="w-full bg-[#F5EBDD] my-0 overflow-hidden">
      <div className="w-full">
        <img
          src={bannerLogoImg}
          alt="Background Banner"
          // 🔥 Yahan w-full h-auto lagaya hai taaki image 100% width le aur bina kate puri dikhe
          className="
            w-full
            h-auto
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