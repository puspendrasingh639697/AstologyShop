


// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { Heart, ShoppingBag } from 'lucide-react';
// // // // // import useProductStore from '../store/useProductStore';
// // // // // import useWishlistStore from '../store/useWishlistStore';
// // // // // import useCartStore from '../store/useCartStore';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // const Bestsellers = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const { products, loading, error, fetchProducts, getBestSellers } = useProductStore();
// // // // //   const {
// // // // //     wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist,
// // // // //   } = useWishlistStore();
// // // // //   const { addToCart, setUserId } = useCartStore();

// // // // //   const [wishlistLoading, setWishlistLoading] = useState(null);
// // // // //   const [showToast, setShowToast] = useState(false);
// // // // //   const [toastMessage, setToastMessage] = useState('');
// // // // //   const [toastType, setToastType] = useState('info');

// // // // //   useEffect(() => {
// // // // //     fetchProducts();
// // // // //     fetchWishlist();

// // // // //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// // // // //     const actualUserId = user.id || user._id;

// // // // //     if (actualUserId) {
// // // // //       setUserId(actualUserId);
// // // // //       localStorage.setItem('cartUserId', actualUserId);
// // // // //     }
// // // // //   }, [fetchProducts, fetchWishlist, setUserId]);

// // // // //   const showToastMessage = (message, type = 'info') => {
// // // // //     setToastMessage(message);
// // // // //     setToastType(type);
// // // // //     setShowToast(true);
// // // // //     setTimeout(() => setShowToast(false), 3000);
// // // // //   };

// // // // //   const handleCardClick = (productId) => {
// // // // //     navigate(`/product/${productId}`);
// // // // //   };

// // // // //   const handleWishlistToggle = async (e, productId) => {
// // // // //     e.preventDefault();
// // // // //     e.stopPropagation();
// // // // //     setWishlistLoading(productId);

// // // // //     if (isInWishlist(productId)) {
// // // // //       const result = await removeFromWishlist(productId);
// // // // //       if (!result.success && result.error?.includes('login')) {
// // // // //         showToastMessage('Please login to manage wishlist', 'error');
// // // // //       } else if (result.success) {
// // // // //         showToastMessage('Removed from wishlist', 'success');
// // // // //       }
// // // // //     } else {
// // // // //       const result = await addToWishlist(productId);
// // // // //       if (!result.success && result.error?.includes('login')) {
// // // // //         showToastMessage('Please login to manage wishlist', 'error');
// // // // //       } else if (result.success) {
// // // // //         showToastMessage('Added to wishlist ❤️', 'success');
// // // // //       }
// // // // //     }
// // // // //     setWishlistLoading(null);
// // // // //   };

// // // // //   const handleAddToCart = async (e, productId) => {
// // // // //     e.preventDefault();
// // // // //     e.stopPropagation();

// // // // //     const token = localStorage.getItem('token');
// // // // //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// // // // //     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

// // // // //     if (!token || !actualUserId) {
// // // // //       showToastMessage('Please login to add items to cart', 'error');
// // // // //       setTimeout(() => {
// // // // //         navigate('/login');
// // // // //       }, 2000);
// // // // //       return;
// // // // //     }

// // // // //     setUserId(actualUserId);
// // // // //     const result = await addToCart(productId, 1);

// // // // //     if (result.success) {
// // // // //       showToastMessage('Item added to cart! 🛒', 'success');
// // // // //     } else {
// // // // //       showToastMessage(result.error || 'Failed to add to cart', 'error');
// // // // //     }
// // // // //   };

// // // // //   const getDiscount = (product) => {
// // // // //     const price = Number(product.price) || 0;
// // // // //     const mrp = Number(product.mrp) || 0;

// // // // //     if (mrp > price && mrp > 0) {
// // // // //       return {
// // // // //         percent: product.discountPercent || Math.round(((mrp - price) / mrp) * 100),
// // // // //         save: mrp - price,
// // // // //         mrp,
// // // // //       };
// // // // //     }
// // // // //     return { percent: 0, save: 0, mrp: 0 };
// // // // //   };

// // // // //   const bestSellers = getBestSellers();

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="flex flex-col justify-center items-center py-12">
// // // // //         <div className="w-12 h-12 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
// // // // //         <div className="text-[#173B32] mt-4 font-medium">Loading products...</div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (error) {
// // // // //     return (
// // // // //       <div className="flex justify-center items-center py-12">
// // // // //         <div className="text-[#173B32] font-medium">Error: {error}</div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (bestSellers.length === 0) {
// // // // //     return (
// // // // //       <div className="flex justify-center items-center py-12">
// // // // //         <div className="text-[#6B5038] font-medium">No products available</div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <>
// // // // //       {/* Toast */}
// // // // //       {showToast && (
// // // // //         <div
// // // // //           className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-down ${
// // // // //             toastType === 'success'
// // // // //               ? 'bg-[#173B32]'
// // // // //               : toastType === 'error'
// // // // //               ? 'bg-[#B58A3A]'
// // // // //               : 'bg-[#173B32]'
// // // // //           } text-[#F5EBDD] max-w-sm font-medium`}
// // // // //         >
// // // // //           {toastMessage}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ============================================================
// // // // //           ✅ 5 Cards — image bada, button bada
// // // // //           ============================================================ */}
// // // // //       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">

// // // // //         {bestSellers.slice(0, 5).map((product) => {
// // // // //           const discount = getDiscount(product);

// // // // //           return (
// // // // //             <div
// // // // //               key={product._id}
// // // // //               onClick={() => handleCardClick(product._id)}
// // // // //               className="bg-[#F5EBDD] rounded-lg border border-[#B58A3A]/25 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#B58A3A]/60 transition-all duration-300 relative group cursor-pointer flex flex-col"
// // // // //             >

// // // // //               {/* ============ IMAGE ============ */}
// // // // //               <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#faf6f0] flex-shrink-0">

// // // // //                 {discount.percent > 0 && (
// // // // //                   <div className="absolute top-2 left-2 bg-[#173B32] text-[#F5EBDD] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded z-10">
// // // // //                     {discount.percent}% OFF
// // // // //                   </div>
// // // // //                 )}

// // // // //                 <button
// // // // //                   onClick={(e) => handleWishlistToggle(e, product._id)}
// // // // //                   disabled={wishlistLoading === product._id}
// // // // //                   className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer"
// // // // //                 >
// // // // //                   <Heart
// // // // //                     className={`w-4 h-4 transition-colors ${
// // // // //                       isInWishlist(product._id)
// // // // //                         ? 'fill-[#B58A3A] text-[#B58A3A]'
// // // // //                         : 'text-[#6B5038] hover:text-[#B58A3A]'
// // // // //                     } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
// // // // //                   />
// // // // //                 </button>

// // // // //                 {product.image ? (
// // // // //                   <img
// // // // //                     src={product.image}
// // // // //                     alt={product.name}
// // // // //                     className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // // //                     onError={(e) => {
// // // // //                       e.target.src =
// // // // //                         'https://via.placeholder.com/400x400?text=No+Image';
// // // // //                     }}
// // // // //                   />
// // // // //                 ) : (
// // // // //                   <div className="w-full h-full flex items-center justify-center">
// // // // //                     <ShoppingBag className="w-10 h-10 text-[#B58A3A]" />
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>

// // // // //               {/* ============ PRODUCT INFO ============ */}
// // // // //               <div className="p-2 flex flex-col flex-1 justify-between">

// // // // //                 <div>
// // // // //                   <h3 className="text-xs sm:text-sm font-medium text-[#173B32] line-clamp-2 min-h-[30px] mb-1 group-hover:text-[#B58A3A] transition-colors">
// // // // //                     {product.name}
// // // // //                   </h3>

// // // // //                   <div className="flex items-center gap-1 mb-1 flex-wrap">
// // // // //                     <span className="text-[10px] px-1.5 py-0.5 bg-[#B58A3A]/15 text-[#173B32] rounded font-medium">
// // // // //                       {product.category?.name || 'General'}
// // // // //                     </span>
// // // // //                     {product.stock > 0 ? (
// // // // //                       <span className="text-[10px] text-[#173B32] font-medium">
// // // // //                         In Stock
// // // // //                       </span>
// // // // //                     ) : (
// // // // //                       <span className="text-[10px] text-[#B58A3A] font-medium">
// // // // //                         Out of Stock
// // // // //                       </span>
// // // // //                     )}
// // // // //                   </div>

// // // // //                   <div className="flex items-baseline gap-1.5 mb-2 flex-wrap">
// // // // //                     <p className="text-sm font-bold text-[#173B32]">
// // // // //                       ₹{Number(product.price || 0).toLocaleString('en-IN')}
// // // // //                     </p>
// // // // //                     {discount.mrp > 0 && (
// // // // //                       <>
// // // // //                         <span className="text-[11px] text-[#6B5038]/70 line-through">
// // // // //                           ₹{discount.mrp.toLocaleString('en-IN')}
// // // // //                         </span>
// // // // //                         <span className="text-[10px] font-bold text-[#173B32] bg-[#B58A3A]/20 px-1.5 py-0.5 rounded">
// // // // //                           {discount.percent}% OFF
// // // // //                         </span>
// // // // //                       </>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* ✅ Add to Cart — BADA button */}
// // // // //                 <button
// // // // //                   onClick={(e) => handleAddToCart(e, product._id)}
// // // // //                   disabled={product.stock === 0}
// // // // //                   className={`w-full py-2.5 px-4 rounded-md text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
// // // // //                     product.stock > 0
// // // // //                       ? 'bg-[#173B32] hover:bg-[#0f2820] text-[#F5EBDD] shadow-sm hover:shadow-md'
// // // // //                       : 'bg-[#B58A3A]/20 text-[#6B5038] cursor-not-allowed'
// // // // //                   }`}
// // // // //                 >
// // // // //                   <ShoppingBag className="w-4 h-4" />
// // // // //                   {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
// // // // //                 </button>

// // // // //               </div>
// // // // //             </div>
// // // // //           );
// // // // //         })}
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Bestsellers;

// // // // import React, { useEffect, useState } from 'react';
// // // // import { Heart, ShoppingBag } from 'lucide-react';
// // // // import useProductStore from '../store/useProductStore';
// // // // import useWishlistStore from '../store/useWishlistStore';
// // // // import useCartStore from '../store/useCartStore';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const Bestsellers = () => {
// // // //   const navigate = useNavigate();
// // // //   const { products, loading, error, fetchProducts, getBestSellers } = useProductStore();
// // // //   const {
// // // //     wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist,
// // // //   } = useWishlistStore();
// // // //   const { addToCart, setUserId } = useCartStore();

// // // //   const [wishlistLoading, setWishlistLoading] = useState(null);
// // // //   const [showToast, setShowToast] = useState(false);
// // // //   const [toastMessage, setToastMessage] = useState('');
// // // //   const [toastType, setToastType] = useState('info');

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //     fetchWishlist();

// // // //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// // // //     const actualUserId = user.id || user._id;

// // // //     if (actualUserId) {
// // // //       setUserId(actualUserId);
// // // //       localStorage.setItem('cartUserId', actualUserId);
// // // //     }
// // // //   }, [fetchProducts, fetchWishlist, setUserId]);

// // // //   const showToastMessage = (message, type = 'info') => {
// // // //     setToastMessage(message);
// // // //     setToastType(type);
// // // //     setShowToast(true);
// // // //     setTimeout(() => setShowToast(false), 3000);
// // // //   };

// // // //   const handleCardClick = (productId) => {
// // // //     navigate(`/product/${productId}`);
// // // //   };

// // // //   const handleWishlistToggle = async (e, productId) => {
// // // //     e.preventDefault();
// // // //     e.stopPropagation();
// // // //     setWishlistLoading(productId);

// // // //     if (isInWishlist(productId)) {
// // // //       const result = await removeFromWishlist(productId);
// // // //       if (!result.success && result.error?.includes('login')) {
// // // //         showToastMessage('Please login to manage wishlist', 'error');
// // // //       } else if (result.success) {
// // // //         showToastMessage('Removed from wishlist', 'success');
// // // //       }
// // // //     } else {
// // // //       const result = await addToWishlist(productId);
// // // //       if (!result.success && result.error?.includes('login')) {
// // // //         showToastMessage('Please login to manage wishlist', 'error');
// // // //       } else if (result.success) {
// // // //         showToastMessage('Added to wishlist ❤️', 'success');
// // // //       }
// // // //     }
// // // //     setWishlistLoading(null);
// // // //   };

// // // //   const handleAddToCart = async (e, productId) => {
// // // //     e.preventDefault();
// // // //     e.stopPropagation();

// // // //     const token = localStorage.getItem('token');
// // // //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// // // //     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

// // // //     if (!token || !actualUserId) {
// // // //       showToastMessage('Please login to add items to cart', 'error');
// // // //       setTimeout(() => {
// // // //         navigate('/login');
// // // //       }, 2000);
// // // //       return;
// // // //     }

// // // //     setUserId(actualUserId);
// // // //     const result = await addToCart(productId, 1);

// // // //     if (result.success) {
// // // //       showToastMessage('Item added to cart! 🛒', 'success');
// // // //     } else {
// // // //       showToastMessage(result.error || 'Failed to add to cart', 'error');
// // // //     }
// // // //   };

// // // //   const getDiscount = (product) => {
// // // //     const price = Number(product.price) || 0;
// // // //     const mrp = Number(product.mrp) || 0;

// // // //     if (mrp > price && mrp > 0) {
// // // //       return {
// // // //         percent: product.discountPercent || Math.round(((mrp - price) / mrp) * 100),
// // // //         save: mrp - price,
// // // //         mrp,
// // // //       };
// // // //     }
// // // //     return { percent: 0, save: 0, mrp: 0 };
// // // //   };

// // // //   const bestSellers = getBestSellers();

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="flex flex-col justify-center items-center py-12">
// // // //         <div className="w-12 h-12 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
// // // //         <div className="text-[#5A1F1F] mt-4 font-medium">Loading products...</div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <div className="flex justify-center items-center py-12">
// // // //         <div className="text-[#5A1F1F] font-medium">Error: {error}</div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (bestSellers.length === 0) {
// // // //     return (
// // // //       <div className="flex justify-center items-center py-12">
// // // //         <div className="text-[#6B5038] font-medium">No products available</div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <>
// // // //       {/* Toast */}
// // // //       {showToast && (
// // // //         <div
// // // //           className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-down ${
// // // //             toastType === 'success'
// // // //               ? 'bg-[#5A1F1F]'
// // // //               : toastType === 'error'
// // // //               ? 'bg-[#B58A3A]'
// // // //               : 'bg-[#5A1F1F]'
// // // //           } text-[#F5EBDD] max-w-sm font-medium`}
// // // //         >
// // // //           {toastMessage}
// // // //         </div>
// // // //       )}

// // // //       {/* ============================================================
// // // //           ✅ 5 Cards
// // // //           ============================================================ */}
// // // //       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">

// // // //         {bestSellers.slice(0, 5).map((product) => {
// // // //           const discount = getDiscount(product);

// // // //           return (
// // // //             <div
// // // //               key={product._id}
// // // //               onClick={() => handleCardClick(product._id)}
// // // //               className="bg-[#F5EBDD] rounded-lg border border-[#B58A3A]/25 shadow-sm overflow-hidden hover:shadow-lg hover:border-[#B58A3A]/60 transition-all duration-300 relative group cursor-pointer flex flex-col"
// // // //             >

// // // //               {/* ============ IMAGE ============ */}
// // // //               <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#faf6f0] flex-shrink-0">

// // // //                 {discount.percent > 0 && (
// // // //                   <div className="absolute top-2 left-2 bg-[#5A1F1F] text-[#F5EBDD] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded z-10">
// // // //                     {discount.percent}% OFF
// // // //                   </div>
// // // //                 )}

// // // //                 <button
// // // //                   onClick={(e) => handleWishlistToggle(e, product._id)}
// // // //                   disabled={wishlistLoading === product._id}
// // // //                   className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer"
// // // //                 >
// // // //                   <Heart
// // // //                     className={`w-4 h-4 transition-colors ${
// // // //                       isInWishlist(product._id)
// // // //                         ? 'fill-[#B58A3A] text-[#B58A3A]'
// // // //                         : 'text-[#6B5038] hover:text-[#B58A3A]'
// // // //                     } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
// // // //                   />
// // // //                 </button>

// // // //                 {product.image ? (
// // // //                   <img
// // // //                     src={product.image}
// // // //                     alt={product.name}
// // // //                     className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // // //                     onError={(e) => {
// // // //                       e.target.src =
// // // //                         'https://via.placeholder.com/400x400?text=No+Image';
// // // //                     }}
// // // //                   />
// // // //                 ) : (
// // // //                   <div className="w-full h-full flex items-center justify-center">
// // // //                     <ShoppingBag className="w-10 h-10 text-[#B58A3A]" />
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //               {/* ============ PRODUCT INFO ============ */}
// // // //               <div className="p-2 flex flex-col flex-1 justify-between">

// // // //                 <div>
// // // //                   <h3 className="text-xs sm:text-sm font-medium text-[#5A1F1F] line-clamp-2 min-h-[30px] mb-1 group-hover:text-[#B58A3A] transition-colors">
// // // //                     {product.name}
// // // //                   </h3>

// // // //                   <div className="flex items-center gap-1 mb-1 flex-wrap">
// // // //                     <span className="text-[10px] px-1.5 py-0.5 bg-[#B58A3A]/15 text-[#5A1F1F] rounded font-medium">
// // // //                       {product.category?.name || 'General'}
// // // //                     </span>
// // // //                     {product.stock > 0 ? (
// // // //                       <span className="text-[10px] text-[#5A1F1F] font-medium">
// // // //                         In Stock
// // // //                       </span>
// // // //                     ) : (
// // // //                       <span className="text-[10px] text-[#B58A3A] font-medium">
// // // //                         Out of Stock
// // // //                       </span>
// // // //                     )}
// // // //                   </div>

// // // //                   <div className="flex items-baseline gap-1.5 mb-2 flex-wrap">
// // // //                     <p className="text-sm font-bold text-[#5A1F1F]">
// // // //                       ₹{Number(product.price || 0).toLocaleString('en-IN')}
// // // //                     </p>
// // // //                     {discount.mrp > 0 && (
// // // //                       <>
// // // //                         <span className="text-[11px] text-[#6B5038]/70 line-through">
// // // //                           ₹{discount.mrp.toLocaleString('en-IN')}
// // // //                         </span>
// // // //                         <span className="text-[10px] font-bold text-[#5A1F1F] bg-[#B58A3A]/20 px-1.5 py-0.5 rounded">
// // // //                           {discount.percent}% OFF
// // // //                         </span>
// // // //                       </>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* ✅ Add to Cart */}
// // // //                 <button
// // // //                   onClick={(e) => handleAddToCart(e, product._id)}
// // // //                   disabled={product.stock === 0}
// // // //                   className={`w-full py-2.5 px-4 rounded-md text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
// // // //                     product.stock > 0
// // // //                       ? 'bg-[#5A1F1F] hover:bg-[#3d1414] text-[#F5EBDD] shadow-sm hover:shadow-md'
// // // //                       : 'bg-[#B58A3A]/20 text-[#6B5038] cursor-not-allowed'
// // // //                   }`}
// // // //                 >
// // // //                   <ShoppingBag className="w-4 h-4" />
// // // //                   {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
// // // //                 </button>

// // // //               </div>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Bestsellers;

// // // import React, { useEffect, useState } from 'react';
// // // import { Heart } from 'lucide-react';
// // // import useProductStore from '../store/useProductStore';
// // // import useWishlistStore from '../store/useWishlistStore';
// // // import useCartStore from '../store/useCartStore';
// // // import { useNavigate } from 'react-router-dom';

// // // const Bestsellers = () => {
// // //   const navigate = useNavigate();
// // //   const { products, loading, error, fetchProducts, getBestSellers } = useProductStore();
// // //   const {
// // //     wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist,
// // //   } = useWishlistStore();
// // //   const { addToCart, setUserId } = useCartStore();

// // //   const [wishlistLoading, setWishlistLoading] = useState(null);
// // //   const [showToast, setShowToast] = useState(false);
// // //   const [toastMessage, setToastMessage] = useState('');
// // //   const [toastType, setToastType] = useState('info');

// // //   useEffect(() => {
// // //     fetchProducts();
// // //     fetchWishlist();

// // //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// // //     const actualUserId = user.id || user._id;

// // //     if (actualUserId) {
// // //       setUserId(actualUserId);
// // //       localStorage.setItem('cartUserId', actualUserId);
// // //     }
// // //   }, [fetchProducts, fetchWishlist, setUserId]);

// // //   const showToastMessage = (message, type = 'info') => {
// // //     setToastMessage(message);
// // //     setToastType(type);
// // //     setShowToast(true);
// // //     setTimeout(() => setShowToast(false), 3000);
// // //   };

// // //   const handleCardClick = (productId) => {
// // //     navigate(`/product/${productId}`);
// // //   };

// // //   const handleWishlistToggle = async (e, productId) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //     setWishlistLoading(productId);

// // //     if (isInWishlist(productId)) {
// // //       const result = await removeFromWishlist(productId);
// // //       if (!result.success && result.error?.includes('login')) {
// // //         showToastMessage('Please login to manage wishlist', 'error');
// // //       } else if (result.success) {
// // //         showToastMessage('Removed from wishlist', 'success');
// // //       }
// // //     } else {
// // //       const result = await addToWishlist(productId);
// // //       if (!result.success && result.error?.includes('login')) {
// // //         showToastMessage('Please login to manage wishlist', 'error');
// // //       } else if (result.success) {
// // //         showToastMessage('Added to wishlist ❤️', 'success');
// // //       }
// // //     }
// // //     setWishlistLoading(null);
// // //   };

// // //   const handleAddToCart = async (e, productId) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();

// // //     const token = localStorage.getItem('token');
// // //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// // //     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

// // //     if (!token || !actualUserId) {
// // //       showToastMessage('Please login to add items to cart', 'error');
// // //       setTimeout(() => {
// // //         navigate('/login');
// // //       }, 2000);
// // //       return;
// // //     }

// // //     setUserId(actualUserId);
// // //     const result = await addToCart(productId, 1);

// // //     if (result.success) {
// // //       showToastMessage('Item added to cart! 🛒', 'success');
// // //     } else {
// // //       showToastMessage(result.error || 'Failed to add to cart', 'error');
// // //     }
// // //   };

// // //   const getDiscount = (product) => {
// // //     const price = Number(product.price) || 0;
// // //     const mrp = Number(product.mrp) || 0;

// // //     if (mrp > price && mrp > 0) {
// // //       return {
// // //         percent: product.discountPercent || Math.round(((mrp - price) / mrp) * 100),
// // //         save: mrp - price,
// // //         mrp,
// // //       };
// // //     }
// // //     return { percent: 0, save: 0, mrp: 0 };
// // //   };

// // //   const bestSellers = getBestSellers();

// // //   if (loading) {
// // //     return (
// // //       <div className="flex flex-col justify-center items-center py-12">
// // //         <div className="w-12 h-12 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
// // //         <div className="text-[#5A1F1F] mt-4 font-medium">Loading products...</div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="flex justify-center items-center py-12">
// // //         <div className="text-[#5A1F1F] font-medium">Error: {error}</div>
// // //       </div>
// // //     );
// // //   }

// // //   if (bestSellers.length === 0) {
// // //     return (
// // //       <div className="flex justify-center items-center py-12">
// // //         <div className="text-[#6B5038] font-medium">No products available</div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <>
// // //       {/* Toast Notification */}
// // //       {showToast && (
// // //         <div
// // //           className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-down ${
// // //             toastType === 'success'
// // //               ? 'bg-[#5A1F1F]'
// // //               : toastType === 'error'
// // //               ? 'bg-[#B58A3A]'
// // //               : 'bg-[#5A1F1F]'
// // //           } text-[#F5EBDD] max-w-sm font-medium`}
// // //         >
// // //           {toastMessage}
// // //         </div>
// // //       )}

// // //       {/* ============================================================
// // //           ✅ 100% EXACT PUJASHREE UI (Sharp Edges, No Card Border)
// // //           ============================================================ */}
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        
// // //         {bestSellers.slice(0, 5).map((product) => {
// // //           const discount = getDiscount(product);

// // //           return (
// // //             <div
// // //               key={product._id}
// // //               onClick={() => handleCardClick(product._id)}
// // //               // ❌ No card border, No background color, No rounding
// // //               className="bg-white relative group cursor-pointer flex flex-col"
// // //             >
              
// // //               {/* ✅ IMAGE SECTION: Perfect Square Shape, Sharp Edges */}
// // //               <div className="relative w-full aspect-square overflow-hidden bg-gray-50 flex-shrink-0">
                
// // //                 {/* Top-Right Discount Badge (Sharp corner, dark maroon) */}
// // //                 {discount.percent > 0 && (
// // //                   <div className="absolute top-0 right-0 bg-[#4A1515] text-white text-[11px] font-bold px-2.5 py-1 z-10">
// // //                     {discount.percent}% OFF
// // //                   </div>
// // //                 )}

// // //                 {/* Top-Left Wishlist Button (White circle with soft shadow) */}
// // //                 <button
// // //                   onClick={(e) => handleWishlistToggle(e, product._id)}
// // //                   disabled={wishlistLoading === product._id}
// // //                   className="absolute top-3 left-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer"
// // //                 >
// // //                   <Heart
// // //                     className={`w-4 h-4 transition-colors ${
// // //                       isInWishlist(product._id)
// // //                         ? 'fill-[#C14F3A] text-[#C14F3A]'
// // //                         : 'text-gray-400 hover:text-[#C14F3A]'
// // //                     } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
// // //                   />
// // //                 </button>

// // //                 {/* Image with sharp edges */}
// // //                 {product.image ? (
// // //                   <img
// // //                     src={product.image}
// // //                     alt={product.name}
// // //                     className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
// // //                     onError={(e) => {
// // //                       e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
// // //                     }}
// // //                   />
// // //                 ) : (
// // //                   <div className="w-full h-full flex items-center justify-center">
// // //                     <span className="text-[#B58A3A]">No Image</span>
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* ✅ PRODUCT DETAILS SECTION (No border separating image and text) */}
// // //               <div className="pt-3 pb-4 flex flex-col flex-1 justify-between bg-white">
                
// // //                 <div>
// // //                   {/* Title */}
// // //                   <h3 className="text-[14px] sm:text-[15px] font-medium text-gray-800 line-clamp-2 min-h-[44px] mb-2 leading-snug">
// // //                     {product.name}
// // //                   </h3>

// // //                   {/* Price */}
// // //                   <div className="flex items-baseline gap-2 mt-1">
// // //                     <p className="text-[15px] font-bold text-gray-900">
// // //                       ₹ {Number(product.price || 0).toLocaleString('en-IN')}
// // //                     </p>
// // //                     {discount.mrp > 0 && (
// // //                       <span className="text-[13px] text-gray-400 line-through">
// // //                         ₹ {discount.mrp.toLocaleString('en-IN')}
// // //                       </span>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 {/* ✅ Add to Cart Button (Exactly like screenshot - sharp rectangle, maroon) */}
// // //                 <button
// // //                   onClick={(e) => handleAddToCart(e, product._id)}
// // //                   className="w-full mt-4 py-2.5 rounded-md text-[14px] font-semibold transition-colors duration-300 flex items-center justify-center bg-[#C14F3A] hover:bg-[#A84330] text-white shadow-sm"
// // //                 >
// // //                   Add To Cart
// // //                 </button>

// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Bestsellers;



// // import React, { useEffect, useState } from 'react';
// // import { Heart } from 'lucide-react';
// // import useProductStore from '../store/useProductStore';
// // import useWishlistStore from '../store/useWishlistStore';
// // import useCartStore from '../store/useCartStore';
// // import { useNavigate } from 'react-router-dom';

// // const Bestsellers = () => {
// //   const navigate = useNavigate();
// //   const { products, loading, error, fetchProducts, getBestSellers } = useProductStore();
// //   const {
// //     wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist,
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
// //       <div className="flex flex-col justify-center items-center py-12">
// //         <div className="w-12 h-12 border-4 border-[#B58A3A] border-t-transparent rounded-full animate-spin"></div>
// //         <div className="text-[#5A1F1F] mt-4 font-medium">Loading products...</div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="flex justify-center items-center py-12">
// //         <div className="text-[#5A1F1F] font-medium">Error: {error}</div>
// //       </div>
// //     );
// //   }

// //   if (bestSellers.length === 0) {
// //     return (
// //       <div className="flex justify-center items-center py-12">
// //         <div className="text-[#6B5038] font-medium">No products available</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       {/* Toast */}
// //       {showToast && (
// //         <div
// //           className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-down ${
// //             toastType === 'success'
// //               ? 'bg-[#5A1F1F]'
// //               : toastType === 'error'
// //               ? 'bg-[#B58A3A]'
// //               : 'bg-[#5A1F1F]'
// //           } text-[#F5EBDD] max-w-sm font-medium`}
// //         >
// //           {toastMessage}
// //         </div>
// //       )}

// //       {/* ============================================================
// //           ✅ EXACT PUJASHREE UI (Outer Border -> White Padding -> Image)
// //           ============================================================ */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        
// //         {bestSellers.slice(0, 5).map((product) => {
// //           const discount = getDiscount(product);

// //           return (
// //             <div
// //               key={product._id}
// //               onClick={() => handleCardClick(product._id)}
// //               // ✅ 1. Outer Card: 1px Light Gray Border, Rounded
// //               className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative group cursor-pointer flex flex-col"
// //             >
              
// //               {/* ✅ 2. Inner Padding: p-2 se white color ki patti dikhegi border ke baad */}
// //               <div className="p-2">
                
// //                 {/* ✅ 3. Image Section: Sharp Edges, Image ke andar */}
// //                 <div className="relative w-full aspect-square overflow-hidden bg-gray-50 flex-shrink-0">
                  
// //                   {/* Discount Badge */}
// //                   {discount.percent > 0 && (
// //                     <div className="absolute top-0 right-0 bg-[#4A1515] text-white text-[11px] font-bold px-2.5 py-1 z-10">
// //                       {discount.percent}% OFF
// //                     </div>
// //                   )}

// //                   {/* Wishlist Button */}
// //                   <button
// //                     onClick={(e) => handleWishlistToggle(e, product._id)}
// //                     disabled={wishlistLoading === product._id}
// //                     className="absolute top-2 left-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer border border-gray-100"
// //                   >
// //                     <Heart
// //                       className={`w-4 h-4 transition-colors ${
// //                         isInWishlist(product._id)
// //                           ? 'fill-[#C14F3A] text-[#C14F3A]'
// //                           : 'text-gray-400 hover:text-[#C14F3A]'
// //                       } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
// //                     />
// //                   </button>

// //                   {product.image ? (
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
// //                       onError={(e) => {
// //                         e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
// //                       }}
// //                     />
// //                   ) : (
// //                     <div className="w-full h-full flex items-center justify-center">
// //                       <span className="text-[#B58A3A]">No Image</span>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>

// //               {/* ✅ 4. Product Details Section */}
// //               <div className="px-3 pb-3 flex flex-col flex-1 justify-between">
                
// //                 <div>
// //                   {/* Title */}
// //                   <h3 className="text-[14px] sm:text-[15px] font-medium text-gray-800 line-clamp-2 min-h-[44px] mb-2 leading-snug">
// //                     {product.name}
// //                   </h3>

// //                   {/* Price */}
// //                   <div className="flex items-baseline gap-2 mt-1">
// //                     <p className="text-[15px] font-bold text-gray-900">
// //                       ₹ {Number(product.price || 0).toLocaleString('en-IN')}
// //                     </p>
// //                     {discount.mrp > 0 && (
// //                       <span className="text-[13px] text-gray-400 line-through">
// //                         ₹ {discount.mrp.toLocaleString('en-IN')}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* ✅ 5. Add to Cart Button (Pill Shape) */}
// //                 <button
// //                   onClick={(e) => handleAddToCart(e, product._id)}
// //                   className="w-full mt-4 py-2.5 rounded-md text-[14px] font-semibold transition-colors duration-300 flex items-center justify-center  hover:bg-[#A84330] text-white shadow-sm"
// //                 >
// //                   Add To Cart
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
// import { Heart } from 'lucide-react';
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
//         <div className="text-[#5A1F1F] mt-4 font-medium">Loading products...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center py-12">
//         <div className="text-[#5A1F1F] font-medium">Error: {error}</div>
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
//               ? 'bg-[#5A1F1F]'
//               : toastType === 'error'
//               ? 'bg-[#B58A3A]'
//               : 'bg-[#5A1F1F]'
//           } text-[#F5EBDD] max-w-sm font-medium`}
//         >
//           {toastMessage}
//         </div>
//       )}

//       {/* ============================================================
//           ✅ EXACT PUJASHREE UI (With Description)
//           ============================================================ */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        
//         {bestSellers.slice(0, 5).map((product) => {
//           const discount = getDiscount(product);

//           return (
//             <div
//               key={product._id}
//               onClick={() => handleCardClick(product._id)}
//               // ✅ Outer Card: 1px Light Gray Border, Rounded
//               className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative group cursor-pointer flex flex-col"
//             >
              
//               {/* ✅ Inner Padding for White Space */}
//               <div className="p-2">
                
//                 {/* Image Section */}
//                 <div className="relative w-full aspect-square overflow-hidden bg-gray-50 flex-shrink-0">
                  
//                   {/* Discount Badge */}
//                   {discount.percent > 0 && (
//                     <div className="absolute top-0 right-0 bg-[#4A1515] text-white text-[11px] font-bold px-2.5 py-1 z-10">
//                       {discount.percent}% OFF
//                     </div>
//                   )}

//                   {/* Wishlist Button */}
//                   <button
//                     onClick={(e) => handleWishlistToggle(e, product._id)}
//                     disabled={wishlistLoading === product._id}
//                     className="absolute top-2 left-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer border border-gray-100"
//                   >
//                     <Heart
//                       className={`w-4 h-4 transition-colors ${
//                         isInWishlist(product._id)
//                           ? 'fill-[#C14F3A] text-[#C14F3A]'
//                           : 'text-gray-400 hover:text-[#C14F3A]'
//                       } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
//                     />
//                   </button>

//                   {product.image ? (
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                       onError={(e) => {
//                         e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
//                       }}
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center">
//                       <span className="text-[#B58A3A]">No Image</span>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* ✅ Product Details Section */}
//               <div className="px-3 pb-3 flex flex-col flex-1 justify-between">
                
//                 <div>
//                   {/* Title */}
//                   <h3 className="text-[14px] sm:text-[15px] font-medium text-gray-800 line-clamp-2 min-h-[44px] mb-1 leading-snug">
//                     {product.name}
//                   </h3>

//                   {/* ✅ Description Added Here */}
//                   <p className="text-[11px] sm:text-[12px] text-gray-500 line-clamp-2 min-h-[32px] mb-2">
//                     {product.description || "Handcrafted with pure ingredients for your daily rituals and devotion."}
//                   </p>

//                   {/* Price */}
//                   <div className="flex items-baseline gap-2 mt-1">
//                     <p className="text-[15px] font-bold text-gray-900">
//                       ₹ {Number(product.price || 0).toLocaleString('en-IN')}
//                     </p>
//                     {discount.mrp > 0 && (
//                       <span className="text-[13px] text-gray-400 line-through">
//                         ₹ {discount.mrp.toLocaleString('en-IN')}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* ✅ Add to Cart Button (Pill Shape) */}
//                 <button
//                   onClick={(e) => handleAddToCart(e, product._id)}
//                   className="w-full mt-4 py-2.5 rounded-full text-[14px] font-semibold transition-colors duration-300 flex items-center justify-center bg-[#C14F3A] hover:bg-[#A84330] text-white shadow-sm"
//                 >
//                   Add To Cart
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
import { Heart } from 'lucide-react';
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
        <div className="text-[#5A1F1F] mt-4 font-medium">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-[#5A1F1F] font-medium">Error: {error}</div>
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
              ? 'bg-[#5A1F1F]'
              : toastType === 'error'
              ? 'bg-[#B58A3A]'
              : 'bg-[#5A1F1F]'
          } text-[#F5EBDD] max-w-sm font-medium`}
        >
          {toastMessage}
        </div>
      )}

      {/* ============================================================
          ✅ EXACT UI (Tall Cards, 1-Line Text, Bottom Shadow)
          ============================================================ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 px-2 sm:px-4">
        
        {bestSellers.slice(0, 4).map((product) => {
          const discount = getDiscount(product);

          return (
            <div
              key={product._id}
              onClick={() => handleCardClick(product._id)}
              // ✅ SHADOW UPDATE: Neeche ki taraf gehra shadow (shadow-[0_10px_20px_rgba...])
              className="bg-white border border-gray-100  shadow-[0_1px_2px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer flex flex-col h-full"
            >
              
              {/* ✅ IMAGE SECTION */}
              <div className="p-2 pb-0">
                <div className="relative w-full h-[280px] sm:h-[300px] overflow-hidden bg-gray-50 flex-shrink-0">
                  
                  {/* Discount Badge */}
                  {discount.percent > 0 && (
                    <div className="absolute top-0 right-0 bg-[#4A1515] text-white text-[11px] font-bold px-2.5 py-1 z-10">
                      {discount.percent}% OFF
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => handleWishlistToggle(e, product._id)}
                    disabled={wishlistLoading === product._id}
                    className="absolute top-2 left-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer border border-gray-100"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isInWishlist(product._id)
                          ? 'fill-[#C14F3A] text-[#C14F3A]'
                          : 'text-gray-400 hover:text-[#C14F3A]'
                      } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
                    />
                  </button>

                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[#B58A3A]">No Image</span>
                    </div>
                  )}
                </div>
              </div>

              {/* ✅ DETAILS SECTION */}
              <div className="px-3 py-4 flex flex-col flex-1 justify-between">
                
                <div>
                  {/* Title (1 line) */}
                  <h3 className="text-[14px] sm:text-[16px] font-medium text-gray-800 line-clamp-1 mb-1.5 leading-snug">
                    {product.name}
                  </h3>

                  {/* Description (1 line) */}
                  <p className="text-[11px] sm:text-[12px] text-gray-500 line-clamp-1 mb-3 leading-snug">
                    {product.description || "Handcrafted with pure ingredients for your daily rituals and devotion."}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mt-auto">
                    <p className="text-[16px] font-bold text-gray-900">
                      ₹ {Number(product.price || 0).toLocaleString('en-IN')}
                    </p>
                    {discount.mrp > 0 && (
                      <span className="text-[13px] text-gray-400 line-through">
                        ₹ {discount.mrp.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                {/* ✅ Add to Cart Button */}
                <button
                  onClick={(e) => handleAddToCart(e, product._id)}
                  className="w-full mt-4 py-2.5 rounded-md text-[14px] sm:text-[15px] font-semibold transition-colors duration-300 flex items-center justify-center bg-[#7b1e2b] hover:bg-[#A84330] text-white shadow-sm"
                >
                  Add To Cart
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