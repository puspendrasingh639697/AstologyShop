

// import { create } from 'zustand';
// import axios from 'axios';

// const useCartStore = create((set, get) => ({
//     cart: null,
//     items: [],
//     totalItems: 0,
//     totalAmount: 0,
//     loading: false,
//     error: null,
//     userId: null,

//     setUserId: (userId) => {
//         set({ userId });
//         if (userId) {
//             localStorage.setItem('cartUserId', userId);
//         }
//     },

//     // 🛒 FETCH CART (Guest ke liye LocalStorage, Login ke liye Backend)
//     fetchCart: async (userId) => {
//         const token = localStorage.getItem('token');
//         const currentUserId = userId || get().userId || JSON.parse(localStorage.getItem('user') || '{}')?.id || JSON.parse(localStorage.getItem('user') || '{}')?._id || localStorage.getItem('cartUserId');

//         if (!token || !currentUserId) {
//             console.log('📦 Guest Cart - Fetching from LocalStorage');
//             const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
            
//             const totalItems = guestCart.reduce((sum, item) => sum + item.quantity, 0);
//             const totalAmount = guestCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//             set({
//                 items: guestCart,
//                 totalItems: totalItems,
//                 totalAmount: totalAmount,
//                 loading: false,
//                 error: null,
//                 userId: null
//             });
//             return;
//         }

//         set({ loading: true, error: null });
//         try {
//             const response = await axios.get(`:5000/api/cart/${currentUserId}`, {
//                 headers: { ...(token && { Authorization: `Bearer ${token}` }) }
//             });
//             const cartData = response.data.cart || response.data;
            
//             set({ 
//                 cart: cartData,
//                 items: cartData.items || [],
//                 totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
//                 totalAmount: cartData.totalAmount || 0,
//                 loading: false,
//                 userId: currentUserId
//             });
//         } catch (error) {
//             set({ 
//                 error: error.response?.data?.message || error.message, 
//                 loading: false,
//                 items: [] 
//             });
//         }
//     },

//     // ➕ ADD TO CART (Guest ke liye LocalStorage, Login ke liye Backend)
//     addToCart: async (product, quantity = 1) => {
//         const token = localStorage.getItem('token');
//         const user = JSON.parse(localStorage.getItem('user') || '{}');
//         const userId = user.id || user._id || localStorage.getItem('cartUserId');
        
//         // Product ki ID chahe 'id' ho ya '_id', dono support karega
//         const productId = product.id || product._id;

//         if (!token || !userId) {
//             console.log('🛒 Guest User - Saving to LocalStorage');
            
//             const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
            
//             const cartItem = {
//                 id: productId,
//                 title: product.title || product.name,
//                 variant: product.variant || 'Standard',
//                 price: product.price,
//                 sku: product.sku,
//                 image: product.image,
//                 quantity: quantity
//             };

//             const existingIndex = guestCart.findIndex((item) => item.id === cartItem.id && item.variant === cartItem.variant);
            
//             if (existingIndex !== -1) {
//                 guestCart[existingIndex].quantity += quantity;
//             } else {
//                 guestCart.push(cartItem);
//             }

//             localStorage.setItem('guestCart', JSON.stringify(guestCart));

//             const totalItems = guestCart.reduce((sum, item) => sum + item.quantity, 0);
//             const totalAmount = guestCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//             set({
//                 items: guestCart,
//                 totalItems: totalItems,
//                 totalAmount: totalAmount,
//                 loading: false,
//                 error: null
//             });

//             return { success: true, data: cartItem };
//         }

//         set({ loading: true, error: null });
//         try {
//             // Postman ki tarah sirf wahi exact fields bheji hain jo backend maang raha hai
//             const response = await axios.post('https://astologyshop-e.onrender.com/api/cart/add', {
//                 userId: userId || "6a83d7775897c429c0fe3225",
//                 productId: productId || "6a83e9dff4f8e5cc4add4638",
//                 quantity: quantity
//             }, {
//                 headers: { 
//                     'Content-Type': 'application/json',
//                     ...(token && { Authorization: `Bearer ${token}` }) 
//                 }
//             });
            
//             const cartData = response.data.cart;
//             set({ 
//                 cart: cartData,
//                 items: cartData.items || [],
//                 totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
//                 totalAmount: cartData.totalAmount || 0,
//                 loading: false,
//                 userId: userId
//             });
            
//             return { success: true, message: response.data.message };
//         } catch (error) {
//             const errorMsg = error.response?.data?.message || error.message || "Error adding to cart";
//             set({ 
//                 error: errorMsg, 
//                 loading: false 
//             });
//             return { success: false, error: errorMsg };
//         }
//     },

//     // 🔄 UPDATE QUANTITY
//     updateQuantity: async (productId, quantity) => {
//         const token = localStorage.getItem('token');
//         const user = JSON.parse(localStorage.getItem('user') || '{}');
//         const userId = user.id || user._id || localStorage.getItem('cartUserId');

//         if (!token || !userId) {
//             const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
//             const itemIndex = guestCart.findIndex((item) => item.id === productId);
            
//             if (itemIndex !== -1) {
//                 if (quantity <= 0) {
//                     guestCart.splice(itemIndex, 1);
//                 } else {
//                     guestCart[itemIndex].quantity = quantity;
//                 }
//             }
            
//             localStorage.setItem('guestCart', JSON.stringify(guestCart));
            
//             const totalItems = guestCart.reduce((sum, item) => sum + item.quantity, 0);
//             const totalAmount = guestCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//             set({
//                 items: guestCart,
//                 totalItems: totalItems,
//                 totalAmount: totalAmount,
//                 loading: false,
//                 error: null
//             });
            
//             return { success: true };
//         }

//         if (quantity <= 0) {
//             return await get().removeFromCart(productId);
//         }

//         try {
//             const response = await axios.post('https://astologyshop-e.onrender.com/api/cart/add', {
//                 userId: userId,
//                 productId,
//                 quantity
//             }, {
//                 headers: { ...(token && { Authorization: `Bearer ${token}` }) }
//             });
            
//             const cartData = response.data.cart;
//             set({ 
//                 cart: cartData,
//                 items: cartData.items || [],
//                 totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
//                 totalAmount: cartData.totalAmount || 0
//             });
//         } catch (error) {
//             console.error("Error updating quantity:", error);
//         }
//     },
// removeFromCart: async (userId, productId) => {
//     try {
//       console.log("Deleting -> userId:", userId, "productId:", productId);

//       const response = await axios.delete(`https://astologyshop-e.onrender.com/api/cart/remove/${userId}/${productId}`);
      
//       const cartData = response.data.cart;
//       set({ 
//         cart: cartData,
//         items: cartData.items || [],
//         totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
//         totalAmount: cartData.totalAmount || 0
//       });

//       return { success: true, message: response.data.message };
//     } catch (error) {
//       console.error("Error removing from cart:", error.response?.data || error.message);
//       return { success: false, error: error.response?.data?.message || "Failed to remove" };
//     }
//   },
  

//     // 🗑️ CLEAR CART
//     clearCart: async () => {
//         localStorage.removeItem('guestCart');
//         set({ items: [], totalItems: 0, totalAmount: 0, cart: null, userId: null });
//     }
// }));

// export default useCartStore;


import { create } from 'zustand';
import axios from 'axios';
import API_BASE_URL from '../config/api'; // ✅ Central URL

const useCartStore = create((set, get) => ({
    cart: null,
    items: [],
    totalItems: 0,
    totalAmount: 0,
    loading: false,
    error: null,
    userId: null,

    setUserId: (userId) => {
        set({ userId });
        if (userId) {
            localStorage.setItem('cartUserId', userId);
        }
    },

    // 🛒 FETCH CART (Guest ke liye LocalStorage, Login ke liye Backend)
    fetchCart: async (userId) => {
        const token = localStorage.getItem('token');
        const currentUserId = userId || get().userId || JSON.parse(localStorage.getItem('user') || '{}')?.id || JSON.parse(localStorage.getItem('user') || '{}')?._id || localStorage.getItem('cartUserId');

        if (!token || !currentUserId) {
            console.log('📦 Guest Cart - Fetching from LocalStorage');
            const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');

            const totalItems = guestCart.reduce((sum, item) => sum + item.quantity, 0);
            const totalAmount = guestCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            set({
                items: guestCart,
                totalItems: totalItems,
                totalAmount: totalAmount,
                loading: false,
                error: null,
                userId: null
            });
            return;
        }

        set({ loading: true, error: null });
        try {
            // ✅ API_BASE_URL use karein
            const response = await axios.get(`${API_BASE_URL}/cart/${currentUserId}`, {
                headers: { ...(token && { Authorization: `Bearer ${token}` }) }
            });
            const cartData = response.data.cart || response.data;

            set({
                cart: cartData,
                items: cartData.items || [],
                totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
                totalAmount: cartData.totalAmount || 0,
                loading: false,
                userId: currentUserId
            });
        } catch (error) {
            set({
                error: error.response?.data?.message || error.message,
                loading: false,
                items: []
            });
        }
    },

   // ➕ ADD TO CART (String ID ya Product Object — dono chalega)
addToCart: async (productOrId, quantity = 1) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user.id || user._id || localStorage.getItem('cartUserId');

    // ✅ String ID ya Object — dono handle karo
    let productId;
    let productData = {};

    if (typeof productOrId === 'string') {
        productId = productOrId;
        productData = { id: productOrId };
    } else if (productOrId && typeof productOrId === 'object') {
        productId = productOrId._id || productOrId.id;
        productData = productOrId;
    }

    if (!productId) {
        return { success: false, error: 'Invalid product ID' };
    }

    // Guest user
    if (!token || !userId) {
        console.log('🛒 Guest User - Saving to LocalStorage');

        const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');

       const cartItem = {
  id: productId,
  title: productData.name || productData.title || 'Product',
  price: productData.price || 0,
  image: productData.image || '',   // ✅ yeh
  sku: productData.sku || '',
  quantity: quantity
};

        const existingIndex = guestCart.findIndex(
            (item) => item.id === cartItem.id && item.variant === cartItem.variant
        );

        if (existingIndex !== -1) {
            guestCart[existingIndex].quantity += quantity;
        } else {
            guestCart.push(cartItem);
        }

        localStorage.setItem('guestCart', JSON.stringify(guestCart));

        const totalItems = guestCart.reduce((sum, item) => sum + item.quantity, 0);
        const totalAmount = guestCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        set({
            items: guestCart,
            totalItems: totalItems,
            totalAmount: totalAmount,
            loading: false,
            error: null
        });

        return { success: true, data: cartItem };
    }

    // Logged-in user
    set({ loading: true, error: null });
    try {
        const response = await axios.post(`${API_BASE_URL}/cart/add`, {
            userId: userId,
            productId: productId,   // ✅ sahi ID jaayegi
            quantity: quantity
        }, {
            headers: {
                'Content-Type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}` })
            }
        });

        const cartData = response.data.cart;
        set({
            cart: cartData,
            items: cartData.items || [],
            totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
            totalAmount: cartData.totalAmount || 0,
            loading: false,
            userId: userId
        });

        return { success: true, message: response.data.message };
    } catch (error) {
        const errorMsg = error.response?.data?.message || error.message || "Error adding to cart";
        set({ error: errorMsg, loading: false });
        return { success: false, error: errorMsg };
    }
},
    // 🔄 UPDATE QUANTITY
    updateQuantity: async (productId, quantity) => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const userId = user.id || user._id || localStorage.getItem('cartUserId');

        if (!token || !userId) {
            const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]');
            const itemIndex = guestCart.findIndex((item) => item.id === productId);

            if (itemIndex !== -1) {
                if (quantity <= 0) {
                    guestCart.splice(itemIndex, 1);
                } else {
                    guestCart[itemIndex].quantity = quantity;
                }
            }

            localStorage.setItem('guestCart', JSON.stringify(guestCart));

            const totalItems = guestCart.reduce((sum, item) => sum + item.quantity, 0);
            const totalAmount = guestCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            set({
                items: guestCart,
                totalItems: totalItems,
                totalAmount: totalAmount,
                loading: false,
                error: null
            });

            return { success: true };
        }

        if (quantity <= 0) {
            return await get().removeFromCart(userId, productId);
        }

        try {
            // ✅ API_BASE_URL use karein
            const response = await axios.post(`${API_BASE_URL}/cart/add`, {
                userId: userId,
                productId,
                quantity
            }, {
                headers: { ...(token && { Authorization: `Bearer ${token}` }) }
            });

            const cartData = response.data.cart;
            set({
                cart: cartData,
                items: cartData.items || [],
                totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
                totalAmount: cartData.totalAmount || 0
            });
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    },

    removeFromCart: async (userId, productId) => {
        try {
            console.log("Deleting -> userId:", userId, "productId:", productId);

            // ✅ API_BASE_URL use karein
            const response = await axios.delete(`${API_BASE_URL}/cart/remove/${userId}/${productId}`);

            const cartData = response.data.cart;
            set({
                cart: cartData,
                items: cartData.items || [],
                totalItems: cartData.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
                totalAmount: cartData.totalAmount || 0
            });

            return { success: true, message: response.data.message };
        } catch (error) {
            console.error("Error removing from cart:", error.response?.data || error.message);
            return { success: false, error: error.response?.data?.message || "Failed to remove" };
        }
    },

    // 🗑️ CLEAR CART
    clearCart: async () => {
        localStorage.removeItem('guestCart');
        set({ items: [], totalItems: 0, totalAmount: 0, cart: null, userId: null });
    }
}));

export default useCartStore;