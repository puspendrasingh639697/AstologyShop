


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BiHeart, BiShoppingBag } from "react-icons/bi";
// import useProductStore from "../store/useProductStore";
// import useCartStore from "../store/useCartStore";
// import useWishlistStore from "../store/useWishlistStore";

// export default function PujaSamagri() {
//   const navigate = useNavigate();

//   const { products, loading, fetchProducts } = useProductStore();
//   const { addToCart, setUserId } = useCartStore();
//   const {
//     wishlist,
//     fetchWishlist,
//     addToWishlist,
//     removeFromWishlist,
//     isInWishlist,
//   } = useWishlistStore();

//   useEffect(() => {
//     fetchProducts();
//     fetchWishlist();

//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     const actualUserId =
//       user.id || user._id || localStorage.getItem("cartUserId");
//     if (actualUserId) setUserId(actualUserId);
//   }, [fetchProducts, fetchWishlist, setUserId]);

//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   const handleAddToCart = async (e, product) => {
//     e.stopPropagation();

//     const token = localStorage.getItem("token");
//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     const actualUserId =
//       user.id || user._id || localStorage.getItem("cartUserId");

//     if (!token || !actualUserId) {
//       alert("Please login to add items to cart");
//       setTimeout(() => navigate("/login"), 1000);
//       return;
//     }

//     setUserId(actualUserId);

//     const productForCart = {
//       _id: product._id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//     };

//     const result = await addToCart(productForCart, 1);

//     if (result.success) {
//       alert(`${product.name} added to cart successfully! 🛒`);
//     } else {
//       alert(result.error || "Failed to add to cart");
//     }
//   };

//   const handleToggleWishlist = async (e, productId) => {
//     e.stopPropagation();
//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Please login to manage wishlist");
//       return;
//     }

//     if (isInWishlist(productId)) {
//       await removeFromWishlist(productId);
//     } else {
//       await addToWishlist(productId);
//     }
//   };

//   return (
//     <div className="w-full bg-white min-h-screen pb-10">

//       <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-4">

//         {/* Section Title */}
//         <div className="mb-6 pb-3 text-center">
//           <div className="flex items-center justify-center gap-3 mb-2">
//             <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#5A1F1F]"></span>
//             <span className="text-[#B58A3A] text-sm">✦</span>
//             <h2 className="text-2xl sm:text-3xl font-serif text-[#5A1F1F] tracking-wide px-2">
//               All Puja Samagri & Kits
//             </h2>
//             <span className="text-[#B58A3A] text-sm">✦</span>
//             <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#5A1F1F]"></span>
//           </div>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <div className="text-center py-16 text-[#5A1F1F] font-medium">
//             Loading products...
//           </div>
//         )}

//         {/* No products */}
//         {!loading && products.length === 0 && (
//           <div className="text-center py-16 text-[#6B5038]">
//             No products available right now.
//           </div>
//         )}

//         {/* Products Grid — 5 Cards */}
//         {!loading && products.length > 0 && (
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
//             {products.map((product) => {
//               const isWishlisted = isInWishlist(product._id);

//               const price = Number(product.price) || 0;
//               const mrp = Number(product.mrp) || 0;
//               const discountPercent =
//                 product.discountPercent ||
//                 (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);

//               return (
//                 <div
//                   key={product._id}
//                   onClick={() => handleProductClick(product._id)}
//                   className="bg-[#F5EBDD] rounded-lg border border-[#B58A3A]/25 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#B58A3A]/60 transition-all duration-300 relative group cursor-pointer flex flex-col"
//                 >
//                   {/* Discount Badge */}
//                   {discountPercent > 0 && (
//                     <div className="absolute top-1.5 left-1.5 z-20 bg-[#5A1F1F] text-[#F5EBDD] text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">
//                       {discountPercent}% OFF
//                     </div>
//                   )}

//                   {/* Image Container — Chhota */}
//                   <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-[#faf6f0] flex-shrink-0">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                       onError={(e) => {
//                         e.target.src =
//                           "https://via.placeholder.com/400x400?text=No+Image";
//                       }}
//                     />

//                     {/* Wishlist */}
//                     <button
//                       onClick={(e) => handleToggleWishlist(e, product._id)}
//                       className="absolute top-1.5 right-1.5 z-20 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
//                     >
//                       <BiHeart
//                         className={`w-3.5 h-3.5 transition-colors ${
//                           isWishlisted
//                             ? "fill-[#B58A3A] text-[#B58A3A]"
//                             : "text-[#6B5038] hover:text-[#B58A3A]"
//                         }`}
//                       />
//                     </button>
//                   </div>

//                   {/* Product Info — Compact */}
//                   <div className="p-2 flex flex-col flex-1 justify-between">
//                     <div>
//                       {/* Rating */}
//                       {product.rating && (
//                         <div className="flex items-center gap-1 text-[10px] text-[#B58A3A] font-bold mb-0.5">
//                           <span>⭐ {product.rating}</span>
//                           {product.numReviews > 0 && (
//                             <span className="text-[#6B5038] font-normal">
//                               ({product.numReviews})
//                             </span>
//                           )}
//                         </div>
//                       )}

//                       {/* Title */}
//                       <h3 className="text-[11px] sm:text-xs font-medium text-[#5A1F1F] line-clamp-2 min-h-[26px] mb-1 group-hover:text-[#B58A3A] transition-colors">
//                         {product.name}
//                       </h3>

//                       {/* Category + Stock */}
//                       <div className="flex items-center gap-1 mb-1 flex-wrap">
//                         <span className="text-[9px] px-1 py-0.5 bg-[#B58A3A]/15 text-[#5A1F1F] rounded font-medium">
//                           {product.category?.name || "General"}
//                         </span>
//                         {product.stock > 0 && (
//                           <span className="text-[9px] text-[#5A1F1F] font-medium">
//                             In Stock
//                           </span>
//                         )}
//                       </div>

//                       {/* Pricing */}
//                       <div className="flex items-baseline gap-1 mb-1.5 flex-wrap">
//                         <p className="text-[13px] font-bold text-[#5A1F1F]">
//                           ₹{price.toLocaleString("en-IN")}
//                         </p>
//                         {mrp > price && (
//                           <span className="text-[10px] text-[#6B5038]/70 line-through">
//                             ₹{mrp.toLocaleString("en-IN")}
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     {/* Add to Cart — Compact */}
//                     <button
//                       onClick={(e) => handleAddToCart(e, product)}
//                       className="w-full py-1.5 px-2 rounded-md text-[10px] sm:text-[11px] font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer bg-[#5A1F1F] hover:bg-[#3d1414] text-[#F5EBDD]"
//                     >
//                       <BiShoppingBag className="w-3 h-3" /> Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import useWishlistStore from "../store/useWishlistStore";

export default function PujaSamagri() {
  const navigate = useNavigate();

  const { products, loading, fetchProducts } = useProductStore();
  const { addToCart, setUserId } = useCartStore();
  const {
    wishlist,
    fetchWishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlistStore();

  useEffect(() => {
    fetchProducts();
    fetchWishlist();

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const actualUserId =
      user.id || user._id || localStorage.getItem("cartUserId");
    if (actualUserId) setUserId(actualUserId);
  }, [fetchProducts, fetchWishlist, setUserId]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = async (e, product) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const actualUserId =
      user.id || user._id || localStorage.getItem("cartUserId");

    if (!token || !actualUserId) {
      alert("Please login to add items to cart");
      setTimeout(() => navigate("/login"), 1000);
      return;
    }

    setUserId(actualUserId);

    const productForCart = {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
    };

    const result = await addToCart(productForCart, 1);

    if (result.success) {
      alert(`${product.name} added to cart successfully! 🛒`);
    } else {
      alert(result.error || "Failed to add to cart");
    }
  };

  const handleToggleWishlist = async (e, productId) => {
    e.stopPropagation();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to manage wishlist");
      return;
    }

    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
    } else {
      await addToWishlist(productId);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen pb-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-4">

        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#5A1F1F] tracking-wide">
              All Puja Samagri & Kits
            </h2>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
            Everything you need for your sacred rituals.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="w-12 h-12 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* No products */}
        {!loading && products.length === 0 && (
          <div className="text-center py-16 text-[#6B5038] font-medium">
            No products available right now.
          </div>
        )}

        {/* ✅ PRODUCTS GRID (Premium White Cards) */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {products.map((product) => {
              const isWishlisted = isInWishlist(product._id);
              const price = Number(product.price) || 0;
              const mrp = Number(product.mrp) || 0;
              const discountPercent =
                product.discountPercent ||
                (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);
              const outOfStock = product.stock === 0;

              return (
                <div
                  key={product._id}
                  onClick={() => handleProductClick(product._id)}
                  // ✅ SHADOW UPDATE: White Card, Grey Border, Bottom Shadow
                  className="bg-white border border-gray-100  hover:shadow-[0_12px_25px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer flex flex-col h-full"
                >
                  
                  {/* ✅ IMAGE SECTION */}
                  <div className="p-2 pb-0">
                    <div className="relative w-full h-[240px] sm:h-[260px] overflow-hidden bg-gray-50 flex-shrink-0">
                      
                      {/* Discount Badge */}
                      {discountPercent > 0 && (
                        <div className="absolute top-0 right-0 z-20 bg-[#4A1515] text-white text-[11px] font-bold px-2.5 py-1">
                          {discountPercent}% OFF
                        </div>
                      )}

                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => handleToggleWishlist(e, product._id)}
                        className="absolute top-2 left-2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors cursor-pointer border border-gray-100"
                      >
                        <BiHeart
                          className={`w-4 h-4 transition-colors ${
                            isWishlisted
                              ? "fill-[#C14F3A] text-[#C14F3A]"
                              : "text-gray-400 hover:text-[#C14F3A]"
                          }`}
                        />
                      </button>

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x400?text=No+Image";
                        }}
                      />

                      {/* Out of Stock Overlay */}
                      {outOfStock && (
                        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center z-10">
                          <span className="bg-[#5A1F1F] text-[#F5EBDD] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ✅ PRODUCT INFO SECTION */}
                  <div className="px-3 py-4 flex flex-col flex-1 justify-between">
                    
                    <div>
                      {/* Rating */}
                      {product.rating && (
                        <div className="flex items-center gap-1 text-[11px] text-[#B58A3A] font-bold mb-1">
                          <span>⭐ {product.rating}</span>
                          {product.numReviews > 0 && (
                            <span className="text-gray-400 font-normal">
                              ({product.numReviews})
                            </span>
                          )}
                        </div>
                      )}

                      {/* Title (1 Line) */}
                      <h3 className="text-[14px] sm:text-[15px] font-medium text-gray-800 line-clamp-1 mb-1 leading-snug">
                        {product.name}
                      </h3>

                      {/* Description (1 Line) */}
                      <p className="text-[11px] sm:text-[12px] text-gray-500 line-clamp-1 mb-2 leading-snug">
                        {product.description || "Handcrafted with pure ingredients for your daily rituals and devotion."}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-1.5 mt-auto">
                        <p className="text-[15px] font-bold text-gray-900">
                          ₹{price.toLocaleString("en-IN")}
                        </p>
                        {mrp > price && (
                          <span className="text-[12px] text-gray-400 line-through">
                            ₹{mrp.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* ✅ Add to Cart Button (Pill Shape) */}
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      disabled={outOfStock}
                      className={`w-full mt-3 py-2.5 rounded-md text-[14px] font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                        !outOfStock
                          ? "bg-[#7b1e2b] hover:bg-[#A84330] text-white shadow-sm"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      
                      {!outOfStock ? "Add to Cart" : "Out of Stock"}
                    </button>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}