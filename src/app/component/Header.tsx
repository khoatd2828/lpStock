"use client";
import { useState } from "react";

const Header: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center md:px-6 py-4 px-3 bg-blue-900 shadow-md">
      <div className="flex items-center space-x-6">
        <a href="#" className="flex items-center max-w-full">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </a>
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-[-24px]  w-full bg-blue-900 md:static md:block md:w-auto md:bg-transparent flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 px-6 md:px-0 z-50`}
        >
          <a href="#" className="hover:text-blue-300 text-white md-text-align text-center">
            Home
          </a>
          <a href="#" className="hover:text-blue-300 text-white md-text-align text-center">
            Service
          </a>
          <a href="#" className="hover:text-blue-300 text-white md-text-align text-center">
            About
          </a>
          <a href="#" className="hover:text-blue-300 text-white md-text-align text-center">
            Product
          </a>
          <a href="#" className="hover:text-blue-300 text-white md-text-align text-center">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex space-x-4">
        <button
          className={`md:px-4 md:py-2 md:p-0 p-2 rounded-full ${
            activeButton === "signIn"
              ? "bg-white text-blue-600"
              : "text-blue-300 hover:text-white"
          }`}
          onClick={() => handleButtonClick("signIn")}
        >
          Sign In
        </button>
        <button
          className={`md:px-4 md:py-2 md:p-0 p-2 rounded-full ${
            activeButton === "register"
              ? "bg-white text-blue-600"
              : "text-blue-300 hover:text-white"
          }`}
          onClick={() => handleButtonClick("register")}
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
