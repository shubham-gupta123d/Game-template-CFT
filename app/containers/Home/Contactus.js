import React from 'react';
import { ArrowRight } from 'lucide-react';

function ContactSection() {
  return (
    <div className="w-full bg-[#d6a63e]  py-12 px-6 md:px-12 flex flex-col gap-4 lg:gap-16 md:flex-row justify-center items-center mt-16 mb-16">
      {/* Text */}
      <div>
        <h2 className="text-[24px] md:text-[30px] font-bold text-black text-center md:text-left leading-tight md:leading-snug">
          If you have any query about lottery or anything!
        </h2>
      </div>

      {/* Button */}
      <button className="mt-4 md:mt-0 flex items-center gap-2 px-5 py-2 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition">
        Contact Us
        <ArrowRight size={16} strokeWidth={2} />
      </button>
    </div>
  );
}

export default ContactSection;
