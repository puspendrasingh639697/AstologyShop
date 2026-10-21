import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import useWishlistStore from "../store/useWishlistStore";
import useCartStore from "../store/useCartStore";
import { BiHeart, BiShoppingBag } from "react-icons/bi";

const CategoryPage = () => {
  const { slug } = useParams(); // URL se slug nikaalega (e.g., 'idols')
  const navigate = useNavigate();
  
  const { products, loading, fetchProducts } = useProductStore();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ✅ Filter Products by Category Slug
  const filteredProducts = products.filter((p) => {
    const pSlug = p.category?.slug || ""; 
    return pSlug === slug || pSlug.includes(slug);
  });

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home &gt; <span className="capitalize text-gray-900">{slug.replace("-", " ")}</span>
      </div>

      <h1 className="text-2xl font-serif text-[#5A1F1F] mb-6 capitalize">
        {slug.replace("-", " ")} Collection
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
             // ... Yahan aap apna Premium Card UI paste kar sakte hain ...
             // (Bestsellers wala card code yahan use karein)
             <div key={product._id} className="border p-4 rounded-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                <h3 className="font-medium mt-2">{product.name}</h3>
                <p className="font-bold mt-1">₹{product.price}</p>
             </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;