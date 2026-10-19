


// // import React, { useState, useEffect } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import {
// //   BiSearch,
// //   BiUser,
// //   BiShoppingBag,
// //   BiMenu,
// //   BiX,
// // } from "react-icons/bi";
// // import logo from "../assets/logo2.png";
// // import useAuthStore from "../store/useAuthStore";
// // import useCartStore from "../store/useCartStore";
// // import useWishlistStore from "../store/useWishlistStore";
// // import useSettingsStore from "../store/useSettingsStore";

// // // ===== NAV LINKS (Home add kiya hai) =====
// // const navLinks = [
// //   { label: "Home", href: "/" },
// //   { label: "Puja Samagri", href: "/puja-samagri" },
// //   { label: "Daily Idols", href: "/idols" },
// //   { label: "Mala & Spiritual", href: "/rudraksha" },
// //   { label: "Puja Kits", href: "/puja-kits" },
// //   { label: "Gifting", href: "/festivals" },
// //   { label: "Festivals", href: "/festivals" },
// // ];

// // function Navbar() {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const { token, logout } = useAuthStore();
// //   const {
// //     totalItems: cartTotalItems,
// //     fetchCart,
// //     setUserId,
// //     resetCart,
// //     openDrawer,
// //   } = useCartStore();
// //   const { fetchWishlist, resetWishlist } = useWishlistStore();
// //   const { settings } = useSettingsStore();

// //   const siteName = settings?.siteName || "PujaHetu";
// //   const siteLogo = settings?.siteLogo || logo;

// //   useEffect(() => {
// //     const initUserData = async () => {
// //       const token = useAuthStore.getState().token;
// //       if (!token) return;
// //       const user = JSON.parse(localStorage.getItem("user") || "{}");
// //       const userId = user.id || user._id || localStorage.getItem("cartUserId");
// //       if (userId) {
// //         setUserId(userId);
// //         await fetchCart(userId);
// //       }
// //       await fetchWishlist();
// //     };
// //     initUserData();
// //   }, [token]);

// //   const handleLogout = () => {
// //     logout();
// //     resetCart();
// //     resetWishlist();
// //     navigate("/login");
// //   };

// //   const handleAccountClick = (e) => {
// //     e.preventDefault();
// //     if (!token) navigate("/login");
// //     else navigate("/account");
// //   };

// //   return (
// //     <header className="w-full relative">

// //       {/* ============================================================
// //           🟢 TOP STRIP — Auto-scrolling marquee
// //           ============================================================ */}
// //       <div className="w-full bg-[#5A1F1F] text-[#F5EBDD] text-[11px] sm:text-xs overflow-hidden">
// //         <div className="marquee-track py-1.5 flex items-center gap-10 whitespace-nowrap">
// //           {[1, 2].map((group) => (
// //             <div key={group} className="flex items-center gap-10 shrink-0">
// //               <span className="flex items-center gap-1.5">
// //                 <span className="text-[#B58A3A]">✓</span>
// //                 Free Shipping on Orders Above ₹999
// //               </span>
// //               <span className="flex items-center gap-1.5">
// //                 <span className="text-[#B58A3A]">✓</span> Easy Returns
// //               </span>
// //               <span className="flex items-center gap-1.5">
// //                 <span className="text-[#B58A3A]">✓</span> Secure Payments
// //               </span>
// //               <Link
// //                 to="/tracking"
// //                 className="hover:text-[#B58A3A] transition-colors flex items-center gap-1"
// //               >
// //                 Track Order <span>→</span>
// //               </Link>
// //               <span className="flex items-center gap-1.5">
// //                 <span className="text-[#B58A3A]">✓</span> 100% Authentic Products
// //               </span>
// //               <span className="flex items-center gap-1.5">
// //                 <span className="text-[#B58A3A]">✓</span> Trusted by Lakhs of Families
// //               </span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* ============================================================
// //           🤍 MAIN ROW — Logo | Search | Icons (Ivory)
// //           ============================================================ */}
// //       <div className="w-full bg-[#F5EBDD]">
// //         <div className="max-w-8xl mx-auto px-4 sm:px-6 py-3">
// //           <div className="flex items-center justify-between gap-4">

// //             {/* LOGO — LEFT */}
// //             <Link to="/" className="flex items-center shrink-0">
// //               <img
// //                 src={siteLogo}
// //                 alt={siteName}
// //                 className="h-12 sm:h-14 md:h-16 object-contain"
// //                 onError={(e) => {
// //                   e.target.src = logo;
// //                 }}
// //               />
// //             </Link>

// //             {/* SEARCH BAR — CENTER */}
// //             <div className="hidden md:flex flex-1 max-w-xl mx-4">
// //               <div className="w-full flex items-center bg-white border border-[#B58A3A]/30 rounded-md overflow-hidden">
// //                 <input
// //                   type="text"
// //                   placeholder="Search for puja items, idols, incenses..."
// //                   className="w-full px-4 py-2 text-sm text-[#20231F] placeholder-[#6B5038] bg-transparent outline-none"
// //                 />
// //                 <button
// //                   className="px-4 py-2 text-[#B58A3A] hover:text-[#173B32] transition-colors"
// //                   aria-label="Search"
// //                 >
// //                   <BiSearch className="text-lg" />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* RIGHT ICONS */}
// //             <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
// //               {/* 🔥 LOGIN / ACCOUNT BUTTON FIX */}
// //               <button
// //                 onClick={handleAccountClick}
// //                 className="flex items-center gap-2 text-sm font-medium text-[#B58A3A] border border-[#B58A3A]/50 rounded-md px-3 py-1.5 hover:bg-[#B58A3A] hover:text-[#F5EBDD] transition-all"
// //               >
// //                 <BiUser className="text-lg" />
// //                 <span className="hidden sm:inline">
// //                   {token ? "Account" : "Login"} 
// //                 </span>
// //               </button>

// //               <button
// //                 onClick={openDrawer}
// //                 className="relative flex items-center gap-2 text-sm font-medium text-[#B58A3A] border border-[#B58A3A]/50 rounded-md px-3 py-1.5 hover:bg-[#B58A3A] hover:text-[#F5EBDD] transition-all"
// //               >
// //                 <BiShoppingBag className="text-lg" />
// //                 <span className="hidden sm:inline">Cart</span>
// //                 {cartTotalItems > 0 && (
// //                   <span className="absolute -top-1.5 -right-1.5 bg-[#173B32] text-[#F5EBDD] text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
// //                     {cartTotalItems}
// //                   </span>
// //                 )}
// //               </button>

// //               <button
// //                 className="lg:hidden text-[#B58A3A] hover:text-[#173B32] text-2xl p-1 transition-colors"
// //                 onClick={() => setIsMobileMenuOpen(true)}
// //                 aria-label="Menu"
// //               >
// //                 <BiMenu />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Mobile Search Bar */}
// //           <div className="flex md:hidden mt-3 items-center bg-white border border-[#B58A3A]/30 rounded-md overflow-hidden">
// //             <input
// //               type="text"
// //               placeholder="Search for puja items, idols..."
// //               className="w-full px-4 py-2.5 text-sm text-[#20231F] placeholder-[#6B5038] bg-transparent outline-none"
// //             />
// //             <button className="px-4 py-2.5 text-[#B58A3A]">
// //               <BiSearch className="text-lg" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* ============================================================
// //             🟡 NAV LINKS ROW — with TOP LINE (border-t)
// //             ============================================================ */}
// //         <nav className="hidden lg:block border-t border-[#B58A3A]/30">
// //           <ul className="max-w-8xl mx-auto px-4 flex items-center justify-center gap-8 xl:gap-10 py-2.5 text-sm font-medium">
// //             {navLinks.map((link) => {
// //               const isActive = location.pathname === link.href;
// //               return (
// //                 <li key={link.label}>
// //                   <Link
// //                     to={link.href}
// //                     className={`transition-colors ${
// //                       isActive
// //                         ? "text-gray-600 "
// //                         : "text-gray-600 hover:text-[#B58A3A]"
// //                     }`}
// //                   >
// //                     {link.label}
// //                   </Link>
// //                 </li>
// //               );
// //             })}
// //           </ul>
// //         </nav>
// //       </div>

// //       {/* ============================================================
// //           MOBILE SIDEBAR
// //           ============================================================ */}
// //       {isMobileMenuOpen && (
// //         <div className="fixed inset-0 z-50 flex">
// //           <div
// //             className="fixed inset-0 bg-black/60 transition-opacity"
// //             onClick={() => setIsMobileMenuOpen(false)}
// //           ></div>
// //           <div className="relative w-4/5 max-w-sm bg-[#F5EBDD] text-[#20231F] h-full shadow-xl flex flex-col z-10 animate-slideIn">
// //             <div className="flex items-center justify-between px-5 py-4 border-b border-[#B58A3A]/30">
// //               <img
// //                 src={siteLogo}
// //                 alt={siteName}
// //                 className="h-12 object-contain"
// //                 onError={(e) => {
// //                   e.target.src = logo;
// //                 }}
// //               />
// //               <button
// //                 className="text-[#B58A3A] text-2xl focus:outline-none hover:text-[#173B32] transition-colors"
// //                 onClick={() => setIsMobileMenuOpen(false)}
// //               >
// //                 <BiX />
// //               </button>
// //             </div>
// //             <div className="flex-1 overflow-y-auto py-4 px-5 space-y-3">
// //               <ul className="space-y-1 font-medium text-[#6B5038]">
// //                 {navLinks.map((link) => {
// //                   const isActive = location.pathname === link.href;
// //                   return (
// //                     <li key={link.label}>
// //                       <Link
// //                         to={link.href}
// //                         className={`block py-3 border-b border-[#B58A3A]/20 transition-colors ${
// //                           isActive
// //                             ? "text-[#173B32] font-semibold"
// //                             : "text-[#6B5038] hover:text-[#B58A3A]"
// //                         }`}
// //                         onClick={() => setIsMobileMenuOpen(false)}
// //                       >
// //                         {link.label}
// //                       </Link>
// //                     </li>
// //                   );
// //                 })}
// //               </ul>

// //               <div className="pt-4 border-t border-[#B58A3A]/30 space-y-1 text-[#6B5038] font-medium">
// //                 {/* 🔥 MOBILE LOGIN / ACCOUNT BUTTON FIX */}
// //                 <button
// //                   onClick={(e) => {
// //                     setIsMobileMenuOpen(false);
// //                     handleAccountClick(e);
// //                   }}
// //                   className="flex items-center gap-3 cursor-pointer hover:text-[#173B32] w-full text-left bg-transparent border-none py-2.5 transition-colors"
// //                 >
// //                   <BiUser className="text-2xl text-[#B58A3A]" />
// //                   <span>{token ? "Account" : "Login"}</span>
// //                 </button>
// //                 <button
// //                   onClick={() => {
// //                     setIsMobileMenuOpen(false);
// //                     openDrawer();
// //                   }}
// //                   className="flex items-center justify-between cursor-pointer hover:text-[#173B32] py-2.5 w-full text-left bg-transparent border-none transition-colors"
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <BiShoppingBag className="text-2xl text-[#B58A3A]" />
// //                     Cart
// //                   </div>
// //                   {cartTotalItems > 0 && (
// //                     <span className="bg-[#B58A3A] text-[#F5EBDD] text-xs px-2 py-0.5 rounded-full font-bold">
// //                       {cartTotalItems}
// //                     </span>
// //                   )}
// //                 </button>
// //                 {token && (
// //                   <button
// //                     onClick={() => {
// //                       setIsMobileMenuOpen(false);
// //                       handleLogout();
// //                     }}
// //                     className="flex items-center gap-3 cursor-pointer text-[#B58A3A] hover:text-[#173B32] w-full text-left bg-transparent border-none py-2.5 transition-colors"
// //                   >
// //                     <span>Logout</span>
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <style>{`
// //         @keyframes slideIn {
// //           from { transform: translateX(-100%); }
// //           to { transform: translateX(0); }
// //         }
// //         .animate-slideIn {
// //           animation: slideIn 0.25s ease-out;
// //         }
// //         @keyframes marquee {
// //           0%   { transform: translateX(0); }
// //           100% { transform: translateX(-50%); }
// //         }
// //         .marquee-track {
// //           animation: marquee 25s linear infinite;
// //         }
// //         .marquee-track:hover {
// //           animation-play-state: paused;
// //         }
// //       `}</style>
// //     </header>
// //   );
// // }

// // export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   BiSearch,
//   BiUser,
//   BiShoppingBag,
//   BiMenu,
//   BiX,
// } from "react-icons/bi";
// import logo from "../assets/logo2.png";
// import useAuthStore from "../store/useAuthStore";
// import useCartStore from "../store/useCartStore";
// import useWishlistStore from "../store/useWishlistStore";
// import useSettingsStore from "../store/useSettingsStore";

// // ===== NAV LINKS =====
// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "Puja Samagri", href: "/puja-samagri" },
//   { label: "Daily Idols", href: "/idols" },
//   { label: "Mala & Spiritual", href: "/rudraksha" },
//   { label: "Puja Kits", href: "/puja-kits" },
//   { label: "Gifting", href: "/festivals" },
//   { label: "Festivals", href: "/festivals" },
// ];

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { token, logout } = useAuthStore();
//   const {
//     totalItems: cartTotalItems,
//     fetchCart,
//     setUserId,
//     resetCart,
//     openDrawer,
//   } = useCartStore();
//   const { fetchWishlist, resetWishlist } = useWishlistStore();
//   const { settings } = useSettingsStore();

//   const siteName = settings?.siteName || "PujaHetu";
//   const siteLogo = settings?.siteLogo || logo;

//   useEffect(() => {
//     const initUserData = async () => {
//       const token = useAuthStore.getState().token;
//       if (!token) return;
//       const user = JSON.parse(localStorage.getItem("user") || "{}");
//       const userId = user.id || user._id || localStorage.getItem("cartUserId");
//       if (userId) {
//         setUserId(userId);
//         await fetchCart(userId);
//       }
//       await fetchWishlist();
//     };
//     initUserData();
//   }, [token]);

//   const handleLogout = () => {
//     logout();
//     resetCart();
//     resetWishlist();
//     navigate("/login");
//   };

//   const handleAccountClick = (e) => {
//     e.preventDefault();
//     if (!token) navigate("/login");
//     else navigate("/account");
//   };

//   return (
//     <header className="w-full relative z-40">

//       {/* ============================================================
//           🔴 TOP STRIP — Auto-scrolling marquee (Dark Red)
//           ============================================================ */}
//       <div className="w-full bg-[#5A1F1F] text-[#F5EBDD] text-[11px] sm:text-xs overflow-hidden">
//         <div className="marquee-track py-1.5 flex items-center gap-10 whitespace-nowrap">
//           {[1, 2].map((group) => (
//             <div key={group} className="flex items-center gap-10 shrink-0">
//               <span className="flex items-center gap-1.5">
//                 <span className="text-[#FFD700]">✓</span>
//                 Free Shipping on Orders Above ₹999
//               </span>
//               <span className="flex items-center gap-1.5">
//                 <span className="text-[#FFD700]">✓</span> Easy Returns
//               </span>
//               <span className="flex items-center gap-1.5">
//                 <span className="text-[#FFD700]">✓</span> Secure Payments
//               </span>
//               <Link
//                 to="/tracking"
//                 className="hover:text-[#FFD700] transition-colors flex items-center gap-1"
//               >
//                 Track Order <span>→</span>
//               </Link>
//               <span className="flex items-center gap-1.5">
//                 <span className="text-[#FFD700]">✓</span> 100% Authentic Products
//               </span>
//               <span className="flex items-center gap-1.5">
//                 <span className="text-[#FFD700]">✓</span> Trusted by Lakhs of Families
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ============================================================
//           🤍 MAIN ROW — Logo | Search | Buttons (Ivory BG)
//           ============================================================ */}
//       <div className="w-full bg-[#F5EBDD]">
//         <div className="max-w-8xl mx-auto px-4 sm:px-6 py-3">
//           <div className="flex items-center justify-between gap-4">

//             {/* LOGO — LEFT */}
//             <Link to="/" className="flex items-center shrink-0">
//               <img
//                 src={siteLogo}
//                 alt={siteName}
//                 className="h-12 sm:h-14 md:h-16 object-contain"
//                 onError={(e) => {
//                   e.target.src = logo;
//                 }}
//               />
//             </Link>

//             {/* SEARCH BAR — CENTER */}
//             <div className="hidden md:flex flex-1 max-w-xl mx-4">
//               <div className="w-full flex items-center bg-white border border-[#5A1F1F]/30 rounded-md overflow-hidden shadow-sm">
//                 <input
//                   type="text"
//                   placeholder="Search for puja items, idols, incenses..."
//                   className="w-full px-4 py-2 text-sm text-[#20231F] placeholder-[#6B5038] bg-transparent outline-none"
//                 />
//                 <button
//                   className="px-4 py-2 text-[#5A1F1F] hover:text-[#3D0F0F] transition-colors"
//                   aria-label="Search"
//                 >
//                   <BiSearch className="text-lg" />
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT BUTTONS — DARK RED STYLING */}
//             <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
//               {/* 🔴 LOGIN / ACCOUNT BUTTON (Dark Red) */}
//               <button
//                 onClick={handleAccountClick}
//                 className="flex items-center gap-2 text-sm font-medium text-[#5A1F1F] border border-[#5A1F1F]/40 rounded-md px-3 py-1.5 hover:bg-[#5A1F1F] hover:text-[#F5EBDD] transition-all duration-200"
//               >
//                 <BiUser className="text-lg" />
//                 <span className="hidden sm:inline">
//                   {token ? "Account" : "Login"} 
//                 </span>
//               </button>

//               {/* 🔴 CART BUTTON (Dark Red) */}
//               <button
//                 onClick={openDrawer}
//                 className="relative flex items-center gap-2 text-sm font-medium text-[#5A1F1F] border border-[#5A1F1F]/40 rounded-md px-3 py-1.5 hover:bg-[#5A1F1F] hover:text-[#F5EBDD] transition-all duration-200"
//               >
//                 <BiShoppingBag className="text-lg" />
//                 <span className="hidden sm:inline">Cart</span>
//                 {cartTotalItems > 0 && (
//                   <span className="absolute -top-1.5 -right-1.5 bg-[#5A1F1F] text-[#F5EBDD] text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center border border-[#F5EBDD]">
//                     {cartTotalItems}
//                   </span>
//                 )}
//               </button>

//               {/* 🔴 MOBILE MENU BUTTON */}
//               <button
//                 className="lg:hidden text-[#5A1F1F] hover:text-[#3D0F0F] text-2xl p-1 transition-colors"
//                 onClick={() => setIsMobileMenuOpen(true)}
//                 aria-label="Menu"
//               >
//                 <BiMenu />
//               </button>
//             </div>
//           </div>

//           {/* Mobile Search Bar */}
//           <div className="flex md:hidden mt-3 items-center bg-white border border-[#5A1F1F]/30 rounded-md overflow-hidden">
//             <input
//               type="text"
//               placeholder="Search for puja items, idols..."
//               className="w-full px-4 py-2.5 text-sm text-[#20231F] placeholder-[#6B5038] bg-transparent outline-none"
//             />
//             <button className="px-4 py-2.5 text-[#5A1F1F]">
//               <BiSearch className="text-lg" />
//             </button>
//           </div>
//         </div>

//         {/* ============================================================
//             NAV LINKS ROW — NO UNDERLINE & NORMAL FONT WEIGHT (NO BOLD)
//             ============================================================ */}
//         <nav className="hidden lg:block border-t border-[#5A1F1F]/20">
//           <ul className="max-w-8xl mx-auto px-4 flex items-center justify-center gap-8 xl:gap-10 py-2.5 text-sm font-medium">
//             {navLinks.map((link) => {
//               const isActive = location.pathname === link.href;
//               return (
//                 <li key={link.label}>
//                   <Link
//                     to={link.href}
//                     className={`no-underline transition-colors ${
//                       isActive
//                         ? "text-[#5A1F1F]"
//                         : "text-gray-700 hover:text-[#5A1F1F]"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>

//       {/* ============================================================
//           MOBILE SIDEBAR
//           ============================================================ */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 flex">
//           <div
//             className="fixed inset-0 bg-black/60 transition-opacity"
//             onClick={() => setIsMobileMenuOpen(false)}
//           ></div>
//           <div className="relative w-4/5 max-w-sm bg-[#F5EBDD] text-[#20231F] h-full shadow-xl flex flex-col z-10 animate-slideIn">
//             <div className="flex items-center justify-between px-5 py-4 border-b border-[#5A1F1F]/20">
//               <img
//                 src={siteLogo}
//                 alt={siteName}
//                 className="h-12 object-contain"
//                 onError={(e) => {
//                   e.target.src = logo;
//                 }}
//               />
//               <button
//                 className="text-[#5A1F1F] text-2xl focus:outline-none hover:text-[#3D0F0F] transition-colors"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <BiX />
//               </button>
//             </div>
//             <div className="flex-1 overflow-y-auto py-4 px-5 space-y-3">
//               <ul className="space-y-1 font-medium text-[#6B5038]">
//                 {navLinks.map((link) => {
//                   const isActive = location.pathname === link.href;
//                   return (
//                     <li key={link.label}>
//                       <Link
//                         to={link.href}
//                         className={`block py-3 border-b border-[#5A1F1F]/10 no-underline transition-colors ${
//                           isActive
//                             ? "text-[#5A1F1F]"
//                             : "text-[#6B5038] hover:text-[#5A1F1F]"
//                         }`}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {link.label}
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>

//               <div className="pt-4 border-t border-[#5A1F1F]/20 space-y-1 text-[#6B5038] font-medium">
//                 <button
//                   onClick={(e) => {
//                     setIsMobileMenuOpen(false);
//                     handleAccountClick(e);
//                   }}
//                   className="flex items-center gap-3 cursor-pointer text-[#5A1F1F] hover:text-[#3D0F0F] w-full text-left bg-transparent border-none py-2.5 transition-colors"
//                 >
//                   <BiUser className="text-2xl text-[#5A1F1F]" />
//                   <span>{token ? "Account" : "Login"}</span>
//                 </button>
//                 <button
//                   onClick={() => {
//                     setIsMobileMenuOpen(false);
//                     openDrawer();
//                   }}
//                   className="flex items-center justify-between cursor-pointer text-[#5A1F1F] hover:text-[#3D0F0F] py-2.5 w-full text-left bg-transparent border-none transition-colors"
//                 >
//                   <div className="flex items-center gap-3">
//                     <BiShoppingBag className="text-2xl text-[#5A1F1F]" />
//                     Cart
//                   </div>
//                   {cartTotalItems > 0 && (
//                     <span className="bg-[#5A1F1F] text-[#F5EBDD] text-xs px-2 py-0.5 rounded-full font-bold">
//                       {cartTotalItems}
//                     </span>
//                   )}
//                 </button>
//                 {token && (
//                   <button
//                     onClick={() => {
//                       setIsMobileMenuOpen(false);
//                       handleLogout();
//                     }}
//                     className="flex items-center gap-3 cursor-pointer text-[#5A1F1F] hover:text-[#3D0F0F] w-full text-left bg-transparent border-none py-2.5 transition-colors"
//                   >
//                     <span>Logout</span>
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes slideIn {
//           from { transform: translateX(-100%); }
//           to { transform: translateX(0); }
//         }
//         .animate-slideIn {
//           animation: slideIn 0.25s ease-out;
//         }
//         @keyframes marquee {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .marquee-track {
//           animation: marquee 25s linear infinite;
//         }
//         .marquee-track:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </header>
//   );
// }

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BiSearch,
  BiUser,
  BiShoppingBag,
  BiMenu,
  BiX,
} from "react-icons/bi";
import logo from "../assets/logo2.png";
import useAuthStore from "../store/useAuthStore";
import useCartStore from "../store/useCartStore";
import useWishlistStore from "../store/useWishlistStore";
import useSettingsStore from "../store/useSettingsStore";

// ===== NAV LINKS =====
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Puja Samagri", href: "/puja-samagri" },
  { label: "Daily Idols", href: "/idols" },
  { label: "Mala & Spiritual", href: "/rudraksha" },
  { label: "Puja Kits", href: "/puja-kits" },
  { label: "Gifting", href: "/festivals" },
  { label: "Festivals", href: "/festivals" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search toggle ke liye
  const searchInputRef = useRef(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  const { token, logout } = useAuthStore();
  const {
    totalItems: cartTotalItems,
    fetchCart,
    setUserId,
    resetCart,
    openDrawer,
  } = useCartStore();
  const { fetchWishlist, resetWishlist } = useWishlistStore();
  const { settings } = useSettingsStore();

  const siteName = settings?.siteName || "PujaHetu";
  const siteLogo = settings?.siteLogo || logo;

  useEffect(() => {
    const initUserData = async () => {
      const token = useAuthStore.getState().token;
      if (!token) return;
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const userId = user.id || user._id || localStorage.getItem("cartUserId");
      if (userId) {
        setUserId(userId);
        await fetchCart(userId);
      }
      await fetchWishlist();
    };
    initUserData();
  }, [token]);

  // Search focus logic
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleLogout = () => {
    logout();
    resetCart();
    resetWishlist();
    navigate("/login");
  };

  const handleAccountClick = (e) => {
    e.preventDefault();
    if (!token) navigate("/login");
    else navigate("/account");
  };

  return (
    <header className="w-full relative z-40 shadow-sm">

      {/* ============================================================
          🔴 TOP STRIP — Dark (No Change)
          ============================================================ */}
      <div className="w-full bg-[#5A1F1F] text-[#F5EBDD] text-[11px] sm:text-xs overflow-hidden">
        <div className="marquee-track py-1.5 flex items-center gap-10 whitespace-nowrap">
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center gap-10 shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="text-[#FFD700]">✓</span>
                Free Shipping on Orders Above ₹999
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#FFD700]">✓</span> Easy Returns
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#FFD700]">✓</span> Secure Payments
              </span>
              <Link
                to="/tracking"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-1"
              >
                Track Order <span>→</span>
              </Link>
              <span className="flex items-center gap-1.5">
                <span className="text-[#FFD700]">✓</span> 100% Authentic Products
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#FFD700]">✓</span> Trusted by Lakhs of Families
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================
          🤍 MAIN ROW — Logo | Nav Links | Search Icon | Buttons (White BG)
          ============================================================ */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">

            {/* LOGO — LEFT */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={siteLogo}
                alt={siteName}
                className="h-10 sm:h-12 md:h-14 object-contain"
                onError={(e) => {
                  e.target.src = logo;
                }}
              />
            </Link>

            {/* 🔥 NAV LINKS — CENTER (Yahan add kiye hain) */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#5A1F1F] font-bold"
                        : "text-gray-700 hover:text-[#5A1F1F]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT ICONS & BUTTONS */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
              {/* 🔥 SEARCH ICON & EXPANDABLE BAR (Desktop) */}
              <div className="hidden md:flex items-center relative">
                {/* Agar search open hai toh input box dikhao */}
                <div className={`flex items-center bg-gray-50 border border-gray-300 rounded-md overflow-hidden transition-all duration-300 ${isSearchOpen ? "w-48 lg:w-64 px-3 py-1.5 opacity-100 mr-2" : "w-0 opacity-0 border-transparent p-0"}`}>
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    className="w-full text-sm bg-transparent outline-none text-gray-800"
                  />
                  <button onClick={() => setIsSearchOpen(false)} className="text-gray-500 hover:text-red-500 ml-1">
                    <BiX className="text-lg" />
                  </button>
                </div>
                
                {/* Search Icon Button */}
                {!isSearchOpen && (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="text-[#5A1F1F] hover:text-[#3D0F0F] p-1.5 transition-colors"
                    aria-label="Search"
                  >
                    <BiSearch className="text-xl" />
                  </button>
                )}
              </div>

              {/* Login / Account Button */}
              <button
                onClick={handleAccountClick}
                className="flex items-center gap-2 text-sm font-medium text-[#5A1F1F] border border-[#5A1F1F]/40 rounded-md px-3 py-1.5 hover:bg-[#5A1F1F] hover:text-white transition-all duration-200 shadow-sm"
              >
                <BiUser className="text-lg" />
                <span className="hidden sm:inline">
                  {token ? "Account" : "Login"} 
                </span>
              </button>

              {/* Cart Button */}
              <button
                onClick={openDrawer}
                className="relative flex items-center gap-2 text-sm font-medium text-[#5A1F1F] border border-[#5A1F1F]/40 rounded-md px-3 py-1.5 hover:bg-[#5A1F1F] hover:text-white transition-all duration-200 shadow-sm"
              >
                <BiShoppingBag className="text-lg" />
                <span className="hidden sm:inline">Cart</span>
                {cartTotalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#5A1F1F] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center border border-white">
                    {cartTotalItems}
                  </span>
                )}
              </button>

              {/* Menu Button (Mobile) */}
              <button
                className="lg:hidden text-[#5A1F1F] hover:text-[#3D0F0F] text-2xl p-1 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Menu"
              >
                <BiMenu />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="flex md:hidden mt-3 items-center bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search for puja items..."
              className="w-full px-4 py-2.5 text-sm text-[#20231F] placeholder-gray-500 bg-transparent outline-none"
            />
            <button className="px-4 py-2.5 bg-[#5A1F1F] text-white hover:bg-[#3D0F0F]">
              <BiSearch className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE SIDEBAR
          ============================================================ */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative w-4/5 max-w-sm bg-white text-[#20231F] h-full shadow-2xl flex flex-col z-10 animate-slideIn">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <img
                src={siteLogo}
                alt={siteName}
                className="h-12 object-contain"
                onError={(e) => {
                  e.target.src = logo;
                }}
              />
              <button
                className="text-[#5A1F1F] text-2xl focus:outline-none hover:text-[#3D0F0F] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BiX />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4 px-5 space-y-3">
              <ul className="space-y-1 font-medium text-gray-700">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className={`block py-3 border-b border-gray-200 no-underline transition-colors ${
                          isActive
                            ? "text-[#5A1F1F]"
                            : "text-gray-700 hover:text-[#5A1F1F]"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-4 border-t border-gray-200 space-y-1 text-gray-700 font-medium">
                <button
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleAccountClick(e);
                  }}
                  className="flex items-center gap-3 cursor-pointer text-[#5A1F1F] hover:text-[#3D0F0F] w-full text-left bg-transparent border-none py-2.5 transition-colors"
                >
                  <BiUser className="text-2xl" />
                  <span>{token ? "Account" : "Login"}</span>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openDrawer();
                  }}
                  className="flex items-center justify-between cursor-pointer text-[#5A1F1F] hover:text-[#3D0F0F] py-2.5 w-full text-left bg-transparent border-none transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <BiShoppingBag className="text-2xl" />
                    Cart
                  </div>
                  {cartTotalItems > 0 && (
                    <span className="bg-[#5A1F1F] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                      {cartTotalItems}
                    </span>
                  )}
                </button>
                {token && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center gap-3 cursor-pointer text-[#5A1F1F] hover:text-[#3D0F0F] w-full text-left bg-transparent border-none py-2.5 transition-colors"
                  >
                    <span>Logout</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.25s ease-out;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </header>
  );
}

export default Navbar;