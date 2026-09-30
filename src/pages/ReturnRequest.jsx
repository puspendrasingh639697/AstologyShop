// src/pages/ReturnRequest.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack, BiPackage } from 'react-icons/bi';
import apiClient from '../config/apiClient';
import useReturnStore from '../store/useReturnStore';

const ReturnRequest = () => {
  const navigate = useNavigate();
  const { createReturn } = useReturnStore();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    reason: '',
    description: '',
    returnType: 'Refund',
  });

  // ✅ Fetch delivered orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await apiClient.get('/orders/myorders');
        if (res.data.success) {
          // ✅ Sirf delivered orders
          const deliveredOrders = (res.data.orders || []).filter(
            (o) => o.status === 'Delivered' && !o.isReturned
          );
          setOrders(deliveredOrders);
        }
      } catch (err) {
        console.error('Orders fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedOrder) {
      alert('Please select an order');
      return;
    }

    if (!formData.reason) {
      alert('Please select a reason');
      return;
    }

    setSubmitting(true);

    const items = selectedOrder.orderItems.map((item) => ({
      productId: item.productId,
      name: item.name,
      image: item.image,
      price: item.price,
      qty: item.qty,
    }));

    const result = await createReturn({
      orderId: selectedOrder._id,
      items,
      reason: formData.reason,
      description: formData.description,
      refundAmount: selectedOrder.totalPrice,
      returnType: formData.returnType,
    });

    setSubmitting(false);

    if (result.success) {
      alert('Return request submitted successfully! ✅');
      navigate('/account');
    } else {
      alert(result.error || 'Failed to submit return');
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-stone-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-[#fff3df] min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-stone-600 hover:text-[#8c0a15] mb-4"
      >
        <BiArrowBack /> Back
      </button>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-serif font-bold text-[#4a2e18] mb-2">
          Return Request
        </h2>
        <p className="text-sm text-stone-500 mb-6">
          Select an order and submit a return request.
        </p>

        {orders.length === 0 ? (
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 text-center">
            <BiPackage className="text-5xl text-stone-300 mx-auto mb-3" />
            <p className="text-sm text-stone-500">
              Aapke paas koi delivered order nahi hai jo return ho sake.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Order Selection */}
            <div>
              <label className="block text-xs font-bold uppercase text-stone-600 mb-2">
                Select Order *
              </label>
              <div className="space-y-2">
                {orders.map((order) => (
                  <label
                    key={order._id}
                    className={`block p-4 border rounded-lg cursor-pointer transition ${
                      selectedOrder?._id === order._id
                        ? 'border-[#8c0a15] bg-[#8c0a15]/5'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="order"
                        checked={selectedOrder?._id === order._id}
                        onChange={() => setSelectedOrder(order)}
                      />
                      <div className="flex-1">
                        <p className="text-xs text-stone-500 font-bold uppercase">
                          Order #{order._id?.slice(-8)}
                        </p>
                        <p className="text-sm font-bold text-[#4a2e18]">
                          {order.orderItems
                            ?.map((i) => i.name)
                            .join(', ')
                            .slice(0, 50)}
                          ...
                        </p>
                        <p className="text-xs text-stone-500 mt-1">
                          Total: <strong>₹{order.totalPrice}</strong> | Date:{' '}
                          {new Date(order.createdAt).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                Reason *
              </label>
              <select
                value={formData.reason}
                onChange={(e) =>
                  setFormData({ ...formData, reason: e.target.value })
                }
                required
                className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#8c0a15] text-sm bg-white"
              >
                <option value="">-- Select Reason --</option>
                <option value="Damaged Product">Damaged Product</option>
                <option value="Wrong Item">Wrong Item</option>
                <option value="Not as Described">Not as Described</option>
                <option value="Size/Fit Issue">Size/Fit Issue</option>
                <option value="Quality Issue">Quality Issue</option>
                <option value="Changed Mind">Changed Mind</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Return Type */}
            <div>
              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                Return Type
              </label>
              <select
                value={formData.returnType}
                onChange={(e) =>
                  setFormData({ ...formData, returnType: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#8c0a15] text-sm bg-white"
              >
                <option value="Refund">Refund</option>
                <option value="Replacement">Replacement</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows="4"
                placeholder="Explain the issue..."
                className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#8c0a15] text-sm"
              />
            </div>

            {/* Submit */}
            <div className="flex gap-3 pt-4 border-t border-stone-100">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-[#8c0a15] hover:bg-[#6b080f] text-white py-3 rounded-lg font-bold text-sm transition disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit Return Request'}
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="bg-stone-200 hover:bg-stone-300 text-stone-700 px-6 py-3 rounded-lg font-bold text-sm transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReturnRequest;