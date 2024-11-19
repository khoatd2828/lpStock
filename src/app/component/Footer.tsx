import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
          {/* Logo & Contact Info */}
          <div className="flex flex-col space-y-4 lg:space-y-8">
            <div className="flex items-center space-x-4">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
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
            <div className="mt-4 md:text-start text-center">
              <p className="text-sm">
                Hotline:{" "}
                <a
                  href="tel:18001234"
                  className="hover:underline text-blue-300 font-bold"
                >
                  1800 1234
                </a>{" "}
                (24/7 Support)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-md">Khám phá</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline text-blue-300">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-300">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-300">
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
                  <a href="#" className="hover:underline text-blue-300">
                    Xác định điểm mua
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-300">
                    Chiến lược giải ngân
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-300">
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
                  <a href="#" className="hover:underline text-blue-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-300">
                    Mô hình Nến thông dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-300">
                    Harmonic Pattern
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-300">
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
                  <a href="#" className="hover:underline text-blue-300">
                    Giải đáp thắc mắc
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-blue-300">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col space-y-6 items-center lg:items-end">
            {/* Social Media */}
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

            {/* Address */}
            <div className="text-center lg:text-right text-sm">
              <p>123 Stock Exchange Street, Ho Chi Minh City</p>
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
            &copy; 2024 STOCK EXCHANGE. All rights reserved. Designed by Your
            Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
