// // import React from "react";

// // export default function OrdersTab({ orders, onNavigateTracking }) {
// //   return (
// //     <div className="space-y-6">
// //       <div className="pb-4 border-b border-stone-200">
// //         <h3 className="text-base font-serif font-bold text-[#4a2e18]">Order History</h3>
// //         <p className="text-xs text-stone-500">Track and view details of all your previous orders.</p>
// //       </div>

// //       <div className="space-y-4">
// //         {orders.map((ord) => (
// //           <div key={ord.id} className="bg-stone-50 border border-stone-200 rounded-sm p-4 space-y-3 text-xs">
// //             <div className="flex flex-wrap justify-between items-center gap-2 pb-2 border-b border-stone-200">
// //               <div>
// //                 <span className="text-stone-400 block uppercase font-bold text-[10px]">Order ID</span>
// //                 <strong className="text-[#8b3a2b] font-serif text-sm">{ord.id}</strong>
// //               </div>
// //               <div>
// //                 <span className="text-stone-400 block uppercase font-bold text-[10px]">Placed On</span>
// //                 <span className="font-bold text-stone-700">{ord.date}</span>
// //               </div>
// //               <div>
// //                 <span className="text-stone-400 block uppercase font-bold text-[10px]">Status</span>
// //                 <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${ord.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
// //                   {ord.status}
// //                 </span>
// //               </div>
// //             </div>

// //             <div className="flex justify-between items-center font-serif">
// //               <div>
// //                 <p className="font-bold text-[#4a2e18]">{ord.items}</p>
// //                 <p className="text-[11px] text-stone-500">Total Amount: <strong className="text-[#8b3a2b]">Rs. {ord.total}</strong></p>
// //               </div>
// //               {onNavigateTracking && (
// //                 <button 
// //                   onClick={onNavigateTracking}
// //                   className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 font-bold uppercase rounded-sm cursor-pointer transition text-[10px]"
// //                 >
// //                   Track Order &rarr;
// //                 </button>
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function OrdersTab({ onNavigateTracking }) {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem('token');
        
//         // Backend API call to get user orders (Common route: /api/orders/my-orders or /api/orders)
//         const response = await axios.get('http://localhost:5000/api/orders', {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         // Backend ke response ke hisab se data set karein (response.data ya response.data.orders)
//         const fetchedOrders = response.data.orders || response.data || [];
//         setOrders(fetchedOrders);
//       } catch (err) {
//         console.error("Failed to fetch orders:", err);
//         setErrorMsg("Failed to load your order history. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return <div className="text-xs text-stone-500 py-6 text-center">Loading your orders...</div>;
//   }

//   if (errorMsg) {
//     return <div className="bg-rose-100 text-rose-800 p-3 rounded text-xs">{errorMsg}</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <div className="pb-4 border-b border-stone-200">
//         <h3 className="text-base font-serif font-bold text-[#4a2e18]">Order History</h3>
//         <p className="text-xs text-stone-500">Track and view details of all your previous orders.</p>
//       </div>

//       {orders.length === 0 ? (
//         <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 text-center text-xs text-stone-500 font-serif">
//           You haven't placed any orders yet.
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {orders.map((ord) => {
//             // MongoDB fields mapping (_id, createdAt, status, totalPrice, items/products)
//             const orderId = ord._id || ord.id;
//             const orderDate = ord.createdAt ? new Date(ord.createdAt).toLocaleDateString() : (ord.date || "N/A");
//             const orderStatus = ord.status || "Processing";
//             const orderTotal = ord.totalPrice || ord.total || 0;
            
//             // Items name extract karna (agar items array me hain)
//             const itemsText = ord.orderItems 
//               ? ord.orderItems.map(item => item.name || item.title).join(", ") 
//               : (ord.items || "Jpam Product");

//             return (
//               <div key={orderId} className="bg-stone-50 border border-stone-200 rounded-sm p-4 space-y-3 text-xs">
//                 <div className="flex flex-wrap justify-between items-center gap-2 pb-2 border-b border-stone-200">
//                   <div>
//                     <span className="text-stone-400 block uppercase font-bold text-[10px]">Order ID</span>
//                     <strong className="text-[#8b3a2b] font-serif text-sm">{orderId}</strong>
//                   </div>
//                   <div>
//                     <span className="text-stone-400 block uppercase font-bold text-[10px]">Placed On</span>
//                     <span className="font-bold text-stone-700">{orderDate}</span>
//                   </div>
//                   <div>
//                     <span className="text-stone-400 block uppercase font-bold text-[10px]">Status</span>
//                     <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${orderStatus === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
//                       {orderStatus}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center font-serif">
//                   <div>
//                     <p className="font-bold text-[#4a2e18]">{itemsText}</p>
//                     <p className="text-[11px] text-stone-500">Total Amount: <strong className="text-[#8b3a2b]">Rs. {orderTotal}</strong></p>
//                   </div>
//                   {onNavigateTracking && (
//                     <button 
//                       onClick={() => onNavigateTracking(orderId)}
//                       className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 font-bold uppercase rounded-sm cursor-pointer transition text-[10px]"
//                     >
//                       Track Order &rarr;
//                     </button>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import axios from "axios";

export default function OrdersTab({ onNavigateTracking }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        
        // ✅ Sahi API endpoint yahan set kar diya hai
        const response = await axios.get('http://localhost:5000/api/orders/myorders', {
          headers: { Authorization: `Bearer ${token}` }
        });

        // Backend ke response ke anusaar 'orders' array extract kar rahe hain
        const fetchedOrders = response.data.orders || [];
        setOrders(fetchedOrders);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setErrorMsg("Failed to load your order history. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-xs text-stone-500 py-6 text-center">Loading your orders...</div>;
  }

  if (errorMsg) {
    return <div className="bg-rose-100 text-rose-800 p-3 rounded text-xs">{errorMsg}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-stone-200">
        <h3 className="text-base font-serif font-bold text-[#4a2e18]">Order History</h3>
        <p className="text-xs text-stone-500">Track and view details of all your previous orders.</p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 text-center text-xs text-stone-500 font-serif">
          You haven't placed any orders yet.
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((ord) => {
            const orderId = ord._id;
            const orderDate = ord.createdAt ? new Date(ord.createdAt).toLocaleDateString() : "N/A";
            const orderStatus = ord.status || "Processing";
            const orderTotal = ord.totalPrice || 0;
            
            // Order items se product ka naam extract karna
            const itemsText = ord.orderItems && ord.orderItems.length > 0
              ? ord.orderItems.map(item => `${item.name} (x${item.qty})`).join(", ") 
              : "Jpam Product";

            return (
              <div key={orderId} className="bg-stone-50 border border-stone-200 rounded-sm p-4 space-y-3 text-xs">
                <div className="flex flex-wrap justify-between items-center gap-2 pb-2 border-b border-stone-200">
                  <div>
                    <span className="text-stone-400 block uppercase font-bold text-[10px]">Order ID</span>
                    <strong className="text-[#8b3a2b] font-serif text-sm">{orderId}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase font-bold text-[10px]">Placed On</span>
                    <span className="font-bold text-stone-700">{orderDate}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase font-bold text-[10px]">Status</span>
                    <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${orderStatus === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                      {orderStatus}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center font-serif">
                  <div>
                    <p className="font-bold text-[#4a2e18]">{itemsText}</p>
                    <p className="text-[11px] text-stone-500">Total Amount: <strong className="text-[#8b3a2b]">Rs. {orderTotal}</strong></p>
                  </div>
                  {onNavigateTracking && (
                    <button 
                      onClick={() => onNavigateTracking(orderId)}
                      className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 font-bold uppercase rounded-sm cursor-pointer transition text-[10px]"
                    >
                      Track Order &rarr;
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}