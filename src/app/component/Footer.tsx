import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-20 h-20 object-contain mr-3"
          />
          {/* Text Content */}
          <div className="flex flex-col space-y-1">
            <h2 className="font-bold text-base">
              STOCK EXCHANGE
            </h2>
            <p className="text-sm">
              Website:{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-300"
              >
                www.STOCK EXCHANGE.com
              </a>{" "}
              &{" "}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-300"
              >
                www.STOCK EXCHANGE.com
              </a>
            </p>
            <p className="text-sm">
              Email:{" "}
              <a
                href=""
                className="hover:underline text-blue-300"
              >
                eservices@STOCK EXCHANGE.com
              </a>
            </p>
            <p className="text-sm">Phone: 0908070605</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end space-y-1">
          <div className="flex space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className="w-10 h-10 hover:opacity-80"
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
                className="w-10 h-10 hover:opacity-80"
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
                className="w-10 h-10 hover:opacity-80"
              />
            </a>
          </div>
          <p className="text-xs text-gray-400">
            &copy; 2024 STOCK EXCHANGE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
