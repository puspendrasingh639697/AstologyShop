// import React from "react";
// import { Link } from "react-router-dom";
// import footerBg from "../assets/gropImages.webp";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#8c0a15] text-white">
      
//       {/* =======================================
//           TOP SECTION: Links & Info (Solid Red)
//       ======================================== */}
//       <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          
//           {/* Column 1: Brand Info & Social Icons (Span 2) */}
//           <div className="lg:col-span-2 flex flex-col items-start pr-4">
//             <div className="flex items-center gap-2.5 mb-4">
              
//               <div>
//                 <h2 className="font-serif text-2xl font-bold tracking-wider text-white">
//                   PUSPENDRA
//                 </h2>
//                 <p className="text-[16px] tracking-widest text-[#f3d3a7]  font-medium">
//                   Healthy · Vedic · Lifestyle
//                 </p>
//               </div>
//             </div>

//             <p className="text-gray-200 text-sm leading-relaxed font-normal mb-6">
//               At Puspendra, our mission is to make authentic spiritual and cultural products accessible across the world. Rooted in faith and tradition, we curate trusted puja essentials to help every devotee stay connected.
//             </p>

//             {/* Social Media Icons */}
//             <h4 className="text-xs font-semibold text-[#f3d3a7] uppercase tracking-widest mb-3">Follow Us</h4>
//             <div className="flex items-center space-x-3">
//               {/* Facebook */}
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#73050f] rounded-full hover:bg-[#f3d3a7] hover:text-[#8c0a15] transition-all duration-300 text-white shadow-sm">
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
//               </a>
//               {/* Instagram */}
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#73050f] rounded-full hover:bg-[#f3d3a7] hover:text-[#8c0a15] transition-all duration-300 text-white shadow-sm">
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//               </a>
//               {/* YouTube */}
//               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#73050f] rounded-full hover:bg-[#f3d3a7] hover:text-[#8c0a15] transition-all duration-300 text-white shadow-sm">
//                 <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Shop By Purpose */}
//           <div className="flex flex-col">
//             <h3 className=" font-bold text-white text-[18px] tracking-wide mb-4 border-b border-[#a81a24] pb-2">Shop By Purpose</h3>
//             <ul className="space-y-2.5 text-[16px] text-gray-200">
//               <li><Link to="/products/karungali" className="hover:text-[#f3d3a7] transition-colors">Karungali Mala For Protection</Link></li>
//               <li><Link to="/products/pyrite" className="hover:text-[#f3d3a7] transition-colors">Pyrite Stone For Money</Link></li>
//               <li><Link to="/products/7-mukhi" className="hover:text-[#f3d3a7] transition-colors">7 Mukhi For Shani Dosh</Link></li>
//               <li><Link to="/products/5-mukhi" className="hover:text-[#f3d3a7] transition-colors">5 Mukhi For Peace</Link></li>
//             </ul>
//           </div>

//           {/* Column 3: Collections */}
//           <div className="flex flex-col">
//             <h3 className="font-serif font-bold text-white text-[15px] tracking-wide mb-4 border-b border-[#a81a24] pb-2">Collections</h3>
//             <ul className="space-y-2.5 text-[16px] text-gray-200">
//               <li><Link to="/collections/best-sellers" className="hover:text-[#f3d3a7] transition-colors">Best Sellers</Link></li>
//               <li><Link to="/collections/new-launches" className="hover:text-[#f3d3a7] transition-colors">New Launches</Link></li>
//               <li><Link to="/collections/rudraksha" className="hover:text-[#f3d3a7] transition-colors">Rudraksha</Link></li>
//               <li><Link to="/collections/gemstones" className="hover:text-[#f3d3a7] transition-colors">Gemstones</Link></li>
//               <li><Link to="/collections/idols" className="hover:text-[#f3d3a7] transition-colors">Idols & Murti</Link></li>
//             </ul>
//           </div>

//           {/* Column 4: Jewellery */}
//           <div className="flex flex-col">
//             <h3 className="font-serif font-bold text-white text-[15px] tracking-wide mb-4 border-b border-[#a81a24] pb-2">Jewellery</h3>
//             <ul className="space-y-2.5 text-[16px] text-gray-200">
//               <li><Link to="/jewellery/bracelets" className="hover:text-[#f3d3a7] transition-colors">Bracelets</Link></li>
//               <li><Link to="/jewellery/necklaces" className="hover:text-[#f3d3a7] transition-colors">Necklaces</Link></li>
//               <li><Link to="/jewellery/rings" className="hover:text-[#f3d3a7] transition-colors">Rings</Link></li>
//               <li><Link to="/jewellery/silver" className="hover:text-[#f3d3a7] transition-colors">Hallmarked Silver</Link></li>
//             </ul>
//           </div>

//           {/* Column 5: Policies & Other */}
//           <div className="flex flex-col">
//             <h3 className="font-serif font-bold text-white text-[15px] tracking-wide mb-4 border-b border-[#a81a24] pb-2">Policies & Other</h3>
//             <ul className="space-y-2.5 text-[16px] text-gray-200">
//               <li><Link to="/track-order" className="hover:text-[#f3d3a7] transition-colors">Track Your Order</Link></li>
//               <li><Link to="/shipping-policy" className="hover:text-[#f3d3a7] transition-colors">Shipping Policy</Link></li>
//               <li><Link to="/return-policy" className="hover:text-[#f3d3a7] transition-colors">Return Policy</Link></li>
//               <li><Link to="/privacy-policy" className="hover:text-[#f3d3a7] transition-colors">Privacy Policy</Link></li>
//               <li><Link to="/blogs" className="hover:text-[#f3d3a7] transition-colors">Blogs</Link></li>
//             </ul>
//           </div>

//           {/* Column 6: Contact Us (With Icons) */}
//           <div className="flex flex-col">
//             <h3 className="font-serif font-bold text-white text-[15px] tracking-wide mb-4 border-b border-[#a81a24] pb-2">Contact Us</h3>
//             <ul className="space-y-3.5 text-[16px] text-gray-200">
//               <li className="flex items-start gap-2.5">
//                 <svg className="w-4 h-4 text-[#f3d3a7] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
//                 <a href="mailto:support@puspendra.com" className="hover:text-[#f3d3a7] transition-colors">support@puspendra.com</a>
//               </li>
//               <li className="flex items-start gap-2.5">
//                 <svg className="w-4 h-4 text-[#f3d3a7] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
//                 <a href="tel:+919876543210" className="hover:text-[#f3d3a7] transition-colors">+91 98765 43210</a>
//               </li>
//               <li className="flex items-start gap-2.5 leading-relaxed">
//                 <svg className="w-4 h-4 text-[#f3d3a7] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
//                 <span>Plot no. 558, Sector 27, Gurugram, 122002, Haryana, India</span>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </div>

//       {/* =======================================
//           MIDDLE SECTION: Illustration Image
//       ======================================== */}
//       <div 
//         className="w-full h-40 sm:h-56 md:h-72 lg:h-80 bg-bottom bg-cover sm:bg-contain bg-no-repeat border-t-2 border-b border-[#a81a24] shadow-inner"
//         style={{ backgroundImage: `url(${footerBg})` }}
//       >
//         {/* Clean background image container */}
//       </div>

//       {/* =======================================
//           BOTTOM SECTION: User Active UI & Corporate Info
//       ======================================== */}
//       <div className="w-full bg-[#73050f] py-6 px-4 border-t border-[#8c0a15]">
//         <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center space-y-3">
          
        

//           {/* Corporate Details */}
//           <p className="text-[14px] sm:text-xs text-white max-w-4xl leading-relaxed font-sans opacity-90">
//             Puspendra Lifestyle Private Limited · GST: 06AAKCD8130H1ZO · CIN: U47733HR2024PTC120933 · Head Office: Plot no. 558, Sector 27, Gurugram, 122002, Haryana, India
//           </p>

//           {/* Copyright */}
//           <p className="text-[14px] sm:text-xs text-white pt-3 border-t border-[#8c0a15] w-full max-w-xs mx-auto">
//             © 2026 Puspendra. All Rights Reserved.
//           </p>
//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#8c0a15] text-white">

      {/* =======================================
          TOP SECTION: Links & Info
      ======================================== */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">

          {/* Column 1: Brand Info & Social Icons (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-4">

            {/* Logo — Bada, clean, no text */}
            <div className="mb-6">
  <img
    src={logo}
    alt="Puspendra Logo"
    className="h-28 sm:h-32 w-auto object-contain brightness-0 invert"
  />
</div>

            <p className="text-gray-200 text-sm leading-relaxed font-normal mb-6">
              At Puspendra, our mission is to make authentic spiritual and cultural products accessible across the world. Rooted in faith and tradition, we curate trusted puja essentials to help every devotee stay connected.
            </p>

            {/* Social Media */}
            <h4 className="text-xs font-semibold text-[#f3d3a7] uppercase tracking-widest mb-3">
              Follow Us
            </h4>
            <div className="flex items-center space-x-3">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2.5 bg-[#73050f] rounded-full hover:bg-[#f3d3a7] hover:text-[#8c0a15] transition-all duration-300 text-white shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 bg-[#73050f] rounded-full hover:bg-[#f3d3a7] hover:text-[#8c0a15] transition-all duration-300 text-white shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2.5 bg-[#73050f] rounded-full hover:bg-[#f3d3a7] hover:text-[#8c0a15] transition-all duration-300 text-white shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Shop By Purpose */}
          <div className="flex flex-col">
            <h3 className="font-bold text-white text-[15px] tracking-wide mb-4 border-b border-[#a81a24] pb-2">
              Shop By Purpose
            </h3>
            <ul className="space-y-2.5 text-[14px] text-gray-200">
              <li><Link to="/products/karungali" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Karungali Mala For Protection</Link></li>
              <li><Link to="/products/pyrite" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Pyrite Stone For Money</Link></li>
              <li><Link to="/products/7-mukhi" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">7 Mukhi For Shani Dosh</Link></li>
              <li><Link to="/products/5-mukhi" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">5 Mukhi For Peace</Link></li>
            </ul>
          </div>

          {/* Column 3: Collections */}
          <div className="flex flex-col">
            <h3 className="font-bold text-white text-[15px] tracking-wide mb-4 border-b border-[#a81a24] pb-2">
              Collections
            </h3>
            <ul className="space-y-2.5 text-[14px] text-gray-200">
              <li><Link to="/collections/best-sellers" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Best Sellers</Link></li>
              <li><Link to="/collections/new-launches" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">New Launches</Link></li>
              <li><Link to="/collections/rudraksha" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Rudraksha</Link></li>
              <li><Link to="/collections/gemstones" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Gemstones</Link></li>
              <li><Link to="/collections/idols" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Idols & Murti</Link></li>
            </ul>
          </div>

          {/* Column 4: Jewellery */}
          <div className="flex flex-col">
            <h3 className="font-bold text-white text-[15px] tracking-wide mb-4 border-b border-[#a81a24] pb-2">
              Jewellery
            </h3>
            <ul className="space-y-2.5 text-[14px] text-gray-200">
              <li><Link to="/jewellery/bracelets" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Bracelets</Link></li>
              <li><Link to="/jewellery/necklaces" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Necklaces</Link></li>
              <li><Link to="/jewellery/rings" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Rings</Link></li>
              <li><Link to="/jewellery/silver" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Hallmarked Silver</Link></li>
            </ul>
          </div>

          {/* Column 5: Policies & Other */}
          <div className="flex flex-col">
            <h3 className="font-bold text-white text-[15px] tracking-wide mb-4 border-b border-[#a81a24] pb-2">
              Policies & Other
            </h3>
            <ul className="space-y-2.5 text-[14px] text-gray-200">
              <li><Link to="/track-order" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Track Your Order</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Shipping Policy</Link></li>
              <li><Link to="/return-policy" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Return Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Privacy Policy</Link></li>
              <li><Link to="/blogs" className="hover:text-[#f3d3a7] hover:pl-1 transition-all">Blogs</Link></li>
            </ul>
          </div>

          {/* Column 6: Contact Us */}
          <div className="flex flex-col">
            <h3 className="font-bold text-white text-[15px] tracking-wide mb-4 border-b border-[#a81a24] pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-[14px] text-gray-200">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#f3d3a7] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:support@puspendra.com" className="hover:text-[#f3d3a7] transition-colors break-all">support@puspendra.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#f3d3a7] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+919876543210" className="hover:text-[#f3d3a7] transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-2.5 leading-relaxed">
                <svg className="w-4 h-4 text-[#f3d3a7] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Plot no. 558, Sector 27, Gurugram, 122002, Haryana, India</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* =======================================
          BOTTOM SECTION: Corporate Info
      ======================================== */}
      <div className="w-full bg-[#73050f] py-6 px-4 border-t border-[#8c0a15]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center space-y-3">

          {/* Corporate Details */}
          <p className="text-xs text-white/90 max-w-4xl leading-relaxed font-sans">
            Puspendra Lifestyle Private Limited · GST: 06AAKCD8130H1ZO · CIN: U47733HR2024PTC120933 · Head Office: Plot no. 558, Sector 27, Gurugram, 122002, Haryana, India
          </p>

          {/* Copyright */}
          <p className="text-xs text-white/80 pt-3 border-t border-[#8c0a15] w-full max-w-xs mx-auto">
            © 2026 Puspendra. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;