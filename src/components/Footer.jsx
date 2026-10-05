


import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import footerBanner from "../assets/foterbaner.png";
import useSettingsStore from "../store/useSettingsStore";

const Footer = () => {
  const { settings } = useSettingsStore();

  const contactEmail = settings?.contactEmail || "support@puspendra.com";
  const contactPhone = settings?.contactPhone || "+91 98765 43210";
  const contactAddress =
    settings?.contactAddress ||
    "Plot no. 558, Sector 27, Gurugram, 122002, Haryana, India";

  const facebookUrl = settings?.facebookUrl || "https://facebook.com";
  const instagramUrl = settings?.instagramUrl || "https://instagram.com";
  const whatsappNumber = settings?.whatsappNumber || "";

  const siteName = settings?.siteName || "Puspendra";
  const siteLogo = settings?.siteLogo || logo;

  return (
    <footer
      className="relative w-full text-[#F5EBDD] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerBanner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#5A1F1F]/85"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* ============ TOP SECTION ============ */}
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-6 sm:pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-6">

            {/* Column 1: Brand Info & Social */}
            <div className="lg:col-span-2 flex flex-col items-start pr-0 sm:pr-4">
              {/* ✅ Logo — WHITE */}
              <div className="mb-3">
                <img
                  src={siteLogo}
                  alt={siteName}
                  className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
                  onError={(e) => { e.target.src = logo; }}
                />
              </div>

              <p className="text-[#F5EBDD]/80 text-xs sm:text-[13px] leading-relaxed font-normal mb-4">
                At {siteName}, our mission is to make authentic spiritual and cultural products accessible across the world. Rooted in faith and tradition, we curate trusted puja essentials.
              </p>

              {/* Social Media */}
              <div className="flex items-center gap-2">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-[#B58A3A]/40 flex items-center justify-center text-[#F5EBDD] hover:bg-[#B58A3A] hover:text-[#173B32] hover:border-[#B58A3A] transition-all duration-300"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-[#B58A3A]/40 flex items-center justify-center text-[#F5EBDD] hover:bg-[#B58A3A] hover:text-[#173B32] hover:border-[#B58A3A] transition-all duration-300"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {whatsappNumber ? (
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-8 h-8 rounded-full border border-[#B58A3A]/40 flex items-center justify-center text-[#F5EBDD] hover:bg-[#B58A3A] hover:text-[#173B32] hover:border-[#B58A3A] transition-all duration-300"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </a>
                ) : (
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-full border border-[#B58A3A]/40 flex items-center justify-center text-[#F5EBDD] hover:bg-[#B58A3A] hover:text-[#173B32] hover:border-[#B58A3A] transition-all duration-300"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                )}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col">
              <h3 className="font-bold text-[#B58A3A] text-xs sm:text-sm tracking-wider mb-3 uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#F5EBDD]/75">
                <li><Link to="/" className="hover:text-[#B58A3A] transition-colors">Home</Link></li>
                <li><Link to="/shop" className="hover:text-[#B58A3A] transition-colors">Shop</Link></li>
                <li><Link to="/about" className="hover:text-[#B58A3A] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-[#B58A3A] transition-colors">Contact Us</Link></li>
                <li><Link to="/blogs" className="hover:text-[#B58A3A] transition-colors">Blogs</Link></li>
              </ul>
            </div>

            {/* Column 3: Shop */}
            <div className="flex flex-col">
              <h3 className="font-bold text-[#B58A3A] text-xs sm:text-sm tracking-wider mb-3 uppercase">
                Shop
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#F5EBDD]/75">
                <li><Link to="/puja-samagri" className="hover:text-[#B58A3A] transition-colors">Puja Samagri</Link></li>
                <li><Link to="/puja-kits" className="hover:text-[#B58A3A] transition-colors">Puja Kits</Link></li>
                <li><Link to="/rudraksha" className="hover:text-[#B58A3A] transition-colors">Rudraksha</Link></li>
                <li><Link to="/gemstones" className="hover:text-[#B58A3A] transition-colors">Gemstones</Link></li>
                <li><Link to="/idols" className="hover:text-[#B58A3A] transition-colors">Idols & Murti</Link></li>
                <li><Link to="/yantra" className="hover:text-[#B58A3A] transition-colors">Yantras</Link></li>
              </ul>
            </div>

            {/* Column 4: Customer Care */}
            <div className="flex flex-col">
              <h3 className="font-bold text-[#B58A3A] text-xs sm:text-sm tracking-wider mb-3 uppercase">
                Customer Care
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#F5EBDD]/75">
                <li><Link to="/track-order" className="hover:text-[#B58A3A] transition-colors">Track Order</Link></li>
                <li><Link to="/shipping-policy" className="hover:text-[#B58A3A] transition-colors">Shipping Policy</Link></li>
                <li><Link to="/return-policy" className="hover:text-[#B58A3A] transition-colors">Return Policy</Link></li>
                <li><Link to="/return-request" className="hover:text-[#B58A3A] transition-colors">Return Request</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-[#B58A3A] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="hover:text-[#B58A3A] transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Column 5: Contact Us */}
            <div className="flex flex-col">
              <h3 className="font-bold text-[#B58A3A] text-xs sm:text-sm tracking-wider mb-3 uppercase">
                Contact Us
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#F5EBDD]/75">
                <li className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-[#B58A3A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href={`mailto:${contactEmail}`} className="hover:text-[#B58A3A] transition-colors break-all">
                    {contactEmail}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-[#B58A3A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a href={`tel:${contactPhone}`} className="hover:text-[#B58A3A] transition-colors">
                    {contactPhone}
                  </a>
                </li>
                <li className="flex items-start gap-2 leading-relaxed">
                  <svg className="w-3.5 h-3.5 text-[#B58A3A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>{contactAddress}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

       

        {/* BOTTOM BAR */}
        <div className="w-full border-t border-[#B58A3A]/30 py-3 px-4">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-[#F5EBDD]/60">
            <p>© 2026 {siteName}. All Rights Reserved.</p>
            <div className="flex items-center gap-3">
              <Link to="/privacy-policy" className="hover:text-[#B58A3A] transition-colors">Privacy</Link>
              <span className="opacity-40">·</span>
              <Link to="/terms-conditions" className="hover:text-[#B58A3A] transition-colors">Terms</Link>
              <span className="opacity-40">·</span>
              <Link to="/sitemap" className="hover:text-[#B58A3A] transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;