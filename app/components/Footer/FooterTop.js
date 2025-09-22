import React from 'react';

const FooterTop = () => {
  return (
    <div
      className="relative text-primary-500 border-t-2 border-primary-700 font-barlow h-50 md:h-50"
      style={{
        backgroundImage: 'url("Rectangle.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 relative z-10 h-full">
        <div className="flex items-center">
          <img
            src="Group 1171275331.png"
            alt="Royal Mega"
            className="h-16 md:h-10"
          />
        </div>

        <p className="text-center text-[16px] md:text-[12px] p-2 max-w-xl mx-auto my-4 md:my-0 leading-relaxed">
          Lottery Players Can Play Royal Mega Lottery <br />
          Games Online From Anywhere
        </p>

        <div className="flex gap-6 text-10 pr-20 md:text-16">
          <a href="#" className="hover:text-primary-700 transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-primary-700 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>

      <img
        src="shape.png.png"
        alt="cards and dice"
        className="absolute right-6 bottom-5 h-32 md:h-40"
      />
    </div>
  );
};

export default FooterTop;
