import React from "react";

// Images import
import userImg1 from "../assets/pop_3.avif";
import userImg2 from "../assets/pop_6.avif";
import userImg3 from "../assets/popo_5.avif";
import userImg4 from "../assets/pop_1.avif";
import userImg5 from "../assets/pop_4.webp";

const allReviews = [
  { id: 1, name: "Neelima", rating: 5, comment: "After wearing this, negative energy reduced. Amazing experience!", productName: "OM Shiva Trishool Karungali Mala", price: "₹991", avatar: userImg1 },
  { id: 2, name: "Govind", rating: 5, comment: "Got the chance to wear 3 and 5 Mukhi Rudraksha on Maha Shivratri. Har Har Mahadev!", productName: "3 Mukhi Lab Certified Rudraksha", price: "₹751", avatar: userImg2 },
  { id: 3, name: "Girish Gudadari", rating: 5, comment: "I'm fully satisfied with the product and would definitely recommend it to others.", productName: "1 - 14 Mukhi Rudraksha Mala", price: "₹8,491", avatar: userImg3 },
  { id: 4, name: "Rahul Sharma", rating: 5, comment: "Very authentic and energized product. Packing was also very secure.", productName: "Original Karungali Bracelet", price: "₹499", avatar: userImg4 },
  { id: 5, name: "Pooja Verma", rating: 5, comment: "Divine fragrance and peace after placing this in my temple.", productName: "Pure Guggal Loban Dhoop", price: "₹350", avatar: userImg5 },
  { id: 6, name: "Amitabh Roy", rating: 5, comment: "Genuine gemstone with lab certificate. Highly impressed by the service.", productName: "Natural Blue Sapphire (Neelam)", price: "₹12,500", avatar: userImg1 },
  { id: 7, name: "Sneha Iyer", rating: 5, comment: "The quality of the mala beads is exceptional. Very peaceful to chant on.", productName: "Panchmukhi Rudraksha Mala", price: "₹650", avatar: userImg2 },
  { id: 8, name: "Vikramaditya", rating: 5, comment: "Brings immense positivity to the house. Authentic Vedic item.", productName: "Vastu Tortoise Plate", price: "₹1,299", avatar: userImg3 },
  { id: 9, name: "Sunita Menon", rating: 5, comment: "Fast delivery and great customer support. Will shop again.", productName: "Spheric Crystal Shivalingam", price: "₹1,899", avatar: userImg4 },
  { id: 10, name: "Manoj Kumar", rating: 5, comment: "Original wood texture and heavy quality. Truly blessed.", productName: "Original Karungali Wood Stick", price: "₹899", avatar: userImg5 },
  { id: 11, name: "Ananya Deshmukh", rating: 5, comment: "Wonderful packaging, received original energized beads with certificate.", productName: "7 Mukhi Rudraksha", price: "₹1,450", avatar: userImg1 },
  { id: 12, name: "Rajeshwar Rao", rating: 5, comment: "Excellent spiritual items available here. Very trustworthy store.", productName: "Kuber Akshat Jar", price: "₹299", avatar: userImg2 },
  { id: 13, name: "Divya Nambiar", rating: 5, comment: "I feel positive vibes from morning to evening after wearing this.", productName: "Karungali Silver Cap Mala", price: "₹1,699", avatar: userImg3 },
  { id: 14, name: "Sanjay Mishra", rating: 5, comment: "Real product, verified through lab test. 100% satisfied.", productName: "10 Mukhi Lab Certified Rudraksha", price: "₹3,200", avatar: userImg4 },
  { id: 15, name: "Kavita Joshi", rating: 5, comment: "Beautiful design and great spiritual energy. Loved it!", productName: "Sphrystal Shri Yantra", price: "₹2,100", avatar: userImg5 }
];

const CustomerReviews = () => {
  // Duplicate the array so the marquee loops seamlessly
  const marqueeReviews = [...allReviews, ...allReviews];

  return (
    <section className="relative w-full py-16 bg-[#fff3df] border-b border-[#edd5b9] overflow-hidden">
      
      {/* Marquee Container - added py-12 to prevent hover cut-off */}
      <div className="relative w-full overflow-hidden py-12">
        
        {/* CSS Marquee - moves left to right */}
        <div className="flex w-max animate-marquee-left-to-right gap-6">
          {marqueeReviews.map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`} 
              /* CHANGED: rounded-2xl -> rounded-md */
              className="bg-white rounded-md p-6 shadow-xl border border-[#e6d0b3] flex flex-col justify-between w-[320px] sm:w-[360px] flex-shrink-0 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-[#d35400] cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#edd5b9] bg-[#fff3df] flex-shrink-0">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#4a2e18] text-base">{review.name}</h4>
                    <div className="flex text-amber-500 text-sm">
                      {[...Array(review.rating)].map((_, i) => (<span key={i}>★</span>))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#fffdfa] p-3 rounded-md border-l-4 border-[#d35400] mb-6 min-h-[80px]">
                  <p className="text-gray-700 text-sm italic">"{review.comment}"</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f3e5d8] flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-[#8b3a2b] text-base">{review.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animation via style tag */}
      <style>{`
        @keyframes marquee-left-to-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left-to-right {
          /* CHANGED: 40s -> 60s for slower, smoother scroll */
          animation: marquee-left-to-right 60s linear infinite;
        }
        .animate-marquee-left-to-right:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
};

export default CustomerReviews;