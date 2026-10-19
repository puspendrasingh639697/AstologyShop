// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
// import useCartStore from "../store/useCartStore"; // ✅ Ye import add karo

// export default function ProductCard({ product }) {
//   const [currentImage, setCurrentImage] = useState(0);
//   const { addToCart } = useCartStore(); // ✅ useCartStore se addToCart lo

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % product.images.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) =>
//       prev === 0 ? product.images.length - 1 : prev - 1
//     );
//   };

// const handleAddToCart = async (e) => {
//     e.preventDefault(); 
//     e.stopPropagation(); 

//     // LocalStorage se userId aur token nikalein
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     // const userId = user._id || user.id || localStorage.getItem('userId') || localStorage.getItem('cartUserId');
//     const token = localStorage.getItem('token') || localStorage.getItem('accessToken');

//     if (!userId) {
//       alert("Please login dd23to add items to cart");
//       return;
//     }

//     const productId = product._id || product.id;

//     try {
//       // ✅ Store ke format ke mutabiq userId, productId aur quantity pass karein
//       const result = await addToCart( productId, 1);
      
//       if (result?.success) {
//         alert(`Successfully added to cart!`);
//       } else {
//         alert(result?.error || "Could not add to cart");
//       }
//     } catch (error) {
//       console.error("Cart add error:", error);
//       alert("Error adding item to cart.");
//     }
//   };
//   return (
//     <div className="group">
//       {/* Image Section */}
//       <div className="relative overflow-hidden rounded-xl">
//         {/* Discount Badge */}
//         <div className="absolute top-0 left-0 bg-[#d64045] text-white text-sm font-semibold px-3 py-1 z-20">
//           {product.discount}
//         </div>

//         <img
//           src={product.images[currentImage] || product.image}
//           alt={product.title || product.name}
//           className="w-full h-[300px] md:h-[330px] object-cover transition-transform duration-500"
//         />

//         {/* Left Arrow */}
//         <button
//           onClick={prevImage}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
//         >
//           <FaChevronLeft />
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={nextImage}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
//         >
//           <FaChevronRight />
//         </button>
//       </div>

//       {/* Product Title */}
//       <h3 className="mt-4 text-[17px] font-semibold text-[#1f2940] leading-6">
//         {product.title || product.name}
//       </h3>

//       {/* Rating */}
//       <div className="flex items-center gap-1 mt-1">
//         {[...Array(5)].map((_, i) => (
//           <FaStar key={i} className="text-[#d64045] text-sm" />
//         ))}
//         <span className="text-[14px] text-[#4b5563] ml-1">
//           ({product.reviews || product.numReviews || 0})
//         </span>
//       </div>

//       {/* Price */}
//       <div className="mt-2 flex items-center gap-3">
//         <span className="font-bold text-[17px] md:text-[20px] text-[#1f2940]">
//           ₹{product.price}
//         </span>
//         <span className="line-through text-[#6b7280] text-[16px]">
//           ₹{product.oldPrice}
//         </span>
//       </div>

//       {/* ✅ Add to Cart Button (AB YAHAN HAI) */}
//       <button
//         type="button" // ✅ Ye zaroori hai (Page refresh rokne ke liye)
//         onClick={handleAddToCart}
//         className="mt-3 w-full bg-[#8c0a15] text-white py-2.5 rounded-lg font-semibold hover:bg-[#6b0811] transition-colors"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// // import React, { useState } from "react";
// // import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
// // import useCartStore from "../store/useCartStore";

// // export default function ProductCard({ product }) {
// //   const [currentImage, setCurrentImage] = useState(0);
// //   const { addToCart } = useCartStore();

// //   // ✅ Images array safely banao
// //   const images = product.images?.length
// //     ? product.images
// //     : [product.image].filter(Boolean);

// //   const nextImage = () => {
// //     if (images.length <= 1) return;
// //     setCurrentImage((prev) => (prev + 1) % images.length);
// //   };

// //   const prevImage = () => {
// //     if (images.length <= 1) return;
// //     setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// //   };

// //   const handleAddToCart = async (e) => {
// //     e.preventDefault();
// //     e.stopPropagation();

// //     // ✅ userId safely nikaalo
// //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// //     const userId = user._id || user.id || localStorage.getItem('cartUserId');
// //     const token = localStorage.getItem('token') || localStorage.getItem('accessToken');

// //     if (!userId) {
// //       alert("Please login to add items to cart");
// //       return;
// //     }

// //     const productId = product._id || product.id;

// //     try {
// //       const result = await addToCart(productId, 1);

// //       if (result?.success) {
// //         alert(`Successfully added to cart!`);
// //       } else {
// //         alert(result?.error || "Could not add to cart");
// //       }
// //     } catch (error) {
// //       console.error("Cart add error:", error);
// //       alert("Error adding item to cart.");
// //     }
// //   };

// //   // ✅ Discount calculate
// //   const price = Number(product.price) || 0;
// //   const mrp = Number(product.mrp) || 0;
// //   const discountPercent =
// //     product.discountPercent ||
// //     (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);

// //   return (
// //     <div className="group">
// //       {/* Image Section */}
// //       <div className="relative overflow-hidden rounded-xl">
// //         {/* ✅ Discount Badge */}
// //         {discountPercent > 0 && (
// //           <div className="absolute top-0 left-0 bg-[#d64045] text-white text-sm font-semibold px-3 py-1 z-20 rounded-br-lg">
// //             {discountPercent}% OFF
// //           </div>
// //         )}

// //         {/* ✅ Out of Stock Badge */}
// //         {product.stock === 0 && (
// //           <div className="absolute top-0 right-0 bg-stone-800 text-white text-xs font-semibold px-3 py-1 z-20 rounded-bl-lg">
// //             Out of Stock
// //           </div>
// //         )}

// //         <img
// //           src={images[currentImage] || product.image}
// //           alt={product.title || product.name}
// //           className="w-full h-[300px] md:h-[330px] object-cover transition-transform duration-500"
// //         />

// //         {/* ✅ Arrows — sirf tab dikhao jab 1 se zyada image ho */}
// //         {images.length > 1 && (
// //           <>
// //             <button
// //               onClick={prevImage}
// //               className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
// //             >
// //               <FaChevronLeft />
// //             </button>
// //             <button
// //               onClick={nextImage}
// //               className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
// //             >
// //               <FaChevronRight />
// //             </button>
// //           </>
// //         )}
// //       </div>

// //       {/* Product Title */}
// //       <h3 className="mt-4 text-[17px] font-semibold text-[#1f2940] leading-6">
// //         {product.title || product.name}
// //       </h3>

// //       {/* Rating */}
// //       <div className="flex items-center gap-1 mt-1">
// //         {[...Array(5)].map((_, i) => (
// //           <FaStar
// //             key={i}
// //             className={
// //               i < Math.round(product.rating || 0)
// //                 ? "text-[#d64045] text-sm"
// //                 : "text-stone-300 text-sm"
// //             }
// //           />
// //         ))}
// //         <span className="text-[14px] text-[#4b5563] ml-1">
// //           ({product.reviews?.length || product.numReviews || 0})
// //         </span>
// //       </div>

// //       {/* ✅ Price with Discount */}
// //       <div className="mt-2 flex items-center gap-2 flex-wrap">
// //         <span className="font-bold text-[17px] md:text-[20px] text-[#1f2940]">
// //           ₹{price}
// //         </span>

// //         {mrp > price && (
// //           <>
// //             <span className="line-through text-[#6b7280] text-[16px]">
// //               ₹{mrp}
// //             </span>
// //             <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
// //               Save ₹{mrp - price}
// //             </span>
// //           </>
// //         )}
// //       </div>

// //       {/* ✅ Add to Cart Button */}
// //       <button
// //         type="button"
// //         onClick={handleAddToCart}
// //         disabled={product.stock === 0}
// //         className={`mt-3 w-full py-2.5 rounded-lg font-semibold transition-colors ${
// //           product.stock === 0
// //             ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
// //             : 'bg-[#8c0a15] text-white hover:bg-[#6b0811]'
// //         }`}
// //       >
// //         {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
// //       </button>
// //     </div>
// //   );
// // }


import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import useCartStore from "../store/useCartStore"; 

export default function ProductCard({ product }) {
  const [currentImage, setCurrentImage] = useState(0);
  const { addToCart } = useCartStore(); 

  // ✅ Images handling
  const images = product.images?.length
    ? product.images
    : [product.image].filter(Boolean);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length <= 1) return;
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length <= 1) return;
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleAddToCart = async (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 

    // 🔥 FIX: userId ko define kiya hai (pehle ye undefined tha)
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id || user.id || localStorage.getItem('cartUserId');

    if (!userId) {
      alert("Please login to add items to cart");
      return;
    }

    const productId = product._id || product.id;

    try {
      const result = await addToCart(productId, 1);
      
      if (result?.success) {
        alert(`Successfully added to cart!`);
      } else {
        alert(result?.error || "Could not add to cart");
      }
    } catch (error) {
      console.error("Cart add error:", error);
      alert("Error adding item to cart.");
    }
  };

  // 🔥 FIX: Admin panel ke hisaab se 'originalPrice' check kiya hai
  const price = Number(product.price) || 0;
  const mrp = Number(product.originalPrice) || Number(product.mrp) || 0;
  
  // Discount calculate karo (agar mrp price se bada hai)
  const discountPercent = mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0;

  return (
    <div className="group bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow relative">
      
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-50 cursor-pointer">
        
        {/* 🔥 FIX: Discount Badge (Agar discount hai toh show hoga) */}
        {discountPercent > 0 && (
          <div className="absolute top-2 left-2 bg-[#d64045] text-white text-xs font-bold px-2 py-1 z-20 rounded-md shadow-sm">
            {discountPercent}% OFF
          </div>
        )}

        <img
          src={images[currentImage] || product.image || "https://via.placeholder.com/300"}
          alt={product.title || product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Left Arrow */}
        {images.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 w-8 h-8 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
          >
            <FaChevronLeft size={12} />
          </button>
        )}

        {/* Right Arrow */}
        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 w-8 h-8 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
          >
            <FaChevronRight size={12} />
          </button>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-3 flex flex-col flex-grow">
        
        {/* Category & Stock */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
            {product.category?.name || product.category || "Spiritual"}
          </span>
          <span className={`text-[10px] font-medium ${product.stock === 0 ? "text-red-500" : "text-green-600"}`}>
            {product.stock === 0 ? "Out of Stock" : "In Stock"}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-[15px] font-semibold text-[#1f2940] leading-snug line-clamp-2 mb-1">
          {product.title || product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.round(product.rating || 0) ? "text-[#d64045] text-xs" : "text-stone-300 text-xs"}
            />
          ))}
          <span className="text-xs text-[#4b5563] ml-1">
            ({product.reviews?.length || product.numReviews || 0})
          </span>
        </div>

        {/* 🔥 FIX: Price, Cut Price (MRP) aur Discount text */}
        <div className="mt-auto pt-2">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="font-bold text-lg text-[#8c0a15]">₹{price}</span>
            
            {/* Agar MRP bada hai toh cut price dikhao */}
            {mrp > price && (
              <>
                <span className="line-through text-gray-400 text-sm">₹{mrp}</span>
                <span className="text-[10px] font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">
                  {discountPercent}% OFF
                </span>
              </>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`w-full py-2 rounded-md font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
              product.stock === 0
                ? "bg-stone-200 text-stone-500 cursor-not-allowed"
                : "bg-[#5A1F1F] text-white hover:bg-[#3D0F0F]"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}