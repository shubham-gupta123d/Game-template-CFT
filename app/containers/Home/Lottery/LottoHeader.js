import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

function LottoHeader({ hours, minutes, seconds }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className=" container flex flex-col lg:flex-row items-stretch justify-between gap-4 bg-gradient-to-r from-yellow-500 to-yellow-70 rounded-2xl">
        <div className="relative w-[100%] my-4 lg:my-2 lg:w-[60%] flex items-center justify-between bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl border border-white shadow px-4 sm:px-6 py-4">
          <button className="absolute -left-7 top-1/2 -translate-y-1/2 w-15 h-15 sm:w-9 sm:h-9 flex items-center  text-black">
            <IoIosArrowDropleft size={25} />
          </button>

          <div className="flex items-center gap-3">
            <img
              src="container.png"
              alt="Mega Jackpot"
              className="w-14 h-14 sm:w-16 sm:h-16 "
            />
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                Mega Jackpot
              </h2>
              <p className="text-sm sm:text-base text-black font-semibold">
                Mega Prize : ₹5,00,00,000
              </p>
              <p className="text-xs sm:text-sm text-black">
                Ticket Price: ₹100
              </p>
              <p className="text-[10px] sm:text-xs text-black">
                📅 Tuesday, July 9, 2024
              </p>
            </div>
          </div>

          {/* TIMER */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-semibold text-black">
              TIMER
            </span>

            <div className="flex items-end gap-2 mt-1">
              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] sm:text-xs text-black font-medium">
                  Hours
                </span>
                <div className="bg-white text-black px-2 sm:px-3 py-1 mt-1  border border-gray-300 font-semibold text-sm sm:text-base">
                  {hours}
                </div>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] sm:text-xs text-black font-medium">
                  Minutes
                </span>
                <div className="bg-white text-black px-2 sm:px-3 py-1 mt-1 border border-gray-300 font-semibold text-sm sm:text-base">
                  {minutes}
                </div>
              </div>

              {/* seconds use kiya */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] sm:text-xs text-black font-medium">
                  Seconds
                </span>
                <div className="bg-white text-black px-2 sm:px-3 py-1 mt-1 border border-gray-300 font-semibold text-sm sm:text-base">
                  {seconds}
                </div>
              </div>
            </div>

            {/* Progress bar use  */}
            <div className="w-28 sm:w-36 h-1 rounded-full bg-gray-200 overflow-hidden mt-2">
              <div className="w-[100%] h-full bottom-0  bg-red-500 rounded-full" />
            </div>
          </div>

          <button className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9  text-white ">
            <IoIosArrowDropright size={25} />
          </button>

          {/* SLIDE TEXT */}
          <div className="absolute right-[-65px] top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center">
            <span className="text-[8px] text-white tracking-widest rotate-90">
              DRAWS FOR MORE SLIDE
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: Action buttons */}
        <div className="flex flex-row gap-3 w-full lg:w-auto my-4 lg:my-4">
          <div className="flex flex-col lg:flex-col gap-3 w-full lg:w-auto ">
            <button className="lg:w-auto px-5 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-yellow-400 to-yellow-600 text-black border border-yellow-500">
              Pick Any 6 Number
            </button>
          </div>

          <div className="flex flex-col lg:flex-col gap-3 w-full lg:w-auto">
            <button className="flex-1 lg:flex-none px-5 py-2 rounded-full font-semibold text-sm text-white border border-[gold]">
              Winners
            </button>
            <button className="flex-1 lg:flex-none px-5 py-2 rounded-full font-semibold text-sm text-white border border-[gold]">
              Prizes & Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

LottoHeader.propTypes = {
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
};

export default LottoHeader;
