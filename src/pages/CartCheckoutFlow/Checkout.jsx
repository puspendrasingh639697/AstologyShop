


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useCartStore from '../../store/useCartStore';
// import useOrderStore from '../../store/useOrderStore';
// import useProductStore from '../../store/useProductStore';   // ✅ ADD kiya
// import CheckoutStep from './CheckoutStep';

// const Checkout = () => {
//   const navigate = useNavigate();
//   const { items, totalAmount, fetchCart } = useCartStore();
//   const { placeOrder, createRazorpayOrder, verifyRazorpayPayment } = useOrderStore();
//   const { products, fetchProducts } = useProductStore();   // ✅ ADD kiya

//   const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

//   // ✅ Cart + Products dono fetch karo
//   useEffect(() => {
//     const currentUserId =
//       storedUser.id || storedUser._id || localStorage.getItem('cartUserId');

//     if (currentUserId) {
//       fetchCart(currentUserId);
//     }

//     // ✅ Products bhi fetch karo (taaki cart ke productId ko match kar sakein)
//     if (!products || products.length === 0) {
//       fetchProducts();
//     }
//   }, []);

//   // Shipping & Payment Form State
//   const [shippingDetails, setShippingDetails] = useState({
//     fullName: storedUser.name || '',
//     email: storedUser.email || '',
//     phone: storedUser.phone || storedUser.mobile || '',
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

//   // ✅ Cart items ko 3-level fallback ke saath map karo
//   const formattedCartItems =
//     items?.map((item) => {
//       // ✅ Product ID nikaalo (string ya object)
//       let productId = '';
//       if (typeof item.productId === 'string') {
//         productId = item.productId;
//       } else if (item.productId && typeof item.productId === 'object') {
//         productId = item.productId._id || '';
//       } else if (item.id) {
//         productId = item.id;
//       }

//       // ✅ Products store se product dhoondho
//       const productFromStore = products?.find((p) => p._id === productId);

//       // ✅ 3-level fallback: Store → Backend populated → Guest cart
//       const name =
//         productFromStore?.name ||
//         item.productId?.name ||
//         item.title ||
//         item.name ||
//         'Product';

//       const price =
//         productFromStore?.price ||
//         item.productId?.price ||
//         item.price ||
//         0;

//       const image =
//         productFromStore?.image ||
//         item.productId?.image ||
//         item.image ||
//         '';

//       return {
//         name,
//         qty: item.quantity || 1,
//         price,
//         image,        // ✅ image return ho rahi hai
//         productId
//       };
//     }) || [];

//   const calculatedTotal = formattedCartItems.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );
//   const totalPrice = calculatedTotal + shippingFee;

//   // Handle Place Order & Payment
//   const handlePlaceOrder = async (e) => {
//     e.preventDefault();

//     if (
//       !shippingDetails.fullName ||
//       !shippingDetails.pincode ||
//       !shippingDetails.address ||
//       !shippingDetails.city ||
//       !shippingDetails.state
//     ) {
//       alert('Please fill all shipping details!');
//       return;
//     }

//     const token = localStorage.getItem('token') || storedUser.token;

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

//     // Step 1: Save Order in Backend
//     const orderResult = await placeOrder(orderPayload, token);
//     if (!orderResult.success) {
//       alert(orderResult.error);
//       return;
//     }

//     const createdOrder = orderResult.data.order;

//     // Step 2: Online Payment → Razorpay
//     if (shippingDetails.paymentMethod !== 'COD') {
//       const paymentInit = await createRazorpayOrder(
//         totalPrice,
//         createdOrder._id,
//         token
//       );

//       if (!paymentInit.success) {
//         alert(paymentInit.error);
//         return;
//       }

//       const { order: razorpayOrder, key } = paymentInit.data;

//       const options = {
//         key: key,
//         amount: razorpayOrder.amount,
//         currency: razorpayOrder.currency,
//         name: 'Japam',
//         description: 'Purchase Order Payment',
//         order_id: razorpayOrder.id,
//         handler: async function (response) {
//           const verifyData = {
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_signature: response.razorpay_signature,
//             orderId: createdOrder._id
//           };

//           const verification = await verifyRazorpayPayment(verifyData, token);
//           if (verification.success) {
//             alert('Payment Successful & Order Placed! 🎉');
//             navigate('/order-success');
//           } else {
//             alert('Payment verification failed!');
//           }
//         },
//         prefill: {
//           name: shippingDetails.fullName,
//           email: shippingDetails.email,
//           contact: shippingDetails.phone
//         },
//         theme: {
//           color: '#4a2e18'
//         }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } else {
//       // COD Order Success
//       alert('Order Placed Successfully! 🎉');
//       navigate('/order-success');
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
//         cartItems={formattedCartItems.map((i) => ({
//           title: i.name,
//           quantity: i.qty,
//           price: i.price,
//           image: i.image          // ✅ YEH ADD KAREIN
//         }))}
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
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';
import useOrderStore from '../../store/useOrderStore';
import useProductStore from '../../store/useProductStore';
import useSettingsStore from '../../store/useSettingsStore';   // ✅ ADD kiya
import CheckoutStep from './CheckoutStep';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalAmount, fetchCart } = useCartStore();
  const { placeOrder, createRazorpayOrder, verifyRazorpayPayment } = useOrderStore();
  const { products, fetchProducts } = useProductStore();
  const { settings } = useSettingsStore();   // ✅ Settings lein

  // ✅ Admin Panel se Site Name (fallback: Puja Hetu)
  const siteName = settings?.siteName || 'Puja Hetu';

  // ✅ Admin Panel se Shipping Fee (agar set nahi hai toh default)
  const standardShippingFee = Number(settings?.standardShippingFee) || 99;
  const expressShippingFee = Number(settings?.expressShippingFee) || 199;

  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    const currentUserId =
      storedUser.id || storedUser._id || localStorage.getItem('cartUserId');

    if (currentUserId) {
      fetchCart(currentUserId);
    }

    if (!products || products.length === 0) {
      fetchProducts();
    }
  }, []);

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

  // ✅ Shipping Fee — Admin Panel se
  const shippingFee =
    shippingDetails.shippingMethod === 'Express'
      ? expressShippingFee
      : standardShippingFee;

  const formattedCartItems =
    items?.map((item) => {
      let productId = '';
      if (typeof item.productId === 'string') {
        productId = item.productId;
      } else if (item.productId && typeof item.productId === 'object') {
        productId = item.productId._id || '';
      } else if (item.id) {
        productId = item.id;
      }

      const productFromStore = products?.find((p) => p._id === productId);

      const name =
        productFromStore?.name ||
        item.productId?.name ||
        item.title ||
        item.name ||
        'Product';

      const price =
        productFromStore?.price ||
        item.productId?.price ||
        item.price ||
        0;

      const image =
        productFromStore?.image ||
        item.productId?.image ||
        item.image ||
        '';

      return {
        name,
        qty: item.quantity || 1,
        price,
        image,
        productId
      };
    }) || [];

  const calculatedTotal = formattedCartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const totalPrice = calculatedTotal + shippingFee;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (
      !shippingDetails.fullName ||
      !shippingDetails.pincode ||
      !shippingDetails.address ||
      !shippingDetails.city ||
      !shippingDetails.state
    ) {
      alert('Please fill all shipping details!');
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

    const orderResult = await placeOrder(orderPayload, token);
    if (!orderResult.success) {
      alert(orderResult.error);
      return;
    }

    const createdOrder = orderResult.data.order;

    if (shippingDetails.paymentMethod !== 'COD') {
      const paymentInit = await createRazorpayOrder(
        totalPrice,
        createdOrder._id,
        token
      );

      if (!paymentInit.success) {
        alert(paymentInit.error);
        return;
      }

      const { order: razorpayOrder, key } = paymentInit.data;

      const options = {
        key: key,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: siteName,   // ✅ Ab "Puja Hetu" dikhega (Admin Panel se ya fallback)
        description: 'Purchase Order Payment',
        order_id: razorpayOrder.id,
        handler: async function (response) {
          const verifyData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            orderId: createdOrder._id
          };

          const verification = await verifyRazorpayPayment(verifyData, token);
          if (verification.success) {
            alert('Payment Successful & Order Placed! 🎉');
            navigate('/order-success');
          } else {
            alert('Payment verification failed!');
          }
        },
        prefill: {
          name: shippingDetails.fullName,
          email: shippingDetails.email,
          contact: shippingDetails.phone
        },
        theme: {
          color: '#4a2e18'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert('Order Placed Successfully! 🎉');
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
        cartItems={formattedCartItems.map((i) => ({
          title: i.name,
          quantity: i.qty,
          price: i.price,
          image: i.image
        }))}
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