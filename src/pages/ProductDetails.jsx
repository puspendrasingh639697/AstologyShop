

// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import API_BASE_URL from "../config/api"; // ✅ Central URL
// // import { shopCategories } from "../data/categories";

// // import ProductImageGallery from "./ProductPage/ProductImageGallery";
// // import ProductInfo from "./ProductPage/ProductInfo";
// // import DeliveryChecker from "./ProductPage/DeliveryChecker";
// // import ActionButtons from "./ProductPage/ActionButtons";
// // import ProductTabs from "./ProductTabs";
// // import RelatedProducts from "./ProductPage/RelatedProducts";
// // import useCartStore from "../store/useCartStore";

// // const ProductDetails = () => {
// //   const { id } = useParams();

// //   // ✅ Product state (API se aayega)
// //   const [currentProduct, setCurrentProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const [selectedVariant, setSelectedVariant] = useState(null);
// //   const [selectedImage, setSelectedImage] = useState("");
// //   const [quantity, setQuantity] = useState(1);

// //   const { addToCart } = useCartStore();

// //   // ✅ API se product fetch karo
// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);

// //         const response = await axios.get(`${API_BASE_URL}/products/${id}`);
// //         console.log("Product API Response:", response.data);

// //         const product =
// //           response.data.product ||
// //           response.data.data ||
// //           response.data;

// //         setCurrentProduct(product);
// //       } catch (err) {
// //         console.error("Error fetching product:", err);

// //         // ✅ Fallback: Local data se try karo (agar API fail ho)
// //         const localProduct =
// //           shopCategories.find((item) => item.id?.toString() === id) ||
// //           shopCategories[0];

// //         if (localProduct) {
// //           console.warn("Using local fallback product data");
// //           setCurrentProduct(localProduct);
// //         } else {
// //           setError("Product not found");
// //         }
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (id) fetchProduct();
// //   }, [id]);

// //   // ✅ Jab product load ho jaaye, tab variant aur image set karo
// //   useEffect(() => {
// //     if (currentProduct) {
// //       setSelectedVariant(
// //         currentProduct.variants ? currentProduct.variants[0] : null
// //       );
// //       setSelectedImage(
// //         currentProduct.image ||
// //           currentProduct.images?.[0] ||
// //           ""
// //       );
// //       setQuantity(1);
// //     }
// //   }, [currentProduct]);

// //   const [reviewsList, setReviewsList] = useState([
// //     {
// //       id: 1,
// //       name: "Aarav Sharma",
// //       rating: 5,
// //       date: "12 May, 2026",
// //       comment: "Pure and authentic products. Very satisfied!",
// //     },
// //     {
// //       id: 2,
// //       name: "Priya Verma",
// //       rating: 4,
// //       date: "02 June, 2026",
// //       comment: "Packaging was great and delivery was fast.",
// //     },
// //   ]);

// //   // ✅ Loading / Error handling
// //   if (loading)
// //     return (
// //       <div className="text-center py-20 text-xl text-[#4a2e18]">
// //         Loading product...
// //       </div>
// //     );

// //   if (error || !currentProduct)
// //     return (
// //       <div className="text-center py-20 text-red-600 text-xl">
// //         {error || "Product not found"}
// //       </div>
// //     );

// //   const currentPrice = selectedVariant
// //     ? selectedVariant.price
// //     : currentProduct.price;
// //   const currentOldPrice = selectedVariant
// //     ? selectedVariant.oldPrice
// //     : currentProduct.oldPrice;
// //   const currentSku = selectedVariant
// //     ? selectedVariant.sku
// //     : currentProduct.sku;

// //   const discountPercent = currentOldPrice
// //     ? Math.round(
// //         ((currentOldPrice - currentPrice) / currentOldPrice) * 100
// //       )
// //     : null;

// //   const handleAddToCart = async () => {
// //     const user = JSON.parse(localStorage.getItem("user") || "{}");
// //     const userId =
// //       user.id || user._id || localStorage.getItem("cartUserId");
// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       alert("Please login to add items to cart.");
// //       return;
// //     }

// //     const productId = currentProduct._id || currentProduct.id;

// //     try {
// //       const result = await addToCart(userId, productId, quantity);

// //       if (result?.success) {
// //         alert(`Successfully added ${quantity} item(s) to your Cart!`);
// //       } else {
// //         alert(
// //           result?.error || "Could not add to cart. Please try again."
// //         );
// //       }
// //     } catch (error) {
// //       console.error("Cart add error:", error);
// //       alert("Please login again to add items to cart.");
// //     }
// //   };

// //   // ✅ Review submission — ab API_BASE_URL use karega
// //   const handleAddReview = async (newRev) => {
// //     try {
// //       const token =
// //         localStorage.getItem("token") ||
// //         JSON.parse(localStorage.getItem("user") || "{}").token;

// //       if (!token) {
// //         alert("Please login to submit a review.");
// //         return;
// //       }

// //       const reviewPayload = {
// //         targetId: currentProduct._id || currentProduct.id,
// //         targetModel: "Product",
// //         rating: Number(newRev.rating),
// //         comment: newRev.comment,
// //       };

// //       const response = await axios.post(
// //         `${API_BASE_URL}/reviews/add`, // ✅ Central URL
// //         reviewPayload,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "application/json",
// //           },
// //           withCredentials: true,
// //         }
// //       );

// //       if (response.data.success) {
// //         const reviewObj = {
// //           id: response.data.review?._id || reviewsList.length + 1,
// //           name: "You",
// //           rating: Number(newRev.rating),
// //           date: "Just now",
// //           comment: newRev.comment,
// //         };
// //         setReviewsList([reviewObj, ...reviewsList]);
// //         alert("Thank you! Your review has been added successfully 🎉");
// //       }
// //     } catch (error) {
// //       console.error("Review submission error:", error);
// //       alert(
// //         error.response?.data?.message ||
// //           "Failed to submit review. Please try again."
// //       );
// //     }
// //   };

// //   return (
// //     <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
// //       <div className="max-w-[1300px] mx-auto bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
// //         {/* Top Split Section */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10">
// //           <ProductImageGallery
// //             product={currentProduct}
// //             selectedImage={selectedImage}
// //             setSelectedImage={setSelectedImage}
// //           />

// //           <div className="flex flex-col justify-between">
// //             <div>
// //               <ProductInfo
// //                 product={currentProduct}
// //                 selectedVariant={selectedVariant}
// //                 setSelectedVariant={setSelectedVariant}
// //                 currentPrice={currentPrice}
// //                 currentOldPrice={currentOldPrice}
// //                 currentSku={currentSku}
// //                 discountPercent={discountPercent}
// //                 reviewsCount={reviewsList.length}
// //               />
// //               <DeliveryChecker />
// //             </div>

// //             <ActionButtons
// //               quantity={quantity}
// //               setQuantity={setQuantity}
// //               onAddToCart={handleAddToCart}
// //               onBuyNow={() => {
// //                 handleAddToCart();
// //                 alert("Redirecting to Secure Checkout...");
// //               }}
// //             />
// //           </div>
// //         </div>

// //         {/* Bottom Detailed Sections */}
// //         <div className="border-t border-stone-200 p-6 sm:p-10 bg-[#fdfaf5]">
// //           <ProductTabs
// //             product={currentProduct}
// //             reviewsList={reviewsList}
// //             onAddReview={handleAddReview}
// //           />
// //         </div>

// //         <RelatedProducts
// //           currentProductId={currentProduct._id || currentProduct.id}
// //           currentCategory={
// //             currentProduct.category?.name || currentProduct.category
// //           }
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import API_BASE_URL from "../config/api";
// import { shopCategories } from "../data/categories";
// import useProductStore from "../store/useProductStore"; // ✅ Store se product dhoondhne ke liye

// import ProductImageGallery from "./ProductPage/ProductImageGallery";
// import ProductInfo from "./ProductPage/ProductInfo";
// import DeliveryChecker from "./ProductPage/DeliveryChecker";
// import ActionButtons from "./ProductPage/ActionButtons";
// import ProductTabs from "./ProductTabs";
// import RelatedProducts from "./ProductPage/RelatedProducts";
// import useCartStore from "../store/useCartStore";

// const ProductDetails = () => {
//   const { id } = useParams();

//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const { addToCart } = useCartStore();
//   const { products, fetchProducts } = useProductStore();

//   // ✅ Product fetch logic — 3 tarike se try karega
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // ✅ Try 1: API se direct product fetch
//         try {
//           const response = await axios.get(`${API_BASE_URL}/products/${id}`);
//           console.log("✅ Product API Response:", response.data);

//           const product =
//             response.data.product ||
//             response.data.data ||
//             response.data;

//           if (product && product._id) {
//             setCurrentProduct(product);
//             setLoading(false);
//             return;
//           }
//         } catch (apiErr) {
//           console.warn("⚠️ Product API failed, trying store...");
//         }

//         // ✅ Try 2: useProductStore se product dhoondho
//         if (products.length === 0) {
//           await fetchProducts();
//         }

//         const storeProducts = useProductStore.getState().products;
//         const storeProduct = storeProducts.find((p) => p._id === id);

//         if (storeProduct) {
//           console.log("✅ Found product in store:", storeProduct.name);
//           setCurrentProduct(storeProduct);
//           setLoading(false);
//           return;
//         }

//         // ✅ Try 3: Local data se fallback
//         const localProduct = shopCategories.find(
//           (item) => item.id?.toString() === id
//         );

//         if (localProduct) {
//           console.warn("⚠️ Using local fallback product data");
//           setCurrentProduct(localProduct);
//           setLoading(false);
//           return;
//         }

//         // ❌ Kuch nahi mila
//         setError("Product not found");
//       } catch (err) {
//         console.error("❌ Error fetching product:", err);
//         setError("Failed to load product. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchProduct();
//   }, [id, products, fetchProducts]);

//   // ✅ Product load hone par variant aur image set karo
//   useEffect(() => {
//     if (currentProduct) {
//       setSelectedVariant(
//         currentProduct.variants ? currentProduct.variants[0] : null
//       );
//       setSelectedImage(
//         currentProduct.image || currentProduct.images?.[0] || ""
//       );
//       setQuantity(1);
//     }
//   }, [currentProduct]);

//   const [reviewsList, setReviewsList] = useState([
//     {
//       id: 1,
//       name: "Aarav Sharma",
//       rating: 5,
//       date: "12 May, 2026",
//       comment: "Pure and authentic products. Very satisfied!",
//     },
//     {
//       id: 2,
//       name: "Priya Verma",
//       rating: 4,
//       date: "02 June, 2026",
//       comment: "Packaging was great and delivery was fast.",
//     },
//   ]);

//   if (loading)
//     return (
//       <div className="text-center py-20 text-xl text-[#4a2e18]">
//         Loading product...
//       </div>
//     );

//   if (error || !currentProduct)
//     return (
//       <div className="text-center py-20 text-red-800 text-xl">
//         {error || "Product not found"}
//       </div>
//     );

//   const currentPrice = selectedVariant
//     ? selectedVariant.price
//     : currentProduct.price;
//   const currentOldPrice = selectedVariant
//     ? selectedVariant.oldPrice
//     : currentProduct.oldPrice;
//   const currentSku = selectedVariant
//     ? selectedVariant.sku
//     : currentProduct.sku;

//   const discountPercent = currentOldPrice
//     ? Math.round(
//         ((currentOldPrice - currentPrice) / currentOldPrice) * 100
//       )
//     : null;

// const handleAddToCart = async () => {
//   const user = JSON.parse(localStorage.getItem("user") || "{}");
//   const userId = user.id || user._id || localStorage.getItem("cartUserId");
//   const token = localStorage.getItem("token");

//   if (!token) {
//     alert("Please login to add items to cart.");
//     return { success: false };
//   }

//   const productId = currentProduct._id || currentProduct.id;

//   try {
//     const result = await addToCart(productId, quantity);  // ✅ sahi call

//     if (result?.success) {
//       alert(`Successfully added ${quantity} item(s) to your Cart!`);
//       return { success: true };
//     } else {
//       alert(result?.error || "Could not add to cart. Please try again.");
//       return { success: false };
//     }
//   } catch (error) {
//     console.error("Cart add error:", error);
//     alert("Please login again to add items to cart.");
//     return { success: false };
//   }
// };

//   const handleAddReview = async (newRev) => {
//     try {
//       const token =
//         localStorage.getItem("token") ||
//         JSON.parse(localStorage.getItem("user") || "{}").token;

//       if (!token) {
//         alert("Please login to submit a review.");
//         return;
//       }

//       const reviewPayload = {
//         targetId: currentProduct._id || currentProduct.id,
//         targetModel: "Product",
//         rating: Number(newRev.rating),
//         comment: newRev.comment,
//       };

//       const response = await axios.post(
//         `${API_BASE_URL}/reviews/add`,
//         reviewPayload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         const reviewObj = {
//           id: response.data.review?._id || reviewsList.length + 1,
//           name: "You",
//           rating: Number(newRev.rating),
//           date: "Just now",
//           comment: newRev.comment,
//         };
//         setReviewsList([reviewObj, ...reviewsList]);
//         alert("Thank you! Your review has been added successfully 🎉");
//       }
//     } catch (error) {
//       console.error("Review submission error:", error);
//       alert(
//         error.response?.data?.message ||
//           "Failed to submit review. Please try again."
//       );
//     }
//   };

//   return (
//     <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
//       <div className="max-w-[1300px] mx-auto bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
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

//           <ActionButtons
//   quantity={quantity}
//   setQuantity={setQuantity}
//   onAddToCart={handleAddToCart}
//   onBuyNow={async () => {
//     const result = await handleAddToCart();
//     if (result.success) {
//       navigate("/checkout");   // ✅ checkout page par le jao
//     }
//   }}
// />
//           </div>
//         </div>

//         <div className="border-t border-stone-200 p-6 sm:p-10 bg-[#fdfaf5]">
//           <ProductTabs
//             product={currentProduct}
//             reviewsList={reviewsList}
//             onAddReview={handleAddReview}
//           />
//         </div>

//         <RelatedProducts
//           currentProductId={currentProduct._id || currentProduct.id}
//           currentCategory={
//             currentProduct.category?.name || currentProduct.category
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";  // ✅ useNavigate add
import axios from "axios";
import API_BASE_URL from "../config/api";
import { shopCategories } from "../data/categories";
import useProductStore from "../store/useProductStore";

import ProductImageGallery from "./ProductPage/ProductImageGallery";
import ProductInfo from "./ProductPage/ProductInfo";
import DeliveryChecker from "./ProductPage/DeliveryChecker";
import ActionButtons from "./ProductPage/ActionButtons";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./ProductPage/RelatedProducts";
import useCartStore from "../store/useCartStore";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // ✅ navigate define kiya

  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();
  const { products, fetchProducts } = useProductStore();

  // ✅ Product fetch — API → Store → Local
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try 1: API
        try {
          const response = await axios.get(`${API_BASE_URL}/products/${id}`);
          console.log("✅ Product API Response:", response.data);

          const product =
            response.data.product ||
            response.data.data ||
            response.data;

          if (product && product._id) {
            setCurrentProduct(product);
            setLoading(false);
            return;
          }
        } catch (apiErr) {
          console.warn("⚠️ Product API failed, trying store...");
        }

        // Try 2: Store
        if (products.length === 0) {
          await fetchProducts();
        }

        const storeProducts = useProductStore.getState().products;
        const storeProduct = storeProducts.find((p) => p._id === id);

        if (storeProduct) {
          console.log("✅ Found product in store:", storeProduct.name);
          setCurrentProduct(storeProduct);
          setLoading(false);
          return;
        }

        // Try 3: Local fallback
        const localProduct = shopCategories.find(
          (item) => item.id?.toString() === id
        );

        if (localProduct) {
          console.warn("⚠️ Using local fallback product data");
          setCurrentProduct(localProduct);
          setLoading(false);
          return;
        }

        setError("Product not found");
      } catch (err) {
        console.error("❌ Error fetching product:", err);
        setError("Failed to load product. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id, products, fetchProducts]);

  // ✅ Product load hone par variant/image set karo
  useEffect(() => {
    if (currentProduct) {
      setSelectedVariant(
        currentProduct.variants ? currentProduct.variants[0] : null
      );
      setSelectedImage(
        currentProduct.image || currentProduct.images?.[0] || ""
      );
      setQuantity(1);
    }
  }, [currentProduct]);

  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      rating: 5,
      date: "12 May, 2026",
      comment: "Pure and authentic products. Very satisfied!",
    },
    {
      id: 2,
      name: "Priya Verma",
      rating: 4,
      date: "02 June, 2026",
      comment: "Packaging was great and delivery was fast.",
    },
  ]);

  if (loading)
    return (
      <div className="text-center py-20 text-xl text-[#4a2e18]">
        Loading product...
      </div>
    );

  if (error || !currentProduct)
    return (
      <div className="text-center py-20 text-red-800 text-xl">
        {error || "Product not found"}
      </div>
    );

  const currentPrice = selectedVariant?.price || currentProduct.price || 0;
  const currentOldPrice = selectedVariant?.oldPrice || currentProduct.oldPrice || null;
  const currentSku = selectedVariant?.sku || currentProduct.sku || currentProduct._id?.slice(-8) || "";

  const discountPercent = currentOldPrice
    ? Math.round(((currentOldPrice - currentPrice) / currentOldPrice) * 100)
    : null;

  const handleAddToCart = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to add items to cart.");
    navigate("/login");
    return { success: false };
  }

  const productForCart = {
  _id: currentProduct._id || currentProduct.id,
  name: currentProduct.name || currentProduct.title || "Product",
  price: currentPrice,
  oldPrice: currentOldPrice,
  image: currentProduct.image || currentProduct.images?.[0] || "",  // ✅ yeh
  sku: currentSku || "",
};

  console.log("🛒 Sending to cart:", productForCart);

  try {
    const result = await addToCart(productForCart, quantity);

    if (result?.success) {
      alert(`Successfully added ${quantity} item(s) to your Cart!`);
      return { success: true };
    } else {
      alert(result?.error || "Could not add to cart.");
      return { success: false };
    }
  } catch (error) {
    console.error("Cart add error:", error);
    alert("Please login again to add items to cart.");
    return { success: false };
  }
};

  const handleAddReview = async (newRev) => {
    try {
      const token =
        localStorage.getItem("token") ||
        JSON.parse(localStorage.getItem("user") || "{}").token;

      if (!token) {
        alert("Please login to submit a review.");
        return;
      }

      const reviewPayload = {
        targetId: currentProduct._id || currentProduct.id,
        targetModel: "Product",
        rating: Number(newRev.rating),
        comment: newRev.comment,
      };

      const response = await axios.post(
        `${API_BASE_URL}/reviews/add`,
        reviewPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        const reviewObj = {
          id: response.data.review?._id || reviewsList.length + 1,
          name: "You",
          rating: Number(newRev.rating),
          date: "Just now",
          comment: newRev.comment,
        };
        setReviewsList([reviewObj, ...reviewsList]);
        alert("Thank you! Your review has been added successfully 🎉");
      }
    } catch (error) {
      console.error("Review submission error:", error);
      alert(
        error.response?.data?.message ||
          "Failed to submit review. Please try again."
      );
    }
  };

  return (
    <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1300px] mx-auto bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
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

            {/* ✅ Buy Now ab checkout par le jayega */}
            <ActionButtons
              quantity={quantity}
              setQuantity={setQuantity}
              onAddToCart={handleAddToCart}
              onBuyNow={async () => {
                const result = await handleAddToCart();
                if (result.success) {
                  navigate("/checkout");
                }
              }}
            />
          </div>
        </div>

        <div className="border-t border-stone-200 p-6 sm:p-10 bg-[#fdfaf5]">
          <ProductTabs
            product={currentProduct}
            reviewsList={reviewsList}
            onAddReview={handleAddReview}
          />
        </div>

        <RelatedProducts
          currentProductId={currentProduct._id || currentProduct.id}
          currentCategory={
            currentProduct.category?.name || currentProduct.category
          }
        />
      </div>
    </div>
  );
};

export default ProductDetails;