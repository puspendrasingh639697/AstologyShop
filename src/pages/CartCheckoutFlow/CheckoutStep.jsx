// import React from "react";
// import { 
//   BiMap, 
//   BiShoppingBag, 
//   BiWallet, 
//   BiQrScan, 
//   BiCreditCard, 
//   BiBuilding 
// } from "react-icons/bi";

// const CheckoutStep = ({
//   shippingDetails,
//   setShippingDetails,
//   cartItems,
//   shippingFee,
//   grandTotal,
//   handlePlaceOrder,
//   setStep
// }) => {
//   return (
//     <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//       <div className="lg:col-span-2 space-y-6">
        
//         {/* Address & Pincode Section */}
//         <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm space-y-4 text-xs">
//           <h3 className="font-bold uppercase tracking-wider text-[#4a2e18] flex items-center gap-2 pb-2 border-b border-stone-200">
//             <BiMap className="text-base text-[#8b3a2b]" /> Shipping Address & Pincode
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block font-bold uppercase text-stone-600 mb-1">Full Name</label>
//               <input 
//                 type="text" 
//                 value={shippingDetails.fullName}
//                 onChange={(e) => setShippingDetails({...shippingDetails, fullName: e.target.value})}
//                 placeholder="Receiver name" 
//                 className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-bold uppercase text-stone-600 mb-1">Pincode</label>
//               <input 
//                 type="text" 
//                 value={shippingDetails.pincode}
//                 onChange={(e) => setShippingDetails({...shippingDetails, pincode: e.target.value})}
//                 placeholder="110001" 
//                 className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block font-bold uppercase text-stone-600 mb-1">Street Address</label>
//             <input 
//               type="text" 
//               value={shippingDetails.address}
//               onChange={(e) => setShippingDetails({...shippingDetails, address: e.target.value})}
//               placeholder="House no., Colony, Landmark" 
//               className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block font-bold uppercase text-stone-600 mb-1">City</label>
//               <input 
//                 type="text" 
//                 value={shippingDetails.city}
//                 onChange={(e) => setShippingDetails({...shippingDetails, city: e.target.value})}
//                 placeholder="City" 
//                 className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-bold uppercase text-stone-600 mb-1">State</label>
//               <input 
//                 type="text" 
//                 value={shippingDetails.state}
//                 onChange={(e) => setShippingDetails({...shippingDetails, state: e.target.value})}
//                 placeholder="State" 
//                 className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         {/* Shipping Method Section */}
//         <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm space-y-4 text-xs">
//           <h3 className="font-bold uppercase tracking-wider text-[#4a2e18] flex items-center gap-2 pb-2 border-b border-stone-200">
//             <BiShoppingBag className="text-base text-[#8b3a2b]" /> Shipping Method
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <label className={`p-4 border rounded-sm cursor-pointer transition ${shippingDetails.shippingMethod === 'Standard' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
//               <div className="flex items-center gap-2 mb-1">
//                 <input 
//                   type="radio" 
//                   name="shippingMethod" 
//                   checked={shippingDetails.shippingMethod === 'Standard'}
//                   onChange={() => setShippingDetails({...shippingDetails, shippingMethod: 'Standard'})}
//                 />
//                 <span className="font-bold text-[#4a2e18]">Standard Delivery</span>
//               </div>
//               <p className="text-[11px] text-stone-500 ml-5">3-5 Business Days — <strong className="text-[#8b3a2b]">Rs. 99</strong></p>
//             </label>

//             <label className={`p-4 border rounded-sm cursor-pointer transition ${shippingDetails.shippingMethod === 'Express' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
//               <div className="flex items-center gap-2 mb-1">
//                 <input 
//                   type="radio" 
//                   name="shippingMethod" 
//                   checked={shippingDetails.shippingMethod === 'Express'}
//                   onChange={() => setShippingDetails({...shippingDetails, shippingMethod: 'Express'})}
//                 />
//                 <span className="font-bold text-[#4a2e18]">Express Delivery</span>
//               </div>
//               <p className="text-[11px] text-stone-500 ml-5">1-2 Business Days — <strong className="text-[#8b3a2b]">Rs. 199</strong></p>
//             </label>
//           </div>
//         </div>

//         {/* PAYMENT METHODS SECTION */}
//         <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm space-y-4 text-xs">
//           <h3 className="font-bold uppercase tracking-wider text-[#4a2e18] flex items-center gap-2 pb-2 border-b border-stone-200">
//             <BiWallet className="text-base text-[#8b3a2b]" /> Payment Options
//           </h3>

//           <div className="space-y-3">
            
//             {/* 1. UPI */}
//             <label className={`block p-4 border rounded-sm cursor-pointer transition ${shippingDetails.paymentMethod === 'UPI' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
//               <div className="flex items-center gap-3">
//                 <input 
//                   type="radio" 
//                   name="payment" 
//                   checked={shippingDetails.paymentMethod === 'UPI'}
//                   onChange={() => setShippingDetails({...shippingDetails, paymentMethod: 'UPI'})}
//                 />
//                 <BiQrScan className="text-lg text-[#8b3a2b]" />
//                 <span className="font-bold text-[#4a2e18]">UPI / QR (Google Pay, PhonePe, Paytm)</span>
//               </div>
//               {shippingDetails.paymentMethod === 'UPI' && (
//                 <div className="mt-3 ml-7">
//                   <input 
//                     type="text" 
//                     placeholder="Enter UPI ID (e.g. mobile@paytm)" 
//                     value={shippingDetails.upiId}
//                     onChange={(e) => setShippingDetails({...shippingDetails, upiId: e.target.value})}
//                     className="w-full p-2 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
//                   />
//                 </div>
//               )}
//             </label>

//             {/* 2. Cards */}
//             <label className={`block p-4 border rounded-sm cursor-pointer transition ${shippingDetails.paymentMethod === 'Cards' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
//               <div className="flex items-center gap-3">
//                 <input 
//                   type="radio" 
//                   name="payment" 
//                   checked={shippingDetails.paymentMethod === 'Cards'}
//                   onChange={() => setShippingDetails({...shippingDetails, paymentMethod: 'Cards'})}
//                 />
//                 <BiCreditCard className="text-lg text-[#8b3a2b]" />
//                 <span className="font-bold text-[#4a2e18]">Credit / Debit Card</span>
//               </div>
//               {shippingDetails.paymentMethod === 'Cards' && (
//                 <div className="mt-3 ml-7 space-y-2">
//                   <input 
//                     type="text" 
//                     placeholder="Card Number (4444 4444 4444 4444)" 
//                     value={shippingDetails.cardInfo.number}
//                     onChange={(e) => setShippingDetails({...shippingDetails, cardInfo: {...shippingDetails.cardInfo, number: e.target.value}})}
//                     className="w-full p-2 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
//                   />
//                   <div className="grid grid-cols-2 gap-2">
//                     <input 
//                       type="text" 
//                       placeholder="MM/YY" 
//                       value={shippingDetails.cardInfo.expiry}
//                       onChange={(e) => setShippingDetails({...shippingDetails, cardInfo: {...shippingDetails.cardInfo, expiry: e.target.value}})}
//                       className="p-2 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
//                     />
//                     <input 
//                       type="password" 
//                       maxLength="3"
//                       placeholder="CVV" 
//                       value={shippingDetails.cardInfo.cvv}
//                       onChange={(e) => setShippingDetails({...shippingDetails, cardInfo: {...shippingDetails.cardInfo, cvv: e.target.value}})}
//                       className="p-2 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
//                     />
//                   </div>
//                 </div>
//               )}
//             </label>

//             {/* 3. Net Banking */}
//             <label className={`block p-4 border rounded-sm cursor-pointer transition ${shippingDetails.paymentMethod === 'NetBanking' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
//               <div className="flex items-center gap-3">
//                 <input 
//                   type="radio" 
//                   name="payment" 
//                   checked={shippingDetails.paymentMethod === 'NetBanking'}
//                   onChange={() => setShippingDetails({...shippingDetails, paymentMethod: 'NetBanking'})}
//                 />
//                 <BiBuilding className="text-lg text-[#8b3a2b]" />
//                 <span className="font-bold text-[#4a2e18]">Net Banking</span>
//               </div>
//               {shippingDetails.paymentMethod === 'NetBanking' && (
//                 <div className="mt-3 ml-7">
//                   <select 
//                     value={shippingDetails.selectedBank}
//                     onChange={(e) => setShippingDetails({...shippingDetails, selectedBank: e.target.value})}
//                     className="w-full p-2 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
//                   >
//                     <option value="">Select Bank</option>
//                     <option value="SBI">State Bank of India (SBI)</option>
//                     <option value="HDFC">HDFC Bank</option>
//                     <option value="ICICI">ICICI Bank</option>
//                     <option value="Axis">Axis Bank</option>
//                   </select>
//                 </div>
//               )}
//             </label>

//             {/* 4. COD */}
//             <label className={`block p-4 border rounded-sm cursor-pointer transition ${shippingDetails.paymentMethod === 'COD' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
//               <div className="flex items-center gap-3">
//                 <input 
//                   type="radio" 
//                   name="payment" 
//                   checked={shippingDetails.paymentMethod === 'COD'}
//                   onChange={() => setShippingDetails({...shippingDetails, paymentMethod: 'COD'})}
//                 />
//                 <BiWallet className="text-lg text-[#8b3a2b]" />
//                 <span className="font-bold text-[#4a2e18]">Cash on Delivery (COD)</span>
//               </div>
//             </label>

//           </div>
//         </div>

//       </div>

//       {/* Right: Final Review Sidebar */}
//       <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm h-fit space-y-4">
//         <h3 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18] pb-3 border-b border-stone-200">
//           Final Review
//         </h3>
//         <div className="space-y-2 text-xs text-stone-600 font-serif">
//           {cartItems.map((item, idx) => (
//             <div key={idx} className="flex justify-between">
//               <span className="truncate max-w-[150px]">{item.title} (x{item.quantity})</span>
//               <span className="font-bold text-stone-800">Rs. {item.price * item.quantity}</span>
//             </div>
//           ))}
//           <div className="flex justify-between pt-2 border-t border-stone-200">
//             <span>Shipping ({shippingDetails.shippingMethod})</span>
//             <span className="font-bold text-stone-800">Rs. {shippingFee}</span>
//           </div>
//           <div className="flex justify-between pt-1">
//             <span>Payment Mode</span>
//             <span className="font-bold text-[#8b3a2b]">{shippingDetails.paymentMethod}</span>
//           </div>
//           <div className="pt-3 border-t border-stone-200 flex justify-between font-bold text-sm text-[#4a2e18]">
//             <span>Total Payable</span>
//             <span className="text-[#8b3a2b]">Rs. {grandTotal}</span>
//           </div>
//         </div>

//         <div className="flex gap-3 pt-2">
//           <button 
//             type="button"
//             onClick={() => setStep(1)}
//             className="w-1/3 bg-stone-200 hover:bg-stone-300 text-stone-700 py-3 text-xs font-bold uppercase cursor-pointer"
//           >
//             &larr; Back
//           </button>
//           <button 
//             type="submit"
//             className="w-2/3 bg-[#4a2e18] hover:bg-[#321e10] text-white py-3 text-xs font-bold uppercase tracking-widest cursor-pointer"
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default CheckoutStep;



import React from "react";
import {
  BiMap,
  BiShoppingBag,
  BiWallet,
  BiQrScan,
  BiCreditCard,
  BiBuilding
} from "react-icons/bi";

const CheckoutStep = ({
  shippingDetails,
  setShippingDetails,
  cartItems,
  shippingFee,
  grandTotal,
  handlePlaceOrder,
  setStep
}) => {
  return (
    <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">

        {/* Address & Pincode Section */}
        <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm space-y-4 text-xs">
          <h3 className="font-bold uppercase tracking-wider text-[#4a2e18] flex items-center gap-2 pb-2 border-b border-stone-200">
            <BiMap className="text-base text-[#8b3a2b]" /> Shipping Address & Pincode
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Full Name</label>
              <input
                type="text"
                value={shippingDetails.fullName}
                onChange={(e) => setShippingDetails({...shippingDetails, fullName: e.target.value})}
                placeholder="Receiver name"
                className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                required
              />
            </div>
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Pincode</label>
              <input
                type="text"
                value={shippingDetails.pincode}
                onChange={(e) => setShippingDetails({...shippingDetails, pincode: e.target.value})}
                placeholder="110001"
                className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-bold uppercase text-stone-600 mb-1">Street Address</label>
            <input
              type="text"
              value={shippingDetails.address}
              onChange={(e) => setShippingDetails({...shippingDetails, address: e.target.value})}
              placeholder="House no., Colony, Landmark"
              className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">City</label>
              <input
                type="text"
                value={shippingDetails.city}
                onChange={(e) => setShippingDetails({...shippingDetails, city: e.target.value})}
                placeholder="City"
                className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                required
              />
            </div>
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">State</label>
              <input
                type="text"
                value={shippingDetails.state}
                onChange={(e) => setShippingDetails({...shippingDetails, state: e.target.value})}
                placeholder="State"
                className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                required
              />
            </div>
          </div>
        </div>

        {/* Shipping Method Section */}
        <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm space-y-4 text-xs">
          <h3 className="font-bold uppercase tracking-wider text-[#4a2e18] flex items-center gap-2 pb-2 border-b border-stone-200">
            <BiShoppingBag className="text-base text-[#8b3a2b]" /> Shipping Method
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className={`p-4 border rounded-sm cursor-pointer transition ${shippingDetails.shippingMethod === 'Standard' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
              <div className="flex items-center gap-2 mb-1">
                <input
                  type="radio"
                  name="shippingMethod"
                  checked={shippingDetails.shippingMethod === 'Standard'}
                  onChange={() => setShippingDetails({...shippingDetails, shippingMethod: 'Standard'})}
                />
                <span className="font-bold text-[#4a2e18]">Standard Delivery</span>
              </div>
              <p className="text-[11px] text-stone-500 ml-5">3-5 Business Days — <strong className="text-[#8b3a2b]">Rs. 99</strong></p>
            </label>

            <label className={`p-4 border rounded-sm cursor-pointer transition ${shippingDetails.shippingMethod === 'Express' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
              <div className="flex items-center gap-2 mb-1">
                <input
                  type="radio"
                  name="shippingMethod"
                  checked={shippingDetails.shippingMethod === 'Express'}
                  onChange={() => setShippingDetails({...shippingDetails, shippingMethod: 'Express'})}
                />
                <span className="font-bold text-[#4a2e18]">Express Delivery</span>
              </div>
              <p className="text-[11px] text-stone-500 ml-5">1-2 Business Days — <strong className="text-[#8b3a2b]">Rs. 199</strong></p>
            </label>
          </div>
        </div>

        {/* PAYMENT METHODS SECTION */}
        <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm space-y-4 text-xs">
          <h3 className="font-bold uppercase tracking-wider text-[#4a2e18] flex items-center gap-2 pb-2 border-b border-stone-200">
            <BiWallet className="text-base text-[#8b3a2b]" /> Payment Options
          </h3>

          <div className="space-y-3">

            {/* 1. UPI */}
            <label className={`block p-4 border rounded-sm cursor-pointer transition ${shippingDetails.paymentMethod === 'UPI' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={shippingDetails.paymentMethod === 'UPI'}
                  onChange={() => setShippingDetails({...shippingDetails, paymentMethod: 'UPI'})}
                />
                <BiQrScan className="text-lg text-[#8b3a2b]" />
                <span className="font-bold text-[#4a2e18]">UPI / QR (Google Pay, PhonePe, Paytm)</span>
              </div>
              {shippingDetails.paymentMethod === 'UPI' && (
                <div className="mt-3 ml-7">
                  <input
                    type="text"
                    placeholder="Enter UPI ID (e.g. mobile@paytm)"
                    value={shippingDetails.upiId}
                    onChange={(e) => setShippingDetails({...shippingDetails, upiId: e.target.value})}
                    className="w-full p-2 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                  />
                </div>
              )}
            </label>

            {/* 2. Cards */}
            <label className={`block p-4 border rounded-sm cursor-pointer transition ${shippingDetails.paymentMethod === 'Cards' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={shippingDetails.paymentMethod === 'Cards'}
                  onChange={() => setShippingDetails({...shippingDetails, paymentMethod: 'Cards'})}
                />
                <BiCreditCard className="text-lg text-[#8b3a2b]" />
                <span className="font-bold text-[#4a2e18]">Credit / Debit Card</span>
              </div>
              {shippingDetails.paymentMethod === 'Cards' && (
                <div className="mt-3 ml-7 space-y-2">
                  <input
                    type="text"
                    placeholder="Card Number (4444 4444 4444 4444)"
                    value={shippingDetails.cardInfo.number}
                    onChange={(e) => setShippingDetails({...shippingDetails, cardInfo: {...shippingDetails.cardInfo, number: e.target.value}})}
                    className="w-full p-2 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={shippingDetails.cardInfo.expiry}
                      onChange={(e) => setShippingDetails({...shippingDetails, cardInfo: {...shippingDetails.cardInfo, expiry: e.target.value}})}
                      className="p-2 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                    />
                    <input
                      type="password"
                      maxLength="3"
                      placeholder="CVV"
                      value={shippingDetails.cardInfo.cvv}
                      onChange={(e) => setShippingDetails({...shippingDetails, cardInfo: {...shippingDetails.cardInfo, cvv: e.target.value}})}
                      className="p-2 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                    />
                  </div>
                </div>
              )}
            </label>

            {/* 3. Net Banking */}
            <label className={`block p-4 border rounded-sm cursor-pointer transition ${shippingDetails.paymentMethod === 'NetBanking' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={shippingDetails.paymentMethod === 'NetBanking'}
                  onChange={() => setShippingDetails({...shippingDetails, paymentMethod: 'NetBanking'})}
                />
                <BiBuilding className="text-lg text-[#8b3a2b]" />
                <span className="font-bold text-[#4a2e18]">Net Banking</span>
              </div>
              {shippingDetails.paymentMethod === 'NetBanking' && (
                <div className="mt-3 ml-7">
                  <select
                    value={shippingDetails.selectedBank}
                    onChange={(e) => setShippingDetails({...shippingDetails, selectedBank: e.target.value})}
                    className="w-full p-2 border border-stone-300 rounded-sm bg-white focus:outline-none focus:border-[#8b3a2b]"
                  >
                    <option value="">Select Bank</option>
                    <option value="SBI">State Bank of India (SBI)</option>
                    <option value="HDFC">HDFC Bank</option>
                    <option value="ICICI">ICICI Bank</option>
                    <option value="Axis">Axis Bank</option>
                  </select>
                </div>
              )}
            </label>

            {/* 4. COD */}
            <label className={`block p-4 border rounded-sm cursor-pointer transition ${shippingDetails.paymentMethod === 'COD' ? 'border-[#8b3a2b] bg-[#8b3a2b]/5' : 'border-stone-200 bg-white'}`}>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={shippingDetails.paymentMethod === 'COD'}
                  onChange={() => setShippingDetails({...shippingDetails, paymentMethod: 'COD'})}
                />
                <BiWallet className="text-lg text-[#8b3a2b]" />
                <span className="font-bold text-[#4a2e18]">Cash on Delivery (COD)</span>
              </div>
            </label>

          </div>
        </div>

      </div>

      {/* Right: Final Review Sidebar */}
      <div className="bg-stone-50 p-6 border border-stone-200 rounded-sm h-fit space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#4a2e18] pb-3 border-b border-stone-200">
          Final Review
        </h3>

        {/* ✅ Product List with Image, Name, Quantity, Price */}
        <div className="space-y-3 text-xs text-stone-600 font-serif">
          {cartItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 pb-3 border-b border-stone-100">
              {/* Image */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded border border-stone-200 flex-shrink-0"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ) : (
                <div className="w-12 h-12 bg-stone-200 rounded border border-stone-200 flex-shrink-0 flex items-center justify-center">
                  <BiShoppingBag className="text-stone-400" />
                </div>
              )}

              {/* Name + Quantity + Price */}
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium text-stone-800 leading-snug line-clamp-2">
                  {item.title}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] text-stone-500">
                    Qty: {item.quantity}
                  </span>
                  <span className="text-[11px] font-bold text-[#8b3a2b]">
                    Rs. {item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Shipping */}
          <div className="flex justify-between pt-2">
            <span>Shipping ({shippingDetails.shippingMethod})</span>
            <span className="font-bold text-stone-800">Rs. {shippingFee}</span>
          </div>

          {/* Payment Mode */}
          <div className="flex justify-between pt-1">
            <span>Payment Mode</span>
            <span className="font-bold text-[#8b3a2b]">{shippingDetails.paymentMethod}</span>
          </div>

          {/* Total */}
          <div className="pt-3 border-t border-stone-200 flex justify-between font-bold text-sm text-[#4a2e18]">
            <span>Total Payable</span>
            <span className="text-[#8b3a2b]">Rs. {grandTotal}</span>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="w-1/3 bg-stone-200 hover:bg-stone-300 text-stone-700 py-3 text-xs font-bold uppercase cursor-pointer"
          >
            &larr; Back
          </button>
          <button
            type="submit"
            className="w-2/3 bg-[#4a2e18] hover:bg-[#321e10] text-white py-3 text-xs font-bold uppercase tracking-widest cursor-pointer"
          >
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutStep;