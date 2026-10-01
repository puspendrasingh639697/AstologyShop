


import React, { useState, useEffect } from "react";
import { BiShield } from "react-icons/bi";
import CartStep from "./CartStep";
import CheckoutStep from "./CheckoutStep";
import SuccessStep from "./SuccessStep";
import useCartStore from "../../store/useCartStore";
import useProductStore from "../../store/useProductStore";

const CartCheckoutFlow = () => {
  // Step Tracker: 1 = Cart, 3 = Checkout, 4 = Success (Login step hata diya)
  const [step, setStep] = useState(1);

  // ✅ Zustand cart store
  const { items, fetchCart } = useCartStore();
  const { products, fetchProducts } = useProductStore();
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

  // ✅ Cart + Products fetch karo
  useEffect(() => {
    const currentUserId =
      storedUser.id || storedUser._id || localStorage.getItem("cartUserId");

    if (currentUserId) {
      fetchCart(currentUserId);
    }

    if (!products || products.length === 0) {
      fetchProducts();
    }
  }, []);

  // ✅ Cart items ko dynamic map karo (guest + backend dono)
  const cartItems =
    items?.map((item) => {
      let productId = "";
      if (typeof item.productId === "string") {
        productId = item.productId;
      } else if (item.productId && typeof item.productId === "object") {
        productId = item.productId._id || "";
      } else if (item.id) {
        productId = item.id;
      }

      const productFromStore = products?.find((p) => p._id === productId);

      const title =
        productFromStore?.name ||
        item.productId?.name ||
        item.title ||
        item.name ||
        "Product";

      const price =
        productFromStore?.price ||
        item.productId?.price ||
        item.price ||
        0;

      const image =
        productFromStore?.image ||
        item.productId?.image ||
        item.image ||
        "";

      return {
        id: productId || item.id,
        title,
        variant: item.variant || "Standard",
        price,
        quantity: item.quantity || 1,
        image,
      };
    }) || [];

  // Recommended Add-ons — API se ya static (aap chahein toh API se lein)
  const recommendedAddons = products?.slice(0, 2).map((p) => ({
    id: p._id,
    title: p.name,
    price: p.price,
    variant: "Standard",
    image: p.image,
  })) || [];

  // Coupon State
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  // Shipping & Payment Form State
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

  // ✅ Quantity Handlers — Zustand store se
  const updateQuantity = async (id, delta) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;
    const newQty = item.quantity + delta;
    if (newQty <= 0) {
      await removeItem(id);
    } else {
      // store ka updateQuantity call karein
      const { updateQuantity: updateQty } = useCartStore.getState();
      await updateQty(id, newQty);
      await fetchCart(storedUser.id || storedUser._id);
    }
  };

  const removeItem = async (id) => {
    const userId = storedUser.id || storedUser._id || localStorage.getItem("cartUserId");
    const { removeFromCart } = useCartStore.getState();
    await removeFromCart(userId, id);
    await fetchCart(userId);
  };

  // Add Add-on
  const handleAddAddon = async (addon) => {
    const { addToCart } = useCartStore.getState();
    const productForCart = {
      _id: addon.id,
      name: addon.title,
      price: addon.price,
      image: addon.image,
    };
    await addToCart(productForCart, 1);
    await fetchCart(storedUser.id || storedUser._id);
  };

  // Coupon
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
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = shippingDetails.shippingMethod === "Express" ? 199 : 99;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  // ✅ Place Order — direct (no login step)
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

    // ✅ Order API call
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

      // ✅ Online payment — Razorpay
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
        // COD — direct success
        alert("Order Placed Successfully! 🎉");
        setStep(4);
      }
    } catch (err) {
      console.error("Place order error:", err);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="w-full white min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1100px] mx-auto bg-white rounded-sm shadow-xl p-6 sm:p-10">
        {/* Header */}
        <div className="text-center mb-8 pb-6">
          
          <h1 className="text-1xl sm:text-2xl text-[#4a2e18] mt-0 mb-2">
            {step === 1 && "Your Sacred Cart"}
            {step === 3 && "Delivery Address & Payment Methods"}
            {step === 4 && "Order Confirmation & Receipt"}
          </h1>

          {/* ✅ Progress: 3 steps only (Login hata diya) */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-3 text-xs font-bold uppercase tracking-wider text-stone-400">
            <span className={step >= 1 ? "text-[#8b3a2b]" : ""}>1. Cart</span>
            &gt;
            <span className={step >= 3 ? "text-[#8b3a2b]" : ""}>
              2. Checkout & Payment
            </span>
            &gt;
            <span className={step >= 4 ? "text-[#8b3a2b]" : ""}>3. Success</span>
          </div>
        </div>

        {/* STEP 1: CART */}
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

        {/* STEP 3: CHECKOUT (Login step skip) */}
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

        {/* STEP 4: SUCCESS */}
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
  );
};

export default CartCheckoutFlow;