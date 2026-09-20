import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  // State to track which FAQ item is currently open. Set to null or a number (e.g., 0 for the first one open by default)
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "1. What types of pooja products are available at Pooja Hetu?",
      answer: "We offer a wide selection of authentic pooja essentials, including consecrated yantras, premium rudraksha, energized stones, havan kunds, traditional idols, and complete pooja kits crafted for daily worship and spiritual rituals."
    },
    {
      question: "2. Are your yantras authentic and suitable for daily worship?",
      answer: "Yes, all our yantras are strictly sourced, lab-tested for material purity, and properly energized through traditional Vedic mantras making them completely authentic and auspicious for daily worship."
    },
    {
      question: "3. How do I choose the right yantra for my purpose?",
      answer: "Choosing the right yantra depends on your specific spiritual or life intentions (such as wealth, health, peace, or Vastu correction). You can consult our detailed product descriptions or reach out to our spiritual guides for personalized recommendations."
    },
    {
      question: "4. What is a havan kund and why is it used?",
      answer: "A havan kund is a sacred ritual vessel used for performing fire ceremonies (Havan or Yajna). It acts as a focal point to offer oblations, purify the surrounding atmosphere, and channel divine energies."
    },
    {
      question: "5. Are your vastu products effective for home and office?",
      answer: "Our Vastu items are carefully selected and energized to neutralize negative energies, balance spatial elements, and promote harmony, prosperity, and peace in both residential and commercial spaces."
    },
    {
      question: "6. Do you deliver pooja products across India and internationally?",
      answer: "Yes, we provide secure and reliable shipping across all major pin codes in India as well as international destinations with proper tamper-proof packaging."
    },
    {
      question: "7. How should pooja products and yantras be placed at home?",
      answer: "Yantras and idols should ideally be placed in your home temple or designated sacred space facing East or North, kept clean, and worshipped with a pure mind and regular offerings."
    },
    {
      question: "8. How often should yantras and pooja items be cleaned?",
      answer: "Metal yantras and idols can be gently wiped clean with water, milk, or holy ash (vibhuti) during special occasions or weekly cleansings, while maintaining ritual purity and reverence."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#fff3df] border-y border-[#edd5b9]">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl  font-normal text-[#4a2e18] tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-0.5 bg-[#d35400]/30 mx-auto mt-4"></div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-[#fff3df] border border-[#edd5b9] rounded-xl shadow-sm transition-all duration-300 overflow-hidden"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span className="font-medium text-[#4a2e18] text-base sm:text-lg group-hover:text-[#d35400] transition-colors pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus / Minus Icon Container */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                    isOpen 
                      ? "bg-[#fff3df] border-[#d35400] text-[#d35400] rotate-180" 
                      : "bg-[#fdfaf6] border-[#edd5b9] text-[#4a2e18] group-hover:border-[#d35400]"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content Dropdown */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 opacity-100 pb-6 px-6" : "max-h-0 opacity-0 px-6"
                }`}>
                  <div className="border-t border-[#edd5b9]/50 pt-4 text-black  text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;