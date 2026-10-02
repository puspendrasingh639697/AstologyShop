
// import React, { useEffect, useState } from "react";
// import { Heart, ShoppingBag } from "lucide-react";
// import useProductStore from "../store/useProductStore";
// import useWishlistStore from "../store/useWishlistStore";
// import useCartStore from "../store/useCartStore";
// import { useNavigate } from "react-router-dom";

// const FestivalCollection = () => {
//   const navigate = useNavigate();
//   const { products, loading, error, fetchProducts } = useProductStore();
//   const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist } = useWishlistStore();
//   const { addToCart, setUserId } = useCartStore();

//   const [wishlistLoading, setWishlistLoading] = useState(null);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [toastType, setToastType] = useState("info");

//   useEffect(() => {
//     fetchProducts();
//     fetchWishlist();
//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     const actualUserId = user.id || user._id || localStorage.getItem("cartUserId");
//     if (actualUserId) {
//       setUserId(actualUserId);
//     }
//   }, [fetchProducts, fetchWishlist, setUserId]);

//   const showToastMessage = (message, type = "info") => {
//     setToastMessage(message);
//     setToastType(type);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   };

//   const handleCardClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   const handleWishlistToggle = async (e, productId) => {
//     e.preventDefault();
//     e.stopPropagation();

//     setWishlistLoading(productId);

//     if (isInWishlist(productId)) {
//       const result = await removeFromWishlist(productId);
//       if (!result.success && result.error?.includes("login")) {
//         showToastMessage("Please login to manage wishlist", "error");
//       } else if (result.success) {
//         showToastMessage("Removed from wishlist", "success");
//       }
//     } else {
//       const result = await addToWishlist(productId);
//       if (!result.success && result.error?.includes("login")) {
//         showToastMessage("Please login to manage wishlist", "error");
//       } else if (result.success) {
//         showToastMessage("Added to wishlist ❤️", "success");
//       }
//     }

//     setWishlistLoading(null);
//   };

//   const handleAddToCart = async (e, product) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const token = localStorage.getItem("token");
//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     const actualUserId = user.id || user._id || localStorage.getItem("cartUserId");

//     if (!token || !actualUserId) {
//       showToastMessage("Please login to add items to cart", "error");
//       setTimeout(() => navigate("/login"), 2000);
//       return;
//     }

//     setUserId(actualUserId);

//     const result = await addToCart(product._id, 1);

//     if (result.success) {
//       showToastMessage("Item added to cart! 🛒", "success");
//     } else {
//       showToastMessage(result.error || "Failed to add to cart", "error");
//     }
//   };

//   const getDiscount = (product) => {
//     const price = Number(product.price) || 0;
//     const mrp = Number(product.mrp) || 0;

//     if (mrp > price && mrp > 0) {
//       return {
//         percent: product.discountPercent || Math.round(((mrp - price) / mrp) * 100),
//         save: mrp - price,
//         mrp,
//       };
//     }
//     return { percent: 0, save: 0, mrp: 0 };
//   };

//   const festivalOnly = products.filter((p) => {
//     const catName = (p.category?.name || "").toLowerCase();
//     return catName.includes("festival");
//   });

//   if (loading) {
//     return (
//       <div className="flex flex-col justify-center items-center py-20">
//         <div className="w-12 h-12 border-4 border-[#6b2314] border-t-transparent rounded-full animate-spin"></div>
//         <div className="text-[#4a2e18] mt-4 font-medium">Loading products...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center py-12">
//         <div className="text-red-600 font-medium">Error: {error}</div>
//       </div>
//     );
//   }

//   if (festivalOnly.length === 0) {
//     return (
//       <div className="flex justify-center items-center py-12">
//         <div className="text-[#4a2e18] font-medium">No Festival Collections available</div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-white min-h-screen pb-16">

//       {/* Main Content Container */}
//       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4">

//         {/* Section Title — Center Aligned */}
//         <div className="mb-8 pb-4 text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#8c0a15]">
//             Festival Collections
//           </h2>
//           <div className="flex items-center justify-center gap-3 mt-3">
//             <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
//             <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
//             <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
//           </div>
//         </div>

//         {/* Toast */}
//         {showToast && (
//           <div
//             className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-down ${
//               toastType === "success"
//                 ? "bg-green-600"
//                 : toastType === "error"
//                 ? "bg-red-600"
//                 : "bg-[#6b2314]"
//             } text-white max-w-sm font-medium`}
//           >
//             {toastMessage}
//           </div>
//         )}

//         {/* Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
//           {festivalOnly.map((product) => {
//             const discount = getDiscount(product);
//             const outOfStock = product.stock === 0;

//             return (
//               <div
//                 key={product._id}
//                 onClick={() => handleCardClick(product._id)}
//                 className="group relative bg-white rounded-xl overflow-hidden border border-[#f0e0cc] shadow-[0_2px_10px_rgba(74,46,24,0.06)] hover:shadow-[0_12px_30px_rgba(140,10,21,0.15)] hover:-translate-y-1 hover:border-[#8c0a15]/30 transition-all duration-300 cursor-pointer flex flex-col"
//               >
//                 {/* Discount Badge */}
//                 {discount.percent > 0 && (
//                   <div className="absolute top-2.5 left-2.5 z-20 bg-gradient-to-r from-red-800 to-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-md tracking-wide">
//                     {discount.percent}% OFF
//                   </div>
//                 )}

//                 {/* Wishlist Button */}
//                 <button
//                   onClick={(e) => handleWishlistToggle(e, product._id)}
//                   disabled={wishlistLoading === product._id}
//                   aria-label="Toggle wishlist"
//                   className="absolute top-2.5 right-2.5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 backdrop-blur-sm border border-[#f0e0cc] shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-[#8c0a15]/30"
//                 >
//                   <Heart
//                     className={`w-4 h-4 sm:w-[18px] sm:h-[18px] transition-colors ${
//                       isInWishlist(product._id)
//                         ? "fill-red-600 text-red-600"
//                         : "text-gray-500 group-hover:text-red-500"
//                     } ${wishlistLoading === product._id ? "animate-pulse" : ""}`}
//                   />
//                 </button>

//                 {/* Image Container */}
//                 <div className="relative w-full aspect-square overflow-hidden bg-[#fdf9f3]">
//                   {product.image ? (
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
//                       onError={(e) => {
//                         e.target.src =
//                           "https://via.placeholder.com/400x400?text=No+Image";
//                       }}
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-gray-100">
//                       <ShoppingBag className="w-12 h-12 text-gray-400" />
//                     </div>
//                   )}

//                   <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//                   {outOfStock && (
//                     <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center z-10">
//                       <span className="bg-gray-800 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-lg">
//                         Out of Stock
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="flex flex-col flex-1 p-3 sm:p-4">
//                   <h3 className="text-[13px] sm:text-sm font-medium text-gray-800 line-clamp-2 min-h-[38px] sm:min-h-[42px] leading-snug group-hover:text-[#8c0a15] transition-colors duration-300">
//                     {product.name}
//                   </h3>

//                   <div className="flex items-center gap-1.5 mt-2 flex-wrap">
//                     <span className="text-[9px] sm:text-[10px] uppercase tracking-wide px-1.5 py-0.5 bg-gradient-to-r from-red-800 to-red-600 text-white rounded font-semibold">
//                       {product.category?.name || "General"}
//                     </span>
//                     {!outOfStock && (
//                       <span className="text-[10px] sm:text-xs text-green-600 font-semibold flex items-center gap-1">
//                         <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
//                         In Stock
//                       </span>
//                     )}
//                   </div>

//                   <div className="mt-2.5 flex items-baseline gap-1.5 flex-wrap">
//                     <span className="text-base sm:text-lg font-bold text-[#4a2e18]">
//                       ₹{Number(product.price || 0).toLocaleString("en-IN")}
//                     </span>
//                     {discount.mrp > 0 && (
//                       <span className="text-[11px] sm:text-xs text-gray-400 line-through">
//                         ₹{discount.mrp.toLocaleString("en-IN")}
//                       </span>
//                     )}
//                   </div>

//                   {discount.save > 0 && (
//                     <div className="mt-1">
//                       <span className="text-[10px] sm:text-xs font-bold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded">
//                         Save ₹{discount.save.toLocaleString("en-IN")}
//                       </span>
//                     </div>
//                   )}

//                   <div className="flex-1"></div>

//                   {/* Action Buttons */}
//                   <div className="mt-3 flex items-center gap-1.5 sm:gap-2">
//                     <button
//                       onClick={(e) => handleAddToCart(e, product)}
//                       disabled={outOfStock}
//                       className={`flex-1 py-2 sm:py-2.5 px-3 rounded-lg text-[11px] sm:text-xs font-bold tracking-wide transition-all duration-300 shadow-sm ${
//                         !outOfStock
//                           ? "bg-gradient-to-r from-red-800 to-red-600 text-white hover:shadow-[0_6px_16px_rgba(140,10,21,0.35)] hover:-translate-y-0.5 active:translate-y-0"
//                           : "bg-gray-100 text-gray-400 cursor-not-allowed"
//                       }`}
//                     >
//                       {!outOfStock ? "BUY NOW" : "SOLD OUT"}
//                     </button>

//                     <button
//                       onClick={(e) => handleAddToCart(e, product)}
//                       disabled={outOfStock}
//                       title="Add to Cart"
//                       aria-label="Add to cart"
//                       className={`p-2 sm:p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-center ${
//                         !outOfStock
//                           ? "border-[#edd5b9] text-[#4a2e18] hover:bg-[#fdf2f0] hover:border-[#8c0a15]/40 hover:-translate-y-0.5 active:translate-y-0"
//                           : "border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50"
//                       }`}
//                     >
//                       <ShoppingBag className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FestivalCollection;

import React, { useEffect, useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import useProductStore from "../store/useProductStore";
import useWishlistStore from "../store/useWishlistStore";
import useCartStore from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

const FestivalCollection = () => {
  const navigate = useNavigate();
  const { products, loading, error, fetchProducts } = useProductStore();
  const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();

  const [wishlistLoading, setWishlistLoading] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");

  useEffect(() => {
    fetchProducts();
    fetchWishlist();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const actualUserId = user.id || user._id || localStorage.getItem("cartUserId");
    if (actualUserId) setUserId(actualUserId);
  }, [fetchProducts, fetchWishlist, setUserId]);

  const showToastMessage = (message, type = "info") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleCardClick = (productId) => navigate(`/product/${productId}`);

  const handleWishlistToggle = async (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlistLoading(productId);

    if (isInWishlist(productId)) {
      const result = await removeFromWishlist(productId);
      if (!result.success && result.error?.includes("login")) {
        showToastMessage("Please login to manage wishlist", "error");
      } else if (result.success) {
        showToastMessage("Removed from wishlist", "success");
      }
    } else {
      const result = await addToWishlist(productId);
      if (!result.success && result.error?.includes("login")) {
        showToastMessage("Please login to manage wishlist", "error");
      } else if (result.success) {
        showToastMessage("Added to wishlist ❤️", "success");
      }
    }
    setWishlistLoading(null);
  };

  const handleAddToCart = async (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const actualUserId = user.id || user._id || localStorage.getItem("cartUserId");

    if (!token || !actualUserId) {
      showToastMessage("Please login to add items to cart", "error");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }
    setUserId(actualUserId);
    const result = await addToCart(product._id, 1);
    if (result.success) {
      showToastMessage("Item added to cart! 🛒", "success");
    } else {
      showToastMessage(result.error || "Failed to add to cart", "error");
    }
  };

  const getDiscount = (product) => {
    const price = Number(product.price) || 0;
    const mrp = Number(product.mrp) || 0;
    if (mrp > price && mrp > 0) {
      return {
        percent: product.discountPercent || Math.round(((mrp - price) / mrp) * 100),
        save: mrp - price,
        mrp,
      };
    }
    return { percent: 0, save: 0, mrp: 0 };
  };

  const festivalOnly = products.filter((p) => {
    const catName = (p.category?.name || "").toLowerCase();
    return catName.includes("festival");
  });

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
        <div className="text-[#173B32] mt-4 font-medium">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-[#173B32] font-medium">Error: {error}</div>
      </div>
    );
  }

  if (festivalOnly.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-[#6B5038] font-medium">No Festival Collections available</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F5EBDD] min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4">

        {showToast && (
          <div
            className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-down ${
              toastType === "success"
                ? "bg-[#173B32]"
                : toastType === "error"
                ? "bg-[#B58A3A]"
                : "bg-[#173B32]"
            } text-[#F5EBDD] max-w-sm font-medium`}
          >
            {toastMessage}
          </div>
        )}

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {festivalOnly.slice(0, 5).map((product) => {
            const discount = getDiscount(product);
            const outOfStock = product.stock === 0;

            return (
              <div
                key={product._id}
                onClick={() => handleCardClick(product._id)}
                className="bg-[#F5EBDD] rounded-lg border border-[#B58A3A]/25 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#B58A3A]/60 transition-all duration-300 relative group cursor-pointer flex flex-col"
              >
                {discount.percent > 0 && (
                  <div className="absolute top-2 left-2 z-20 bg-[#173B32] text-[#F5EBDD] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded">
                    {discount.percent}% OFF
                  </div>
                )}

                <button
                  onClick={(e) => handleWishlistToggle(e, product._id)}
                  disabled={wishlistLoading === product._id}
                  aria-label="Toggle wishlist"
                  className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isInWishlist(product._id)
                        ? "fill-[#B58A3A] text-[#B58A3A]"
                        : "text-[#6B5038] hover:text-[#B58A3A]"
                    } ${wishlistLoading === product._id ? "animate-pulse" : ""}`}
                  />
                </button>

                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#faf6f0] flex-shrink-0">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag className="w-10 h-10 text-[#B58A3A]" />
                    </div>
                  )}

                  {outOfStock && (
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center z-10">
                      <span className="bg-[#173B32] text-[#F5EBDD] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-2 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-[#173B32] line-clamp-2 min-h-[30px] mb-1 group-hover:text-[#B58A3A] transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-1 flex-wrap">
                      <span className="text-[10px] px-1.5 py-0.5 bg-[#B58A3A]/15 text-[#173B32] rounded font-medium">
                        {product.category?.name || "General"}
                      </span>
                      {!outOfStock && (
                        <span className="text-[10px] text-[#173B32] font-medium">
                          In Stock
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-2 flex-wrap">
                      <p className="text-sm font-bold text-[#173B32]">
                        ₹{Number(product.price || 0).toLocaleString("en-IN")}
                      </p>
                      {discount.mrp > 0 && (
                        <>
                          <span className="text-[11px] text-[#6B5038]/70 line-through">
                            ₹{discount.mrp.toLocaleString("en-IN")}
                          </span>
                          <span className="text-[10px] font-bold text-[#173B32] bg-[#B58A3A]/20 px-1.5 py-0.5 rounded">
                            {discount.percent}% OFF
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* ✅ Add to Cart — BADA button */}
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={outOfStock}
                    className={`w-full py-2.5 px-4 rounded-md text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      !outOfStock
                        ? "bg-[#173B32] hover:bg-[#0f2820] text-[#F5EBDD] shadow-sm hover:shadow-md"
                        : "bg-[#B58A3A]/20 text-[#6B5038] cursor-not-allowed"
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {!outOfStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FestivalCollection;