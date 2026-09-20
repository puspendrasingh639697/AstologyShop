


// // // import React, { useState, useEffect } from "react";
// // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX } from "react-icons/bi";
// // // import headerBg from "../assets/haderbener.png";
// // // import useAuthStore from "../store/useAuthStore";
// // // import useCartStore from "../store/useCartStore";
// // // import useWishlistStore from "../store/useWishlistStore";

// // // const navLinks = [
// // //     { label: "Puja Samagri", href: "/puja-samagri" },
// // //     { label: "Puja Kits", href: "/puja-kits" },
// // //     { label: "Yantra", href: "/yantra" },
// // //     { label: "Rudraksha", href: "/rudraksha" },
// // //     { label: "Gemstones", href: "/gemstones" },
// // //     { label: "Idols", href: "/idols" },
// // //     { label: "Remedies", href: "/remedies" },
// // //     { label: "Festivals", href: "/festivals" },
// // //     { label: "Blogs", href: "/blogs" },
// // // ];

// // // function Navbar() {
// // //     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //     const location = useLocation(); 
// // //     const navigate = useNavigate();
    
// // //     const { token, logout } = useAuthStore();
// // //     const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
// // //     const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
    
// // //     const messages = [
// // //         "✨ 100% Cashback available upto ₹500",
// // //         "🕉️ Free delivery on orders over ₹299",
// // //         "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
// // //     ];
    
// // //     const [currentIndex, setCurrentIndex] = useState(0);
// // //     const wishlistCount = getWishlistCount();

// // //     useEffect(() => {
// // //         const timer = setInterval(() => {
// // //             setCurrentIndex((prevIndex) => prevIndex === messages.length - 1 ? 0 : prevIndex + 1);
// // //         }, 3000);
// // //         return () => clearInterval(timer);
// // //     }, [messages.length]);

// // //     useEffect(() => {
// // //         const initUserData = async () => {
// // //             const token = useAuthStore.getState().token; // Direct store se latest token lein
            
// // //             // Agar token nahi hai toh yahin se return ho jayein (401 error nahi aayegi)
// // //             if (!token) return;

// // //             const user = JSON.parse(localStorage.getItem('user') || '{}');
// // //             const userId = user.id || user._id || localStorage.getItem('cartUserId');
            
// // //             if (userId) {
// // //                 setUserId(userId);
// // //                 await fetchCart(userId);
// // //             }
            
// // //             // Wishlist fetch sirf tabhi ho jab token ho
// // //             await fetchWishlist();
// // //         };
        
// // //         initUserData();
// // //     }, [token]);

// // //     const handleLogout = () => {
// // //         logout();
// // //         resetCart();
// // //         resetWishlist();
// // //         navigate("/login");
// // //     };

// // //     const handleAccountClick = (e) => {
// // //         e.preventDefault();
// // //         if (!token) {
// // //             navigate("/login");
// // //         } else {
// // //             navigate("/account");
// // //         }
// // //     };

// // //     return (
// // //         <header className="w-full relative shadow-md font-sans">
// // //             <div className="w-full bg-[#8c0a15] text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm relative z-50">
// // //                 <div className="whitespace-nowrap animate-scroll">
// // //                     {messages.map((msg, index) => (
// // //                         <span key={index} className="mx-8">{msg}</span>
// // //                     ))}
// // //                 </div>
// // //             </div>

// // //             <div className="w-full bg-cover bg-center px-4 md:px-10 py-5 text-[#4a2e18] relative" style={{ backgroundImage: `url(${headerBg})` }}>
// // //                 <div className="relative z-10">
// // //                     <div className="flex items-center justify-between gap-4">
// // //                         <Link to="/" className="flex items-center">
// // //                             <img src="https://japam.in/cdn/shop/files/PhotoshopPreview_Image-removebg-preview.png?v=1772086024&width=60" alt="Puja Hetu Logo" className="h-10 md:h-12 object-contain" />
// // //                         </Link>

// // //                         <div className="hidden md:flex items-center bg-white rounded-md px-3 py-1.5 w-72 lg:w-96 text-black shadow-inner border-2 border-amber-600/50">
// // //                             <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
// // //                             <button className="text-black-600 hover:text-black text-lg"><BiSearch /></button>
// // //                         </div>

// // //                         <div className="flex items-center gap-5">
// // //                             <button onClick={handleAccountClick} className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors bg-transparent border-none">
// // //                                 <BiUser className="text-lg" /> <span>{token ? "Account" : "Login"}</span>
// // //                             </button>

// // //                             <Link to="/wishlist" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors relative">
// // //                                 <BiHeart className="text-lg" /> <span>Wishlist</span>
// // //                                 {wishlistCount > 0 && (
// // //                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{wishlistCount}</span>
// // //                                 )}
// // //                             </Link>

// // //                             <Link to="/cart" className="relative flex items-center gap-1 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
// // //                                 <BiShoppingBag className="text-xl" />
// // //                                 <span className="hidden sm:inline">Cart</span>
// // //                                 {cartTotalItems > 0 && (
// // //                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{cartTotalItems}</span>
// // //                                 )}
// // //                             </Link>

// // //                             {token && (
// // //                                 <button onClick={handleLogout} className="hidden sm:inline-block text-xs bg-red-700 text-white px-2.5 py-1 rounded font-semibold hover:bg-red-800 transition">Logout</button>
// // //                             )}

// // //                             <button className="md:hidden text-[#4a2e18] text-2xl focus:outline-none" onClick={() => setIsMobileMenuOpen(true)}><BiMenu /></button>
// // //                         </div>
// // //                     </div>

// // //                     <div className="flex md:hidden mt-3 items-center bg-white rounded-md px-3 py-1.5 text-black shadow-inner border border-amber-600">
// // //                         <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
// // //                         <button className="text-black-600 text-lg"><BiSearch /></button>
// // //                     </div>

// // //                     <nav className="hidden md:flex justify-center border-t-2 border-[#4a2e18]/30 mt-4 pt-3">
// // //                         <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 font-bold text-sm tracking-wide text-[#4a2e18]">
// // //                             {navLinks.map((link) => {
// // //                                 const isActive = location.pathname === link.href;
// // //                                 return (
// // //                                     <li key={link.label}>
// // //                                         <Link to={link.href} className={`transition-colors pb-1 ${isActive ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-amber-900"}`}>{link.label}</Link>
// // //                                     </li>
// // //                                 );
// // //                             })}
// // //                         </ul>
// // //                     </nav>
// // //                 </div>
// // //             </div>

// // //             {isMobileMenuOpen && (
// // //                 <div className="fixed inset-0 z-50 flex">
// // //                     <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
// // //                     <div className="relative w-4/5 max-w-sm bg-white text-black-800 h-full shadow-xl flex flex-col z-10">
// // //                         <div className="flex items-center justify-between px-5 py-4 border-b border-black-200 bg-black-50">
// // //                             <span className="font-bold text-lg text-[#8c0a15]">Menu</span>
// // //                             <button className="text-black-600 text-2xl focus:outline-none hover:text-black" onClick={() => setIsMobileMenuOpen(false)}><BiX /></button>
// // //                         </div>
// // //                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
// // //                             <ul className="space-y-3 font-semibold">
// // //                                 {navLinks.map((link) => {
// // //                                     const isActive = location.pathname === link.href;
// // //                                     return (
// // //                                         <li key={link.label}>
// // //                                             <Link to={link.href} className={`block border-b border-black-100 pb-2 transition-colors ${isActive ? "text-[#8c0a15] font-bold" : "hover:text-[#8c0a15]"}`} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
// // //                                         </li>
// // //                                     );
// // //                                 })}
// // //                             </ul>
// // //                             <div className="pt-4 border-t border-black-200 space-y-3 font-semibold text-black-700">
// // //                                 <button onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }} className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none">
// // //                                     <BiUser className="text-xl text-[#8c0a15]" /> <span>{token ? "Account" : "Login / Register"}</span>
// // //                                 </button>
// // //                                 <Link to="/wishlist" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
// // //                                     <div className="flex items-center gap-3"><BiHeart className="text-xl text-[#8c0a15]" /> Wishlist</div>
// // //                                     {wishlistCount > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>}
// // //                                 </Link>
// // //                                 <Link to="/cart" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
// // //                                     <div className="flex items-center gap-3"><BiShoppingBag className="text-xl text-[#8c0a15]" /> Cart</div>
// // //                                     {cartTotalItems > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartTotalItems}</span>}
// // //                                 </Link>
// // //                                 {token && (
// // //                                     <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none pt-2"><span>Logout</span></button>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             )}
// // //         </header>
// // //     );
// // // }

// // // export default Navbar;



// // import React, { useState, useEffect } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX } from "react-icons/bi";
// // // import headerBg from "../assets/haderbener.png"; // REMOVED: Background image removed
// // import useAuthStore from "../store/useAuthStore";
// // import useCartStore from "../store/useCartStore";
// // import useWishlistStore from "../store/useWishlistStore";

// // const navLinks = [
// //     { label: "Puja Samagri", href: "/puja-samagri" },
// //     { label: "Puja Kits", href: "/puja-kits" },
// //     { label: "Yantra", href: "/yantra" },
// //     { label: "Rudraksha", href: "/rudraksha" },
// //     { label: "Gemstones", href: "/gemstones" },
// //     { label: "Idols", href: "/idols" },
// //     { label: "Remedies", href: "/remedies" },
// //     { label: "Festivals", href: "/festivals" },
// //     { label: "Blogs", href: "/blogs" },
// // ];

// // function Navbar() {
// //     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //     const location = useLocation(); 
// //     const navigate = useNavigate();
    
// //     const { token, logout } = useAuthStore();
// //     const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
// //     const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
    
// //     const messages = [
// //         "✨ 100% Cashback available upto ₹500",
// //         "🕉️ Free delivery on orders over ₹299",
// //         "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
// //     ];
    
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //     const wishlistCount = getWishlistCount();

// //     useEffect(() => {
// //         const timer = setInterval(() => {
// //             setCurrentIndex((prevIndex) => prevIndex === messages.length - 1 ? 0 : prevIndex + 1);
// //         }, 3000);
// //         return () => clearInterval(timer);
// //     }, [messages.length]);

// //     useEffect(() => {
// //         const initUserData = async () => {
// //             const token = useAuthStore.getState().token; 
            
// //             if (!token) return;

// //             const user = JSON.parse(localStorage.getItem('user') || '{}');
// //             const userId = user.id || user._id || localStorage.getItem('cartUserId');
            
// //             if (userId) {
// //                 setUserId(userId);
// //                 await fetchCart(userId);
// //             }
            
// //             await fetchWishlist();
// //         };
        
// //         initUserData();
// //     }, [token]);

// //     const handleLogout = () => {
// //         logout();
// //         resetCart();
// //         resetWishlist();
// //         navigate("/login");
// //     };

// //     const handleAccountClick = (e) => {
// //         e.preventDefault();
// //         if (!token) {
// //             navigate("/login");
// //         } else {
// //             navigate("/account");
// //         }
// //     };

// //     return (
// //         <header className="w-full relative bg-[#fff3df]">
// //             {/* Top Announcement Bar */}
// //             <div className="w-full bg-[#8c0a15] text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm relative z-50">
// //                 <div className="whitespace-nowrap animate-scroll">
// //                     {messages.map((msg, index) => (
// //                         <span key={index} className="mx-8">{msg}</span>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* Main Header - Clean White UI with subtle gradient */}
// //             <div className="w-full bg-gradient-to-b from-white to-[#fff9f5] px-4 md:px-10 py-4 text-[#4a2e18] relative shadow-sm border-b border-black-100">
// //                 <div className="relative z-10 max-w-7xl mx-auto">
// //                     <div className="flex items-center justify-between gap-4">
                        
// //                         {/* LOGO SECTION - Replaced Image with "Puspendra" Text */}
// //                         <Link to="/" className="flex items-center gap-2 group">
// //                             <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#8c0a15] group-hover:text-amber-800 transition-colors">
// //                                 Puspendra
// //                             </span>
// //                         </Link>

// //                         {/* Desktop Search Bar */}
// //                         <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-72 lg:w-96 text-black shadow-sm border border-black-200 focus-within:border-[#8c0a15] focus-within:ring-1 focus-within:ring-[#8c0a15] transition-all">
// //                             <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
// //                             <button className="text-black-500 hover:text-[#8c0a15] text-xl transition-colors"><BiSearch /></button>
// //                         </div>

// //                         {/* Right Side Icons & Actions */}
// //                         <div className="flex items-center gap-5">
// //                             <button onClick={handleAccountClick} className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-[#8c0a15] transition-colors bg-transparent border-none">
// //                                 <BiUser className="text-xl" /> <span>{token ? "Account" : "Login"}</span>
// //                             </button>

// //                             <Link to="/wishlist" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-[#8c0a15] transition-colors relative">
// //                                 <BiHeart className="text-xl" /> <span>Wishlist</span>
// //                                 {wishlistCount > 0 && (
// //                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{wishlistCount}</span>
// //                                 )}
// //                             </Link>

// //                             <Link to="/cart" className="relative flex items-center gap-1 cursor-pointer text-sm font-bold hover:text-[#8c0a15] transition-colors">
// //                                 <BiShoppingBag className="text-2xl" />
// //                                 <span className="hidden sm:inline">Cart</span>
// //                                 {cartTotalItems > 0 && (
// //                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{cartTotalItems}</span>
// //                                 )}
// //                             </Link>

// //                             {token && (
// //                                 <button onClick={handleLogout} className="hidden sm:inline-block text-xs bg-red-700 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-red-800 transition shadow-sm">Logout</button>
// //                             )}

// //                             <button className="md:hidden text-[#4a2e18] text-2xl focus:outline-none" onClick={() => setIsMobileMenuOpen(true)}><BiMenu /></button>
// //                         </div>
// //                     </div>

// //                     {/* Mobile Search Bar */}
// //                     <div className="flex md:hidden mt-3 items-center bg-white rounded-full px-4 py-2 text-black shadow-sm border border-black-200 focus-within:border-[#8c0a15]">
// //                         <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
// //                         <button className="text-black-500 text-lg"><BiSearch /></button>
// //                     </div>

// //                     {/* Desktop Navigation Links */}
// //                     <nav className="hidden md:flex justify-center mt-5 pt-3 border-t border-black-100">
// //                         <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 font-bold text-sm tracking-wide text-[#4a2e18]">
// //                             {navLinks.map((link) => {
// //                                 const isActive = location.pathname === link.href;
// //                                 return (
// //                                     <li key={link.label}>
// //                                         <Link to={link.href} className={`transition-all pb-1 ${isActive ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-[#8c0a15]"}`}>{link.label}</Link>
// //                                     </li>
// //                                 );
// //                             })}
// //                         </ul>
// //                     </nav>
// //                 </div>
// //             </div>

// //             {/* Mobile Sidebar Menu */}
// //             {isMobileMenuOpen && (
// //                 <div className="fixed inset-0 z-50 flex">
// //                     <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
// //                     <div className="relative w-4/5 max-w-sm bg-white text-black-800 h-full shadow-xl flex flex-col z-10">
// //                         <div className="flex items-center justify-between px-5 py-4 border-b border-black-200 bg-black-50">
// //                             <span className="font-extrabold text-xl text-[#8c0a15]">Puspendra</span>
// //                             <button className="text-black-600 text-2xl focus:outline-none hover:text-black" onClick={() => setIsMobileMenuOpen(false)}><BiX /></button>
// //                         </div>
// //                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
// //                             <ul className="space-y-3 font-semibold">
// //                                 {navLinks.map((link) => {
// //                                     const isActive = location.pathname === link.href;
// //                                     return (
// //                                         <li key={link.label}>
// //                                             <Link to={link.href} className={`block border-b border-black-100 pb-2 transition-colors ${isActive ? "text-[#8c0a15] font-bold" : "hover:text-[#8c0a15]"}`} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
// //                                         </li>
// //                                     );
// //                                 })}
// //                             </ul>
// //                             <div className="pt-4 border-t border-black-200 space-y-3 font-semibold text-black-700">
// //                                 <button onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }} className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none">
// //                                     <BiUser className="text-xl text-[#8c0a15]" /> <span>{token ? "Account" : "Login / Register"}</span>
// //                                 </button>
// //                                 <Link to="/wishlist" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
// //                                     <div className="flex items-center gap-3"><BiHeart className="text-xl text-[#8c0a15]" /> Wishlist</div>
// //                                     {wishlistCount > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>}
// //                                 </Link>
// //                                 <Link to="/cart" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
// //                                     <div className="flex items-center gap-3"><BiShoppingBag className="text-xl text-[#8c0a15]" /> Cart</div>
// //                                     {cartTotalItems > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartTotalItems}</span>}
// //                                 </Link>
// //                                 {token && (
// //                                     <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none pt-2"><span>Logout</span></button>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}
// //         </header>
// //     );
// // }

// // export default Navbar;




// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX } from "react-icons/bi";
// import logo from "../assets/Logo.png";
// import useAuthStore from "../store/useAuthStore";
// import useCartStore from "../store/useCartStore";
// import useWishlistStore from "../store/useWishlistStore";

// const navLinks = [
//     { label: "Puja Samagri", href: "/puja-samagri" },
//     { label: "Puja Kits", href: "/puja-kits" },
//     { label: "Yantra", href: "/yantra" },
//     { label: "Rudraksha", href: "/rudraksha" },
//     { label: "Gemstones", href: "/gemstones" },
//     { label: "Idols", href: "/idols" },
//     { label: "Remedies", href: "/remedies" },
//     { label: "Festivals", href: "/festivals" },
//     { label: "Blogs", href: "/blogs" },
// ];

// function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const location = useLocation(); 
//     const navigate = useNavigate();
    
//     const { token, logout } = useAuthStore();
//     const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
//     const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
    
//     const messages = [
//         "✨ 100% Cashback available upto ₹500",
//         "🕉️ Free delivery on orders over ₹299",
//         "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
//     ];
    
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const wishlistCount = getWishlistCount();

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentIndex((prevIndex) => prevIndex === messages.length - 1 ? 0 : prevIndex + 1);
//         }, 3000);
//         return () => clearInterval(timer);
//     }, [messages.length]);

//     useEffect(() => {
//         const initUserData = async () => {
//             const token = useAuthStore.getState().token; 
            
//             if (!token) return;

//             const user = JSON.parse(localStorage.getItem('user') || '{}');
//             const userId = user.id || user._id || localStorage.getItem('cartUserId');
            
//             if (userId) {
//                 setUserId(userId);
//                 await fetchCart(userId);
//             }
            
//             await fetchWishlist();
//         };
        
//         initUserData();
//     }, [token]);

//     const handleLogout = () => {
//         logout();
//         resetCart();
//         resetWishlist();
//         navigate("/login");
//     };

//     const handleAccountClick = (e) => {
//         e.preventDefault();
//         if (!token) {
//             navigate("/login");
//         } else {
//             navigate("/account");
//         }
//     };

//     return (
//         <header className="w-full relative bg-red-500">
//             {/* Top Announcement Bar */}
//             <div className="w-full bg-[#8c0a15] text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm relative z-50">
//                 <div className="whitespace-nowrap animate-scroll">
//                     {messages.map((msg, index) => (
//                         <span key={index} className="mx-8">{msg}</span>
//                     ))}
//                 </div>
//             </div>

//             {/* Main Header - Clean White UI with subtle gradient */}
//             <div className="w-full bg-[#fff3df]  px-4 md:px-10 py-4 text-[#4a2e18] relative shadow-sm border-b border-black-100">
//                 <div className="relative z-10 max-w-7xl mx-auto">
//                     <div className="flex items-center justify-between gap-4">
                        
//                         {/* LOGO SECTION - Local Logo Image (SIZE 3X) */}
//                         <Link to="/" className="flex items-center gap-2 group shrink-0">
//                             <img 
//                                 src={logo} 
//                                 alt="Puspendra Logo" 
//                                 className="h-10 md:h-12 object-contain" 
//                             />
//                         </Link>

//                         {/* Desktop Search Bar */}
//                         <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-72 lg:w-96 text-black shadow-sm border border-black-200 focus-within:border-[#8c0a15] focus-within:ring-1 focus-within:ring-[#8c0a15] transition-all">
//                             <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
//                             <button className="text-black-500 hover:text-[#8c0a15] text-xl transition-colors"><BiSearch /></button>
//                         </div>

//                         {/* Right Side Icons & Actions */}
//                         <div className="flex items-center gap-5">
//                             <button onClick={handleAccountClick} className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-[#8c0a15] transition-colors bg-transparent border-none">
//                                 <BiUser className="text-xl" /> <span>{token ? "Account" : "Login"}</span>
//                             </button>

//                             <Link to="/wishlist" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-[#8c0a15] transition-colors relative">
//                                 <BiHeart className="text-xl" /> <span>Wishlist</span>
//                                 {wishlistCount > 0 && (
//                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{wishlistCount}</span>
//                                 )}
//                             </Link>

//                             <Link to="/cart" className="relative flex items-center gap-1 cursor-pointer text-sm font-bold hover:text-[#8c0a15] transition-colors">
//                                 <BiShoppingBag className="text-2xl" />
//                                 <span className="hidden sm:inline">Cart</span>
//                                 {cartTotalItems > 0 && (
//                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{cartTotalItems}</span>
//                                 )}
//                             </Link>

//                             {token && (
//                                 <button onClick={handleLogout} className="hidden sm:inline-block text-xs bg-red-700 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-red-800 transition shadow-sm">Logout</button>
//                             )}

//                             <button className="md:hidden text-[#4a2e18] text-2xl focus:outline-none" onClick={() => setIsMobileMenuOpen(true)}><BiMenu /></button>
//                         </div>
//                     </div>

//                     {/* Mobile Search Bar */}
//                     <div className="flex md:hidden mt-3 items-center bg-white rounded-full px-4 py-2 text-black shadow-sm border border-black-200 focus-within:border-[#8c0a15]">
//                         <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
//                         <button className="text-black-500 text-lg"><BiSearch /></button>
//                     </div>

//                     {/* Desktop Navigation Links */}
//                     <nav className="hidden md:flex justify-center mt-5 pt-3 border-t border-black-100">
//                         <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 font-bold text-sm tracking-wide text-[#4a2e18]">
//                             {navLinks.map((link) => {
//                                 const isActive = location.pathname === link.href;
//                                 return (
//                                     <li key={link.label}>
//                                         <Link 
//                                             to={link.href} 
//                                             className={`transition-all pb-1 ${
//                                                 isActive 
//                                                     ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" 
//                                                     : "hover:text-[#8c0a15]"
//                                             }`}
//                                         >
//                                             {link.label}
//                                         </Link>
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {/* Mobile Sidebar Menu */}
//             {isMobileMenuOpen && (
//                 <div className="fixed inset-0 z-50 flex">
//                     <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
//                     <div className="relative w-4/5 max-w-sm bg-white text-black-800 h-full shadow-xl flex flex-col z-10">
//                         <div className="flex items-center justify-between px-5 py-4 border-b border-black-200 bg-black-50">
//                             <img src={logo} alt="Puspendra Logo" className="h-12 object-contain" />
//                             <button className="text-black-600 text-2xl focus:outline-none hover:text-black" onClick={() => setIsMobileMenuOpen(false)}><BiX /></button>
//                         </div>
//                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
//                             <ul className="space-y-3 font-semibold">
//                                 {navLinks.map((link) => {
//                                     const isActive = location.pathname === link.href;
//                                     return (
//                                         <li key={link.label}>
//                                             <Link 
//                                                 to={link.href} 
//                                                 className={`block border-b border-black-100 pb-2 transition-colors ${
//                                                     isActive 
//                                                         ? "text-[#8c0a15] font-bold" 
//                                                         : "hover:text-[#8c0a15]"
//                                                 }`} 
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {link.label}
//                                             </Link>
//                                         </li>
//                                     );
//                                 })}
//                             </ul>
//                             <div className="pt-4 border-t border-black-200 space-y-3 font-semibold text-black-700">
//                                 <button onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }} className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none">
//                                     <BiUser className="text-xl text-[#8c0a15]" /> <span>{token ? "Account" : "Login / Register"}</span>
//                                 </button>
//                                 <Link to="/wishlist" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
//                                     <div className="flex items-center gap-3"><BiHeart className="text-xl text-[#8c0a15]" /> Wishlist</div>
//                                     {wishlistCount > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>}
//                                 </Link>
//                                 <Link to="/cart" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
//                                     <div className="flex items-center gap-3"><BiShoppingBag className="text-xl text-[#8c0a15]" /> Cart</div>
//                                     {cartTotalItems > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartTotalItems}</span>}
//                                 </Link>
//                                 {token && (
//                                     <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none pt-2"><span>Logout</span></button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX } from "react-icons/bi";
import logo from "../assets/Logo.png";
import useAuthStore from "../store/useAuthStore";
import useCartStore from "../store/useCartStore";
import useWishlistStore from "../store/useWishlistStore";

const navLinks = [
    { label: "Puja Samagri", href: "/puja-samagri" },
    { label: "Puja Kits", href: "/puja-kits" },
    { label: "Yantra", href: "/yantra" },
    { label: "Rudraksha", href: "/rudraksha" },
    { label: "Gemstones", href: "/gemstones" },
    { label: "Idols", href: "/idols" },
    { label: "Remedies", href: "/remedies" },
    { label: "Festivals", href: "/festivals" },
    { label: "Blogs", href: "/blogs" },
];

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation(); 
    const navigate = useNavigate();
    
    const { token, logout } = useAuthStore();
    const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
    const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
    
    const messages = [
        "✨ 100% Cashback available upto ₹500",
        "🕉️ Free delivery on orders over ₹299",
        "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const wishlistCount = getWishlistCount();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex === messages.length - 1 ? 0 : prevIndex + 1);
        }, 3000);
        return () => clearInterval(timer);
    }, [messages.length]);

    useEffect(() => {
        const initUserData = async () => {
            const token = useAuthStore.getState().token; 
            
            if (!token) return;

            const user = JSON.parse(localStorage.getItem('user') || '{}');
            const userId = user.id || user._id || localStorage.getItem('cartUserId');
            
            if (userId) {
                setUserId(userId);
                await fetchCart(userId);
            }
            
            await fetchWishlist();
        };
        
        initUserData();
    }, [token]);

    const handleLogout = () => {
        logout();
        resetCart();
        resetWishlist();
        navigate("/login");
    };

    const handleAccountClick = (e) => {
        e.preventDefault();
        if (!token) {
            navigate("/login");
        } else {
            navigate("/account");
        }
    };

    return (
        <header className="w-full relative">
            {/* Main Header - Clean White UI matching reference */}
            <div className="w-full bg-[#fff3df]  px-4 md:px-10 pt-4 pb-3 text-[#4a2e18] relative shadow-sm">
                <div className="relative z-10 max-w-7xl mx-auto">
                    
                    {/* Top Row: Logo | Search | Icons */}
                    <div className="flex items-center justify-between gap-4 pb-4">
                        
                        {/* LOGO SECTION */}
                        <Link to="/" className="flex items-center gap-2 group shrink-0">
                            <img 
                                src={logo} 
                                alt="Puspendra Logo" 
                                className="h-10 md:h-14 object-contain" 
                            />
                        </Link>

                        {/* Desktop Search Bar - Wide & Centered */}
                        <div className="hidden md:flex flex-1 max-w-2xl mx-4 items-center bg-white rounded-md px-5 py-2.5 text-black border border- focus-black:border-black focus-within:ring-1 focus-within:ring-[#8c0a15] transition-all">
                            <BiSearch className="text-black text-lg mr-2" />
                            <input 
                                type="text" 
                                placeholder='Search for ...'
                                className="w-full border-none outline-none text-sm bg-transparent" 
                            />
                        </div>

                        {/* Right Side Icons & Actions */}
                        <div className="flex items-center gap-3 md:gap-4">
                            {/* Wishlist Icon (Desktop) */}
                            <Link 
                                to="/wishlist" 
                                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-black hover:border-[#8c0a15] hover:text-[#8c0a15] transition-colors relative"
                            >
                                <BiHeart className="text-lg" />
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
                                        {wishlistCount}
                                    </span>
                                )}
                            </Link>

                            {/* Cart Icon */}
                            <Link 
                                to="/cart" 
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-black hover:border-[#8c0a15] hover:text-[#8c0a15] transition-colors relative"
                            >
                                <BiShoppingBag className="text-lg" />
                                {cartTotalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
                                        {cartTotalItems}
                                    </span>
                                )}
                            </Link>

                            {/* Account / Sign In Button */}
                            <button 
                                onClick={handleAccountClick} 
                                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#8c0a15] border border-[#8c0a15] px-4 py-2 rounded-full hover:bg-[#8c0a15] hover:text-white transition-all"
                            >
                                <BiUser className="text-base" />
                                <span>{token ? "Account" : "Sign In"}</span>
                            </button>

                            {/* Logout (if logged in) */}
                            {token && (
                                <button 
                                    onClick={handleLogout} 
                                    className="hidden sm:inline-block text-xs bg-red-700 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-red-800 transition shadow-sm"
                                >
                                    Logout
                                </button>
                            )}

                            {/* Mobile Menu Toggle */}
                            <button 
                                className="md:hidden text-[#4a2e18] text-2xl focus:outline-none" 
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <BiMenu />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="flex md:hidden mb-3 items-center bg-white rounded-full px-4 py-2 text-black border border-black-300 focus-within:border-[#8c0a15]">
                        <BiSearch className="text-black-400 text-lg mr-2" />
                        <input 
                            type="text" 
                            placeholder='Search for "Gemstone"' 
                            className="w-full border-none outline-none text-sm bg-transparent" 
                        />
                    </div>

                    {/* Bottom Row: Navigation Links | Right CTA */}
                    <div className="flex items-center justify-between border-t border-black-100 pt-3">
                        
                        {/* Desktop Navigation Links - Left Aligned */}
                        <nav className="hidden md:flex items-center">
                            <ul className="flex flex-wrap items-center gap-5 lg:gap-7 font-semibold text-sm tracking-wide text-black-700">
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.href;
                                    return (
                                        <li key={link.label}>
                                            <Link 
                                                to={link.href} 
                                                className={`transition-all pb-1 ${
                                                    isActive 
                                                        ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" 
                                                        : "hover:text-[#8c0a15]"
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Right-side CTA - Consult an Astrologer */}
                        <button className="hidden md:inline-block text-sm font-semibold text-black-800 border border-black-300 px-4 py-2 rounded-md hover:border-[#8c0a15] hover:text-[#8c0a15] transition-all">
                            Contact to Puspendra 
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div className="relative w-4/5 max-w-sm bg-white text-black-800 h-full shadow-xl flex flex-col z-10">
                        <div className="flex items-center justify-between px-5 py-4 border-b border-black-200 bg-black-50">
                            <img src={logo} alt="Puspendra Logo" className="h-10 object-contain" />
                            <button className="text-black-600 text-2xl focus:outline-none hover:text-black" onClick={() => setIsMobileMenuOpen(false)}><BiX /></button>
                        </div>
                        <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
                            <ul className="space-y-3 font-semibold">
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.href;
                                    return (
                                        <li key={link.label}>
                                            <Link 
                                                to={link.href} 
                                                className={`block border-b border-black-100 pb-2 transition-colors ${
                                                    isActive 
                                                        ? "text-[#8c0a15] font-bold" 
                                                        : "hover:text-[#8c0a15]"
                                                }`} 
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="pt-4 border-t border-black-200 space-y-3 font-semibold text-black-700">
                                <button onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }} className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none">
                                    <BiUser className="text-xl text-[#8c0a15]" /> <span>{token ? "Account" : "Login / Register"}</span>
                                </button>
                                <Link to="/wishlist" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="flex items-center gap-3"><BiHeart className="text-xl text-[#8c0a15]" /> Wishlist</div>
                                    {wishlistCount > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>}
                                </Link>
                                <Link to="/cart" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="flex items-center gap-3"><BiShoppingBag className="text-xl text-[#8c0a15]" /> Cart</div>
                                    {cartTotalItems > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartTotalItems}</span>}
                                </Link>
                                {token && (
                                    <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none pt-2"><span>Logout</span></button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;