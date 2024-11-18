"use client";
import { useState } from "react";

const Header: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-blue-900 shadow-md">
      {/* Logo and Navigation */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </a>
        {/* Navigation */}
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-blue-300 text-white">
            Home
          </a>
          <a href="#" className="hover:text-blue-300 text-white">
            Service
          </a>
          <a href="#" className="hover:text-blue-300 text-white">
            About
          </a>
          <a href="#" className="hover:text-blue-300 text-white">
            Product
          </a>
          <a href="#" className="hover:text-blue-300 text-white">
            Contact
          </a>
        </nav>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded-full ${
            activeButton === "signIn"
              ? "bg-white text-blue-600"
              : "text-blue-300 hover:text-white"
          }`}
          onClick={() => handleButtonClick("signIn")}
        >
          Sign In
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
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
