


// import heroImg from "../assets/PujaSamagribaner1.jpeg";

// function HeroSection() {
//   return (
//     <section className="relative w-full overflow-hidden">
//       <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] max-h-[250px]">
//         <img
//           src={heroImg}
//           alt="Hero Banner"
//           className="w-full h-full object-cover object-center shadow-md"
//         />
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import apiClient from '../config/apiClient';   // ✅ Path check karo

// // const HeroSection = () => {
// //   const [banners, setBanners] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // ✅ Fetch hero banners
// //   useEffect(() => {
// //     const fetchBanners = async () => {
// //       try {
// //         console.log('🔍 Fetching hero banners...');

// //         const res = await apiClient.get('/banners/active?position=hero');

// //         console.log('✅ Banners response:', res.data);

// //         if (res.data.success) {
// //           setBanners(res.data.banners || []);
// //         }
// //       } catch (err) {
// //         console.error('❌ Banners fetch error:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchBanners();
// //   }, []);

// //   // ✅ Auto-slide (agar 1 se zyada banners hain)
// //   useEffect(() => {
// //     if (banners.length <= 1) return;

// //     const timer = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % banners.length);
// //     }, 5000);

// //     return () => clearInterval(timer);
// //   }, [banners.length]);

// //   // ✅ Loading
// //   if (loading) {
// //     return (
// //       <section className="relative w-full overflow-hidden bg-stone-100">
// //         <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] max-h-[550px] flex items-center justify-center">
// //           <div className="w-10 h-10 border-4 border-[#8c0a15] border-t-transparent rounded-full animate-spin"></div>
// //         </div>
// //       </section>
// //     );
// //   }

// //   // ✅ Agar koi banner nahi hai, toh default fallback
// //   if (banners.length === 0) {
// //     return (
// //       <section className="relative w-full overflow-hidden bg-[#fff3df]">
// //         <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] max-h-[550px] flex items-center justify-center">
// //           <div className="text-center">
// //             <h2 className="text-2xl font-serif font-bold text-[#4a2e18]">
// //               Welcome to PujaHetu
// //             </h2>
// //             <p className="text-sm text-stone-600 mt-2">
// //               No banners available
// //             </p>
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section className="relative w-full overflow-hidden group">
// //       {/* ✅ Banner Container */}
// //       <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] max-h-[550px] relative">
// //         {banners.map((banner, idx) => (
// //           <div
// //             key={banner._id}
// //             className={`absolute inset-0 transition-opacity duration-700 ${
// //               idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
// //             }`}
// //           >
// //             {/* ✅ Image */}
// //             <img
// //               src={banner.image}
// //               alt={banner.title}
// //               className="w-full h-full object-cover object-center"
// //               onError={(e) => {
// //                 e.target.src =
// //                   'https://via.placeholder.com/1200x400?text=Banner';
// //               }}
// //             />

// //             {/* ✅ Overlay (optional — agar title/subtitle dikhana hai) */}
// //             {(banner.title || banner.subtitle || banner.link) && (
// //               <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
// //                 <div className="pl-8 sm:pl-12 lg:pl-20 max-w-2xl text-white">
// //                   {banner.title && (
// //                     <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold mb-2">
// //                       {banner.title}
// //                     </h1>
// //                   )}
// //                   {banner.subtitle && (
// //                     <p className="text-sm sm:text-base lg:text-lg mb-4">
// //                       {banner.subtitle}
// //                     </p>
// //                   )}
// //                   {banner.link && (
// //                     <Link
// //                       to={banner.link}
// //                       className="inline-block bg-[#8c0a15] hover:bg-[#6b080f] text-white px-6 py-2.5 rounded-md font-bold text-sm transition"
// //                     >
// //                       {banner.buttonText || 'Shop Now'}
// //                     </Link>
// //                   )}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>

// //       {/* ✅ Navigation Arrows (agar 1 se zyada banners hain) */}
// //       {banners.length > 1 && (
// //         <>
// //           <button
// //             onClick={() =>
// //               setCurrentIndex(
// //                 (prev) => (prev - 1 + banners.length) % banners.length
// //               )
// //             }
// //             className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-20"
// //           >
// //             &#10094;
// //           </button>
// //           <button
// //             onClick={() =>
// //               setCurrentIndex((prev) => (prev + 1) % banners.length)
// //             }
// //             className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-20"
// //           >
// //             &#10095;
// //           </button>

// //           {/* ✅ Dots */}
// //           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
// //             {banners.map((_, idx) => (
// //               <button
// //                 key={idx}
// //                 onClick={() => setCurrentIndex(idx)}
// //                 className={`w-2.5 h-2.5 rounded-full transition-all ${
// //                   idx === currentIndex
// //                     ? 'bg-white w-6'
// //                     : 'bg-white/50 hover:bg-white/80'
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </>
// //       )}
// //     </section>
// //   );
// // };

// // export default HeroSection;
import heroImg from "../assets/topbaner2.png";

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* 
        Aardhya-style banner:
        - aspect-[16/6] = very wide, short banner
        - object-cover = full width, no gaps
        - object-center = center crop
      */}
      <div className="relative w-full aspect-[16/6] sm:aspect-[16/6.5] md:aspect-[16/6] overflow-hidden">
        <img
          src={heroImg}
          alt="Hero Banner"
          className="w-full h-full object-cover object-center block"
        />
      </div>
    </section>
  );
}

export default HeroSection;