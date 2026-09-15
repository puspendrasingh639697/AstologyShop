import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import useCartStore from '../store/useCartStore';
import useWishlistStore from '../store/useWishlistStore';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { login } = useAuthStore();
    const { setUserId, fetchCart } = useCartStore();
    const { fetchWishlist } = useWishlistStore();
         const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = await login(email, password);
            
            if (result && result.success) {
                // ✅ AB userId ko localStorage SE NIKAALO (Backend user object nahi de raha)
                const userData = JSON.parse(localStorage.getItem('user') || '{}');
                const userRole = userData.role || 'user';
                const userId = userData.id || userData._id || localStorage.getItem('cartUserId');
                
                if (userId) {
                    setUserId(userId);
                    await fetchCart(userId);      // ✅ AWAIT LAGAO
                    await fetchWishlist(userId);  // ✅ AWAIT LAGAO
                }

                if (userRole === 'astrologer') {
                    window.location.href = '/astrologer/dashboard'; 
                } else if (userRole === 'admin' || userRole === 'super_admin') {
                    window.location.href = '/admin/dashboard';
                } else {
                    window.location.href = '/'; 
                }
            } else {
                setError(result?.message || "Invalid email or password!");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Something went wrong during login. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[85vh] bg-gray-50 py-6 px-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Login to SpiritualStore</h2>

                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm text-center">{error}</div>}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email@example.com"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm" disabled={loading} />
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="********"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm" disabled={loading} />
                </div>

                <div className="flex justify-end mb-5">
                    <Link to="/forgot-password" className="text-xs text-orange-600 font-medium hover:underline">Forgot Password?</Link>
                </div>

                <button type="submit" disabled={loading}
                    className={`w-full py-2.5 rounded-lg font-medium transition text-sm ${loading ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-orange-600 text-white hover:bg-orange-700'}`}>
                    {loading ? "Logging in..." : "Login"}
                </button>

                <div className="text-center mt-3">
                    <Link to="/send-otp" className="text-xs text-orange-600 font-medium hover:underline">Or Login / Verify via OTP</Link>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-orange-600 font-medium hover:underline">Register here</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;