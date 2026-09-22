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
      <div 
        className="relative w-full h-[380px] sm:h-[480px] bg-[#fff3df] border border-stone-200 rounded-sm overflow-hidden flex items-center justify-center cursor-crosshair"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img 
          src={selectedImage} 
          alt={product.title} 
          className="w-full h-full object-contain p-4 transition-transform duration-200"
        />

        <button 
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 z-20 bg-red-800 p-2.5 rounded-full shadow-md text-xl hover:scale-110 transition-transform cursor-pointer"
        >
          <BiHeart className={isWishlisted ? "text-red-600 fill-red-600" : "text-white"} />
        </button>

        {isZoomed && (
          <div 
            className="absolute inset-0 pointer-events-none z-10 bg-no-repeat bg-white"
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              backgroundSize: '250%',
            }}
          />
        )}
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <div 
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 bg-stone-50 border rounded-sm cursor-pointer overflow-hidden flex items-center justify-center transition-all ${
              selectedImage === img ? "border-[#8b3a2b] ring-2 ring-[#8b3a2b]/30" : "border-stone-200 opacity-70 hover:opacity-100"
            }`}
          >
            <img src={img} alt="Thumbnail" className="w-full h-full object-contain p-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;