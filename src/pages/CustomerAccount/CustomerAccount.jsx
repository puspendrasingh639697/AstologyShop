

// import React, { useState, useEffect } from "react";
// import { 
//   BiGridAlt, BiUser, BiPackage, BiHeart, BiMap, BiGift, 
//   BiStar, BiHistory, BiBell, BiSupport, BiBookOpen, 
//   BiSun, BiPhoneCall, BiLogOut, BiChevronRight, BiSearch, BiShoppingBag,
//   BiRefresh   // ✅ ADD karo
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
// import ReturnsTab from "./ReturnsTab";   // ✅ ADD karo

// import useAuthStore from "../../store/useAuthStore";
// import useWishlistStore from "../../store/useWishlistStore";
// import useReviewStore from "../../store/useReviewStore";
// import apiClient from "../../config/apiClient";

// export default function CustomerAccount({ onNavigateTracking, onNavigateCart, onBackToHome }) {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   // Zustand stores
//   const { user, logout } = useAuthStore();
//   const { wishlist, setWishlist, fetchWishlist } = useWishlistStore();
//   const { myReviews, fetchMyReviews } = useReviewStore();

//   // ✅ Orders — API se aayenge
//   const [orders, setOrders] = useState([]);
//   const [loadingOrders, setLoadingOrders] = useState(true);

//   // ✅ Returns — API se aayenge
//   const [returns, setReturns] = useState([]);

//   // Local States
//   const [addresses, setAddresses] = useState([]);
//   const [notifications, setNotifications] = useState({
//     whatsappUpdates: true,
//     orderAlerts: true,
//     pujaReminders: false,
//     promotionalEmails: true,
//   });

//   const [recentlyViewed, setRecentlyViewed] = useState([]);
//   const [kundliData, setKundliData] = useState([]);
//   const [remedies, setRemedies] = useState([]);
//   const [consultations, setConsultations] = useState([]);

//   // Profile State
//   const [profile, setProfile] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     gender: "",
//     dob: "",
//   });

//   // ✅ Profile load karo
//   useEffect(() => {
//     let currentUser = user;
//     if (!currentUser || Object.keys(currentUser).length === 0) {
//       const localUser = localStorage.getItem("user");
//       if (localUser) {
//         try {
//           currentUser = JSON.parse(localUser);
//         } catch (e) {
//           console.error("Error parsing local user", e);
//         }
//       }
//     }

//     if (currentUser) {
//       setProfile({
//         fullName:
//           currentUser.fullName ||
//           currentUser.name ||
//           currentUser.username ||
//           "User",
//         phone: currentUser.phone || currentUser.mobile || "",
//         email: currentUser.email || "",
//         gender: currentUser.gender || "",
//         dob: currentUser.dob || "",
//       });
//     }
//   }, [user]);

//   // ✅ ORDERS API se fetch karo
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         console.log("🔍 CustomerAccount — Fetching orders...");

//         const res = await apiClient.get("/orders/myorders");

//         console.log("🔍 CustomerAccount — Orders response:", res.data);

//         if (res.data.success) {
//           setOrders(res.data.orders || []);
//         }
//       } catch (err) {
//         console.error("❌ CustomerAccount — Orders fetch error:", err);
//       } finally {
//         setLoadingOrders(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // ✅ RETURNS API se fetch karo
//   useEffect(() => {
//     const fetchReturns = async () => {
//       try {
//         console.log("🔍 CustomerAccount — Fetching returns...");

//         const res = await apiClient.get("/returns/my-returns");

//         console.log("🔍 CustomerAccount — Returns response:", res.data);

//         if (res.data.success) {
//           setReturns(res.data.returns || []);
//         }
//       } catch (err) {
//         console.error("❌ CustomerAccount — Returns fetch error:", err);
//       }
//     };

//     fetchReturns();
//   }, []);

//   // ✅ Wishlist bhi API se
//   useEffect(() => {
//     if (fetchWishlist) {
//       fetchWishlist();
//     }
//   }, [fetchWishlist]);

//   // ✅ My Reviews fetch karo
//   useEffect(() => {
//     if (fetchMyReviews) {
//       fetchMyReviews();
//     }
//   }, [fetchMyReviews]);

//   const menuItems = [
//     { id: "dashboard", label: "Dashboard", icon: <BiGridAlt className="text-base" /> },
//     { id: "profile", label: "My Profile", icon: <BiUser className="text-base" /> },
//     { id: "orders", label: "My Orders", icon: <BiPackage className="text-base" /> },
//     { id: "wishlist", label: "Sacred Wishlist", icon: <BiHeart className="text-base" /> },
//     { id: "addresses", label: "Saved Addresses", icon: <BiMap className="text-base" /> },
//     { id: "coupons", label: "Coupons & Offers", icon: <BiGift className="text-base" /> },
   
//     { id: "reviews", label: "My Reviews", icon: <BiStar className="text-base" /> },
//     { id: "returns", label: "My Returns", icon: <BiRefresh className="text-base" /> },   // ✅ ADD karo
//     { id: "recently-viewed", label: "Recently Viewed", icon: <BiHistory className="text-base" /> },
//     { id: "notifications", label: "Notifications", icon: <BiBell className="text-base" /> },
//     { id: "support", label: "Help & Support", icon: <BiSupport className="text-base" /> },
//   ];

//   return (
//     <div className="min-h-screen bg-stone-50  flex flex-col">
//       {/* 🌟 Professional Header */}
//       <header className="bg-gradient-to-r from-red-800 to-red-600 text-white border-b border-[#6e0710] px-4 h-12 flex items-center justify-between sticky top-0 z-30 shadow-sm">
//         <div className="flex items-center gap-2">
         
//           <div className="flex items-center">
//             <h3 className="font-bold text-white text-xs sm:text-sm m-0">
//               Account Dashboard
//             </h3>
//           </div>
//         </div>

        

//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => setActiveTab("notifications")}
//             className="relative p-1.5 text-white hover:bg-white/10 rounded transition cursor-pointer"
//             title="Notifications"
//           >
//             <BiBell className="text-base" />
//             <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full ring-1 ring-[#8c0a15]"></span>
//           </button>

//           <div className="flex items-center gap-2 pl-2 border-l border-white/20">
//             <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-bold text-xs">
//               {profile.fullName ? profile.fullName.charAt(0) : "U"}
//             </div>
//             <div className="hidden sm:block text-left leading-tight">
//               <span className="text-[11px] font-bold text-white block">
//                 {profile.fullName}
//               </span>
//               <span className="text-[8px] text-white font-medium block">
//                 Verified
//               </span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Dashboard Body Grid */}
//       <div className="bg-white flex-1 max-w-[1400px] w-full top-0 grid grid-cols-1 lg:grid-cols-12 gap-6 mx-auto">
//         {/* 🌟 Refined Left Sidebar */}
//         <aside className="lg:col-span-3 bg-gradient-to-r from-red-800 to-red-600 p-3.5 space-y-3 h-fit shadow-xs">
//           <div className="space-y-1">
//             {menuItems.map((item) => {
//               const isActive = activeTab === item.id;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveTab(item.id)}
//                   className={`w-full flex items-center justify-between px-3 py-2.5 text-xs  rounded-md cursor-pointer transition-all duration-200 group relative ${
//                     isActive
//                       ? "bg-gradient-to-r from-red-600 to-red-400 text-white shadow-sm font-bold"
//                       : "text-stone-700 hover:bg-white/10 hover:text-white"
//                   }`}
//                 >
//                   <span className="flex items-center gap-2.5">
//                     <span
//                       className={`transition-transform duration-200 ${
//                         isActive
//                           ? "scale-110 text-amber-300"
//                           : "text-white group-hover:text-amber-300"
//                       }`}
//                     >
//                       {item.icon}
//                     </span>
//                     <span
//                       className={
//                         isActive
//                           ? "text-white font-bold"
//                           : "text-white group-hover:text-stone-200"
//                       }
//                     >
//                       {item.label}
//                     </span>
//                   </span>
//                   <BiChevronRight
//                     className={`text-xs transition-transform duration-200 ${
//                       isActive
//                         ? "text-white translate-x-0.5"
//                         : "text-stone-300 group-hover:text-stone-100"
//                     }`}
//                   />
//                 </button>
//               );
//             })}
//           </div>

//           <div className="pt-3 border-t border-white/20 space-y-1">
//             <button
//               onClick={() => {
//                 if (onBackToHome) onBackToHome();
//                 else alert("Returned to Home website!");
//               }}
//               className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
//             >
//               <BiShoppingBag className="text-base text-white" /> Back to Store
//             </button>
//             <button
//               onClick={() => {
//                 if (logout) logout();
//                 localStorage.removeItem("token");
//                 localStorage.removeItem("user");
//                 alert("Logged out successfully!");
//                 window.location.href = "/login";
//               }}
//               className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-rose-200 hover:bg-rose-900/50 rounded-xl transition cursor-pointer"
//             >
//               <BiLogOut className="text-base text-rose-300" /> Sign Out
//             </button>
//           </div>
//         </aside>

//         {/* Right Main Content Panel */}
//         <main className="lg:col-span-9 bg-white sm:p-4 shadow-xs min-h-[600px]">
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
//           {activeTab === "profile" && (
//             <ProfileTab profile={profile} setProfile={setProfile} />
//           )}
//           {activeTab === "orders" && (
//             <OrdersTab orders={orders} onNavigateTracking={onNavigateTracking} />
//           )}
//           {activeTab === "wishlist" && (
//             <WishlistTab
//               wishlist={wishlist}
//               setWishlist={setWishlist}
//               onNavigateCart={onNavigateCart}
//             />
//           )}
//           {activeTab === "addresses" && (
//             <AddressesTab addresses={addresses} setAddresses={setAddresses} />
//           )}
//           {activeTab === "coupons" && <CouponsTab />}
//           {activeTab === "kundli" && <KundliTab kundliData={kundliData} />}
//           {activeTab === "remedies" && (
//             <RemediesTab remedies={remedies} onNavigateCart={onNavigateCart} />
//           )}
//           {activeTab === "consultations" && (
//             <ConsultationsTab consultations={consultations} />
//           )}
//           {activeTab === "reviews" && <ReviewsTab reviews={myReviews} />}
//           {activeTab === "returns" && <ReturnsTab returns={returns} />}   {/* ✅ YEH ADD KARO */}
//           {activeTab === "recently-viewed" && (
//             <RecentlyViewedTab
//               recentlyViewed={recentlyViewed}
//               onNavigateCart={onNavigateCart}
//             />
//           )}
//           {activeTab === "notifications" && (
//             <NotificationsTab
//               notifications={notifications}
//               setNotifications={setNotifications}
//             />
//           )}
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
  BiSun, BiPhoneCall, BiLogOut, BiChevronRight, BiSearch, BiShoppingBag,
  BiRefresh
} from "react-icons/bi";

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
import ReturnsTab from "./ReturnsTab";

import useAuthStore from "../../store/useAuthStore";
import useWishlistStore from "../../store/useWishlistStore";
import useReviewStore from "../../store/useReviewStore";
import apiClient from "../../config/apiClient";

export default function CustomerAccount({ onNavigateTracking, onNavigateCart, onBackToHome }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Zustand stores
  const { user, logout } = useAuthStore();
  const { wishlist, setWishlist, fetchWishlist } = useWishlistStore();
  const { myReviews, fetchMyReviews } = useReviewStore();

  // ✅ Orders — API se aayenge
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  // ✅ Returns — API se aayenge
  const [returns, setReturns] = useState([]);

  // Local States
  const [addresses, setAddresses] = useState([]);
  const [notifications, setNotifications] = useState({
    whatsappUpdates: true,
    orderAlerts: true,
    pujaReminders: false,
    promotionalEmails: true,
  });

  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [kundliData, setKundliData] = useState([]);
  const [remedies, setRemedies] = useState([]);
  const [consultations, setConsultations] = useState([]);

  // Profile State
  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    dob: "",
  });

  // ✅ Profile load karo
  useEffect(() => {
    let currentUser = user;
    if (!currentUser || Object.keys(currentUser).length === 0) {
      const localUser = localStorage.getItem("user");
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
        fullName:
          currentUser.fullName ||
          currentUser.name ||
          currentUser.username ||
          "User",
        phone: currentUser.phone || currentUser.mobile || "",
        email: currentUser.email || "",
        gender: currentUser.gender || "",
        dob: currentUser.dob || "",
      });
    }
  }, [user]);

  // ✅ ORDERS API se fetch karo
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("🔍 CustomerAccount — Fetching orders...");

        const res = await apiClient.get("/orders/myorders");

        console.log("🔍 CustomerAccount — Orders response:", res.data);

        if (res.data.success) {
          setOrders(res.data.orders || []);
        }
      } catch (err) {
        console.error("❌ CustomerAccount — Orders fetch error:", err);
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchOrders();
  }, []);

  // ✅ RETURNS API se fetch karo
  useEffect(() => {
    const fetchReturns = async () => {
      try {
        console.log("🔍 CustomerAccount — Fetching returns...");

        const res = await apiClient.get("/returns/my-returns");

        console.log("🔍 CustomerAccount — Returns response:", res.data);

        if (res.data.success) {
          setReturns(res.data.returns || []);
        }
      } catch (err) {
        console.error("❌ CustomerAccount — Returns fetch error:", err);
      }
    };

    fetchReturns();
  }, []);

  // ✅ Wishlist bhi API se
  useEffect(() => {
    if (fetchWishlist) {
      fetchWishlist();
    }
  }, [fetchWishlist]);

  // ✅ My Reviews fetch karo
  useEffect(() => {
    if (fetchMyReviews) {
      fetchMyReviews();
    }
  }, [fetchMyReviews]);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <BiGridAlt className="text-base" /> },
    { id: "profile", label: "My Profile", icon: <BiUser className="text-base" /> },
    { id: "orders", label: "My Orders", icon: <BiPackage className="text-base" /> },
    { id: "wishlist", label: "Sacred Wishlist", icon: <BiHeart className="text-base" /> },
    { id: "addresses", label: "Saved Addresses", icon: <BiMap className="text-base" /> },
    { id: "coupons", label: "Coupons & Offers", icon: <BiGift className="text-base" /> },
    { id: "reviews", label: "My Reviews", icon: <BiStar className="text-base" /> },
    { id: "returns", label: "My Returns", icon: <BiRefresh className="text-base" /> },
    { id: "recently-viewed", label: "Recently Viewed", icon: <BiHistory className="text-base" /> },
    { id: "notifications", label: "Notifications", icon: <BiBell className="text-base" /> },
    { id: "support", label: "Help & Support", icon: <BiSupport className="text-base" /> },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* 🌟 Professional Header — Maroon */}
      <header className="bg-[#5A1F1F] text-white border-b border-[#3d1414] px-4 h-12 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <h3 className="font-bold text-white text-xs sm:text-sm m-0">
              Account Dashboard
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("notifications")}
            className="relative p-1.5 text-white hover:bg-white/10 rounded transition cursor-pointer"
            title="Notifications"
          >
            <BiBell className="text-base" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full ring-1 ring-[#5A1F1F]"></span>
          </button>

          <div className="flex items-center gap-2 pl-2 border-l border-white/20">
            <div className="w-6 h-6 rounded bg-white text-[#5A1F1F] flex items-center justify-center font-bold text-xs">
              {profile.fullName ? profile.fullName.charAt(0) : "U"}
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <span className="text-[11px] font-bold text-white block">
                {profile.fullName}
              </span>
              <span className="text-[8px] text-white font-medium block">
                Verified
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Body Grid */}
      <div className="bg-white flex-1 max-w-[1400px] w-full top-0 grid grid-cols-1 lg:grid-cols-12 gap-6 mx-auto">
        {/* 🌟 Refined Left Sidebar — Maroon */}
        <aside className="lg:col-span-3 bg-[#5A1F1F] p-3.5 space-y-3 h-fit shadow-xs">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-xs rounded-md cursor-pointer transition-all duration-200 group relative ${
                    isActive
                      ? "bg-[#3d1414] text-white shadow-sm font-bold"
                      : "text-stone-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`transition-transform duration-200 ${
                        isActive
                          ? "scale-110 text-amber-300"
                          : "text-white group-hover:text-amber-300"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={
                        isActive
                          ? "text-white font-bold"
                          : "text-white group-hover:text-stone-200"
                      }
                    >
                      {item.label}
                    </span>
                  </span>
                  <BiChevronRight
                    className={`text-xs transition-transform duration-200 ${
                      isActive
                        ? "text-white translate-x-0.5"
                        : "text-stone-300 group-hover:text-stone-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/20 space-y-1">
            <button
              onClick={() => {
                if (onBackToHome) onBackToHome();
                else alert("Returned to Home website!");
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-white hover:bg-white/10 rounded-xl transition cursor-pointer"
            >
              <BiShoppingBag className="text-base text-white" /> Back to Store
            </button>
            <button
              onClick={() => {
                if (logout) logout();
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                alert("Logged out successfully!");
                window.location.href = "/login";
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-rose-200 hover:bg-rose-900/50 rounded-xl transition cursor-pointer"
            >
              <BiLogOut className="text-base text-rose-300" /> Sign Out
            </button>
          </div>
        </aside>

        {/* Right Main Content Panel */}
        <main className="lg:col-span-9 bg-white sm:p-4 shadow-xs min-h-[600px]">
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
          {activeTab === "profile" && (
            <ProfileTab profile={profile} setProfile={setProfile} />
          )}
          {activeTab === "orders" && (
            <OrdersTab orders={orders} onNavigateTracking={onNavigateTracking} />
          )}
          {activeTab === "wishlist" && (
            <WishlistTab
              wishlist={wishlist}
              setWishlist={setWishlist}
              onNavigateCart={onNavigateCart}
            />
          )}
          {activeTab === "addresses" && (
            <AddressesTab addresses={addresses} setAddresses={setAddresses} />
          )}
          {activeTab === "coupons" && <CouponsTab />}
          {activeTab === "kundli" && <KundliTab kundliData={kundliData} />}
          {activeTab === "remedies" && (
            <RemediesTab remedies={remedies} onNavigateCart={onNavigateCart} />
          )}
          {activeTab === "consultations" && (
            <ConsultationsTab consultations={consultations} />
          )}
          {activeTab === "reviews" && <ReviewsTab reviews={myReviews} />}
          {activeTab === "returns" && <ReturnsTab returns={returns} />}
          {activeTab === "recently-viewed" && (
            <RecentlyViewedTab
              recentlyViewed={recentlyViewed}
              onNavigateCart={onNavigateCart}
            />
          )}
          {activeTab === "notifications" && (
            <NotificationsTab
              notifications={notifications}
              setNotifications={setNotifications}
            />
          )}
          {activeTab === "support" && <SupportTab />}
        </main>
      </div>
    </div>
  );
}