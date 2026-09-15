import React, { useEffect } from 'react';
import useOrderStore from '../store/useOrderStore';

const MyOrders = () => {
  const { orders, loading, fetchMyOrders, cancelOrder } = useOrderStore();

  useEffect(() => {
    const token = localStorage.getItem('token') || JSON.parse(localStorage.getItem('user') || '{}').token;
    fetchMyOrders(token);
  }, [fetchMyOrders]);

  const handleCancel = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;

    const token = localStorage.getItem('token') || JSON.parse(localStorage.getItem('user') || '{}').token;
    const result = await cancelOrder(orderId, token);

    if (result.success) {
      alert("Order cancelled successfully!");
    } else {
      alert(result.error);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-[#4a2e18] font-serif text-xl bg-[#fff3df] min-h-[70vh]">
        Loading your orders...
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 bg-[#fff3df] min-h-[70vh]">
      <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18] mb-6 border-b border-[#d4b59d] pb-3">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600 text-lg mb-4">You haven't placed any orders yet.</p>
          <a href="/" className="inline-block bg-[#4a2e18] text-white px-6 py-2 rounded-md hover:bg-[#352010] transition">
            Shop Now
          </a>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => {
            const isCancelled = order.status === 'Cancelled' || order.isCancelled;
            const canCancel = order.status === 'Processing' || order.status === 'Pending' || !order.status;

            return (
              <div key={order._id} className="bg-white rounded-lg shadow-md p-6 border border-[#e6d5c3]">
                <div className="flex flex-wrap justify-between items-center mb-4 pb-3 border-b border-gray-100 text-sm">
                  <div>
                    <span className="text-gray-500 font-medium">Order ID: </span>
                    <span className="font-semibold text-[#4a2e18]">{order._id}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Date: </span>
                    <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      isCancelled ? 'bg-red-100 text-red-700' : 
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {order.status || 'Processing'}
                    </span>
                  </div>
                </div>

                {/* Order Items List */}
                <div className="space-y-3 mb-4">
                  {order.orderItems?.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {item.image && (
                          <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded border" />
                        )}
                        <div>
                          <h4 className="font-medium text-[#4a2e18]">{item.name}</h4>
                          <p className="text-sm text-gray-500">Qty: {item.qty || item.quantity}</p>
                        </div>
                      </div>
                      <div className="font-semibold text-[#4a2e18]">
                        Rs. {item.price * (item.qty || item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Footer Details & Cancel Button */}
                <div className="flex flex-wrap justify-between items-center pt-4 border-t border-gray-100 text-sm">
                  <div>
                    <span className="text-gray-600">Payment: </span>
                    <span className="font-medium uppercase">{order.paymentMethod}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-lg font-bold text-[#4a2e18]">
                      Total: Rs. {order.totalPrice || order.totalAmount}
                    </div>

                    {/* Show Cancel Button only if order is cancellable */}
                    {canCancel && !isCancelled && (
                      <button
                        onClick={() => handleCancel(order._id)}
                        className="bg-red-50 text-red-600 border border-red-200 px-4 py-1.5 rounded text-xs font-semibold hover:bg-red-100 transition"
                      >
                        Cancel Order
                      </button>
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
};

export default MyOrders;