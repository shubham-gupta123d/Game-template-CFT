import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
} from 'react-icons/fa';

const FooterBottom = () => {
  return (
    <div className="  bg-black text-primary-500 font-barlow border-t border-primary-700">
      <div className=" container flex flex-col md:flex-row items-center justify-between py-4 px-4">
        <p className="text-14 md:text-15 text-center md:text-left mb-4 md:mb-0">
          Copyright © 2022. All Right Reserved By{' '}
          <span className="font-semibold">ROYAL MEGA LIMITED</span>
        </p>

        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="#"
            className="bg-primary-700 text-black p-2 rounded-full hover:opacity-80 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-primary-700 text-black p-2 rounded-full hover:opacity-80 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="bg-primary-700 text-black p-2 rounded-full hover:opacity-80 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-primary-700 text-black p-2 rounded-full hover:opacity-80 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="#"
            className="bg-primary-700 text-black p-2 rounded-full hover:opacity-80 transition"
          >
            <FaTelegram />
          </a>
        </div>

        <div className="flex gap-6 text-14 md:text-15">
          <Link to="/" className="hover:text-primary-700 transition-colors">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary-700 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/lotteries"
            className="hover:text-primary-700 transition-colors"
          >
            Lotteries
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary-700 transition-colors"
          >
            Contact
          </Link>
          <Link to="/faq" className="hover:text-primary-700 transition-colors">
            Faq
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
