
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

// ✅ Background Banner Image Import
import detailsBanner from "../assets/detailsbaner1.png";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();
  const { products, fetchProducts } = useProductStore();

  // ✅ Product fetch
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const isObjectId = /^[0-9a-fA-F]{24}$/.test(id);

        try {
          let response;
          if (isObjectId) {
            response = await axios.get(`${API_BASE_URL}/products/${id}`);
          } else {
            response = await axios.get(`${API_BASE_URL}/products/slug/${id}`);
          }

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

        if (products.length === 0) {
          await fetchProducts();
        }

        const storeProducts = useProductStore.getState().products;
        const storeProduct = storeProducts.find(
          (p) => p._id === id || p.slug === id
        );

        if (storeProduct) {
          setCurrentProduct(storeProduct);
          setLoading(false);
          return;
        }

        const localProduct = shopCategories.find(
          (item) => item.id?.toString() === id || item.slug === id
        );

        if (localProduct) {
          setCurrentProduct(localProduct);
          setLoading(false);
          return;
        }

        setError("Product not found");
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id, products, fetchProducts]);

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
  const currentOldPrice =
    selectedVariant?.oldPrice ||
    currentProduct.mrp ||
    currentProduct.oldPrice ||
    null;
  const currentSku =
    selectedVariant?.sku ||
    currentProduct.sku ||
    currentProduct._id?.slice(-8) ||
    "";

  const discountPercent =
    currentProduct.discountPercent ||
    (currentOldPrice && currentOldPrice > currentPrice
      ? Math.round(((currentOldPrice - currentPrice) / currentOldPrice) * 100)
      : null);

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
      mrp: currentProduct.mrp || currentOldPrice || 0,
      discountPercent: discountPercent || 0,
      image: currentProduct.image || currentProduct.images?.[0] || "",
      sku: currentSku || "",
    };

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
      alert("Please login again to add items to cart.");
      return { success: false };
    }
  };

  const handleBuyNow = async () => {
    const result = await handleAddToCart();
    if (result.success) {
      navigate("/checkout");
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
      alert(
        error.response?.data?.message ||
          "Failed to submit review. Please try again."
      );
    }
  };

  return (
    <div className="w-full bg-[#F5EBDD] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* ==================== PRODUCT SECTION (With Banner BG) ==================== */}
        <div
          className="relative   p-4 sm:p-6  overflow-hidden"
          style={{ backgroundImage: `url(${detailsBanner})` }}
        >
          

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* LEFT: Image Gallery */}
            <div className="lg:sticky lg:top-6 h-fit">
              <ProductImageGallery
                product={currentProduct}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            </div>

            {/* RIGHT: Info + Delivery + Coupon + Buttons */}
            <div className="flex flex-col gap-4">
              {/* Product Info */}
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

              {/* Delivery + Coupon */}
              <DeliveryChecker />

              {/* Quantity + Buttons */}
              <ActionButtons
                quantity={quantity}
                setQuantity={setQuantity}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            </div>
          </div>
        </div>

        {/* ==================== TABS SECTION (White BG) ==================== */}
        <div className="mt-2  bg-[#F5EBDD]  rounded-lg p-4 sm:p-6">
          <ProductTabs
            product={currentProduct}
            reviewsList={reviewsList}
            onAddReview={handleAddReview}
          />
        </div>

        {/* ==================== RELATED PRODUCTS (White BG) ==================== */}
        <div className="mt-6">
          <RelatedProducts
            currentProductId={currentProduct._id || currentProduct.id}
            currentCategory={
              currentProduct.category?.name || currentProduct.category
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;