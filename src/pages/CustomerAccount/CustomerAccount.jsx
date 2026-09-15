

// import React, { useState } from "react";
// import { 
//   BiGridAlt, BiUser, BiPackage, BiHeart, BiMap, BiGift, 
//   BiStar, BiHistory, BiBell, BiSupport, BiBookOpen, 
//   BiSun, BiPhoneCall, BiLogOut, BiChevronRight, BiSearch, BiShoppingBag
// } from "react-icons/bi";

// import DashboardOverviewTab from "./DashboardOverviewTab";
// import ProfileTab from "./ProfileTab";
// import OrdersTab from "./OrdersTab";
// import WishlistTab from "./WishlistTab";
// import AddressesTab from "./AddressesTab";
// import NotificationsTab from "./NotificationsTab";
// import CouponsTab from "./CouponsTab";
// import ReviewsTab from "./ReviewsTab";
// import RecentlyViewedTab from "./RecentlyViewedTab";
// import SupportTab from "./SupportTab";
// import KundliTab from "./KundliTab";
// import RemediesTab from "./RemediesTab";
// import ConsultationsTab from "./ConsultationsTab";

// export default function CustomerAccount({ onNavigateTracking, onNavigateCart, onBackToHome }) {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   const [profile, setProfile] = useState({
//     fullName: "Rahul Sharma",
//     phone: "+91 98765 43210",
//     email: "rahul.sharma@example.com",
//     gender: "Male",
//     dob: "1994-06-15"
//   });

//   const [orders, setOrders] = useState([
//     { id: "ORD-482910", date: "16 August 2026", status: "Out for Delivery", items: "Shri Kuber Yantra (x1), Rudraksha Mala (x1)", total: 1998 },
//     { id: "ORD-391024", date: "02 July 2026", status: "Delivered", items: "Gangajal Bottle (x2)", total: 397 }
//   ]);

//   const [wishlist, setWishlist] = useState([
//     { id: 201, title: "Parad Shivling (Energized)", price: 2199, image: "https://via.placeholder.com/150" },
//     { id: 202, title: "Brass Akhand Jyoti Diya", price: 599, image: "https://via.placeholder.com/150" }
//   ]);

//   const [addresses, setAddresses] = useState([
//     { id: 1, type: "Home", text: "House No. 42, Temple Road, Connaught Place, New Delhi - 110001", phone: "+91 98765 43210" },
//     { id: 2, type: "Office", text: "Tower B, Cyber City, DLF Phase 2, Gurugram, Haryana - 122002", phone: "+91 98765 43210" }
//   ]);

//   const [notifications, setNotifications] = useState({
//     whatsappUpdates: true,
//     orderAlerts: true,
//     pujaReminders: false,
//     promotionalEmails: true
//   });

//   const [reviews, setReviews] = useState([
//     { id: 1, productName: "Shri Kuber Yantra", rating: 5, comment: "Bohot hi divya aur shuddh yantra hai.", date: "10 August 2026" }
//   ]);

//   const [recentlyViewed, setRecentlyViewed] = useState([
//     { id: 301, title: "Sphatik Mala (Crystal)", price: 799, image: "https://via.placeholder.com/150" }
//   ]);

//   const [kundliData, setKundliData] = useState([
//     { id: 1, name: "Rahul Sharma (Self)", dateOfBirth: "15 June 1994, 10:30 AM", rashi: "Vrishabh (Taurus)", nakshatra: "Rohini", manglik: false }
//   ]);

//   const [remedies, setRemedies] = useState([
//     { id: 1, title: "Financial Growth & Stability", description: "Bhaari karchon aur dhan rokhne ke liye Kuber yantra ki sthapna karein.", recommendedItem: "Shri Kuber Yantra" }
//   ]);

//   const [consultations, setConsultations] = useState([
//     { id: 1, astrologerName: "Acharya Pandit Vashisht", topic: "Career & Business Growth", date: "10 July 2026", duration: "30 Mins", status: "Completed" }
//   ]);

//   const menuItems = [
//     { id: "dashboard", label: "Dashboard", icon: <BiGridAlt className="text-base" /> },
//     { id: "profile", label: "My Profile", icon: <BiUser className="text-base" /> },
//     { id: "orders", label: "My Orders", icon: <BiPackage className="text-base" /> },
//     { id: "wishlist", label: "Sacred Wishlist", icon: <BiHeart className="text-base" /> },
//     { id: "addresses", label: "Saved Addresses", icon: <BiMap className="text-base" /> },
//     { id: "coupons", label: "Coupons & Offers", icon: <BiGift className="text-base" /> },
//     { id: "kundli", label: "Saved Kundli", icon: <BiBookOpen className="text-base" /> },
//     { id: "remedies", label: "Remedies", icon: <BiSun className="text-base" /> },
//     { id: "consultations", label: "Consultations", icon: <BiPhoneCall className="text-base" /> },
//     { id: "reviews", label: "My Reviews", icon: <BiStar className="text-base" /> },
//     { id: "recently-viewed", label: "Recently Viewed", icon: <BiHistory className="text-base" /> },
//     { id: "notifications", label: "Notifications", icon: <BiBell className="text-base" /> },
//     { id: "support", label: "Help & Support", icon: <BiSupport className="text-base" /> },
//   ];

//   return (
//     <div className="min-h-screen bg-stone-50 font-sans flex flex-col">
      
//       {/* 🌟 Professional Header */}
//       <header className="bg-[#8c0a15] text-white border-b border-[#6e0710] px-4 h-12 flex items-center justify-between sticky top-0 z-30 shadow-sm">
//         <div className="flex items-center gap-2">
//           <div className="w-6 h-6 bg-white/10 text-white rounded flex items-center justify-center font-serif font-bold text-xs border border-white/20">
//             ज
//           </div>
//           <div className="flex items-center ">
//             <h3 className="font-bold text-white text-xs sm:text-sm  m-0">
//               Account Dashboard
//             </h3>
            
//           </div>
//         </div>

//         <div className="hidden md:flex items-center bg-white/10 border border-white/20 focus-within:bg-white focus-within:text-stone-900 rounded px-2.5 py-1 w-56 gap-1.5 transition-all group">
//           <BiSearch className="text-stone-300 group-focus-within:text-stone-500 text-xs" />
//           <input 
//             type="text" 
//             placeholder="Search orders, items..." 
//             className="bg-transparent border-none text-[11px] w-full outline-none text-white placeholder-stone-300 group-focus-within:text-stone-800 group-focus-within:placeholder-stone-400"
//           />
//           <span className="text-[7px] bg-white/20 group-focus-within:bg-stone-100 px-1 rounded text-stone-300 group-focus-within:text-stone-500 font-mono">⌘K</span>
//         </div>

//         <div className="flex items-center gap-2">
//           <button 
//             onClick={() => setActiveTab("notifications")}
//             className="relative p-1.5 text-white hover:bg-white/10 rounded transition cursor-pointer"
//             title="Notifications"
//           >
//             <BiBell className="text-base" />
//             <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-amber-400 rounded-full ring-1 ring-[#8c0a15]"></span>
//           </button>

//           <div className="flex items-center gap-2 pl-2 border-l border-white/20">
//             <div className="w-6 h-6 rounded bg-amber-400 text-stone-900 flex items-center justify-center font-bold text-xs">
//               {profile.fullName.charAt(0)}
//             </div>
//             <div className="hidden sm:block text-left leading-tight">
//               <span className="text-[11px] font-bold text-white block">{profile.fullName}</span>
//               <span className="text-[7px] text-amber-300 font-medium block">Verified</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Dashboard Body Grid */}
//       <div className=" bg-[#fff3df] flex-1 max-w-[1400px] w-full top-0 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
//         {/* 🌟 Refined Left Sidebar (3 Columns) */}
//         <aside className="lg:col-span-3 bg-[#8c0a15]  p-3.5 space-y-3 h-fit shadow-xs">
//           <div className="space-y-1">
//             {menuItems.map((item) => {
//               const isActive = activeTab === item.id;
//               return (
//                 <button 
//                   key={item.id}
//                   onClick={() => setActiveTab(item.id)}
//                   className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold rounded-xl cursor-pointer transition-all duration-200 group relative ${
//                     isActive 
//                       ? 'bg-[#8c0a15] text-white shadow-sm font-bold' 
//                       : 'text-stone-700 hover:bg-stone-100/80 hover:text-stone-900'
//                   }`}
//                 >
//                   <span className="flex items-center gap-2.5">
//                     <span className={`transition-transform duration-200 ${isActive ? 'scale-110 text-white' : 'text-white group-hover:text-black'}`}>
//                       {item.icon}
//                     </span>
//                     <span className={isActive ? 'text-white font-bold' : 'text-white group-hover:text-black'}>
//                       {item.label}
//                     </span>
//                   </span>
//                   <BiChevronRight className={`text-xs transition-transform duration-200 ${isActive ? "text-amber-300 translate-x-0.5" : "text-stone-300 group-hover:text-stone-500"}`} />
//                 </button>
//               );
//             })}
//           </div>

//           <div className="pt-3 border-t border-stone-100 space-y-1">
//             <button 
//               onClick={() => {
//                 if(onBackToHome) onBackToHome();
//                 else alert("Returned to Home website!");
//               }}
//               className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-stone-700 hover:bg-stone-100 rounded-xl transition cursor-pointer"
//             >
//               <BiShoppingBag className="text-base text-white" /> Back to Store
//             </button>
//             <button 
//               onClick={() => alert("Logged out successfully!")}
//               className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition cursor-pointer"
//             >
//               <BiLogOut className="text-base text-rose-400" /> Sign Out
//             </button>
//           </div>
//         </aside>

//         {/* Right Main Content Panel (9 Columns) */}
//         <main className="lg:col-span-9 bg-[#fff3df] sm:p-4 shadow-xs min-h-[600px]">
//           {activeTab === "dashboard" && (
//             <DashboardOverviewTab 
//               profile={profile} 
//               orders={orders} 
//               wishlist={wishlist} 
//               kundliData={kundliData} 
//               consultations={consultations} 
//               setActiveTab={setActiveTab} 
//             />
//           )}
//           {activeTab === "profile" && <ProfileTab profile={profile} setProfile={setProfile} />}
//           {activeTab === "orders" && <OrdersTab orders={orders} onNavigateTracking={onNavigateTracking} />}
//           {activeTab === "wishlist" && <WishlistTab wishlist={wishlist} setWishlist={setWishlist} onNavigateCart={onNavigateCart} />}
//           {activeTab === "addresses" && <AddressesTab addresses={addresses} setAddresses={setAddresses} />}
//           {activeTab === "coupons" && <CouponsTab />}
//           {activeTab === "kundli" && <KundliTab kundliData={kundliData} />}
//           {activeTab === "remedies" && <RemediesTab remedies={remedies} onNavigateCart={onNavigateCart} />}
//           {activeTab === "consultations" && <ConsultationsTab consultations={consultations} />}
//           {activeTab === "reviews" && <ReviewsTab reviews={reviews} />}
//           {activeTab === "recently-viewed" && <RecentlyViewedTab recentlyViewed={recentlyViewed} onNavigateCart={onNavigateCart} />}
//           {activeTab === "notifications" && <NotificationsTab notifications={notifications} setNotifications={setNotifications} />}
//           {activeTab === "support" && <SupportTab />}
//         </main>

//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { 
  BiGridAlt, BiUser, BiPackage, BiHeart, BiMap, BiGift, 
  BiStar, BiHistory, BiBell, BiSupport, BiBookOpen, 
  BiSun, BiPhoneCall, BiLogOut, BiChevronRight, BiSearch, BiShoppingBag
} from "react-icons/bi";

// import useAuthStore from "../store/useAuthStore";
// import useCartStore from "../store/useCartStore";
// import useWishlistStore from "../store/useWishlistStore";

import DashboardOverviewTab from "./DashboardOverviewTab";
import ProfileTab from "./ProfileTab";
import OrdersTab from "./OrdersTab";
import WishlistTab from "./WishlistTab";
import AddressesTab from "./AddressesTab";
import NotificationsTab from "./NotificationsTab";
import CouponsTab from "./CouponsTab";
import ReviewsTab from "./ReviewsTab";
import RecentlyViewedTab from "./RecentlyViewedTab";
import SupportTab from "./SupportTab";
import KundliTab from "./KundliTab";
import RemediesTab from "./RemediesTab";
import ConsultationsTab from "./ConsultationsTab";
import useAuthStore from "../../store/useAuthStore";
import useWishlistStore from "../../store/useWishlistStore";

export default function CustomerAccount({ onNavigateTracking, onNavigateCart, onBackToHome }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Zustand stores
  const { user, logout } = useAuthStore();
  const { wishlist, setWishlist } = useWishlistStore(); // ✅ setWishlist yahan define kar diya hai

  // Local States
  const [orders, setOrders] = useState([
    { id: "ORD-482910", date: "16 August 2026", status: "Out for Delivery", items: "Shri Kuber Yantra (x1), Rudraksha Mala (x1)", total: 1998 },
    { id: "ORD-391024", date: "02 July 2026", status: "Delivered", items: "Gangajal Bottle (x2)", total: 397 }
  ]);

  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", text: "House No. 42, Temple Road, Connaught Place, New Delhi - 110001", phone: "+91 98765 43210" }
  ]);

  const [notifications, setNotifications] = useState({
    whatsappUpdates: true,
    orderAlerts: true,
    pujaReminders: false,
    promotionalEmails: true
  });

  const [reviews, setReviews] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [kundliData, setKundliData] = useState([]);
  const [remedies, setRemedies] = useState([]);
  const [consultations, setConsultations] = useState([]);

  // Profile State
  const [profile, setProfile] = useState({
    fullName: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@example.com",
    gender: "Male",
    dob: "1994-06-15"
  });

  useEffect(() => {
    let currentUser = user;
    if (!currentUser || Object.keys(currentUser).length === 0) {
      const localUser = localStorage.getItem('user');
      if (localUser) {
        try {
          currentUser = JSON.parse(localUser);
        } catch (e) {
          console.error("Error parsing local user", e);
        }
      }
    }

    if (currentUser) {
      setProfile({
        fullName: currentUser.fullName || currentUser.name || currentUser.username || "Rahul Sharma",
        phone: currentUser.phone || currentUser.mobile || "+91 98765 43210",
        email: currentUser.email || "rahul.sharma@example.com",
        gender: currentUser.gender || "Male",
        dob: currentUser.dob || "1994-06-15"
      });
    }
  }, [user]);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <BiGridAlt className="text-base" /> },
    { id: "profile", label: "My Profile", icon: <BiUser className="text-base" /> },
    { id: "orders", label: "My Orders", icon: <BiPackage className="text-base" /> },
    { id: "wishlist", label: "Sacred Wishlist", icon: <BiHeart className="text-base" /> },
    { id: "addresses", label: "Saved Addresses", icon: <BiMap className="text-base" /> },
    { id: "coupons", label: "Coupons & Offers", icon: <BiGift className="text-base" /> },
    { id: "kundli", label: "Saved Kundli", icon: <BiBookOpen className="text-base" /> },
    { id: "remedies", label: "Remedies", icon: <BiSun className="text-base" /> },
    { id: "consultations", label: "Consultations", icon: <BiPhoneCall className="text-base" /> },
    { id: "reviews", label: "My Reviews", icon: <BiStar className="text-base" /> },
    { id: "recently-viewed", label: "Recently Viewed", icon: <BiHistory className="text-base" /> },
    { id: "notifications", label: "Notifications", icon: <BiBell className="text-base" /> },
    { id: "support", label: "Help & Support", icon: <BiSupport className="text-base" /> },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans flex flex-col">
      
      {/* 🌟 Professional Header */}
      <header className="bg-[#8c0a15] text-white border-b border-[#6e0710] px-4 h-12 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white/10 text-white rounded flex items-center justify-center font-serif font-bold text-xs border border-white/20">
            ज
          </div>
          <div className="flex items-center">
            <h3 className="font-bold text-white text-xs sm:text-sm m-0">
              Account Dashboard
            </h3>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-white/10 border border-white/20 focus-within:bg-white focus-within:text-stone-900 rounded px-2.5 py-1 w-56 gap-1.5 transition-all group">
          <BiSearch className="text-stone-300 group-focus-within:text-stone-500 text-xs" />
          <input 
            type="text" 
            placeholder="Search orders, items..." 
            className="bg-transparent border-none text-[11px] w-full outline-none text-white placeholder-stone-300 group-focus-within:text-stone-800 group-focus-within:placeholder-stone-400"
          />
          <span className="text-[7px] bg-white/20 group-focus-within:bg-stone-100 px-1 rounded text-stone-300 group-focus-within:text-stone-500 font-mono">⌘K</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveTab("notifications")}
            className="relative p-1.5 text-white hover:bg-white/10 rounded transition cursor-pointer"
            title="Notifications"
          >
            <BiBell className="text-base" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-amber-400 rounded-full ring-1 ring-[#8c0a15]"></span>
          </button>

          <div className="flex items-center gap-2 pl-2 border-l border-white/20">
            <div className="w-6 h-6 rounded bg-amber-400 text-stone-900 flex items-center justify-center font-bold text-xs">
              {profile.fullName ? profile.fullName.charAt(0) : "U"}
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <span className="text-[11px] font-bold text-white block">{profile.fullName}</span>
              <span className="text-[7px] text-amber-300 font-medium block">Verified</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Body Grid */}
      <div className="bg-[#fff3df] flex-1 max-w-[1400px] w-full top-0 grid grid-cols-1 lg:grid-cols-12 gap-6 mx-auto">
        
        {/* 🌟 Refined Left Sidebar (3 Columns) */}
        <aside className="lg:col-span-3 bg-[#8c0a15] p-3.5 space-y-3 h-fit shadow-xs">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold rounded-xl cursor-pointer transition-all duration-200 group relative ${
                    isActive 
                      ? 'bg-[#700710] text-white shadow-sm font-bold' 
                      : 'text-stone-700 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={`transition-transform duration-200 ${isActive ? 'scale-110 text-amber-300' : 'text-white group-hover:text-amber-300'}`}>
                      {item.icon}
                    </span>
                    <span className={isActive ? 'text-white font-bold' : 'text-white group-hover:text-stone-200'}>
                      {item.label}
                    </span>
                  </span>
                  <BiChevronRight className={`text-xs transition-transform duration-200 ${isActive ? "text-amber-300 translate-x-0.5" : "text-stone-300 group-hover:text-stone-100"}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/20 space-y-1">
            <button 
              onClick={() => {
                if(onBackToHome) onBackToHome();
                else alert("Returned to Home website!");
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
            >
              <BiShoppingBag className="text-base text-white" /> Back to Store
            </button>
            <button 
              onClick={() => {
                if (logout) logout();
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                alert("Logged out successfully!");
                window.location.href = '/login';
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-rose-200 hover:bg-rose-900/50 rounded-xl transition cursor-pointer"
            >
              <BiLogOut className="text-base text-rose-300" /> Sign Out
            </button>
          </div>
        </aside>

        {/* Right Main Content Panel (9 Columns) */}
        <main className="lg:col-span-9 bg-[#fff3df] sm:p-4 shadow-xs min-h-[600px]">
          {activeTab === "dashboard" && (
            <DashboardOverviewTab 
              profile={profile} 
              orders={orders} 
              wishlist={wishlist} 
              kundliData={kundliData} 
              consultations={consultations} 
              setActiveTab={setActiveTab} 
            />
          )}
          {activeTab === "profile" && <ProfileTab profile={profile} setProfile={setProfile} />}
          {activeTab === "orders" && <OrdersTab orders={orders} onNavigateTracking={onNavigateTracking} />}
          {activeTab === "wishlist" && <WishlistTab wishlist={wishlist} setWishlist={setWishlist} onNavigateCart={onNavigateCart} />}
          {activeTab === "addresses" && <AddressesTab addresses={addresses} setAddresses={setAddresses} />}
          {activeTab === "coupons" && <CouponsTab />}
          {activeTab === "kundli" && <KundliTab kundliData={kundliData} />}
          {activeTab === "remedies" && <RemediesTab remedies={remedies} onNavigateCart={onNavigateCart} />}
          {activeTab === "consultations" && <ConsultationsTab consultations={consultations} />}
          {activeTab === "reviews" && <ReviewsTab reviews={reviews} />}
          {activeTab === "recently-viewed" && <RecentlyViewedTab recentlyViewed={recentlyViewed} onNavigateCart={onNavigateCart} />}
          {activeTab === "notifications" && <NotificationsTab notifications={notifications} setNotifications={setNotifications} />}
          {activeTab === "support" && <SupportTab />}
        </main>

      </div>
    </div>
  );
}