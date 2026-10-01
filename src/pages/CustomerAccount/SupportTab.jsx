import React, { useState } from "react";
import { BiSupport, BiPhoneCall, BiEnvelope, BiMessageSquareDetail, BiCheckCircle } from "react-icons/bi";; // Ya fir react-icons/bi

export default function SupportTab() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.subject && formData.message) {
      setSubmitted(true);
      setFormData({ subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000); // 4 seconds baad reset
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-black">Customer Support & Help Center</h3>
      <p className="text-xs text-black">Aapko kisi bhi tarah ki sahayata chahiye ho, toh humse sampark karein.</p>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="border border-stone-200 bg-gradient-to-r from-red-800 to-red-600 p-4 rounded-sm flex items-center gap-3">
          <div className="w-10 h-10  text-white rounded-full flex items-center justify-center text-lg">
            <BiPhoneCall />
          </div>
          <div>
            <span className="text-[10px] text-white uppercase font-bold block">Call Support</span>
            <span className="text-xs font-bold text-white">+91 98765 43210</span>
          </div>
        </div>

        <div className="border border-stone-200 bg-gradient-to-r from-red-800 to-red-600 p-4 rounded-sm flex items-center gap-3">
          <div className="w-10 h-10  text-white rounded-full flex items-center justify-center text-lg">
            <BiEnvelope />
          </div>
          <div>
            <span className="text-[10px] text-white uppercase font-bold block">Email Support</span>
            <span className="text-xs font-bold text-white">support@pujahetu.com</span>
          </div>
        </div>
      </div>

      {/* Support Ticket Form */}
      <div className="border border-stone-100 p-6 rounded-sm bg-white space-y-4">
        <h4 className="font-bold text-sm text-black flex items-center gap-2">
          <BiMessageSquareDetail /> Raise a Support Ticket
        </h4>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3 rounded-sm text-xs flex items-center gap-2">
            <BiCheckCircle className="text-base text-emerald-600" />
            Aapka message mil gaya hai. Hamari team jald hi aapse sampark karegi!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-black uppercase mb-1">Subject / Issue Type</label>
              <input 
                type="text" 
                placeholder="e.g. Order Delay, Payment Issue" 
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border border-stone-300 rounded-sm p-2 text-xs outline-none focus:border-[#8b3a2b]"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">Message Description</label>
              <textarea 
                rows="4" 
                placeholder="Apni samasya yahan vistar se likhein..." 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-stone-300 rounded-sm p-2 text-xs outline-none focus:border-[#8b3a2b]"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-gradient-to-r from-red-800 to-red-600 hover:bg-[#321e10] text-white text-xs font-bold uppercase px-5 py-2.5 rounded-sm cursor-pointer transition"
            >
              Submit Ticket
            </button>
          </form>
        )}
      </div>
    </div>
  );
}