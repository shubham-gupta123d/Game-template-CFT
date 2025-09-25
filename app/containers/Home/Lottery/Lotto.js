import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import LottoHeader from './LottoHeader';
import { addToCart } from '@/features/AddToCart/cartSlice';
import { toast } from 'react-toastify';

function LottoBall({ number, isSelected, onClick, isMega }) {
  return (
    <button
      onClick={onClick}
      className={`w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full font-semibold transition 
        ${
          isMega
            ? isSelected
              ? 'bg-red-600 text-white border border-black'
              : 'bg-white text-black border border-black hover:bg-red-600 hover:text-white'
            : isSelected
            ? 'bg-[#d4ac54] text-black border border-black'
            : 'bg-white text-black border border-black hover:bg-[#d4ac54] hover:text-black'
        }`}
    >
      {number.toString().padStart(2, '0')}
    </button>
  );
}

LottoBall.propTypes = {
  number: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  isMega: PropTypes.bool,
};

function Lotto() {
  const dispatch = useDispatch();
  const [mainSelected, setMainSelected] = useState([]);
  const [megaSelected, setMegaSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(3600);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const toggleMain = (num) => {
    if (mainSelected.includes(num)) {
      setMainSelected(mainSelected.filter((n) => n !== num));
    } else if (mainSelected.length < 5) {
      setMainSelected([...mainSelected, num]);
    }
  };

  const selectMega = (num) => {
    setMegaSelected(megaSelected === num ? null : num);
  };

  const clearAll = () => {
    setMainSelected([]);
    setMegaSelected(null);
  };

  const autoSelect = () => {
    const randomNums = [];
    while (randomNums.length < 5) {
      const rand = Math.floor(Math.random() * 69) + 1;
      if (!randomNums.includes(rand)) randomNums.push(rand);
    }
    setMainSelected(randomNums);
    setMegaSelected(Math.floor(Math.random() * 26) + 1);
  };

  const formatTime = () => {
    if (!timeLeft || timeLeft <= 0)
      return { hours: '00', minutes: '00', seconds: '00' };
    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime();

  const handleAddToCart = () => {
    if (mainSelected.length !== 5 || !megaSelected) {
      toast.error('Please Select the number!⚠️');
      return;
    }
    const entry = {
      id: Date.now(),
      drawName: 'Mega Jackpot',
      dateTime: new Date().toLocaleString(),
      mainNumbers: mainSelected,
      megaNumber: megaSelected,
      price: 40,
    };
    dispatch(addToCart(entry));
    clearAll();
    toast.success('Your selection has been added to cart 🎉');
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-8 px-4 font-poppins">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#D4AC54] mb-6">
        Royal Lotto
      </h1>

      {/* Header Card */}
      <LottoHeader hours={hours} minutes={minutes} seconds={seconds} />

      {/* Numbers Section */}
      <div className="mt-6 rounded-2xl w-full max-w-5xl bg-white border border-black shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-6 p-6">
          {/* Main Ball */}
          <div className="border border-black rounded-xl p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2 text-black">Main Ball</h3>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
              {Array.from({ length: 69 }, (_, i) => (
                <LottoBall
                  key={i + 1}
                  number={i + 1}
                  isSelected={mainSelected.includes(i + 1)}
                  onClick={() => toggleMain(i + 1)}
                />
              ))}
            </div>
          </div>

          {/* Mega Ball */}
          <div className="border border-black rounded-xl p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2 text-black">Mega Ball</h3>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 26 }, (_, i) => (
                <LottoBall
                  key={i + 1}
                  number={i + 1}
                  isSelected={megaSelected === i + 1}
                  onClick={() => selectMega(i + 1)}
                  isMega
                />
              ))}
            </div>
          </div>
        </div>

        {/* Selected Numbers */}
        <div className="px-6">
          <div className="mt-6 border border-black rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
            <div>
              <p className="font-semibold text-black">Selected numbers:</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {mainSelected.map((n) => (
                  <div
                    key={n}
                    className="bg-[#d4ac54] text-black border border-black rounded-full px-3 py-1"
                  >
                    {n.toString().padStart(2, '0')}
                  </div>
                ))}
                {megaSelected && (
                  <div className="bg-red-600 text-white border border-black rounded-full px-3 py-1">
                    {megaSelected.toString().padStart(2, '0')}
                  </div>
                )}
              </div>
            </div>

            {/* Clear + Auto */}
            <div className="flex gap-3">
              <button
                onClick={clearAll}
                className="px-4 py-2 rounded-full border border-black bg-[#D4AC54] hover:bg-yellow-400 text-black font-semibold"
              >
                Clear
              </button>
              <button
                onClick={autoSelect}
                className="px-4 py-2 mr-6 rounded-full border border-black text-black font-semibold hover:bg-gray-100"
              >
                Auto select
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 px-6 pb-6">
          <button className="bg-[#D4AC54] text-black font-semibold px-6 py-2 rounded-lg shadow border border-black hover:bg-yellow-600">
            Entry ₹40
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-[#D4AC54] text-black font-semibold px-6 py-2 rounded-lg shadow border border-black hover:bg-yellow-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lotto;
