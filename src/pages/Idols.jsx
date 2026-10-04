// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { BiHeart, BiShoppingBag, BiFilter, BiCheckCircle } from "react-icons/bi";
// // import useProductStore from "../store/useProductStore";
// // import useWishlistStore from "../store/useWishlistStore";
// // import useCartStore from "../store/useCartStore";

// // // Top Banner (static)
// // import topBanner from "../assets/idolsbenner.webp";

// // const Idols = () => {
// //   const navigate = useNavigate();

// //   const { products, loading, fetchProducts } = useProductStore();
// //   const { isInWishlist, addToWishlist, removeFromWishlist, fetchWishlist } = useWishlistStore();
// //   const { addToCart, setUserId } = useCartStore();

// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //   const [showToast, setShowToast] = useState(false);
// //   const [toastMessage, setToastMessage] = useState("");
// //   const [toastType, setToastType] = useState("success");

// //   useEffect(() => {
// //     fetchProducts();
// //     fetchWishlist();

// //     const user = JSON.parse(localStorage.getItem("user") || "{}");
// //     const actualUserId =
// //       user.id || user._id || localStorage.getItem("cartUserId");
// //     if (actualUserId) setUserId(actualUserId);
// //   }, [fetchProducts, fetchWishlist, setUserId]);

// //   const showToastMessage = (message, type = "success") => {
// //     setToastMessage(message);
// //     setToastType(type);
// //     setShowToast(true);
// //     setTimeout(() => setShowToast(false), 3000);
// //   };

// //   // ✅ Sirf "Idols" category ke products
// //   const idolsProducts = products.filter((p) => {
// //     const catName = (p.category?.name || "").toLowerCase();
// //     return catName.includes("idol");
// //   });

// //   // ✅ Deity-wise category filter (product name se)
// //   const getDeityFromName = (name) => {
// //     const n = (name || "").toLowerCase();
// //     if (n.includes("ganesh")) return "Ganesha";
// //     if (n.includes("laxmi") || n.includes("lakshmi")) return "Laxmi";
// //     if (n.includes("krishna")) return "Krishna";
// //     if (n.includes("hanuman")) return "Hanuman";
// //     if (n.includes("shiv") || n.includes("shivling")) return "Shiva";
// //     if (n.includes("durga") || n.includes("saraswati")) return "Devi";
// //     return "Other";
// //   };

// //   // ✅ Categories dynamically banao
// //   const categories = [
// //     "All",
// //     ...new Set(idolsProducts.map((p) => getDeityFromName(p.name))),
// //   ];

// //   const filteredProducts =
// //     selectedCategory === "All"
// //       ? idolsProducts
// //       : idolsProducts.filter(
// //           (p) => getDeityFromName(p.name) === selectedCategory
// //         );

// //   // ✅ Wishlist toggle
// //   const handleWishlistToggle = async (productId) => {
// //     if (isInWishlist(productId)) {
// //       await removeFromWishlist(productId);
// //       showToastMessage("Removed from wishlist", "success");
// //     } else {
// //       await addToWishlist(productId);
// //       showToastMessage("Added to wishlist ❤️", "success");
// //     }
// //   };

// //   // ✅ Add to cart
// //   const handleAddToCart = async (e, product) => {
// //     e.stopPropagation();

// //     const token = localStorage.getItem("token");
// //     const user = JSON.parse(localStorage.getItem("user") || "{}");
// //     const actualUserId =
// //       user.id || user._id || localStorage.getItem("cartUserId");

// //     if (!token || !actualUserId) {
// //       showToastMessage("Please login to add items to cart", "error");
// //       setTimeout(() => navigate("/login"), 2000);
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
// //       showToastMessage("Item added to cart! 🛒", "success");
// //     } else {
// //       showToastMessage(result.error || "Failed to add to cart", "error");
// //     }
// //   };

// //   if (loading)
// //     return <div className="text-center py-20 text-[#4a2e18]">Loading products...</div>;

// //   return (
// //     <div className="w-full bg-[#fff3df] min-h-screen font-sans pb-16">

// //       {/* Top Banner */}
// //       <div className="w-full bg-[#fff3df] shadow-md relative pt-2 pb-2">
// //         <div className="max-w-8xl mx-auto px-4">
// //           <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black">
// //             <img
// //               src={topBanner}
// //               alt="Divine Idols Banner"
// //               className="w-full h-auto max-h-[380px] md:max-h-[450px] object-cover mx-auto"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Trust Badges */}
// //       <div className="bg-[#8c0a15] text-white py-3 px-4 shadow-inner mt-4">
// //         <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs md:text-sm font-medium">
// //           <div className="flex items-center gap-2">
// //             <BiCheckCircle className="text-amber-400 text-lg" /> Premium Quality Brass
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <BiCheckCircle className="text-amber-400 text-lg" /> Handcrafted by Expert Artisans
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <BiCheckCircle className="text-amber-400 text-lg" /> Energized for Puja
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">

// //         {/* Category Filters */}
// //         <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-gray-300 pb-4">
// //           <div className="flex items-center gap-2 text-[#8c0a15] font-bold text-lg">
// //             <BiFilter className="text-2xl" /> Filter by Deity:
// //           </div>

// //           <div className="flex flex-wrap gap-2">
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => setSelectedCategory(cat)}
// //                 className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
// //                   selectedCategory === cat
// //                     ? "bg-[#8c0a15] text-white shadow-md"
// //                     : "bg-white text-gray-700 border border-gray-300 hover:bg-amber-100"
// //                 }`}
// //               >
// //                 {cat}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Toast */}
// //         {showToast && (
// //           <div
// //             className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white ${
// //               toastType === "success" ? "bg-green-600" : "bg-red-600"
// //             }`}
// //           >
// //             {toastMessage}
// //           </div>
// //         )}

// //         {/* Products Grid */}
// //         {filteredProducts.length === 0 ? (
// //           <div className="text-center py-16">
// //             <p className="text-lg text-gray-600 font-serif">
// //               No idols found in this category.
// //             </p>
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// //             {filteredProducts.map((product) => {
// //               const isWishlisted = isInWishlist(product._id);
// //               return (
// //                 <div
// //                   key={product._id}
// //                   onClick={() => navigate(`/product/${product._id}`)}
// //                   className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-200/60 hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
// //                 >
// //                   <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
// //                     />

// //                     {product.tag && (
// //                       <span className="absolute top-3 left-3 bg-[#8c0a15] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
// //                         {product.tag}
// //                       </span>
// //                     )}

// //                     <button
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleWishlistToggle(product._id);
// //                       }}
// //                       className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform"
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

// //                   <div className="p-4 flex flex-col flex-grow justify-between">
// //                     <div>
// //                       {product.rating && (
// //                         <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
// //                           <span>⭐ {product.rating}</span>
// //                           {product.reviews && (
// //                             <span className="text-gray-400 font-normal">
// //                               ({product.reviews})
// //                             </span>
// //                           )}
// //                         </div>
// //                       )}

// //                       <h3 className="font-serif font-bold text-gray-800 text-sm line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
// //                         {product.name}
// //                       </h3>
// //                     </div>

// //                     <div>
// //                       <div className="flex items-center gap-2 mb-4">
// //                         <span className="text-base font-bold text-[#8c0a15]">
// //                           ₹{product.price?.toLocaleString()}
// //                         </span>
// //                         {product.originalPrice && (
// //                           <span className="text-xs text-gray-400 line-through">
// //                             ₹{product.originalPrice.toLocaleString()}
// //                           </span>
// //                         )}
// //                       </div>

// //                       <button
// //                         onClick={(e) => handleAddToCart(e, product)}
// //                         className="w-full bg-[#8c0a15] hover:bg-[#6b080f] text-white py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow transition-colors"
// //                       >
// //                         <BiShoppingBag className="text-base" /> Add to Cart
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
// // };

// // export default Idols;


// // src/pages/Idols.jsx
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { BiHeart, BiShoppingBag, BiFilter } from "react-icons/bi";
// import useProductStore from "../store/useProductStore";
// import useWishlistStore from "../store/useWishlistStore";
// import useCartStore from "../store/useCartStore";

// const Idols = () => {
//   const navigate = useNavigate();

//   const { products, loading, fetchProducts } = useProductStore();
//   const { isInWishlist, addToWishlist, removeFromWishlist, fetchWishlist } = useWishlistStore();
//   const { addToCart, setUserId } = useCartStore();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const [toastType, setToastType] = useState("success");

//   useEffect(() => {
//     fetchProducts();
//     fetchWishlist();

//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     const actualUserId =
//       user.id || user._id || localStorage.getItem("cartUserId");
//     if (actualUserId) setUserId(actualUserId);
//   }, [fetchProducts, fetchWishlist, setUserId]);

//   const showToastMessage = (message, type = "success") => {
//     setToastMessage(message);
//     setToastType(type);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   };

//   // ✅ Sirf "Idols" category ke products
//   const idolsProducts = products.filter((p) => {
//     const catName = (p.category?.name || "").toLowerCase();
//     return catName.includes("idol");
//   });

//   // ✅ Deity-wise category filter (product name se)
//   const getDeityFromName = (name) => {
//     const n = (name || "").toLowerCase();
//     if (n.includes("ganesh")) return "Ganesha";
//     if (n.includes("laxmi") || n.includes("lakshmi")) return "Laxmi";
//     if (n.includes("krishna")) return "Krishna";
//     if (n.includes("hanuman")) return "Hanuman";
//     if (n.includes("shiv") || n.includes("shivling")) return "Shiva";
//     if (n.includes("durga") || n.includes("saraswati")) return "Devi";
//     return "Other";
//   };

//   // ✅ Categories dynamically banao
//   const categories = [
//     "All",
//     ...new Set(idolsProducts.map((p) => getDeityFromName(p.name))),
//   ];

//   const filteredProducts =
//     selectedCategory === "All"
//       ? idolsProducts
//       : idolsProducts.filter(
//           (p) => getDeityFromName(p.name) === selectedCategory
//         );

//   // ✅ Wishlist toggle
//   const handleWishlistToggle = async (productId) => {
//     if (isInWishlist(productId)) {
//       await removeFromWishlist(productId);
//       showToastMessage("Removed from wishlist", "success");
//     } else {
//       await addToWishlist(productId);
//       showToastMessage("Added to wishlist ❤️", "success");
//     }
//   };

//   // ✅ Add to cart
//   const handleAddToCart = async (e, product) => {
//     e.stopPropagation();

//     const token = localStorage.getItem("token");
//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     const actualUserId =
//       user.id || user._id || localStorage.getItem("cartUserId");

//     if (!token || !actualUserId) {
//       showToastMessage("Please login to add items to cart", "error");
//       setTimeout(() => navigate("/login"), 2000);
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
//       showToastMessage("Item added to cart! 🛒", "success");
//     } else {
//       showToastMessage(result.error || "Failed to add to cart", "error");
//     }
//   };

//   if (loading)
//     return <div className="text-center py-20 text-[#4a2e18]">Loading products...</div>;

//   return (
//     <div className="w-full bg-white min-h-screen  pb-16">

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4">

//         {/* Section Title — Center Aligned */}
//         <div className="mb-8 pb-4 text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#8c0a15]">
//             Divine Idols & Murti
//           </h2>
//           <div className="flex items-center justify-center gap-3 mt-3">
//             <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
//             <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
//             <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
//           </div>
//         </div>

//         {/* Category Filters */}
//         <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-gray-300 pb-4">
//           <div className="flex items-center gap-2 text-[#8c0a15] font-bold text-lg">
//             <BiFilter className="text-2xl" /> Filter by Deity:
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-1.5 rounded-md text-xs md:text-sm font-semibold transition-all ${
//                   selectedCategory === cat
//                     ? "bg-gradient-to-r from-red-800 to-red-600 text-white shadow-md"
//                     : "bg-white text-gray-700 border border-gray-300 hover:bg-amber-100"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Toast */}
//         {showToast && (
//           <div
//             className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white ${
//               toastType === "success" ? "bg-green-600" : "bg-red-600"
//             }`}
//           >
//             {toastMessage}
//           </div>
//         )}

//         {/* Products Grid */}
//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-16">
//             <p className="text-lg text-gray-600 font-serif">
//               No idols found in this category.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => {
//               const isWishlisted = isInWishlist(product._id);

//               const price = Number(product.price) || 0;
//               const mrp = Number(product.mrp) || 0;
//               const discountPercent =
//                 product.discountPercent ||
//                 (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);

//               return (
//                 <div
//                   key={product._id}
//                   onClick={() => navigate(`/product/${product._id}`)}
//                   className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-200/60 hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer relative"
//                 >
//                   {/* ✅ Discount Badge */}
//                   {discountPercent > 0 && (
//                     <div className="absolute top-3 left-3 bg-gradient-to-r from-red-800 to-red-600 text-white text-[10px] font-bold px-2 py-1 rounded z-10">
//                       {discountPercent}% OFF
//                     </div>
//                   )}

//                   {/* Image */}
//                   <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
//                       onError={(e) => {
//                         e.target.src =
//                           "https://via.placeholder.com/400x400?text=No+Image";
//                       }}
//                     />

//                     {/* Wishlist Button */}
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleWishlistToggle(product._id);
//                       }}
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
// };

// export default Idols;


// src/pages/Idols.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiHeart, BiShoppingBag, BiFilter } from "react-icons/bi";
import useProductStore from "../store/useProductStore";
import useWishlistStore from "../store/useWishlistStore";
import useCartStore from "../store/useCartStore";

const Idols = () => {
  const navigate = useNavigate();

  const { products, loading, fetchProducts } = useProductStore();
  const { isInWishlist, addToWishlist, removeFromWishlist, fetchWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  useEffect(() => {
    fetchProducts();
    fetchWishlist();

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const actualUserId =
      user.id || user._id || localStorage.getItem("cartUserId");
    if (actualUserId) setUserId(actualUserId);
  }, [fetchProducts, fetchWishlist, setUserId]);

  const showToastMessage = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // ✅ Sirf "Idols" category ke products
  const idolsProducts = products.filter((p) => {
    const catName = (p.category?.name || "").toLowerCase();
    return catName.includes("idol");
  });

  // ✅ Deity-wise category filter
  const getDeityFromName = (name) => {
    const n = (name || "").toLowerCase();
    if (n.includes("ganesh")) return "Ganesha";
    if (n.includes("laxmi") || n.includes("lakshmi")) return "Laxmi";
    if (n.includes("krishna")) return "Krishna";
    if (n.includes("hanuman")) return "Hanuman";
    if (n.includes("shiv") || n.includes("shivling")) return "Shiva";
    if (n.includes("durga") || n.includes("saraswati")) return "Devi";
    return "Other";
  };

  // ✅ Categories dynamically banao
  const categories = [
    "All",
    ...new Set(idolsProducts.map((p) => getDeityFromName(p.name))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? idolsProducts
      : idolsProducts.filter(
          (p) => getDeityFromName(p.name) === selectedCategory
        );

  // ✅ Wishlist toggle
  const handleWishlistToggle = async (productId) => {
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
      showToastMessage("Removed from wishlist", "success");
    } else {
      await addToWishlist(productId);
      showToastMessage("Added to wishlist ❤️", "success");
    }
  };

  // ✅ Add to cart
  const handleAddToCart = async (e, product) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const actualUserId =
      user.id || user._id || localStorage.getItem("cartUserId");

    if (!token || !actualUserId) {
      showToastMessage("Please login to add items to cart", "error");
      setTimeout(() => navigate("/login"), 2000);
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
      showToastMessage("Item added to cart! 🛒", "success");
    } else {
      showToastMessage(result.error || "Failed to add to cart", "error");
    }
  };

  if (loading)
    return (
      <div className="text-center py-20 text-[#5A1F1F] font-medium bg-[#F5EBDD] min-h-screen flex items-center justify-center">
        Loading products...
      </div>
    );

  return (
    <div className="w-full bg-[#F5EBDD] min-h-screen pb-16">

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-4">

        {/* Section Title — Center Aligned */}
        <div className="mb-6 pb-3 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#5A1F1F]"></span>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#5A1F1F] tracking-wide px-2">
              Divine Idols & Murti
            </h2>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#5A1F1F]"></span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6 border-b border-[#5A1F1F]/20 pb-4">
          <div className="flex items-center gap-2 text-[#5A1F1F] font-bold text-sm sm:text-base">
            <BiFilter className="text-xl" /> Filter by Deity:
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#5A1F1F] text-[#F5EBDD] shadow-md"
                    : "bg-[#F5EBDD] text-[#6B5038] border border-[#B58A3A]/30 hover:bg-white hover:border-[#B58A3A] hover:text-[#5A1F1F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Toast */}
        {showToast && (
          <div
            className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white ${
              toastType === "success" ? "bg-[#5A1F1F]" : "bg-[#B58A3A]"
            }`}
          >
            {toastMessage}
          </div>
        )}

        {/* Products Grid — 5 Cards Compact */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-[#6B5038] font-serif">
              No idols found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {filteredProducts.map((product) => {
              const isWishlisted = isInWishlist(product._id);

              const price = Number(product.price) || 0;
              const mrp = Number(product.mrp) || 0;
              const discountPercent =
                product.discountPercent ||
                (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);

              return (
                <div
                  key={product._id}
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="bg-[#F5EBDD] rounded-lg border border-[#B58A3A]/25 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#B58A3A]/60 transition-all duration-300 relative group cursor-pointer flex flex-col"
                >
                  {/* ✅ Discount Badge */}
                  {discountPercent > 0 && (
                    <div className="absolute top-1.5 left-1.5 z-20 bg-[#5A1F1F] text-[#F5EBDD] text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {discountPercent}% OFF
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-[#faf6f0] flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x400?text=No+Image";
                      }}
                    />

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWishlistToggle(product._id);
                      }}
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

                    {/* Add to Cart */}
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
};

export default Idols;