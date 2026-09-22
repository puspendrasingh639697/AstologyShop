


// import React, { useEffect, useState } from 'react';
// import { Heart, ShoppingBag } from 'lucide-react';
// import useProductStore from '../store/useProductStore';
// import useWishlistStore from '../store/useWishlistStore';
// import useCartStore from '../store/useCartStore';
// import { useNavigate } from 'react-router-dom';

// const PujaKits = () => {
//   const navigate = useNavigate();
//   const { products, loading, error, fetchProducts, getPujaKits } = useProductStore();
//   const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist } = useWishlistStore();
//   const { addToCart, setUserId } = useCartStore();
  
//   const [wishlistLoading, setWishlistLoading] = useState(null);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState('');
//   const [toastType, setToastType] = useState('info');

//   useEffect(() => {
//     fetchProducts();
//     fetchWishlist();
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');
//     if (actualUserId) {
//       setUserId(actualUserId);
//     }
//   }, [fetchProducts, fetchWishlist, setUserId]);

//   const showToastMessage = (message, type = 'info') => {
//     setToastMessage(message);
//     setToastType(type);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   };

//   const handleWishlistToggle = async (productId) => {
//     setWishlistLoading(productId);
//     if (isInWishlist(productId)) {
//       await removeFromWishlist(productId);
//       showToastMessage('Removed from wishlist', 'success');
//     } else {
//       await addToWishlist(productId);
//       showToastMessage('Added to wishlist ❤️', 'success');
//     }
//     setWishlistLoading(null);
//   };

//   const handleAddToCart = async (productId) => {
//     const token = localStorage.getItem('token');
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

//     if (!token || !actualUserId) {
//       showToastMessage('Please login to add items to cart', 'error');
//       setTimeout(() => navigate('/login'), 2000);
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

//   const items = getPujaKits ? getPujaKits() : products.filter(p => p.category?.name === 'Puja Kits');

//   if (loading) return <div className="text-center py-12">Loading...</div>;
//   if (items.length === 0) return <div className="text-center py-12">No Puja Kits available</div>;

//   return (
//     <>
//       {showToast && (
//         <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white ${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
//           {toastMessage}
//         </div>
//       )}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {items.map((product) => (
//           <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden relative group">
//             <button
//               onClick={() => handleWishlistToggle(product._id)}
//               className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md z-10"
//             >
//               <Heart className={`w-5 h-5 ${isInWishlist(product._id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
//             </button>
//             <div className="aspect-square bg-[#faf6f0]">
//               <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
//             </div>
//             <div className="p-4">
//               <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2">{product.name}</h3>
//               <p className="text-lg font-bold text-[#6b2314] mt-2">₹{product.price}</p>
//               <button 
//                 onClick={() => handleAddToCart(product._id)}
//                 className="mt-3 w-full py-2.5 bg-[#6b2314] text-white rounded-md hover:bg-[#8b3a2b] transition-colors flex items-center justify-center gap-2 text-sm"
//               >
//                 <ShoppingBag className="w-4 h-4" /> Add to Cart
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
  const { products, loading, error, fetchProducts } = useProductStore();
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

  const handleAddToCart = async (e, product) => {
    e.stopPropagation();

    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

    if (!token || !actualUserId) {
      showToastMessage('Please login to add items to cart', 'error');
      setTimeout(() => navigate('/login'), 2000);
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
      showToastMessage('Item added to cart! 🛒', 'success');
    } else {
      showToastMessage(result.error || 'Failed to add to cart', 'error');
    }
  };

  // ✅ Sirf Puja Kits category ke products filter karo
  const pujaKitsOnly = products.filter((p) => {
    const catName = p.category?.name || '';
    return catName.toLowerCase().includes('puja kit');
  });

  if (loading)
    return (
      <div className="text-center py-12 text-[#4a2e18]">Loading...</div>
    );

  return (
    <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto">

        {/* ✅ Section Heading */}
        <div className="mb-8 border-b border-stone-300 pb-4">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#8c0a15]">
            Puja Kits & Anushthan
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Complete curated kits for Ganesh, Lakshmi, Shiv, Satyanarayan, Griha Pravesh & Havan
          </p>
        </div>

        {showToast && (
          <div
            className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white ${
              toastType === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {toastMessage}
          </div>
        )}

        {pujaKitsOnly.length === 0 ? (
          <div className="text-center py-20 text-stone-500 text-lg">
            No Puja Kits available
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pujaKitsOnly.map((product) => (
              <div
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
                className="bg-white rounded-lg shadow-md overflow-hidden relative group cursor-pointer hover:shadow-xl transition-shadow"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWishlistToggle(product._id);
                  }}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md z-10"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isInWishlist(product._id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>

                <div className="aspect-square bg-[#faf6f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-[#6b2314] mt-2">
                    ₹{product.price}
                  </p>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="mt-3 w-full py-2.5 bg-[#6b2314] text-white rounded-md hover:bg-[#8b3a2b] transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PujaKits;