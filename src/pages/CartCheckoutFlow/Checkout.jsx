// // // import React, { useState } from 'react';
// // // // import CheckoutStep from '../components/CheckoutStep'; // Apne path ke hisaab se check kar lein
// // // // import useCartStore from '../store/useCartStore';
// // // import CheckoutStep from './CheckoutStep';
// // // import useCartStore from '../../store/useCartStore';

// // // const Checkout = () => {
// // //   const { items, totalAmount } = useCartStore();

// // //   // Shipping & Payment Form State
// // //   const [shippingDetails, setShippingDetails] = useState({
// // //     fullName: '',
// // //     pincode: '',
// // //     address: '',
// // //     city: '',
// // //     state: '',
// // //     shippingMethod: 'Standard', // 'Standard' or 'Express'
// // //     paymentMethod: 'COD',      // 'UPI', 'Cards', 'NetBanking', 'COD'
// // //     upiId: '',
// // //     cardInfo: { number: '', expiry: '', cvv: '' },
// // //     selectedBank: ''
// // //   });

// // //   // Calculate Shipping Fee based on method
// // //   const shippingFee = shippingDetails.shippingMethod === 'Express' ? 199 : 99;
// // //   const grandTotal = totalAmount + shippingFee;

// // //   // Handle Place Order logic
// // //   const handlePlaceOrder = (e) => {
// // //     e.preventDefault();
// // //     console.log("Order Placed Successfully with details:", {
// // //       shippingDetails,
// // //       cartItems: items,
// // //       grandTotal
// // //     });
// // //     alert("Order placed successfully!");
// // //     // Yahan aap backend API call kar sakte hain order save karne ke liye
// // //   };

// // //   return (
// // //     <div className="max-w-[1400px] mx-auto px-4 py-8 bg-[#fff3df] min-h-[70vh]">
// // //       <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18] mb-6">
// // //         Checkout
// // //       </h2>
      
// // //       <CheckoutStep 
// // //         shippingDetails={shippingDetails}
// // //         setShippingDetails={setShippingDetails}
// // //         cartItems={items}
// // //         shippingFee={shippingFee}
// // //         grandTotal={grandTotal}
// // //         handlePlaceOrder={handlePlaceOrder}
// // //         setStep={(step) => {
// // //           if (step === 1) window.history.back(); // Ya cart page par bhej sakte hain
// // //         }}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default Checkout;


// // import React, { useEffect, useState } from 'react';


// // import CheckoutStep from './CheckoutStep';
// //  import useCartStore from '../../store/useCartStore';

// // const Checkout = () => {
// //   const { items, totalAmount, userId, fetchCart } = useCartStore();

// //   useEffect(() => {
// //     // Agar page refresh hone par items empty ho toh cart dobara fetch kar lo
// //     const user = JSON.parse(localStorage.getItem('user') || '{}');
// //     const currentUserId = user.id || user._id || localStorage.getItem('cartUserId');
// //     if (currentUserId && (!items || items.length === 0)) {
// //       fetchCart(currentUserId);
// //     }
// //   }, []);

// //   // Shipping & Payment Form State
// //   const [shippingDetails, setShippingDetails] = useState({
// //     fullName: '',
// //     pincode: '',
// //     address: '',
// //     city: '',
// //     state: '',
// //     shippingMethod: 'Standard',
// //     paymentMethod: 'COD',
// //     upiId: '',
// //     cardInfo: { number: '', expiry: '', cvv: '' },
// //     selectedBank: ''
// //   });

// //   // Calculate Shipping Fee based on method
// //   const shippingFee = shippingDetails.shippingMethod === 'Express' ? 199 : 99;
  
// //   // Safely map items to get correct title and price
// //   const formattedCartItems = items?.map((item) => {
// //     const product = typeof item.productId === 'object' ? item.productId : null;
// //     return {
// //       title: product?.name || 'Unknown Product',
// //       price: product?.price || 0,
// //       quantity: item.quantity || 1
// //     };
// //   }) || [];

// //   // Recalculate total amount safely
// //   const calculatedTotal = formattedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
// //   const grandTotal = calculatedTotal + shippingFee;

// //   // Handle Place Order logic
// //   const handlePlaceOrder = (e) => {
// //     e.preventDefault();
// //     console.log("Order Placed Successfully:", {
// //       shippingDetails,
// //       cartItems: formattedCartItems,
// //       grandTotal
// //     });
// //     alert("Order placed successfully!");
// //     // Yahan aap backend par order save karne ki API call laga sakte hain
// //   };

// //   return (
// //     <div className="max-w-[1400px] mx-auto px-4 py-8 bg-[#fff3df] min-h-[70vh]">
// //       <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18] mb-6">
// //         Checkout
// //       </h2>
      
// //       <CheckoutStep 
// //         shippingDetails={shippingDetails}
// //         setShippingDetails={setShippingDetails}
// //         cartItems={formattedCartItems}
// //         shippingFee={shippingFee}
// //         grandTotal={grandTotal}
// //         handlePlaceOrder={handlePlaceOrder}
// //         setStep={(step) => {
// //           if (step === 1) window.history.back();
// //         }}
// //       />
// //     </div>
// //   );
// // };

// // export default Checkout;



// import React, { useEffect, useState } from 'react';
// // import CheckoutStep from '../components/CheckoutStep';
// // import useCartStore from '../store/useCartStore';
// // import useOrderStore from '../store/useOrderStore'; // <-- New Order Store imported
// import { useNavigate } from 'react-router-dom';
// import CheckoutStep from './CheckoutStep';
// import useCartStore from '../../store/useCartStore';
// import useOrderStore from '../../store/useOrderStore';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { items, totalAmount, fetchCart } = useCartStore();
//   const { placeOrder, loading } = useOrderStore();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const currentUserId = user.id || user._id || localStorage.getItem('cartUserId');
//     if (currentUserId && (!items || items.length === 0)) {
//       fetchCart(currentUserId);
//     }
//   }, []);

//   const [shippingDetails, setShippingDetails] = useState({
//     fullName: '',
//     pincode: '',
//     address: '',
//     city: '',
//     state: '',
//     shippingMethod: 'Standard',
//     paymentMethod: 'COD',
//     upiId: '',
//     cardInfo: { number: '', expiry: '', cvv: '' },
//     selectedBank: ''
//   });

//   const shippingFee = shippingDetails.shippingMethod === 'Express' ? 199 : 99;
  
//   // Mapping cart items strictly to your API format (`name`, `qty`, `price`, `image`, `productId`)
//   const formattedCartItems = items?.map((item) => {
//     const product = typeof item.productId === 'object' ? item.productId : null;
//     return {
//       name: product?.name || 'Test Product',
//       qty: item.quantity || 1,
//       price: product?.price || 0,
//       image: product?.image || '',
//       productId: product?._id || (typeof item.productId === 'string' ? item.productId : '')
//     };
//   }) || [];

//   const calculatedTotal = formattedCartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
//   const totalPrice = calculatedTotal + shippingFee;

//   // Handle Place Order API Call matching your requested body
//   const handlePlaceOrder = async (e) => {
//     e.preventDefault();

//     if (!shippingDetails.fullName || !shippingDetails.pincode || !shippingDetails.address || !shippingDetails.city || !shippingDetails.state) {
//       alert("Please fill all shipping details!");
//       return;
//     }

//     // Exact payload structure required by your API
//     const orderPayload = {
//       orderItems: formattedCartItems,
//       shippingAddress: {
//         street: shippingDetails.address,
//         city: shippingDetails.city,
//         state: shippingDetails.state,
//         zipCode: shippingDetails.pincode
//       },
//       paymentMethod: shippingDetails.paymentMethod,
//       totalPrice: totalPrice
//     };

//     console.log("Sending Dynamic Order Payload:", orderPayload);

//     const result = await placeOrder(orderPayload);

//     if (result.success) {
//       alert("Order Placed! 🎉");
//       navigate('/order-success'); // Yahan aap apne success page par bhej sakte hain
//     } else {
//       alert(result.error);
//     }
//   };

//   return (
//     <div className="max-w-[1400px] mx-auto px-4 py-8 bg-[#fff3df] min-h-[70vh]">
//       <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18] mb-6">
//         Checkout
//       </h2>
      
//       <CheckoutStep 
//         shippingDetails={shippingDetails}
//         setShippingDetails={setShippingDetails}
//         cartItems={formattedCartItems.map(i => ({ title: i.name, quantity: i.qty, price: i.price }))}
//         shippingFee={shippingFee}
//         grandTotal={totalPrice}
//         handlePlaceOrder={handlePlaceOrder}
//         setStep={(step) => {
//           if (step === 1) window.history.back();
//         }}
//       />
//     </div>
//   );
// };

// export default Checkout;



import React, { useEffect, useState } from 'react';
// import CheckoutStep from '../components/CheckoutStep';
// import useCartStore from '../store/useCartStore';
// import useOrderStore from '../store/useOrderStore';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';
import useOrderStore from '../../store/useOrderStore';
import CheckoutStep from './CheckoutStep';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalAmount, fetchCart } = useCartStore();
  const { placeOrder, createRazorpayOrder, verifyRazorpayPayment } = useOrderStore();

  // Local storage se logged-in user ki details nikalna
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    const currentUserId = storedUser.id || storedUser._id || localStorage.getItem('cartUserId');
    if (currentUserId && (!items || items.length === 0)) {
      fetchCart(currentUserId);
    }
  }, []);

  // Shipping & Payment Form State (Email aur Phone ko bhi dynamic field de di hai)
  const [shippingDetails, setShippingDetails] = useState({
    fullName: storedUser.name || '',
    email: storedUser.email || '',
    phone: storedUser.phone || storedUser.mobile || '',
    pincode: '',
    address: '',
    city: '',
    state: '',
    shippingMethod: 'Standard',
    paymentMethod: 'COD',
    upiId: '',
    cardInfo: { number: '', expiry: '', cvv: '' },
    selectedBank: ''
  });

  const shippingFee = shippingDetails.shippingMethod === 'Express' ? 199 : 99;
  
  // Cart items ko dynamic map karna
  const formattedCartItems = items?.map((item) => {
    const product = typeof item.productId === 'object' ? item.productId : null;
    return {
      name: product?.name || 'Test Product',
      qty: item.quantity || 1,
      price: product?.price || 0,
      image: product?.image || '',
      productId: product?._id || (typeof item.productId === 'string' ? item.productId : '')
    };
  }) || [];

  const calculatedTotal = formattedCartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const totalPrice = calculatedTotal + shippingFee;

  // Handle Place Order & Real Payment Gateway Flow
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!shippingDetails.fullName || !shippingDetails.pincode || !shippingDetails.address || !shippingDetails.city || !shippingDetails.state) {
      alert("Please fill all shipping details!");
      return;
    }

    const token = localStorage.getItem('token') || storedUser.token;

    const orderPayload = {
      orderItems: formattedCartItems,
      shippingAddress: {
        street: shippingDetails.address,
        city: shippingDetails.city,
        state: shippingDetails.state,
        zipCode: shippingDetails.pincode
      },
      paymentMethod: shippingDetails.paymentMethod,
      totalPrice: totalPrice
    };

    // Step 1: Save Order in Backend Database
    const orderResult = await placeOrder(orderPayload, token);
    if (!orderResult.success) {
      alert(orderResult.error);
      return;
    }

    const createdOrder = orderResult.data.order;

    // Step 2: Check if Payment Method is Online (Not COD) -> Open Razorpay
    if (shippingDetails.paymentMethod !== 'COD') {
      const paymentInit = await createRazorpayOrder(totalPrice, createdOrder._id, token);
      
      if (!paymentInit.success) {
        alert(paymentInit.error);
        return;
      }

      const { order: razorpayOrder, key } = paymentInit.data;

      const options = {
        key: key,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: "Japam",
        description: "Purchase Order Payment",
        order_id: razorpayOrder.id,
        handler: async function (response) {
          // Step 3: Verify Payment after success
          const verifyData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            orderId: createdOrder._id
          };

          const verification = await verifyRazorpayPayment(verifyData, token);
          if (verification.success) {
            alert("Payment Successful & Order Placed! 🎉");
            navigate('/order-success');
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: shippingDetails.fullName,
          email: shippingDetails.email,     // Ekdam dynamic email
          contact: shippingDetails.phone    // Ekdam dynamic phone number
        },
        theme: {
          color: "#4a2e18"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      // COD Order Success
      alert("Order Placed Successfully! 🎉");
      navigate('/order-success');
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 bg-[#fff3df] min-h-[70vh]">
      <h2 className="text-2xl sm:text-3xl font-serif text-[#4a2e18] mb-6">
        Checkout
      </h2>
      
      <CheckoutStep 
        shippingDetails={shippingDetails}
        setShippingDetails={setShippingDetails}
        cartItems={formattedCartItems.map(i => ({ title: i.name, quantity: i.qty, price: i.price }))}
        shippingFee={shippingFee}
        grandTotal={totalPrice}
        handlePlaceOrder={handlePlaceOrder}
        setStep={(step) => {
          if (step === 1) window.history.back();
        }}
      />
    </div>
  );
};

export default Checkout;