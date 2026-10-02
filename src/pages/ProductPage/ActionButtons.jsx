import React from "react";
import { BiShoppingBag } from "react-icons/bi";

const ActionButtons = ({ quantity, setQuantity, onAddToCart, onBuyNow }) => {
  return (
    <div className="mt-2 pt-4 border-t border-stone-200">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-black">Quantity:</span>
        <div className="flex items-center border border-stone-300 rounded-sm">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3.5 py-1.5 bg-white text-stone-700 hover:bg-stone-200 transition font-bold cursor-pointer"
          >-</button>
          <span className="px-5 py-1.5 text-sm font-bold text-[#4a2e18]">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="px-3.5 py-1.5 bg-stone-100 text-stone-700 hover:bg-stone-200 transition font-bold cursor-pointer"
          >+</button>
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={onAddToCart}
          className="flex-1 bg-gradient-to-r from-red-800 to-red-600  rounded-md hover:bg-[#321e10] text-white py-3.5 text-xs font-bold tracking-widest uppercase transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <BiShoppingBag className="text-lg" /> Add to Cart
        </button>
        <button 
          onClick={onBuyNow}
          className="flex-1  bg-gradient-to-r from-red-800 to-red-600 rounded-md hover:bg-[#6b0710] text-white py-3.5 text-xs font-bold tracking-widest uppercase transition-all shadow-sm cursor-pointer"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;