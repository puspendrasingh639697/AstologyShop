


// // // import React, { useState, useEffect } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { BiHeart, BiShoppingBag, BiCheckCircle } from "react-icons/bi";
// // // import useProductStore from "../store/useProductStore";
// // // import useCartStore from "../store/useCartStore";
// // // import useWishlistStore from "../store/useWishlistStore";

// // // // Top Banner (static image rahegi — banner API se nahi aayega)
// // // import topBanner from "../assets/PujaSamagribaner.png";

// // // export default function PujaSamagri() {
// // //   const navigate = useNavigate();

// // //   // ✅ Zustand stores
// // //   const { products, loading, fetchProducts } = useProductStore();
// // //   const { addToCart, setUserId } = useCartStore();
// // //   const {
// // //     wishlist,
// // //     fetchWishlist,
// // //     addToWishlist,
// // //     removeFromWishlist,
// // //     isInWishlist,
// // //   } = useWishlistStore();

// // //   // ✅ Products + Wishlist fetch karo
// // //   useEffect(() => {
// // //     fetchProducts();
// // //     fetchWishlist();

// // //     const user = JSON.parse(localStorage.getItem("user") || "{}");
// // //     const actualUserId =
// // //       user.id || user._id || localStorage.getItem("cartUserId");
// // //     if (actualUserId) setUserId(actualUserId);
// // //   }, [fetchProducts, fetchWishlist, setUserId]);

// // //   // ✅ Product click → details page
// // //   const handleProductClick = (productId) => {
// // //     navigate(`/product/${productId}`);
// // //   };

// // //   // ✅ Add to Cart (dynamic)
// // //   const handleAddToCart = async (e, product) => {
// // //     e.stopPropagation(); // card click se navigate na ho

// // //     const token = localStorage.getItem("token");
// // //     const user = JSON.parse(localStorage.getItem("user") || "{}");
// // //     const actualUserId =
// // //       user.id || user._id || localStorage.getItem("cartUserId");

// // //     if (!token || !actualUserId) {
// // //       alert("Please login to add items to cart");
// // //       setTimeout(() => navigate("/login"), 1000);
// // //       return;
// // //     }

// // //     setUserId(actualUserId);

// // //     const productForCart = {
// // //       _id: product._id,
// // //       name: product.name,
// // //       price: product.price,
// // //       image: product.image,
// // //     };

// // //     const result = await addToCart(productForCart, 1);
// // //     if (result.success) {
// // //       alert(`${product.name} added to cart successfully! 🛒`);
// // //     } else {
// // //       alert(result.error || "Failed to add to cart");
// // //     }
// // //   };

// // //   // ✅ Wishlist toggle (dynamic)
// // //   const handleToggleWishlist = async (e, productId) => {
// // //     e.stopPropagation();
// // //     const token = localStorage.getItem("token");
// // //     if (!token) {
// // //       alert("Please login to manage wishlist");
// // //       return;
// // //     }

// // //     if (isInWishlist(productId)) {
// // //       await removeFromWishlist(productId);
// // //     } else {
// // //       await addToWishlist(productId);
// // //     }
// // //   };

// // //   return (
// // //     <div className="w-full bg-[#fff3df] min-h-screen  pb-16">

// // //       {/* Top Banner Section (static image) */}
// // //       <div className="w-full bg-[#fff3df] shadow-md relative pt-2 pb-2">
// // //         <div className="max-w-7xl mx-auto px-4">
// // //           <div className="relative w-full rounded-md overflow-hidden shadow-2xl">
// // //             <img
// // //               src={topBanner}
// // //               alt="Puja Samagri Banner"
// // //               className="w-full h-auto max-h-[380px] md:max-h-[450px] object-cover mx-auto"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Trust Badges Strip */}
// // //       <div className="bg-[#8c0a15] text-white py-3 px-4 shadow-inner mt-4">
// // //         <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs md:text-sm font-medium">
// // //           <div className="flex items-center gap-2">
// // //             <BiCheckCircle className="text-amber-400 text-lg" /> 100% Pure & Natural Herbs
// // //           </div>
// // //           <div className="flex items-center gap-2">
// // //             <BiCheckCircle className="text-amber-400 text-lg" /> Hygienically Packed
// // //           </div>
// // //           <div className="flex items-center gap-2">
// // //             <BiCheckCircle className="text-amber-400 text-lg" /> Complete Ritual Kits Available
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Content Container */}
// // //       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">

// // //         {/* Section Title */}
// // //         <div className="mb-8 border-b border-gray-300 pb-4">
// // //           <h2 className="text-2xl font-serif font-bold text-[#8c0a15]">
// // //             All Puja Samagri & Kits
// // //           </h2>
// // //         </div>

// // //         {/* Loading */}
// // //         {loading && (
// // //           <div className="text-center py-20 text-[#4a2e18]">
// // //             Loading products...
// // //           </div>
// // //         )}

// // //         {/* No products */}
// // //         {!loading && products.length === 0 && (
// // //           <div className="text-center py-20 text-stone-500">
// // //             No products available right now.
// // //           </div>
// // //         )}

// // //         {/* Products Grid */}
// // //         {!loading && products.length > 0 && (
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // //             {products.map((product) => {
// // //               const isWishlisted = isInWishlist(product._id);

// // //               return (
// // //                 <div
// // //                   key={product._id}
// // //                   onClick={() => handleProductClick(product._id)}
// // //                   className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-200/60 hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
// // //                 >
// // //                   {/* Image & Tags */}
// // //                   <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
// // //                     <img
// // //                       src={product.image}
// // //                       alt={product.name}
// // //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded"
// // //                     />

// // //                     {/* Tag Badge (agar API mein tag ho) */}
// // //                     {product.tag && (
// // //                       <span className="absolute top-3 left-3 bg-[#8c0a15] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
// // //                         {product.tag}
// // //                       </span>
// // //                     )}

// // //                     {/* Wishlist Button */}
// // //                     <button
// // //                       onClick={(e) => handleToggleWishlist(e, product._id)}
// // //                       className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform"
// // //                     >
// // //                       <BiHeart
// // //                         className={
// // //                           isWishlisted
// // //                             ? "text-red-600 fill-red-600"
// // //                             : "text-gray-500"
// // //                         }
// // //                       />
// // //                     </button>
// // //                   </div>

// // //                   {/* Product Info */}
// // //                   <div className="p-4 flex flex-col flex-grow justify-between">
// // //                     <div>
// // //                       {/* Rating (agar API se aaye) */}
// // //                       {product.rating && (
// // //                         <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
// // //                           <span>⭐ {product.rating}</span>
// // //                           {product.reviews && (
// // //                             <span className="text-gray-400 font-normal">
// // //                               ({product.reviews} reviews)
// // //                             </span>
// // //                           )}
// // //                         </div>
// // //                       )}

// // //                       {/* Title */}
// // //                       <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
// // //                         {product.name}
// // //                       </h3>
// // //                     </div>

// // //                     <div>
// // //                       {/* Pricing */}
// // //                       <div className="flex items-center gap-2 mb-4">
// // //                         <span className="text-lg font-bold text-[#8c0a15]">
// // //                           ₹{product.price?.toLocaleString()}
// // //                         </span>
// // //                         {product.originalPrice && (
// // //                           <span className="text-sm text-gray-400 line-through">
// // //                             ₹{product.originalPrice.toLocaleString()}
// // //                           </span>
// // //                         )}
// // //                       </div>

// // //                       {/* Add to Cart */}
// // //                       <button
// // //                         onClick={(e) => handleAddToCart(e, product)}
// // //                         className="w-full bg-[#8c0a15] hover:bg-[#6b080f] text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow transition-colors"
// // //                       >
// // //                         <BiShoppingBag className="text-lg" /> Add to Cart
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // // src/pages/PujaSamagri.jsx
// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { BiHeart, BiShoppingBag, BiCheckCircle } from "react-icons/bi";
// // import useProductStore from "../store/useProductStore";
// // import useCartStore from "../store/useCartStore";
// // import useWishlistStore from "../store/useWishlistStore";
// // import useSettingsStore from "../store/useSettingsStore";
// // import apiClient from "../config/apiClient";

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
// //   const { settings } = useSettingsStore();

// //   // ✅ Dynamic Banner State
// //   const [banners, setBanners] = useState([]);
// //   const [bannersLoading, setBannersLoading] = useState(true);

// //   // ✅ Products + Wishlist fetch karo
// //   useEffect(() => {
// //     fetchProducts();
// //     fetchWishlist();

// //     const user = JSON.parse(localStorage.getItem("user") || "{}");
// //     const actualUserId =
// //       user.id || user._id || localStorage.getItem("cartUserId");
// //     if (actualUserId) setUserId(actualUserId);
// //   }, [fetchProducts, fetchWishlist, setUserId]);

// //   // ✅ Dynamic Banners fetch karo
// //   useEffect(() => {
// //     const fetchBanners = async () => {
// //       try {
// //         console.log("🔍 Fetching banners for Puja Samagri...");

// //         const res = await apiClient.get("/banners/active?position=middle");

// //         console.log("✅ Banners response:", res.data);

// //         if (res.data.success) {
// //           setBanners(res.data.banners || []);
// //         }
// //       } catch (err) {
// //         console.error("❌ Banners fetch error:", err);
// //       } finally {
// //         setBannersLoading(false);
// //       }
// //     };

// //     fetchBanners();
// //   }, []);

// //   // ✅ Product click → details page
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
// //     <div className="w-full bg-white min-h-screen pb-4">
// //       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">

// //         {/* Section Title — Center Aligned */}
// //         <div className="mb-2 pb-2 bg-white text-center">
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

// //               // ✅ Discount calculate
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
// //                   <div className="relative overflow-hidden  h-64 flex items-center justify-center p-4">
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded"
// //                       onError={(e) => {
// //                         e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
// //                       }}
// //                     />

// //                     {/* Tag Badge */}
// //                     {product.tag && (
// //                       <span className="absolute top-3 left-3 bg-[#8c0a15] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
// //                         {product.tag}
// //                       </span>
// //                     )}

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
// //                       <h3 className=" text-black text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
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


// // src/pages/PujaSamagri.jsx
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
//     <div className="w-full bg-white min-h-screen pb-16">

//       {/* Main Content Container */}
//       <div className="max-w-7xl mx-auto px-2 md:px-4 mt-0">

        

//         {/* Loading */}
//         {loading && (
//           <div className="text-center py-20 text-[#4a2e18]">
//             Loading products...
//           </div>
//         )}

//         {/* No products */}
//         {!loading && products.length === 0 && (
//           <div className="text-center py-20 text-stone-500">
//             No products available right now.
//           </div>
//         )}

//         {/* Products Grid */}
//         {!loading && products.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
//                   className="bg-white rounded-xl shadow-md overflow-hidden border border-red-100 hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer relative"
//                 >
//                   {/* ✅ Discount Badge */}
//                   {discountPercent > 0 && (
//                     <div className="absolute top-3 left-3 bg-gradient-to-r from-red-800 to-red-600 text-white text-[10px] font-bold px-2 py-1 rounded z-10">
//                       {discountPercent}% OFF
//                     </div>
//                   )}

//                   {/* Image & Tags */}
//                   <div className="relative overflow-hidden h-64 flex items-center justify-center p-4">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded"
//                       onError={(e) => {
//                         e.target.src =
//                           "https://via.placeholder.com/400x400?text=No+Image";
//                       }}
//                     />

//                     {/* Wishlist Button */}
//                     <button
//                       onClick={(e) => handleToggleWishlist(e, product._id)}
//                       className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform z-10"
//                     >
//                       <BiHeart
//                         className={
//                           isWishlisted
//                             ? "text-red-600 fill-red-600"
//                             : "text-gray-500"
//                         }
//                       />
//                     </button>
//                   </div>

//                   {/* Product Info */}
//                   <div className="p-4 flex flex-col flex-grow justify-between">
//                     <div>
//                       {/* Rating */}
//                       {product.rating && (
//                         <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
//                           <span>⭐ {product.rating}</span>
//                           {product.numReviews > 0 && (
//                             <span className="text-black font-normal">
//                               ({product.numReviews} reviews)
//                             </span>
//                           )}
//                         </div>
//                       )}

//                       {/* Title */}
//                       <h3 className="text-black text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
//                         {product.name}
//                       </h3>
//                     </div>

//                     <div>
//                       {/* ✅ Pricing with Discount */}
//                       <div className="flex items-center gap-2 mb-4 flex-wrap">
//                         <span className="text-lg font-bold text-[#8c0a15]">
//                           ₹{price.toLocaleString("en-IN")}
//                         </span>

//                         {mrp > price && (
//                           <>
//                             <span className="text-sm text-gray-400 line-through">
//                               ₹{mrp.toLocaleString("en-IN")}
//                             </span>
//                             <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
//                               Save ₹{(mrp - price).toLocaleString("en-IN")}
//                             </span>
//                           </>
//                         )}
//                       </div>

//                       {/* Add to Cart */}
//                       <button
//                         onClick={(e) => handleAddToCart(e, product)}
//                         className="w-full bg-gradient-to-r from-red-800 to-red-600 hover:bg-[#6b080f] text-white py-2.5 rounded-md text-sm font-semibold flex items-center justify-center gap-2 shadow transition-colors"
//                       >
//                         <BiShoppingBag className="text-lg" /> Add to Cart
//                       </button>
//                     </div>
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

// src/pages/PujaSamagri.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import useWishlistStore from "../store/useWishlistStore";

export default function PujaSamagri() {
  const navigate = useNavigate();

  // ✅ Zustand stores
  const { products, loading, fetchProducts } = useProductStore();
  const { addToCart, setUserId } = useCartStore();
  const {
    wishlist,
    fetchWishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlistStore();

  // ✅ Products + Wishlist fetch karo
  useEffect(() => {
    fetchProducts();
    fetchWishlist();

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const actualUserId =
      user.id || user._id || localStorage.getItem("cartUserId");
    if (actualUserId) setUserId(actualUserId);
  }, [fetchProducts, fetchWishlist, setUserId]);

  // ✅ Product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // ✅ Add to Cart
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

  // ✅ Wishlist toggle
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

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4">

        {/* Section Title — Center Aligned */}
        <div className="mb-8 pb-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8c0a15]">
            All Puja Samagri & Kits
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-20 text-[#4a2e18]">
            Loading products...
          </div>
        )}

        {/* No products */}
        {!loading && products.length === 0 && (
          <div className="text-center py-20 text-stone-500">
            No products available right now.
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-red-100 hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer relative"
                >
                  {/* ✅ Discount Badge */}
                  {discountPercent > 0 && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-800 to-red-600 text-white text-[10px] font-bold px-2 py-1 rounded z-10">
                      {discountPercent}% OFF
                    </div>
                  )}

                  {/* Image & Tags */}
                  <div className="relative overflow-hidden h-64 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x400?text=No+Image";
                      }}
                    />

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => handleToggleWishlist(e, product._id)}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform z-10"
                    >
                      <BiHeart
                        className={
                          isWishlisted
                            ? "text-red-600 fill-red-600"
                            : "text-gray-500"
                        }
                      />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Rating */}
                      {product.rating && (
                        <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
                          <span>⭐ {product.rating}</span>
                          {product.numReviews > 0 && (
                            <span className="text-black font-normal">
                              ({product.numReviews} reviews)
                            </span>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-black text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <div>
                      {/* ✅ Pricing with Discount */}
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <span className="text-lg font-bold text-[#8c0a15]">
                          ₹{price.toLocaleString("en-IN")}
                        </span>

                        {mrp > price && (
                          <>
                            <span className="text-sm text-gray-400 line-through">
                              ₹{mrp.toLocaleString("en-IN")}
                            </span>
                            <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                              Save ₹{(mrp - price).toLocaleString("en-IN")}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Add to Cart */}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="w-full bg-gradient-to-r from-red-800 to-red-600 hover:bg-[#6b080f] text-white py-2.5 rounded-md text-sm font-semibold flex items-center justify-center gap-2 shadow transition-colors"
                      >
                        <BiShoppingBag className="text-lg" /> Add to Cart
                      </button>
                    </div>
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