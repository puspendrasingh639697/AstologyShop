// // import React, { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   BiX,
// //   BiMinus,
// //   BiPlus,
// //   BiTrash,
// // } from "react-icons/bi";
// // import useCartStore from "../../store/useCartStore";
// // import useProductStore from "../../store/useProductStore";

// // const CartDrawer = () => {
// //   const navigate = useNavigate();
// //   const {
// //     isDrawerOpen,
// //     closeDrawer,
// //     items,
// //     removeFromCart,
// //     updateQuantity,
// //     fetchCart,
// //     totalItems: totalItemsFromStore,
// //   } = useCartStore();
// //   const { products, fetchProducts } = useProductStore();

// //   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
// //   const userId =
// //     storedUser.id || storedUser._id || localStorage.getItem("cartUserId");

// //   // ✅ Drawer khulte hi cart refresh
// //   useEffect(() => {
// //     if (isDrawerOpen) {
// //       fetchCart(userId);
// //       if (!products || products.length === 0) fetchProducts();
// //     }
// //   }, [isDrawerOpen]);

// //   // ✅ Cart items safe mapping
// //   const safeItems = Array.isArray(items) ? items : [];
// //   const cartItems = safeItems.map((item) => {
// //     let productId = "";
// //     if (typeof item.productId === "string") productId = item.productId;
// //     else if (item.productId && typeof item.productId === "object")
// //       productId = item.productId._id || "";
// //     else if (item.id) productId = item.id;

// //     const p = products?.find((x) => x._id === productId);

// //     return {
// //       id: productId || item.id,
// //       title:
// //         p?.name || item.productId?.name || item.title || item.name || "Product",
// //       price: p?.price || item.productId?.price || item.price || 0,
// //       image: p?.image || item.productId?.image || item.image || "",
// //       quantity: item.quantity || 1,
// //       variant: item.variant || "Standard",
// //     };
// //   });

// //   const totalItems = cartItems.reduce((a, i) => a + i.quantity, 0);
// //   const subtotal = cartItems.reduce((a, i) => a + i.price * i.quantity, 0);

// //   const handleQtyChange = async (id, delta) => {
// //     const item = cartItems.find((i) => i.id === id);
// //     if (!item) return;
// //     const newQty = item.quantity + delta;

// //     if (newQty <= 0) {
// //       await removeFromCart(userId, id);
// //     } else {
// //       await updateQuantity(id, newQty);
// //     }
// //     await fetchCart(userId);
// //   };

// //   const handleRemove = async (id) => {
// //     await removeFromCart(userId, id);
// //     await fetchCart(userId);
// //   };

// //   return (
// //     <>
// //       {/* ==================== BACKDROP ==================== */}
// //       <div
// //         onClick={closeDrawer}
// //         className={`fixed inset-0 bg-black/40 z-[90] transition-opacity duration-300 ${
// //           isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
// //         }`}
// //       />

// //       {/* ==================== DRAWER PANEL ==================== */}
// //       <div
// //         className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[100] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
// //           isDrawerOpen ? "translate-x-0" : "translate-x-full"
// //         }`}
// //       >
// //         {/* ---------- HEADER (Feathers Closet style) ---------- */}
// //         <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
// //           <button
// //             onClick={closeDrawer}
// //             className="flex items-center gap-2 text-base font-medium text-stone-800 hover:text-black"
// //           >
// //             <span className="text-xl font-light">‹</span>
// //             <span>Shopping Bag ({totalItems})</span>
// //           </button>
// //           <button
// //             onClick={closeDrawer}
// //             className="p-1.5 hover:bg-stone-100 rounded-full transition"
// //             aria-label="Close"
// //           >
// //             <BiX className="text-xl text-stone-600" />
// //           </button>
// //         </div>

// //         {/* ---------- BODY ---------- */}
// //         <div className="flex-1 overflow-y-auto">
// //           {cartItems.length === 0 ? (
// //             /* ==================== EMPTY STATE (Feathers Closet EXACT) ==================== */
// //             <div className="flex flex-col items-center justify-center h-full px-8 text-center">
// //               {/* Cart Illustration (sad face cart) */}
// //               <div className="w-44 h-44 mb-6 flex items-center justify-center">
// //                 <svg
// //                   viewBox="0 0 200 200"
// //                   className="w-full h-full"
// //                   fill="none"
// //                   stroke="#c8c8c8"
// //                   strokeWidth="2.5"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   {/* Cart body */}
// //                   <path d="M 40 75 L 160 75 L 145 155 L 55 155 Z" />
// //                   {/* Cart top line */}
// //                   <line x1="40" y1="75" x2="160" y2="75" />
// //                   {/* Handle */}
// //                   <path d="M 40 75 L 35 55 L 60 55" />
// //                   {/* Sad face: eyes */}
// //                   <circle cx="85" cy="110" r="3" fill="#c8c8c8" stroke="none" />
// //                   <circle cx="115" cy="110" r="3" fill="#c8c8c8" stroke="none" />
// //                   {/* Sad mouth */}
// //                   <path d="M 85 130 Q 100 118 115 130" />
// //                   {/* Wheels */}
// //                   <circle cx="70" cy="170" r="6" />
// //                   <circle cx="130" cy="170" r="6" />

// //                   {/* Sparkles */}
// //                   <text x="25" y="45" fontSize="16" fill="#c8c8c8" stroke="none">✦</text>
// //                   <text x="155" y="40" fontSize="12" fill="#c8c8c8" stroke="none">✦</text>
// //                   <text x="170" y="65" fontSize="10" fill="#c8c8c8" stroke="none">+</text>
// //                   <text x="20" y="90" fontSize="10" fill="#c8c8c8" stroke="none">+</text>
// //                 </svg>
// //               </div>

// //               {/* Text */}
// //               <h3 className="text-2xl text-stone-800 mb-2 font-medium">
// //                 Oops! Your cart is empty!
// //               </h3>
// //               <p className="text-sm text-stone-500 mb-8 max-w-[280px] leading-relaxed">
// //                 There is nothing in your cart lets add some items.
// //               </p>

// //               {/* Shop Now Button */}
// //               <button
// //                 onClick={() => {
// //                   closeDrawer();
// //                   navigate("/shop");
// //                 }}
// //                 className="w-full max-w-[300px] bg-black hover:bg-stone-800 text-white py-3.5 rounded-md text-sm font-medium transition"
// //               >
// //                 Shop Now
// //               </button>
// //             </div>
// //           ) : (
// //             /* ==================== ITEMS LIST ==================== */
// //             <div className="p-4 space-y-3">
// //               {cartItems.map((item) => (
// //                 <div
// //                   key={item.id}
// //                   className="flex gap-3 pb-4 border-b border-stone-100"
// //                 >
// //                   <div className="w-20 h-20 bg-stone-50 border border-stone-200 rounded-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
// //                     {item.image ? (
// //                       <img
// //                         src={item.image}
// //                         alt={item.title}
// //                         className="w-full h-full object-contain p-1"
// //                       />
// //                     ) : (
// //                       <span className="text-stone-300 text-2xl">📦</span>
// //                     )}
// //                   </div>

// //                   <div className="flex-1 min-w-0 flex flex-col justify-between">
// //                     <div>
// //                       <h3 className="text-sm text-stone-800 line-clamp-2 leading-snug mb-1 font-medium">
// //                         {item.title}
// //                       </h3>
// //                       <p className="text-[10px] text-stone-500 uppercase tracking-wider mb-1.5">
// //                         {item.variant}
// //                       </p>
// //                       <span className="text-sm font-semibold text-stone-800">
// //                         ₹{item.price}
// //                       </span>
// //                     </div>

// //                     <div className="flex items-center justify-between mt-2">
// //                       <div className="flex items-center border border-stone-300 rounded-sm">
// //                         <button
// //                           onClick={() => handleQtyChange(item.id, -1)}
// //                           className="w-7 h-7 flex items-center justify-center hover:bg-stone-100 disabled:opacity-40"
// //                           disabled={item.quantity <= 1}
// //                         >
// //                           <BiMinus className="text-xs" />
// //                         </button>
// //                         <span className="w-8 h-7 flex items-center justify-center text-xs font-semibold border-x border-stone-300">
// //                           {item.quantity}
// //                         </span>
// //                         <button
// //                           onClick={() => handleQtyChange(item.id, 1)}
// //                           className="w-7 h-7 flex items-center justify-center hover:bg-stone-100"
// //                         >
// //                           <BiPlus className="text-xs" />
// //                         </button>
// //                       </div>

// //                       <div className="flex items-center gap-3">
// //                         <span className="text-sm font-semibold text-stone-800">
// //                           ₹{item.price * item.quantity}
// //                         </span>
// //                         <button
// //                           onClick={() => handleRemove(item.id)}
// //                           className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-sm"
// //                         >
// //                           <BiTrash className="text-sm" />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* ---------- FOOTER (only when items exist) ---------- */}
// //         {cartItems.length > 0 && (
// //           <div className="border-t border-stone-200 p-4 space-y-3 bg-white">
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm font-semibold text-stone-700">
// //                 Subtotal
// //               </span>
// //               <span className="text-lg font-bold text-stone-900">
// //                 ₹{subtotal}
// //               </span>
// //             </div>

// //             <p className="text-[10px] text-stone-500 text-center">
// //               Shipping & taxes calculated at checkout
// //             </p>

// //             <div className="grid grid-cols-2 gap-2">
// //               <button
// //                 onClick={closeDrawer}
// //                 className="border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white py-3 rounded-md text-xs font-bold uppercase tracking-wider transition"
// //               >
// //                 Continue
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   closeDrawer();
// //                   navigate("/cart");
// //                 }}
// //                 className="bg-black hover:bg-stone-800 text-white py-3 rounded-md text-xs font-bold uppercase tracking-wider transition"
// //               >
// //                 Checkout →
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default CartDrawer;


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   BiX,
//   BiMinus,
//   BiPlus,
//   BiTrash,
// } from "react-icons/bi";
// import useCartStore from "../../store/useCartStore";
// import useProductStore from "../../store/useProductStore";

// const CartDrawer = () => {
//   const navigate = useNavigate();
//   const {
//     isDrawerOpen,
//     closeDrawer,
//     items,
//     removeFromCart,
//     updateQuantity,
//     fetchCart,
//     totalItems: totalItemsFromStore,
//   } = useCartStore();
//   const { products, fetchProducts } = useProductStore();

//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const userId =
//     storedUser.id || storedUser._id || localStorage.getItem("cartUserId");

//   // ✅ Drawer khulte hi cart refresh
//   useEffect(() => {
//     if (isDrawerOpen) {
//       fetchCart(userId);
//       if (!products || products.length === 0) fetchProducts();
//     }
//   }, [isDrawerOpen]);

//   // ✅ Cart items safe mapping
//   const safeItems = Array.isArray(items) ? items : [];
//   const cartItems = safeItems.map((item) => {
//     let productId = "";
//     if (typeof item.productId === "string") productId = item.productId;
//     else if (item.productId && typeof item.productId === "object")
//       productId = item.productId._id || "";
//     else if (item.id) productId = item.id;

//     const p = products?.find((x) => x._id === productId);

//     return {
//       id: productId || item.id,
//       title:
//         p?.name || item.productId?.name || item.title || item.name || "Product",
//       price: p?.price || item.productId?.price || item.price || 0,
//       image: p?.image || item.productId?.image || item.image || "",
//       quantity: item.quantity || 1,
//       variant: item.variant || "Standard",
//     };
//   });

//   const totalItems = cartItems.reduce((a, i) => a + i.quantity, 0);
//   const subtotal = cartItems.reduce((a, i) => a + i.price * i.quantity, 0);

//   const handleQtyChange = async (id, delta) => {
//     const item = cartItems.find((i) => i.id === id);
//     if (!item) return;
//     const newQty = item.quantity + delta;

//     if (newQty <= 0) {
//       await removeFromCart(userId, id);
//     } else {
//       await updateQuantity(id, newQty);
//     }
//     await fetchCart(userId);
//   };

//   const handleRemove = async (id) => {
//     await removeFromCart(userId, id);
//     await fetchCart(userId);
//   };

//   return (
//     <>
//       {/* ==================== BACKDROP ==================== */}
//       <div
//         onClick={closeDrawer}
//         className={`fixed inset-0 bg-black/40 z-[90] transition-opacity duration-300 ${
//           isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       />

//       {/* ==================== DRAWER PANEL ==================== */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#F5EBDD] z-[100] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
//           isDrawerOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* ---------- HEADER ---------- */}
//         <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-[#5A1F1F]/20">
//           <button
//             onClick={closeDrawer}
//             className="flex items-center gap-2 text-base font-medium text-[#5A1F1F] hover:text-[#3d1414]"
//           >
//             <span className="text-xl font-light">‹</span>
//             <span>Shopping Bag ({totalItems})</span>
//           </button>
//           <button
//             onClick={closeDrawer}
//             className="p-1.5 hover:bg-[#F5EBDD] rounded-full transition"
//             aria-label="Close"
//           >
//             <BiX className="text-xl text-[#5A1F1F]" />
//           </button>
//         </div>

//         {/* ---------- BODY ---------- */}
//         <div className="flex-1 overflow-y-auto">
//           {cartItems.length === 0 ? (
//             /* ==================== EMPTY STATE ==================== */
//             <div className="flex flex-col items-center justify-center h-full px-8 text-center">
//               {/* Cart Illustration */}
//               <div className="w-44 h-44 mb-6 flex items-center justify-center">
//                 <svg
//                   viewBox="0 0 200 200"
//                   className="w-full h-full"
//                   fill="none"
//                   stroke="#5A1F1F"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   opacity="0.4"
//                 >
//                   <path d="M 40 75 L 160 75 L 145 155 L 55 155 Z" />
//                   <line x1="40" y1="75" x2="160" y2="75" />
//                   <path d="M 40 75 L 35 55 L 60 55" />
//                   <circle cx="85" cy="110" r="3" fill="#5A1F1F" stroke="none" />
//                   <circle cx="115" cy="110" r="3" fill="#5A1F1F" stroke="none" />
//                   <path d="M 85 130 Q 100 118 115 130" />
//                   <circle cx="70" cy="170" r="6" />
//                   <circle cx="130" cy="170" r="6" />
//                   <text x="25" y="45" fontSize="16" fill="#5A1F1F" stroke="none">✦</text>
//                   <text x="155" y="40" fontSize="12" fill="#5A1F1F" stroke="none">✦</text>
//                   <text x="170" y="65" fontSize="10" fill="#5A1F1F" stroke="none">+</text>
//                   <text x="20" y="90" fontSize="10" fill="#5A1F1F" stroke="none">+</text>
//                 </svg>
//               </div>

//               <h3 className="text-2xl text-[#5A1F1F] mb-2 font-medium">
//                 Oops! Your cart is empty!
//               </h3>
//               <p className="text-sm text-[#6B5038] mb-8 max-w-[280px] leading-relaxed">
//                 There is nothing in your cart lets add some items.
//               </p>

//               {/* Shop Now Button */}
//               <button
//                 onClick={() => {
//                   closeDrawer();
//                   navigate("/shop");
//                 }}
//                 className="w-full max-w-[300px] bg-[#5A1F1F] hover:bg-[#3d1414] text-white py-3.5 rounded-md text-sm font-medium transition"
//               >
//                 Shop Now
//               </button>
//             </div>
//           ) : (
//             /* ==================== ITEMS LIST ==================== */
//             <div className="p-4 space-y-3">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-white border border-[#5A1F1F]/15 rounded-lg p-3 flex gap-3"
//                 >
//                   <div className="w-20 h-20 bg-[#F5EBDD] border border-[#5A1F1F]/10 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden">
//                     {item.image ? (
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-contain p-1"
//                       />
//                     ) : (
//                       <span className="text-[#5A1F1F]/40 text-2xl">📦</span>
//                     )}
//                   </div>

//                   <div className="flex-1 min-w-0 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-sm text-[#5A1F1F] line-clamp-2 leading-snug mb-1 font-medium">
//                         {item.title}
//                       </h3>
//                       <p className="text-[10px] text-[#6B5038] uppercase tracking-wider mb-1.5">
//                         {item.variant}
//                       </p>
//                       <span className="text-sm font-bold text-[#5A1F1F]">
//                         ₹{item.price}
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between mt-2">
//                       <div className="flex items-center border border-[#5A1F1F]/30 rounded-md">
//                         <button
//                           onClick={() => handleQtyChange(item.id, -1)}
//                           className="w-7 h-7 flex items-center justify-center hover:bg-[#F5EBDD] disabled:opacity-40 text-[#5A1F1F]"
//                           disabled={item.quantity <= 1}
//                         >
//                           <BiMinus className="text-xs" />
//                         </button>
//                         <span className="w-8 h-7 flex items-center justify-center text-xs font-semibold border-x border-[#5A1F1F]/30 text-[#5A1F1F]">
//                           {item.quantity}
//                         </span>
//                         <button
//                           onClick={() => handleQtyChange(item.id, 1)}
//                           className="w-7 h-7 flex items-center justify-center hover:bg-[#F5EBDD] text-[#5A1F1F]"
//                         >
//                           <BiPlus className="text-xs" />
//                         </button>
//                       </div>

//                       <div className="flex items-center gap-3">
//                         <span className="text-sm font-bold text-[#5A1F1F]">
//                           ₹{item.price * item.quantity}
//                         </span>
//                         <button
//                           onClick={() => handleRemove(item.id)}
//                           className="text-[#5A1F1F] hover:text-red-600 p-1 hover:bg-red-50 rounded-md transition"
//                         >
//                           <BiTrash className="text-sm" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* ---------- FOOTER (only when items exist) ---------- */}
//         {cartItems.length > 0 && (
//           <div className="border-t border-[#5A1F1F]/20 p-4 space-y-3 bg-white">
//             <div className="flex justify-between items-center">
//               <span className="text-sm font-semibold text-[#6B5038]">
//                 Subtotal
//               </span>
//               <span className="text-lg font-bold text-[#5A1F1F]">
//                 ₹{subtotal}
//               </span>
//             </div>

//             <p className="text-[10px] text-[#6B5038] text-center">
//               Shipping & taxes calculated at checkout
//             </p>

//             <div className="grid grid-cols-2 gap-2">
//               <button
//                 onClick={closeDrawer}
//                 className="border border-[#5A1F1F] text-[#5A1F1F] hover:bg-[#5A1F1F] hover:text-white py-3 rounded-md text-xs font-bold uppercase tracking-wider transition"
//               >
//                 Continue
//               </button>
//               <button
//                 onClick={() => {
//                   closeDrawer();
//                   navigate("/cart");
//                 }}
//                 className="bg-[#5A1F1F] hover:bg-[#3d1414] text-white py-3 rounded-md text-xs font-bold uppercase tracking-wider transition"
//               >
//                 Checkout →
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartDrawer;


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BiX,
  BiMinus,
  BiPlus,
  BiTrash,
} from "react-icons/bi";
import useCartStore from "../../store/useCartStore";
import useProductStore from "../../store/useProductStore";

const CartDrawer = () => {
  const navigate = useNavigate();
  const {
    isDrawerOpen,
    closeDrawer,
    items,
    removeFromCart,
    updateQuantity,
    fetchCart,
  } = useCartStore();
  const { products, fetchProducts } = useProductStore();

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const userId =
    storedUser.id || storedUser._id || localStorage.getItem("cartUserId");

  // ✅ Drawer khulte hi cart refresh
  useEffect(() => {
    if (isDrawerOpen) {
      fetchCart(userId);
      if (!products || products.length === 0) fetchProducts();
    }
  }, [isDrawerOpen]);

  // ✅ Cart items safe mapping with quantity limit
  const safeItems = Array.isArray(items) ? items : [];
  const cartItems = safeItems.map((item) => {
    let productId = "";
    if (typeof item.productId === "string") productId = item.productId;
    else if (item.productId && typeof item.productId === "object")
      productId = item.productId._id || "";
    else if (item.id) productId = item.id;

    const p = products?.find((x) => x._id === productId);

    // ✅ SAFE QUANTITY (1 to 99 only)
    const rawQty = Number(item.quantity);
    const safeQuantity = Number.isFinite(rawQty) && rawQty > 0
      ? Math.min(Math.max(Math.floor(rawQty), 1), 99)
      : 1;

    return {
      id: productId || item.id,
      title:
        p?.name || item.productId?.name || item.title || item.name || "Product",
      price: Number(p?.price || item.productId?.price || item.price || 0),
      image: p?.image || item.productId?.image || item.image || "",
      quantity: safeQuantity,
      variant: item.variant || "Standard",
    };
  });

  const totalItems = cartItems.reduce((a, i) => a + i.quantity, 0);
  const subtotal = cartItems.reduce((a, i) => a + i.price * i.quantity, 0);

  const handleQtyChange = async (id, delta) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;
    const newQty = item.quantity + delta;

    if (newQty <= 0) {
      await removeFromCart(userId, id);
    } else {
      await updateQuantity(id, newQty);
    }
    await fetchCart(userId);
  };

  const handleRemove = async (id) => {
    await removeFromCart(userId, id);
    await fetchCart(userId);
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/40 z-[90] transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* DRAWER PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#F5EBDD] z-[100] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-[#5A1F1F]/20">
          <button
            onClick={closeDrawer}
            className="flex items-center gap-2 text-base font-medium text-[#5A1F1F] hover:text-[#3d1414]"
          >
            <span className="text-xl font-light">‹</span>
            <span>Shopping Bag ({totalItems})</span>
          </button>
          <button
            onClick={closeDrawer}
            className="p-1.5 hover:bg-[#F5EBDD] rounded-full transition"
            aria-label="Close"
          >
            <BiX className="text-xl text-[#5A1F1F]" />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-8 text-center">
              <div className="w-44 h-44 mb-6 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  fill="none"
                  stroke="#5A1F1F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                >
                  <path d="M 40 75 L 160 75 L 145 155 L 55 155 Z" />
                  <line x1="40" y1="75" x2="160" y2="75" />
                  <path d="M 40 75 L 35 55 L 60 55" />
                  <circle cx="85" cy="110" r="3" fill="#5A1F1F" stroke="none" />
                  <circle cx="115" cy="110" r="3" fill="#5A1F1F" stroke="none" />
                  <path d="M 85 130 Q 100 118 115 130" />
                  <circle cx="70" cy="170" r="6" />
                  <circle cx="130" cy="170" r="6" />
                </svg>
              </div>
              <h3 className="text-2xl text-[#5A1F1F] mb-2 font-medium">
                Oops! Your cart is empty!
              </h3>
              <p className="text-sm text-[#6B5038] mb-8 max-w-[280px] leading-relaxed">
                There is nothing in your cart lets add some items.
              </p>
              <button
                onClick={() => {
                  closeDrawer();
                  navigate("/shop");
                }}
                className="w-full max-w-[300px] bg-[#5A1F1F] hover:bg-[#3d1414] text-white py-3.5 rounded-md text-sm font-medium transition"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#5A1F1F]/15 rounded-lg p-3 flex gap-3"
                >
                  <div className="w-20 h-20 bg-[#F5EBDD] border border-[#5A1F1F]/10 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <span className="text-[#5A1F1F]/40 text-2xl">📦</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm text-[#5A1F1F] line-clamp-2 leading-snug mb-1 font-medium">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-[#6B5038] uppercase tracking-wider mb-1.5">
                        {item.variant}
                      </p>
                      <span className="text-sm font-bold text-[#5A1F1F]">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#5A1F1F]/30 rounded-md">
                        <button
                          onClick={() => handleQtyChange(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-[#F5EBDD] disabled:opacity-40 text-[#5A1F1F]"
                          disabled={item.quantity <= 1}
                        >
                          <BiMinus className="text-xs" />
                        </button>
                        <span className="w-8 h-7 flex items-center justify-center text-xs font-semibold border-x border-[#5A1F1F]/30 text-[#5A1F1F]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQtyChange(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-[#F5EBDD] text-[#5A1F1F]"
                        >
                          <BiPlus className="text-xs" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-[#5A1F1F]">
                          ₹{item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-[#5A1F1F] hover:text-red-600 p-1 hover:bg-red-50 rounded-md transition"
                        >
                          <BiTrash className="text-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#5A1F1F]/20 p-4 space-y-3 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-[#6B5038]">
                Subtotal
              </span>
              <span className="text-lg font-bold text-[#5A1F1F]">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <p className="text-[10px] text-[#6B5038] text-center">
              Shipping & taxes calculated at checkout
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={closeDrawer}
                className="border border-[#5A1F1F] text-[#5A1F1F] hover:bg-[#5A1F1F] hover:text-white py-3 rounded-md text-xs font-bold uppercase tracking-wider transition"
              >
                Continue
              </button>
              <button
                onClick={() => {
                  closeDrawer();
                  navigate("/cart");
                }}
                className="bg-[#5A1F1F] hover:bg-[#3d1414] text-white py-3 rounded-md text-xs font-bold uppercase tracking-wider transition"
              >
                Checkout →
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;