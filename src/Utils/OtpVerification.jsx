import React, { useState } from 'react';
import useOtpStore from '../store/useOtpStore';

const OtpVerification = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1); // Step 1: Send OTP, Step 2: Verify OTP
    
    const { sendOtp, verifyOtp, loading, message, error } = useOtpStore();

    // Send OTP Handler
    const handleSendOtp = async (e) => {
        e.preventDefault();
        const res = await sendOtp(email, phone);
        if (res.success) {
            setStep(2); // Next step par move karo verification ke liye
        }
    };

    // Verify OTP Handler
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        const res = await verifyOtp(email, otp);
        if (res.success) {
            alert("OTP Verified Successfully!");
            // Yahan aap user ko aage redirect kar sakte ho (jaise Reset Password page par)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[85vh] bg-gray-50 py-6 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-2">
                    {step === 1 ? "Send OTP" : "Verify OTP"}
                </h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    {step === 1 ? "Enter your email and phone to receive an OTP." : `Enter the 6-digit OTP sent to ${email}`}
                </p>

                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm text-center">{error}</div>}
                {message && <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm text-center">{message}</div>}

                {step === 1 ? (
                    // Step 1: Send OTP Form
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
                ) : (
                    // Step 2: Verify OTP Form
                    <form onSubmit={handleVerifyOtp}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2">Enter OTP</label>
                            <input 
                                type="text" 
                                value={otp} 
                                onChange={(e) => setOtp(e.target.value)} 
                                required 
                                placeholder="Enter 6-digit OTP"
                                className="w-full px-3 py-2 border rounded-lg tracking-widest text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-medium hover:bg-orange-700 transition text-sm disabled:opacity-50 mb-3"
                        >
                            {loading ? "Verifying..." : "Verify OTP"}
                        </button>

                        <button 
                            type="button" 
                            onClick={() => setStep(1)}
                            className="w-full text-gray-600 py-2 text-sm hover:underline"
                        >
                            Back / Resend OTP
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default OtpVerification;