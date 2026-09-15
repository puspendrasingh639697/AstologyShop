import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role user
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { register } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Backend par data bhej rahe hain
            const result = await register(name, email, password, role);
            
            if (result.success) {
                alert("Registration Successful! Please login.");
                navigate('/login'); // Register ke baad login page par redirect
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[85vh] bg-gray-50 py-6 px-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Create Account</h2>

                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm text-center">{error}</div>}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                </div>

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

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="9876543210"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        placeholder="********"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Register As</label>
                    <select 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white"
                    >
                        <option value="user">Customer (User)</option>
                        <option value="astrologer">Astrologer</option>
                    </select>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-medium hover:bg-orange-700 transition text-sm disabled:opacity-50"
                >
                    {loading ? "Signing up..." : "Sign Up"}
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-orange-600 font-medium hover:underline">
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;