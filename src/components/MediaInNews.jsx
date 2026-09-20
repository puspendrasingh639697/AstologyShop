import React from "react";

// Top banner aur bottom icons/features ki images import ho rahi hain
import bottomBannerImg from "../assets/pop_2.webp"; 
import icon1 from "../assets/pop_1.avif";
import icon2 from "../assets/pop_3.avif";
import icon3 from "../assets/pop_6.avif";
import icon4 from "../assets/popo_5.avif";

const featureItems = [
  { id: 1, title: "Certified by Authorized Labs", desc: "Every product is tested for quality and safety, so what touches your body honours it.", image: icon1 },
  { id: 2, title: "Sacredly Sourced", desc: "Every product begins at its rightful origin, sourced through traditional channels that honour ritual, lineage, and purpose.", image: icon2 },
  { id: 3, title: "Traceable for Life", desc: "Your product's authenticity stays accessible to you always. Simply check, verify, and download your certificate whenever you need it.", image: icon3 },
  { id: 4, title: "Blessed through Sacred Rituals", desc: "Elevate your daily journey with authentic tools for spiritual awakening.", image: icon4 },
];

const MediaInNews = () => {
  return (
    <section className="bg-[#fff3df] py-6 px-0 w-full overflow-hidden border-b border-[#edd5b9]">
      <div className="w-full px-4 mx-auto text-center">

       

        {/* Bottom 4 Feature Icons / Cards Section (Screenshot Match) */}
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          {featureItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center px-2">
              
              {/* Circular Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20  flex items-center justify-center p-3 mb-4 ">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-serif font-bold text-[#4a2e18] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-black leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MediaInNews;