// Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white min-h-screen flex">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 gap-20">
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              STOCK EXCHANGE <br />
              <span className="text-blue-300">PLATFORM</span>
            </h1>
            <p className="mt-6 text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Exceptuer sint occaecat.
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg">
                See More
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-blue-600">
                Register
              </button>
            </div>
          </div>

          {/* Phần hình ảnh bên phải */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/stock.png"
              alt="Chart Illustration"
              className="w-[700px] h-auto"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-white text-blue-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            SỰ KHÁC BIỆT TRONG STOCK TRADING CỦA CHÚNG TÔI
          </h2>
          <p className="mt-2 text-blue-600">
            Cùng khám phá những lợi ích vượt trội
          </p>
          <div className="h-1 w-16 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/low-cost.png"
              alt="Low Cost"
              className="w-24 h-24 mb-4"
            />
            <h3 className="font-bold text-lg">CHI PHÍ THẤP</h3>
            <p className="mt-2 text-sm">    
              Phí giao dịch cạnh tranh, mang lại hiệu quả tối đa cho nhà đầu tư.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/secure.png"
              alt="Secure"
              className="w-24 h-24 mb-4"
            />
            <h3 className="font-bold text-lg">AN TOÀN VÀ BẢO MẬT</h3>
            <p className="mt-2 text-sm">
              Hệ thống bảo mật hiện đại, đảm bảo an toàn tuyệt đối cho tài
              khoản.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/profit.png"
              alt="High Profit"
              className="w-24 h-24 mb-4"
            />
            <h3 className="font-bold text-lg">LỢI NHUẬN CAO</h3>
            <p className="mt-2 text-sm">
              Tư vấn chuyên sâu giúp bạn đầu tư hiệu quả và sinh lời tối ưu.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-blue-50 text-blue-900">
      <div className="container mx-auto px-40">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase">
            CÁC TÍNH NĂNG CỦA NỀN TẢNG
          </h2>
          <p className="mt-2 text-blue-600">
            Giải pháp tối ưu cho giao dịch chứng khoán
          </p>
          <div className="h-1 w-16 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-wrap items-start">
          <div className="flex-1">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center space-x-3">
                <img
                  src="/images/check-icon.png"
                  alt="Check"
                  className="w-6 h-6"
                />
                <span>Hỗ trợ giao dịch trên mọi thiết bị</span>
              </li>
              <li className="flex items-center space-x-3">
                <img
                  src="/images/check-icon.png"
                  alt="Check"
                  className="w-6 h-6"
                />
                <span>Phân tích thị trường chi tiết và chính xác</span>
              </li>
              <li className="flex items-center space-x-3">
                <img
                  src="/images/check-icon.png"
                  alt="Check"
                  className="w-6 h-6"
                />
                <span>Tốc độ giao dịch nhanh vượt trội</span>
              </li>
              <li className="flex items-center space-x-3">
                <img
                  src="/images/check-icon.png"
                  alt="Check"
                  className="w-6 h-6"
                />
                <span>Bảo mật thông tin khách hàng tuyệt đối</span>
              </li>
              <li className="flex items-center space-x-3">
                <img
                  src="/images/check-icon.png"
                  alt="Check"
                  className="w-6 h-6"
                />
                <span>Hỗ trợ 24/7 bởi đội ngũ chuyên gia</span>
              </li>
              <li className="flex items-center space-x-3">
                <img
                  src="/images/check-icon.png"
                  alt="Check"
                  className="w-6 h-6"
                />
                <span>Tích hợp hệ thống báo cáo thông minh</span>
              </li>
              <li className="flex items-center space-x-3">
                <img
                  src="/images/check-icon.png"
                  alt="Check"
                  className="w-6 h-6"
                />
                <span>Hỗ trợ kết nối API với các ứng dụng khác</span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img
              src="/images/stock-features.png"
              alt="Stock Features Illustration"
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-gray-100 text-blue-900">
  <div className="container mx-auto px-6 lg:px-20 text-center">
    <h2 className="text-3xl font-bold uppercase">
      Vì Sao Nên Giao Dịch Trên Nền Tảng Của Chúng Tôi
    </h2>
    <div className="h-1 w-16 bg-blue-500 mx-auto my-4"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      <div className="flex flex-col items-center">
        <img
          src="/images/icon-fast-trade.png"
          alt="Giao dịch nhanh chóng"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">Giao dịch nhanh chóng</h3>
        <p className="mt-2 text-sm">
          Đặt lệnh mua và bán trong tích tắc với tốc độ xử lý vượt trội.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/images/icon-secure.png"
          alt="Bảo mật cao"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">Bảo mật cao</h3>
        <p className="mt-2 text-sm">
          Đảm bảo thông tin và giao dịch của bạn luôn an toàn tuyệt đối.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/images/icon-market.png"
          alt="Phân tích thị trường"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">Phân tích thị trường</h3>
        <p className="mt-2 text-sm">
          Công cụ phân tích hiện đại hỗ trợ bạn đưa ra quyết định chính xác.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/images/icon-support.png"
          alt="Hỗ trợ 24/7"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">Hỗ trợ 24/7</h3>
        <p className="mt-2 text-sm">
          Đội ngũ hỗ trợ khách hàng chuyên nghiệp luôn sẵn sàng giúp bạn.
        </p>
      </div>
    </div>
  </div>
</section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold uppercase text-blue-900">
          Quy Trình Giao Dịch Chứng Khoán
        </h2>
        <div className="h-1 w-16 bg-blue-300 mx-auto my-4"></div>
        <div className="flex flex-col lg:flex-row justify-center mt-8">
          {/* Step 1 */}
          <div className="flex-1 px-4 py-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full text-2xl mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-blue-900">Đăng Ký Tài Khoản</h3>
            <p className="mt-2 text-gray-600">
              Đăng ký tài khoản giao dịch để bắt đầu hành trình đầu tư của bạn.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex-1 px-4 py-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full text-2xl mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-blue-900">Nạp Tiền Giao Dịch</h3>
            <p className="mt-2 text-gray-600">
              Thêm vốn vào tài khoản giao dịch để bắt đầu mua và bán cổ phiếu.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex-1 px-4 py-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full text-2xl mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-blue-900">Giao Dịch</h3>
            <p className="mt-2 text-gray-600">
              Mua và bán cổ phiếu theo thời gian thực với công cụ hỗ trợ mạnh mẽ.
            </p>
          </div>
          {/* Step 4 */}
          <div className="flex-1 px-4 py-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full text-2xl mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold text-blue-900">Theo Dõi Danh Mục</h3>
            <p className="mt-2 text-gray-600">
              Theo dõi danh mục đầu tư của bạn và tối ưu hóa lợi nhuận.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};
export default Hero;
