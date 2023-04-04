import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaApple, FaMobileAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 py-4 px-6">
      <div className="flex items-center">
        <Link to="/" className="text-white font-bold text-2xl">
          Your Logo Here
        </Link>
      </div>

      <div className="flex items-center">
        <Link to="/" className="text-white mr-6 hidden md:block">
          Store
        </Link>

        <Link to="/" className="text-white mr-6">
          <FaApple />
        </Link>

        <Link to="/" className="text-white mr-6">
          <FaMobileAlt />
        </Link>

        <Link to="/" className="text-white mr-6">
          <FiShoppingCart />
        </Link>

        <Link to="/" className="text-white mr-6 hidden md:block">
          Register
        </Link>

        <button className="bg-white text-gray-900 py-2 px-4 rounded hidden md:block">
          Sign In
        </button>

        <button className="bg-white text-gray-900 p-2 rounded md:hidden">
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
