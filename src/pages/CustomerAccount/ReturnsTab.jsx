// src/pages/CustomerAccount/ReturnsTab.jsx
import React, { useEffect } from 'react';
import { BiRefresh } from 'react-icons/bi';
import useReturnStore from '../../store/useReturnStore';

export default function ReturnsTab() {
  const { returns, loading, error, fetchMyReturns } = useReturnStore();

  useEffect(() => {
    fetchMyReturns();
  }, [fetchMyReturns]);

  // ✅ Loading
  if (loading && returns.length === 0) {
    return (
      <div className="text-center py-8 text-stone-500 text-sm">
        Loading your returns...
      </div>
    );
  }

  // ✅ Error
  if (error && returns.length === 0) {
    return (
      <div className="bg-rose-100 text-rose-800 p-3 rounded text-xs">
        {error}
      </div>
    );
  }

  // ✅ Empty State
  if (returns.length === 0) {
    return (
      <div className="space-y-6">
        <div className="pb-4 border-b border-stone-200">
          <h3 className="text-base  font-bold text-black">
            My Returns
          </h3>
          <p className="text-xs text-black">
            Track your return requests and refunds.
          </p>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-sm p-8 text-center">
          <BiRefresh className="text-5xl text-stone-300 mx-auto mb-3" />
          <p className="text-sm text-black">
            Aapne abhi tak koi return request nahi banayi.
          </p>
        </div>
      </div>
    );
  }

  // ✅ Returns List
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-stone-200">
        <h3 className="text-base  font-bold text-black">
          My Returns
        </h3>
        <p className="text-xs text-black">
          Total <strong>{returns.length}</strong> return requests.
        </p>
      </div>

      <div className="space-y-4">
        {returns.map((ret) => (
          <div
            key={ret._id}
            className="bg-[#5A1F1F] border border-stone-200 rounded-md p-4 hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-[12px] text-white uppercase font-bold">
                  Return ID
                </p>
                <p className="text-sm font-bold text-white">
                  #{ret._id?.slice(-8)}
                </p>
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                  ret.status === 'completed'
                    ? 'bg-emerald-100 text-emerald-700'
                    : ret.status === 'approved'
                    ? 'bg-blue-100 text-blue-700'
                    : ret.status === 'rejected'
                    ? 'bg-rose-100 text-rose-700'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                {ret.status || 'Pending'}
              </span>
            </div>

            {/* Order ID */}
            <p className="text-sm font-bold text-white">
              Order #{ret.order?._id?.slice(-6) || ret.order?.slice(-6) || 'N/A'}
            </p>

            {/* Reason */}
            <p className="text-xs text-white mt-1">
              <strong>Reason:</strong> {ret.reason}
            </p>

            {/* Description */}
            {ret.description && (
              <p className="text-xs text-white mt-1">{ret.description}</p>
            )}

            {/* Footer */}
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-stone-100">
              <span className="text-xs text-white">
                {ret.createdAt
                  ? new Date(ret.createdAt).toLocaleDateString('en-IN')
                  : 'N/A'}
              </span>
              {ret.refundAmount && (
                <span className="text-sm font-bold text-white">
                  ₹{ret.refundAmount.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}