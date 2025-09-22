import React from 'react';

export default function NotFoundPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: 'url("/bg1.jpg")', // replace with your image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          OOPS! THIS PAGE NOT FOUND
        </h1>
        <p className="text-gray-300 mb-8">
          We are Really Sorry But the Page you Requested is Missing ☹
        </p>
        <a
          href="/"
          className="bg-yellow-500 text-black px-6 py-3 rounded-md shadow-md font-semibold hover:bg-yellow-400 transition inline-block"
        >
          GO BACK TO HOME &gt;&gt;
        </a>
      </div>
    </div>
  );
}
