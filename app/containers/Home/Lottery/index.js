import React from 'react';
import Lotto from './Lotto';

const Lottery = () => {
  return (
    <div className=" conatiner relative">
      <div className=" absolute top-0 left-0">
        <img
          src="/ball-1.png"
          alt="Ball Left Top"
          className="lg:w-14 lg:h-14 w-10 h-10 hidden md:block"
        />
      </div>
      <div className=" absolute top-14 left-12">
        <img
          src="/ball-2.png.png"
          alt="Ball Left Top"
          className=" w-16 h-16 sm:w-16 sm:h-16 hidden md:block"
        />
      </div>
      <Lotto />
      {/* 🎱 BOTTOM-RIGHT BALLS */}
      <div className=" absolute bottom-0 right-0">
        <img
          src="/ball-1.png"
          alt="Ball Left Top"
          className="w-14 h-14 lg:w-12 lg:h-12 hidden md:block"
        />
      </div>
      <div className=" absolute bottom-14 right-12">
        <img
          src="/ball-2.png.png"
          alt="Ball Left Top"
          className=" w-16 h-16 sm:w-16 sm:h-16 hidden md:block "
        />
      </div>
    </div>
  );
};

export default Lottery;
