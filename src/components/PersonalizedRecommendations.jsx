import React from "react";
import { BiHeart, BiCart, BiShow } from "react-icons/bi"; // Added icons for pro UI

const recommendedProducts = [
  {
    id: 1,
    title: "Personalized Crystal Energized Bracelet",
    price: "Rs. 1,650.00",
    originalPrice: "Rs. 2,400.00",
    rating: 5.0,
    reviews: 14,
    badge: "FOR YOU",
    image: "/src/assets/image2.jpg"
  },
  {
    id: 2,
    title: "Birthstone Silver Ring for Planetary Peace",
    price: "Rs. 2,899.00",
    originalPrice: "Rs. 3,999.00",
    rating: 4.9,
    reviews: 28,
    badge: "RECOMMENDED",
    image: "/src/assets/image3.jpg"
  },
  {
    id: 3,
    title: "Customized Name Energized Rudraksha Mala",
    price: "Rs. 1,450.00",
    originalPrice: "Rs. 2,100.00",
    rating: 5.0,
    reviews: 36,
    badge: "BEST MATCH",
    image: "/src/assets/Rudraksha.webp"
  },
  
];

const PersonalizedRecommendations = () => {
  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    console.log(`Added personalized item to cart: ${item.title}`);
  };

  const handleCardClick = (item) => {
    console.log(`Viewing item: ${item.title}`);
  };

  const handleWishlistClick = (item, e) => {
    e.stopPropagation();
    console.log(`Added to wishlist: ${item.title}`);
  };

  const handleQuickView = (item, e) => {
    e.stopPropagation();
    console.log(`Quick view: ${item.title}`);
  };

  return (
    <section className="bg-[#fff3df] py-16 px-4 overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8b3a2b] font-bold">
            Tailored For Your Spiritual Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#4a2e18] tracking-wide mt-2 font-semibold">
            Personalized <span className="italic font-normal">Recommendations</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#8b3a2b] mx-auto mt-4 rounded-full"></div>
        </div>

        

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {recommendedProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => handleCardClick(product)}
              className="bg-[#fff3df] rounded-md shadow-sm border border-[#e6d0b3] flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#8b3a2b]/40"
            >
              {/* Image & Badge Container */}
              <div className="relative w-full h-[280px] bg-[#fdf2f0] overflow-hidden flex items-center justify-center p-4 border-b border-[#f0e4d7]">
                
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 z-20 bg-[#8b3a2b] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {product.badge}
                  </span>
                )}

                {/* Wishlist Icon (Visual Only) */}
                <button 
                  onClick={(e) => handleWishlistClick(product, e)}
                  className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-gray-500 hover:text-red-500 hover:bg-white transition-all duration-200 active:scale-90"
                >
                  <BiHeart className="text-lg" />
                </button>

                {/* Image */}
                <img 
                  src={product.image} 
                  alt={product.title} 
                  loading="lazy"
                  className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Quick View Overlay (Pro Feature) */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={(e) => handleQuickView(product, e)}
                    className="bg-red-500 text-[#4a2e18] px-4 py-2 rounded-md text-xs font-semibold shadow-lg flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#8b3a2b] hover:text-white"
                  >
                    <BiShow className="text-base" /> Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col items-center text-center flex-grow">
                <span className="text-[10px] uppercase tracking-[0.15em] text-black font-bold mb-1.5">
                  Puja Hindu
                </span>
                <h3 className="text-xs sm:text-sm font-serif text-[#3d2314] font-medium leading-snug line-clamp-2 mb-3 group-hover:text-[#8b3a2b] transition-colors duration-200">
                  {product.title}
                </h3>

                {/* Rating - Pro 5 Star Look */}
                <div className="flex items-center gap-1 mb-3 text-amber-500 text-sm">
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "text-amber-500" : "text-gray-300"}>★</span>
                    ))}
                  </span>
                  <span className="text-[#3d2314] font-semibold ml-0.5 text-xs">{product.rating}</span>
                  <span className="text-gray-400 text-[11px]">({product.reviews})</span>
                </div>

                {/* Price Section */}
                <div className="flex items-center gap-2 mb-4 mt-auto">
                  <span className="text-base sm:text-lg font-bold text-[#8b3a2b]">{product.price}</span>
                  <span className="text-xs text-gray-400 line-through font-medium">{product.originalPrice}</span>
                </div>
              </div>

              {/* Add to Cart Button - Pro Style */}
              <div className="px-5 pb-5">
                <button 
                  onClick={(e) => handleAddToCart(product, e)}
                  className="w-full bg-[#4a2e18] hover:bg-[#8b3a2b] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-sm hover:shadow-md"
                >
                  <BiCart className="text-base" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PersonalizedRecommendations;