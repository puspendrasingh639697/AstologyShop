// import React, { useEffect, useState } from 'react';
// import { ShoppingBag, Trash2, Plus, Minus, X, ArrowLeft } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import useCartStore from '../../store/useCartStore';
// import useProductStore from '../../store/useProductStore';

// const Cart = () => {
//   const { 
//     items, 
//     totalItems, 
//     totalAmount, 
//     loading, 
//     error,
//     userId,
//     fetchCart, 
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//     setUserId 
//   } = useCartStore();
  
//   const { fetchProducts, products } = useProductStore();
//   const [showClearConfirm, setShowClearConfirm] = useState(false);
//   const [toastMessage, setToastMessage] = useState(null);

//   useEffect(() => {
//     const init = async () => {
//       await fetchProducts();
      
//       const user = JSON.parse(localStorage.getItem('user') || '{}');
//       const currentUserId = user.id || user._id || localStorage.getItem('cartUserId');
      
//       if (currentUserId) {
//         setUserId(currentUserId);
//         await fetchCart(currentUserId);
//       }
//     };
//     init();
//   }, []);

//   // Map items to get populated product data safely
//   const displayItems = items?.map((item) => {
//     return {
//       ...item,
//       product: typeof item.productId === 'object' ? item.productId : null
//     };
//   }) || [];

//   // Handle Remove Item
//   const handleRemove = async (prodId) => {
//     if (!userId || !prodId) return;
//     const result = await removeFromCart(userId, prodId);
//     if (result.success) {
//       showToast("Item removed from cart successfully", "success");
//       await fetchCart(userId);
//     } else {
//       showToast(result.error || "Failed to remove item", "error");
//     }
//   };

//   // Handle Clear Cart
//   const handleClear = async () => {
//     if (!userId) return;
//     const result = await clearCart(userId);
//     if (result.success) {
//       showToast("Cart cleared successfully", "success");
//       setShowClearConfirm(false);
//       await fetchCart(userId);
//     } else {
//       showToast(result.error || "Failed to clear cart", "error");
//     }
//   };

//   // Toast Helper
//   const showToast = (text, type = 'success') => {
//     setToastMessage({ text, type });
//     setTimeout(() => setToastMessage(null), 3000);
//   };

//   if (displayItems.length === 0) {
//     return (
//       <div className="min-h-[60vh] flex flex-col justify-center items-center py-16 bg-white rounded-lg shadow-sm">
//         <ShoppingBag className="w-20 h-20 text-gray-300 mb-4" strokeWidth={1.5} />
//         <h3 className="text-2xl font-serif text-[#4a2e18]">Your cart is empty</h3>
//         <p className="text-gray-500 mt-2 text-center max-w-md">
//           Start shopping for spiritual items to fill your cart.
//         </p>
//         <Link to="/shop">
//           <button className="mt-6 px-8 py-3 bg-[#6b2314] text-white rounded-md hover:bg-[#8b3a2b] transition-colors">
//             Start Shopping
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-[1400px] mx-auto px-4 py-8 bg-[#fff3df] min-h-[60vh] relative">
//       {/* Toast Notification */}
//       {toastMessage && (
//         <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-all ${
//           toastMessage.type === 'success' ? 'bg-green-600' : 'bg-red-600'
//         } text-white`}>
//           {toastMessage.text}
//         </div>
//       )}

//       {/* Clear Cart Confirmation Modal */}
//       {showClearConfirm && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
//             <h3 className="text-lg font-bold text-[#4a2e18] mb-2">Clear Cart</h3>
//             <p className="text-gray-600 text-sm mb-6">Are you sure you want to remove all items from your cart?</p>
//             <div className="flex justify-end gap-3">
//               <button 
//                 onClick={() => setShowClearConfirm(false)}
//                 className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-sm"
//               >
//                 Cancel
//               </button>
//               <button 
//                 onClick={handleClear}
//                 className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
//               >
//                 Yes, Clear
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Header */}
//       <div className="flex flex-wrap justify-between items-center gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
//         <div className="flex items-center gap-4">
//           <Link to="/shop">
//             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//               <ArrowLeft className="w-5 h-5" />
//             </button>
//           </Link>
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18]">
//               My Cart
//             </h2>
//             <p className="text-gray-500 text-sm mt-1">
//               {displayItems.length} {displayItems.length === 1 ? 'product' : 'products'} in cart
//             </p>
//           </div>
//         </div>
        
//         <button 
//           onClick={() => setShowClearConfirm(true)}
//           className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm flex items-center gap-2"
//         >
//           <Trash2 className="w-4 h-4" />
//           Clear Cart
//         </button>
//       </div>

//       {/* Cart Items */}
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//         {displayItems.map((item) => {
//           const product = item.product;
//           // Yeh ensure karega ki chahe object ho ya string ID, sahi ID hi delete/update ke liye jaye
//           const prodId = product?._id || (typeof item.productId === 'object' ? item.productId?._id : item.productId);

//           return (
//             <div key={item._id} className="flex flex-wrap items-center gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//               {/* Product Image */}
//               <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
//                 {product?.image ? (
//                   <img
//                     src={product.image}
//                     alt={product?.name}
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/150x150?text=No+Image';
//                     }}
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <ShoppingBag className="w-8 h-8 text-gray-400" />
//                   </div>
//                 )}
//               </div>

//               {/* Product Info */}
//               <div className="flex-1 min-w-[200px]">
//                 <Link to={`/product/${product?.slug || prodId}`}>
//                   <h3 className="font-medium text-[#4a2e18] hover:text-[#6b2314] transition-colors">
//                     {product?.name || 'Unknown Product'}
//                   </h3>
//                 </Link>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {product?.category?.name || 'General'}
//                 </p>
//                 <p className="text-lg font-bold text-[#6b2314] mt-2">
//                   ₹{product?.price?.toLocaleString() || product?.price || 0}
//                 </p>
//               </div>

//               {/* Quantity Controls */}
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => updateQuantity(userId, prodId, item.quantity - 1)}
//                   className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
//                 >
//                   <Minus className="w-4 h-4" />
//                 </button>
//                 <span className="w-8 text-center font-medium">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(userId, prodId, item.quantity + 1)}
//                   className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
//                 >
//                   <Plus className="w-4 h-4" />
//                 </button>
//               </div>

//               {/* Item Total & Remove */}
//               <div className="flex flex-col items-end gap-2 min-w-[100px]">
//                 <p className="font-bold text-[#6b2314]">
//                   ₹{(product?.price || 0) * item.quantity}
//                 </p>
//                 <button
//                   onClick={() => handleRemove(prodId)}
//                   className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 transition-colors cursor-pointer"
//                 >
//                   <X className="w-4 h-4" />
//                   Remove
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Cart Summary */}
//       <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
//         <div className="flex flex-wrap justify-between items-center">
//           <div>
//             <p className="text-sm text-gray-500">
//               Total Items: <span className="font-medium">{totalItems}</span>
//             </p>
//           </div>
//           <div className="text-right">
//             <p className="text-sm text-gray-500">Total Amount</p>
//             <p className="text-2xl font-bold text-[#6b2314]">
//               ₹{totalAmount?.toLocaleString() || 0}
//             </p>
//           </div>
//         </div>
        
//         <button className="mt-4 w-full bg-[#6b2314] text-white py-3 rounded-md hover:bg-[#8b3a2b] transition-colors text-lg font-semibold">
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useEffect, useState } from 'react';
import { ShoppingBag, Trash2, Plus, Minus, X, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';
import useProductStore from '../../store/useProductStore';

const Cart = () => {
  const navigate = useNavigate(); // <-- Navigate hook added here
  
  const { 
    items, 
    totalItems, 
    totalAmount, 
    loading, 
    error,
    userId,
    fetchCart, 
    removeFromCart,
    updateQuantity,
    clearCart,
    setUserId 
  } = useCartStore();
  
  const { fetchProducts, products } = useProductStore();
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const init = async () => {
      await fetchProducts();
      
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const currentUserId = user.id || user._id || localStorage.getItem('cartUserId');
      
      if (currentUserId) {
        setUserId(currentUserId);
        await fetchCart(currentUserId);
      }
    };
    init();
  }, []);

  // Map items to get populated product data safely
  const displayItems = items?.map((item) => {
    return {
      ...item,
      product: typeof item.productId === 'object' ? item.productId : null
    };
  }) || [];

  // Handle Remove Item
  const handleRemove = async (prodId) => {
    if (!userId || !prodId) return;
    const result = await removeFromCart(userId, prodId);
    if (result.success) {
      showToast("Item removed from cart successfully", "success");
      await fetchCart(userId);
    } else {
      showToast(result.error || "Failed to remove item", "error");
    }
  };

  // Handle Clear Cart
  const handleClear = async () => {
    if (!userId) return;
    const result = await clearCart(userId);
    if (result.success) {
      showToast("Cart cleared successfully", "success");
      setShowClearConfirm(false);
      await fetchCart(userId);
    } else {
      showToast(result.error || "Failed to clear cart", "error");
    }
  };

  // Toast Helper
  const showToast = (text, type = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (displayItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center py-16 bg-white rounded-lg shadow-sm">
        <ShoppingBag className="w-20 h-20 text-gray-300 mb-4" strokeWidth={1.5} />
        <h3 className="text-2xl font-serif text-[#4a2e18]">Your cart is empty</h3>
        <p className="text-gray-500 mt-2 text-center max-w-md">
          Start shopping for spiritual items to fill your cart.
        </p>
        <Link to="/shop">
          <button className="mt-6 px-8 py-3 bg-[#6b2314] text-white rounded-md hover:bg-[#8b3a2b] transition-colors cursor-pointer">
            Start Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 bg-[#fff3df] min-h-[60vh] relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-all ${
          toastMessage.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        } text-white`}>
          {toastMessage.text}
        </div>
      )}

      {/* Clear Cart Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold text-[#4a2e18] mb-2">Clear Cart</h3>
            <p className="text-gray-600 text-sm mb-6">Are you sure you want to remove all items from your cart?</p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleClear}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm cursor-pointer"
              >
                Yes, Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/shop">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18]">
              My Cart
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {displayItems.length} {displayItems.length === 1 ? 'product' : 'products'} in cart
            </p>
          </div>
        </div>
        
        <button 
          onClick={() => setShowClearConfirm(true)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm flex items-center gap-2 cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {displayItems.map((item) => {
          const product = item.product;
          const prodId = product?._id || (typeof item.productId === 'object' ? item.productId?._id : item.productId);

          return (
            <div key={item._id} className="flex flex-wrap items-center gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
              {/* Product Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                {product?.image ? (
                  <img
                    src={product.image}
                    alt={product?.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150x150?text=No+Image';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-[200px]">
                <Link to={`/product/${product?.slug || prodId}`}>
                  <h3 className="font-medium text-[#4a2e18] hover:text-[#6b2314] transition-colors">
                    {product?.name || 'Unknown Product'}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 mt-1">
                  {product?.category?.name || 'General'}
                </p>
                <p className="text-lg font-bold text-[#6b2314] mt-2">
                  ₹{product?.price?.toLocaleString() || product?.price || 0}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(userId, prodId, item.quantity - 1)}
                  className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(userId, prodId, item.quantity + 1)}
                  className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Item Total & Remove */}
              <div className="flex flex-col items-end gap-2 min-w-[100px]">
                <p className="font-bold text-[#6b2314]">
                  ₹{(product?.price || 0) * item.quantity}
                </p>
                <button
                  onClick={() => handleRemove(prodId)}
                  className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">
              Total Items: <span className="font-medium">{totalItems}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="text-2xl font-bold text-[#6b2314]">
              ₹{totalAmount?.toLocaleString() || 0}
            </p>
          </div>
        </div>
        
        {/* Proceed to Checkout Button */}
        <button 
          onClick={() => navigate('/checkout')}
          className="mt-4 w-full bg-[#6b2314] text-white py-3 rounded-md hover:bg-[#8b3a2b] transition-colors text-lg font-semibold cursor-pointer"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;