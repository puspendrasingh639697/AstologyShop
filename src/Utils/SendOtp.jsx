import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useOtpStore from '../store/useOtpStore';

const SendOtp = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const { sendOtp, loading, message, error } = useOtpStore();
    const navigate = useNavigate();

    const handleSendOtp = async (e) => {
        e.preventDefault();
        const res = await sendOtp(email, phone);
        if (res.success) {
            // OTP bhejne ke baad user ko seedha Verify OTP page par bhej sakte hain
            // aur email state mein pass kar sakte hain
            setTimeout(() => {
                navigate('/verify-otp', { state: { email } });
            }, 1500);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[85vh] bg-gray-50 py-6 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-2">Send OTP</h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    Enter your email and phone number to receive a verification code.
                </p>

                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm text-center">{error}</div>}
                {message && <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm text-center">{message}</div>}

                <form onSubmit={handleSendOtp}>
                    <div className="mb-4">
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

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                        <input 
                            type="text" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                            placeholder="9000000000"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-medium hover:bg-orange-700 transition text-sm disabled:opacity-50"
                    >
                        {loading ? "Sending OTP..." : "Send OTP"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an OTP?{' '}
                    <Link to="/verify-otp" className="text-orange-600 font-medium hover:underline">
                        Verify here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SendOtp;