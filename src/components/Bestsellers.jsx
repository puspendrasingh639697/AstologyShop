

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
    isInWishlist,
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

  // ✅ Card click — detail page par jao
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

  // ✅ Discount calculate
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
      <div className="flex justify-center items-center py-12">
        <div className="w-12 h-12 border-4 border-[#6b2314] border-t-transparent rounded-full animate-spin"></div>
        <div className="text-[#4a2e18] mt-4 font-medium">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-600 font-medium">Error: {error}</div>
      </div>
    );
  }

  if (bestSellers.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-[#4a2e18] font-medium">No products available</div>
      </div>
    );
  }

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-xl z-50 animate-slide-down ${
            toastType === 'success'
              ? 'bg-green-600'
              : toastType === 'error'
              ? 'bg-red-600'
              : 'bg-[#6b2314]'
          } text-white max-w-sm font-medium`}
        >
          {toastMessage}
        </div>
      )}

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => {
          const discount = getDiscount(product);

          return (
            <div
              key={product._id}
              onClick={() => handleCardClick(product._id)}
              className=" rounded-md border border-[#edd5b9] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 relative group p-3 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* ✅ Discount Badge (top-left) */}
                {discount.percent > 0 && (
                  <div className="absolute top-5 left-5 bg-gradient-to-r from-red-800 to-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md z-10">
                    {discount.percent}% OFF
                  </div>
                )}

                {/* Wishlist Button — stopPropagation */}
                <button
                  onClick={(e) => handleWishlistToggle(e, product._id)}
                  disabled={wishlistLoading === product._id}
                  className="absolute top-5 right-5 w-9 h-9 bg-gradient-to-r from-red-800 to-red-600 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      isInWishlist(product._id)
                        ? 'fill-green-500 text-green-500'
                        : 'text-white hover:text-red-500'
                    } ${wishlistLoading === product._id ? 'animate-pulse' : ''}`}
                  />
                </button>

                {/* Product Image */}
                <div className="w-full h-64 rounded-xl overflow-hidden bg-[#faf6f0] mb-3">
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
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <ShoppingBag className="w-12 h-12 text-black" />
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="px-1">
                  <h3 className="text-sm sm:text-base font-medium text-black line-clamp-2 min-h-[44px] mb-2 group-hover:text-[#6b2314] transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-red-800 to-red-600 text-white rounded font-medium">
                      {product.category?.name || 'General'}
                    </span>
                    {product.stock > 0 ? (
                      <span className="text-xs text-green-600 font-medium">
                        In Stock
                      </span>
                    ) : (
                      <span className="text-xs text-red-500 font-medium">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  {/* ✅ Price with Discount */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <p className="text-lg font-bold text-[#4a2e18]">
                      ₹{Number(product.price || 0).toLocaleString('en-IN')}
                    </p>

                    {discount.mrp > 0 && (
                      <>
                        <span className="text-sm text-gray-400 line-through">
                          ₹{discount.mrp.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                          Save ₹{discount.save.toLocaleString('en-IN')}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons — stopPropagation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleAddToCart(e, product._id)}
                  disabled={product.stock === 0}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer text-center ${
                    product.stock > 0
                      ? 'bg-gradient-to-r from-red-800 to-red-600 hover:bg-[#7f1d1d] text-white'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.stock > 0 ? 'BUY NOW' : 'Out of Stock'}
                </button>

                <button
                  onClick={(e) => handleAddToCart(e, product._id)}
                  disabled={product.stock === 0}
                  title="Add to Cart"
                  className="p-2.5 border border-[#edd5b9] rounded-lg hover:bg-[#fdf2f0] hover:border-[#8b3a2b] text-[#4a2e18] transition-colors cursor-pointer flex items-center justify-center bg-white shadow-sm"
                >
                  <ShoppingBag className="h-5 w-5" />
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