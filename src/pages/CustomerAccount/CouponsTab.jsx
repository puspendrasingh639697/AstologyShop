
// import React, { useState } from 'react';
// import { BiGift, BiCopy, BiCheck } from 'react-icons/bi';
// import useSettingsStore from '../../store/useSettingsStore';

// const CouponsTab = () => {
//   const { settings } = useSettingsStore();
//   const [copiedCode, setCopiedCode] = useState('');

//   // ✅ Admin Panel se coupons lo
//   const allCoupons = settings?.coupons || [];

//   // ✅ Sirf active coupons dikhao
//   const coupons = allCoupons.filter((c) => c.isActive !== false);

//   // ✅ Copy handler
//   const handleCopy = (code) => {
//     navigator.clipboard.writeText(code);
//     setCopiedCode(code);
//     setTimeout(() => setCopiedCode(''), 2000);
//   };

//   // ✅ Expiry text
//   const getExpiryText = (coupon) => {
//     if (!coupon.expiresAt) return 'No expiry';

//     const expiryDate = new Date(coupon.expiresAt);
//     const today = new Date();
//     const diffDays = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));

//     if (diffDays < 0) return 'Expired';
//     if (diffDays === 0) return 'Expires today';
//     if (diffDays === 1) return 'Expires tomorrow';
//     return `Ends in ${diffDays} days`;
//   };

//   // ✅ Discount text
//   const getDiscountText = (coupon) => {
//     if (coupon.discountType === 'percentage') {
//       return `${coupon.discountValue}% OFF`;
//     }
//     return `₹${coupon.discountValue} OFF`;
//   };

//   // ✅ Empty State
//   if (coupons.length === 0) {
//     return (
//       <div className="space-y-6">
//         <div className="pb-4 border-b border-stone-200">
//           <h3 className="text-xl text-[#4a2e18]">
//             Available Coupons
//           </h3>
//           <p className="text-xs text-black mt-1">
//             Use these coupons to save on your orders.
//           </p>
//         </div>

//         <div className="bg-gradient-to-r from-red-800 to-red-600 border border-stone-200 rounded-sm p-8 text-center">
//           <BiGift className="text-5xl text-stone-300 mx-auto mb-3" />
//           <p className="text-sm text-stone-500">
//             Abhi koi coupon available nahi hai.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="pb-4 border-b border-stone-200">
//         <h3 className="text-xl  font-bold text-[#4a2e18]">
//           Available Coupons
//         </h3>
//         <p className="text-xs text-black mt-1">
//           {coupons.length} {coupons.length === 1 ? 'coupon' : 'coupons'} available
//         </p>
//       </div>

//       {/* Coupons Grid */}
//       <div className="grid gap-4">
//         {coupons.map((coupon, idx) => (
//           <div
//             key={coupon._id || idx}
//             className="border border-amber-200 bg-gradient-to-r from-red-800 to-red-600 p-4 rounded-lg flex justify-between items-center hover:shadow-md transition-shadow"
//           >
//             {/* Left: Coupon Details */}
//             <div className="flex-1">
//               <div className="flex items-center gap-2 mb-1">
//                 <p className="font-bold text-white text-lg tracking-wider">
//                   {coupon.code}
//                 </p>
//                 <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">
//                   {getDiscountText(coupon)}
//                 </span>
//               </div>

//               <p className="text-xs text-white">
//                 {coupon.discountType === 'percentage'
//                   ? `Get ${coupon.discountValue}% OFF`
//                   : `Flat ₹${coupon.discountValue} OFF`}
//                 {coupon.minOrderAmount > 0 &&
//                   ` on orders above ₹${coupon.minOrderAmount}`}
//               </p>

//               <p className="text-[12px] text-white mt-1">
//                 {getExpiryText(coupon)}
//               </p>
//             </div>

//             {/* Right: Copy Button */}
//             <button
//               onClick={() => handleCopy(coupon.code)}
//               className={`flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-md transition ${
//                 copiedCode === coupon.code
//                   ? 'bg-green-500 text-white'
//                   : 'bg-white border border-amber-300 text-[#8b3a2b] hover:bg-amber-100'
//               }`}
//             >
//               {copiedCode === coupon.code ? (
//                 <>
//                   <BiCheck /> Copied
//                 </>
//               ) : (
//                 <>
//                   <BiCopy /> Copy
//                 </>
//               )}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CouponsTab;


import React, { useState } from 'react';
import { BiGift, BiCopy, BiCheck } from 'react-icons/bi';
import useSettingsStore from '../../store/useSettingsStore';

const CouponsTab = () => {
  const { settings } = useSettingsStore();
  const [copiedCode, setCopiedCode] = useState('');

  // ✅ Admin Panel se coupons lo
  const allCoupons = settings?.coupons || [];

  // ✅ Sirf active coupons dikhao
  const coupons = allCoupons.filter((c) => c.isActive !== false);

  // ✅ Copy handler
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  // ✅ Expiry text
  const getExpiryText = (coupon) => {
    if (!coupon.expiresAt) return 'No expiry';

    const expiryDate = new Date(coupon.expiresAt);
    const today = new Date();
    const diffDays = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Expired';
    if (diffDays === 0) return 'Expires today';
    if (diffDays === 1) return 'Expires tomorrow';
    return `Ends in ${diffDays} days`;
  };

  // ✅ Discount text
  const getDiscountText = (coupon) => {
    if (coupon.discountType === 'percentage') {
      return `${coupon.discountValue}% OFF`;
    }
    return `₹${coupon.discountValue} OFF`;
  };

  // ✅ Empty State
  if (coupons.length === 0) {
    return (
      <div className="space-y-6">
        <div className="pb-4 border-b border-stone-200">
          <h3 className="text-xl font-bold text-[#5A1F1F]">
            Available Coupons
          </h3>
          <p className="text-xs text-black mt-1">
            Use these coupons to save on your orders.
          </p>
        </div>

        <div className="bg-[#5A1F1F] border border-[#5A1F1F]/20 rounded-sm p-8 text-center">
          <BiGift className="text-5xl text-white/40 mx-auto mb-3" />
          <p className="text-sm text-white/80">
            Abhi koi coupon available nahi hai.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-stone-200">
        <h3 className="text-xl font-bold text-[#5A1F1F]">
          Available Coupons
        </h3>
        <p className="text-xs text-black mt-1">
          {coupons.length} {coupons.length === 1 ? 'coupon' : 'coupons'} available
        </p>
      </div>

      {/* Coupons Grid */}
      <div className="grid gap-4">
        {coupons.map((coupon, idx) => (
          <div
            key={coupon._id || idx}
            className="border border-[#5A1F1F]/20 bg-[#5A1F1F] p-4 rounded-lg flex justify-between items-center hover:shadow-md transition-shadow"
          >
            {/* Left: Coupon Details */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-white text-lg tracking-wider">
                  {coupon.code}
                </p>
                <span className="text-[10px] font-bold bg-white text-[#5A1F1F] px-2 py-0.5 rounded">
                  {getDiscountText(coupon)}
                </span>
              </div>

              <p className="text-xs text-white/90">
                {coupon.discountType === 'percentage'
                  ? `Get ${coupon.discountValue}% OFF`
                  : `Flat ₹${coupon.discountValue} OFF`}
                {coupon.minOrderAmount > 0 &&
                  ` on orders above ₹${coupon.minOrderAmount}`}
              </p>

              <p className="text-[12px] text-white/70 mt-1">
                {getExpiryText(coupon)}
              </p>
            </div>

            {/* Right: Copy Button */}
            <button
              onClick={() => handleCopy(coupon.code)}
              className={`flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-md transition ${
                copiedCode === coupon.code
                  ? 'bg-green-500 text-white'
                  : 'bg-white border border-[#5A1F1F]/20 text-[#5A1F1F] hover:bg-[#F5EBDD]'
              }`}
            >
              {copiedCode === coupon.code ? (
                <>
                  <BiCheck /> Copied
                </>
              ) : (
                <>
                  <BiCopy /> Copy
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponsTab;