import React, { useState } from "react";
import { BiChevronDown, BiRefresh, BiHelpCircle } from "react-icons/bi";

const ShippingReturnsFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Are these items energized before shipping?",
      answer: "Yes, all our spiritual items and Rudraksha beads are traditionally cleansed, sanctified, and energized using Vedic mantras before dispatch."
    },
    {
      question: "What is the estimated delivery time?",
      answer: "Standard delivery usually takes 3-5 business days depending on your location pincode. Express shipping options are also available at checkout."
    },
    {
      question: "What is your return and replacement policy?",
      answer: "We offer a 7-day hassle-free return and replacement policy for damaged, defective, or incorrect items received. The product must be unused and in its original packaging."
    },
    {
      question: "Is Cash on Delivery (COD) available?",
      answer: "Yes, Cash on Delivery is available across most pin codes in India. Additional prepaid discounts apply on online payments."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Shipping & Returns Overview Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm flex items-start gap-3">
          <span className="text-2xl shrink-0">🚚</span>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#4a2e18] mb-1">Shipping Information</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dispatched within 24-48 hours. Free shipping available on all prepaid orders above Rs. 999.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm flex items-start gap-3">
          <span className="text-2xl shrink-0">🔄</span>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#4a2e18] mb-1">Returns & Exchange</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              7-Day easy returns policy. Unboxing video is mandatory for reporting any transit damages or missing components.
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <div className="bg-white p-6 border border-stone-200 rounded-sm shadow-sm">
        <h3 className="text-base font-serif text-[#4a2e18] mb-4 flex items-center gap-2">
          <BiHelpCircle className="text-xl text-[#8b3a2b]" /> Frequently Asked Questions
        </h3>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-stone-200 rounded-sm overflow-hidden bg-stone-50/50">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center p-3.5 text-left text-xs font-bold text-[#4a2e18] hover:bg-stone-100 transition cursor-pointer"
              >
                <span>{faq.question}</span>
                <BiChevronDown className={`text-lg transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              {openFaq === index && (
                <div className="p-3.5 pt-0 text-xs text-stone-600 border-t border-stone-200 bg-white leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingReturnsFAQ;