import React from 'react';

const ContactUs = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* LEFT SIDE - FORM */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 bg-gradient-to-b from-black via-neutral-900 to-black">
        <h4 className="text-sm text-gray-400 mb-2">Contact us</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-400 mb-8">
          We’d love to hear from you. Please fill out this form.
        </p>

        {/* FORM */}
        <form className="space-y-5">
          {/* Dropdown */}

          <div>
            <label className="block text-sm text-gray-300 mb-2">Topic</label>
            <select className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none">
              <option>Promotions</option>
              <option>Message type</option>
              <option>General queries</option>
              <option>Winnigs & Withdrawls</option>
              <option>Transaction Status</option>
              <option>Documents</option>
              <option>other</option>
              <option>Self execution</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
            ></textarea>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Attachments
            </label>
            <input
              type="file"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium hover:opacity-90 transition"
          >
            Send message
          </button>
        </form>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden">
        {/* Background Lottery Balls */}
        <img
          src="/bg.png"
          alt="Lottery BG"
          className="absolute right-0 top-0 h-full object-cover opacity-80"
        />

        {/* Roulette Image */}
        <img
          src="/contact-thumb.png"
          alt="Roulette"
          className="relative z-10 w-3/4 max-w-md"
        />
      </div>
    </section>
  );
};

export default ContactUs;
