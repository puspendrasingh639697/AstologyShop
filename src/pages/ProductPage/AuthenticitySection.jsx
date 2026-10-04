import React from "react";
import { MdVerified, MdWorkspacePremium } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";

const AuthenticitySection = ({ product }) => {
  return (
    <div className="bg-[#F5EBDD] p-6  mb-6">
      <h3 className="text-base  text-[#4a2e18] mb-4 flex items-center gap-2">
        <MdVerified className="text-xl text-red-800" /> Authenticity & Certification
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-200 rounded-sm">
          <MdWorkspacePremium className="text-2xl text-red-800 shrink-0" />
          <div>
            <h4 className="font-bold text-[#4a2e18] mb-0.5">100% Genuine</h4>
            <p className="text-stone-600">Sourced directly from authentic traditional artisans & Vedic centers.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-200 rounded-sm">
          <RiShieldCheckLine className="text-2xl text-red-800 shrink-0" />
          <div>
            <h4 className="font-bold text-[#4a2e18] mb-0.5">{product.certification || "Lab Certified"}</h4>
            <p className="text-stone-600">Verified for purity and quality standards with proper documentation.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-200 rounded-sm">
          <MdVerified className="text-2xl text-[#8b3a2b] shrink-0" />
          <div>
            <h4 className="font-bold text-[#4a2e18] mb-0.5">Energized & Blessed</h4>
            <p className="text-stone-600">Ritually cleansed and energized as per sacred scriptural guidelines.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticitySection;