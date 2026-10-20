


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

//   // ✅ SMART FILTER: Sirf Idols, Murti, Statue, Figurine wale products
//   const idolsProducts = products.filter((p) => {
//     const catName = (p.category?.name || "").toLowerCase();
//     const prodName = (p.name || "").toLowerCase();
    
//     return (
//       catName.includes("idol") || 
//       catName.includes("murti") || 
//       catName.includes("statue") || 
//       catName.includes("sculpture") ||
//       catName.includes("figurine") ||
//       prodName.includes("murti") ||
//       prodName.includes("statue") ||
//       prodName.includes("idol")
//     );
//   });

//   // ✅ Deity-wise category filter
//   const getDeityFromName = (name) => {
//     const n = (name || "").toLowerCase();
//     if (n.includes("ganesh") || n.includes("ganpati")) return "Ganesha";
//     if (n.includes("laxmi") || n.includes("lakshmi")) return "Laxmi";
//     if (n.includes("krishna") || n.includes("radha")) return "Krishna";
//     if (n.includes("hanuman") || n.includes("bajrang")) return "Hanuman";
//     if (n.includes("shiv") || n.includes("shivling") || n.includes("mahadev")) return "Shiva";
//     if (n.includes("durga") || n.includes("saraswati") || n.includes("devi")) return "Devi";
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
//     return (
//       <div className="flex flex-col justify-center items-center py-20">
//         <div className="w-12 h-12 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
//         <div className="text-[#5A1F1F] mt-4 font-medium">Loading products...</div>
//       </div>
//     );

//   return (
//     <div className="w-full bg-white min-h-screen pb-16">
//       <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-4">

//         {/* Section Title */}
//         <div className="text-center mb-8 sm:mb-10">
//           <div className="flex items-center justify-center gap-3 mb-2">
//             <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
//             <span className="text-[#B58A3A] text-sm">✦</span>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#5A1F1F] tracking-wide">
//               Divine Idols & Murti
//             </h2>
//             <span className="text-[#B58A3A] text-sm">✦</span>
//             <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
//           </div>
//           <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
//             Bring home the divine presence.
//           </p>
//         </div>

//         {/* Category Filters */}
//         <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-gray-200 pb-4">
//           <div className="flex items-center gap-2 text-gray-800 font-medium text-sm sm:text-base">
//             <BiFilter className="text-xl text-[#B58A3A]" /> Filter by Deity:
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
//                   selectedCategory === cat
//                     ? "bg-[#C14F3A] text-white shadow-md border border-[#C14F3A]"
//                     : "bg-white text-gray-600 border border-gray-300 hover:border-[#C14F3A] hover:text-[#C14F3A]"
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
//             className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 text-white font-medium ${
//               toastType === "success" ? "bg-[#5A1F1F]" : "bg-[#B58A3A]"
//             }`}
//           >
//             {toastMessage}
//           </div>
//         )}

//         {/* Products Grid */}
//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-16">
//             <p className="text-lg text-[#6B5038] font-serif">
//               No idols found in this category.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
//             {filteredProducts.map((product) => {
//               const isWishlisted = isInWishlist(product._id);
//               const price = Number(product.price) || 0;
//               const mrp = Number(product.mrp) || 0;
//               const discountPercent =
//                 product.discountPercent ||
//                 (mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);
//               const outOfStock = product.stock === 0;

//               return (
//                 <div
//                   key={product._id}
//                   onClick={() => navigate(`/product/${product._id}`)}
//                   className="bg-white border border-gray-300 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer flex flex-col h-full"
//                 >
//                   <div className="p-2 pb-0">
//                     <div className="relative w-full h-[240px] sm:h-[260px] overflow-hidden bg-gray-50 flex-shrink-0">
                      
//                       {/* Discount Badge */}
//                       {discountPercent > 0 && (
//                         <div className="absolute top-0 right-0 z-20 bg-[#4A1515] text-white text-[11px] font-bold px-2.5 py-1">
//                           {discountPercent}% OFF
//                         </div>
//                       )}

//                       {/* Wishlist Button */}
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleWishlistToggle(product._id);
//                         }}
//                         className="absolute top-2 left-2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors cursor-pointer border border-gray-100"
//                       >
//                         <BiHeart
//                           className={`w-4 h-4 transition-colors ${
//                             isWishlisted
//                               ? "fill-[#C14F3A] text-[#C14F3A]"
//                               : "text-gray-400 hover:text-[#C14F3A]"
//                           }`}
//                         />
//                       </button>

//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         // ✅ object-contain use kiya hai taaki Idol poori dikhe
//                         className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
//                         onError={(e) => {
//                           e.target.src =
//                             "https://via.placeholder.com/400x400?text=No+Image";
//                         }}
//                       />

//                       {outOfStock && (
//                         <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center z-10">
//                           <span className="bg-[#5A1F1F] text-[#F5EBDD] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
//                             Out of Stock
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="px-3 py-4 flex flex-col flex-1 justify-between">
//                     <div>
//                       {product.rating && (
//                         <div className="flex items-center gap-1 text-[11px] text-[#B58A3A] font-bold mb-1">
//                           <span>⭐ {product.rating}</span>
//                           {product.numReviews > 0 && (
//                             <span className="text-gray-400 font-normal">
//                               ({product.numReviews})
//                             </span>
//                           )}
//                         </div>
//                       )}

//                       <h3 className="text-[14px] sm:text-[15px] font-medium text-gray-800 line-clamp-1 mb-1 leading-snug">
//                         {product.name}
//                       </h3>

//                       <p className="text-[11px] sm:text-[12px] text-gray-500 line-clamp-1 mb-2 leading-snug">
//                         {product.description || "Handcrafted with pure ingredients for your daily rituals and devotion."}
//                       </p>

//                       <div className="flex items-baseline gap-1.5 mt-auto">
//                         <p className="text-[15px] font-bold text-gray-900">
//                           ₹{price.toLocaleString("en-IN")}
//                         </p>
//                         {mrp > price && (
//                           <span className="text-[12px] text-gray-400 line-through">
//                             ₹{mrp.toLocaleString("en-IN")}
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     <button
//                       onClick={(e) => handleAddToCart(e, product)}
//                       disabled={outOfStock}
//                       className={`w-full mt-3 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
//                         !outOfStock
//                           ? "bg-[#C14F3A] hover:bg-[#A84330] text-white shadow-sm"
//                           : "bg-gray-200 text-gray-500 cursor-not-allowed"
//                       }`}
//                     >
//                       <BiShoppingBag className="w-4 h-4" />
//                       {!outOfStock ? "Add to Cart" : "Out of Stock"}
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
// };

// export default Idols;


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

  // ✅ FIXED FILTER: Store ki exact categories "Idols" aur "Yantra & Idols" ko match karega
  const idolsProducts = products.filter((p) => {
    const catName = (p.category?.name || "").toLowerCase();
    
    // Exact match for "idols" or "yantra & idols"
    return (
      catName === "idols" || 
      catName === "yantra & idols" || 
      catName === "yantra & idol" ||
      catName.includes("idol")
    );
  });

  // ✅ Deity-wise category filter
  const getDeityFromName = (name) => {
    const n = (name || "").toLowerCase();
    if (n.includes("ganesh") || n.includes("ganpati")) return "Ganesha";
    if (n.includes("laxmi") || n.includes("lakshmi")) return "Laxmi";
    if (n.includes("krishna") || n.includes("radha")) return "Krishna";
    if (n.includes("hanuman") || n.includes("bajrang")) return "Hanuman";
    if (n.includes("shiv") || n.includes("shivling") || n.includes("mahadev")) return "Shiva";
    if (n.includes("durga") || n.includes("saraswati") || n.includes("devi")) return "Devi";
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
      <div className="flex flex-col justify-center items-center py-20">
        <div className="w-12 h-12 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
        <div className="text-[#5A1F1F] mt-4 font-medium">Loading products...</div>
      </div>
    );

  return (
    <div className="w-full bg-white min-h-screen pb-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-4">

        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#B58A3A]"></span>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#5A1F1F] tracking-wide">
              Divine Idols & Murti
            </h2>
            <span className="text-[#B58A3A] text-sm">✦</span>
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#B58A3A]"></span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#6B5038] italic">
            Bring home the divine presence.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-2 text-gray-800 font-medium text-sm sm:text-base">
            <BiFilter className="text-xl text-[#B58A3A]" /> Filter by Deity:
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#C14F3A] text-white shadow-md border border-[#C14F3A]"
                    : "bg-white text-gray-600 border border-gray-300 hover:border-[#C14F3A] hover:text-[#C14F3A]"
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
            className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 text-white font-medium ${
              toastType === "success" ? "bg-[#5A1F1F]" : "bg-[#B58A3A]"
            }`}
          >
            {toastMessage}
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-[#6B5038] font-serif">
              No idols found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {filteredProducts.map((product) => {
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
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="bg-white border border-gray-100   hover:shadow-[0_12px_25px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer flex flex-col h-full"
                >
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWishlistToggle(product._id);
                        }}
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
                        className="w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x400?text=No+Image";
                        }}
                      />

                      {outOfStock && (
                        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center z-10">
                          <span className="bg-[#5A1F1F] text-[#F5EBDD] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-3 py-4 flex flex-col flex-1 justify-between">
                    <div>
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

                      <h3 className="text-[14px] sm:text-[15px] font-medium text-gray-800 line-clamp-1 mb-1 leading-snug">
                        {product.name}
                      </h3>

                      <p className="text-[11px] sm:text-[12px] text-gray-500 line-clamp-1 mb-2 leading-snug">
                        {product.description || "Handcrafted with pure ingredients for your daily rituals and devotion."}
                      </p>

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
};

export default Idols;