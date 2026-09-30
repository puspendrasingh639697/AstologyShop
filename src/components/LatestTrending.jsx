import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useProductStore from "../store/useProductStore";

const ProductCard = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);

  // Build images array dynamically (product.images if exists, else [product.image])
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Calculate discount % dynamically
  const calculateDiscount = () => {
    const price = Number(product.price) || 0;
    const mrp = Number(product.mrp) || 0;

    if (mrp > price && mrp > 0) {
      return Math.round(((mrp - price) / mrp) * 100);
    }
    return product.discountPercent || 0;
  };

  const discountPercent = calculateDiscount();

  return (
    <div className="group/card">
      {/* IMAGE CARD */}
      <div className="relative group overflow-hidden rounded-lg bg-white">

        {/* Discount Badge (only if discount exists) */}
        {discountPercent > 0 && (
          <div className="absolute top-0 left-0 z-20 bg-[#d9534f] text-white px-2.5 sm:px-3 md:px-4 py-1 text-[11px] sm:text-[13px] md:text-[15px] font-semibold rounded-br-lg">
            🏷 {discountPercent}% Off
          </div>
        )}

        {/* Left Arrow (only if multiple images) */}
        {images.length > 1 && (
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="
              absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20
              w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
              rounded-full bg-white/95 shadow-md
              flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              text-xs sm:text-sm
            "
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Right Arrow (only if multiple images) */}
        {images.length > 1 && (
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="
              absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20
              w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
              rounded-full bg-white/95 shadow-md
              flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              text-xs sm:text-sm
            "
          >
            <FaChevronRight />
          </button>
        )}

        {/* Product Image */}
        <img
          src={images[imageIndex]}
          alt={product.name || product.title}
          className="
            w-full aspect-square object-cover rounded-lg
            transition-all duration-500 group-hover:scale-[1.02]
          "
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
          }}
        />
      </div>

      {/* Product Title */}
      <h3 className="mt-2 sm:mt-3 text-[14px] sm:text-[15px] md:text-[17px] font-semibold text-[#16233d] line-clamp-2 leading-snug">
        {product.name || product.title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-1 text-[#d9534f] text-[12px] sm:text-[13px] md:text-sm">
        ★★★★★
        <span className="text-gray-600 ml-1">
          ({product.ratingCount || product.reviewsCount || 1})
        </span>
      </div>
    </div>
  );
};

const LatestTrending = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Sirf top 8 trending products (backend me "isTrending" flag ho to use karo)
  const trending = products?.filter((p) => p.isTrending).slice(0, 8) || [];

  // Agar flag nahi hai to pehle 8 products le lo
  const displayProducts =
    trending.length > 0 ? trending : products?.slice(0, 8) || [];

  return (
    <section className="bg-white pt-2 pb-10 sm:pb-12 md:pb-14">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ====== HEADING ====== */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#4a2e18] leading-tight tracking-wide">
            Latest & Trending
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
          </div>
        </div>

        {/* ====== LOADING ====== */}
        {loading && (
          <div className="flex justify-center items-center py-12 sm:py-16">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-[#8c0a15] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* ====== ERROR ====== */}
        {error && (
          <div className="text-center py-12 text-red-600 font-medium text-sm sm:text-base">
            Error: {error}
          </div>
        )}

        {/* ====== NO PRODUCTS ====== */}
        {!loading && !error && displayProducts.length === 0 && (
          <div className="text-center py-12 sm:py-16 text-black text-sm sm:text-base">
            No products available
          </div>
        )}

        {/* ====== PRODUCTS GRID ====== */}
        {!loading && !error && displayProducts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {displayProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestTrending;