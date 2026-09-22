// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { Heart, ShoppingBag } from 'lucide-react';
// // import useProductStore from '../store/useProductStore';
// // import useWishlistStore from '../store/useWishlistStore';
// // import useCartStore from '../store/useCartStore';

// // const CategoryProducts = () => {
// //   const { categoryName } = useParams(); // URL se category name milega (jaise 'puja-samagri')
// //   const navigate = useNavigate();
// //   const { products, loading, fetchProducts } = useProductStore();
// //   const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist, isInWishlist } = useWishlistStore();
// //   const { addToCart, setUserId } = useCartStore();

// //   const [showToast, setShowToast] = useState(false);
// //   const [toastMessage, setToastMessage] = useState('');

// //   useEffect(() => {
// //     fetchProducts();
// //     fetchWishlist();
// //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// //     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');
// //     if (actualUserId) setUserId(actualUserId);
// //   }, [fetchProducts, fetchWishlist, setUserId]);

// //   const showToastMessage = (msg) => {
// //     setToastMessage(msg);
// //     setShowToast(true);
// //     setTimeout(() => setShowToast(false), 3000);
// //   };

// //   const handleAddToCart = async (productId) => {
// //     const token = localStorage.getItem('token');
// //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// //     const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');

// //     if (!token || !actualUserId) {
// //       showToastMessage('Please login to add items to cart');
// //       setTimeout(() => navigate('/login'), 2000);
// //       return;
// //     }
    
// //     setUserId(actualUserId);
// //     const result = await addToCart(productId, 1);
// //     if (result.success) {
// //       showToastMessage('Item added to cart! 🛒');
// //     } else {
// //       showToastMessage(result.error || 'Failed to add');
// //     }
// //   };

// //   // URL wale category name ko database category se match karna
// //   const filteredProducts = products.filter(p => {
// //     const cat = p.category?.name?.toLowerCase().replace(/\s+/g, '-');
// //     return cat === categoryName?.toLowerCase();
// //   });

// //   if (loading) return <div className="text-center py-20">Loading products...</div>;

// //   return (
// //     <div className="max-w-[1400px] mx-auto py-10 px-4">
// //       {showToast && (
// //         <div className="fixed top-4 right-4 bg-[#6b2314] text-white px-6 py-3 rounded-lg shadow-lg z-50">
// //           {toastMessage}
// //         </div>
// //       )}
      
// //       <h2 className="text-3xl font-serif text-[#4a2e18] capitalize mb-8 border-b pb-4">
// //         {categoryName?.replace(/-/g, ' ')}
// //       </h2>

// //       {filteredProducts.length === 0 ? (
// //         <div className="text-center py-20 text-gray-500 text-lg">
// //           No products found in this category.
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {filteredProducts.map((product) => (
// //             <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden relative group">
// //               <div className="aspect-square bg-[#faf6f0]">
// //                 <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
// //               </div>
// //               <div className="p-4">
// //                 <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2">{product.name}</h3>
// //                 <p className="text-lg font-bold text-[#6b2314] mt-2">₹{product.price}</p>
// //                 <button 
// //                   onClick={() => handleAddToCart(product._id)}
// //                   className="mt-3 w-full py-2.5 bg-[#6b2314] text-white rounded-md hover:bg-[#8b3a2b] transition-colors flex items-center justify-center gap-2 text-sm"
// //                 >
// //                   <ShoppingBag className="w-4 h-4" /> Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CategoryProducts;


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShoppingBag } from 'lucide-react';
// import axios from 'axios';
// import API_BASE_URL from '../config/api';  // ✅ Central URL
// import useWishlistStore from '../store/useWishlistStore';
// import useCartStore from '../store/useCartStore';

// const CategoryProducts = () => {
//   const { categoryName } = useParams();
//   const navigate = useNavigate();
//   const { fetchWishlist } = useWishlistStore();
//   const { addToCart, setUserId } = useCartStore();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState('');

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // ✅ Try 1: Dedicated category endpoint
//         try {
//           const response = await axios.get(
//             `${API_BASE_URL}/products/category/${categoryName}`
//           );

//           console.log("Category API Response:", response.data);

//           const fetchedProducts =
//             response.data.products ||
//             response.data.data ||
//             (Array.isArray(response.data) ? response.data : []);

//           setProducts(fetchedProducts);
//         } catch (err) {
//           // ✅ Fallback: Saare products laao aur frontend pe filter karo
//           console.warn(
//             `Category endpoint failed (${err.response?.status}). Using fallback...`
//           );

//           const res = await axios.get(`${API_BASE_URL}/products`);
//           const allProducts =
//             res.data.products ||
//             res.data.data ||
//             (Array.isArray(res.data) ? res.data : []);

//           console.log("All Products:", allProducts);

//           const filtered = allProducts.filter((p) => {
//             const catName =
//               p.category?.name || p.category?.slug || p.category;
//             if (typeof catName === 'string') {
//               return (
//                 catName.toLowerCase().replace(/\s+/g, '-') ===
//                 categoryName?.toLowerCase()
//               );
//             }
//             return false;
//           });

//           console.log("Filtered Products:", filtered);
//           setProducts(filtered);
//         }
//       } catch (err) {
//         console.error("Error fetching category products:", err);
//         setError("Failed to load products. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (categoryName) {
//       fetchCategoryProducts();
//       fetchWishlist();
//       const user = JSON.parse(localStorage.getItem('user') || '{}');
//       const actualUserId =
//         user.id || user._id || localStorage.getItem('cartUserId');
//       if (actualUserId) setUserId(actualUserId);
//     }
//   }, [categoryName, fetchWishlist, setUserId]);

//   const showToastMessage = (msg) => {
//     setToastMessage(msg);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   };

//   const handleAddToCart = async (productId) => {
//     const token = localStorage.getItem('token');
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const actualUserId =
//       user.id || user._id || localStorage.getItem('cartUserId');

//     if (!token || !actualUserId) {
//       showToastMessage('Please login to add items to cart');
//       setTimeout(() => navigate('/login'), 2000);
//       return;
//     }

//     setUserId(actualUserId);
//     const result = await addToCart(productId, 1);
//     if (result.success) {
//       showToastMessage('Item added to cart! 🛒');
//     } else {
//       showToastMessage(result.error || 'Failed to add');
//     }
//   };

//   if (loading)
//     return <div className="text-center py-20">Loading products...</div>;
//   if (error)
//     return <div className="text-center py-20 text-red-600">{error}</div>;

//   return (
//     <div className="max-w-[1400px] mx-auto py-10 px-4">
//       {showToast && (
//         <div className="fixed top-4 right-4 bg-[#6b2314] text-white px-6 py-3 rounded-lg shadow-lg z-50">
//           {toastMessage}
//         </div>
//       )}

//       <h2 className="text-3xl font-serif text-[#4a2e18] capitalize mb-8 border-b pb-4">
//         {categoryName?.replace(/-/g, ' ')}
//       </h2>

//       {products.length === 0 ? (
//         <div className="text-center py-20 text-gray-500 text-lg">
//           No products found in this category.
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white rounded-lg shadow-md overflow-hidden relative group cursor-pointer"
//               onClick={() => navigate(`/product/${product._id}`)}
//             >
//               <div className="aspect-square bg-[#faf6f0]">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-sm font-medium text-[#4a2e18] line-clamp-2">
//                   {product.name}
//                 </h3>
//                 <p className="text-lg font-bold text-[#6b2314] mt-2">
//                   ₹{product.price}
//                 </p>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleAddToCart(product._id);
//                   }}
//                   className="mt-3 w-full py-2.5 bg-[#6b2314] text-white rounded-md hover:bg-[#8b3a2b] transition-colors flex items-center justify-center gap-2 text-sm"
//                 >
//                   <ShoppingBag className="w-4 h-4" /> Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryProducts;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import useProductStore from '../store/useProductStore';
import useCategoryStore from '../store/useCategoryStore';
import useWishlistStore from '../store/useWishlistStore';
import useCartStore from '../store/useCartStore';

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { products, loading, fetchProducts } = useProductStore();
  const { categories, fetchCategories } = useCategoryStore();
  const { fetchWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchWishlist();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const actualUserId = user.id || user._id || localStorage.getItem('cartUserId');
    if (actualUserId) setUserId(actualUserId);
  }, [fetchProducts, fetchCategories, fetchWishlist, setUserId]);

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

  // ✅ URL slug se category dhoondein
  const currentCategory = categories?.find(
    (c) => c.slug?.toLowerCase() === categoryName?.toLowerCase()
  );

  // ✅ Products filter karein (category name se match)
  const filteredProducts = currentCategory
    ? products.filter((p) => {
        const productCatName = p.category?.name || '';
        return productCatName.toLowerCase() === currentCategory.name.toLowerCase();
      })
    : [];

  if (loading) return <div className="text-center py-20">Loading products...</div>;

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-4">
      {showToast && (
        <div className="fixed top-4 right-4 bg-[#6b2314] text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {toastMessage}
        </div>
      )}

      <h2 className="text-3xl font-serif text-[#4a2e18] capitalize mb-8 border-b pb-4">
        {currentCategory?.name || categoryName?.replace(/-/g, ' ')}
      </h2>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 text-gray-500 text-lg">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative group cursor-pointer"
              onClick={() => navigate(`/product/${product._id}`)}
            >
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product._id);
                  }}
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