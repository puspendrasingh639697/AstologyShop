import React, { useEffect, useState } from 'react';
// import useWishlistStore from '../store/wishlistStore';
// import useProductStore from '../store/productStore';
import { Heart, Trash2, ShoppingBag, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import useWishlistStore from '../../store/useWishlistStore';
import useProductStore from '../../store/useProductStore';

const Wishlist = () => {
  const { 
    wishlist, 
    loading, 
    error, 
    fetchWishlist, 
    removeFromWishlist,
    clearWishlist 
  } = useWishlistStore();
  
  const { fetchProducts } = useProductStore();
  const [removingId, setRemovingId] = useState(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const init = async () => {
      await fetchProducts();
      await fetchWishlist();
    };
    init();
  }, []);

  const handleRemove = async (productId) => {
    setRemovingId(productId);
    const result = await removeFromWishlist(productId);
    setRemovingId(null);
    
    if (result.success) {
      setToastMessage({ type: 'success', text: 'Removed from wishlist' });
      setTimeout(() => setToastMessage(null), 3000);
    } else {
      setToastMessage({ type: 'error', text: result.error || 'Failed to remove' });
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handleClearAll = async () => {
    setShowClearConfirm(false);
    const result = await clearWishlist();
    if (result.success) {
      setToastMessage({ type: 'success', text: 'Wishlist cleared successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handleMoveToCart = (product) => {
    setToastMessage({ type: 'success', text: `${product.name} added to cart` });
    setTimeout(() => setToastMessage(null), 3000);
  };

  console.log('🛒 Wishlist products:', wishlist);
  console.log('🛒 First product:', wishlist[0]);

  if (loading && wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center py-12">
        <div className="w-12 h-12 border-4 border-[#6b2314] border-t-transparent rounded-full animate-spin"></div>
        <div className="text-[#4a2e18] mt-4">Loading your wishlist...</div>
      </div>
    );
  }

  if (error && !error.includes('login')) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center py-12">
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <div className="text-red-600 text-lg font-semibold">Error: {error}</div>
        <button 
          onClick={fetchWishlist}
          className="mt-4 px-6 py-2 bg-[#6b2314] text-white rounded-md hover:bg-[#8b3a2b] transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center py-16 bg-white rounded-lg shadow-sm">
        <Heart className="w-20 h-20 text-gray-300 mb-4" strokeWidth={1.5} />
        <h3 className="text-2xl font-serif text-[#4a2e18]">Your wishlist is empty</h3>
        <p className="text-gray-500 mt-2 text-center max-w-md">
          Start adding your favorite spiritual items by clicking the heart icon on any product.
        </p>
        <Link to="/shop">
          <button className="mt-6 px-8 py-3 bg-[#6b2314] text-white rounded-md hover:bg-[#8b3a2b] transition-colors">
            Explore Products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 bg-[#fff3df] min-h-[60vh]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down ${
          toastMessage.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        } text-white`}>
          {toastMessage.text}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18]">
            My Wishlist
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
        
        <div className="flex gap-3">
          <Link to="/shop">
            <button className="px-4 py-2 border border-[#6b2314] text-[#6b2314] rounded-md hover:bg-[#6b2314] hover:text-white transition-colors text-sm">
              Continue Shopping
            </button>
          </Link>
          <button 
            onClick={() => setShowClearConfirm(true)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        </div>
      </div>

      {/* Clear All Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#4a2e18]">Clear Wishlist?</h3>
              <button onClick={() => setShowClearConfirm(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to remove all items from your wishlist?
            </p>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleClearAll}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Yes, Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group relative"
          >
            {/* Remove Button */}
            <button
              onClick={() => handleRemove(product._id)}
              disabled={removingId === product._id}
              className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
            >
              <X 
                className={`w-4 h-4 text-red-500 ${
                  removingId === product._id ? 'animate-spin' : 'hover:scale-110'
                }`} 
              />
            </button>

            {/* Product Image */}
            <Link to={`/product/${product.slug || product._id}`}>
              <div className="aspect-square overflow-hidden bg-[#faf6f0]">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <ShoppingBag className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
            </Link>

            {/* Product Info */}
            <div className="p-4">
              <Link to={`/product/${product.slug || product._id}`}>
                <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2 min-h-[40px] hover:text-[#6b2314] transition-colors">
                  {product.name || 'Unknown Product'}
                </h3>
              </Link>
              
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  {product.category?.name || 'General'}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg font-bold text-[#6b2314]">
                  ₹{product.price?.toLocaleString() || product.price || '0'}
                </span>
              </div>

              {product.stock > 0 ? (
                <span className="text-xs text-green-600">In Stock</span>
              ) : (
                <span className="text-xs text-red-500">Out of Stock</span>
              )}

              {/* Move to Cart Button */}
              <button
                onClick={() => handleMoveToCart(product)}
                disabled={product.stock === 0}
                className={`mt-3 w-full py-2.5 rounded-md transition-all duration-300 text-sm flex items-center justify-center gap-2 ${
                  product.stock > 0 
                    ? 'bg-[#6b2314] text-white hover:bg-[#8b3a2b] hover:shadow-lg' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {product.stock > 0 ? 'Move to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      {wishlist.length > 0 && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-sm text-gray-500">
              Showing {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>Total: ₹{wishlist.reduce((sum, item) => sum + (item.price || 0), 0).toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;