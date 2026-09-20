// import React, { useState } from "react";
// // Lucide-react icons import (Terminal mein run karein: npm i lucide-react agar installed nahi hai)
// import { 
//   Sparkles, 
//   Gem, 
//   Home, 
//   Flame, 
//   BookOpen, 
//   Search, 
//   ArrowRight, 
//   UserCheck 
// } from "lucide-react";

// const allBlogArticles = [
//   {
//     id: 1,
//     category: "Rudraksha",
//     title: "रुद्राक्ष धारण करने के नियम और इसके चमत्कारी लाभ",
//     excerpt: "शिव पुराण के अनुसार रुद्राक्ष पहनने से शारीरिक और मानसिक शांति मिलती है। जानिए इसे धारण करने की सही विधि...",
//     author: "Gautam Sharma",
//     readTime: "4 min read",
//     date: "12 Aug 2026",
//     icon: <Sparkles className="w-10 h-10 text-[#d35400]" />,
//     bgGradient: "from-[#fff3df] to-[#fce4c8]"
//   },
//   {
//     id: 2,
//     category: "Gemstones",
//     title: "नीलम रत्न (Blue Sapphire) किसे पहनना चाहिए?",
//     excerpt: "शनि देव का यह शक्तिशाली रत्न रातों-रात किस्मत बदल सकता है, लेकिन बिना सोचे-समझे पहनने से नुकसान भी हो सकता है...",
//     author: "Akshita Singh",
//     readTime: "6 min read",
//     date: "10 Aug 2026",
//     icon: <Gem className="w-10 h-10 text-[#d35400]" />,
//     bgGradient: "from-[#eef5ff] to-[#d6e4fc]"
//   },
//   {
//     id: 3,
//     category: "Vastu Shastra",
//     title: "घर में सुख-शांति के लिए वास्तु के ये सरल उपाय अपनाएं",
//     excerpt: "नकारात्मक ऊर्जा को दूर भगाने और सकारात्मक ऊर्जा का प्रवाह बढ़ाने के लिए अचूक वास्तु टिप्स और नियम...",
//     author: "Puspendra Singh",
//     readTime: "5 min read",
//     date: "05 Aug 2026",
//     icon: <Home className="w-10 h-10 text-[#d35400]" />,
//     bgGradient: "from-[#f3f9f1] to-[#dcefd7]"
//   },
//   {
//     id: 4,
//     category: "Karungali",
//     title: "करुंगाली (काला कपाली) माला के प्राचीन रहस्य",
//     excerpt: "दक्षिण भारत में अत्यधिक पूजनीय करुंगाली की लकड़ी शरीर के चक्रों को संतुलित करने में कैसे मदद करती है...",
//     author: "Gautam Sharma",
//     readTime: "3 min read",
//     date: "01 Aug 2026",
//     icon: <Flame className="w-10 h-10 text-[#d35400]" />,
//     bgGradient: "from-[#faede3] to-[#ecccb5]"
//   },
//   {
//     id: 5,
//     category: "Rudraksha",
//     title: "5 Mukhi Rudraksha: Benefits & How to Wear It Daily",
//     excerpt: "The panchmukhi rudraksha is governed by Jupiter and helps in expanding awareness, peace, and mental stability...",
//     author: "Dr. R. Shastri",
//     readTime: "5 min read",
//     date: "28 Jul 2026",
//     icon: <Sparkles className="w-10 h-10 text-[#d35400]" />,
//     bgGradient: "from-[#fff3df] to-[#fce4c8]"
//   },
//   {
//     id: 6,
//     category: "Hindu Rituals",
//     title: "Daily Pooja for Beginners: How to Start & What You Need",
//     excerpt: "A step-by-step guide on setting up your home temple, lighting the lamp, and offering sincere prayers daily...",
//     author: "Akshita Singh",
//     readTime: "7 min read",
//     date: "25 Jul 2026",
//     icon: <BookOpen className="w-10 h-10 text-[#d35400]" />,
//     bgGradient: "from-[#fbf0ff] to-[#edd0fc]"
//   }
// ];

// const SpiritualBlog = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const categories = ["All", "Rudraksha", "Gemstones", "Vastu Shastra", "Karungali", "Hindu Rituals"];

//   // Filter articles based on Category and Search Query
//   const filteredArticles = allBlogArticles.filter((article) => {
//     const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
//     const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#fff3df]  border-b border-[#edd5b9] min-h-screen">
//       <div className="max-w-[1400px] mx-auto">
        
//         {/* Page Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <span className="text-[#d35400]  tracking-widest text-xs bg-[#fff3df] px-3.5 py-1.5 rounded-full border border-[#edd5b9] inline-block mb-3">
//             Knowledge Centre & Blogs
//           </span>
//           <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4a2e18] mb-4 leading-tight">
//           Spiritual Blog | Knowledge Centre
//           </h1>
//           <p className="text-gray-600 text-sm sm:text-base font-sans leading-relaxed">
//             वेदों, पुराणों और प्राचीन सनातन परंपराओं से जुड़े गहरे रहस्यों, पूजा विधि और आध्यात्मिक ज्ञान को जानें।
//           </p>

//           {/* Search Bar */}
//           <div className="mt-6 max-w-lg mx-auto">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search blogs (e.g. Rudraksha, Vastu, Pooja)..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-5 py-3.5 pl-12 rounded-md border border-[#edd5b9] bg-white text-sm text-[#4a2e18] focus:outline-none focus:border-[#d35400] shadow-sm transition-all"
//               />
//               <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
//             </div>
//           </div>

//           {/* Category Filter Tabs */}
//           <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
//             {categories.map((cat, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
//                   selectedCategory === cat
//                     ? "bg-[#d35400] text-white border-[#d35400] shadow-md scale-105"
//                     : "bg-white text-[#4a2e18] border-[#edd5b9] hover:bg-[#fff3df]"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Blog Cards Grid */}
//         {filteredArticles.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
//             {filteredArticles.map((article) => (
//               <div
//                 key={article.id}
//                 className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#e6d0b3] flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-[#d35400] cursor-pointer group"
//               >
//                 {/* Icon Banner Container (Replaced Image with Gradient & React Icon) */}
//                 <div className={`relative h-44 bg-gradient-to-br ${article.bgGradient} flex items-center justify-center overflow-hidden border-b border-[#edd5b9]`}>
//                   <div className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-500">
//                     {article.icon}
//                   </div>
//                   <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#d35400] text-xs font-bold px-3 py-1 rounded-full shadow border border-[#edd5b9]">
//                     {article.category}
//                   </span>
//                 </div>

//                 {/* Content Area */}
//                 <div className="p-6 flex flex-col flex-grow justify-between">
//                   <div>
//                     <div className="flex items-center justify-between text-xs text-gray-400 mb-3 font-sans">
//                       <span>{article.date}</span>
//                       <span>{article.readTime}</span>
//                     </div>

//                     <h2 className="font-serif font-bold text-[#4a2e18] text-lg sm:text-xl mb-3 leading-snug group-hover:text-[#d35400] transition-colors line-clamp-2">
//                       {article.title}
//                     </h2>

//                     <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-6 font-sans leading-relaxed">
//                       {article.excerpt}
//                     </p>
//                   </div>

//                   {/* Author & Read More Footer */}
//                   <div className="pt-4 border-t border-[#f3e5d8] flex items-center justify-between">
//                     <span className="text-xs font-medium text-gray-500">
//                       By <strong className="text-[#4a2e18]">{article.author}</strong>
//                     </span>
//                     <span className="text-xs font-bold text-[#d35400] uppercase tracking-wider group-hover:underline flex items-center gap-1">
//                       More Details <ArrowRight className="w-3.5 h-3.5" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <p className="text-lg text-gray-500 font-serif">कोई लेख (Blog) नहीं मिला। कृपया दूसरा कीवर्ड खोजें।</p>
//           </div>
//         )}

//         {/* Bottom Call to Action Section */}
//         <div className="mt-16 bg-gradient-to-r from-[#fff3df] to-[#fef8f0] border border-[#edd5b9] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between shadow-sm">
//           <div className="mb-6 sm:mb-0 text-center sm:text-left">
//             <h3 className="font-serif font-bold text-2xl text-[#4a2e18] mb-2">
//               क्या आपके मन में पूजा-पाठ या ज्योतिष से जुड़ा कोई सवाल है?
//             </h3>
//             <p className="text-gray-600 text-sm sm:text-base">
//               हमारे वरिष्ठ पंडितों और आध्यात्मिक विशेषज्ञों से सीधे परामर्श लें।
//             </p>
//           </div>
//           <button className="bg-[#d35400] hover:bg-[#b54600] text-white px-8 py-3.5 rounded-xl font-medium text-sm shadow-md transition-all transform hover:scale-105 flex-shrink-0 flex items-center gap-2">
//             <UserCheck className="w-4 h-4" /> Consult Expert Now
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SpiritualBlog;


import React, { useState } from "react";
import { Search, ArrowRight, UserCheck, Clock } from "lucide-react";
import idolsImg from "../assets/Idols5.png";

const allBlogArticles = [
  {
    id: 1,
    category: "Rudraksha",
    title: "Rules for Wearing Rudraksha and Its Miraculous Benefits",
    excerpt: "According to the Shiva Purana, wearing Rudraksha brings physical and mental peace. Learn the correct method to wear it and the spiritual benefits it offers...",
    author: "Gautam Sharma",
    readTime: "4 min read",
    date: "12 Aug 2026",
  },
  {
    id: 2,
    category: "Gemstones",
    title: "Who Should Wear Blue Sapphire (Neelam)?",
    excerpt: "This powerful gemstone of Shani Dev can change your destiny overnight, but wearing it without proper guidance can also bring harm. Know the right way...",
    author: "Akshita Singh",
    readTime: "6 min read",
    date: "10 Aug 2026",
  },
  {
    id: 3,
    category: "Vastu Shastra",
    title: "Simple Vastu Tips for Peace and Prosperity at Home",
    excerpt: "Simple and effective Vastu tips to remove negative energy and increase the flow of positive energy in your home and workplace...",
    author: "Puspendra Singh",
    readTime: "5 min read",
    date: "05 Aug 2026",
  },
  {
    id: 4,
    category: "Karungali",
    title: "Ancient Secrets of Karungali (Black Ebony) Mala",
    excerpt: "Highly revered in South India, Karungali wood helps balance the chakras of the body. Learn how this sacred wood is used for spiritual growth...",
    author: "Gautam Sharma",
    readTime: "3 min read",
    date: "01 Aug 2026",
  },
 
  
];

const SpiritualBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Rudraksha", "Gemstones", "Vastu Shastra", "Karungali", "Hindu Rituals"];

  const filteredArticles = allBlogArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#fff3df] border-b border-[#edd5b9] min-h-screen">
      <div className="max-w-[1400px] mx-auto">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#d35400] tracking-widest text-xs bg-white px-4 py-1.5 rounded-full border border-[#edd5b9] inline-block mb-4 font-semibold uppercase">
            Knowledge Centre & Blogs
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4a2e18] mb-4 leading-tight">
            Spiritual Blog & <span className="italic font-normal">Knowledge Centre</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Explore deep secrets, pooja methods, and spiritual wisdom rooted in the Vedas, Puranas, and ancient Sanatan traditions.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs (Rudraksha, Vastu, Pooja...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 pl-12 rounded-full border border-[#edd5b9] bg-white text-sm text-[#4a2e18] focus:outline-none focus:border-[#d35400] focus:ring-2 focus:ring-[#d35400]/20 shadow-sm transition-all"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === cat
                    ? "bg-[#d35400] text-white border-[#d35400] shadow-md"
                    : "bg-white text-[#4a2e18] border-[#edd5b9] hover:bg-[#fff3df] hover:border-[#d35400]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 pt-2">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-[#e6d0b3] hover:border-[#d35400]/40 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Image Banner */}
                <div className="relative h-52 bg-gradient-to-br from-[#fff3df] to-[#fce4c8] overflow-hidden">
                  <img
                    src={idolsImg}
                    alt={article.title}
                    className="w-full h-full object-contain object-center p-6 transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#d35400] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow border border-[#edd5b9]">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Meta */}
                    <div className="flex items-center justify-between text-[11px] text-gray-400 mb-3 font-sans">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif font-bold text-[#4a2e18] text-base sm:text-lg mb-3 leading-snug group-hover:text-[#d35400] transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-5 font-sans leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-[#f3e5d8] flex items-center justify-between">
                    <span className="text-[11px] font-medium text-gray-500">
                      By <strong className="text-[#4a2e18]">{article.author}</strong>
                    </span>
                    <span className="text-[11px] font-bold text-[#d35400] uppercase tracking-wider group-hover:underline flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500 font-serif">No articles found. Please try a different keyword.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#fff3df] to-[#fef8f0] border border-[#edd5b9] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between shadow-sm">
          <div className="mb-6 sm:mb-0 text-center sm:text-left">
            <h3 className="font-serif font-bold text-2xl text-[#4a2e18] mb-2">
              Have a question about Pooja or Astrology?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get direct guidance from our senior Pandits and spiritual experts.
            </p>
          </div>
          <button className="bg-[#d35400] hover:bg-[#b54600] text-white px-8 py-3.5 rounded-xl font-medium text-sm shadow-md transition-all transform hover:scale-105 flex-shrink-0 flex items-center gap-2">
            <UserCheck className="w-4 h-4" /> Consult Expert Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default SpiritualBlog;