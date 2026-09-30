import React, { useState } from "react";
import { Search, ArrowRight, Clock, Calendar, User } from "lucide-react";
import idolsImg from "../assets/Idols5.png";

// Categories data (Explore Sacred Categories section)
const sacredCategories = [
  {
    id: 1,
    title: "Chardham",
    description: "The four abodes of God in the Himalayas – Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    image: idolsImg,
  },
  {
    id: 2,
    title: "Jyotirlinga",
    description: "The twelve divine manifestations of Lord Shiva in the form of Jyotirlingas across India.",
    image: idolsImg,
  },
  {
    id: 3,
    title: "Shaktipeeth",
    description: "The sacred sites where parts of Goddess Sati's body fell, representing divine feminine energy.",
    image: idolsImg,
  },
  {
    id: 4,
    title: "Vaikunthpeeth",
    description: "The four abodes of God in the Himalayas – Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    image: idolsImg,
  },
];

// Blog articles data
const allBlogArticles = [
  {
    id: 1,
    category: "Pilgrimage",
    title: "October 2026 Hindu Festival Calendar Vrat, Puja and Festival Dates",
    excerpt: "Explore the October 2026 Hindu festival calendar with Navratri, Dussehra, Sharad Purnima, Karwa Chauth, Ekadashi and Pitru Paksha dates.",
    author: "Dheeraj Khandelwal",
    date: "September 29, 2026",
    image: idolsImg,
  },
  {
    id: 2,
    category: "Pilgrimage",
    title: "Pitru Paksha 2026 Start Date, Shraddha Dates, Rituals & Significance",
    excerpt: "Pitru Paksha 2026 begins on September 26 and ends on October 10. Check Shraddha dates, Tarpan, Pind Daan rituals, significance and Sarva Pitru Amavasya.",
    author: "Dheeraj Khandelwal",
    date: "September 25, 2026",
    image: idolsImg,
  },
  {
    id: 3,
    category: "Pilgrimage",
    title: "Anant Chaturdashi 2026 Date, Ganesh Visarjan, Puja & Significance",
    excerpt: "Anant Chaturdashi 2026 falls on September 25. Check tithi timings, Ganesh Visarjan rituals, Anant Sutra, puja vidhi and festival significance.",
    author: "Dheeraj Khandelwal",
    date: "September 21, 2026",
    image: idolsImg,
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
    <section className="relative w-full bg-white">

      {/* =============================================
          SECTION 1: EXPLORE SACRED CATEGORIES
      ============================================= */}
      <div className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0f172a] leading-tight tracking-tight">
              Explore Sacred{" "}
              <span className="italic font-serif font-normal bg-red-800 bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
          </div>
           
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {sacredCategories.map((cat) => (
              <div
                key={cat.id}
                className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image Background */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* === FLOATING OVERLAY BOX === */}
                <div className="absolute bottom-4 left-4 right-4 bg-white backdrop-blur-md rounded-xl p-4 shadow-[0_8px_25px_rgba(0,0,0,0.15)] group-hover:bg-white transition-all duration-500">
                  <h3 className="text-base sm:text-lg font-bold text-black mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-black leading-relaxed mb-3 line-clamp-3">
                    {cat.description}
                  </p>
                  <span className="text-[#1e6db8] text-[11px] sm:text-xs font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Explore Now
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =============================================
          SECTION 2: RECENT BLOG POSTS
      ============================================= */}
      <div className="relative w-full  bg-white">
        <div className="max-w-[1200px] mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight tracking-tight">
              Recent Blog{" "}
              <span className="italic font-serif font-normal bg-red-800 bg-clip-text text-transparent">
                Posts
              </span>

            </h2>
            <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8c0a15]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#8c0a15]/60"></span>
            <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8c0a15]/50"></span>
          </div>
            


            
          </div>

          {/* Blog Cards Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-5px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.1)] transition-all duration-500 hover:-translate-y-1 cursor-pointer flex flex-col"
                >
                  {/* Image Banner */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Category Badge (red) */}
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-red-800 to-red-600 text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-md shadow-md">
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <h2 className="font-bold text-black text-base sm:text-lg mb-2.5 leading-snug group-hover:text-[#1e6db8] transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-black text-[13px] sm:text-sm leading-relaxed line-clamp-3 mb-5 flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Meta Row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-black" />
                        <span className="font-medium text-black">{article.author}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-black" />
                        {article.date}
                      </span>
                    </div>

                    {/* Read More */}
                    <div className="pt-4 border-t border-black">
                      <span className="text-[13px] sm:text-sm font-bold text-[#1e6db8] flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
        </div>
      </div>
    </section>
  );
};

export default SpiritualBlog;