// import React, { useState } from "react";
// import { BiHeart } from "react-icons/bi";

// const ProductImageGallery = ({ product, selectedImage, setSelectedImage }) => {
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;
//     setZoomPosition({ x, y });
//   };

//   const images = [product.image, product.image, product.image];

//   return (
//     <div className="flex flex-col gap-4">
//       <div 
//         className="relative w-full h-[380px] sm:h-[480px]  rounded-sm overflow-hidden flex items-center justify-center cursor-crosshair"
//         onMouseEnter={() => setIsZoomed(true)}
//         onMouseLeave={() => setIsZoomed(false)}
//         onMouseMove={handleMouseMove}
//       >
//         <img 
//           src={selectedImage} 
//           alt={product.title} 
//           className="w-full h-full object-contain p-4 transition-transform duration-200"
//         />

//         <button 
//           onClick={() => setIsWishlisted(!isWishlisted)}
//           className="absolute top-4 right-4 z-20 bg-red-800 p-2.5 rounded-full shadow-md text-xl hover:scale-110 transition-transform cursor-pointer"
//         >
//           <BiHeart className={isWishlisted ? "text-red-600 fill-red-600" : "text-white"} />
//         </button>

//         {isZoomed && (
//           <div 
//             className="absolute inset-0 pointer-events-none z-10 bg-no-repeat bg-white"
//             style={{
//               backgroundImage: `url(${selectedImage})`,
//               backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
//               backgroundSize: '250%',
//             }}
//           />
//         )}
//       </div>

//       <div className="flex gap-3 overflow-x-auto pb-2">
//         {images.map((img, index) => (
//           <div 
//             key={index}
//             onClick={() => setSelectedImage(img)}
//             className={`w-20 h-20 bg-stone-50 border rounded-sm cursor-pointer overflow-hidden flex items-center justify-center transition-all ${
//               selectedImage === img ? "border-[#8b3a2b] ring-2 ring-[#8b3a2b]/30" : "border-stone-200 opacity-70 hover:opacity-100"
//             }`}
//           >
//             <img src={img} alt="Thumbnail" className="w-full h-full object-contain p-1" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductImageGallery;

import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";

const ProductImageGallery = ({ product, selectedImage, setSelectedImage }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const images = [product.image, product.image, product.image];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Container */}
      <div
        className="relative w-full h-[380px] sm:h-[480px] rounded-lg overflow-hidden flex items-center justify-center cursor-crosshair"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={selectedImage}
          alt={product.title || product.name}
          className="w-full h-full object-contain p-4 transition-transform duration-200"
        />

        {/* Wishlist Button — Maroon */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 z-20 bg-[#5A1F1F] hover:bg-[#3d1414] p-2.5 rounded-full shadow-md text-xl hover:scale-110 transition-all cursor-pointer"
        >
          <BiHeart
            className={
              isWishlisted
                ? "text-amber-300 fill-amber-300"
                : "text-white hover:text-amber-200"
            }
          />
        </button>

        {isZoomed && (
          <div
            className="absolute inset-0 pointer-events-none z-10 bg-no-repeat bg-white"
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              backgroundSize: "250%",
            }}
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, index) => {
          const isActive = selectedImage === img;
          return (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 bg-white rounded-lg cursor-pointer overflow-hidden flex items-center justify-center transition-all ${
                isActive
                  ? "border-2 border-[#5A1F1F] ring-2 ring-[#5A1F1F]/30"
                  : "border border-[#B58A3A]/30 opacity-70 hover:opacity-100 hover:border-[#B58A3A]"
              }`}
            >
              <img
                src={img}
                alt="Thumbnail"
                className="w-full h-full object-contain p-1"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImageGallery;