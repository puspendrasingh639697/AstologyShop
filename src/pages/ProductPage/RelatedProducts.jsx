// src/components/ProductPage/RelatedProducts.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BiStar, BiShoppingBag } from "react-icons/bi";
import API_BASE_URL from "../../config/api";
import useProductStore from "../../store/useProductStore";

const RelatedProducts = ({ currentProductId, currentCategory }) => {
  const navigate = useNavigate();
  const [relatedList, setRelatedList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { products, fetchProducts } = useProductStore();

  // ✅ Fetch related products — API → Store only
  useEffect(() => {
    const loadRelated = async () => {
      try {
        setLoading(true);
        let allProducts = [];

        // ---------- Try 1: API ----------
        try {
          const response = await axios.get(`${API_BASE_URL}/products`);
          const data =
            response.data.products ||
            response.data.data ||
            response.data ||
            [];

          if (Array.isArray(data) && data.length > 0) {
            allProducts = data;
            console.log("✅ Related: API products loaded:", data.length);
          }
        } catch (apiErr) {
          console.warn("⚠️ Related API failed, trying store...");
        }

        // ---------- Try 2: Store ----------
        if (allProducts.length === 0) {
          if (products.length === 0) {
            await fetchProducts();
          }
          allProducts = useProductStore.getState().products || [];
          console.log("✅ Related: Store products loaded:", allProducts.length);
        }

        // Agar dono fail → empty
        if (allProducts.length === 0) {
          console.warn("⚠️ No products available for related section");
          setRelatedList([]);
          setLoading(false);
          return;
        }

        // ✅ Filter same category + exclude current product
        const currentId = currentProductId?.toString();
        const catName =
          typeof currentCategory === "object"
            ? currentCategory?.name
            : currentCategory;

        let filtered = allProducts.filter((item) => {
          const itemId = (item._id || item.id)?.toString();
          return itemId !== currentId;
        });

        // Same category filter (agar category available hai)
        if (catName) {
          const sameCat = filtered.filter((item) => {
            const itemCat =
              typeof item.category === "object"
                ? item.category?.name
                : item.category;
            return itemCat === catName;
          });

          if (sameCat.length >= 4) {
            filtered = sameCat;
          } else {
            const others = filtered.filter((item) => {
              const itemCat =
                typeof item.category === "object"
                  ? item.category?.name
                  : item.category;
              return itemCat !== catName;
            });
            filtered = [...sameCat, ...others];
          }
        }

        setRelatedList(filtered.slice(0, 4));
      } catch (err) {
        console.error("❌ Related products error:", err);
        setRelatedList([]);
      } finally {
        setLoading(false);
      }
    };

    if (currentProductId) loadRelated();
  }, [currentProductId, currentCategory, products, fetchProducts]);

  if (loading) {
    return (
      <div className="border-t border-stone-200 p-6 sm:p-10 bg-white">
        <div className="max-w-6xl mx-auto text-center py-10 text-stone-400">
          Loading related products...
        </div>
      </div>
    );
  }

  if (relatedList.length === 0) return null;

  return (
    <div className="border-t border-stone-200 p-6 sm:p-10 bg-[#F5EBDD]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">

          <div className="mb-8 pb-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8c0a15]">
             You May Also Like
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
          </div>
           <p className="text-xs text-black uppercase tracking-widest font-semibold">
            Handpicked Sacred & Authentic Items For You
          </p>
        </div>
          
         
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedList.map((product) => {
            const pid = product._id || product.id;
            const pName = product.name || product.title || "Product";
            const pImage =
              product.image || product.images?.[0] || "/placeholder.png";
            const pPrice = product.price || 0;
            const pOldPrice = product.mrp || product.oldPrice || null;
            const pVendor =
              product.vendor ||
              product.brand ||
              (typeof product.category === "object"
                ? product.category?.name
                : product.category) ||
              "Sacred Collection";

            return (
              <div
                key={pid}
                onClick={() => {
                  navigate(`/product/${product.slug || pid}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white/50 border border-stone-200 rounded-sm p-4 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group"
              >
                <div>
                  <div className="w-full h-48 bg-white border border-stone-200 rounded-sm mb-3 overflow-hidden flex items-center justify-center relative">
                    <img
                      src={pImage}
                      alt={pName}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                    {pOldPrice && pOldPrice > pPrice && (
                      <span className="absolute top-2 left-2 bg-red-100 bg-gradient-to-r from-red-800 to-red-600 text-[10px] font-bold px-2 py-0.5 rounded-sm">
                        Sale
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] uppercase tracking-wider text-black font-semibold mb-1">
                    {pVendor}
                  </p>

                  <h4 className="text-xs sm:text-sm text-black mb-2 line-clamp-2 leading-snug">
                    {pName}
                  </h4>

                  <div className="flex items-center gap-1 text-amber-500 text-xs mb-3">
                    <BiStar className="fill-amber-500" />
                    <span className="font-bold text-stone-700">
                      {product.rating || 4.8}
                    </span>
                    <span className="text-stone-400 text-[11px]">
                      ({product.reviewsCount || 24})
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-[#8b3a2b]">
                      Rs. {pPrice}
                    </span>
                    {pOldPrice && pOldPrice > pPrice && (
                      <span className="block text-[11px] text-stone-400 line-through">
                        Rs. {pOldPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.slug || pid}`);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="bg-[#5A1F1F] hover:bg-[#321e10] text-white p-2 rounded-sm text-xs transition flex items-center gap-1"
                  >
                    <BiShoppingBag className="text-base" /> View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;