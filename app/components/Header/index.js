import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = () => {
    const dummyUser = {
      name: 'Shubham Gupta',
      avatar: '/photo.jpg',
    };
    setUser(dummyUser);
    localStorage.setItem('user', JSON.stringify(dummyUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <header className="bg-black text-white border-b border-yellow-500 relative">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <div className="flex items-center space-x-2">
          <img
            src="Group 1171275331.png"
            alt="Royal Mega Logo"
            className="h-10"
          />
        </div>

        {/* NAV LINKS (Desktop) */}
        <nav className="hidden lg:flex space-x-10">
          <Link to="/" className="hover:text-yellow-500 font-medium">
            HOME
          </Link>
          <Link to="/about" className="hover:text-yellow-500 font-medium">
            ABOUT US
          </Link>
          <Link to="/contact" className="hover:text-yellow-500 font-medium">
            CONTACT
          </Link>
          <Link to="/result" className="hover:text-yellow-500 font-medium">
            RESULT
          </Link>
        </nav>

        {/* ACTION BUTTONS (Desktop) */}
        <div className="hidden md:flex space-x-4 items-center">
          {user ? (
            <>
              {/* User Info with Dropdown Arrow */}
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium">{user.name}</span>
                <MdKeyboardArrowDown className="text-xl" />
              </div>
              <IoBagHandleOutline className="text-2xl cursor-pointer" />{' '}
              {/* ✅ updated bag */}
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="px-5 py-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
              >
                Register
              </Link>
              <button
                onClick={handleLogin}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium hover:opacity-90 transition"
              >
                Log In
              </button>
            </>
          )}
        </div>

        {/* Hamburger (Mobile only) */}
        <button
          className="lg:hidden text-yellow-500 text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black border-l border-yellow-500 shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center py-8 space-y-6">
          <Link
            to="/"
            className="hover:text-yellow-500 font-medium"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-500 font-medium"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-500 font-medium"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
          <Link
            to="/result"
            className="hover:text-yellow-500 font-medium"
            onClick={() => setIsOpen(false)}
          >
            RESULT
          </Link>

          {/* Mobile User/Login Section */}
          <div className="flex flex-col items-center space-y-4 w-4/5">
            {user ? (
              <>
                <div className="flex flex-col items-center space-y-2 cursor-pointer">
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">{user.name}</span>
                    <MdKeyboardArrowDown className="text-xl" />
                  </div>
                </div>
                <IoBagHandleOutline className="text-2xl cursor-pointer" />{' '}
                {/* ✅ updated bag */}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="w-full text-center px-5 py-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
                <button
                  onClick={() => {
                    handleLogin();
                    setIsOpen(false);
                  }}
                  className="w-full px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium hover:opacity-90 transition"
                >
                  Log In
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
