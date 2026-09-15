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
//   profile, 
//   orders, 
//   wishlist, 
//   kundliData, 
//   consultations, 
//   setActiveTab 
// }) {
//   return (
//     <div className="space-y-6 bg-[#fff3df]">
//       {/* 1. Header Welcome Section */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//         <div>
//           <h2 className="text-2xl  font-bold text-[#4a2e18]">
//             Good day, {profile.fullName.split(" ")[0]} 🙏
//           </h2>
//           <p className="text-x2 text-black">
//             Welcome back! Here’s what’s happening with your account & spiritual journey.
//           </p>
//         </div>
//       </div>

//       {/* 2. Top Metric Stats Cards */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//         {/* Total Orders Card */}
//         <div className=" border border-stone-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
//           <div className="w-11 h-11  text-blue-600 rounded-lg flex items-center justify-center text-xl shrink-0">
//             <BiShoppingBag />
//           </div>
//           <div>
//             <span className="text-[14px]  text-black block">Total Orders</span>
//             <div className="flex items-baseline gap-2">
//               <span className="text-lg font-bold text-stone-800">{orders.length}</span>
//               <button onClick={() => setActiveTab("orders")} className="text-[10px] text-blue-600 font-bold hover:underline flex items-center">
//                 View <BiChevronRight />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Total Spent Card */}
//         <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
//           <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center text-xl shrink-0">
//             <BiWallet />
//           </div>
//           <div>
//             <span className="text-[11px] font-semibold text-stone-400 block uppercase tracking-wider">Total Spent</span>
//             <div className="flex items-baseline gap-2">
//               <span className="text-lg font-bold text-stone-800">₹{orders.reduce((acc, curr) => acc + curr.total, 0)}</span>
//             </div>
//           </div>
//         </div>

//         {/* Wishlist Items Card */}
//         <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
//           <div className="w-11 h-11 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center text-xl shrink-0">
//             <BiHeart />
//           </div>
//           <div>
//             <span className="text-[11px] font-semibold text-stone-400 block uppercase tracking-wider">Wishlist</span>
//             <div className="flex items-baseline gap-2">
//               <span className="text-lg font-bold text-stone-800">{wishlist.length} Items</span>
//               <button onClick={() => setActiveTab("wishlist")} className="text-[10px] text-rose-600 font-bold hover:underline flex items-center">
//                 View <BiChevronRight />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Loyalty Points Card */}
//         <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
//           <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center text-xl shrink-0">
//             <BiStar />
//           </div>
//           <div>
//             <span className="text-[11px] font-semibold text-stone-400 block uppercase tracking-wider">Loyalty Points</span>
//             <div className="flex items-baseline gap-2">
//               <span className="text-lg font-bold text-stone-800">450 Pts</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 3. Main Dashboard Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
//         {/* Left Column (2 Cols wide on desktop) */}
//         <div className="lg:col-span-2 space-y-6">
          
//           {/* Recent Orders Box */}
//           <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-4">
//             <div className="flex justify-between items-center">
//               <h3 className="font-serif font-bold text-stone-800 text-sm">Recent Orders</h3>
//               <button 
//                 onClick={() => setActiveTab("orders")}
//                 className="text-xs text-[#8b3a2b] font-bold hover:underline flex items-center"
//               >
//                 View All <BiChevronRight />
//               </button>
//             </div>

//             <div className="divide-y divide-stone-100">
//               {orders.slice(0, 3).map((item) => (
//                 <div key={item.id} className="py-3.5 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center text-stone-500 shrink-0">
//                       <BiShoppingBag className="text-lg text-[#8c0a15]" />
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-stone-800">{item.id}</h4>
//                       <p className="text-[11px] text-stone-500 truncate max-w-[200px] sm:max-w-xs">{item.items}</p>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <span className="text-xs font-bold text-stone-800 block">₹{item.total}</span>
//                     <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-bold ${
//                       item.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
//                     }`}>
//                       {item.status}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Saved Kundli & Astro Consultations Quick View */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
//             {/* Saved Kundli Widget */}
//             <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-xs font-bold text-[#4a2e18] flex items-center gap-1.5">
//                   <BiBookOpen className="text-[#8c0a15] text-base" /> Saved Kundlis
//                 </span>
//                 <button onClick={() => setActiveTab("kundli")} className="text-[10px] text-[#8b3a2b] font-bold hover:underline">
//                   Manage
//                 </button>
//               </div>
//               <p className="text-[11px] text-stone-500">
//                 You have <strong>{kundliData.length} saved profiles</strong> for Kundli & Horoscope matching.
//               </p>
//             </div>

//             {/* Consultations Widget */}
//             <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-xs font-bold text-[#4a2e18] flex items-center gap-1.5">
//                   <BiPhoneCall className="text-[#8c0a15] text-base" /> Astro Consultations
//                 </span>
//                 <button onClick={() => setActiveTab("consultations")} className="text-[10px] text-[#8b3a2b] font-bold hover:underline">
//                   History
//                 </button>
//               </div>
//               <p className="text-[11px] text-stone-500">
//                 Total consultations completed: <strong>{consultations.length} calls</strong>.
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* Right Column (1 Col wide on desktop) */}
//         <div className="space-y-6">
          
//           {/* Account Information Card */}
//           <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-4">
//             <div className="flex justify-between items-center border-b border-stone-100 pb-3">
//               <h3 className="font-serif font-bold text-stone-800 text-sm flex items-center gap-1.5">
//                 <BiUser className="text-[#8c0a15]" /> Account Info
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
//                 <span className="text-[10px] text-stone-400 font-bold uppercase block">Full Name</span>
//                 <span className="font-bold text-stone-700">{profile.fullName}</span>
//               </div>
//               <div>
//                 <span className="text-[10px] text-stone-400 font-bold uppercase block">Email Address</span>
//                 <span className="font-medium text-stone-700">{profile.email}</span>
//               </div>
//               <div>
//                 <span className="text-[10px] text-stone-400 font-bold uppercase block">Phone Number</span>
//                 <span className="font-medium text-stone-700">{profile.phone}</span>
//               </div>
//               <div>
//                 <span className="text-[10px] text-stone-400 font-bold uppercase block">Date of Birth</span>
//                 <span className="font-medium text-stone-700">{profile.dob}</span>
//               </div>
//             </div>
//           </div>

//           {/* Customer Support Banner */}
//           <div className="bg-[#8c0a15] text-white rounded-xl p-5 shadow-sm space-y-3">
//             <h4 className="font-serif font-bold text-sm">Need Assistance?</h4>
//             <p className="text-[11px] text-stone-200">
//               Our spiritual guidance & customer support team is here to help you.
//             </p>
//             <button 
//               onClick={() => setActiveTab("support")}
//               className="w-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-2 rounded-lg transition"
//             >
//               Contact Support
//             </button>
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
    <div className="space-y-6 bg-[#fff3df] p-4 sm:p-6 rounded-xl">
      {/* 1. Header Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-2xl font-bold text-[#4a2e18]">
            Good day, {firstName} 🙏
          </h2>
          <p className="text-sm text-stone-700">
            Welcome back! Here’s what’s happening with your account & spiritual journey.
          </p>
        </div>
      </div>

      {/* 2. Top Metric Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Orders Card */}
        <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
          <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xl shrink-0">
            <BiShoppingBag />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-stone-400 block uppercase tracking-wider">Total Orders</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-stone-800">{orders.length}</span>
              <button onClick={() => setActiveTab("orders")} className="text-[10px] text-blue-600 font-bold hover:underline flex items-center">
                View <BiChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Total Spent Card */}
        <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
          <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center text-xl shrink-0">
            <BiWallet />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-stone-400 block uppercase tracking-wider">Total Spent</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-stone-800">₹{totalSpent}</span>
            </div>
          </div>
        </div>

        {/* Wishlist Items Card */}
        <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
          <div className="w-11 h-11 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center text-xl shrink-0">
            <BiHeart />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-stone-400 block uppercase tracking-wider">Wishlist</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-stone-800">{wishlist.length} Items</span>
              <button onClick={() => setActiveTab("wishlist")} className="text-[10px] text-rose-600 font-bold hover:underline flex items-center">
                View <BiChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Loyalty Points Card (Dynamic or Static fallback) */}
        <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
          <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center text-xl shrink-0">
            <BiStar />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-stone-400 block uppercase tracking-wider">Loyalty Points</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-stone-800">{profile.loyaltyPoints || 450} Pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Dashboard Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (2 Cols wide on desktop) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Recent Orders Box */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-serif font-bold text-stone-800 text-sm">Recent Orders</h3>
              <button 
                onClick={() => setActiveTab("orders")}
                className="text-xs text-[#8b3a2b] font-bold hover:underline flex items-center"
              >
                View All <BiChevronRight />
              </button>
            </div>

            <div className="divide-y divide-stone-100">
              {orders.length === 0 ? (
                <p className="text-xs text-stone-500 py-4 text-center">No recent orders found.</p>
              ) : (
                orders.slice(0, 3).map((item) => {
                  const orderId = item._id || item.id;
                  const itemNames = item.orderItems ? item.orderItems.map(i => i.name).join(', ') : (item.items || 'Products');
                  const itemTotal = item.totalPrice || item.totalAmount || item.total || 0;
                  const itemStatus = item.status || 'Processing';

                  return (
                    <div key={orderId} className="py-3.5 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center text-stone-500 shrink-0">
                          <BiShoppingBag className="text-lg text-[#8c0a15]" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-stone-800">#{orderId.slice(-6)}</h4>
                          <p className="text-[11px] text-stone-500 truncate max-w-[200px] sm:max-w-xs">{itemNames}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-stone-800 block">₹{itemTotal}</span>
                        <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          itemStatus === 'Delivered' ? 'bg-emerald-50 text-emerald-700' : 
                          itemStatus === 'Cancelled' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'
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

          {/* Saved Kundli & Astro Consultations Quick View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Saved Kundli Widget */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#4a2e18] flex items-center gap-1.5">
                  <BiBookOpen className="text-[#8c0a15] text-base" /> Saved Kundlis
                </span>
                <button onClick={() => setActiveTab("kundli")} className="text-[10px] text-[#8b3a2b] font-bold hover:underline">
                  Manage
                </button>
              </div>
              <p className="text-[11px] text-stone-500">
                You have <strong>{kundliData.length} saved profiles</strong> for Kundli & Horoscope matching.
              </p>
            </div>

            {/* Consultations Widget */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#4a2e18] flex items-center gap-1.5">
                  <BiPhoneCall className="text-[#8c0a15] text-base" /> Astro Consultations
                </span>
                <button onClick={() => setActiveTab("consultations")} className="text-[10px] text-[#8b3a2b] font-bold hover:underline">
                  History
                </button>
              </div>
              <p className="text-[11px] text-stone-500">
                Total consultations completed: <strong>{consultations.length} calls</strong>.
              </p>
            </div>

          </div>
        </div>

        {/* Right Column (1 Col wide on desktop) */}
        <div className="space-y-6">
          
          {/* Account Information Card */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-stone-100 pb-3">
              <h3 className="font-serif font-bold text-stone-800 text-sm flex items-center gap-1.5">
                <BiUser className="text-[#8c0a15]" /> Account Info
              </h3>
              <button 
                onClick={() => setActiveTab("profile")}
                className="text-xs text-[#8c0a15] font-bold hover:underline"
              >
                Edit
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] text-stone-400 font-bold uppercase block">Full Name</span>
                <span className="font-bold text-stone-700">{profile.fullName || profile.name || "N/A"}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 font-bold uppercase block">Email Address</span>
                <span className="font-medium text-stone-700">{profile.email || "N/A"}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 font-bold uppercase block">Phone Number</span>
                <span className="font-medium text-stone-700">{profile.phone || profile.mobile || "N/A"}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 font-bold uppercase block">Date of Birth</span>
                <span className="font-medium text-stone-700">{profile.dob || "Not Provided"}</span>
              </div>
            </div>
          </div>

          {/* Customer Support Banner */}
          <div className="bg-[#8c0a15] text-white rounded-xl p-5 shadow-sm space-y-3">
            <h4 className="font-serif font-bold text-sm">Need Assistance?</h4>
            <p className="text-[11px] text-stone-200">
              Our spiritual guidance & customer support team is here to help you.
            </p>
            <button 
              onClick={() => setActiveTab("support")}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-2 rounded-lg transition"
            >
              Contact Support
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}