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
    wishlist, 
    addToWishlist, 
    removeFromWishlist, 
    fetchWishlist,
    isInWishlist 
  } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();
  
  const [wishlistLoading, setWishlistLoading] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('info');

  useEffect(() => {
    fetchProducts();
    fetchWishlist();
    
    // Sahi tarike se localStorage se user data nikal kar ID set karna
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

  const handleWishlistToggle = async (productId) => {
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

  const handleAddToCart = async (productId) => {
    // Token aur User ID dono check karna
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
    
    // Cart store me sahi user ID set karna
    setUserId(actualUserId);
    
    const result = await addToCart(productId, 1);
    
    if (result.success) {
      showToastMessage('Item added to cart! 🛒', 'success');
    } else {
      showToastMessage(result.error || 'Failed to add to cart', 'error');
    }
  };

  const bestSellers = getBestSellers();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="w-12 h-12 border-4 border-[#6b2314] border-t-transparent rounded-full animate-spin"></div>
        <div className="text-[#4a2e18] mt-4">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (bestSellers.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-[#4a2e18]">No products available</div>
      </div>
    );
  }

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down ${
          toastType === 'success' ? 'bg-green-600' : 
          toastType === 'error' ? 'bg-red-600' : 'bg-[#6b2314]'
        } text-white max-w-sm`}>
          {toastMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 relative group"
          >
            {/* Wishlist Button - Heart Icon */}
            <button
              onClick={() => handleWishlistToggle(product._id)}
              disabled={wishlistLoading === product._id}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
            >
              <Heart 
                className={`w-5 h-5 transition-colors ${
                  isInWishlist(product._id) 
                    ? 'fill-red-500 text-red-500' 
                    : 'text-gray-400 hover:text-red-500'
                } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
              />
            </button>

            {/* Product Image */}
            <div className="aspect-square overflow-hidden bg-[#faf6f0]">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <ShoppingBag className="w-12 h-12 text-gray-400" />
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2 min-h-[40px] group-hover:text-[#6b2314] transition-colors">
                {product.name}
              </h3>
              
              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-gray-500">
                  {product.category?.name || 'General'}
                </span>
                {product.stock > 0 ? (
                  <span className="text-xs text-green-600">In Stock</span>
                ) : (
                  <span className="text-xs text-red-500">Out of Stock</span>
                )}
              </div>

              <div className="mt-2 flex items-center gap-2">
                <p className="text-lg font-bold text-[#6b2314]">
                  ₹{product.price?.toLocaleString() || product.price}
                </p>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={() => handleAddToCart(product._id)}
                disabled={product.stock === 0}
                className={`mt-3 w-full py-2.5 rounded-md transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
                  product.stock > 0 
                    ? 'bg-[#6b2314] text-white hover:bg-[#8b3a2b] hover:shadow-lg' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bestsellers;