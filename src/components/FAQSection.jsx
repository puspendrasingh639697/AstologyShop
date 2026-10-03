// // import React, { useState } from "react";
// // import { Plus, Minus } from "lucide-react";

// // const FAQSection = () => {
// //   const [openIndex, setOpenIndex] = useState(null);

// //   const faqData = [
// //     {
// //       question: "1. What types of pooja products are available at Pooja Hetu?",
// //       answer: "We offer a wide selection of authentic pooja essentials, including consecrated yantras, premium rudraksha, energized stones, havan kunds, traditional idols, and complete pooja kits crafted for daily worship and spiritual rituals."
// //     },
// //     {
// //       question: "2. Are your yantras authentic and suitable for daily worship?",
// //       answer: "Yes, all our yantras are strictly sourced, lab-tested for material purity, and properly energized through traditional Vedic mantras making them completely authentic and auspicious for daily worship."
// //     },
// //     {
// //       question: "3. How do I choose the right yantra for my purpose?",
// //       answer: "Choosing the right yantra depends on your specific spiritual or life intentions (such as wealth, health, peace, or Vastu correction). You can consult our detailed product descriptions or reach out to our spiritual guides for personalized recommendations."
// //     },
// //     {
// //       question: "4. What is a havan kund and why is it used?",
// //       answer: "A havan kund is a sacred ritual vessel used for performing fire ceremonies (Havan or Yajna). It acts as a focal point to offer oblations, purify the surrounding atmosphere, and channel divine energies."
// //     },
// //     {
// //       question: "5. Are your vastu products effective for home and office?",
// //       answer: "Our Vastu items are carefully selected and energized to neutralize negative energies, balance spatial elements, and promote harmony, prosperity, and peace in both residential and commercial spaces."
// //     },
// //     {
// //       question: "6. Do you deliver pooja products across India and internationally?",
// //       answer: "Yes, we provide secure and reliable shipping across all major pin codes in India as well as international destinations with proper tamper-proof packaging."
// //     },
// //     {
// //       question: "7. How should pooja products and yantras be placed at home?",
// //       answer: "Yantras and idols should ideally be placed in your home temple or designated sacred space facing East or North, kept clean, and worshipped with a pure mind and regular offerings."
// //     },
// //     {
// //       question: "8. How often should yantras and pooja items be cleaned?",
// //       answer: "Metal yantras and idols can be gently wiped clean with water, milk, or holy ash (vibhuti) during special occasions or weekly cleansings, while maintaining ritual purity and reverence."
// //     }
// //   ];

// //   const toggleFAQ = (index) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   return (
// //     <section className="w-full pt-2 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-[#F5EBDD]">
// //       <div className="max-w-[1000px] mx-auto">

// //         {/* ====== HEADING ====== */}
// //         <div className="text-center mb-8 sm:mb-10 md:mb-12">
// //           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-black leading-tight tracking-wide">
// //             Frequently Asked Questions
// //           </h2>

// //           {/* Decorative Divider */}
// //           <div className="flex items-center justify-center gap-3 mt-4">
// //             <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
// //             <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
// //             <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
// //           </div>
// //         </div>

// //         {/* ====== FAQ ACCORDION ====== */}
// //         <div className="space-y-3 sm:space-y-4">
// //           {faqData.map((faq, index) => {
// //             const isOpen = openIndex === index;

// //             return (
// //               <div
// //                 key={index}
// //                 className={`bg-white rounded-xl overflow-hidden border transition-all duration-500 ${
// //                   isOpen
// //                     ? "border-transparent shadow-[0_15px_40px_-15px_rgba(140,10,21,0.35)] scale-[1.01]"
// //                     : "border-[#f0dcbf] shadow-sm hover:shadow-md hover:border-[#8c0a15]/30"
// //                 }`}
// //               >

// //                 {/* ===== QUESTION HEADER ===== */}
// //                 <button
// //                   onClick={() => toggleFAQ(index)}
// //                   className={`w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left focus:outline-none cursor-pointer transition-all duration-500 ${
// //                     isOpen
// //                       ? "bg-gradient-to-r from-red-800 to-red-600"
// //                       : "bg-white group hover:bg-[#fff9f0]"
// //                   }`}
// //                 >
// //                   <span
// //                     className={`text-[14px] sm:text-base md:text-lg  tracking-wide pr-2 transition-colors duration-500 ${
// //                       isOpen
// //                         ? "text-white"
// //                         : "text-black group-hover:text-[#8c0a15]"
// //                     }`}
// //                   >
// //                     {faq.question}
// //                   </span>

// //                   {/* Plus / Minus Icon */}
// //                   <div
// //                     className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-500 ${
// //                       isOpen
// //                         ? "bg-gradient-to-r from-red-800 to-red-600 border-white text-[#8c0a15] rotate-180"
// //                         : " bg-gradient-to-r from-red-800 to-red-600 border-[#edd5b9] text-white group-hover:border-[#8c0a15] group-hover:text-[#8c0a15]"
// //                     }`}
// //                   >
// //                     {isOpen ? (
// //                       <Minus className="w-4 h-4" />
// //                     ) : (
// //                       <Plus className="w-4 h-4" />
// //                     )}
// //                   </div>
// //                 </button>

// //                 {/* ===== ANSWER CONTENT ===== */}
// //                 <div
// //                   className={`overflow-hidden transition-all duration-500 ease-in-out ${
// //                     isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
// //                   }`}
// //                 >
// //                   <div className="px-5 sm:px-6 pt-5 pb-5 sm:pb-6">
// //                     <div className="border-t border-[#f0dcbf] pt-4 text-black text-[13.5px] sm:text-sm md:text-base leading-relaxed">
// //                       {faq.answer}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default FAQSection;

// import React, { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqData = [
//     {
//       question: "1. What types of pooja products are available at Pooja Hetu?",
//       answer: "We offer a wide selection of authentic pooja essentials, including consecrated yantras, premium rudraksha, energized stones, havan kunds, traditional idols, and complete pooja kits crafted for daily worship and spiritual rituals."
//     },
//     {
//       question: "2. Are your yantras authentic and suitable for daily worship?",
//       answer: "Yes, all our yantras are strictly sourced, lab-tested for material purity, and properly energized through traditional Vedic mantras making them completely authentic and auspicious for daily worship."
//     },
//     {
//       question: "3. How do I choose the right yantra for my purpose?",
//       answer: "Choosing the right yantra depends on your specific spiritual or life intentions (such as wealth, health, peace, or Vastu correction). You can consult our detailed product descriptions or reach out to our spiritual guides for personalized recommendations."
//     },
//     {
//       question: "4. What is a havan kund and why is it used?",
//       answer: "A havan kund is a sacred ritual vessel used for performing fire ceremonies (Havan or Yajna). It acts as a focal point to offer oblations, purify the surrounding atmosphere, and channel divine energies."
//     },
//     {
//       question: "5. Are your vastu products effective for home and office?",
//       answer: "Our Vastu items are carefully selected and energized to neutralize negative energies, balance spatial elements, and promote harmony, prosperity, and peace in both residential and commercial spaces."
//     },
//     {
//       question: "6. Do you deliver pooja products across India and internationally?",
//       answer: "Yes, we provide secure and reliable shipping across all major pin codes in India as well as international destinations with proper tamper-proof packaging."
//     },
//     {
//       question: "7. How should pooja products and yantras be placed at home?",
//       answer: "Yantras and idols should ideally be placed in your home temple or designated sacred space facing East or North, kept clean, and worshipped with a pure mind and regular offerings."
//     },
//     {
//       question: "8. How often should yantras and pooja items be cleaned?",
//       answer: "Metal yantras and idols can be gently wiped clean with water, milk, or holy ash (vibhuti) during special occasions or weekly cleansings, while maintaining ritual purity and reverence."
//     }
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full pt-2 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-[#F5EBDD]">
//       <div className="max-w-[1000px] mx-auto">

//         {/* ====== HEADING ====== */}
//         <div className="text-center mb-8 sm:mb-10 md:mb-12">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-wide">
//             Frequently Asked Questions
//           </h2>

//           {/* Decorative Divider — Forest Green */}
//           <div className="flex items-center justify-center gap-3 mt-4">
//             <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#173B32]/50"></span>
//             <span className="w-2 h-2 rounded-full bg-[#173B32]/60"></span>
//             <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#173B32]/50"></span>
//           </div>
//         </div>

//         {/* ====== FAQ ACCORDION ====== */}
//         <div className="space-y-3 sm:space-y-4">
//           {faqData.map((faq, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <div
//                 key={index}
//                 className={`bg-white rounded-xl overflow-hidden border transition-all duration-500 ${
//                   isOpen
//                     ? "border-transparent shadow-[0_15px_40px_-15px_rgba(23,59,50,0.35)] scale-[1.01]"
//                     : "border-[#f0dcbf] shadow-sm hover:shadow-md hover:border-[#173B32]/30"
//                 }`}
//               >

//                 {/* ===== QUESTION HEADER ===== */}
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className={`w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left focus:outline-none cursor-pointer transition-all duration-500 ${
//                     isOpen
//                       ? "bg-gradient-to-r from-[#173B32] to-[#0f2820]"
//                       : "bg-white group hover:bg-[#F5EBDD]/40"
//                   }`}
//                 >
//                   <span
//                     className={`text-[14px] sm:text-base md:text-lg tracking-wide pr-2 transition-colors duration-500 ${
//                       isOpen
//                         ? "text-white"
//                         : "text-black group-hover:text-[#173B32]"
//                     }`}
//                   >
//                     {faq.question}
//                   </span>

//                   {/* Plus / Minus Icon — Forest Green */}
//                   <div
//                     className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-500 ${
//                       isOpen
//                         ? "bg-gradient-to-r from-[#173B32] to-[#0f2820] border-white text-[#173B32] rotate-180"
//                         : "bg-gradient-to-r from-[#173B32] to-[#0f2820] border-[#edd5b9] text-white group-hover:border-[#173B32] group-hover:text-[#173B32]"
//                     }`}
//                   >
//                     {isOpen ? (
//                       <Minus className="w-4 h-4" />
//                     ) : (
//                       <Plus className="w-4 h-4" />
//                     )}
//                   </div>
//                 </button>

//                 {/* ===== ANSWER CONTENT ===== */}
//                 <div
//                   className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                     isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <div className="px-5 sm:px-6 pt-5 pb-5 sm:pb-6">
//                     <div className="border-t border-[#f0dcbf] pt-4 text-black text-[13.5px] sm:text-sm md:text-base leading-relaxed">
//                       {faq.answer}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FAQSection;


import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
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
    <section className="w-full pt-2 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-[#F5EBDD]">
      <div className="max-w-[1000px] mx-auto">

        {/* ====== HEADING ====== */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-wide">
            Frequently Asked Questions
          </h2>

          {/* Decorative Divider — Maroon */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#5A1F1F]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#5A1F1F]/60"></span>
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#5A1F1F]/50"></span>
          </div>
        </div>

        {/* ====== FAQ ACCORDION ====== */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden border transition-all duration-500 ${
                  isOpen
                    ? "border-transparent shadow-[0_15px_40px_-15px_rgba(90,31,31,0.35)] scale-[1.01]"
                    : "border-[#f0dcbf] shadow-sm hover:shadow-md hover:border-[#5A1F1F]/30"
                }`}
              >

                {/* ===== QUESTION HEADER ===== */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left focus:outline-none cursor-pointer transition-all duration-500 ${
                    isOpen
                      ? "bg-gradient-to-r from-[#5A1F1F] to-[#3d1414]"
                      : "bg-white group hover:bg-[#F5EBDD]/40"
                  }`}
                >
                  <span
                    className={`text-[14px] sm:text-base md:text-lg tracking-wide pr-2 transition-colors duration-500 ${
                      isOpen
                        ? "text-white"
                        : "text-black group-hover:text-[#5A1F1F]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus Icon — Maroon */}
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-500 ${
                      isOpen
                        ? "bg-gradient-to-r from-[#5A1F1F] to-[#3d1414] border-white text-[#5A1F1F] rotate-180"
                        : "bg-gradient-to-r from-[#5A1F1F] to-[#3d1414] border-[#edd5b9] text-white group-hover:border-[#5A1F1F] group-hover:text-[#5A1F1F]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* ===== ANSWER CONTENT ===== */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pt-5 pb-5 sm:pb-6">
                    <div className="border-t border-[#f0dcbf] pt-4 text-black text-[13.5px] sm:text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
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