import React from "react";

const Hero: React.FC = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500 text-white min-h-screen flex">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 gap-10">
          <div className="pt-16 md:pt-0">
            <h1 className="text-6xl font-bold leading-tight">
            App ứng dụng khuyến nghị trực tuyến <br />
              <span className="font-bold">STOCKTRADERS AI</span>
            </h1>
            <p className="mt-6 text-lg">
              Hệ thống sử dụng dữ liệu realtime, khuyến nghị đầu tư cổ phiếu.
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-lg">
                See More
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-purple-600">
                Register
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end pb-16">
            <img
              src="/images/stock-features.png"
              alt="Chart Illustration"
              className="w-[900px] h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-white text-purple-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-normal">
            SỰ KHÁC BIỆT TRONG STOCKTRADERS AI CỦA CHÚNG TÔI
          </h2>
          <p className="mt-2 text-purple-600">
            Cùng khám phá những lợi ích vượt trội
          </p>
          <div className="h-1 w-16 bg-purple-600 mx-auto mt-4"></div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/low-cost.png"
              alt="Low Cost"
              className="w-24 h-24 mb-4"
            />
            <h3 className="font-bold text-lg">MIỄN PHÍ</h3>
            <p className="mt-2 text-sm">
              Sử dung bộ tín hiệu miễn phí 100%.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/secure.png"
              alt="Secure"
              className="w-24 h-24 mb-4"
            />
            <h3 className="font-bold text-lg">ỨNG DỤNG AI</h3>
            <p className="mt-2 text-sm">
              Sử dụng Machine Learning, Deep Learning để phân tích dữ liệu.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/profit.png"
              alt="High Profit"
              className="w-24 h-24 mb-4"
            />
            <h3 className="font-bold text-lg">HIỆU SUẤT CAO</h3>
            <p className="mt-2 text-sm">
              Xác suất đúng trên 60%, trung bình lãi lỗ là 2.0.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-purple-50 text-purple-900">
        <div className="container mx-auto md:px-40">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase leading-normal">
              CÁC TÍNH NĂNG CỦA ỨNG DỤNG
            </h2>
            <p className="mt-2 text-purple-600">
              Sử dụng bộ tín hiệu miễn phí
            </p>
            <div className="h-1 w-16 bg-purple-600 mx-auto mt-4"></div>
          </div>
          <div className="flex md:flex-row flex-wrap flex-col items-start mx-4 md:mx-0">
            <div className="flex-1 mb-16 mt-3">
              <ul className="space-y-4 text-lg">
                <li className="flex items-center space-x-3">
                  <img
                    src="/images/check-icon.png"
                    alt="Check"
                    className="w-6 h-6"
                  />
                  <span>Ứng dụng cài đặt trên Ios và Android</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="/images/check-icon.png"
                    alt="Check"
                    className="w-6 h-6"
                  />
                  <span>Dự báo sóng thị trường</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="/images/check-icon.png"
                    alt="Check"
                    className="w-6 h-6"
                  />
                  <span>Xác định dòng tiền sóng ngành</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="/images/check-icon.png"
                    alt="Check"
                    className="w-6 h-6"
                  />
                  <span>Dữ liệu trực tuyến</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="/images/check-icon.png"
                    alt="Check"
                    className="w-6 h-6"
                  />
                  <span>Tích hợp AI</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="/images/check-icon.png"
                    alt="Check"
                    className="w-6 h-6"
                  />
                  <span>Sản phẩm của thị trường chứng khoáng VN</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="/images/check-icon.png"
                    alt="Check"
                    className="w-6 h-6"
                  />
                  <span>Hỗ trợ 24/7</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src="/images/stock.png"
                alt="Stock Features Illustration"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white text-purple-900">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold uppercase leading-normal">
            Vì Sao Nên Giao Dịch Trên Ứng Dụng Của Chúng Tôi
          </h2>
          <div className="h-1 w-16 bg-purple-500 mx-auto my-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <img
                src="/images/icon-fast-trade.png"
                alt="Giao dịch nhanh chóng"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Dự báo chuẩn xác</h3>
              <p className="mt-2 text-sm">
                Tính hiệu dự báo sớm từ 1 đến 2 phiên giao dịch.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/icon-secure.png"
                alt="Bảo mật cao"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Dễ sử dụng</h3>
              <p className="mt-2 text-sm">
                Hệ thống dữ liệu phân tích trực quan.
              </p>
            </div>
            <div className="flex flex-col items-center">  
              <img
                src="/images/icon-market.png"
                alt="Phân tích thị trường"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Nguyên tắc rõ ràng</h3>
              <p className="mt-2 text-sm">
                Dựa vào 3 yếu tố: sóng thị trường, sóng ngành và chiến lược giải ngân.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/icon-support.png"
                alt="Hỗ trợ 24/7"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Dữ liệu độc quyền</h3>
              <p className="mt-2 text-sm">
                Các mô hình được tích hợp trên dữ liệu độc quyền của StockTrader AI.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold uppercase text-purple-900 leading-normal">
            Quy Trình Hướng Dẫn Sử Dụng
          </h2>
          <div className="h-1 w-16 bg-purple-300 mx-auto my-4"></div>
          <div className="flex flex-col lg:flex-row justify-center mt-8">
            <div className="flex-1 px-4 py-6">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-900 text-white rounded-full text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-purple-900">
                Đăng Ký Tài Khoản
              </h3>
              <p className="mt-2 text-gray-600">
                Đăng ký thành viên StockTraders AI.
              </p>
            </div>
            <div className="flex-1 px-4 py-6">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-900 text-white rounded-full text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-purple-900">
                Đọc Tài Liệu
              </h3>
              <p className="mt-2 text-gray-600">
                Tìm hiểu nguyên lý đầu tư theo StockTraders AI.
              </p>
            </div>
            <div className="flex-1 px-4 py-6">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-900 text-white rounded-full text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-purple-900">Ứng Dụng</h3>
              <p className="mt-2 text-gray-600">
                Tham khảo tín hiệu từ ứng dụng và ra quyết định đầu tư.
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex-1 px-4 py-6">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-900 text-white rounded-full text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-purple-900">
                Theo Dõi Danh Mục
              </h3>
              <p className="mt-2 text-gray-600">
                Theo dõi và điều chỉnh danh mục đầu tư phù hợp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
