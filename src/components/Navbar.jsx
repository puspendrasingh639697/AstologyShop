


// // // // import React, { useState, useEffect } from "react";
// // // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // // import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX } from "react-icons/bi";
// // // // import logo from "../assets/Logo.png";
// // // // import useAuthStore from "../store/useAuthStore";
// // // // import useCartStore from "../store/useCartStore";
// // // // import useWishlistStore from "../store/useWishlistStore";

// // // // const navLinks = [
// // // //     { label: "Puja Samagri", href: "/puja-samagri" },
// // // //     { label: "Puja Kits", href: "/puja-kits" },
// // // //     { label: "Yantra", href: "/yantra" },
// // // //     { label: "Rudraksha", href: "/rudraksha" },
// // // //     { label: "Gemstones", href: "/gemstones" },
// // // //     { label: "Idols", href: "/idols" },
// // // //     { label: "Remedies", href: "/remedies" },
// // // //     { label: "Festivals", href: "/festivals" },
// // // //     { label: "Blogs", href: "/blogs" },
// // // // ];

// // // // function Navbar() {
// // // //     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // //     const location = useLocation(); 
// // // //     const navigate = useNavigate();
    
// // // //     const { token, logout } = useAuthStore();
// // // //     const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
// // // //     const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
    
// // // //     const messages = [
// // // //         "✨ 100% Cashback available upto ₹500",
// // // //         "🕉️ Free delivery on orders over ₹299",
// // // //         "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
// // // //     ];
    
// // // //     const [currentIndex, setCurrentIndex] = useState(0);
// // // //     const wishlistCount = getWishlistCount();

// // // //     useEffect(() => {
// // // //         const timer = setInterval(() => {
// // // //             setCurrentIndex((prevIndex) => prevIndex === messages.length - 1 ? 0 : prevIndex + 1);
// // // //         }, 3000);
// // // //         return () => clearInterval(timer);
// // // //     }, [messages.length]);

// // // //     useEffect(() => {
// // // //         const initUserData = async () => {
// // // //             const token = useAuthStore.getState().token; 
            
// // // //             if (!token) return;

// // // //             const user = JSON.parse(localStorage.getItem('user') || '{}');
// // // //             const userId = user.id || user._id || localStorage.getItem('cartUserId');
            
// // // //             if (userId) {
// // // //                 setUserId(userId);
// // // //                 await fetchCart(userId);
// // // //             }
            
// // // //             await fetchWishlist();
// // // //         };
        
// // // //         initUserData();
// // // //     }, [token]);

// // // //     const handleLogout = () => {
// // // //         logout();
// // // //         resetCart();
// // // //         resetWishlist();
// // // //         navigate("/login");
// // // //     };

// // // //     const handleAccountClick = (e) => {
// // // //         e.preventDefault();
// // // //         if (!token) {
// // // //             navigate("/login");
// // // //         } else {
// // // //             navigate("/account");
// // // //         }
// // // //     };

// // // //     return (
// // // //         <header className="w-full relative">
// // // //             {/* Main Header - Clean White UI matching reference */}
// // // //             <div className="w-full bg-[#fff3df]  px-4 md:px-10 pt-4 pb-3 text-[#4a2e18] relative shadow-sm">
// // // //                 <div className="relative z-10 max-w-7xl mx-auto">
                    
// // // //                     {/* Top Row: Logo | Search | Icons */}
// // // //                     <div className="flex items-center justify-between gap-4 pb-4">
                        
// // // //                         {/* LOGO SECTION */}
// // // //                         <Link to="/" className="flex items-center gap-2 group shrink-0">
// // // //                             <img 
// // // //                                 src={logo} 
// // // //                                 alt="Puspendra Logo" 
// // // //                                 className="h-10 md:h-14 object-contain" 
// // // //                             />
// // // //                         </Link>

// // // //                         {/* Desktop Search Bar - Wide & Centered */}
// // // //                         <div className="hidden md:flex flex-1 max-w-2xl mx-4 items-center bg-white rounded-md px-5 py-2.5 text-black border border- focus-black:border-black focus-within:ring-1 focus-within:ring-[#8c0a15] transition-all">
// // // //                             <BiSearch className="text-black text-lg mr-2" />
// // // //                             <input 
// // // //                                 type="text" 
// // // //                                 placeholder='Search for ...'
// // // //                                 className="w-full border-none outline-none text-sm bg-transparent" 
// // // //                             />
// // // //                         </div>

// // // //                         {/* Right Side Icons & Actions */}
// // // //                         <div className="flex items-center gap-3 md:gap-4">
// // // //                             {/* Wishlist Icon (Desktop) */}
// // // //                             <Link 
// // // //                                 to="/wishlist" 
// // // //                                 className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-black hover:border-[#8c0a15] hover:text-[#8c0a15] transition-colors relative"
// // // //                             >
// // // //                                 <BiHeart className="text-lg" />
// // // //                                 {wishlistCount > 0 && (
// // // //                                     <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
// // // //                                         {wishlistCount}
// // // //                                     </span>
// // // //                                 )}
// // // //                             </Link>

// // // //                             {/* Cart Icon */}
// // // //                             <Link 
// // // //                                 to="/cart" 
// // // //                                 className="flex items-center justify-center w-10 h-10 rounded-full border border-black hover:border-[#8c0a15] hover:text-[#8c0a15] transition-colors relative"
// // // //                             >
// // // //                                 <BiShoppingBag className="text-lg" />
// // // //                                 {cartTotalItems > 0 && (
// // // //                                     <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
// // // //                                         {cartTotalItems}
// // // //                                     </span>
// // // //                                 )}
// // // //                             </Link>

// // // //                             {/* Account / Sign In Button */}
// // // //                             <button 
// // // //                                 onClick={handleAccountClick} 
// // // //                                 className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#8c0a15] border border-[#8c0a15] px-4 py-2 rounded-full hover:bg-[#8c0a15] hover:text-white transition-all"
// // // //                             >
// // // //                                 <BiUser className="text-base" />
// // // //                                 <span>{token ? "Account" : "Sign In"}</span>
// // // //                             </button>

// // // //                             {/* Logout (if logged in) */}
// // // //                             {token && (
// // // //                                 <button 
// // // //                                     onClick={handleLogout} 
// // // //                                     className="hidden sm:inline-block text-xs bg-red-700 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-red-800 transition shadow-sm"
// // // //                                 >
// // // //                                     Logout
// // // //                                 </button>
// // // //                             )}

// // // //                             {/* Mobile Menu Toggle */}
// // // //                             <button 
// // // //                                 className="md:hidden text-[#4a2e18] text-2xl focus:outline-none" 
// // // //                                 onClick={() => setIsMobileMenuOpen(true)}
// // // //                             >
// // // //                                 <BiMenu />
// // // //                             </button>
// // // //                         </div>
// // // //                     </div>

// // // //                     {/* Mobile Search Bar */}
// // // //                     <div className="flex md:hidden mb-3 items-center bg-white rounded-full px-4 py-2 text-black border border-black-300 focus-within:border-[#8c0a15]">
// // // //                         <BiSearch className="text-black-400 text-lg mr-2" />
// // // //                         <input 
// // // //                             type="text" 
// // // //                             placeholder='Search for "Gemstone"' 
// // // //                             className="w-full border-none outline-none text-sm bg-transparent" 
// // // //                         />
// // // //                     </div>

// // // //                     {/* Bottom Row: Navigation Links | Right CTA */}
// // // //                     <div className="flex items-center justify-between border-t border-black-100 pt-3">
                        
// // // //                         {/* Desktop Navigation Links - Left Aligned */}
// // // //                         <nav className="hidden md:flex items-center">
// // // //                             <ul className="flex flex-wrap items-center gap-5 lg:gap-7 font-semibold text-sm tracking-wide text-black-700">
// // // //                                 {navLinks.map((link) => {
// // // //                                     const isActive = location.pathname === link.href;
// // // //                                     return (
// // // //                                         <li key={link.label}>
// // // //                                             <Link 
// // // //                                                 to={link.href} 
// // // //                                                 className={`transition-all pb-1 ${
// // // //                                                     isActive 
// // // //                                                         ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" 
// // // //                                                         : "hover:text-[#8c0a15]"
// // // //                                                 }`}
// // // //                                             >
// // // //                                                 {link.label}
// // // //                                             </Link>
// // // //                                         </li>
// // // //                                     );
// // // //                                 })}
// // // //                             </ul>
// // // //                         </nav>

// // // //                         {/* Right-side CTA - Consult an Astrologer */}
// // // //                         <button className="hidden md:inline-block text-sm font-semibold text-black-800 border border-black-300 px-4 py-2 rounded-md hover:border-[#8c0a15] hover:text-[#8c0a15] transition-all">
// // // //                             Contact to Puspendra 
// // // //                         </button>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             {/* Mobile Sidebar Menu */}
// // // //             {isMobileMenuOpen && (
// // // //                 <div className="fixed inset-0 z-50 flex">
// // // //                     <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
// // // //                     <div className="relative w-4/5 max-w-sm bg-white text-black-800 h-full shadow-xl flex flex-col z-10">
// // // //                         <div className="flex items-center justify-between px-5 py-4 border-b border-black-200 bg-black-50">
// // // //                             <img src={logo} alt="Puspendra Logo" className="h-10 object-contain" />
// // // //                             <button className="text-black-600 text-2xl focus:outline-none hover:text-black" onClick={() => setIsMobileMenuOpen(false)}><BiX /></button>
// // // //                         </div>
// // // //                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
// // // //                             <ul className="space-y-3 font-semibold">
// // // //                                 {navLinks.map((link) => {
// // // //                                     const isActive = location.pathname === link.href;
// // // //                                     return (
// // // //                                         <li key={link.label}>
// // // //                                             <Link 
// // // //                                                 to={link.href} 
// // // //                                                 className={`block border-b border-black-100 pb-2 transition-colors ${
// // // //                                                     isActive 
// // // //                                                         ? "text-[#8c0a15] font-bold" 
// // // //                                                         : "hover:text-[#8c0a15]"
// // // //                                                 }`} 
// // // //                                                 onClick={() => setIsMobileMenuOpen(false)}
// // // //                                             >
// // // //                                                 {link.label}
// // // //                                             </Link>
// // // //                                         </li>
// // // //                                     );
// // // //                                 })}
// // // //                             </ul>
// // // //                             <div className="pt-4 border-t border-black-200 space-y-3 font-semibold text-black-700">
// // // //                                 <button onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }} className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none">
// // // //                                     <BiUser className="text-xl text-[#8c0a15]" /> <span>{token ? "Account" : "Login / Register"}</span>
// // // //                                 </button>
// // // //                                 <Link to="/wishlist" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
// // // //                                     <div className="flex items-center gap-3"><BiHeart className="text-xl text-[#8c0a15]" /> Wishlist</div>
// // // //                                     {wishlistCount > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>}
// // // //                                 </Link>
// // // //                                 <Link to="/cart" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
// // // //                                     <div className="flex items-center gap-3"><BiShoppingBag className="text-xl text-[#8c0a15]" /> Cart</div>
// // // //                                     {cartTotalItems > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartTotalItems}</span>}
// // // //                                 </Link>
// // // //                                 {token && (
// // // //                                     <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none pt-2"><span>Logout</span></button>
// // // //                                 )}
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             )}
// // // //         </header>
// // // //     );
// // // // }

// // // // export default Navbar;


// // // import React, { useState, useEffect } from "react";
// // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX } from "react-icons/bi";
// // // import logo from "../assets/Logo.png";
// // // import useAuthStore from "../store/useAuthStore";
// // // import useCartStore from "../store/useCartStore";
// // // import useWishlistStore from "../store/useWishlistStore";
// // // import useSettingsStore from "../store/useSettingsStore";

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
// // //     const { settings } = useSettingsStore();

// // //     const siteName = settings?.siteName || "PujaHetu";
// // //     const siteLogo = settings?.siteLogo || logo;

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
// // //             const token = useAuthStore.getState().token;
// // //             if (!token) return;

// // //             const user = JSON.parse(localStorage.getItem('user') || '{}');
// // //             const userId = user.id || user._id || localStorage.getItem('cartUserId');

// // //             if (userId) {
// // //                 setUserId(userId);
// // //                 await fetchCart(userId);
// // //             }

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
// // //         <header className="w-full relative">
// // //             <div className="w-full px-4 md:px-10 pt-4 pb-3 text-black relative shadow-sm">
// // //                 <div className="relative z-10 max-w-7xl mx-auto">

// // //                     {/* Top Row */}
// // //                     <div className="flex items-center justify-between gap-4 pb-4">

// // //                         {/* ✅ LOGO ONLY — Site Name Text Hata Diya */}
// // //                         <Link to="/" className="flex items-center gap-2 group shrink-0">
// // //                             <img
// // //                                 src={siteLogo}
// // //                                 alt={siteName}
// // //                                 className="h-10 md:h-14 object-contain"
// // //                                 onError={(e) => { e.target.src = logo; }}
// // //                             />
// // //                         </Link>

// // //                         {/* Search Bar */}
// // //                         <div className="hidden md:flex flex-1 max-w-2xl mx-4 items-center bg-white rounded-md px-5 py-2.5 text-black border border- focus-black:border-black focus-within:ring-1 focus-within:ring-[#8c0a15] transition-all">
// // //                             <BiSearch className="text-black text-lg mr-2" />
// // //                             <input
// // //                                 type="text"
// // //                                 placeholder='Search for ...'
// // //                                 className="w-full border-none outline-none text-sm bg-transparent"
// // //                             />
// // //                         </div>

// // //                         {/* Right Icons */}
// // //                         <div className="flex items-center gap-3 md:gap-4">
// // //                             <Link
// // //                                 to="/wishlist"
// // //                                 className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-black hover:border-[#8c0a15] hover:text-[#8c0a15] transition-colors relative"
// // //                             >
// // //                                 <BiHeart className="text-lg" />
// // //                                 {wishlistCount > 0 && (
// // //                                     <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
// // //                                         {wishlistCount}
// // //                                     </span>
// // //                                 )}
// // //                             </Link>

// // //                             <Link
// // //                                 to="/cart"
// // //                                 className="flex items-center justify-center w-10 h-10 rounded-full border border-black hover:border-[#8c0a15] hover:text-[#8c0a15] transition-colors relative"
// // //                             >
// // //                                 <BiShoppingBag className="text-lg" />
// // //                                 {cartTotalItems > 0 && (
// // //                                     <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
// // //                                         {cartTotalItems}
// // //                                     </span>
// // //                                 )}
// // //                             </Link>

// // //                             <button
// // //                                 onClick={handleAccountClick}
// // //                                 className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#8c0a15] border border-[#8c0a15] px-4 py-2 rounded-full hover:bg-[#8c0a15] hover:text-white transition-all"
// // //                             >
// // //                                 <BiUser className="text-base" />
// // //                                 <span>{token ? "Account" : "Sign In"}</span>
// // //                             </button>

// // //                             {token && (
// // //                                 <button
// // //                                     onClick={handleLogout}
// // //                                     className="hidden sm:inline-block text-xs bg-red-700 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-red-800 transition shadow-sm"
// // //                                 >
// // //                                     Logout
// // //                                 </button>
// // //                             )}

// // //                             <button
// // //                                 className="md:hidden text-[#4a2e18] text-2xl focus:outline-none"
// // //                                 onClick={() => setIsMobileMenuOpen(true)}
// // //                             >
// // //                                 <BiMenu />
// // //                             </button>
// // //                         </div>
// // //                     </div>

// // //                     {/* Mobile Search */}
// // //                     <div className="flex md:hidden mb-3 items-center bg-white rounded-full px-4 py-2 text-black border border-black-300 focus-within:border-[#8c0a15]">
// // //                         <BiSearch className="text-black-400 text-lg mr-2" />
// // //                         <input
// // //                             type="text"
// // //                             placeholder='Search for "Gemstone"'
// // //                             className="w-full border-none outline-none text-sm bg-transparent"
// // //                         />
// // //                     </div>

// // //                     {/* Bottom Row */}
// // //                     <div className="flex items-center justify-between border-t border-black-100 pt-3">
// // //                         <nav className="hidden md:flex items-center">
// // //                             <ul className="flex flex-wrap items-center gap-5 lg:gap-7 font-semibold text-sm tracking-wide text-black-700">
// // //                                 {navLinks.map((link) => {
// // //                                     const isActive = location.pathname === link.href;
// // //                                     return (
// // //                                         <li key={link.label}>
// // //                                             <Link
// // //                                                 to={link.href}
// // //                                                 className={`transition-all pb-1 ${
// // //                                                     isActive
// // //                                                         ? "text-[#8c0a15] border-b-2 border-[#8c0a15]"
// // //                                                         : "hover:text-[#8c0a15]"
// // //                                                 }`}
// // //                                             >
// // //                                                 {link.label}
// // //                                             </Link>
// // //                                         </li>
// // //                                     );
// // //                                 })}
// // //                             </ul>
// // //                         </nav>

// // //                         <button className="hidden md:inline-block text-sm font-semibold text-black-800 border border-black-300 px-4 py-2 rounded-md hover:border-[#8c0a15] hover:text-[#8c0a15] transition-all">
// // //                             Contact to Puspendra
// // //                         </button>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Mobile Sidebar */}
// // //             {isMobileMenuOpen && (
// // //                 <div className="fixed inset-0 z-50 flex">
// // //                     <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
// // //                     <div className="relative w-4/5 max-w-sm bg-white text-black-800 h-full shadow-xl flex flex-col z-10">
// // //                         <div className="flex items-center justify-between px-5 py-4 border-b border-black-200 bg-black-50">
// // //                             <img src={siteLogo} alt={siteName} className="h-10 object-contain" onError={(e) => { e.target.src = logo; }} />
// // //                             <button className="text-black-600 text-2xl focus:outline-none hover:text-black" onClick={() => setIsMobileMenuOpen(false)}><BiX /></button>
// // //                         </div>
// // //                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
// // //                             <ul className="space-y-3 font-semibold">
// // //                                 {navLinks.map((link) => {
// // //                                     const isActive = location.pathname === link.href;
// // //                                     return (
// // //                                         <li key={link.label}>
// // //                                             <Link
// // //                                                 to={link.href}
// // //                                                 className={`block border-b border-black-100 pb-2 transition-colors ${
// // //                                                     isActive
// // //                                                         ? "text-[#8c0a15] font-bold"
// // //                                                         : "hover:text-[#8c0a15]"
// // //                                                 }`}
// // //                                                 onClick={() => setIsMobileMenuOpen(false)}
// // //                                             >
// // //                                                 {link.label}
// // //                                             </Link>
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


// // import React, { useState, useEffect, useRef } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX, BiChevronDown } from "react-icons/bi";
// // import logo from "../assets/Logo.png";
// // import useAuthStore from "../store/useAuthStore";
// // import useCartStore from "../store/useCartStore";
// // import useWishlistStore from "../store/useWishlistStore";
// // import useSettingsStore from "../store/useSettingsStore";

// // // ===== NAV STRUCTURE =====
// // const shopLinks = [
// //     { label: "Puja Samagri", href: "/puja-samagri" },
// //     { label: "Puja Kits", href: "/puja-kits" },
// //     { label: "Yantra", href: "/yantra" },
// //     { label: "Rudraksha", href: "/rudraksha" },
// //     { label: "Gemstones", href: "/gemstones" },
// //     { label: "Idols", href: "/idols" },
// //     { label: "Remedies", href: "/remedies" },
// //     { label: "Festivals", href: "/festivals" },
// // ];

// // const navLinks = [
// //     { label: "Home", href: "/" },
// //     { label: "Shop", href: "/shop", dropdown: shopLinks },
// //     { label: "Blogs", href: "/blogs" },
// //     { label: "Contact", href: "/contact" },
// // ];

// // function Navbar() {
// //     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //     const [isSearchOpen, setIsSearchOpen] = useState(false);
// //     const [openDropdown, setOpenDropdown] = useState(null);
// //     const [mobileShopOpen, setMobileShopOpen] = useState(false);
// //     const searchInputRef = useRef(null);
// //     const dropdownRef = useRef(null);
// //     const dropdownTimer = useRef(null);
// //     const location = useLocation();
// //     const navigate = useNavigate();

// //     const { token, logout } = useAuthStore();
// //     const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
// //     const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
// //     const { settings } = useSettingsStore();

// //     const siteName = settings?.siteName || "PujaHetu";
// //     const siteLogo = settings?.siteLogo || logo;

// //     const wishlistCount = getWishlistCount();

// //     // Auto focus search
// //     useEffect(() => {
// //         if (isSearchOpen && searchInputRef.current) {
// //             searchInputRef.current.focus();
// //         }
// //     }, [isSearchOpen]);

// //     // Click outside to close dropdown
// //     useEffect(() => {
// //         const handleClickOutside = (e) => {
// //             if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// //                 setOpenDropdown(null);
// //             }
// //         };
// //         document.addEventListener("mousedown", handleClickOutside);
// //         return () => document.removeEventListener("mousedown", handleClickOutside);
// //     }, []);

// //     useEffect(() => {
// //         setOpenDropdown(null);
// //     }, [location.pathname]);

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

// //     const handleDropdownEnter = (label) => {
// //         if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
// //         setOpenDropdown(label);
// //     };

// //     const handleDropdownLeave = () => {
// //         dropdownTimer.current = setTimeout(() => {
// //             setOpenDropdown(null);
// //         }, 150);
// //     };

// //     return (
// //         <header className="w-full relative bg-white ">
// //             <div className="w-full bg-white px-1 sm:px-2 md:px-3 lg:px-4 py-1 md:py-2">
// //                 <div className="max-w-8xl mx-auto">

// //                     {/* ===== Single Row: Logo | Nav | Icons (EasyDarshan style) ===== */}
// //                     <div className="flex items-center justify-between gap-4">

// //                         {/* LOGO - Medium, flat (EasyDarshan style) */}
// //                         <Link to="/" className="flex items-center shrink-0">
// //                             <img
// //                                 src={siteLogo}
// //                                 alt={siteName}
// //                                 className="h-10 sm:h-11 md:h-12 object-contain"
// //                                 onError={(e) => { e.target.src = logo; }}
// //                             />
// //                         </Link>

// //                         {/* Desktop Nav Links - Center */}
// //                         <nav
// //                             className="hidden lg:flex items-center flex-1 justify-center"
// //                             ref={dropdownRef}
// //                         >
// //                             <ul className="flex items-center gap-8 xl:gap-10 text-[16px]  text-black">
// //                                 {navLinks.map((link) => {
// //                                     const isActive =
// //                                         location.pathname === link.href ||
// //                                         (link.dropdown && link.dropdown.some((sub) => sub.href === location.pathname));

// //                                     // ===== DROPDOWN =====
// //                                     if (link.dropdown) {
// //                                         return (
// //                                             <li
// //                                                 key={link.label}
// //                                                 className="relative"
// //                                                 onMouseEnter={() => handleDropdownEnter(link.label)}
// //                                                 onMouseLeave={handleDropdownLeave}
// //                                             >
// //                                                 <button
// //                                                     className={`flex items-center gap-1 py-2 transition-colors ${
// //                                                         isActive || openDropdown === link.label
// //                                                             ? "text-[#8c0a15]"
// //                                                             : "text-gray-700 hover:text-[#8c0a15]"
// //                                                     }`}
// //                                                 >
// //                                                     {link.label}
// //                                                     <BiChevronDown
// //                                                         className={`text-base transition-transform duration-200 ${
// //                                                             openDropdown === link.label ? "rotate-180" : ""
// //                                                         }`}
// //                                                     />
// //                                                 </button>

// //                                                 {/* Simple Flat Dropdown */}
// //                                                 <div
// //                                                     className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 z-50 transition-all duration-150 origin-top ${
// //                                                         openDropdown === link.label
// //                                                             ? "opacity-100 visible translate-y-0"
// //                                                             : "opacity-0 invisible -translate-y-1"
// //                                                     }`}
// //                                                 >
// //                                                     <div className="bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden py-1.5">
// //                                                         {link.dropdown.map((sub) => {
// //                                                             const subActive = location.pathname === sub.href;
// //                                                             return (
// //                                                                 <Link
// //                                                                     key={sub.label}
// //                                                                     to={sub.href}
// //                                                                     className={`block px-5 py-2.5 text-sm transition-colors ${
// //                                                                         subActive
// //                                                                             ? "text-[#8c0a15] bg-gray-50 font-medium"
// //                                                                             : "text-gray-700 hover:bg-gray-50 hover:text-[#8c0a15]"
// //                                                                     }`}
// //                                                                 >
// //                                                                     {sub.label}
// //                                                                 </Link>
// //                                                             );
// //                                                         })}
// //                                                     </div>
// //                                                 </div>
// //                                             </li>
// //                                         );
// //                                     }

// //                                     // ===== NORMAL LINK =====
// //                                     return (
// //                                         <li key={link.label}>
// //                                             <Link
// //                                                 to={link.href}
// //                                                 className={`block py-2 transition-colors ${
// //                                                     isActive
// //                                                         ? "text-[#8c0a15] font-medium"
// //                                                         : "text-gray-700 hover:text-[#8c0a15]"
// //                                                 }`}
// //                                             >
// //                                                 {link.label}
// //                                             </Link>
// //                                         </li>
// //                                     );
// //                                 })}
// //                             </ul>
// //                         </nav>

// //                         {/* Right Icons */}
// //                         <div className="flex items-center gap-1 sm:gap-2 shrink-0">

// //                             {/* SEARCH ICON */}
// //                             <div className="relative flex items-center">
// //                                 <div
// //                                     className={`hidden md:flex items-center bg-gray-100 border border-gray-200 rounded-md overflow-hidden transition-all duration-300 ${
// //                                         isSearchOpen
// //                                             ? "w-56 lg:w-64 px-4 py-2 opacity-100 mr-1"
// //                                             : "w-0 px-0 py-0 opacity-0 border-transparent"
// //                                     }`}
// //                                 >
// //                                     <BiSearch className="text-black text-lg mr-2 shrink-0" />
// //                                     <input
// //                                         ref={searchInputRef}
// //                                         type="text"
// //                                         placeholder="Search for..."
// //                                         className="w-full border-none outline-none text-sm bg-transparent"
// //                                     />
// //                                     <button
// //                                         onClick={() => setIsSearchOpen(false)}
// //                                         className="text-gray-400 hover:text-[#8c0a15] ml-1 transition-colors"
// //                                     >
// //                                         <BiX className="text-lg text-black " />
// //                                     </button>
// //                                 </div>

// //                                 {!isSearchOpen && (
// //                                     <button
// //                                         onClick={() => setIsSearchOpen(true)}
// //                                         className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#8c0a15] transition-colors"
// //                                         aria-label="Search"
// //                                     >
// //                                         <BiSearch className="text-xl text-black " />
// //                                     </button>
// //                                 )}
// //                             </div>

// //                             {/* Wishlist */}
// //                             <Link
// //                                 to="/wishlist"
// //                                 className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#8c0a15] transition-colors relative"
// //                             >
// //                                 <BiHeart className="text-xl text-black " />
// //                                 {wishlistCount > 0 && (
// //                                     <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
// //                                         {wishlistCount}
// //                                     </span>
// //                                 )}
// //                             </Link>

// //                             {/* Cart */}
// //                             <Link
// //                                 to="/cart"
// //                                 className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#8c0a15] transition-colors relative"
// //                             >
// //                                 <BiShoppingBag className="text-xl text-black " />
// //                                 {cartTotalItems > 0 && (
// //                                     <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
// //                                         {cartTotalItems}
// //                                     </span>
// //                                 )}
// //                             </Link>

// //                             {/* Account / Sign In - Simple Flat Button (EasyDarshan style) */}
// //                             <button
// //                                 onClick={handleAccountClick}
// //                                 className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-white bg-gradient-to-r from-red-800 to-red-600 px-4 py-2 rounded-md hover:bg-[#185a9b] transition-colors ml-1"
// //                             >
// //                                 <BiUser className="text-base" />
// //                                 <span className="whitespace-nowrap">{token ? "Account" : "Login or Signup"}</span>
// //                             </button>

// //                             {/* Logout */}
// //                             {token && (
// //                                 <button
// //                                     onClick={handleLogout}
// //                                     className="hidden sm:inline-block text-xs bg-gradient-to-r from-red-800 to-red-600 text-white px-3 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
// //                                 >
// //                                     Logout
// //                                 </button>
// //                             )}

// //                             {/* Mobile Menu Toggle */}
// //                             <button
// //                                 className="lg:hidden text-gray-700 text-2xl focus:outline-none p-1 hover:text-[#8c0a15] transition-colors"
// //                                 onClick={() => setIsMobileMenuOpen(true)}
// //                             >
// //                                 <BiMenu />
// //                             </button>
// //                         </div>
// //                     </div>

// //                     {/* Mobile Search Bar */}
// //                     <div className="flex md:hidden mt-3 items-center bg-gray-50 rounded-full px-4 py-2.5 border border-gray-200 focus-within:border-[#8c0a15] transition-colors">
// //                         <BiSearch className="text-gray-400 text-lg mr-2" />
// //                         <input
// //                             type="text"
// //                             placeholder='Search for "Gemstone"'
// //                             className="w-full border-none outline-none text-sm bg-transparent"
// //                         />
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* ===== Mobile Sidebar ===== */}
// //             {isMobileMenuOpen && (
// //                 <div className="fixed inset-0 z-50 flex">
// //                     <div
// //                         className="fixed inset-0 bg-black/50 transition-opacity"
// //                         onClick={() => setIsMobileMenuOpen(false)}
// //                     ></div>
// //                     <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10 animate-slideIn">
// //                         <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
// //                             <img
// //                                 src={siteLogo}
// //                                 alt={siteName}
// //                                 className="h-11 object-contain"
// //                                 onError={(e) => { e.target.src = logo; }}
// //                             />
// //                             <button
// //                                 className="text-gray-600 text-2xl focus:outline-none hover:text-[#8c0a15] transition-colors"
// //                                 onClick={() => setIsMobileMenuOpen(false)}
// //                             >
// //                                 <BiX />
// //                             </button>
// //                         </div>
// //                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
// //                             <ul className="space-y-1 font-medium text-gray-700">
// //                                 {navLinks.map((link) => {
// //                                     // Mobile Dropdown
// //                                     if (link.dropdown) {
// //                                         return (
// //                                             <li key={link.label}>
// //                                                 <button
// //                                                     onClick={() => setMobileShopOpen(!mobileShopOpen)}
// //                                                     className="flex items-center justify-between w-full py-3 text-left text-gray-700 hover:text-[#8c0a15] transition-colors border-b border-gray-100"
// //                                                 >
// //                                                     <span>{link.label}</span>
// //                                                     <BiChevronDown
// //                                                         className={`text-xl transition-transform duration-200 ${
// //                                                             mobileShopOpen ? "rotate-180 text-[#8c0a15]" : ""
// //                                                         }`}
// //                                                     />
// //                                                 </button>
// //                                                 <div
// //                                                     className={`overflow-hidden transition-all duration-300 ${
// //                                                         mobileShopOpen ? "max-h-96 pt-2" : "max-h-0"
// //                                                     }`}
// //                                                 >
// //                                                     <ul className="pl-3 space-y-1">
// //                                                         {link.dropdown.map((sub) => {
// //                                                             const subActive = location.pathname === sub.href;
// //                                                             return (
// //                                                                 <li key={sub.label}>
// //                                                                     <Link
// //                                                                         to={sub.href}
// //                                                                         className={`block text-sm py-2 transition-colors ${
// //                                                                             subActive
// //                                                                                 ? "text-[#8c0a15] font-semibold"
// //                                                                                 : "text-gray-600 hover:text-[#8c0a15]"
// //                                                                         }`}
// //                                                                         onClick={() => setIsMobileMenuOpen(false)}
// //                                                                     >
// //                                                                         {sub.label}
// //                                                                     </Link>
// //                                                                 </li>
// //                                                             );
// //                                                         })}
// //                                                     </ul>
// //                                                 </div>
// //                                             </li>
// //                                         );
// //                                     }

// //                                     const isActive = location.pathname === link.href;
// //                                     return (
// //                                         <li key={link.label}>
// //                                             <Link
// //                                                 to={link.href}
// //                                                 className={`block py-3 border-b border-gray-100 transition-colors ${
// //                                                     isActive
// //                                                         ? "text-[#8c0a15] font-semibold"
// //                                                         : "text-gray-700 hover:text-[#8c0a15]"
// //                                                 }`}
// //                                                 onClick={() => setIsMobileMenuOpen(false)}
// //                                             >
// //                                                 {link.label}
// //                                             </Link>
// //                                         </li>
// //                                     );
// //                                 })}
// //                             </ul>

// //                             <div className="pt-4 border-t border-gray-100 space-y-1 text-gray-700 font-medium">
// //                                 <button
// //                                     onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }}
// //                                     className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none py-2.5 transition-colors"
// //                                 >
// //                                     <BiUser className="text-xl text-[#8c0a15]" />
// //                                     <span>{token ? "Account" : "Login / Register"}</span>
// //                                 </button>
// //                                 <Link
// //                                     to="/wishlist"
// //                                     className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15] py-2.5 transition-colors"
// //                                     onClick={() => setIsMobileMenuOpen(false)}
// //                                 >
// //                                     <div className="flex items-center gap-3">
// //                                         <BiHeart className="text-xl text-[#8c0a15]" /> Wishlist
// //                                     </div>
// //                                     {wishlistCount > 0 && (
// //                                         <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
// //                                             {wishlistCount}
// //                                         </span>
// //                                     )}
// //                                 </Link>
// //                                 <Link
// //                                     to="/cart"
// //                                     className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15] py-2.5 transition-colors"
// //                                     onClick={() => setIsMobileMenuOpen(false)}
// //                                 >
// //                                     <div className="flex items-center gap-3">
// //                                         <BiShoppingBag className="text-3xl text-[#8c0a15]" /> Cart
// //                                     </div>
// //                                     {cartTotalItems > 0 && (
// //                                         <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
// //                                             {cartTotalItems}
// //                                         </span>
// //                                     )}
// //                                 </Link>
// //                                 {token && (
// //                                     <button
// //                                         onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }}
// //                                         className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none py-2.5 transition-colors"
// //                                     >
// //                                         <span>Logout</span>
// //                                     </button>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}

// //             <style>{`
// //                 @keyframes slideIn {
// //                     from { transform: translateX(-100%); }
// //                     to { transform: translateX(0); }
// //                 }
// //                 .animate-slideIn {
// //                     animation: slideIn 0.25s ease-out;
// //                 }
// //             `}</style>
// //         </header>
// //     );
// // }

// // export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX, BiChevronDown } from "react-icons/bi";
// import logo from "../assets/Logo.png";
// import useAuthStore from "../store/useAuthStore";
// import useCartStore from "../store/useCartStore";
// import useWishlistStore from "../store/useWishlistStore";
// import useSettingsStore from "../store/useSettingsStore";

// // ===== NAV STRUCTURE =====
// const shopLinks = [
//     { label: "Puja Samagri", href: "/puja-samagri" },
//     { label: "Puja Kits", href: "/puja-kits" },
//     { label: "Yantra", href: "/yantra" },
//     { label: "Rudraksha", href: "/rudraksha" },
//     { label: "Gemstones", href: "/gemstones" },
//     { label: "Idols", href: "/idols" },
//     { label: "Remedies", href: "/remedies" },
//     { label: "Festivals", href: "/festivals" },
// ];

// const navLinks = [
//     { label: "Home", href: "/" },
//     { label: "Shop", href: "/shop", dropdown: shopLinks },
//     { label: "Blogs", href: "/blogs" },
//     { label: "Contact", href: "/contact" },
// ];

// function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const [mobileShopOpen, setMobileShopOpen] = useState(false);
//     const searchInputRef = useRef(null);
//     const dropdownRef = useRef(null);
//     const dropdownTimer = useRef(null);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const { token, logout } = useAuthStore();
//     const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
//     const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
//     const { settings } = useSettingsStore();

//     const siteName = settings?.siteName || "PujaHetu";
//     const siteLogo = settings?.siteLogo || logo;

//     const wishlistCount = getWishlistCount();

//     // Auto focus search
//     useEffect(() => {
//         if (isSearchOpen && searchInputRef.current) {
//             searchInputRef.current.focus();
//         }
//     }, [isSearchOpen]);

//     // Click outside to close dropdown
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//                 setOpenDropdown(null);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     useEffect(() => {
//         setOpenDropdown(null);
//     }, [location.pathname]);

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

//     const handleDropdownEnter = (label) => {
//         if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
//         setOpenDropdown(label);
//     };

//     const handleDropdownLeave = () => {
//         dropdownTimer.current = setTimeout(() => {
//             setOpenDropdown(null);
//         }, 150);
//     };

//     return (
//         <header className="w-full relative bg-[#173B32] ">
//             <div className="w-full bg-[#173B32] px-1 sm:px-2 md:px-3 lg:px-4 py-1 md:py-2">
//                 <div className="max-w-8xl mx-auto">

//                     {/* ===== Single Row: Logo | Nav | Icons (EasyDarshan style) ===== */}
//                     <div className="flex items-center justify-between gap-4">

//                         {/* LOGO - Medium, flat (EasyDarshan style) */}
//                         <Link to="/" className="flex items-center shrink-0">
//                             <img
//                                 src={siteLogo}
//                                 alt={siteName}
//                                 className="h-10 sm:h-11 md:h-12 object-contain"
//                                 onError={(e) => { e.target.src = logo; }}
//                             />
//                         </Link>

//                         {/* Desktop Nav Links - Center */}
//                         <nav
//                             className="hidden lg:flex items-center flex-1 justify-center"
//                             ref={dropdownRef}
//                         >
//                             <ul className="flex items-center gap-8 xl:gap-10 text-[16px]  text-white">
//                                {navLinks.map((link) => {
//                                     const isActive =
//                                         location.pathname === link.href ||
//                                         (link.dropdown && link.dropdown.some((sub) => sub.href === location.pathname));

//                                     // ===== DROPDOWN =====
//                                     if (link.dropdown) {
//                                         return (
//                                             <li
//                                                 key={link.label}
//                                                 className="relative"
//                                                 onMouseEnter={() => handleDropdownEnter(link.label)}
//                                                 onMouseLeave={handleDropdownLeave}
//                                             >
//                                                 <button
//                                                     className={`flex items-center gap-1 py-2 transition-colors ${
//                                                         isActive || openDropdown === link.label
//                                                             ? "text-white"
//                                                             : "text-gray-700 hover:text-[#8c0a15]"
//                                                     }`}
//                                                 >
//                                                     {link.label}
//                                                     <BiChevronDown
//                                                         className={`text-base transition-transform duration-200 ${
//                                                             openDropdown === link.label ? "rotate-180" : ""
//                                                         }`}
//                                                     />
//                                                 </button>

//                                                 {/* Simple Flat Dropdown */}
//                                                 <div
//                                                     className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 z-50 transition-all duration-150 origin-top ${
//                                                         openDropdown === link.label
//                                                             ? "opacity-100 visible translate-y-0"
//                                                             : "opacity-0 invisible -translate-y-1"
//                                                     }`}
//                                                 >
//                                                     <div className="bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden py-1.5">
//                                                         {link.dropdown.map((sub) => {
//                                                             const subActive = location.pathname === sub.href;
//                                                             return (
//                                                                 <Link
//                                                                     key={sub.label}
//                                                                     to={sub.href}
//                                                                     className={`block px-5 py-2.5 text-sm transition-colors ${
//                                                                         subActive
//                                                                             ? "text-[#8c0a15] bg-gray-50 font-medium"
//                                                                             : "text-gray-700 hover:bg-gray-50 hover:text-[#8c0a15]"
//                                                                     }`}
//                                                                 >
//                                                                     {sub.label}
//                                                                 </Link>
//                                                             );
//                                                         })}
//                                                     </div>
//                                                 </div>
//                                             </li>
//                                         );
//                                     }

//                                     // ===== NORMAL LINK =====
//                                     return (
//                                         <li key={link.label}>
//                                             <Link
//                                                 to={link.href}
//                                                 className={`block py-2 transition-colors ${
//                                                     isActive
//                                                         ? "text-[#8c0a15] font-medium"
//                                                         : "text-gray-700 hover:text-[#8c0a15]"
//                                                 }`}
//                                             >
//                                                 {link.label}
//                                             </Link>
//                                         </li>
//                                     );
//                                 })}
//                             </ul>
//                         </nav>

//                         {/* Right Icons */}
//                         <div className="flex items-center gap-1 sm:gap-2 shrink-0">

//                             {/* SEARCH ICON */}
//                             <div className="relative flex items-center">
//                                 <div
//                                     className={`hidden md:flex items-center bg-gray-100 border border-gray-200 rounded-md overflow-hidden transition-all duration-300 ${
//                                         isSearchOpen
//                                             ? "w-56 lg:w-64 px-4 py-2 opacity-100 mr-1"
//                                             : "w-0 px-0 py-0 opacity-0 border-transparent"
//                                     }`}
//                                 >
//                                     <BiSearch className="text-black text-lg mr-2 shrink-0" />
//                                     <input
//                                         ref={searchInputRef}
//                                         type="text"
//                                         placeholder="Search for..."
//                                         className="w-full border-none outline-none text-sm bg-transparent"
//                                     />
//                                     <button
//                                         onClick={() => setIsSearchOpen(false)}
//                                         className="text-gray-400 hover:text-[#8c0a15] ml-1 transition-colors"
//                                     >
//                                         <BiX className="text-lg text-black " />
//                                     </button>
//                                 </div>

//                                 {!isSearchOpen && (
//                                     <button
//                                         onClick={() => setIsSearchOpen(true)}
//                                         className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#8c0a15] transition-colors"
//                                         aria-label="Search"
//                                     >
//                                         <BiSearch className="text-2xl text-black " />
//                                     </button>
//                                 )}
//                             </div>

//                             {/* Wishlist */}
//                             <Link
//                                 to="/wishlist"
//                                 className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#8c0a15] transition-colors relative"
//                             >
//                                 <BiHeart className="text-2xl text-black " />
//                                 {wishlistCount > 0 && (
//                                     <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
//                                         {wishlistCount}
//                                     </span>
//                                 )}
//                             </Link>

//                             {/* Cart */}
//                             <Link
//                                 to="/cart"
//                                 className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#8c0a15] transition-colors relative"
//                             >
//                                 <BiShoppingBag className="text-2xl text-black " />
//                                 {cartTotalItems > 0 && (
//                                     <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
//                                         {cartTotalItems}
//                                     </span>
//                                 )}
//                             </Link>

//                             {/* Account / Sign In - Simple Flat Button (EasyDarshan style) */}
//                             <button
//                                 onClick={handleAccountClick}
//                                 className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-white bg-gradient-to-r from-red-800 to-red-600 px-4 py-2 rounded-md hover:bg-[#185a9b] transition-colors ml-1"
//                             >
//                                 <BiUser className="text-base" />
//                                 <span className="whitespace-nowrap">{token ? "Account" : "Login or Signup"}</span>
//                             </button>

//                             {/* Logout */}
//                             {token && (
//                                 <button
//                                     onClick={handleLogout}
//                                     className="hidden sm:inline-block text-xs bg-gradient-to-r from-red-800 to-red-600 text-white px-3 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
//                                 >
//                                     Logout
//                                 </button>
//                             )}

//                             {/* Mobile Menu Toggle */}
//                             <button
//                                 className="lg:hidden text-gray-700 text-2xl focus:outline-none p-1 hover:text-[#8c0a15] transition-colors"
//                                 onClick={() => setIsMobileMenuOpen(true)}
//                             >
//                                 <BiMenu />
//                             </button>
//                         </div>
//                     </div>

//                     {/* Mobile Search Bar */}
//                     <div className="flex md:hidden mt-3 items-center bg-gray-50 rounded-full px-4 py-2.5 border border-gray-200 focus-within:border-[#8c0a15] transition-colors">
//                         <BiSearch className="text-gray-400 text-lg mr-2" />
//                         <input
//                             type="text"
//                             placeholder='Search for "Gemstone"'
//                             className="w-full border-none outline-none text-sm bg-transparent"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* ===== Mobile Sidebar ===== */}
//             {isMobileMenuOpen && (
//                 <div className="fixed inset-0 z-50 flex">
//                     <div
//                         className="fixed inset-0 bg-black/50 transition-opacity"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     ></div>
//                     <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10 animate-slideIn">
//                         <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
//                             <img
//                                 src={siteLogo}
//                                 alt={siteName}
//                                 className="h-11 object-contain"
//                                 onError={(e) => { e.target.src = logo; }}
//                             />
//                             <button
//                                 className="text-gray-600 text-2xl focus:outline-none hover:text-[#8c0a15] transition-colors"
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                             >
//                                 <BiX />
//                             </button>
//                         </div>
//                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
//                             <ul className="space-y-1 font-medium text-gray-700">
//                                 {navLinks.map((link) => {
//                                     // Mobile Dropdown
//                                     if (link.dropdown) {
//                                         return (
//                                             <li key={link.label}>
//                                                 <button
//                                                     onClick={() => setMobileShopOpen(!mobileShopOpen)}
//                                                     className="flex items-center justify-between w-full py-3 text-left text-gray-700 hover:text-[#8c0a15] transition-colors border-b border-gray-100"
//                                                 >
//                                                     <span>{link.label}</span>
//                                                     <BiChevronDown
//                                                         className={`text-xl transition-transform duration-200 ${
//                                                             mobileShopOpen ? "rotate-180 text-[#8c0a15]" : ""
//                                                         }`}
//                                                     />
//                                                 </button>
//                                                 <div
//                                                     className={`overflow-hidden transition-all duration-300 ${
//                                                         mobileShopOpen ? "max-h-96 pt-2" : "max-h-0"
//                                                     }`}
//                                                 >
//                                                     <ul className="pl-3 space-y-1">
//                                                         {link.dropdown.map((sub) => {
//                                                             const subActive = location.pathname === sub.href;
//                                                             return (
//                                                                 <li key={sub.label}>
//                                                                     <Link
//                                                                         to={sub.href}
//                                                                         className={`block text-sm py-2 transition-colors ${
//                                                                             subActive
//                                                                                 ? "text-[#8c0a15] font-semibold"
//                                                                                 : "text-gray-600 hover:text-[#8c0a15]"
//                                                                         }`}
//                                                                         onClick={() => setIsMobileMenuOpen(false)}
//                                                                     >
//                                                                         {sub.label}
//                                                                     </Link>
//                                                                 </li>
//                                                             );
//                                                         })}
//                                                     </ul>
//                                                 </div>
//                                             </li>
//                                         );
//                                     }

//                                     const isActive = location.pathname === link.href;
//                                     return (
//                                         <li key={link.label}>
//                                             <Link
//                                                 to={link.href}
//                                                 className={`block py-3 border-b border-gray-100 transition-colors ${
//                                                     isActive
//                                                         ? "text-[#8c0a15] font-semibold"
//                                                         : "text-gray-700 hover:text-[#8c0a15]"
//                                                 }`}
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {link.label}
//                                             </Link>
//                                         </li>
//                                     );
//                                 })}
//                             </ul>

//                             {/* ===== Bottom Icons Section ===== */}
//                             <div className="pt-4 border-t border-gray-100 space-y-1 text-gray-700 font-medium">
//                                 <button
//                                     onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }}
//                                     className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none py-2.5 transition-colors"
//                                 >
//                                     <BiUser className="text-2xl text-[#8c0a15]" />   {/* 👈 text-2xl */}
//                                     <span>{token ? "Account" : "Login / Register"}</span>
//                                 </button>
//                                 <Link
//                                     to="/wishlist"
//                                     className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15] py-2.5 transition-colors"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     <div className="flex items-center gap-3">
//                                         <BiHeart className="text-2xl text-[#8c0a15]" />   {/* 👈 text-2xl */}
//                                         Wishlist
//                                     </div>
//                                     {wishlistCount > 0 && (
//                                         <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
//                                             {wishlistCount}
//                                         </span>
//                                     )}
//                                 </Link>
//                                 <Link
//                                     to="/cart"
//                                     className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15] py-2.5 transition-colors"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     <div className="flex items-center gap-3">
//                                         <BiShoppingBag className="text-2xl text-[#8c0a15]" />   {/* 👈 text-2xl (was text-3xl) */}
//                                         Cart
//                                     </div>
//                                     {cartTotalItems > 0 && (
//                                         <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
//                                             {cartTotalItems}
//                                         </span>
//                                     )}
//                                 </Link>
//                                 {token && (
//                                     <button
//                                         onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }}
//                                         className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none py-2.5 transition-colors"
//                                     >
//                                         <span>Logout</span>
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <style>{`
//                 @keyframes slideIn {
//                     from { transform: translateX(-100%); }
//                     to { transform: translateX(0); }
//                 }
//                 .animate-slideIn {
//                     animation: slideIn 0.25s ease-out;
//                 }
//             `}</style>
//         </header>
//     );
// }

// export default Navbar;.



import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BiSearch,
  BiUser,
  BiShoppingBag,
  BiMenu,
  BiX,
} from "react-icons/bi";
import logo from "../assets/Logo.png";
import useAuthStore from "../store/useAuthStore";
import useCartStore from "../store/useCartStore";
import useWishlistStore from "../store/useWishlistStore";
import useSettingsStore from "../store/useSettingsStore";

// ===== NAV LINKS =====
const navLinks = [
  { label: "Puja Samagri", href: "/puja-samagri" },
  { label: "Daily Idols", href: "/idols" },
  { label: "Mala & Spiritual", href: "/rudraksha" },
  { label: "Puja Kits", href: "/puja-kits" },
  { label: "Gifting", href: "/festivals" },
  { label: "Festivals", href: "/festivals" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <header className="w-full relative">

      {/* ============================================================
          🟢 TOP STRIP — Auto-scrolling marquee
          ============================================================ */}
      <div className="w-full bg-[#173B32] text-[#F5EBDD] text-[11px] sm:text-xs overflow-hidden">
        <div className="marquee-track py-1.5 flex items-center gap-10 whitespace-nowrap">
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center gap-10 shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="text-[#B58A3A]">✓</span>
                Free Shipping on Orders Above ₹999
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#B58A3A]">✓</span> Easy Returns
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#B58A3A]">✓</span> Secure Payments
              </span>
              <Link
                to="/tracking"
                className="hover:text-[#B58A3A] transition-colors flex items-center gap-1"
              >
                Track Order <span>→</span>
              </Link>
              <span className="flex items-center gap-1.5">
                <span className="text-[#B58A3A]">✓</span> 100% Authentic Products
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#B58A3A]">✓</span> Trusted by Lakhs of Families
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================
          🤍 MAIN ROW — Logo | Search | Icons (Ivory)
          ============================================================ */}
      <div className="w-full bg-[#F5EBDD]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">

            {/* LOGO — LEFT */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={siteLogo}
                alt={siteName}
                className="h-12 sm:h-14 md:h-16 object-contain"
                onError={(e) => {
                  e.target.src = logo;
                }}
              />
            </Link>

            {/* SEARCH BAR — CENTER */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="w-full flex items-center bg-white border border-[#B58A3A]/30 rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for puja items, idols, incenses..."
                  className="w-full px-4 py-2 text-sm text-[#20231F] placeholder-[#6B5038] bg-transparent outline-none"
                />
                <button
                  className="px-4 py-2 text-[#B58A3A] hover:text-[#173B32] transition-colors"
                  aria-label="Search"
                >
                  <BiSearch className="text-lg" />
                </button>
              </div>
            </div>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={handleAccountClick}
                className="flex items-center gap-2 text-sm font-medium text-[#B58A3A] border border-[#B58A3A]/50 rounded-md px-3 py-1.5 hover:bg-[#B58A3A] hover:text-[#F5EBDD] transition-all"
              >
                <BiUser className="text-lg" />
                <span className="hidden sm:inline">Account</span>
              </button>

              <button
                onClick={openDrawer}
                className="relative flex items-center gap-2 text-sm font-medium text-[#B58A3A] border border-[#B58A3A]/50 rounded-md px-3 py-1.5 hover:bg-[#B58A3A] hover:text-[#F5EBDD] transition-all"
              >
                <BiShoppingBag className="text-lg" />
                <span className="hidden sm:inline">Cart</span>
                {cartTotalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#173B32] text-[#F5EBDD] text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
                    {cartTotalItems}
                  </span>
                )}
              </button>

              <button
                className="lg:hidden text-[#B58A3A] hover:text-[#173B32] text-2xl p-1 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Menu"
              >
                <BiMenu />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="flex md:hidden mt-3 items-center bg-white border border-[#B58A3A]/30 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search for puja items, idols..."
              className="w-full px-4 py-2.5 text-sm text-[#20231F] placeholder-[#6B5038] bg-transparent outline-none"
            />
            <button className="px-4 py-2.5 text-[#B58A3A]">
              <BiSearch className="text-lg" />
            </button>
          </div>
        </div>

        {/* ============================================================
            🟡 NAV LINKS ROW — with TOP LINE (border-t)
            ============================================================ */}
        <nav className="hidden lg:block border-t border-[#B58A3A]/30">
          <ul className="max-w-8xl mx-auto px-4 flex items-center justify-center gap-8 xl:gap-10 py-2.5 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`transition-colors ${
                      isActive
                        ? "text-[#173B32] font-semibold"
                        : "text-[#6B5038] hover:text-[#B58A3A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
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
          <div className="relative w-4/5 max-w-sm bg-[#F5EBDD] text-[#20231F] h-full shadow-xl flex flex-col z-10 animate-slideIn">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#B58A3A]/30">
              <img
                src={siteLogo}
                alt={siteName}
                className="h-12 object-contain"
                onError={(e) => {
                  e.target.src = logo;
                }}
              />
              <button
                className="text-[#B58A3A] text-2xl focus:outline-none hover:text-[#173B32] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BiX />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4 px-5 space-y-3">
              <ul className="space-y-1 font-medium text-[#6B5038]">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className={`block py-3 border-b border-[#B58A3A]/20 transition-colors ${
                          isActive
                            ? "text-[#173B32] font-semibold"
                            : "text-[#6B5038] hover:text-[#B58A3A]"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-4 border-t border-[#B58A3A]/30 space-y-1 text-[#6B5038] font-medium">
                <button
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleAccountClick(e);
                  }}
                  className="flex items-center gap-3 cursor-pointer hover:text-[#173B32] w-full text-left bg-transparent border-none py-2.5 transition-colors"
                >
                  <BiUser className="text-2xl text-[#B58A3A]" />
                  <span>{token ? "Account" : "Login / Register"}</span>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openDrawer();
                  }}
                  className="flex items-center justify-between cursor-pointer hover:text-[#173B32] py-2.5 w-full text-left bg-transparent border-none transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <BiShoppingBag className="text-2xl text-[#B58A3A]" />
                    Cart
                  </div>
                  {cartTotalItems > 0 && (
                    <span className="bg-[#B58A3A] text-[#F5EBDD] text-xs px-2 py-0.5 rounded-full font-bold">
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
                    className="flex items-center gap-3 cursor-pointer text-[#B58A3A] hover:text-[#173B32] w-full text-left bg-transparent border-none py-2.5 transition-colors"
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