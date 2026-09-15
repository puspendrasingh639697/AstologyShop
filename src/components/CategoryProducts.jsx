import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import useProductStore from '../store/useProductStore';
import useWishlistStore from '../store/useWishlistStore';
import useCartStore from '../store/useCartStore';

const CategoryProducts = () => {
  const { categoryName } = useParams(); // URL se category name milega (jaise 'puja-samagri')
  const navigate = useNavigate();
  const { products, loading, fetchProducts } = useProductStore();
  const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchWishlist();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');
    if (actualUserId) setUserId(actualUserId);
  }, [fetchProducts, fetchWishlist, setUserId]);

  const showToastMessage = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

    if (!token || !actualUserId) {
      showToastMessage('Please login to add items to cart');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }
    
    setUserId(actualUserId);
    const result = await addToCart(productId, 1);
    if (result.success) {
      showToastMessage('Item added to cart! 🛒');
    } else {
      showToastMessage(result.error || 'Failed to add');
    }
  };

  // URL wale category name ko database category se match karna
  const filteredProducts = products.filter(p => {
    const cat = p.category?.name?.toLowerCase().replace(/\s+/g, '-');
    return cat === categoryName?.toLowerCase();
  });

  if (loading) return <div className="text-center py-20">Loading products...</div>;

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-4">
      {showToast && (
        <div className="fixed top-4 right-4 bg-[#6b2314] text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {toastMessage}
        </div>
      )}
      
      <h2 className="text-3xl font-serif text-[#4a2e18] capitalize mb-8 border-b pb-4">
        {categoryName?.replace(/-/g, ' ')}
      </h2>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 text-gray-500 text-lg">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden relative group">
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
      )}
    </div>
  );
};

export default CategoryProducts;