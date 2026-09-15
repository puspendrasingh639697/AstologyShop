import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowLeft } from 'lucide-react';
import axios from 'axios';

const AstrologerRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Backend register API call with role fixed to 'astrologer'
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                ...formData,
                role: 'astrologer'
            });

            if (response.data.success) {
                alert("Astrologer Registered Successfully! Please Login.");
                navigate('/astrologer/login');
            }
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[85vh] bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-orange-100 p-8">
                
                {/* Header Badge */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-xs font-semibold mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                        <span>Astrologer Partner Portal</span>
                    </div>
                    <h2 className="text-2xl font-bold font-serif text-gray-900">Join as an Astrologer</h2>
                    <p className="text-gray-500 text-sm mt-1">Create your profile to consult clients worldwide</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">Full Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            required 
                            placeholder="Acharya Sharma" 
                            value={formData.name} 
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-sm bg-gray-50/50"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            required 
                            placeholder="astrologer@example.com" 
                            value={formData.email} 
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-sm bg-gray-50/50"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">Phone Number</label>
                        <input 
                            type="text" 
                            name="phone" 
                            placeholder="9876543210" 
                            value={formData.phone} 
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-sm bg-gray-50/50"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            required 
                            placeholder="••••••••" 
                            value={formData.password} 
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 text-sm bg-gray-50/50"
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-medium shadow-lg shadow-orange-500/25 hover:from-orange-700 hover:to-red-700 transition duration-300 text-sm mt-2 disabled:opacity-50"
                    >
                        {loading ? "Registering..." : "Register as Astrologer"}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Already registered? <Link to="/astrologer/login" className="text-orange-600 font-semibold hover:underline">Login here</Link>
                </div>

                <div className="mt-4 text-center">
                    <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800">
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Website Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AstrologerRegister;