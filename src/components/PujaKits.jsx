// import React, { useEffect, useState } from 'react';
// // import useProductStore from '../store/productStore';
// // import useWishlistStore from '../store/wishlistStore';
// import { Heart } from 'lucide-react';
// import useProductStore from '../store/useProductStore';
// import useWishlistStore from '../store/useWishlistStore';

// const PujaKits = () => {
//   const { products, loading, error, fetchProducts, getProductsByCategory } = useProductStore();
//   const { 
//     wishlist, 
//     addToWishlist, 
//     removeFromWishlist, 
//     fetchWishlist,
//     isInWishlist 
//   } = useWishlistStore();
//   const [wishlistLoading, setWishlistLoading] = useState(null);
//   const [showLoginToast, setShowLoginToast] = useState(false);

//   useEffect(() => {
//     fetchProducts();
//     fetchWishlist();
//   }, []);

//   const handleWishlistToggle = async (productId) => {
//     setWishlistLoading(productId);
    
//     if (isInWishlist(productId)) {
//       const result = await removeFromWishlist(productId);
//       if (!result.success && result.error?.includes('login')) {
//         setShowLoginToast(true);
//         setTimeout(() => setShowLoginToast(false), 3000);
//       }
//     } else {
//       const result = await addToWishlist(productId);
//       if (!result.success && result.error?.includes('login')) {
//         setShowLoginToast(true);
//         setTimeout(() => setShowLoginToast(false), 3000);
//       }
//     }
    
//     setWishlistLoading(null);
//   };

//   const pujaKits = getProductsByCategory('Puja Kits');

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-12">
//         <div className="text-[#4a2e18]">Loading products...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center py-12">
//         <div className="text-red-600">Error: {error}</div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {showLoginToast && (
//         <div className="fixed top-4 right-4 bg-[#6b2314] text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
//           Please login to manage wishlist
//         </div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {pujaKits.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group"
//           >
//             {/* Wishlist Button */}
//             <button
//               onClick={() => handleWishlistToggle(product._id)}
//               disabled={wishlistLoading === product._id}
//               className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
//             >
//               <Heart 
//                 className={`w-5 h-5 transition-colors ${
//                   isInWishlist(product._id) 
//                     ? 'fill-red-500 text-red-500' 
//                     : 'text-gray-400 hover:text-red-500'
//                 } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
//               />
//             </button>

//             <div className="aspect-square overflow-hidden">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
//                 }}
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2 min-h-[40px]">
//                 {product.name}
//               </h3>
//               <p className="text-[#8b3a2b] font-bold mt-2">
//                 ₹{product.price?.toLocaleString() || product.price}
//               </p>
//               <button className="mt-3 w-full bg-[#6b2314] text-white py-2 rounded-md hover:bg-[#8b3a2b] transition-colors duration-300 text-sm">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default PujaKits;


import React, { useEffect, useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import useProductStore from '../store/useProductStore';
import useWishlistStore from '../store/useWishlistStore';
import useCartStore from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

const PujaKits = () => {
  const navigate = useNavigate();
  const { products, loading, error, fetchProducts, getPujaKits } = useProductStore();
  const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();
  
  const [wishlistLoading, setWishlistLoading] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('info');

  useEffect(() => {
    fetchProducts();
    fetchWishlist();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');
    if (actualUserId) {
      setUserId(actualUserId);
    }
  }, [fetchProducts, fetchWishlist, setUserId]);

  const showToastMessage = (message, type = 'info') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleWishlistToggle = async (productId) => {
    setWishlistLoading(productId);
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
      showToastMessage('Removed from wishlist', 'success');
    } else {
      await addToWishlist(productId);
      showToastMessage('Added to wishlist ❤️', 'success');
    }
    setWishlistLoading(null);
  };

  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

    if (!token || !actualUserId) {
      showToastMessage('Please login to add items to cart', 'error');
      setTimeout(() => navigate('/login'), 2000);
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

  const items = getPujaKits ? getPujaKits() : products.filter(p => p.category?.name === 'Puja Kits');

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (items.length === 0) return <div className="text-center py-12">No Puja Kits available</div>;

  return (
    <>
      {showToast && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white ${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {toastMessage}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden relative group">
            <button
              onClick={() => handleWishlistToggle(product._id)}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md z-10"
            >
              <Heart className={`w-5 h-5 ${isInWishlist(product._id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
            </button>
            <div className="aspect-square bg-[#faf6f0]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2">{product.name}</h3>
              <p className="text-lg font-bold text-[#6b2314] mt-2">₹{product.price}</p>
              <button 
                onClick={() => handleAddToCart(product._id)}
                className="mt-3 w-full py-2.5 bg-[#6b2314] text-white rounded-md hover:bg-[#8b3a2b] transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PujaKits;