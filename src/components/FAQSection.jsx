

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "What types of pooja products are available at Aaradhya?", answer: "We offer a wide selection of authentic pooja essentials, including consecrated yantras, premium rudraksha, energized stones, havan kunds, traditional idols, and complete pooja kits crafted for daily worship and spiritual rituals." },
    { question: "Are your yantras authentic and suitable for daily worship?", answer: "Yes, all our yantras are strictly sourced, lab-tested for material purity, and properly energized through traditional Vedic mantras making them completely authentic and auspicious for daily worship." },
    { question: "How do I choose the right yantra for my purpose?", answer: "Choosing the right yantra depends on your specific spiritual or life intentions (such as wealth, health, peace, or Vastu correction). You can consult our detailed product descriptions or reach out to our spiritual guides for personalized recommendations." },
    { question: "What is a havan kund and why is it used?", answer: "A havan kund is a sacred ritual vessel used for performing fire ceremonies (Havan or Yajna). It acts as a focal point to offer oblations, purify the surrounding atmosphere, and channel divine energies." },
    { question: "Are your vastu products effective for home and office?", answer: "Our Vastu items are carefully selected and energized to neutralize negative energies, balance spatial elements, and promote harmony, prosperity, and peace in both residential and commercial spaces." },
    { question: "Do you deliver pooja products across India and internationally?", answer: "Yes, we provide secure and reliable shipping across all major pin codes in India as well as international destinations with proper tamper-proof packaging." },
    { question: "How should pooja products and yantras be placed at home?", answer: "Yantras and idols should ideally be placed in your home temple or designated sacred space facing East or North, kept clean, and worshipped with a pure mind and regular offerings." },
    { question: "How often should yantras and pooja items be cleaned?", answer: "Metal yantras and idols can be gently wiped clean with water, milk, or holy ash (vibhuti) during special occasions or weekly cleansings, while maintaining ritual purity and reverence." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full pt-4 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1000px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#5A1F1F] tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#5A1F1F]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#5A1F1F]/60"></span>
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#5A1F1F]/50"></span>
          </div>
        </div>

        {/* FAQ List — NO BOX, ONLY LINES */}
        <div>
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#5A1F1F]/15"
              >
                <div
                  key={`inner-${index}-${isOpen}`}
                  style={{
                    animation: isOpen
                      ? "swing-top-bck 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"
                      : "none",
                    transformOrigin: "top center",
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer group"
                  >
                    <span
                      className={`text-[15px] sm:text-base md:text-lg tracking-wide transition-colors duration-300 ${
                        isOpen
                          ? "text-black font-medium"
                          : "text-black group-hover:text-[#5A1F1F]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? " text-white rotate-180"
                          : " text-[#5A1F1F] group-hover:bg-[#5A1F1F] group-hover:text-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-5 sm:pb-6 pr-10 sm:pr-14">
                      <p className="text-[#3E2B2B] text-[13.5px] sm:text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Animation */}
      <style>{`
        @keyframes swing-top-bck {
          0% {
            transform: rotateX(70deg);
            transform-origin: top;
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            transform-origin: top;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;