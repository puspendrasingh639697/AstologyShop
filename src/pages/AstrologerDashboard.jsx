import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Clock } from 'lucide-react';

const AstrologerDashboard = () => {
    return (
        <div className="min-h-[85vh] bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center px-4 py-12">
            <div className="max-w-xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-orange-100 p-8 md:p-12 text-center relative overflow-hidden">
                
                {/* Background decorative glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-red-300 rounded-full blur-3xl opacity-30"></div>

                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
                    <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
                    <span>Astrologer Portal & Dashboard</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
                    Divine Dashboard is <span className="text-orange-600">Coming Soon!</span>
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                    Hum astrologers ke liye ek shandar aur powerful platform tayar kar rahe hain jahan live chat, kundli analysis aur consultations manage hongi. Bahut jald yeh launch hone wala hai!
                </p>

                {/* Feature highlights pills */}
                <div className="grid grid-cols-2 gap-3 mb-8 text-left">
                    <div className="bg-orange-50/60 border border-orange-100 p-3 rounded-xl flex items-center gap-3">
                        <Clock className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">Live Status Toggle</span>
                    </div>
                    <div className="bg-orange-50/60 border border-orange-100 p-3 rounded-xl flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">Kundli Access</span>
                    </div>
                </div>

                {/* Back to Home Button */}
                <Link 
                    to="/" 
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-xl font-medium shadow-lg shadow-orange-500/25 hover:from-orange-700 hover:to-red-700 transition duration-300"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    );
};

export default AstrologerDashboard;