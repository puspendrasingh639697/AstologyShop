// // import "./App.css";
// // import { Routes, Route, useLocation } from "react-router-dom";
// // import { CartProvider } from "./context/CartContext";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import Home from "./components/Home";
// // import PujaKits from "./components/PujaKits";
// // import YantraCollection from "./components/YantraCollection";
// // import RudrakshaMalas from "./components/RudrakshaMalas";
// // import Gemstones from "./pages/Gemstones";
// // import Idols from "./pages/Idols";
// // import AstrologyRemedies from "./components/AstrologyRemedies";
// // import FestivalCollection from "./components/FestivalCollection";
// // import SpiritualBlog from "./components/SpiritualBlog";
// // import PujaSamagri from "./pages/PujaSamagri";
// // import ProductDetails from "./pages/ProductDetails";
// // import AstrologyRemedyFlow from "./pages/AstrologyRemedy/AstrologyRemedyFlow";
// // import CartCheckoutFlow from "./pages/CartCheckoutFlow/CartCheckoutFlow";
// // import OnlinePujaBooking from "./pages/AstrologyRemedy/OnlinePujaBooking";

// // import CustomerAccount from "./pages/CustomerAccount/CustomerAccount";
// // import OrderTracking from "./pages/CartCheckoutFlow/OrderTracking";
// // import Login from "./Utils/Login";
// // import Register from "./Utils/Register";
// // import AstrologerDashboard from "./pages/AstrologerDashboard";
// // import AstrologerLogin from "./Utils/AstrologerLogin";
// // import AstrologerRegister from "./Utils/AstrologerRegister";
// // import ForgotPassword from "./Utils/ForgotPassword";
// // import OtpVerification from "./Utils/OtpVerification";
// // import SendOtp from "./Utils/SendOtp";
// // import WishlistTab from "./pages/CustomerAccount/WishlistTab";

// // function MainLayout() {
// //   const location = useLocation();
// //   const isAccountPage = location.pathname === "/account";

// //   return (
// //     <div className="min-h-screen flex flex-col bg-stone-50">
// //       {/* Agar user /account par nahi hai, tabhi Navbar dikhega */}
// //       {!isAccountPage && <Navbar />}

// //       <div className="flex-1">
// //         <Routes>
// //           {/* Home Page Route */}
// //           <Route path="/" element={<Home />} />

// //           {/* Auth Routes (Login & Register) */}
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //           <Route path="/astrologer/login" element={<AstrologerLogin />} />
// //           <Route path="/astrologer/register" element={<AstrologerRegister />} />

// //           {/* Astrologer Dashboard (Coming Soon) */}
// //           <Route path="/astrologer/dashboard" element={<AstrologerDashboard/>} />
// //           <Route path="/send-otp" element={<SendOtp />} />
// //           <Route path="/forgot-password" element={<ForgotPassword />} />
// //           <Route path="/verify-otp" element={<OtpVerification />} />
          

// //           {/* Navbar ke alag pages */}
// //           <Route path="/puja-samagri" element={<PujaSamagri />} />
// //           <Route path="/puja-kits" element={<PujaKits />} />
// //           <Route path="/yantra" element={<YantraCollection />} />
// //           <Route path="/rudraksha" element={<RudrakshaMalas />} />
// //           <Route path="/gemstones" element={<Gemstones />} />
// //           <Route path="/idols" element={<Idols />} />
// //           <Route path="/remedies" element={<AstrologyRemedies />} />
// //           <Route path="/festivals" element={<FestivalCollection />} />
// //           <Route path="/blogs" element={<SpiritualBlog />} />
// //           <Route path="/product/:id" element={<ProductDetails />} />
// //           <Route path="/remedie" element={<AstrologyRemedyFlow />} />
          
// //           {/* Cart & Checkout Route */}
// //           <Route path="/cart" element={<CartCheckoutFlow />} />
          
// //           {/* Other Routes */}
// //           <Route path="/puja-booking" element={<OnlinePujaBooking />} />

// //           {/* User Account & Order Tracking Routes */}
// //           <Route path="/account" element={<CustomerAccount />} />
// //           <Route path="/tracking" element={<OrderTracking />} />
          
// //           <Route path="/wishlist" element={<WishlistTab/>} />

// //           {/* Fallback route */}
// //           <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Page Not Found</div>} />
// //         </Routes>
// //       </div>

// //       {/* Agar user /account par nahi hai, tabhi Footer dikhega */}
// //       {!isAccountPage && <Footer />}
// //     </div>
// //   );
// // }

// // function App() {
// //   return (
// //     <CartProvider>
// //       <MainLayout />
// //     </CartProvider>
// //   );
// // }

// // export default App;


// import "./App.css";
// import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import { CartProvider } from "./context/CartContext";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import PujaKits from "./components/PujaKits";
// import YantraCollection from "./components/YantraCollection";
// import RudrakshaMalas from "./components/RudrakshaMalas";
// import Gemstones from "./pages/Gemstones";
// import Idols from "./pages/Idols";
// import AstrologyRemedies from "./components/AstrologyRemedies";
// import FestivalCollection from "./components/FestivalCollection";
// import SpiritualBlog from "./components/SpiritualBlog";
// import PujaSamagri from "./pages/PujaSamagri";
// import ProductDetails from "./pages/ProductDetails";
// import AstrologyRemedyFlow from "./pages/AstrologyRemedy/AstrologyRemedyFlow";
// import CartCheckoutFlow from "./pages/CartCheckoutFlow/CartCheckoutFlow";
// import OnlinePujaBooking from "./pages/AstrologyRemedy/OnlinePujaBooking";

// import CustomerAccount from "./pages/CustomerAccount/CustomerAccount";
// import OrderTracking from "./pages/CartCheckoutFlow/OrderTracking";
// import Login from "./Utils/Login";
// import Register from "./Utils/Register";
// import AstrologerDashboard from "./pages/AstrologerDashboard";
// import AstrologerLogin from "./Utils/AstrologerLogin";
// import AstrologerRegister from "./Utils/AstrologerRegister";
// import ForgotPassword from "./Utils/ForgotPassword";
// import OtpVerification from "./Utils/OtpVerification";
// import SendOtp from "./Utils/SendOtp";
// import WishlistTab from "./pages/CustomerAccount/WishlistTab";

// // ✅ YEH NAYA COMPONENT ADD KIYA HAI (Protected Route)
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
  
//   // Agar token nahi hai, toh user ko wapas Login par bhej do
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }
  
//   // Agar token hai, toh child component (jaise Home) dikhao
//   return children;
// };

// function MainLayout() {
//   const location = useLocation();
//   const isAccountPage = location.pathname === "/account";

//   return (
//     <div className="min-h-screen flex flex-col bg-stone-50">
//       {/* Agar user /account par nahi hai, tabhi Navbar dikhega */}
//       {!isAccountPage && <Navbar />}

//       <div className="flex-1">
//         <Routes>
//           {/* ✅ HOME PAGE AB PROTECTED HAI (Bina login ke nahi khulega) */}
//           <Route 
//             path="/" 
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             } 
//           />

//           {/* Auth Routes (Login & Register) - Ye sabke liye khule hain */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/astrologer/login" element={<AstrologerLogin />} />
//           <Route path="/astrologer/register" element={<AstrologerRegister />} />

//           {/* Astrologer Dashboard */}
//           <Route path="/astrologer/dashboard" element={<AstrologerDashboard/>} />
//           <Route path="/send-otp" element={<SendOtp />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/verify-otp" element={<OtpVerification />} />
          
//           {/* Navbar ke alag pages */}
//           <Route path="/puja-samagri" element={<PujaSamagri />} />
//           <Route path="/puja-kits" element={<PujaKits />} />
//           <Route path="/yantra" element={<YantraCollection />} />
//           <Route path="/rudraksha" element={<RudrakshaMalas />} />
//           <Route path="/gemstones" element={<Gemstones />} />
//           <Route path="/idols" element={<Idols />} />
//           <Route path="/remedies" element={<AstrologyRemedies />} />
//           <Route path="/festivals" element={<FestivalCollection />} />
//           <Route path="/blogs" element={<SpiritualBlog />} />
          
//           {/* ✅ PRODUCT DETAILS PAGE AB PROTECTED HAI (Card click par yahi khulta hai) */}
//           <Route 
//             path="/product/:id" 
//             element={
//               <ProtectedRoute>
//                 <ProductDetails />
//               </ProtectedRoute>
//             } 
//           />

//           <Route path="/remedie" element={<AstrologyRemedyFlow />} />
          
//           {/* Cart & Checkout Route */}
//           <Route path="/cart" element={<CartCheckoutFlow />} />
          
//           {/* Other Routes */}
//           <Route path="/puja-booking" element={<OnlinePujaBooking />} />

//           {/* User Account & Order Tracking Routes */}
//           <Route path="/account" element={<CustomerAccount />} />
//           <Route path="/tracking" element={<OrderTracking />} />
          
//           <Route path="/wishlist" element={<WishlistTab/>} />

//           {/* Fallback route */}
//           <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Page Not Found</div>} />
//         </Routes>
//       </div>

//       {/* Agar user /account par nahi hai, tabhi Footer dikhega */}
//       {!isAccountPage && <Footer />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <CartProvider>
//       <MainLayout />
//     </CartProvider>
//   );
// }

// export default App;


import "./App.css";
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PujaKits from "./components/PujaKits";
import YantraCollection from "./components/YantraCollection";
import RudrakshaMalas from "./components/RudrakshaMalas";
import Gemstones from "./pages/Gemstones";
import Idols from "./pages/Idols";
import AstrologyRemedies from "./components/AstrologyRemedies";
import FestivalCollection from "./components/FestivalCollection";
import SpiritualBlog from "./components/SpiritualBlog";
import PujaSamagri from "./pages/PujaSamagri";
import ProductDetails from "./pages/ProductDetails";
import AstrologyRemedyFlow from "./pages/AstrologyRemedy/AstrologyRemedyFlow";
import CartCheckoutFlow from "./pages/CartCheckoutFlow/CartCheckoutFlow";
import OnlinePujaBooking from "./pages/AstrologyRemedy/OnlinePujaBooking";

import CustomerAccount from "./pages/CustomerAccount/CustomerAccount";
import OrderTracking from "./pages/CartCheckoutFlow/OrderTracking";
import Login from "./Utils/Login";
import Register from "./Utils/Register";
import AstrologerDashboard from "./pages/AstrologerDashboard";
import AstrologerLogin from "./Utils/AstrologerLogin";
import AstrologerRegister from "./Utils/AstrologerRegister";
import ForgotPassword from "./Utils/ForgotPassword";
import OtpVerification from "./Utils/OtpVerification";
import SendOtp from "./Utils/SendOtp";
import WishlistTab from "./pages/CustomerAccount/WishlistTab";
import CategoryProducts from "./components/CategoryProducts";
import Checkout from "./pages/CartCheckoutFlow/Checkout";

// ✅ YEH NAYA COMPONENT ADD KIYA HAI (Already Logged In User ko Login page se redirect karega)
const RedirectIfLoggedIn = ({ children }) => {
  const token = localStorage.getItem('token');
  
  // Agar token hai, toh seedha Home par bhejo
  if (token) {
    return <Navigate to="/" replace />;
  }
  
  // Agar token nahi hai, toh Login page dikhao
  return children;
};

function MainLayout() {
  const location = useLocation();
  const isAccountPage = location.pathname === "/account";

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* Agar user /account par nahi hai, tabhi Navbar dikhega */}
      {!isAccountPage && <Navbar />}

      <div className="flex-1">
        <Routes>
          {/* Home Page Route - Sabke liye khula */}
          <Route path="/" element={<Home />} />

          {/* Auth Routes (Login & Register) */}
          <Route 
            path="/login" 
            element={
              <RedirectIfLoggedIn>
                <Login />
              </RedirectIfLoggedIn>
            } 
          />
          <Route path="/register" element={<Register />} />
          <Route path="/astrologer/login" element={<AstrologerLogin />} />
          <Route path="/astrologer/register" element={<AstrologerRegister />} />

          {/* Astrologer Dashboard */}
          <Route path="/astrologer/dashboard" element={<AstrologerDashboard/>} />
          <Route path="/send-otp" element={<SendOtp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/category/:categoryName" element={<CategoryProducts />} />
          
          {/* Navbar ke alag pages */}
          <Route path="/puja-samagri" element={<PujaSamagri />} />
          <Route path="/puja-kits" element={<PujaKits />} />
          <Route path="/yantra" element={<YantraCollection />} />
          <Route path="/rudraksha" element={<RudrakshaMalas />} />
          <Route path="/gemstones" element={<Gemstones />} />
          <Route path="/idols" element={<Idols />} />
          <Route path="/remedies" element={<AstrologyRemedies />} />
          <Route path="/festivals" element={<FestivalCollection />} />
          <Route path="/blogs" element={<SpiritualBlog />} />
          
          {/* Product Details - Sabke liye khula (Bina Login ke bhi) */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/remedie" element={<AstrologyRemedyFlow />} />
          
          {/* Cart & Checkout Route */}
          <Route path="/cart" element={<CartCheckoutFlow />} />
          
          {/* Other Routes */}
          <Route path="/puja-booking" element={<OnlinePujaBooking />} />

          {/* User Account & Order Tracking Routes */}
          <Route path="/account" element={<CustomerAccount />} />
          <Route path="/tracking" element={<OrderTracking />} />
          
          <Route path="/wishlist" element={<WishlistTab/>} />

          {/* Fallback route */}
          <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center text-xl font-serif text-[#8c0a15]">Page Not Found</div>} />
        </Routes>
      </div>

      {/* Agar user /account par nahi hai, tabhi Footer dikhega */}
      {!isAccountPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}

export default App;