import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'; // ✅ use react-toastify

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const cartCount = useSelector((state) => state.cart.items.length);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('✅ Logged out successfully'); // ✅ works now
    navigate('/login');
  };

  return (
    <header className="bg-black text-white border-b border-yellow-500 relative">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Group 1171275331.png"
            alt="Royal Mega Logo"
            className="h-10"
          />
        </div>

        {/* Nav Links */}
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

        {/* Actions */}
        <div className="hidden md:flex space-x-4 items-center">
          {user ? (
            <>
              {/* User Info */}
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src={user.avatar || '/default-avatar.png'}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium">{user.name}</span>
                <MdKeyboardArrowDown className="text-xl" />
              </div>

              {/* Cart */}
              <div
                className="relative cursor-pointer"
                onClick={() => navigate('/cart')}
              >
                <IoBagHandleOutline className="text-2xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                    {cartCount}
                  </span>
                )}
              </div>

              {/* Logout */}
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
                to="/signup"
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

        {/* Hamburger */}
        <button
          className="lg:hidden text-yellow-500 text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
