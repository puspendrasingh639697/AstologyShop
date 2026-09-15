


// import { create } from 'zustand';
// import API from '../services/api';

// const useAuthStore = create((set) => ({
//     user: JSON.parse(localStorage.getItem('user')) || null,
//     token: localStorage.getItem('token') || null,
//     refreshTokenValue: localStorage.getItem('refreshToken') || null,
//     role: localStorage.getItem('role') || 'user',

//     // Register Action
//     register: async (name, email, password, role) => {
//         try {
//             const { data } = await API.post('/auth/register', { name, email, password, role });
            
//             // Register ke baad token nahi aata backend se, isliye sirf success return karenge
//             return { 
//                 success: true, 
//                 message: data.message || "Registered Successfully!" 
//             };
//         } catch (error) {
//             return { 
//                 success: false, 
//                 message: error.response?.data?.message || 'Registration failed' 
//             };
//         }
//     },

//     // Login Action
//     login: async (email, password) => {
//         try {
//             const { data } = await API.post('/auth/login', { email, password });
            
//             const userRole = data.user?.role || 'user';
//             const userToken = data.token;
//             const refreshToken = data.refreshToken; // Agar backend refresh token bhej raha hai
//             const userData = data.user;

//             localStorage.setItem('token', userToken);
//             if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
//             localStorage.setItem('role', userRole);
//             localStorage.setItem('user', JSON.stringify(userData));

//             set({ user: userData, token: userToken, refreshTokenValue: refreshToken, role: userRole });
//             return { success: true, user: userData };
//         } catch (error) {
//             return { 
//                 success: false, 
//                 message: error.response?.data?.message || 'Login failed' 
//             };
//         }
//     },

//     // Refresh Token Action
//     refreshToken: async (refreshTokenStr) => {
//         try {
//             const { data } = await API.post('/auth/refresh-token', { refreshToken: refreshTokenStr });
            
//             const newToken = data.token; 
//             if (newToken) {
//                 localStorage.setItem('token', newToken);
//                 set({ token: newToken });
//             }

//             return { 
//                 success: true, 
//                 token: newToken, 
//                 message: data.message || 'Token refreshed successfully!' 
//             };
//         } catch (error) {
//             return { 
//                 success: false, 
//                 message: error.response?.data?.message || 'Invalid or expired Refresh Token!' 
//             };
//         }
//     },

//     // Logout Action
//     logout: () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('refreshToken');
//         localStorage.removeItem('role');
//         localStorage.removeItem('user');
//         set({ user: null, token: null, refreshTokenValue: null, role: 'user' });
//     }
// }));

// export default useAuthStore;


import { create } from 'zustand';
import API from '../services/api';
import useCartStore from './useCartStore';
import useWishlistStore from './useWishlistStore';
// import useCartStore from './cartStore';
// import useWishlistStore from './wishlistStore';

const useAuthStore = create((set, get) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    refreshTokenValue: localStorage.getItem('refreshToken') || null,
    role: localStorage.getItem('role') || 'user',

    register: async (name, email, password, role) => {
        try {
            const { data } = await API.post('/auth/register', { name, email, password, role });
            return { 
                success: true, 
                message: data.message || "Registered Successfully!" 
            };
        } catch (error) {
            return { 
                success: false, 
                message: error.response?.data?.message || 'Registration failed' 
            };
        }
    },
login: async (email, password) => {
    try {
        console.log('🔐 ===== LOGIN STARTED =====');
        const { data } = await API.post('/auth/login', { email, password });
        
        console.log('📦 Login Response:', data);
        
        const userToken = data.token;
        const refreshToken = data.refreshToken;

        // ✅ Backend user object nahi de raha, isliye Token se decode karo
        let userData = data.user;
        
        if (!userData && userToken) {
            try {
                const payload = JSON.parse(atob(userToken.split('.')[1]));
                userData = {
                    id: payload.id || payload._id,
                    email: payload.email,
                    role: payload.role || 'user',
                    name: payload.name || ''
                };
                console.log('📦 User from Token:', userData);
            } catch (decodeError) {
                console.error('❌ Failed to decode token:', decodeError);
            }
        }

        const userRole = userData?.role || 'user';
        const userId = userData?.id || userData?._id;

        // Save to localStorage
        localStorage.setItem('token', userToken);
        if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('role', userRole);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('cartUserId', userId); // ✅ Save cartUserId

        // Set auth state
        set({ 
            user: userData, 
            token: userToken, 
            refreshTokenValue: refreshToken, 
            role: userRole 
        });

        // ✅ IMPORTANT: Set user ID in cart store
        if (userId) {
            console.log('🛒 Setting user ID in cart store:', userId);
            const { setUserId, fetchCart } = useCartStore.getState();
            setUserId(userId);
            
            await fetchCart(userId);
            
            const { fetchWishlist } = useWishlistStore.getState();
            await fetchWishlist();
            
            console.log('✅ Cart and Wishlist initialized!');
        }

        return { success: true, user: userData };
    } catch (error) {
        console.error('❌ Login error:', error);
        return { 
            success: false, 
            message: error.response?.data?.message || 'Login failed' 
        };
    }
},

    refreshToken: async (refreshTokenStr) => {
        try {
            const { data } = await API.post('/auth/refresh-token', { refreshToken: refreshTokenStr });
            
            const newToken = data.token; 
            if (newToken) {
                localStorage.setItem('token', newToken);
                set({ token: newToken });
            }

            return { 
                success: true, 
                token: newToken, 
                message: data.message || 'Token refreshed successfully!' 
            };
        } catch (error) {
            return { 
                success: false, 
                message: error.response?.data?.message || 'Invalid or expired Refresh Token!' 
            };
        }
    },

    logout: () => {
        console.log('🔐 ===== LOGOUT STARTED =====');
        
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');
        localStorage.removeItem('user');
        localStorage.removeItem('cartUserId');
        
        set({ user: null, token: null, refreshTokenValue: null, role: 'user' });
        
        const { resetCart } = useCartStore.getState();
        const { resetWishlist } = useWishlistStore.getState();
        resetCart();
        resetWishlist();
        
        console.log('✅ Logged out successfully!');
    },

    getUserId: () => {
        const state = get();
        return state.user?.id || state.user?._id || localStorage.getItem('cartUserId') || null;
    },

    isAuthenticated: () => {
        const state = get();
        return !!state.token && !!state.user;
    },
}));

export default useAuthStore;