import React from 'react';

const RoyalLotto = () => {
  return (
    <section className=" screens text-primary-500 py-16 relative overflow-hidden border-b border-yellow-500">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-4xl font-bold font-poppins text-primary-700 mb-4">
            Royal Lotto
          </h2>
          <p className="text-primary-800 font-josefin mb-6 leading-relaxed max-w-md">
            Join the excitement with Royal Megas Lottery games, offering you the
            chance to turn dreams into reality with every ticket. Whether you’re
            playing for fun or aiming for a life-changing win, our easy-to-play
            lotteries bring you closer to incredible prizes. Try your luck today
            and see if fortune favours you!
          </p>

          {/* Price + Button Row */}
        </div>
        <div className="flex lg:flex-col sm:flex-row items-center gap-6">
          {/* Price */}
          <div className="flex items-baseline font-bold text-5xl text-white">
            <span className="text-3xl mr-1">₹</span>
            <span className="text-6xl">5</span>
            <span className="text-3xl ml-1">cr</span>
          </div>

          {/* Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition">
            🎟 Buy Tickets
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/6845715 1.png"
            alt="Royal Lotto Balls"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default RoyalLotto;
