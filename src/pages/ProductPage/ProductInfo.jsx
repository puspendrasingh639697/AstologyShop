
// import React from "react";
// import { BiStar, BiCheckCircle } from "react-icons/bi";

// const ProductInfo = ({
//   product,
//   selectedVariant,
//   setSelectedVariant,
//   currentPrice,
//   currentOldPrice,
//   currentSku,
//   discountPercent,
//   reviewsCount,
// }) => {
//   const displayName = product.name || product.title || "";
//   const displayVendor = product.vendor || product.brand || "";
//   const displayDescription = product.description || "";
//   const displayRating = product.rating || null;
//   const displaySku = currentSku || product.sku || "";

//   const hasStockInfo = product.stock !== undefined;
//   const stockAvailable = hasStockInfo ? product.stock > 0 : null;

//   const variants = Array.isArray(product.variants) ? product.variants : [];
//   const whatsIncluded = Array.isArray(product.whatsIncluded)
//     ? product.whatsIncluded
//     : [];

//   return (
//     <div className="space-y-1">
//       {/* Vendor / SKU */}
//       {(displayVendor || displaySku) && (
//         <div className="flex justify-between items-center">
//           {displayVendor && (
//             <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
//               {displayVendor}
//             </p>
//           )}
//           {displaySku && (
//             <span className="text-[10px]  bg-gradient-to-r from-red-800 to-red-600 text-white px-2 py-0.5 border border-stone-200 rounded">
//               SKU: {displaySku}
//             </span>
//           )}
//         </div>
//       )}

//       {/* Product Name */}
//       {displayName && (
//         <h1 className="text-xl sm:text-2xl  text-[#4a2e18]">
//           {displayName}
//         </h1>
//       )}

//       {/* Rating & Reviews */}
//       {(displayRating || reviewsCount > 0) && (
//         <div className="flex items-center gap-2 text-xs">
//           {displayRating && (
//             <>
//               <div className="flex items-center text-amber-500 font-bold gap-1">
//                 <BiStar className="fill-amber-500 text-sm" /> {displayRating}
//               </div>
//               <span className="text-stone-300">|</span>
//             </>
//           )}
//           {reviewsCount > 0 && (
//             <span className="text-stone-500 underline cursor-pointer">
//               {reviewsCount} Reviews
//             </span>
//           )}
//         </div>
//       )}

//       {/* Price + Stock */}
//       <div className="flex items-center justify-between border-b border-stone-100 pb-3">
//         <div className="flex items-center gap-2 flex-wrap">
//           <span className="text-2xl font-bold text-black">
//             Rs. {currentPrice}
//           </span>
//           {currentOldPrice && (
//             <span className="text-red-800 line-through text-sm">
//               Rs. {currentOldPrice}
//             </span>
//           )}
//           {discountPercent && (
//             <span className="bg-gradient-to-r from-red-800 to-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
//               {discountPercent}% OFF
//             </span>
//           )}
//         </div>

//         {hasStockInfo && (
//           <span
//             className={`text-[12px] px-2 py-1  rounded flex items-center gap-1 ${
//               stockAvailable
//                 ? "bg-gradient-to-r from-red-800 to-red-600 text-white border-emerald-200"
//                 : "bg-gradient-to-r from-red-800 to-red-600 text-white border-red-200"
//             }`}
//           >
//             <BiCheckCircle />{" "}
//             {stockAvailable ? "In Stock" : "Out of Stock"}
//           </span>
//         )}
//       </div>

//       {/* Description */}
//       {displayDescription && (
//         <p className="text-sm text-black leading-relaxed">
//           {displayDescription}
//         </p>
//       )}

//       {/* Variants */}
//       {variants.length > 0 && (
//         <div>
//           <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
//             Select Pack / Size:
//           </label>
//           <div className="flex flex-wrap gap-2">
//             {variants.map((variant) => {
//               const vid = variant.id || variant._id;
//               const isSelected =
//                 (selectedVariant?.id && selectedVariant.id === vid) ||
//                 (selectedVariant?._id && selectedVariant._id === vid);
//               return (
//                 <button
//                   key={vid}
//                   onClick={() => setSelectedVariant(variant)}
//                   className={`px-3 py-1.5 text-xs font-semibold border rounded transition-all cursor-pointer ${
//                     isSelected
//                       ? "border-[#8b3a2b] bg-[#8b3a2b]/10 text-[#8b3a2b]"
//                       : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
//                   }`}
//                 >
//                   {variant.name}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* What's Included */}
//       {whatsIncluded.length > 0 && (
//         <div className="p-3 bg-stone-50 border border-stone-200 rounded">
//           <h4 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18] mb-2">
//             📦 What's Included:
//           </h4>
//           <ul className="list-disc list-inside space-y-1 text-xs text-stone-700">
//             {whatsIncluded.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductInfo;


import React from "react";
import { BiStar, BiCheckCircle } from "react-icons/bi";

const ProductInfo = ({
  product,
  selectedVariant,
  setSelectedVariant,
  currentPrice,
  currentOldPrice,
  currentSku,
  discountPercent,
  reviewsCount,
}) => {
  const displayName = product.name || product.title || "";
  const displayVendor = product.vendor || product.brand || "";
  const displayDescription = product.description || "";
  const displayRating = product.rating || null;
  const displaySku = currentSku || product.sku || "";

  const hasStockInfo = product.stock !== undefined;
  const stockAvailable = hasStockInfo ? product.stock > 0 : null;

  const variants = Array.isArray(product.variants) ? product.variants : [];
  const whatsIncluded = Array.isArray(product.whatsIncluded)
    ? product.whatsIncluded
    : [];

  return (
    <div className="space-y-1">
      {/* Vendor / SKU */}
      {(displayVendor || displaySku) && (
        <div className="flex justify-between items-center">
          {displayVendor && (
            <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
              {displayVendor}
            </p>
          )}
          {displaySku && (
            <span className="text-[10px] bg-[#5A1F1F] text-white px-2 py-0.5 border border-[#5A1F1F]/20 rounded">
              SKU: {displaySku}
            </span>
          )}
        </div>
      )}

      {/* Product Name */}
      {displayName && (
        <h1 className="text-xl sm:text-2xl text-[#5A1F1F]">
          {displayName}
        </h1>
      )}

      {/* Rating & Reviews */}
      {(displayRating || reviewsCount > 0) && (
        <div className="flex items-center gap-2 text-xs">
          {displayRating && (
            <>
              <div className="flex items-center text-amber-500 font-bold gap-1">
                <BiStar className="fill-amber-500 text-sm" /> {displayRating}
              </div>
              <span className="text-stone-300">|</span>
            </>
          )}
          {reviewsCount > 0 && (
            <span className="text-stone-500 underline cursor-pointer">
              {reviewsCount} Reviews
            </span>
          )}
        </div>
      )}

      {/* Price + Stock */}
      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-2xl font-bold text-[#5A1F1F]">
            Rs. {currentPrice}
          </span>
          {currentOldPrice && (
            <span className="text-[#5A1F1F]/60 line-through text-sm">
              Rs. {currentOldPrice}
            </span>
          )}
          {discountPercent && (
            <span className="bg-[#5A1F1F] text-white text-[10px] font-bold px-2 py-0.5 rounded">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {hasStockInfo && (
          <span
            className={`text-[12px] px-2 py-1 rounded flex items-center gap-1 ${
              stockAvailable
                ? "bg-[#5A1F1F] text-white border-[#5A1F1F]/20"
                : "bg-[#5A1F1F]/70 text-white border-[#5A1F1F]/20"
            }`}
          >
            <BiCheckCircle />{" "}
            {stockAvailable ? "In Stock" : "Out of Stock"}
          </span>
        )}
      </div>

      {/* Description */}
      {displayDescription && (
        <p className="text-sm text-black leading-relaxed">
          {displayDescription}
        </p>
      )}

      {/* Variants */}
      {variants.length > 0 && (
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
            Select Pack / Size:
          </label>
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => {
              const vid = variant.id || variant._id;
              const isSelected =
                (selectedVariant?.id && selectedVariant.id === vid) ||
                (selectedVariant?._id && selectedVariant._id === vid);
              return (
                <button
                  key={vid}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-3 py-1.5 text-xs font-semibold border rounded transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#5A1F1F] bg-[#5A1F1F]/10 text-[#5A1F1F]"
                      : "border-stone-300 bg-white text-stone-700 hover:border-[#5A1F1F]/50"
                  }`}
                >
                  {variant.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* What's Included */}
      {whatsIncluded.length > 0 && (
        <div className="p-3 bg-[#F5EBDD] border border-[#B58A3A]/20 rounded">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A1F1F] mb-2">
            📦 What's Included:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-xs text-stone-700">
            {whatsIncluded.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;