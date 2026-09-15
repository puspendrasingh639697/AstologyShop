import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOtpStore from '../store/useOtpStore';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const { forgotPassword, loading, message, error } = useOtpStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPassword(email);
    };

    return (
        <div className="flex justify-center items-center min-h-[85vh] bg-gray-50 py-6 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-2">Forgot Password</h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    Enter your email address and we'll send you a password reset link.
                </p>

                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm text-center">{error}</div>}
                {message && <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm text-center">{message}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            placeholder="email@example.com"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-medium hover:bg-orange-700 transition text-sm disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Remember your password?{' '}
                    <Link to="/login" className="text-orange-600 font-medium hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;