

// // import React, { useEffect, useState } from 'react';
// // import { Heart, ShoppingBag } from 'lucide-react';
// // import useProductStore from '../store/useProductStore';
// // import useWishlistStore from '../store/useWishlistStore';
// // import useCartStore from '../store/useCartStore';
// // import { useNavigate } from 'react-router-dom';

// // const Bestsellers = () => {
// //   const navigate = useNavigate();
// //   const { products, loading, error, fetchProducts, getBestSellers } = useProductStore();
// //   const {
// //     wishlist,
// //     addToWishlist,
// //     removeFromWishlist,
// //     fetchWishlist,
// //     isInWishlist,
// //   } = useWishlistStore();
// //   const { addToCart, setUserId } = useCartStore();

// //   const [wishlistLoading, setWishlistLoading] = useState(null);
// //   const [showToast, setShowToast] = useState(false);
// //   const [toastMessage, setToastMessage] = useState('');
// //   const [toastType, setToastType] = useState('info');

// //   useEffect(() => {
// //     fetchProducts();
// //     fetchWishlist();

// //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// //     const actualUserId = user.id || user._id;

// //     if (actualUserId) {
// //       setUserId(actualUserId);
// //       localStorage.setItem('cartUserId', actualUserId);
// //     }
// //   }, [fetchProducts, fetchWishlist, setUserId]);

// //   const showToastMessage = (message, type = 'info') => {
// //     setToastMessage(message);
// //     setToastType(type);
// //     setShowToast(true);
// //     setTimeout(() => setShowToast(false), 3000);
// //   };

// //   // ✅ Card click — detail page par jao
// //   const handleCardClick = (productId) => {
// //     navigate(`/product/${productId}`);
// //   };

// //   const handleWishlistToggle = async (e, productId) => {
// //     e.preventDefault();
// //     e.stopPropagation();

// //     setWishlistLoading(productId);

// //     if (isInWishlist(productId)) {
// //       const result = await removeFromWishlist(productId);
// //       if (!result.success && result.error?.includes('login')) {
// //         showToastMessage('Please login to manage wishlist', 'error');
// //       } else if (result.success) {
// //         showToastMessage('Removed from wishlist', 'success');
// //       }
// //     } else {
// //       const result = await addToWishlist(productId);
// //       if (!result.success && result.error?.includes('login')) {
// //         showToastMessage('Please login to manage wishlist', 'error');
// //       } else if (result.success) {
// //         showToastMessage('Added to wishlist ❤️', 'success');
// //       }
// //     }

// //     setWishlistLoading(null);
// //   };

// //   const handleAddToCart = async (e, productId) => {
// //     e.preventDefault();
// //     e.stopPropagation();

// //     const token = localStorage.getItem('token');
// //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// //     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

// //     if (!token || !actualUserId) {
// //       showToastMessage('Please login to add items to cart', 'error');
// //       setTimeout(() => {
// //         navigate('/login');
// //       }, 2000);
// //       return;
// //     }

// //     setUserId(actualUserId);

// //     const result = await addToCart(productId, 1);

// //     if (result.success) {
// //       showToastMessage('Item added to cart! 🛒', 'success');
// //     } else {
// //       showToastMessage(result.error || 'Failed to add to cart', 'error');
// //     }
// //   };

// //   // ✅ Discount calculate
// //   const getDiscount = (product) => {
// //     const price = Number(product.price) || 0;
// //     const mrp = Number(product.mrp) || 0;

// //     if (mrp > price && mrp > 0) {
// //       return {
// //         percent: product.discountPercent || Math.round(((mrp - price) / mrp) * 100),
// //         save: mrp - price,
// //         mrp,
// //       };
// //     }
// //     return { percent: 0, save: 0, mrp: 0 };
// //   };

// //   const bestSellers = getBestSellers();

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center py-12">
// //         <div className="w-12 h-12 border-4 border-[#6b2314] border-t-transparent rounded-full animate-spin"></div>
// //         <div className="text-[#4a2e18] mt-4 font-medium">Loading products...</div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="flex justify-center items-center py-12">
// //         <div className="text-red-600 font-medium">Error: {error}</div>
// //       </div>
// //     );
// //   }

// //   if (bestSellers.length === 0) {
// //     return (
// //       <div className="flex justify-center items-center py-12">
// //         <div className="text-[#4a2e18] font-medium">No products available</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       {/* Toast Notification */}
// //       {showToast && (
// //         <div
// //           className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-down ${
// //             toastType === 'success'
// //               ? 'bg-green-600'
// //               : toastType === 'error'
// //               ? 'bg-red-600'
// //               : 'bg-[#6b2314]'
// //           } text-white max-w-sm font-medium`}
// //         >
// //           {toastMessage}
// //         </div>
// //       )}

// //       {/* Grid Layout */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {bestSellers.map((product) => {
// //           const discount = getDiscount(product);

// //           return (
// //             <div
// //               key={product._id}
// //               onClick={() => handleCardClick(product._id)}
// //               className=" rounded-md border border-[#edd5b9] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 relative group p-3 flex flex-col justify-between cursor-pointer"
// //             >
// //               <div>
// //                 {/* ✅ Discount Badge (top-left) */}
// //                 {discount.percent > 0 && (
// //                   <div className="absolute top-5 left-5 bg-gradient-to-r from-red-800 to-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md z-10">
// //                     {discount.percent}% OFF
// //                   </div>
// //                 )}

// //                 {/* Wishlist Button — stopPropagation */}
// //                 <button
// //                   onClick={(e) => handleWishlistToggle(e, product._id)}
// //                   disabled={wishlistLoading === product._id}
// //                   className="absolute top-5 right-5 w-9 h-9 bg-gradient-to-r from-red-800 to-red-600 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer"
// //                 >
// //                   <Heart
// //                     className={`w-5 h-5 transition-colors ${
// //                       isInWishlist(product._id)
// //                         ? 'fill-green-500 text-green-500'
// //                         : 'text-white hover:text-red-500'
// //                     } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
// //                   />
// //                 </button>

// //                 {/* Product Image */}
// //                 <div className="w-full h-64 rounded-xl overflow-hidden bg-[#faf6f0] mb-3">
// //                   {product.image ? (
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
// //                       onError={(e) => {
// //                         e.target.src =
// //                           'https://via.placeholder.com/400x400?text=No+Image';
// //                       }}
// //                     />
// //                   ) : (
// //                     <div className="w-full h-full flex items-center justify-center bg-gray-100">
// //                       <ShoppingBag className="w-12 h-12 text-black" />
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Product Info */}
// //                 <div className="px-1">
// //                   <h3 className="text-sm sm:text-base font-medium text-black line-clamp-2 min-h-[44px] mb-2 group-hover:text-[#6b2314] transition-colors">
// //                     {product.name}
// //                   </h3>

// //                   <div className="flex items-center gap-2 mb-2 flex-wrap">
// //                     <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-red-800 to-red-600 text-white rounded font-medium">
// //                       {product.category?.name || 'General'}
// //                     </span>
// //                     {product.stock > 0 ? (
// //                       <span className="text-xs text-green-600 font-medium">
// //                         In Stock
// //                       </span>
// //                     ) : (
// //                       <span className="text-xs text-red-500 font-medium">
// //                         Out of Stock
// //                       </span>
// //                     )}
// //                   </div>

// //                   {/* ✅ Price with Discount */}
// //                   <div className="flex items-center gap-2 mb-4 flex-wrap">
// //                     <p className="text-lg font-bold text-[#4a2e18]">
// //                       ₹{Number(product.price || 0).toLocaleString('en-IN')}
// //                     </p>

// //                     {discount.mrp > 0 && (
// //                       <>
// //                         <span className="text-sm text-gray-400 line-through">
// //                           ₹{discount.mrp.toLocaleString('en-IN')}
// //                         </span>
// //                         <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
// //                           Save ₹{discount.save.toLocaleString('en-IN')}
// //                         </span>
// //                       </>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Action Buttons — stopPropagation */}
// //               <div className="flex items-center gap-2">
// //                 <button
// //                   onClick={(e) => handleAddToCart(e, product._id)}
// //                   disabled={product.stock === 0}
// //                   className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer text-center ${
// //                     product.stock > 0
// //                       ? 'bg-gradient-to-r from-red-800 to-red-600 hover:bg-[#7f1d1d] text-white'
// //                       : 'bg-gray-200 text-gray-500 cursor-not-allowed'
// //                   }`}
// //                 >
// //                   {product.stock > 0 ? 'BUY NOW' : 'Out of Stock'}
// //                 </button>

// //                 <button
// //                   onClick={(e) => handleAddToCart(e, product._id)}
// //                   disabled={product.stock === 0}
// //                   title="Add to Cart"
// //                   className="p-2.5 border border-[#edd5b9] rounded-lg hover:bg-[#fdf2f0] hover:border-[#8b3a2b] text-[#4a2e18] transition-colors cursor-pointer flex items-center justify-center bg-white shadow-sm"
// //                 >
// //                   <ShoppingBag className="h-5 w-5" />
// //                 </button>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </>
// //   );
// // };

// // export default Bestsellers;
// import React, { useEffect, useState } from 'react';
// import { Heart, ShoppingBag } from 'lucide-react';
// import useProductStore from '../store/useProductStore';
// import useWishlistStore from '../store/useWishlistStore';
// import useCartStore from '../store/useCartStore';
// import { useNavigate } from 'react-router-dom';

// const Bestsellers = () => {
//   const navigate = useNavigate();
//   const { products, loading, error, fetchProducts, getBestSellers } = useProductStore();
//   const {
//     wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist,
//   } = useWishlistStore();
//   const { addToCart, setUserId } = useCartStore();

//   const [wishlistLoading, setWishlistLoading] = useState(null);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState('');
//   const [toastType, setToastType] = useState('info');

//   useEffect(() => {
//     fetchProducts();
//     fetchWishlist();

//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const actualUserId = user.id || user._id;

//     if (actualUserId) {
//       setUserId(actualUserId);
//       localStorage.setItem('cartUserId', actualUserId);
//     }
//   }, [fetchProducts, fetchWishlist, setUserId]);

//   const showToastMessage = (message, type = 'info') => {
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
//       if (!result.success && result.error?.includes('login')) {
//         showToastMessage('Please login to manage wishlist', 'error');
//       } else if (result.success) {
//         showToastMessage('Removed from wishlist', 'success');
//       }
//     } else {
//       const result = await addToWishlist(productId);
//       if (!result.success && result.error?.includes('login')) {
//         showToastMessage('Please login to manage wishlist', 'error');
//       } else if (result.success) {
//         showToastMessage('Added to wishlist ❤️', 'success');
//       }
//     }
//     setWishlistLoading(null);
//   };

//   const handleAddToCart = async (e, productId) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const token = localStorage.getItem('token');
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

//     if (!token || !actualUserId) {
//       showToastMessage('Please login to add items to cart', 'error');
//       setTimeout(() => {
//         navigate('/login');
//       }, 2000);
//       return;
//     }

//     setUserId(actualUserId);
//     const result = await addToCart(productId, 1);

//     if (result.success) {
//       showToastMessage('Item added to cart! 🛒', 'success');
//     } else {
//       showToastMessage(result.error || 'Failed to add to cart', 'error');
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

//   const bestSellers = getBestSellers();

//   if (loading) {
//     return (
//       <div className="flex flex-col justify-center items-center py-12">
//         <div className="w-12 h-12 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
//         <div className="text-[#173B32] mt-4 font-medium">Loading products...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center py-12">
//         <div className="text-[#173B32] font-medium">Error: {error}</div>
//       </div>
//     );
//   }

//   if (bestSellers.length === 0) {
//     return (
//       <div className="flex justify-center items-center py-12">
//         <div className="text-[#6B5038] font-medium">No products available</div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Toast */}
//       {showToast && (
//         <div
//           className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-down ${
//             toastType === 'success'
//               ? 'bg-[#173B32]'
//               : toastType === 'error'
//               ? 'bg-[#B58A3A]'
//               : 'bg-[#173B32]'
//           } text-[#F5EBDD] max-w-sm font-medium`}
//         >
//           {toastMessage}
//         </div>
//       )}

//       {/* ============================================================
//           ✅ 5 Cards — image bada, neeche compact info
//           ============================================================ */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">

//         {bestSellers.slice(0, 5).map((product) => {
//           const discount = getDiscount(product);

//           return (
//             <div
//               key={product._id}
//               onClick={() => handleCardClick(product._id)}
//               className="bg-[#F5EBDD] rounded-lg border border-[#B58A3A]/25 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#B58A3A]/60 transition-all duration-300 relative group cursor-pointer flex flex-col"
//             >

//               {/* ============ IMAGE (taller) ============ */}
//               <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#faf6f0] flex-shrink-0">

//                 {discount.percent > 0 && (
//                   <div className="absolute top-2 left-2 bg-[#173B32] text-[#F5EBDD] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded z-10">
//                     {discount.percent}% OFF
//                   </div>
//                 )}

//                 <button
//                   onClick={(e) => handleWishlistToggle(e, product._id)}
//                   disabled={wishlistLoading === product._id}
//                   className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer"
//                 >
//                   <Heart
//                     className={`w-4 h-4 transition-colors ${
//                       isInWishlist(product._id)
//                         ? 'fill-[#B58A3A] text-[#B58A3A]'
//                         : 'text-[#6B5038] hover:text-[#B58A3A]'
//                     } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
//                   />
//                 </button>

//                 {product.image ? (
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                     onError={(e) => {
//                       e.target.src =
//                         'https://via.placeholder.com/400x400?text=No+Image';
//                     }}
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <ShoppingBag className="w-10 h-10 text-[#B58A3A]" />
//                   </div>
//                 )}
//               </div>

//               {/* ============ PRODUCT INFO (compact) ============ */}
//               <div className="p-2 flex flex-col flex-1 justify-between">

//                 <div>
//                   <h3 className="text-xs sm:text-sm font-medium text-[#173B32] line-clamp-2 min-h-[30px] mb-1 group-hover:text-[#B58A3A] transition-colors">
//                     {product.name}
//                   </h3>

//                   <div className="flex items-center gap-1 mb-1 flex-wrap">
//                     <span className="text-[10px] px-1.5 py-0.5 bg-[#B58A3A]/15 text-[#173B32] rounded font-medium">
//                       {product.category?.name || 'General'}
//                     </span>
//                     {product.stock > 0 ? (
//                       <span className="text-[10px] text-[#173B32] font-medium">
//                         In Stock
//                       </span>
//                     ) : (
//                       <span className="text-[10px] text-[#B58A3A] font-medium">
//                         Out of Stock
//                       </span>
//                     )}
//                   </div>

//                   <div className="flex items-baseline gap-1.5 mb-1.5 flex-wrap">
//                     <p className="text-sm font-bold text-[#173B32]">
//                       ₹{Number(product.price || 0).toLocaleString('en-IN')}
//                     </p>
//                     {discount.mrp > 0 && (
//                       <>
//                         <span className="text-[11px] text-[#6B5038]/70 line-through">
//                           ₹{discount.mrp.toLocaleString('en-IN')}
//                         </span>
//                         <span className="text-[10px] font-bold text-[#173B32] bg-[#B58A3A]/20 px-1.5 py-0.5 rounded">
//                           {discount.percent}% OFF
//                         </span>
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 <button
//                   onClick={(e) => handleAddToCart(e, product._id)}
//                   disabled={product.stock === 0}
//                   className={`w-full py-1 px-3 rounded-md text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
//                     product.stock > 0
//                       ? 'bg-[#173B32] hover:bg-[#0f2820] text-[#F5EBDD]'
//                       : 'bg-[#B58A3A]/20 text-[#6B5038] cursor-not-allowed'
//                   }`}
//                 >
//                   <ShoppingBag className="w-3.5 h-3.5" />
//                   {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
//                 </button>

//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Bestsellers;


import React, { useEffect, useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import useProductStore from '../store/useProductStore';
import useWishlistStore from '../store/useWishlistStore';
import useCartStore from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

const Bestsellers = () => {
  const navigate = useNavigate();
  const { products, loading, error, fetchProducts, getBestSellers } = useProductStore();
  const {
    wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist,
  } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();

  const [wishlistLoading, setWishlistLoading] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('info');

  useEffect(() => {
    fetchProducts();
    fetchWishlist();

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id;

    if (actualUserId) {
      setUserId(actualUserId);
      localStorage.setItem('cartUserId', actualUserId);
    }
  }, [fetchProducts, fetchWishlist, setUserId]);

  const showToastMessage = (message, type = 'info') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleWishlistToggle = async (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlistLoading(productId);

    if (isInWishlist(productId)) {
      const result = await removeFromWishlist(productId);
      if (!result.success && result.error?.includes('login')) {
        showToastMessage('Please login to manage wishlist', 'error');
      } else if (result.success) {
        showToastMessage('Removed from wishlist', 'success');
      }
    } else {
      const result = await addToWishlist(productId);
      if (!result.success && result.error?.includes('login')) {
        showToastMessage('Please login to manage wishlist', 'error');
      } else if (result.success) {
        showToastMessage('Added to wishlist ❤️', 'success');
      }
    }
    setWishlistLoading(null);
  };

  const handleAddToCart = async (e, productId) => {
    e.preventDefault();
    e.stopPropagation();

    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

    if (!token || !actualUserId) {
      showToastMessage('Please login to add items to cart', 'error');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      return;
    }

    setUserId(actualUserId);
    const result = await addToCart(productId, 1);

    if (result.success) {
      showToastMessage('Item added to cart! 🛒', 'success');
    } else {
      showToastMessage(result.error || 'Failed to add to cart', 'error');
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

  const bestSellers = getBestSellers();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-12">
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

  if (bestSellers.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-[#6B5038] font-medium">No products available</div>
      </div>
    );
  }

  return (
    <>
      {/* Toast */}
      {showToast && (
        <div
          className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-down ${
            toastType === 'success'
              ? 'bg-[#173B32]'
              : toastType === 'error'
              ? 'bg-[#B58A3A]'
              : 'bg-[#173B32]'
          } text-[#F5EBDD] max-w-sm font-medium`}
        >
          {toastMessage}
        </div>
      )}

      {/* ============================================================
          ✅ 5 Cards — image bada, button bada
          ============================================================ */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">

        {bestSellers.slice(0, 5).map((product) => {
          const discount = getDiscount(product);

          return (
            <div
              key={product._id}
              onClick={() => handleCardClick(product._id)}
              className="bg-[#F5EBDD] rounded-lg border border-[#B58A3A]/25 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#B58A3A]/60 transition-all duration-300 relative group cursor-pointer flex flex-col"
            >

              {/* ============ IMAGE ============ */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#faf6f0] flex-shrink-0">

                {discount.percent > 0 && (
                  <div className="absolute top-2 left-2 bg-[#173B32] text-[#F5EBDD] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded z-10">
                    {discount.percent}% OFF
                  </div>
                )}

                <button
                  onClick={(e) => handleWishlistToggle(e, product._id)}
                  disabled={wishlistLoading === product._id}
                  className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isInWishlist(product._id)
                        ? 'fill-[#B58A3A] text-[#B58A3A]'
                        : 'text-[#6B5038] hover:text-[#B58A3A]'
                    } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
                  />
                </button>

                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        'https://via.placeholder.com/400x400?text=No+Image';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-[#B58A3A]" />
                  </div>
                )}
              </div>

              {/* ============ PRODUCT INFO ============ */}
              <div className="p-2 flex flex-col flex-1 justify-between">

                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-[#173B32] line-clamp-2 min-h-[30px] mb-1 group-hover:text-[#B58A3A] transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mb-1 flex-wrap">
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#B58A3A]/15 text-[#173B32] rounded font-medium">
                      {product.category?.name || 'General'}
                    </span>
                    {product.stock > 0 ? (
                      <span className="text-[10px] text-[#173B32] font-medium">
                        In Stock
                      </span>
                    ) : (
                      <span className="text-[10px] text-[#B58A3A] font-medium">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-2 flex-wrap">
                    <p className="text-sm font-bold text-[#173B32]">
                      ₹{Number(product.price || 0).toLocaleString('en-IN')}
                    </p>
                    {discount.mrp > 0 && (
                      <>
                        <span className="text-[11px] text-[#6B5038]/70 line-through">
                          ₹{discount.mrp.toLocaleString('en-IN')}
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
                  onClick={(e) => handleAddToCart(e, product._id)}
                  disabled={product.stock === 0}
                  className={`w-full py-2.5 px-4 rounded-md text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    product.stock > 0
                      ? 'bg-[#173B32] hover:bg-[#0f2820] text-[#F5EBDD] shadow-sm hover:shadow-md'
                      : 'bg-[#B58A3A]/20 text-[#6B5038] cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Bestsellers;