import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-950 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
          {/* Logo & Contact Info */}
          <div className="flex flex-col space-y-4 lg:space-y-8 mr-5">
            <div className="flex items-center space-x-4">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-20 h-20 object-contain mr-3"
              />
              <div>
                <h2 className="font-bold text-lg">StockTraders AI</h2>
                <p className="text-sm">
                  Website:{" "}
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-300"
                  >
                    www.stocktraders.vn
                  </a>
                </p>
                <p className="text-sm">
                  Email:{" "}
                  <a
                    href=""
                    className="hover:underline text-blue-300"
                  >
                    info@stocktraders.vn
                  </a>
                </p>
                <p className="text-sm">Phone: 0908070605</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-md">Khám phá</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Triết lý đầu tư
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-md">Quản trị danh mục</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Xác định điểm mua
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Chiến lược giải ngân
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Kiểm soát cảm xúc
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-md">Kiến thức</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Mô hình Nến thông dụng
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Harmonic Pattern
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Phân tích kỹ thuật
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Center */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-md">Hỗ trợ</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Giải đáp thắc mắc
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 text-white transition"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col space-y-6 items-center lg:items-end">
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/zalo.png"
                  alt="Zalo"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/youtube.png"
                  alt="YouTube"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
            </div>

            {/* Address */}
            <div className="text-center lg:text-right text-sm">
              <p>62 Trần Quang Khải, Phường Tân Định, Q1, TP Hồ Chí Minh</p>
              <p>Vietnam</p>
            </div>

            <div className="mt-4 text-center lg:text-right">
              <p className="text-white text-sm">
                By using this site, you agree to our{" "}
                <a href="#" className="text-blue-300 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-300 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4">
          <p className="text-center text-xs text-gray-400">
            &copy; 2024 StockTraders AI. All rights reserved. Designed by StockTraders AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
