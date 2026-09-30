import React from "react";

// Only these two images needed
import logoBanner from "../assets/Logobaner.png";
import bannerImage from "../assets/pop_4.webp";

const CleanFeatureSection = () => {
  return (
    <section className="w-full bg-[#fff3df] border-y border-[#edd5b9]">

      {/* ====== TOP BANNER IMAGE (full width, edge-to-edge) ====== */}
      <div className="w-full overflow-hidden">
        <img
          src={logoBanner}
          alt="Logo Banner"
          className="w-full h-auto object-cover object-center block"
        />
      </div>

      {/* ====== BOTTOM BANNER (30% height of top) ====== */}
      <div className="w-full overflow-hidden bg-white border-y border-[#edd5b9]">
        <img
          src={bannerImage}
          alt="Authentic Community Banner"
          className="w-full h-[60px] sm:h-[85px] md:h-[105px] lg:h-[130px] object-cover object-center block"
        />
      </div>

    </section>
  );
};

export default CleanFeatureSection;