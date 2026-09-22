// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BiHeart, BiShoppingBag, BiCheckCircle } from "react-icons/bi";

// // Images import (Updated Top Banner & Products)
// import topBanner from "../assets/PujaSamagribaner.png";
// import item1 from "../assets/Puja_Samagri1.png";
// import item2 from "../assets/pojakit_2.jpg";
// import item3 from "../assets/pojakit_3.jpg";
// import item4 from "../assets/pojakit_7.webp";

// // Sample Puja Samagri & Kits Products Data
// const pujaSamagriData = [
//   {
//     id: 1,
//     name: "Complete Daily Puja Samagri Kit with Pure Cow Ghee & Incense",
//     price: 699,
//     originalPrice: 1099,
//     rating: 4.8,
//     reviews: 112,
//     image: item1,
//     tag: "Best Seller",
//   },
//   {
//     id: 2,
//     name: "Auspicious Festival Havan Samagri & Herbs Pack",
//     price: 349,
//     originalPrice: 500,
//     rating: 4.7,
//     reviews: 84,
//     image: item2,
//     tag: "Pure & Natural",
//   },
//   {
//     id: 3,
//     name: "Premium Hawan Kund & Wood Sticks Assortment",
//     price: 899,
//     originalPrice: 1299,
//     rating: 4.9,
//     reviews: 67,
//     image: item3,
//     tag: "Essential",
//   },
//   {
//     id: 4,
//     name: "Divine Festive Puja Box with Akshat, Kumkum & Camphor",
//     price: 499,
//     originalPrice: 799,
//     rating: 4.6,
//     reviews: 95,
//     image: item4,
//     tag: "Popular",
//   },
//   {
//     id: 5,
//     name: "Special Satyanarayan Puja Samagri Kit",
//     price: 599,
//     originalPrice: 899,
//     rating: 4.9,
//     reviews: 130,
//     image: item1,
//     tag: "Blessed",
//   },
//   {
//     id: 6,
//     name: "Pure Loban & Guggal Dhoop Cups for Positive Energy",
//     price: 249,
//     originalPrice: 399,
//     rating: 4.8,
//     reviews: 145,
//     image: item2,
//     tag: "Aromatic",
//   },
// ];

// export default function PujaSamagri() {
//   const [wishlist, setWishlist] = useState([]);
//   const [cart, setCart] = useState([]);

//   const toggleWishlist = (id) => {
//     if (wishlist.includes(id)) {
//       setWishlist(wishlist.filter(item => item !== id));
//     } else {
//       setWishlist([...wishlist, id]);
//     }
//   };

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     alert(`${product.name} added to cart successfully! 🛒`);
//   };

//   return (
//     <div className="w-full bg-[#fff3df] min-h-screen font-sans pb-16">
      
//       {/* Top Banner Section (Using PujaSamagribaner.png) */}
//       <div className="w-full bg-[#fff3df] shadow-md relative pt-2 pb-2">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
//             <img 
//               src={topBanner} 
//               alt="Puja Samagri Banner" 
//               className="w-full h-auto max-h-[380px] md:max-h-[450px] object-cover mx-auto"
//             />
            
//           </div>
//         </div>
//       </div>

//       {/* Trust Badges Strip */}
//       <div className="bg-[#8c0a15] text-white py-3 px-4 shadow-inner mt-4">
//         <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs md:text-sm font-medium">
//           <div className="flex items-center gap-2">
//             <BiCheckCircle className="text-amber-400 text-lg" /> 100% Pure & Natural Herbs
//           </div>
//           <div className="flex items-center gap-2">
//             <BiCheckCircle className="text-amber-400 text-lg" /> Hygienically Packed
//           </div>
//           <div className="flex items-center gap-2">
//             <BiCheckCircle className="text-amber-400 text-lg" /> Complete Ritual Kits Available
//           </div>
//         </div>
//       </div>

//       {/* Main Content Container */}
//       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        
//         {/* Section Title */}
//         <div className="mb-8 border-b border-gray-300 pb-4">
//           <h2 className="text-2xl font-serif font-bold text-[#8c0a15]">All Puja Samagri & Kits</h2>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {pujaSamagriData.map((product) => {
//             const isWishlisted = wishlist.includes(product.id);
//             return (
//               <div 
//                 key={product.id}
//                 className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-200/60 hover:shadow-xl transition-all flex flex-col justify-between group"
//               >
//                 {/* Image & Tags Container */}
//                 <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
//                   <img 
//                     src={product.image} 
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded"
//                   />
                  
//                   {/* Tag Badge */}
//                   <span className="absolute top-3 left-3 bg-[#8c0a15] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
//                     {product.tag}
//                   </span>

//                   {/* Wishlist Button */}
//                   <button 
//                     onClick={() => toggleWishlist(product.id)}
//                     className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform"
//                   >
//                     <BiHeart className={isWishlisted ? "text-red-600 fill-red-600" : "text-gray-500"} />
//                   </button>
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-4 flex flex-col flex-grow justify-between">
//                   <div>
//                     {/* Rating */}
//                     <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
//                       <span>⭐ {product.rating}</span>
//                       <span className="text-gray-400 font-normal">({product.reviews} reviews)</span>
//                     </div>

//                     {/* Title */}
//                     <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
//                       {product.name}
//                     </h3>
//                   </div>

//                   <div>
//                     {/* Pricing */}
//                     <div className="flex items-center gap-2 mb-4">
//                       <span className="text-lg font-bold text-[#8c0a15]">₹{product.price.toLocaleString()}</span>
//                       <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
//                     </div>

//                     {/* Action Button */}
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="w-full bg-[#8c0a15] hover:bg-[#6b080f] text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow transition-colors"
//                     >
//                       <BiShoppingBag className="text-lg" /> Add to Cart
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
// }


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiHeart, BiShoppingBag, BiCheckCircle } from "react-icons/bi";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import useWishlistStore from "../store/useWishlistStore";

// Top Banner (static image rahegi — banner API se nahi aayega)
import topBanner from "../assets/PujaSamagribaner.png";

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

  // ✅ Product click → details page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // ✅ Add to Cart (dynamic)
  const handleAddToCart = async (e, product) => {
    e.stopPropagation(); // card click se navigate na ho

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

  // ✅ Wishlist toggle (dynamic)
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
    <div className="w-full bg-[#fff3df] min-h-screen  pb-16">

      {/* Top Banner Section (static image) */}
      <div className="w-full bg-[#fff3df] shadow-md relative pt-2 pb-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative w-full rounded-md overflow-hidden shadow-2xl">
            <img
              src={topBanner}
              alt="Puja Samagri Banner"
              className="w-full h-auto max-h-[380px] md:max-h-[450px] object-cover mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Trust Badges Strip */}
      <div className="bg-[#8c0a15] text-white py-3 px-4 shadow-inner mt-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs md:text-sm font-medium">
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> 100% Pure & Natural Herbs
          </div>
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> Hygienically Packed
          </div>
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> Complete Ritual Kits Available
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">

        {/* Section Title */}
        <div className="mb-8 border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-serif font-bold text-[#8c0a15]">
            All Puja Samagri & Kits
          </h2>
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

              return (
                <div
                  key={product._id}
                  onClick={() => handleProductClick(product._id)}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-200/60 hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
                >
                  {/* Image & Tags */}
                  <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded"
                    />

                    {/* Tag Badge (agar API mein tag ho) */}
                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-[#8c0a15] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                        {product.tag}
                      </span>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => handleToggleWishlist(e, product._id)}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform"
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
                      {/* Rating (agar API se aaye) */}
                      {product.rating && (
                        <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
                          <span>⭐ {product.rating}</span>
                          {product.reviews && (
                            <span className="text-gray-400 font-normal">
                              ({product.reviews} reviews)
                            </span>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <div>
                      {/* Pricing */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold text-[#8c0a15]">
                          ₹{product.price?.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart */}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="w-full bg-[#8c0a15] hover:bg-[#6b080f] text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow transition-colors"
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