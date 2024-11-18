import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row flex-wrap justify-between items-center space-y-6 sm:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
          {/* Text Content */}
          <div className="text-center sm:text-left">
            <h2 className="font-bold text-lg">STOCK EXCHANGE</h2>
            <p className="text-sm">
              Website:{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-300"
              >
                www.STOCKEXCHANGE.com
              </a>
            </p>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:eservices@STOCKEXCHANGE.com"
                className="hover:underline text-blue-300"
              >
                eservices@STOCKEXCHANGE.com
              </a>
            </p>
            <p className="text-sm">Phone: 0908070605</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center sm:items-end space-y-4">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/zalo.png"
                alt="Zalo"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/youtube.png"
                alt="YouTube"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
          </div>
          {/* Copyright */}
          <p className="text-xs text-gray-400 text-center sm:text-right">
            &copy; 2024 STOCK EXCHANGE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
