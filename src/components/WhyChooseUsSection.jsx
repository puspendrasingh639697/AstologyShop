import React from "react";
import whyChooseImage from "../assets/WhatsApp Image 2026-09-20 at 11.58.01 AM.jpeg";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#fff3df] py-8">
      {/* 80% Width Centered Banner - Reduced Height */}
      <div className="w-[100%] mx-auto  overflow-hidden">
        <img 
          src={whyChooseImage} 
          alt="Why Choose Divine Hindu" 
          className="w-full h-[450px] md:h-[550px] object-cover block"
        />
      </div>
    </section>
  );
}