// app/containers/Home/CasinoSection.js
import React from 'react';

export default function CasinoSection() {
  return (
    <section
      className="relative w-full "
      style={{
        background: 'linear-gradient(90deg, #2d241a 0%, #3a2f22 100%)',
      }}
    >
      <div className=" container  px-6 md:px-12 py-16">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-12 bg-yellow-400/60 rounded" />
            <div className="h-0.5 w-12 bg-yellow-400/60 rounded" />
            <img src="/group.png" alt="Dice" className="w-15 h-15" />
            <div className="h-0.5 w-12 bg-yellow-400/60 rounded" />
            <div className="h-0.5 w-12 bg-yellow-400/60 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
          {/* Second Div: Text + Button */}
          <div className="md:col-span-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              The Casino
            </h1>
            <p className="text-gray-300 leading-relaxed mb-8">
              Step into the thrilling world of Casino games at Royal Mega, where
              every spin, deal, and roll brings you closer to winning big.
              Experience a wide range of classic and modern casino games
              designed to keep the adrenaline pumping. With us, every game is a
              chance to win and a moment to remember!
            </p>
            <button className="bg-gradient-to-b from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Coming soon
            </button>
          </div>

          <div className="md:col-span-6 flex justify-center md:justify-end">
            <img
              src="/containers.png"
              alt="Casino Cards"
              className="w-[320px] md:w-[420px] lg:w-[520px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
