// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { shopCategories } from "../data/categories";

// import ProductImageGallery from "./ProductPage/ProductImageGallery";
// import ProductInfo from "./ProductPage/ProductInfo";
// import DeliveryChecker from "./ProductPage/DeliveryChecker";
// import ActionButtons from "./ProductPage/ActionButtons";
// import ProductTabs from "./ProductTabs";
// import RelatedProducts from "./ProductPage/RelatedProducts";
// import useCartStore from "../store/useCartStore"; // ✅ Ye import add karo

// const ProductDetails = () => {
//   const { id } = useParams();
  
//   // Find current product based on URL id
//   const currentProduct = shopCategories.find((item) => item.id.toString() === id) || shopCategories[0];

//   const [selectedVariant, setSelectedVariant] = useState(
//     currentProduct.variants ? currentProduct.variants[0] : null
//   );
//   const [selectedImage, setSelectedImage] = useState(currentProduct.image);
//   const [quantity, setQuantity] = useState(1);

//   // ✅ Cart Store se addToCart function le lo
//   const { addToCart } = useCartStore();

//   // Reset variant and image when product ID changes (when clicking related products)
//   useEffect(() => {
//     setSelectedVariant(currentProduct.variants ? currentProduct.variants[0] : null);
//     setSelectedImage(currentProduct.image);
//     setQuantity(1);
//   }, [currentProduct]);

//   const [reviewsList, setReviewsList] = useState([
//     { id: 1, name: "Aarav Sharma", rating: 5, date: "12 May, 2026", comment: "Pure and authentic products. Very satisfied!" },
//     { id: 2, name: "Priya Verma", rating: 4, date: "02 June, 2026", comment: "Packaging was great and delivery was fast." }
//   ]);

//   const currentPrice = selectedVariant ? selectedVariant.price : currentProduct.price;
//   const currentOldPrice = selectedVariant ? selectedVariant.oldPrice : currentProduct.oldPrice;
//   const currentSku = selectedVariant ? selectedVariant.sku : currentProduct.sku;

//   const discountPercent = currentOldPrice 
//     ? Math.round(((currentOldPrice - currentPrice) / currentOldPrice) * 100) 
//     : null;

//    const handleAddToCart = async () => {
//     // 1. LocalStorage ya store se user info nikal lo
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const userId = user.id || user._id || localStorage.getItem('cartUserId');
//     const token = localStorage.getItem('token');

//     // 2. Agar user login nahi hai toh error dikhao
//     if (!token ) {
//       alert("Please login to add items to cart.");
//       // navigate("/login");
//       return;
//     }

//     // 3. Product ID (Aapke currentProduct mein id ya _id kya hai uske hisaab se)
//     const productId = currentProduct._id || currentProduct.id;

//     try {
//       // 4. Sahi parameters (userId, productId, quantity) bhejo
//       const result = await addToCart(userId, productId, quantity);
      
//       if (result?.success) {
//         alert(`Successfully added ${quantity} item(s) to your Cart!`);
//       } else {
//         alert(result?.error || "Could not add to cart. Please try again.");
//       }
//     } catch (error) {
//       console.error("Cart add error:", error);
//       alert("Please login again to add items to cart.");
//     }
//   };
//   const handleAddReview = (newRev) => {
//     const reviewObj = {
//       id: reviewsList.length + 1,
//       name: newRev.name,
//       rating: Number(newRev.rating),
//       date: "Today",
//       comment: newRev.comment
//     };
//     setReviewsList([reviewObj, ...reviewsList]);
//     alert("Thank you! Your review has been submitted.");
//   };

//   return (
//     <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
//       <div className="max-w-[1300px] mx-auto bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
        
//         {/* Top Split Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10">
//           <ProductImageGallery 
//             product={currentProduct} 
//             selectedImage={selectedImage} 
//             setSelectedImage={setSelectedImage} 
//           />

//           <div className="flex flex-col justify-between">
//             <div>
//               <ProductInfo 
//                 product={currentProduct}
//                 selectedVariant={selectedVariant}
//                 setSelectedVariant={setSelectedVariant}
//                 currentPrice={currentPrice}
//                 currentOldPrice={currentOldPrice}
//                 currentSku={currentSku}
//                 discountPercent={discountPercent}
//                 reviewsCount={reviewsList.length}
//               />
//               <DeliveryChecker />
//             </div>

//             <ActionButtons 
//               quantity={quantity}
//               setQuantity={setQuantity}
//               onAddToCart={handleAddToCart}
//               onBuyNow={() => {
//                 handleAddToCart();
//                 alert("Redirecting to Secure Checkout...");
//               }}
//             />
//           </div>
//         </div>

//         {/* Bottom Detailed Sections */}
//         <div className="border-t border-stone-200 p-6 sm:p-10 bg-[#fdfaf5]">
//           <ProductTabs 
//             product={currentProduct}
//             reviewsList={reviewsList}
//             onAddReview={handleAddReview}
//           />
//         </div>

//         <RelatedProducts 
//           currentProductId={currentProduct.id} 
//           currentCategory={currentProduct.category} 
//         />

//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shopCategories } from "../data/categories";
import axios from "axios";

import ProductImageGallery from "./ProductPage/ProductImageGallery";
import ProductInfo from "./ProductPage/ProductInfo";
import DeliveryChecker from "./ProductPage/DeliveryChecker";
import ActionButtons from "./ProductPage/ActionButtons";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./ProductPage/RelatedProducts";
import useCartStore from "../store/useCartStore";

const ProductDetails = () => {
  const { id } = useParams();
  
  // Find current product based on URL id
  const currentProduct = shopCategories.find((item) => item.id.toString() === id) || shopCategories[0];

  const [selectedVariant, setSelectedVariant] = useState(
    currentProduct.variants ? currentProduct.variants[0] : null
  );
  const [selectedImage, setSelectedImage] = useState(currentProduct.image);
  const [quantity, setQuantity] = useState(1);

  // Cart Store se addToCart function le lo
  const { addToCart } = useCartStore();

  // Reset variant and image when product ID changes (when clicking related products)
  useEffect(() => {
    setSelectedVariant(currentProduct.variants ? currentProduct.variants[0] : null);
    setSelectedImage(currentProduct.image);
    setQuantity(1);
  }, [currentProduct]);

  const [reviewsList, setReviewsList] = useState([
    { id: 1, name: "Aarav Sharma", rating: 5, date: "12 May, 2026", comment: "Pure and authentic products. Very satisfied!" },
    { id: 2, name: "Priya Verma", rating: 4, date: "02 June, 2026", comment: "Packaging was great and delivery was fast." }
  ]);

  const currentPrice = selectedVariant ? selectedVariant.price : currentProduct.price;
  const currentOldPrice = selectedVariant ? selectedVariant.oldPrice : currentProduct.oldPrice;
  const currentSku = selectedVariant ? selectedVariant.sku : currentProduct.sku;

  const discountPercent = currentOldPrice 
    ? Math.round(((currentOldPrice - currentPrice) / currentOldPrice) * 100) 
    : null;

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user.id || user._id || localStorage.getItem('cartUserId');
    const token = localStorage.getItem('token');

    if (!token) {
      alert("Please login to add items to cart.");
      return;
    }

    const productId = currentProduct._id || currentProduct.id;

    try {
      const result = await addToCart(userId, productId, quantity);
      
      if (result?.success) {
        alert(`Successfully added ${quantity} item(s) to your Cart!`);
      } else {
        alert(result?.error || "Could not add to cart. Please try again.");
      }
    } catch (error) {
      console.error("Cart add error:", error);
      alert("Please login again to add items to cart.");
    }
  };

  // Backend API integrated Review Submission
  const handleAddReview = async (newRev) => {
    try {
      const token = localStorage.getItem('token') || JSON.parse(localStorage.getItem('user') || '{}').token;

      if (!token) {
        alert("Please login to submit a review.");
        return;
      }

      const reviewPayload = {
        targetId: currentProduct._id || currentProduct.id,
        targetModel: "Product",
        rating: Number(newRev.rating),
        comment: newRev.comment
      };

      const response = await axios.post('https://astologyshop-e.onrender.com/api/reviews/add', reviewPayload, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      if (response.data.success) {
        const reviewObj = {
          id: response.data.review?._id || reviewsList.length + 1,
          name: "You",
          rating: Number(newRev.rating),
          date: "Just now",
          comment: newRev.comment
        };
        setReviewsList([reviewObj, ...reviewsList]);
        alert("Thank you! Your review has been added successfully 🎉");
      }
    } catch (error) {
      console.error("Review submission error:", error);
      alert(error.response?.data?.message || "Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1300px] mx-auto bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
        
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10">
          <ProductImageGallery 
            product={currentProduct} 
            selectedImage={selectedImage} 
            setSelectedImage={setSelectedImage} 
          />

          <div className="flex flex-col justify-between">
            <div>
              <ProductInfo 
                product={currentProduct}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
                currentPrice={currentPrice}
                currentOldPrice={currentOldPrice}
                currentSku={currentSku}
                discountPercent={discountPercent}
                reviewsCount={reviewsList.length}
              />
              <DeliveryChecker />
            </div>

            <ActionButtons 
              quantity={quantity}
              setQuantity={setQuantity}
              onAddToCart={handleAddToCart}
              onBuyNow={() => {
                handleAddToCart();
                alert("Redirecting to Secure Checkout...");
              }}
            />
          </div>
        </div>

        {/* Bottom Detailed Sections */}
        <div className="border-t border-stone-200 p-6 sm:p-10 bg-[#fdfaf5]">
          <ProductTabs 
            product={currentProduct}
            reviewsList={reviewsList}
            onAddReview={handleAddReview}
          />
        </div>

        <RelatedProducts 
          currentProductId={currentProduct.id} 
          currentCategory={currentProduct.category} 
        />

      </div>
    </div>
  );
};

export default ProductDetails;