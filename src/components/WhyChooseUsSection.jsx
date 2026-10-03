import React from "react";
import whyChooseImage from "../assets/topbaner.png";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-red-500 py-0">
      {/* Full Width Banner - Fully Responsive */}
      <div className="w-full mx-auto overflow-hidden">
        <img
          src={whyChooseImage}
          alt="Why Choose Divine Hindu"
          className="w-full h-auto object-cover object-center block"
        />
      </div>
    </section>
  );
}