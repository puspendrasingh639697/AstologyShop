// // import { useState, useEffect } from "react";
// // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// // import useProductStore from "../store/useProductStore";

// // const ProductCard = ({ product }) => {
// //   const [imageIndex, setImageIndex] = useState(0);

// //   // Build images array dynamically (product.images if exists, else [product.image])
// //   const images =
// //     product.images && product.images.length > 0
// //       ? product.images
// //       : [product.image];

// //   const nextImage = () => {
// //     setImageIndex((prev) => (prev + 1) % images.length);
// //   };

// //   const prevImage = () => {
// //     setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
// //   };

// //   // Calculate discount % dynamically
// //   const calculateDiscount = () => {
// //     const price = Number(product.price) || 0;
// //     const mrp = Number(product.mrp) || 0;

// //     if (mrp > price && mrp > 0) {
// //       return Math.round(((mrp - price) / mrp) * 100);
// //     }
// //     return product.discountPercent || 0;
// //   };

// //   const discountPercent = calculateDiscount();

// //   return (
// //     <div className="group/card">
// //       {/* IMAGE CARD */}
// //       <div className="relative group overflow-hidden rounded-lg bg-white">

// //         {/* Discount Badge (only if discount exists) */}
// //         {discountPercent > 0 && (
// //           <div className="absolute top-0 left-0 z-20 bg-[#d9534f] text-white px-2.5 sm:px-3 md:px-4 py-1 text-[11px] sm:text-[13px] md:text-[15px] font-semibold rounded-br-lg">
// //             🏷 {discountPercent}% Off
// //           </div>
// //         )}

// //         {/* Left Arrow (only if multiple images) */}
// //         {images.length > 1 && (
// //           <button
// //             onClick={prevImage}
// //             aria-label="Previous image"
// //             className="
// //               absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20
// //               w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
// //               rounded-full bg-white/95 shadow-md
// //               flex items-center justify-center
// //               opacity-0 group-hover:opacity-100
// //               transition-all duration-300
// //               text-xs sm:text-sm
// //             "
// //           >
// //             <FaChevronLeft />
// //           </button>
// //         )}

// //         {/* Right Arrow (only if multiple images) */}
// //         {images.length > 1 && (
// //           <button
// //             onClick={nextImage}
// //             aria-label="Next image"
// //             className="
// //               absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20
// //               w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
// //               rounded-full bg-white/95 shadow-md
// //               flex items-center justify-center
// //               opacity-0 group-hover:opacity-100
// //               transition-all duration-300
// //               text-xs sm:text-sm
// //             "
// //           >
// //             <FaChevronRight />
// //           </button>
// //         )}

// //         {/* Product Image */}
// //         <img
// //           src={images[imageIndex]}
// //           alt={product.name || product.title}
// //           className="
// //             w-full aspect-square object-cover rounded-lg
// //             transition-all duration-500 group-hover:scale-[1.02]
// //           "
// //           onError={(e) => {
// //             e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
// //           }}
// //         />
// //       </div>

// //       {/* Product Title */}
// //       <h3 className="mt-2 sm:mt-3 text-[14px] sm:text-[15px] md:text-[17px] font-semibold text-[#16233d] line-clamp-2 leading-snug">
// //         {product.name || product.title}
// //       </h3>

// //       {/* Rating */}
// //       <div className="flex items-center gap-1 mt-1 text-[#d9534f] text-[12px] sm:text-[13px] md:text-sm">
// //         ★★★★★
// //         <span className="text-gray-600 ml-1">
// //           ({product.ratingCount || product.reviewsCount || 1})
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // const LatestTrending = () => {
// //   const { products, loading, error, fetchProducts } = useProductStore();

// //   useEffect(() => {
// //     fetchProducts();
// //   }, [fetchProducts]);

// //   // Sirf top 8 trending products (backend me "isTrending" flag ho to use karo)
// //   const trending = products?.filter((p) => p.isTrending).slice(0, 8) || [];

// //   // Agar flag nahi hai to pehle 8 products le lo
// //   const displayProducts =
// //     trending.length > 0 ? trending : products?.slice(0, 8) || [];

// //   return (
// //     <section className="bg-white pt-2 pb-10 sm:pb-12 md:pb-14">
// //       <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">

// //         {/* ====== HEADING ====== */}
// //         <div className="text-center mb-6 sm:mb-8 md:mb-10">
// //           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#4a2e18] leading-tight tracking-wide">
// //             Latest & Trending
// //           </h2>

// //           {/* Decorative Divider */}
// //           <div className="flex items-center justify-center gap-3 mt-3">
// //             <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
// //             <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
// //             <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
// //           </div>
// //         </div>

// //         {/* ====== LOADING ====== */}
// //         {loading && (
// //           <div className="flex justify-center items-center py-12 sm:py-16">
// //             <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-[#8c0a15] border-t-transparent rounded-full animate-spin"></div>
// //           </div>
// //         )}

// //         {/* ====== ERROR ====== */}
// //         {error && (
// //           <div className="text-center py-12 text-red-600 font-medium text-sm sm:text-base">
// //             Error: {error}
// //           </div>
// //         )}

// //         {/* ====== NO PRODUCTS ====== */}
// //         {!loading && !error && displayProducts.length === 0 && (
// //           <div className="text-center py-12 sm:py-16 text-black text-sm sm:text-base">
// //             No products available
// //           </div>
// //         )}

// //         {/* ====== PRODUCTS GRID ====== */}
// //         {!loading && !error && displayProducts.length > 0 && (
// //           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
// //             {displayProducts.map((product) => (
// //               <ProductCard key={product._id} product={product} />
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default LatestTrending;


// import { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { Heart, ShoppingBag } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import useProductStore from "../store/useProductStore";
// import useWishlistStore from "../store/useWishlistStore";
// import useCartStore from "../store/useCartStore";

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();
//   const [imageIndex, setImageIndex] = useState(0);
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
//   const { addToCart } = useCartStore();

//   const images =
//     product.images && product.images.length > 0
//       ? product.images
//       : [product.image];

//   const nextImage = (e) => {
//     e.stopPropagation();
//     setImageIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = (e) => {
//     e.stopPropagation();
//     setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const calculateDiscount = () => {
//     const price = Number(product.price) || 0;
//     const mrp = Number(product.mrp) || 0;
//     if (mrp > price && mrp > 0) {
//       return Math.round(((mrp - price) / mrp) * 100);
//     }
//     return product.discountPercent || 0;
//   };

//   const discountPercent = calculateDiscount();

//   const handleCardClick = () => {
//     navigate(`/product/${product._id}`);
//   };

//   const handleWishlist = async (e) => {
//     e.stopPropagation();
//     if (isInWishlist(product._id)) {
//       await removeFromWishlist(product._id);
//     } else {
//       await addToWishlist(product._id);
//     }
//   };

//   const handleAddToCart = async (e) => {
//     e.stopPropagation();
//     await addToCart(product._id, 1);
//   };

//   return (
//     <div onClick={handleCardClick} className="group cursor-pointer">
//       <div className="bg-[#F5EBDD] rounded-lg border border-[#B58A3A]/25 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#B58A3A]/60 transition-all duration-300 flex flex-col">

//         {/* IMAGE */}
//         <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-[#F5EBDD] flex-shrink-0">
//           {discountPercent > 0 && (
//             <div className="absolute top-1.5 left-1.5 z-20 bg-[#173B32] text-[#F5EBDD] text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">
//               {discountPercent}% OFF
//             </div>
//           )}

//           <button
//             onClick={handleWishlist}
//             className="absolute top-1.5 right-1.5 z-20 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
//           >
//             <Heart
//               className={`w-3 h-3 transition-colors ${
//                 isInWishlist(product._id)
//                   ? "fill-[#B58A3A] text-[#B58A3A]"
//                   : "text-[#6B5038] hover:text-[#B58A3A]"
//               }`}
//             />
//           </button>

//           {images.length > 1 && (
//             <>
//               <button
//                 onClick={prevImage}
//                 className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-[8px] text-[#173B32]"
//               >
//                 <FaChevronLeft />
//               </button>
//               <button
//                 onClick={nextImage}
//                 className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-[8px] text-[#173B32]"
//               >
//                 <FaChevronRight />
//               </button>
//             </>
//           )}

//           <img
//             src={images[imageIndex]}
//             alt={product.name || product.title}
//             className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
//             onError={(e) => {
//               e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
//             }}
//           />
//         </div>

//         {/* INFO */}
//         <div className="p-2 flex flex-col justify-between flex-1">
//           <div>
//             <h3 className="text-[11px] sm:text-xs font-medium text-[#173B32] line-clamp-2 min-h-[26px] mb-1 group-hover:text-[#B58A3A] transition-colors">
//               {product.name || product.title}
//             </h3>

//             <div className="flex items-center gap-1 text-[#B58A3A] text-[10px] mb-1">
//               ★★★★★
//               <span className="text-[#6B5038] ml-0.5">
//                 ({product.ratingCount || product.reviewsCount || 12})
//               </span>
//             </div>

//             <div className="flex items-baseline gap-1.5 mb-1.5 flex-wrap">
//               <p className="text-[13px] font-bold text-[#173B32]">
//                 ₹{Number(product.price || 0).toLocaleString("en-IN")}
//               </p>
//               {product.mrp && Number(product.mrp) > Number(product.price) && (
//                 <span className="text-[10px] text-[#6B5038]/70 line-through">
//                   ₹{Number(product.mrp).toLocaleString("en-IN")}
//                 </span>
//               )}
//             </div>
//           </div>

//           <button
//             onClick={handleAddToCart}
//             disabled={product.stock === 0}
//             className={`w-full py-1.5 px-2 rounded-md text-[10px] sm:text-[11px] font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
//               product.stock > 0
//                 ? "bg-[#173B32] hover:bg-[#0f2820] text-[#F5EBDD]"
//                 : "bg-[#B58A3A]/20 text-[#6B5038] cursor-not-allowed"
//             }`}
//           >
//             <ShoppingBag className="w-3 h-3" />
//             {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const LatestTrending = () => {
//   const navigate = useNavigate();
//   const { products, loading, error, fetchProducts } = useProductStore();

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const trending = products?.filter((p) => p.isTrending).slice(0, 5) || [];
//   const displayProducts =
//     trending.length > 0 ? trending : products?.slice(0, 5) || [];

//   return (
//     <section className="bg-[#F5EBDD] py-6 sm:py-8">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

//         {/* ===== HEADING ROW — Left + Right ===== */}
//         <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
//           {/* LEFT — Title + Subtitle */}
//           <div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#173B32] tracking-wide">
//               Latest & Trending
//             </h2>
//             <p className="text-[11px] sm:text-xs text-[#6B5038] italic mt-1">
//               New arrivals. Trending favourites.
//             </p>
//           </div>

//           {/* RIGHT — View All */}
//           <button
//             onClick={() => navigate("/")}
//             className="text-[11px] sm:text-xs md:text-sm font-medium text-[#B58A3A] hover:text-[#173B32] transition-colors whitespace-nowrap flex items-center gap-1"
//           >
//             View All
//             <span className="text-base">→</span>
//           </button>
//         </div>

//         {loading && (
//           <div className="flex justify-center items-center py-12">
//             <div className="w-10 h-10 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         )}

//         {error && (
//           <div className="text-center py-12 text-[#173B32] font-medium">
//             Error: {error}
//           </div>
//         )}

//         {!loading && !error && displayProducts.length === 0 && (
//           <div className="text-center py-12 text-[#6B5038] font-medium">
//             No products available
//           </div>
//         )}

//         {/* PRODUCTS GRID — 5 cards */}
//         {!loading && !error && displayProducts.length > 0 && (
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
//             {displayProducts.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default LatestTrending;



import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Heart, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import useWishlistStore from "../store/useWishlistStore";
import useCartStore from "../store/useCartStore";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const nextImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const calculateDiscount = () => {
    const price = Number(product.price) || 0;
    const mrp = Number(product.mrp) || 0;
    if (mrp > price && mrp > 0) {
      return Math.round(((mrp - price) / mrp) * 100);
    }
    return product.discountPercent || 0;
  };

  const discountPercent = calculateDiscount();

  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  const handleWishlist = async (e) => {
    e.stopPropagation();
    if (isInWishlist(product._id)) {
      await removeFromWishlist(product._id);
    } else {
      await addToWishlist(product._id);
    }
  };

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    await addToCart(product._id, 1);
  };

  return (
    <div onClick={handleCardClick} className="group cursor-pointer">
      <div className="bg-[#F5EBDD] rounded-lg border border-[#B58A3A]/25 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#B58A3A]/60 transition-all duration-300 flex flex-col">

        {/* IMAGE */}
        <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-[#F5EBDD] flex-shrink-0">
          {discountPercent > 0 && (
            <div className="absolute top-1.5 left-1.5 z-20 bg-[#5A1F1F] text-[#F5EBDD] text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">
              {discountPercent}% OFF
            </div>
          )}

          <button
            onClick={handleWishlist}
            className="absolute top-1.5 right-1.5 z-20 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
          >
            <Heart
              className={`w-3 h-3 transition-colors ${
                isInWishlist(product._id)
                  ? "fill-[#B58A3A] text-[#B58A3A]"
                  : "text-[#6B5038] hover:text-[#B58A3A]"
              }`}
            />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-[8px] text-[#5A1F1F]"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-[8px] text-[#5A1F1F]"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          <img
            src={images[imageIndex]}
            alt={product.name || product.title}
            className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
            }}
          />
        </div>

        {/* INFO */}
        <div className="p-2 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-[11px] sm:text-xs font-medium text-[#5A1F1F] line-clamp-2 min-h-[26px] mb-1 group-hover:text-[#B58A3A] transition-colors">
              {product.name || product.title}
            </h3>

            <div className="flex items-center gap-1 text-[#B58A3A] text-[10px] mb-1">
              ★★★★★
              <span className="text-[#6B5038] ml-0.5">
                ({product.ratingCount || product.reviewsCount || 12})
              </span>
            </div>

            <div className="flex items-baseline gap-1.5 mb-1.5 flex-wrap">
              <p className="text-[13px] font-bold text-[#5A1F1F]">
                ₹{Number(product.price || 0).toLocaleString("en-IN")}
              </p>
              {product.mrp && Number(product.mrp) > Number(product.price) && (
                <span className="text-[10px] text-[#6B5038]/70 line-through">
                  ₹{Number(product.mrp).toLocaleString("en-IN")}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`w-full py-1.5 px-2 rounded-md text-[10px] sm:text-[11px] font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
              product.stock > 0
                ? "bg-[#5A1F1F] hover:bg-[#3d1414] text-[#F5EBDD]"
                : "bg-[#B58A3A]/20 text-[#6B5038] cursor-not-allowed"
            }`}
          >
            <ShoppingBag className="w-3 h-3" />
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

const LatestTrending = () => {
  const navigate = useNavigate();
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const trending = products?.filter((p) => p.isTrending).slice(0, 5) || [];
  const displayProducts =
    trending.length > 0 ? trending : products?.slice(0, 5) || [];

  return (
    <section className="bg-[#F5EBDD] py-6 sm:py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ===== HEADING ROW — Left + Right ===== */}
        <div className="flex items-end justify-between gap-4 mb-5 sm:mb-6">
          {/* LEFT — Title + Subtitle */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#5A1F1F] tracking-wide">
              Latest & Trending
            </h2>
            <p className="text-[11px] sm:text-xs text-[#6B5038] italic mt-1">
              New arrivals. Trending favourites.
            </p>
          </div>

          {/* RIGHT — View All */}
          <button
            onClick={() => navigate("/")}
            className="text-[11px] sm:text-xs md:text-sm font-medium text-[#B58A3A] hover:text-[#5A1F1F] transition-colors whitespace-nowrap flex items-center gap-1"
          >
            View All
            <span className="text-base">→</span>
          </button>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="w-10 h-10 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-[#5A1F1F] font-medium">
            Error: {error}
          </div>
        )}

        {!loading && !error && displayProducts.length === 0 && (
          <div className="text-center py-12 text-[#6B5038] font-medium">
            No products available
          </div>
        )}

        {/* PRODUCTS GRID — 5 cards */}
        {!loading && !error && displayProducts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {displayProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestTrending;