// // import React from "react";

// // // Top banner aur bottom icons/features ki images import ho rahi hain
// // import bottomBannerImg from "../assets/pop_2.webp"; 
// // import icon1 from "../assets/pop_1.avif";
// // import icon2 from "../assets/pop_3.avif";
// // import icon3 from "../assets/pop_6.avif";
// // import icon4 from "../assets/popo_5.avif";

// // const featureItems = [
// //   { id: 1, title: "Certified by Authorized Labs", desc: "Every product is tested for quality and safety, so what touches your body honours it.", image: icon1 },
// //   { id: 2, title: "Sacredly Sourced", desc: "Every product begins at its rightful origin, sourced through traditional channels that honour ritual, lineage, and purpose.", image: icon2 },
// //   { id: 3, title: "Traceable for Life", desc: "Your product's authenticity stays accessible to you always. Simply check, verify, and download your certificate whenever you need it.", image: icon3 },
// //   { id: 4, title: "Blessed through Sacred Rituals", desc: "Elevate your daily journey with authentic tools for spiritual awakening.", image: icon4 },
// // ];

// // const MediaInNews = () => {
// //   return (
// //     <section className="bg-[linear-gradient(120deg,#FFFFFF_0%,#FECACA_30%,#F87171_65%,#B91C1C_100%)] py-6 px-0 w-full overflow-hidden border-b border-[#edd5b9]">
// //       <div className="w-full px-4 mx-auto text-center">

       

// //         {/* Bottom 4 Feature Icons / Cards Section (Screenshot Match) */}
// //         <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
// //           {featureItems.map((item) => (
// //             <div key={item.id} className="flex flex-col items-center text-center px-2">
              
// //               {/* Circular Icon Container */}
// //               <div className="w-16 h-16 sm:w-20 sm:h-20  flex items-center justify-center p-3 mb-2 ">
// //                 <img 
// //                   src={item.image} 
// //                   alt={item.title} 
// //                   className="w-full h-full object-contain"
// //                 />
// //               </div>

// //               {/* Title */}
// //               <h3 className="text-base  font-bold text-black mb-2">
// //                 {item.title}
// //               </h3>

// //               {/* Description */}
// //               <p className="text-xs sm:text-sm text-black leading-relaxed">
// //                 {item.desc}
// //               </p>

// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };




// // export default MediaInNews;


// import React from "react";

// // ✅ Sirf banner image import
// import bannerLogoImg from "../assets/banerlogo2.png";

// const MediaInNews = () => {
//   return (
//     <section className="w-full bg-[#F5EBDD] py-6 px-4 border-y border-[#B58A3A]/20">
//       <div className="max-w-[1600px] mx-auto">
//         <div className="w-full rounded-lg overflow-hidden">
//           <img
//             src={bannerLogoImg}
//             alt="Banner"
//             className="w-full h-auto object-contain block"
//             onError={(e) => {
//               e.target.style.display = "none";
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ;


import React from "react";
import bannerLogoImg from "../assets/banerlogo2.png";


const MediaInNews  = () => {
  return (
    <section className="w-full bg-red-500 my-0">
      <div className="w-full">
        <img
          src={bannerLogoImg}
          alt="Background Banner"
          className="w-full h-[40vh] sm:h-[37vh] object-cover"
        />
      </div>
    </section>
  );
};


 export default MediaInNews;
