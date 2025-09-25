import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { setBanner } from '@/features/AddToCart/bannerSlice';

function LottoHeader({ hours, minutes, seconds }) {
  const dispatch = useDispatch();

  const banners = useMemo(
    () => [
      {
        id: 1,
        title: 'Mega Jackpot',
        prize: '₹5,00,00,000',
        price: '₹100',
        date: '📅 Tuesday, July 9, 2024',
        img: 'container.png',
      },
      {
        id: 2,
        title: 'Mini Jackpot',
        prize: '₹50,00,000',
        price: '₹50',
        date: '📅 Friday, July 12, 2024',
        img: 'container.png',
      },
      {
        id: 3,
        title: 'Royal Lotto',
        prize: '₹1,00,00,000',
        price: '₹75',
        date: '📅 Sunday, July 14, 2024',
        img: 'container.png',
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(setBanner(banners[index]));
  }, [index, dispatch, banners]);

  const prevBanner = () => {
    setIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextBanner = () => {
    setIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center">
      {/* LEFT ARROW */}
      <button
        onClick={prevBanner}
        className="absolute left-[2%] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center hover:bg-gray-100 shadow rounded-full z-10"
      >
        <IoIosArrowDropleft size={28} className="text-black" />
      </button>

      {/* MAIN CONTAINER */}
      <div className="container flex flex-col lg:flex-row items-stretch justify-between gap-4 bg-gradient-to-r from-yellow-500 to-yellow-70 rounded-2xl">
        {/* SLIDER */}
        <div className="relative w-full lg:w-[60%] overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl border border-white shadow gap-2 py-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="flex items-center justify-between w-full flex-shrink-0 px-4"
              >
                {/* LEFT SIDE: INFO */}
                <div className="flex w-full items-center gap-3">
                  <img
                    src={banner.img}
                    alt={banner.title}
                    className="w-14 h-14 sm:w-16 sm:h-16"
                  />
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                      {banner.title}
                    </h2>
                    <p className="text-sm sm:text-base text-black font-semibold">
                      Mega Prize : {banner.prize}
                    </p>
                    <p className="text-xs sm:text-sm text-black">
                      Ticket Price: {banner.price}
                    </p>
                    <p className="text-[10px] sm:text-xs text-black">
                      {banner.date}
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE: TIMER */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] sm:text-xs font-semibold text-black">
                    TIMER
                  </span>
                  <div className="flex items-end gap-2 mt-1">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] sm:text-xs text-black font-medium">
                        Hours
                      </span>
                      <div className="bg-white text-black px-2 sm:px-3 py-1 mt-1 border border-gray-300 font-semibold text-sm sm:text-base">
                        {hours}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] sm:text-xs text-black font-medium">
                        Minutes
                      </span>
                      <div className="bg-white text-black px-2 sm:px-3 py-1 mt-1 border border-gray-300 font-semibold text-sm sm:text-base">
                        {minutes}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] sm:text-xs text-black font-medium">
                        Seconds
                      </span>
                      <div className="bg-white text-black px-2 sm:px-3 py-1 mt-1 border border-gray-300 font-semibold text-sm sm:text-base">
                        {seconds}
                      </div>
                    </div>
                  </div>
                  <div className="w-28 sm:w-36 h-1 rounded-full bg-gray-200 overflow-hidden mt-2">
                    <div className="w-[100%] h-full bottom-0 bg-red-500 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE ACTION BUTTONS */}
        <div className="flex flex-row gap-3 w-full lg:w-auto my-4 lg:my-4">
          <div className="flex flex-col gap-3 w-full lg:w-auto ">
            <button className="px-5 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-yellow-400 to-yellow-600 text-black border border-yellow-500">
              Pick Any 6 Number
            </button>
          </div>
          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <button className="px-5 py-2 rounded-full font-semibold text-sm text-white border border-[gold]">
              Winners
            </button>
            <button className="px-5 py-2 rounded-full font-semibold text-sm text-white border border-[gold]">
              Prizes & Info
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={nextBanner}
        className="absolute left-[59%] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center hover:bg-gray-100 shadow rounded-full z-10"
      >
        <IoIosArrowDropright size={28} className="text-black" />
      </button>
    </div>
  );
}

LottoHeader.propTypes = {
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
};

export default LottoHeader;
