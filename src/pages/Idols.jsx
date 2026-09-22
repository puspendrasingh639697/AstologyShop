import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiHeart, BiShoppingBag, BiFilter, BiCheckCircle } from "react-icons/bi";
import useProductStore from "../store/useProductStore";
import useWishlistStore from "../store/useWishlistStore";
import useCartStore from "../store/useCartStore";

// Top Banner (static)
import topBanner from "../assets/idolsbenner.webp";

const Idols = () => {
  const navigate = useNavigate();

  const { products, loading, fetchProducts } = useProductStore();
  const { isInWishlist, addToWishlist, removeFromWishlist, fetchWishlist } = useWishlistStore();
  const { addToCart, setUserId } = useCartStore();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  useEffect(() => {
    fetchProducts();
    fetchWishlist();

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const actualUserId =
      user.id || user._id || localStorage.getItem("cartUserId");
    if (actualUserId) setUserId(actualUserId);
  }, [fetchProducts, fetchWishlist, setUserId]);

  const showToastMessage = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // ✅ Sirf "Idols" category ke products
  const idolsProducts = products.filter((p) => {
    const catName = (p.category?.name || "").toLowerCase();
    return catName.includes("idol");
  });

  // ✅ Deity-wise category filter (product name se)
  const getDeityFromName = (name) => {
    const n = (name || "").toLowerCase();
    if (n.includes("ganesh")) return "Ganesha";
    if (n.includes("laxmi") || n.includes("lakshmi")) return "Laxmi";
    if (n.includes("krishna")) return "Krishna";
    if (n.includes("hanuman")) return "Hanuman";
    if (n.includes("shiv") || n.includes("shivling")) return "Shiva";
    if (n.includes("durga") || n.includes("saraswati")) return "Devi";
    return "Other";
  };

  // ✅ Categories dynamically banao
  const categories = [
    "All",
    ...new Set(idolsProducts.map((p) => getDeityFromName(p.name))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? idolsProducts
      : idolsProducts.filter(
          (p) => getDeityFromName(p.name) === selectedCategory
        );

  // ✅ Wishlist toggle
  const handleWishlistToggle = async (productId) => {
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
      showToastMessage("Removed from wishlist", "success");
    } else {
      await addToWishlist(productId);
      showToastMessage("Added to wishlist ❤️", "success");
    }
  };

  // ✅ Add to cart
  const handleAddToCart = async (e, product) => {
    e.stopPropagation();

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const actualUserId =
      user.id || user._id || localStorage.getItem("cartUserId");

    if (!token || !actualUserId) {
      showToastMessage("Please login to add items to cart", "error");
      setTimeout(() => navigate("/login"), 2000);
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
      showToastMessage("Item added to cart! 🛒", "success");
    } else {
      showToastMessage(result.error || "Failed to add to cart", "error");
    }
  };

  if (loading)
    return <div className="text-center py-20 text-[#4a2e18]">Loading products...</div>;

  return (
    <div className="w-full bg-[#fff3df] min-h-screen font-sans pb-16">

      {/* Top Banner */}
      <div className="w-full bg-[#fff3df] shadow-md relative pt-2 pb-2">
        <div className="max-w-8xl mx-auto px-4">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black">
            <img
              src={topBanner}
              alt="Divine Idols Banner"
              className="w-full h-auto max-h-[380px] md:max-h-[450px] object-cover mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-[#8c0a15] text-white py-3 px-4 shadow-inner mt-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs md:text-sm font-medium">
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> Premium Quality Brass
          </div>
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> Handcrafted by Expert Artisans
          </div>
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> Energized for Puja
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">

        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-gray-300 pb-4">
          <div className="flex items-center gap-2 text-[#8c0a15] font-bold text-lg">
            <BiFilter className="text-2xl" /> Filter by Deity:
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#8c0a15] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-amber-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Toast */}
        {showToast && (
          <div
            className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white ${
              toastType === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {toastMessage}
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 font-serif">
              No idols found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = isInWishlist(product._id);
              return (
                <div
                  key={product._id}
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-200/60 hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />

                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-[#8c0a15] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                        {product.tag}
                      </span>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWishlistToggle(product._id);
                      }}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform"
                    >
                      <BiHeart
                        className={
                          isWishlisted
                            ? "text-red-600 fill-red-600"
                            : "text-gray-500"
                        }
                      />
                    </button>
                  </div>

                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                      {product.rating && (
                        <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
                          <span>⭐ {product.rating}</span>
                          {product.reviews && (
                            <span className="text-gray-400 font-normal">
                              ({product.reviews})
                            </span>
                          )}
                        </div>
                      )}

                      <h3 className="font-serif font-bold text-gray-800 text-sm line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-base font-bold text-[#8c0a15]">
                          ₹{product.price?.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="w-full bg-[#8c0a15] hover:bg-[#6b080f] text-white py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow transition-colors"
                      >
                        <BiShoppingBag className="text-base" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Idols;