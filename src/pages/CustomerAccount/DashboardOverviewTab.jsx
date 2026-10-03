


// import React from "react";
// import { 
//   BiShoppingBag, 
//   BiWallet, 
//   BiHeart, 
//   BiStar, 
//   BiChevronRight, 
//   BiUser, 
//   BiBookOpen,
//   BiPhoneCall
// } from "react-icons/bi";

// export default function DashboardOverviewTab({ 
//   profile = {}, 
//   orders = [], 
//   wishlist = [], 
//   kundliData = [], 
//   consultations = [], 
//   setActiveTab 
// }) {
//   // 1. Total Spent Dynamic Calculate karna
//   const totalSpent = orders.reduce((acc, curr) => {
//     const amount = Number(curr.totalPrice || curr.totalAmount || curr.total || 0);
//     return acc + amount;
//   }, 0);

//   // 2. User ka First Name nikalna safely-
//   const firstName = profile?.fullName ? profile.fullName.split(" ")[0] : (profile?.name?.split(" ")[0] || "User");

//   return (
//     <div className="space-y-6 bg-white p-4 sm:p-6">
//       {/* 1. Header Welcome Section */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//         <div>
//           <h2 className="text-2xl font-bold text-[#4a2e18]">
//             Good day, {firstName} 🙏
//           </h2>
//           <p className="text-sm text-stone-700">
//             Welcome back! Here’s what’s happening with your account & spiritual journey.
//           </p>
//         </div>
//       </div>

//       {/* 2. Top Metric Stats Cards */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
//         {/* Total Orders Card */}
//         <div className="bg-gradient-to-r from-red-800 to-red-600 border border-stone-200 rounded-md p-4 flex items-center gap-3.5 shadow-sm">
//           <div className="w-11 h-11  text-white rounded-lg flex items-center justify-center text-xl shrink-0">
//             <BiShoppingBag />
//           </div>
//           <div>
//             <span className="text-[14px]  text-white block uppercase tracking-wider">Total Orders</span>
//             <div className="flex items-baseline gap-2">
//               <span className="text-lg font-bold text-white">{orders.length}</span>
//               <button onClick={() => setActiveTab("orders")} className="text-[12px] text-white font-bold hover:underline flex items-center">
//                 View <BiChevronRight />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Total Spent Card */}
//         <div className="bg-gradient-to-r from-red-800 to-red-600 border border-stone-200 rounded-md p-4 flex items-center gap-3.5 shadow-sm">
//           <div className="w-11 h-11  text-white rounded-lg flex items-center justify-center text-xl shrink-0">
//             <BiWallet />
//           </div>
//           <div>
//             <span className="text-[12px]  text-white block uppercase tracking-wider">Total Spent</span>
//             <div className="flex items-baseline gap-2">
//               <span className="text-lg font-bold text-white">₹{totalSpent}</span>
//             </div>
//           </div>
//         </div>

//         {/* Wishlist Items Card */}
//         <div className="bg-gradient-to-r from-red-800 to-red-600 border border-stone-200 rounded-md p-4 flex items-center gap-3.5 shadow-sm">
//           <div className="w-11 h-11  text-white rounded-lg flex items-center justify-center text-xl shrink-0">
//             <BiHeart />
//           </div>
//           <div>
//             <span className="text-[12px]  text-white block uppercase tracking-wider">Wishlist</span>
//             <div className="flex items-baseline gap-2">
//               <span className="text-lg font-bold text-white">{wishlist.length} Items</span>
//               <button onClick={() => setActiveTab("wishlist")} className="text-[10px] text-white font-bold hover:underline flex items-center">
//                 View <BiChevronRight />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Loyalty Points Card (Dynamic or Static fallback) */}
//         <div className="bg-gradient-to-r from-red-800 to-red-600 border border-stone-200 rounded-md p-4 flex items-center gap-3.5 shadow-sm">
//           <div className="w-11 h-11  text-white rounded-lg flex items-center justify-center text-xl shrink-0">
//             <BiStar />
//           </div>
//           <div>
//             <span className="text-[12px]  text-white block uppercase tracking-wider">Loyalty Points</span>
//             <div className="flex items-baseline gap-2">
//               <span className="text-lg font-bold text-white">{profile.loyaltyPoints || 450} Pts</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 3. Main Dashboard Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
//         {/* Left Column (2 Cols wide on desktop) */}
//         <div className="lg:col-span-2 space-y-6">
          
//           {/* Recent Orders Box */}
//           <div className="bg-white   p-5 shadow-sm space-y-4">
//             <div className="flex justify-between items-center">
//               <h3 className="font-bold text-black text-sm">Recent Orders</h3>
//               <button 
//                 onClick={() => setActiveTab("orders")}
//                 className="text-xs text-red-800 font-bold hover:underline flex items-center"
//               >
//                 View All <BiChevronRight />
//               </button>
//             </div>

//             <div className="divide-y divide-black">
//               {orders.length === 0 ? (
//                 <p className="text-xs text-black py-4 text-center">No recent orders found.</p>
//               ) : (
//                 orders.slice(0, 3).map((item) => {
//                   const orderId = item._id || item.id;
//                   const itemNames = item.orderItems ? item.orderItems.map(i => i.name).join(', ') : (item.items || 'Products');
//                   const itemTotal = item.totalPrice || item.totalAmount || item.total || 0;
//                   const itemStatus = item.status || 'Processing';

//                   return (
//                     <div key={orderId} className="py-3.5 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10   flex items-center justify-center text-black shrink-0">
//                           <BiShoppingBag className="text-lg text-red-800" />
//                         </div>
//                         <div>
//                           <h4 className="text-xs font-bold text-black">#{orderId.slice(-6)}</h4>
//                           <p className="text-[11px] text-black truncate max-w-[200px] sm:max-w-xs">{itemNames}</p>
//                         </div>
//                       </div>

//                       <div className="text-right">
//                         <span className="text-xs font-bold text-black block">₹{itemTotal}</span>
//                         <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-bold ${
//                           itemStatus === 'Delivered' ? 'bg-gradient-to-r from-red-800 to-red-600 text-emerald-700' : 
//                           itemStatus === 'Cancelled' ? 'bg-gradient-to-r from-red-800 to-red-600 text-red-700' : 'bg-amber-50 text-amber-700'
//                         }`}>
//                           {itemStatus}
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })
//               )}
//             </div>
//           </div>

          
          
//         </div>

//         {/* Right Column (1 Col wide on desktop) */}
//         <div className="space-y-6">
          
//           {/* Account Information Card */}
//           <div className="bg-white border border-stone-200 rounded-md p-5 shadow-sm space-y-4">
//             <div className="flex justify-between items-center border-b border-stone-100 pb-3">
//               <h3 className="font-bold text-stone-800 text-sm flex items-center gap-1.5">
//                 <BiUser className="text-red-800" /> Account Info
//               </h3>
//               <button 
//                 onClick={() => setActiveTab("profile")}
//                 className="text-xs text-[#8c0a15] font-bold hover:underline"
//               >
//                 Edit
//               </button>
//             </div>

//             <div className="space-y-3 text-xs">
//               <div>
//                 <span className="text-[10px] text-black font-bold uppercase block">Full Name</span>
//                 <span className="font-bold text-black">{profile.fullName || profile.name || "N/A"}</span>
//               </div>
//               <div>
//                 <span className="text-[10px] text-black font-bold uppercase block">Email Address</span>
//                 <span className="font-bold text-black">{profile.email || "N/A"}</span>
//               </div>
//               <div>
//                 <span className="text-[10px] text-black font-bold uppercase block">Phone Number</span>
//                 <span className="font-bold text-black">{profile.phone || profile.mobile || "N/A"}</span>
//               </div>
//               <div>
//                 <span className="text-[10px] text-black font-bold uppercase block">Date of Birth</span>
//                 <span className="font-bold text-black">{profile.dob || "Not Provided"}</span>
//               </div>
//             </div>
//           </div>

          

//         </div>

//       </div>
//     </div>
//   );
// }


import React from "react";
import { 
  BiShoppingBag, 
  BiWallet, 
  BiHeart, 
  BiStar, 
  BiChevronRight, 
  BiUser, 
  BiBookOpen,
  BiPhoneCall
} from "react-icons/bi";

export default function DashboardOverviewTab({ 
  profile = {}, 
  orders = [], 
  wishlist = [], 
  kundliData = [], 
  consultations = [], 
  setActiveTab 
}) {
  // 1. Total Spent Dynamic Calculate karna
  const totalSpent = orders.reduce((acc, curr) => {
    const amount = Number(curr.totalPrice || curr.totalAmount || curr.total || 0);
    return acc + amount;
  }, 0);

  // 2. User ka First Name nikalna safely
  const firstName = profile?.fullName ? profile.fullName.split(" ")[0] : (profile?.name?.split(" ")[0] || "User");

  return (
    <div className="space-y-6 bg-white p-4 sm:p-6">
      {/* 1. Header Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-2xl font-bold text-[#5A1F1F]">
            Good day, {firstName} 🙏
          </h2>
          <p className="text-sm text-stone-700">
            Welcome back! Here's what's happening with your account & spiritual journey.
          </p>
        </div>
      </div>

      {/* 2. Top Metric Stats Cards — Maroon Theme */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Orders Card */}
        <div className="bg-[#5A1F1F] border border-[#5A1F1F]/20 rounded-md p-4 flex items-center gap-3.5 shadow-sm">
          <div className="w-11 h-11 text-white rounded-lg flex items-center justify-center text-xl shrink-0">
            <BiShoppingBag />
          </div>
          <div>
            <span className="text-[14px] text-white block uppercase tracking-wider">Total Orders</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white">{orders.length}</span>
              <button onClick={() => setActiveTab("orders")} className="text-[12px] text-white font-bold hover:underline flex items-center">
                View <BiChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Total Spent Card */}
        <div className="bg-[#5A1F1F] border border-[#5A1F1F]/20 rounded-md p-4 flex items-center gap-3.5 shadow-sm">
          <div className="w-11 h-11 text-white rounded-lg flex items-center justify-center text-xl shrink-0">
            <BiWallet />
          </div>
          <div>
            <span className="text-[12px] text-white block uppercase tracking-wider">Total Spent</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white">₹{totalSpent}</span>
            </div>
          </div>
        </div>

        {/* Wishlist Items Card */}
        <div className="bg-[#5A1F1F] border border-[#5A1F1F]/20 rounded-md p-4 flex items-center gap-3.5 shadow-sm">
          <div className="w-11 h-11 text-white rounded-lg flex items-center justify-center text-xl shrink-0">
            <BiHeart />
          </div>
          <div>
            <span className="text-[12px] text-white block uppercase tracking-wider">Wishlist</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white">{wishlist.length} Items</span>
              <button onClick={() => setActiveTab("wishlist")} className="text-[10px] text-white font-bold hover:underline flex items-center">
                View <BiChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Loyalty Points Card */}
        <div className="bg-[#5A1F1F] border border-[#5A1F1F]/20 rounded-md p-4 flex items-center gap-3.5 shadow-sm">
          <div className="w-11 h-11 text-white rounded-lg flex items-center justify-center text-xl shrink-0">
            <BiStar />
          </div>
          <div>
            <span className="text-[12px] text-white block uppercase tracking-wider">Loyalty Points</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white">{profile.loyaltyPoints || 450} Pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Dashboard Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Recent Orders Box */}
          <div className="bg-white p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-black text-sm">Recent Orders</h3>
              <button 
                onClick={() => setActiveTab("orders")}
                className="text-xs text-[#5A1F1F] font-bold hover:underline flex items-center"
              >
                View All <BiChevronRight />
              </button>
            </div>

            <div className="divide-y divide-black">
              {orders.length === 0 ? (
                <p className="text-xs text-black py-4 text-center">No recent orders found.</p>
              ) : (
                orders.slice(0, 3).map((item) => {
                  const orderId = item._id || item.id;
                  const itemNames = item.orderItems ? item.orderItems.map(i => i.name).join(', ') : (item.items || 'Products');
                  const itemTotal = item.totalPrice || item.totalAmount || item.total || 0;
                  const itemStatus = item.status || 'Processing';

                  return (
                    <div key={orderId} className="py-3.5 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center text-black shrink-0">
                          <BiShoppingBag className="text-lg text-[#5A1F1F]" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-black">#{orderId.slice(-6)}</h4>
                          <p className="text-[11px] text-black truncate max-w-[200px] sm:max-w-xs">{itemNames}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-black block">₹{itemTotal}</span>
                        <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          itemStatus === 'Delivered' 
                            ? 'bg-green-50 text-green-700' 
                            : itemStatus === 'Cancelled' 
                            ? 'bg-red-50 text-red-700' 
                            : 'bg-amber-50 text-amber-700'
                        }`}>
                          {itemStatus}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Account Information Card */}
          <div className="bg-white border border-stone-200 rounded-md p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-stone-100 pb-3">
              <h3 className="font-bold text-stone-800 text-sm flex items-center gap-1.5">
                <BiUser className="text-[#5A1F1F]" /> Account Info
              </h3>
              <button 
                onClick={() => setActiveTab("profile")}
                className="text-xs text-[#5A1F1F] font-bold hover:underline"
              >
                Edit
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] text-black font-bold uppercase block">Full Name</span>
                <span className="font-bold text-black">{profile.fullName || profile.name || "N/A"}</span>
              </div>
              <div>
                <span className="text-[10px] text-black font-bold uppercase block">Email Address</span>
                <span className="font-bold text-black">{profile.email || "N/A"}</span>
              </div>
              <div>
                <span className="text-[10px] text-black font-bold uppercase block">Phone Number</span>
                <span className="font-bold text-black">{profile.phone || profile.mobile || "N/A"}</span>
              </div>
              <div>
                <span className="text-[10px] text-black font-bold uppercase block">Date of Birth</span>
                <span className="font-bold text-black">{profile.dob || "Not Provided"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}