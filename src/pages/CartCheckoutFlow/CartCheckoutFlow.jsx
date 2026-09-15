import React, { useState } from "react";
import { BiShield } from "react-icons/bi";
import CartStep from "./CartStep";
import LoginStep from "./LoginStep";
import CheckoutStep from "./CheckoutStep";
import SuccessStep from "./SuccessStep";

const CartCheckoutFlow = () => {
  // Step Tracker: 1 = Cart, 2 = Login/Auth, 3 = Checkout Address & Payment, 4 = Success
  const [step, setStep] = useState(1);

  // Cart Items State with Variants
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Shri Kuber Yantra (Energized)",
      variant: "Standard / Brass",
      price: 1199,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "5 Mukhi Rudraksha Mala",
      variant: "108+1 Beads",
      price: 799,
      quantity: 1,
      image: "https://via.placeholder.com/150"
    }
  ]);

  // Recommended Add-ons
  const recommendedAddons = [
    { id: 101, title: "Sandalwood Incense Sticks", price: 199, variant: "Pack of 50" },
    { id: 102, title: "Gangajal Bottle (250ml)", price: 149, variant: "Pure Uttarkashi" }
  ];

  // Coupon State
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  // Auth / Login State
  const [authData, setAuthData] = useState({
    loginType: "mobile",
    identifier: "",
    otp: "",
    isVerified: false
  });
  const [showOtpField, setShowOtpField] = useState(false);

  // Checkout, Address, Shipping & Payment Form State
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    shippingMethod: "Standard",
    paymentMethod: "UPI",
    upiId: "",
    cardInfo: { number: "", expiry: "", cvv: "" },
    selectedBank: ""
  });

  const [orderId, setOrderId] = useState("");
  const [orderDate, setOrderDate] = useState("");

  // Quantity Handlers
  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Add Add-on to Cart
  const handleAddAddon = (addon) => {
    const existing = cartItems.find(item => item.id === addon.id);
    if (existing) {
      updateQuantity(addon.id, 1);
    } else {
      setCartItems([...cartItems, { ...addon, quantity: 1, image: "https://via.placeholder.com/150" }]);
    }
  };

  // Coupon Handler
  const handleApplyCoupon = () => {
    if (couponInput.toUpperCase() === "DIVINE10") {
      setAppliedCoupon("DIVINE10");
      setDiscountAmount(150);
      alert("Coupon applied successfully! Rs. 150 off.");
    } else {
      alert("Invalid Coupon Code. Try 'DIVINE10'");
    }
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingFee = shippingDetails.shippingMethod === "Express" ? 199 : 99;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  // Auth Handlers
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!authData.identifier) {
      alert("Please enter mobile number or email.");
      return;
    }
    setShowOtpField(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (authData.otp === "1234") {
      setAuthData({ ...authData, isVerified: true });
      setShippingDetails(prev => ({
        ...prev,
        phone: authData.loginType === "mobile" ? authData.identifier : prev.phone,
        email: authData.loginType === "email" ? authData.identifier : prev.email
      }));
      setStep(3);
    } else {
      alert("Invalid OTP. Please enter '1234'");
    }
  };

  // Place Order Handler
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!shippingDetails.fullName || !shippingDetails.address || !shippingDetails.pincode || !shippingDetails.city) {
      alert("Please fill in all mandatory delivery address fields including pincode and city.");
      return;
    }

    if (shippingDetails.paymentMethod === "UPI" && !shippingDetails.upiId) {
      alert("Please enter a valid UPI ID (e.g., username@paytm)");
      return;
    }
    if (shippingDetails.paymentMethod === "Cards" && (!shippingDetails.cardInfo.number || !shippingDetails.cardInfo.cvv)) {
      alert("Please fill in valid card details.");
      return;
    }
    if (shippingDetails.paymentMethod === "NetBanking" && !shippingDetails.selectedBank) {
      alert("Please select your bank for Net Banking.");
      return;
    }

    const genId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(genId);
    
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    setOrderDate(new Date().toLocaleDateString('en-IN', options));

    setStep(4);
  };

  return (
    <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1100px] mx-auto bg-white rounded-sm shadow-xl p-6 sm:p-10 border border-stone-200">
        
        {/* Header Progress Indicator */}
        <div className="text-center mb-8  pb-6">
          <span className="text-xs uppercase tracking-widest text-[#8b3a2b] font-bold bg-[#8b3a2b]/10 px-3 py-1 rounded-full inline-flex items-center gap-1">
            <BiShield className="text-sm" /> Secure Sacred Checkout
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-[#4a2e18] mt-3 mb-2">
            {step === 1 && "Your Sacred Cart"}
            {step === 2 && "Quick Sign-In / Verification"}
            {step === 3 && "Delivery Address & Payment Methods"}
            {step === 4 && "Order Confirmation & Receipt"}
          </h1>
          <div className="flex justify-center gap-4 sm:gap-6 mt-3 text-xs font-bold uppercase tracking-wider text-stone-400">
            <span className={step >= 1 ? "text-[#8b3a2b]" : ""}>1. Cart</span> &gt;
            <span className={step >= 2 ? "text-[#8b3a2b]" : ""}>2. Login</span> &gt;
            <span className={step >= 3 ? "text-[#8b3a2b]" : ""}>3. Checkout</span> &gt;
            <span className={step >= 4 ? "text-[#8b3a2b]" : ""}>4. Success</span>
          </div>
        </div>

        {/* STEP 1: CART PAGE */}
        {step === 1 && (
          <CartStep 
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            recommendedAddons={recommendedAddons}
            handleAddAddon={handleAddAddon}
            couponInput={couponInput}
            setCouponInput={setCouponInput}
            handleApplyCoupon={handleApplyCoupon}
            appliedCoupon={appliedCoupon}
            subtotal={subtotal}
            discountAmount={discountAmount}
            shippingFee={shippingFee}
            grandTotal={grandTotal}
            setStep={setStep}
          />
        )}

        {/* STEP 2: MOBILE / EMAIL LOGIN & OTP */}
        {step === 2 && (
          <LoginStep 
            authData={authData}
            setAuthData={setAuthData}
            showOtpField={showOtpField}
            handleSendOtp={handleSendOtp}
            handleVerifyOtp={handleVerifyOtp}
            setStep={setStep}
          />
        )}

        {/* STEP 3: ADDRESS, PINCODE, SHIPPING & PAYMENT METHODS */}
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

        {/* STEP 4: ENHANCED ORDER CONFIRMATION & RECEIPT PAGE */}
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
            setCartItems={setCartItems}
          />
        )}

      </div>
    </div>
  );
};

export default CartCheckoutFlow;