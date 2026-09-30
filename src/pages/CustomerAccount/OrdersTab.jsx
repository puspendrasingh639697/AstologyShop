


// import React, { useState, useEffect } from "react";
// import apiClient from "../../config/apiClient";
// // import apiClient from "../../config/api";   // ✅ apiClient use karo

// export default function OrdersTab({ onNavigateTracking }) {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState("");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         console.log("🔍 Fetching orders...");

//         // ✅ apiClient use karo (token auto-add hoga)
//         const response = await apiClient.get('/orders/myorders');

//         console.log("🔍 Orders response:", response.data);

//         const fetchedOrders = response.data.orders || [];
//         setOrders(fetchedOrders);
//       } catch (err) {
//         console.error("❌ Failed to fetch orders:", err);
//         console.error("❌ Error response:", err.response?.data);
//         setErrorMsg(
//           err.response?.data?.message ||
//           "Failed to load your order history. Please try again later."
//         );
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
//             const orderId = ord._id;
//             const orderDate = ord.createdAt ? new Date(ord.createdAt).toLocaleDateString() : "N/A";
//             const orderStatus = ord.status || "Processing";
//             const orderTotal = ord.totalPrice || 0;

//             const itemsText = ord.orderItems && ord.orderItems.length > 0
//               ? ord.orderItems.map(item => `${item.name} (x${item.qty})`).join(", ")
//               : "Product";

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


// src/pages/CustomerAccount/OrdersTab.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../config/apiClient";

export default function OrdersTab({ onNavigateTracking }) {
  const navigate = useNavigate();   // ✅ ADD karo

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("🔍 Fetching orders...");

        const response = await apiClient.get('/orders/myorders');

        console.log("🔍 Orders response:", response.data);

        const fetchedOrders = response.data.orders || [];
        setOrders(fetchedOrders);
      } catch (err) {
        console.error("❌ Failed to fetch orders:", err);
        console.error("❌ Error response:", err.response?.data);
        setErrorMsg(
          err.response?.data?.message ||
          "Failed to load your order history. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // ✅ Return button handler
  const handleReturn = (order) => {
    console.log("🔍 Return clicked for order:", order._id);

    // ✅ Return page par jao with order ID
    navigate(`/account/return/${order._id}`);
  };

  if (loading) {
    return (
      <div className="text-xs text-stone-500 py-6 text-center">
        Loading your orders...
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="bg-rose-100 text-rose-800 p-3 rounded text-xs">
        {errorMsg}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-stone-200">
        <h3 className="text-base font-serif font-bold text-[#4a2e18]">
          Order History
        </h3>
        <p className="text-xs text-stone-500">
          Track and view details of all your previous orders.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 text-center text-xs text-stone-500 font-serif">
          You haven't placed any orders yet.
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((ord) => {
            const orderId = ord._id;
            const orderDate = ord.createdAt
              ? new Date(ord.createdAt).toLocaleDateString("en-IN")
              : "N/A";
            const orderStatus = ord.status || "Processing";
            const orderTotal = ord.totalPrice || 0;

            const itemsText =
              ord.orderItems && ord.orderItems.length > 0
                ? ord.orderItems
                    .map((item) => `${item.name} (x${item.qty})`)
                    .join(", ")
                : "Product";

            // ✅ Return eligible? (Delivered + not already returned)
            const isReturnEligible =
              orderStatus === "Delivered" && !ord.isReturned;

            return (
              <div
                key={orderId}
                className="bg-stone-50 border border-stone-200 rounded-sm p-4 space-y-3 text-xs"
              >
                {/* Header */}
                <div className="flex flex-wrap justify-between items-center gap-2 pb-2 border-b border-stone-200">
                  <div>
                    <span className="text-stone-400 block uppercase font-bold text-[10px]">
                      Order ID
                    </span>
                    <strong className="text-[#8b3a2b] font-serif text-sm">
                      {orderId.slice(-10)}
                    </strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase font-bold text-[10px]">
                      Placed On
                    </span>
                    <span className="font-bold text-stone-700">
                      {orderDate}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase font-bold text-[10px]">
                      Status
                    </span>
                    <span
                      className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                        orderStatus === "Delivered"
                          ? "bg-emerald-100 text-emerald-800"
                          : orderStatus === "Cancelled"
                          ? "bg-red-100 text-red-800"
                          : orderStatus === "Returned"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {orderStatus}
                    </span>
                  </div>
                </div>

                {/* Items + Total */}
                <div className="flex justify-between items-center font-serif flex-wrap gap-3">
                  <div>
                    <p className="font-bold text-[#4a2e18]">{itemsText}</p>
                    <p className="text-[11px] text-stone-500">
                      Total Amount:{" "}
                      <strong className="text-[#8b3a2b]">
                        Rs. {orderTotal}
                      </strong>
                    </p>
                  </div>

                  {/* ✅ Action Buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Track Order */}
                    {onNavigateTracking && (
                      <button
                        onClick={() => onNavigateTracking(orderId)}
                        className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-3 py-1.5 font-bold uppercase rounded-sm cursor-pointer transition text-[10px]"
                      >
                        Track Order →
                      </button>
                    )}

                    {/* ✅ Return Button */}
                    {isReturnEligible && (
                      <button
                        onClick={() => handleReturn(ord)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 font-bold uppercase rounded-sm cursor-pointer transition text-[10px]"
                      >
                        Return
                      </button>
                    )}

                    {/* ✅ Return Requested Badge */}
                    {ord.isReturned && (
                      <span className="bg-purple-100 text-purple-700 px-3 py-1.5 font-bold uppercase rounded-sm text-[10px]">
                        Return Requested
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}