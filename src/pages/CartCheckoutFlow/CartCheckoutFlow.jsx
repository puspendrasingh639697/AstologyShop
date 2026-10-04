


// // import React, { useState, useEffect } from "react";
// // import { BiShield } from "react-icons/bi";
// // import CartStep from "./CartStep";
// // import CheckoutStep from "./CheckoutStep";
// // import SuccessStep from "./SuccessStep";
// // import useCartStore from "../../store/useCartStore";
// // import useProductStore from "../../store/useProductStore";

// // const CartCheckoutFlow = () => {
// //   // Step Tracker: 1 = Cart, 3 = Checkout, 4 = Success (Login step hata diya)
// //   const [step, setStep] = useState(1);

// //   // ✅ Zustand cart store
// //   const { items, fetchCart } = useCartStore();
// //   const { products, fetchProducts } = useProductStore();
// //   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

// //   // ✅ Cart + Products fetch karo
// //   useEffect(() => {
// //     const currentUserId =
// //       storedUser.id || storedUser._id || localStorage.getItem("cartUserId");

// //     if (currentUserId) {
// //       fetchCart(currentUserId);
// //     }

// //     if (!products || products.length === 0) {
// //       fetchProducts();
// //     }
// //   }, []);

// //   // ✅ Cart items ko dynamic map karo (guest + backend dono)
// //   const cartItems =
// //     items?.map((item) => {
// //       let productId = "";
// //       if (typeof item.productId === "string") {
// //         productId = item.productId;
// //       } else if (item.productId && typeof item.productId === "object") {
// //         productId = item.productId._id || "";
// //       } else if (item.id) {
// //         productId = item.id;
// //       }

// //       const productFromStore = products?.find((p) => p._id === productId);

// //       const title =
// //         productFromStore?.name ||
// //         item.productId?.name ||
// //         item.title ||
// //         item.name ||
// //         "Product";

// //       const price =
// //         productFromStore?.price ||
// //         item.productId?.price ||
// //         item.price ||
// //         0;

// //       const image =
// //         productFromStore?.image ||
// //         item.productId?.image ||
// //         item.image ||
// //         "";

// //       return {
// //         id: productId || item.id,
// //         title,
// //         variant: item.variant || "Standard",
// //         price,
// //         quantity: item.quantity || 1,
// //         image,
// //       };
// //     }) || [];

// //   // Recommended Add-ons — API se ya static (aap chahein toh API se lein)
// //   const recommendedAddons = products?.slice(0, 2).map((p) => ({
// //     id: p._id,
// //     title: p.name,
// //     price: p.price,
// //     variant: "Standard",
// //     image: p.image,
// //   })) || [];

// //   // Coupon State
// //   const [couponInput, setCouponInput] = useState("");
// //   const [appliedCoupon, setAppliedCoupon] = useState(null);
// //   const [discountAmount, setDiscountAmount] = useState(0);

// //   // Shipping & Payment Form State
// //   const [shippingDetails, setShippingDetails] = useState({
// //     fullName: storedUser.name || "",
// //     phone: storedUser.phone || storedUser.mobile || "",
// //     email: storedUser.email || "",
// //     address: "",
// //     city: "",
// //     state: "",
// //     pincode: "",
// //     shippingMethod: "Standard",
// //     paymentMethod: "COD",
// //     upiId: "",
// //     cardInfo: { number: "", expiry: "", cvv: "" },
// //     selectedBank: "",
// //   });

// //   const [orderId, setOrderId] = useState("");
// //   const [orderDate, setOrderDate] = useState("");

// //   // ✅ Quantity Handlers — Zustand store se
// //   const updateQuantity = async (id, delta) => {
// //     const item = cartItems.find((i) => i.id === id);
// //     if (!item) return;
// //     const newQty = item.quantity + delta;
// //     if (newQty <= 0) {
// //       await removeItem(id);
// //     } else {
// //       // store ka updateQuantity call karein
// //       const { updateQuantity: updateQty } = useCartStore.getState();
// //       await updateQty(id, newQty);
// //       await fetchCart(storedUser.id || storedUser._id);
// //     }
// //   };

// //   const removeItem = async (id) => {
// //     const userId = storedUser.id || storedUser._id || localStorage.getItem("cartUserId");
// //     const { removeFromCart } = useCartStore.getState();
// //     await removeFromCart(userId, id);
// //     await fetchCart(userId);
// //   };

// //   // Add Add-on
// //   const handleAddAddon = async (addon) => {
// //     const { addToCart } = useCartStore.getState();
// //     const productForCart = {
// //       _id: addon.id,
// //       name: addon.title,
// //       price: addon.price,
// //       image: addon.image,
// //     };
// //     await addToCart(productForCart, 1);
// //     await fetchCart(storedUser.id || storedUser._id);
// //   };

// //   // Coupon
// //   const handleApplyCoupon = () => {
// //     if (couponInput.toUpperCase() === "DIVINE10") {
// //       setAppliedCoupon("DIVINE10");
// //       setDiscountAmount(150);
// //       alert("Coupon applied successfully! Rs. 150 off.");
// //     } else {
// //       alert("Invalid Coupon Code. Try 'DIVINE10'");
// //     }
// //   };

// //   // Calculations
// //   const subtotal = cartItems.reduce(
// //     (acc, item) => acc + item.price * item.quantity,
// //     0
// //   );
// //   const shippingFee = shippingDetails.shippingMethod === "Express" ? 199 : 99;
// //   const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

// //   // ✅ Place Order — direct (no login step)
// //   const handlePlaceOrder = async (e) => {
// //     e.preventDefault();

// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       alert("Please login to place order.");
// //       window.location.href = "/login";
// //       return;
// //     }

// //     if (
// //       !shippingDetails.fullName ||
// //       !shippingDetails.address ||
// //       !shippingDetails.pincode ||
// //       !shippingDetails.city ||
// //       !shippingDetails.state
// //     ) {
// //       alert("Please fill all delivery address fields.");
// //       return;
// //     }

// //     if (shippingDetails.paymentMethod === "UPI" && !shippingDetails.upiId) {
// //       alert("Please enter a valid UPI ID.");
// //       return;
// //     }
// //     if (
// //       shippingDetails.paymentMethod === "Cards" &&
// //       (!shippingDetails.cardInfo.number || !shippingDetails.cardInfo.cvv)
// //     ) {
// //       alert("Please fill valid card details.");
// //       return;
// //     }
// //     if (
// //       shippingDetails.paymentMethod === "NetBanking" &&
// //       !shippingDetails.selectedBank
// //     ) {
// //       alert("Please select your bank.");
// //       return;
// //     }

// //     // ✅ Order API call
// //     try {
// //       const { placeOrder, createRazorpayOrder, verifyRazorpayPayment } =
// //         useOrderStore.getState();

// //       const orderPayload = {
// //         orderItems: cartItems.map((i) => ({
// //           name: i.title,
// //           qty: i.quantity,
// //           price: i.price,
// //           productId: i.id,
// //         })),
// //         shippingAddress: {
// //           street: shippingDetails.address,
// //           city: shippingDetails.city,
// //           state: shippingDetails.state,
// //           zipCode: shippingDetails.pincode,
// //         },
// //         paymentMethod: shippingDetails.paymentMethod,
// //         totalPrice: grandTotal,
// //       };

// //       const orderResult = await placeOrder(orderPayload, token);
// //       if (!orderResult.success) {
// //         alert(orderResult.error);
// //         return;
// //       }

// //       const createdOrder = orderResult.data.order;
// //       setOrderId(createdOrder._id || "ORD-" + Date.now());
// //       setOrderDate(new Date().toLocaleDateString("en-IN"));

// //       // ✅ Online payment — Razorpay
// //       if (shippingDetails.paymentMethod !== "COD") {
// //         const paymentInit = await createRazorpayOrder(
// //           grandTotal,
// //           createdOrder._id,
// //           token
// //         );
// //         if (!paymentInit.success) {
// //           alert(paymentInit.error);
// //           return;
// //         }

// //         const { order: razorpayOrder, key } = paymentInit.data;
// //         const options = {
// //           key,
// //           amount: razorpayOrder.amount,
// //           currency: razorpayOrder.currency,
// //           name: "Japam",
// //           description: "Order Payment",
// //           order_id: razorpayOrder.id,
// //           handler: async function (response) {
// //             const verifyData = {
// //               razorpay_order_id: response.razorpay_order_id,
// //               razorpay_payment_id: response.razorpay_payment_id,
// //               razorpay_signature: response.razorpay_signature,
// //               orderId: createdOrder._id,
// //             };
// //             const verification = await verifyRazorpayPayment(verifyData, token);
// //             if (verification.success) {
// //               alert("Payment Successful! 🎉");
// //               setStep(4);
// //             } else {
// //               alert("Payment verification failed!");
// //             }
// //           },
// //           prefill: {
// //             name: shippingDetails.fullName,
// //             email: shippingDetails.email,
// //             contact: shippingDetails.phone,
// //           },
// //           theme: { color: "#4a2e18" },
// //         };
// //         const rzp = new window.Razorpay(options);
// //         rzp.open();
// //       } else {
// //         // COD — direct success
// //         alert("Order Placed Successfully! 🎉");
// //         setStep(4);
// //       }
// //     } catch (err) {
// //       console.error("Place order error:", err);
// //       alert("Failed to place order. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="w-full white min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
// //       <div className="max-w-[1100px] mx-auto bg-white rounded-sm shadow-xl p-6 sm:p-10">
// //         {/* Header */}
// //         <div className="text-center mb-8 pb-6">
          
// //           <h1 className="text-1xl sm:text-2xl text-[#4a2e18] mt-0 mb-2">
// //             {step === 1 && "Your Sacred Cart"}
// //             {step === 3 && "Delivery Address & Payment Methods"}
// //             {step === 4 && "Order Confirmation & Receipt"}
// //           </h1>

// //           {/* ✅ Progress: 3 steps only (Login hata diya) */}
// //           <div className="flex justify-center gap-4 sm:gap-6 mt-3 text-xs font-bold uppercase tracking-wider text-stone-400">
// //             <span className={step >= 1 ? "text-[#8b3a2b]" : ""}>1. Cart</span>
// //             &gt;
// //             <span className={step >= 3 ? "text-[#8b3a2b]" : ""}>
// //               2. Checkout & Payment
// //             </span>
// //             &gt;
// //             <span className={step >= 4 ? "text-[#8b3a2b]" : ""}>3. Success</span>
// //           </div>
// //         </div>

// //         {/* STEP 1: CART */}
// //         {step === 1 && (
// //           <CartStep
// //             cartItems={cartItems}
// //             updateQuantity={updateQuantity}
// //             removeItem={removeItem}
// //             recommendedAddons={recommendedAddons}
// //             handleAddAddon={handleAddAddon}
// //             couponInput={couponInput}
// //             setCouponInput={setCouponInput}
// //             handleApplyCoupon={handleApplyCoupon}
// //             appliedCoupon={appliedCoupon}
// //             subtotal={subtotal}
// //             discountAmount={discountAmount}
// //             shippingFee={shippingFee}
// //             grandTotal={grandTotal}
// //             setStep={setStep}
// //           />
// //         )}

// //         {/* STEP 3: CHECKOUT (Login step skip) */}
// //         {step === 3 && (
// //           <CheckoutStep
// //             shippingDetails={shippingDetails}
// //             setShippingDetails={setShippingDetails}
// //             cartItems={cartItems}
// //             shippingFee={shippingFee}
// //             grandTotal={grandTotal}
// //             handlePlaceOrder={handlePlaceOrder}
// //             setStep={setStep}
// //           />
// //         )}

// //         {/* STEP 4: SUCCESS */}
// //         {step === 4 && (
// //           <SuccessStep
// //             orderId={orderId}
// //             orderDate={orderDate}
// //             shippingDetails={shippingDetails}
// //             cartItems={cartItems}
// //             subtotal={subtotal}
// //             discountAmount={discountAmount}
// //             shippingFee={shippingFee}
// //             grandTotal={grandTotal}
// //             setStep={setStep}
// //             setCartItems={() => {}}
// //           />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartCheckoutFlow;

// import React, { useState, useEffect } from "react";
// import CheckoutStep from "./CheckoutStep";
// import SuccessStep from "./SuccessStep";
// import useCartStore from "../../store/useCartStore";
// import useProductStore from "../../store/useProductStore";
// import useOrderStore from "../../store/useOrderStore"; // ✅ import karo

// const CartCheckoutFlow = () => {
//   // ✅ Cart drawer mein hai — isliye seedha checkout (step 3) se start
//   const [step, setStep] = useState(3);

//   const { items, fetchCart } = useCartStore();
//   const { products, fetchProducts } = useProductStore();
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

//   // ✅ Initial fetch — refresh ke baad bhi data aayega
//   useEffect(() => {
//     const currentUserId =
//       storedUser.id || storedUser._id || localStorage.getItem("cartUserId");

//     // Guest ke liye bhi fetch karo (fetchCart khud handle karta hai)
//     fetchCart(currentUserId);
//     if (!products || products.length === 0) fetchProducts();
//   }, []);

//   // ✅ Cart items map (safe + dynamic)
//   const safeItems = Array.isArray(items) ? items : [];
//   const cartItems = safeItems.map((item) => {
//     let productId = "";
//     if (typeof item.productId === "string") productId = item.productId;
//     else if (item.productId && typeof item.productId === "object")
//       productId = item.productId._id || "";
//     else if (item.id) productId = item.id;

//     const productFromStore = products?.find((p) => p._id === productId);

//     return {
//       id: productId || item.id,
//       title:
//         productFromStore?.name ||
//         item.productId?.name ||
//         item.title ||
//         item.name ||
//         "Product",
//       variant: item.variant || "Standard",
//       price:
//         productFromStore?.price ||
//         item.productId?.price ||
//         item.price ||
//         0,
//       quantity: item.quantity || 1,
//       image:
//         productFromStore?.image ||
//         item.productId?.image ||
//         item.image ||
//         "",
//     };
//   });

//   // Coupon
//   const [couponInput, setCouponInput] = useState("");
//   const [appliedCoupon, setAppliedCoupon] = useState(null);
//   const [discountAmount, setDiscountAmount] = useState(0);

//   // Shipping form
//   const [shippingDetails, setShippingDetails] = useState({
//     fullName: storedUser.name || "",
//     phone: storedUser.phone || storedUser.mobile || "",
//     email: storedUser.email || "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     shippingMethod: "Standard",
//     paymentMethod: "COD",
//     upiId: "",
//     cardInfo: { number: "", expiry: "", cvv: "" },
//     selectedBank: "",
//   });

//   const [orderId, setOrderId] = useState("");
//   const [orderDate, setOrderDate] = useState("");

//   // ✅ Quantity handler (drawer bhi isi ko use karega)
//   const updateQuantity = async (id, delta) => {
//     const item = cartItems.find((i) => i.id === id);
//     if (!item) return;
//     const newQty = item.quantity + delta;
//     const userId = storedUser.id || storedUser._id || localStorage.getItem("cartUserId");

//     if (newQty <= 0) {
//       await removeItem(id);
//     } else {
//       const { updateQuantity: updateQty } = useCartStore.getState();
//       await updateQty(id, newQty);
//       await fetchCart(userId);
//     }
//   };

//   const removeItem = async (id) => {
//     const userId =
//       storedUser.id || storedUser._id || localStorage.getItem("cartUserId");
//     const { removeFromCart } = useCartStore.getState();
//     await removeFromCart(userId, id);
//     await fetchCart(userId);
//   };

//   // Coupon
//   const handleApplyCoupon = () => {
//     if (couponInput.toUpperCase() === "DIVINE10") {
//       setAppliedCoupon("DIVINE10");
//       setDiscountAmount(150);
//       alert("Coupon applied successfully! Rs. 150 off.");
//     } else {
//       alert("Invalid Coupon Code. Try 'DIVINE10'");
//     }
//   };

//   // Calculations
//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const shippingFee = shippingDetails.shippingMethod === "Express" ? 199 : 99;
//   const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

//   // ✅ Place order
//   const handlePlaceOrder = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please login to place order.");
//       window.location.href = "/login";
//       return;
//     }

//     if (
//       !shippingDetails.fullName ||
//       !shippingDetails.address ||
//       !shippingDetails.pincode ||
//       !shippingDetails.city ||
//       !shippingDetails.state
//     ) {
//       alert("Please fill all delivery address fields.");
//       return;
//     }

//     if (shippingDetails.paymentMethod === "UPI" && !shippingDetails.upiId) {
//       alert("Please enter a valid UPI ID.");
//       return;
//     }
//     if (
//       shippingDetails.paymentMethod === "Cards" &&
//       (!shippingDetails.cardInfo.number || !shippingDetails.cardInfo.cvv)
//     ) {
//       alert("Please fill valid card details.");
//       return;
//     }
//     if (
//       shippingDetails.paymentMethod === "NetBanking" &&
//       !shippingDetails.selectedBank
//     ) {
//       alert("Please select your bank.");
//       return;
//     }

//     try {
//       const { placeOrder, createRazorpayOrder, verifyRazorpayPayment } =
//         useOrderStore.getState();

//       const orderPayload = {
//         orderItems: cartItems.map((i) => ({
//           name: i.title,
//           qty: i.quantity,
//           price: i.price,
//           productId: i.id,
//         })),
//         shippingAddress: {
//           street: shippingDetails.address,
//           city: shippingDetails.city,
//           state: shippingDetails.state,
//           zipCode: shippingDetails.pincode,
//         },
//         paymentMethod: shippingDetails.paymentMethod,
//         totalPrice: grandTotal,
//       };

//       const orderResult = await placeOrder(orderPayload, token);
//       if (!orderResult.success) {
//         alert(orderResult.error);
//         return;
//       }

//       const createdOrder = orderResult.data.order;
//       setOrderId(createdOrder._id || "ORD-" + Date.now());
//       setOrderDate(new Date().toLocaleDateString("en-IN"));

//       if (shippingDetails.paymentMethod !== "COD") {
//         const paymentInit = await createRazorpayOrder(
//           grandTotal,
//           createdOrder._id,
//           token
//         );
//         if (!paymentInit.success) {
//           alert(paymentInit.error);
//           return;
//         }

//         const { order: razorpayOrder, key } = paymentInit.data;
//         const options = {
//           key,
//           amount: razorpayOrder.amount,
//           currency: razorpayOrder.currency,
//           name: "Japam",
//           description: "Order Payment",
//           order_id: razorpayOrder.id,
//           handler: async function (response) {
//             const verifyData = {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               orderId: createdOrder._id,
//             };
//             const verification = await verifyRazorpayPayment(verifyData, token);
//             if (verification.success) {
//               alert("Payment Successful! 🎉");
//               setStep(4);
//             } else {
//               alert("Payment verification failed!");
//             }
//           },
//           prefill: {
//             name: shippingDetails.fullName,
//             email: shippingDetails.email,
//             contact: shippingDetails.phone,
//           },
//           theme: { color: "#4a2e18" },
//         };
//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } else {
//         alert("Order Placed Successfully! 🎉");
//         setStep(4);
//       }
//     } catch (err) {
//       console.error("Place order error:", err);
//       alert("Failed to place order. Please try again.");
//     }
//   };

//   return (
//     <div className="w-full bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
//       <div className="max-w-[1100px] mx-auto bg-white rounded-sm shadow-xl p-6 sm:p-10">
//         {/* Header */}
//         <div className="text-center mb-8 pb-6">
//           <h1 className="text-1xl sm:text-2xl text-[#4a2e18] mt-0 mb-2">
//             {step === 3 && "Delivery Address & Payment Methods"}
//             {step === 4 && "Order Confirmation & Receipt"}
//           </h1>

//           {/* ✅ 2 steps only (Cart hata diya — wo drawer mein hai) */}
//           <div className="flex justify-center gap-4 sm:gap-6 mt-3 text-xs font-bold uppercase tracking-wider text-stone-400">
//             <span className={step >= 3 ? "text-[#8b3a2b]" : ""}>
//               1. Checkout & Payment
//             </span>
//             &gt;
//             <span className={step >= 4 ? "text-[#8b3a2b]" : ""}>2. Success</span>
//           </div>
//         </div>

//         {/* STEP 3: CHECKOUT */}
//         {step === 3 && (
//           <CheckoutStep
//             shippingDetails={shippingDetails}
//             setShippingDetails={setShippingDetails}
//             cartItems={cartItems}
//             shippingFee={shippingFee}
//             grandTotal={grandTotal}
//             handlePlaceOrder={handlePlaceOrder}
//             setStep={setStep}
//           />
//         )}

//         {/* STEP 4: SUCCESS */}
//         {step === 4 && (
//           <SuccessStep
//             orderId={orderId}
//             orderDate={orderDate}
//             shippingDetails={shippingDetails}
//             cartItems={cartItems}
//             subtotal={subtotal}
//             discountAmount={discountAmount}
//             shippingFee={shippingFee}
//             grandTotal={grandTotal}
//             setStep={setStep}
//             setCartItems={() => {}}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartCheckoutFlow;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BiX,
  BiMinus,
  BiPlus,
  BiTrash,
  BiShoppingBag,
  BiShieldQuarter,
} from "react-icons/bi";
import CheckoutStep from "./CheckoutStep";
import SuccessStep from "./SuccessStep";
import useCartStore from "../../store/useCartStore";
import useProductStore from "../../store/useProductStore";
import useOrderStore from "../../store/useOrderStore";

const CartCheckoutFlow = () => {
  const navigate = useNavigate();

  // ==================================================
  // ✅ DRAWER STATE (same store se — no extra file)
  // ==================================================
  const {
    items,
    fetchCart,
    removeFromCart,
    updateQuantity: updateQtyStore,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  } = useCartStore();

  const { products, fetchProducts } = useProductStore();
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const userId =
    storedUser.id || storedUser._id || localStorage.getItem("cartUserId");

  // ✅ Step: 3 = Checkout, 4 = Success (Cart ab drawer mein hai)
  const [step, setStep] = useState(3);

  // ✅ Refresh ke baad data wapas aa jaye
  useEffect(() => {
    fetchCart(userId);
    if (!products || products.length === 0) fetchProducts();
  }, []);

  // ✅ Drawer khulte hi refresh
  useEffect(() => {
    if (isDrawerOpen) fetchCart(userId);
  }, [isDrawerOpen]);

  // ==================================================
  // ✅ CART ITEMS MAP (safe + dynamic)
  // ==================================================
  const safeItems = Array.isArray(items) ? items : [];
  const cartItems = safeItems.map((item) => {
    let productId = "";
    if (typeof item.productId === "string") productId = item.productId;
    else if (item.productId && typeof item.productId === "object")
      productId = item.productId._id || "";
    else if (item.id) productId = item.id;

    const productFromStore = products?.find((p) => p._id === productId);

    return {
      id: productId || item.id,
      title:
        productFromStore?.name ||
        item.productId?.name ||
        item.title ||
        item.name ||
        "Product",
      variant: item.variant || "Standard",
      price:
        productFromStore?.price ||
        item.productId?.price ||
        item.price ||
        0,
      quantity: item.quantity || 1,
      image:
        productFromStore?.image ||
        item.productId?.image ||
        item.image ||
        "",
    };
  });

  const totalItems = cartItems.reduce((a, i) => a + i.quantity, 0);
  const subtotal = cartItems.reduce((a, i) => a + i.price * i.quantity, 0);

  // ==================================================
  // ✅ DRAWER HANDLERS
  // ==================================================
  const handleQtyChange = async (id, delta) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;
    const newQty = item.quantity + delta;

    if (newQty <= 0) {
      await removeFromCart(userId, id);
    } else {
      await updateQtyStore(id, newQty);
    }
    await fetchCart(userId);
  };

  const handleRemove = async (id) => {
    await removeFromCart(userId, id);
    await fetchCart(userId);
  };

  const goToCheckout = () => {
    closeDrawer();
    setStep(3);
    navigate("/cart");
  };

  // ==================================================
  // ✅ COUPON / SHIPPING / ORDER STATE (same as before)
  // ==================================================
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  const [shippingDetails, setShippingDetails] = useState({
    fullName: storedUser.name || "",
    phone: storedUser.phone || storedUser.mobile || "",
    email: storedUser.email || "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    shippingMethod: "Standard",
    paymentMethod: "COD",
    upiId: "",
    cardInfo: { number: "", expiry: "", cvv: "" },
    selectedBank: "",
  });

  const [orderId, setOrderId] = useState("");
  const [orderDate, setOrderDate] = useState("");

  const shippingFee = shippingDetails.shippingMethod === "Express" ? 199 : 99;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = () => {
    if (couponInput.toUpperCase() === "DIVINE10") {
      setAppliedCoupon("DIVINE10");
      setDiscountAmount(150);
      alert("Coupon applied successfully! Rs. 150 off.");
    } else {
      alert("Invalid Coupon Code. Try 'DIVINE10'");
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to place order.");
      window.location.href = "/login";
      return;
    }

    if (
      !shippingDetails.fullName ||
      !shippingDetails.address ||
      !shippingDetails.pincode ||
      !shippingDetails.city ||
      !shippingDetails.state
    ) {
      alert("Please fill all delivery address fields.");
      return;
    }
    if (shippingDetails.paymentMethod === "UPI" && !shippingDetails.upiId) {
      alert("Please enter a valid UPI ID.");
      return;
    }
    if (
      shippingDetails.paymentMethod === "Cards" &&
      (!shippingDetails.cardInfo.number || !shippingDetails.cardInfo.cvv)
    ) {
      alert("Please fill valid card details.");
      return;
    }
    if (
      shippingDetails.paymentMethod === "NetBanking" &&
      !shippingDetails.selectedBank
    ) {
      alert("Please select your bank.");
      return;
    }

    try {
      const { placeOrder, createRazorpayOrder, verifyRazorpayPayment } =
        useOrderStore.getState();

      const orderPayload = {
        orderItems: cartItems.map((i) => ({
          name: i.title,
          qty: i.quantity,
          price: i.price,
          productId: i.id,
        })),
        shippingAddress: {
          street: shippingDetails.address,
          city: shippingDetails.city,
          state: shippingDetails.state,
          zipCode: shippingDetails.pincode,
        },
        paymentMethod: shippingDetails.paymentMethod,
        totalPrice: grandTotal,
      };

      const orderResult = await placeOrder(orderPayload, token);
      if (!orderResult.success) {
        alert(orderResult.error);
        return;
      }

      const createdOrder = orderResult.data.order;
      setOrderId(createdOrder._id || "ORD-" + Date.now());
      setOrderDate(new Date().toLocaleDateString("en-IN"));

      if (shippingDetails.paymentMethod !== "COD") {
        const paymentInit = await createRazorpayOrder(
          grandTotal,
          createdOrder._id,
          token
        );
        if (!paymentInit.success) {
          alert(paymentInit.error);
          return;
        }

        const { order: razorpayOrder, key } = paymentInit.data;
        const options = {
          key,
          amount: razorpayOrder.amount,
          currency: razorpayOrder.currency,
          name: "Japam",
          description: "Order Payment",
          order_id: razorpayOrder.id,
          handler: async function (response) {
            const verifyData = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderId: createdOrder._id,
            };
            const verification = await verifyRazorpayPayment(verifyData, token);
            if (verification.success) {
              alert("Payment Successful! 🎉");
              setStep(4);
            } else {
              alert("Payment verification failed!");
            }
          },
          prefill: {
            name: shippingDetails.fullName,
            email: shippingDetails.email,
            contact: shippingDetails.phone,
          },
          theme: { color: "#4a2e18" },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        alert("Order Placed Successfully! 🎉");
        setStep(4);
      }
    } catch (err) {
      console.error("Place order error:", err);
      alert("Failed to place order. Please try again.");
    }
  };

  // ==================================================
  // ✅ RENDER
  // ==================================================
  return (
    <>
      {/* ==================== PAGE (Checkout + Success) ==================== */}
      <div className="w-full bg-[#F5EBDD] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
        <div className="max-w-[1100px] mx-auto bg-[#F5EBDD] p-6 sm:p-10">
          <div className="text-center mb-8 pb-6">
            <h3 className="text-1xl sm:text-2xl text-[#4a2e18] mt-0 mb-2">
              {step === 3 && "Delivery Address & Payment Methods"}
              {step === 4 && "Order Confirmation & Receipt"}
            </h3>
            <div className="flex justify-center gap-4 sm:gap-6 mt-3 text-xs font-bold uppercase tracking-wider text-stone-400">
              <span className={step >= 3 ? "text-[#8b3a2b]" : ""}>
                1. Checkout & Payment
              </span>
              &gt;
              <span className={step >= 4 ? "text-[#8b3a2b]" : ""}>2. Success</span>
            </div>
          </div>

          {step === 3 && (
            <CheckoutStep
              shippingDetails={shippingDetails}
              setShippingDetails={setShippingDetails}
              cartItems={cartItems}
              shippingFee={shippingFee}
              grandTotal={grandTotal}
              handlePlaceOrder={handlePlaceOrder}
              setStep={setStep}
            />
          )}

          {step === 4 && (
            <SuccessStep
              orderId={orderId}
              orderDate={orderDate}
              shippingDetails={shippingDetails}
              cartItems={cartItems}
              subtotal={subtotal}
              discountAmount={discountAmount}
              shippingFee={shippingFee}
              grandTotal={grandTotal}
              setStep={setStep}
              setCartItems={() => {}}
            />
          )}
        </div>
      </div>

      {/* ==================== DRAWER (Feathers Closet style) ==================== */}
      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/40 z-[90] transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[100] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header — "Shopping Bag (0)" */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
          <button
            onClick={closeDrawer}
            className="flex items-center gap-2 text-base font-medium text-stone-800 hover:text-black"
          >
            <span className="text-xl">‹</span>
            <span>Shopping Bag ({totalItems})</span>
          </button>
          <button
            onClick={closeDrawer}
            className="p-1.5 hover:bg-stone-100 rounded-full transition"
          >
            <BiX className="text-xl text-stone-600" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            /* ---------- EMPTY STATE (Feathers Closet style) ---------- */
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              {/* Illustration */}
              <div className="w-40 h-40 mb-6 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Cart outline */}
                  <rect
                    x="40"
                    y="70"
                    width="120"
                    height="90"
                    rx="8"
                    fill="none"
                    stroke="#c8c8c8"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 40 90 L 160 90"
                    stroke="#c8c8c8"
                    strokeWidth="2.5"
                  />
                  {/* Face on cart */}
                  <circle cx="85" cy="125" r="4" fill="#c8c8c8" />
                  <circle cx="115" cy="125" r="4" fill="#c8c8c8" />
                  <path
                    d="M 85 140 Q 100 132 115 140"
                    stroke="#c8c8c8"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Wheels */}
                  <circle cx="70" cy="170" r="6" fill="none" stroke="#c8c8c8" strokeWidth="2.5" />
                  <circle cx="130" cy="170" r="6" fill="none" stroke="#c8c8c8" strokeWidth="2.5" />
                  {/* Stars / sparkles */}
                  <text x="30" y="50" fontSize="18" fill="#c8c8c8">✦</text>
                  <text x="150" y="45" fontSize="14" fill="#c8c8c8">✦</text>
                  <text x="160" y="65" fontSize="10" fill="#c8c8c8">✦</text>
                  <text x="25" y="70" fontSize="10" fill="#c8c8c8">✦</text>
                </svg>
              </div>

              {/* Text */}
              <h3 className="text-2xl font-serif text-stone-800 mb-2">
                Oops! Your cart is empty!
              </h3>
              <p className="text-sm text-stone-500 mb-8 max-w-xs leading-relaxed">
                There is nothing in your cart lets add some items.
              </p>

              {/* Button */}
              <button
                onClick={() => {
                  closeDrawer();
                  navigate("/shop");
                }}
                className="w-full max-w-[280px] bg-black hover:bg-stone-800 text-white py-3.5 rounded-md text-sm font-medium transition"
              >
                Shop Now
              </button>
            </div>
          ) : (
            /* ---------- CART ITEMS ---------- */
            <div className="p-4 space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 pb-4 border-b border-stone-100"
                >
                  <div className="w-20 h-20 bg-stone-50 border border-stone-200 rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <BiShoppingBag className="text-2xl text-stone-300" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-serif text-[#4a2e18] line-clamp-2 leading-snug mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-stone-500 uppercase tracking-wider mb-1.5">
                        {item.variant}
                      </p>
                      <span className="text-sm font-bold text-[#8b3a2b]">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-stone-300 rounded-sm">
                        <button
                          onClick={() => handleQtyChange(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-stone-100 disabled:opacity-40"
                          disabled={item.quantity <= 1}
                        >
                          <BiMinus className="text-xs" />
                        </button>
                        <span className="w-8 h-7 flex items-center justify-center text-xs font-semibold border-x border-stone-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQtyChange(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-stone-100"
                        >
                          <BiPlus className="text-xs" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-stone-800">
                          ₹{item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-sm"
                        >
                          <BiTrash className="text-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer — sirf jab items hain */}
        {cartItems.length > 0 && (
          <div className="border-t border-stone-200 p-4 space-y-3 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-stone-700">Subtotal</span>
              <span className="text-lg font-bold text-[#8b3a2b]">
                ₹{subtotal}
              </span>
            </div>

            <p className="text-[10px] text-stone-500 text-center">
              Shipping & taxes calculated at checkout
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={closeDrawer}
                className="border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white py-3 rounded-md text-xs font-bold uppercase tracking-wider transition"
              >
                Continue
              </button>
              <button
                onClick={goToCheckout}
                className="bg-black hover:bg-stone-800 text-white py-3 rounded-md text-xs font-bold uppercase tracking-wider transition"
              >
                Checkout →
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-500 pt-1">
              <BiShieldQuarter className="text-green-600" />
              <span>100% Secure & Safe Checkout</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartCheckoutFlow;