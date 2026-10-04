
// // import React, { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { BiHeart, BiShoppingBag } from "react-icons/bi";
// // import useProductStore from "../store/useProductStore";
// // import useCartStore from "../store/useCartStore";
// // import useWishlistStore from "../store/useWishlistStore";

// // export default function PujaSamagri() {
// //   const navigate = useNavigate();

// //   // ✅ Zustand stores
// //   const { products, loading, fetchProducts } = useProductStore();
// //   const { addToCart, setUserId } = useCartStore();
// //   const {
// //     wishlist,
// //     fetchWishlist,
// //     addToWishlist,
// //     removeFromWishlist,
// //     isInWishlist,
// //   } = useWishlistStore();

// //   // ✅ Products + Wishlist fetch karo
// //   useEffect(() => {
// //     fetchProducts();
// //     fetchWishlist();

// //     const user = JSON.parse(localStorage.getItem("user") || "{}");
// //     const actualUserId =
// //       user.id || user._id || localStorage.getItem("cartUserId");
// //     if (actualUserId) setUserId(actualUserId);
// //   }, [fetchProducts, fetchWishlist, setUserId]);

// //   // ✅ Product click
// //   const handleProductClick = (productId) => {
// //     navigate(`/product/${productId}`);
// //   };

// //   // ✅ Add to Cart
// //   const handleAddToCart = async (e, product) => {
// //     e.stopPropagation();

// //     const token = localStorage.getItem("token");
// //     const user = JSON.parse(localStorage.getItem("user") || "{}");
// //     const actualUserId =
// //       user.id || user._id || localStorage.getItem("cartUserId");

// //     if (!token || !actualUserId) {
// //       alert("Please login to add items to cart");
// //       setTimeout(() => navigate("/login"), 1000);
// //       return;
// //     }

// //     setUserId(actualUserId);

// //     const productForCart = {
// //       _id: product._id,
// //       name: product.name,
// //       price: product.price,
// //       image: product.image,
// //     };

// //     const result = await addToCart(productForCart, 1);

// //     if (result.success) {
// //       alert(`${product.name} added to cart successfully! 🛒`);
// //     } else {
// //       alert(result.error || "Failed to add to cart");
// //     }
// //   };

// //   // ✅ Wishlist toggle
// //   const handleToggleWishlist = async (e, productId) => {
// //     e.stopPropagation();
// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       alert("Please login to manage wishlist");
// //       return;
// //     }

// //     if (isInWishlist(productId)) {
// //       await removeFromWishlist(productId);
// //     } else {
// //       await addToWishlist(productId);
// //     }
// //   };

// //   return (
// //     <div className="w-full bg-white min-h-screen pb-16">

// //       {/* Main Content Container */}
// //       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4">

// //         {/* Section Title — Center Aligned */}
// //         <div className="mb-8 pb-4 text-center">
// //           <h2 className="text-2xl sm:text-3xl font-bold text-[#8c0a15]">
// //             All Puja Samagri & Kits
// //           </h2>
// //           <div className="flex items-center justify-center gap-3 mt-3">
// //             <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
// //             <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
// //             <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
// //           </div>
// //         </div>

// //         {/* Loading */}
// //         {loading && (
// //           <div className="text-center py-20 text-[#4a2e18]">
// //             Loading products...
// //           </div>
// //         )}

// //         {/* No products */}
// //         {!loading && products.length === 0 && (
// //           <div className="text-center py-20 text-stone-500">
// //             No products available right now.
// //           </div>
// //         )}

// //         {/* Products Grid */}
// //         {!loading && products.length > 0 && (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //             {products.map((product) => {
// //               const isWishlisted = isInWishlist(product._id);

// //               const price = Number(product.price) || 0;
// //               const mrp = Number(product.mrp) || 0;
// //               const discountPercent =
// //                 product.discountPercent ||
// //                 (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);

// //               return (
// //                 <div
// //                   key={product._id}
// //                   onClick={() => handleProductClick(product._id)}
// //                   className="bg-white rounded-xl shadow-md overflow-hidden border border-red-100 hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer relative"
// //                 >
// //                   {/* ✅ Discount Badge */}
// //                   {discountPercent > 0 && (
// //                     <div className="absolute top-3 left-3 bg-gradient-to-r from-red-800 to-red-600 text-white text-[10px] font-bold px-2 py-1 rounded z-10">
// //                       {discountPercent}% OFF
// //                     </div>
// //                   )}

// //                   {/* Image & Tags */}
// //                   <div className="relative overflow-hidden h-64 flex items-center justify-center p-4">
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded"
// //                       onError={(e) => {
// //                         e.target.src =
// //                           "https://via.placeholder.com/400x400?text=No+Image";
// //                       }}
// //                     />

// //                     {/* Wishlist Button */}
// //                     <button
// //                       onClick={(e) => handleToggleWishlist(e, product._id)}
// //                       className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform z-10"
// //                     >
// //                       <BiHeart
// //                         className={
// //                           isWishlisted
// //                             ? "text-red-600 fill-red-600"
// //                             : "text-gray-500"
// //                         }
// //                       />
// //                     </button>
// //                   </div>

// //                   {/* Product Info */}
// //                   <div className="p-4 flex flex-col flex-grow justify-between">
// //                     <div>
// //                       {/* Rating */}
// //                       {product.rating && (
// //                         <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
// //                           <span>⭐ {product.rating}</span>
// //                           {product.numReviews > 0 && (
// //                             <span className="text-black font-normal">
// //                               ({product.numReviews} reviews)
// //                             </span>
// //                           )}
// //                         </div>
// //                       )}

// //                       {/* Title */}
// //                       <h3 className="text-black text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
// //                         {product.name}
// //                       </h3>
// //                     </div>

// //                     <div>
// //                       {/* ✅ Pricing with Discount */}
// //                       <div className="flex items-center gap-2 mb-4 flex-wrap">
// //                         <span className="text-lg font-bold text-[#8c0a15]">
// //                           ₹{price.toLocaleString("en-IN")}
// //                         </span>

// //                         {mrp > price && (
// //                           <>
// //                             <span className="text-sm text-gray-400 line-through">
// //                               ₹{mrp.toLocaleString("en-IN")}
// //                             </span>
// //                             <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
// //                               Save ₹{(mrp - price).toLocaleString("en-IN")}
// //                             </span>
// //                           </>
// //                         )}
// //                       </div>

// //                       {/* Add to Cart */}
// //                       <button
// //                         onClick={(e) => handleAddToCart(e, product)}
// //                         className="w-full bg-gradient-to-r from-red-800 to-red-600 hover:bg-[#6b080f] text-white py-2.5 rounded-md text-sm font-semibold flex items-center justify-center gap-2 shadow transition-colors"
// //                       >
// //                         <BiShoppingBag className="text-lg" /> Add to Cart
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BiHeart, BiShoppingBag } from "react-icons/bi";
// import useProductStore from "../store/useProductStore";
// import useCartStore from "../store/useCartStore";
// import useWishlistStore from "../store/useWishlistStore";

// export default function PujaSamagri() {
//   const navigate = useNavigate();

//   // ✅ Zustand stores
//   const { products, loading, fetchProducts } = useProductStore();
//   const { addToCart, setUserId } = useCartStore();
//   const {
//     wishlist,
//     fetchWishlist,
//     addToWishlist,
//     removeFromWishlist,
//     isInWishlist,
//   } = useWishlistStore();

//   // ✅ Products + Wishlist fetch karo
//   useEffect(() => {
//     fetchProducts();
//     fetchWishlist();

//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     const actualUserId =
//       user.id || user._id || localStorage.getItem("cartUserId");
//     if (actualUserId) setUserId(actualUserId);
//   }, [fetchProducts, fetchWishlist, setUserId]);

//   // ✅ Product click
//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   // ✅ Add to Cart
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

//   // ✅ Wishlist toggle
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
//     <div className="w-full bg-[#F5EBDD] min-h-screen pb-16">

//       {/* Main Content Container */}
//       <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-4">

//         {/* Section Title — Center Aligned */}
//         <div className="mb-8 pb-4 text-center">
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
//           <div className="text-center py-20 text-[#5A1F1F] font-medium">
//             Loading products...
//           </div>
//         )}

//         {/* No products */}
//         {!loading && products.length === 0 && (
//           <div className="text-center py-20 text-[#6B5038]">
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
//                   {/* ✅ Discount Badge */}
//                   {discountPercent > 0 && (
//                     <div className="absolute top-2 left-2 z-20 bg-[#5A1F1F] text-[#F5EBDD] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded">
//                       {discountPercent}% OFF
//                     </div>
//                   )}

//                   {/* Image Container */}
//                   <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#faf6f0] flex-shrink-0">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                       onError={(e) => {
//                         e.target.src =
//                           "https://via.placeholder.com/400x400?text=No+Image";
//                       }}
//                     />

//                     {/* Wishlist Button */}
//                     <button
//                       onClick={(e) => handleToggleWishlist(e, product._id)}
//                       className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
//                     >
//                       <BiHeart
//                         className={`w-4 h-4 transition-colors ${
//                           isWishlisted
//                             ? "fill-[#B58A3A] text-[#B58A3A]"
//                             : "text-[#6B5038] hover:text-[#B58A3A]"
//                         }`}
//                       />
//                     </button>
//                   </div>

//                   {/* Product Info */}
//                   <div className="p-2 flex flex-col flex-1 justify-between">
//                     <div>
//                       {/* Rating */}
//                       {product.rating && (
//                         <div className="flex items-center gap-1 text-[10px] text-[#B58A3A] font-bold mb-1">
//                           <span>⭐ {product.rating}</span>
//                           {product.numReviews > 0 && (
//                             <span className="text-[#6B5038] font-normal">
//                               ({product.numReviews})
//                             </span>
//                           )}
//                         </div>
//                       )}

//                       {/* Title */}
//                       <h3 className="text-xs sm:text-sm font-medium text-[#5A1F1F] line-clamp-2 min-h-[30px] mb-1 group-hover:text-[#B58A3A] transition-colors">
//                         {product.name}
//                       </h3>

//                       {/* Category + Stock */}
//                       <div className="flex items-center gap-1 mb-1 flex-wrap">
//                         <span className="text-[10px] px-1.5 py-0.5 bg-[#B58A3A]/15 text-[#5A1F1F] rounded font-medium">
//                           {product.category?.name || "General"}
//                         </span>
//                         {product.stock > 0 && (
//                           <span className="text-[10px] text-[#5A1F1F] font-medium">
//                             In Stock
//                           </span>
//                         )}
//                       </div>

//                       {/* Pricing with Discount */}
//                       <div className="flex items-baseline gap-1.5 mb-2 flex-wrap">
//                         <p className="text-sm font-bold text-[#5A1F1F]">
//                           ₹{price.toLocaleString("en-IN")}
//                         </p>
//                         {mrp > price && (
//                           <>
//                             <span className="text-[11px] text-[#6B5038]/70 line-through">
//                               ₹{mrp.toLocaleString("en-IN")}
//                             </span>
//                             <span className="text-[10px] font-bold text-[#5A1F1F] bg-[#B58A3A]/20 px-1.5 py-0.5 rounded">
//                               Save ₹{(mrp - price).toLocaleString("en-IN")}
//                             </span>
//                           </>
//                         )}
//                       </div>
//                     </div>

//                     {/* Add to Cart */}
//                     <button
//                       onClick={(e) => handleAddToCart(e, product)}
//                       className="w-full py-2.5 px-4 rounded-md text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-[#5A1F1F] hover:bg-[#3d1414] text-[#F5EBDD] shadow-sm hover:shadow-md"
//                     >
//                       <BiShoppingBag className="w-4 h-4" /> Add to Cart
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
    <div className="w-full bg-[#F5EBDD] min-h-screen pb-10">

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-4">

        {/* Section Title */}
        <div className="mb-6 pb-3 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#5A1F1F]"></span>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#5A1F1F] tracking-wide px-2">
              All Puja Samagri & Kits
            </h2>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#5A1F1F]"></span>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16 text-[#5A1F1F] font-medium">
            Loading products...
          </div>
        )}

        {/* No products */}
        {!loading && products.length === 0 && (
          <div className="text-center py-16 text-[#6B5038]">
            No products available right now.
          </div>
        )}

        {/* Products Grid — 5 Cards */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {products.map((product) => {
              const isWishlisted = isInWishlist(product._id);

              const price = Number(product.price) || 0;
              const mrp = Number(product.mrp) || 0;
              const discountPercent =
                product.discountPercent ||
                (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);

              return (
                <div
                  key={product._id}
                  onClick={() => handleProductClick(product._id)}
                  className="bg-[#F5EBDD] rounded-lg border border-[#B58A3A]/25 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#B58A3A]/60 transition-all duration-300 relative group cursor-pointer flex flex-col"
                >
                  {/* Discount Badge */}
                  {discountPercent > 0 && (
                    <div className="absolute top-1.5 left-1.5 z-20 bg-[#5A1F1F] text-[#F5EBDD] text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {discountPercent}% OFF
                    </div>
                  )}

                  {/* Image Container — Chhota */}
                  <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-[#faf6f0] flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x400?text=No+Image";
                      }}
                    />

                    {/* Wishlist */}
                    <button
                      onClick={(e) => handleToggleWishlist(e, product._id)}
                      className="absolute top-1.5 right-1.5 z-20 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                    >
                      <BiHeart
                        className={`w-3.5 h-3.5 transition-colors ${
                          isWishlisted
                            ? "fill-[#B58A3A] text-[#B58A3A]"
                            : "text-[#6B5038] hover:text-[#B58A3A]"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Product Info — Compact */}
                  <div className="p-2 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Rating */}
                      {product.rating && (
                        <div className="flex items-center gap-1 text-[10px] text-[#B58A3A] font-bold mb-0.5">
                          <span>⭐ {product.rating}</span>
                          {product.numReviews > 0 && (
                            <span className="text-[#6B5038] font-normal">
                              ({product.numReviews})
                            </span>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-[11px] sm:text-xs font-medium text-[#5A1F1F] line-clamp-2 min-h-[26px] mb-1 group-hover:text-[#B58A3A] transition-colors">
                        {product.name}
                      </h3>

                      {/* Category + Stock */}
                      <div className="flex items-center gap-1 mb-1 flex-wrap">
                        <span className="text-[9px] px-1 py-0.5 bg-[#B58A3A]/15 text-[#5A1F1F] rounded font-medium">
                          {product.category?.name || "General"}
                        </span>
                        {product.stock > 0 && (
                          <span className="text-[9px] text-[#5A1F1F] font-medium">
                            In Stock
                          </span>
                        )}
                      </div>

                      {/* Pricing */}
                      <div className="flex items-baseline gap-1 mb-1.5 flex-wrap">
                        <p className="text-[13px] font-bold text-[#5A1F1F]">
                          ₹{price.toLocaleString("en-IN")}
                        </p>
                        {mrp > price && (
                          <span className="text-[10px] text-[#6B5038]/70 line-through">
                            ₹{mrp.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Add to Cart — Compact */}
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="w-full py-1.5 px-2 rounded-md text-[10px] sm:text-[11px] font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer bg-[#5A1F1F] hover:bg-[#3d1414] text-[#F5EBDD]"
                    >
                      <BiShoppingBag className="w-3 h-3" /> Add to Cart
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