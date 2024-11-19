import React from "react";
import Hero from "./component/Hero";
import Footer from "./component/Footer";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Footer />
    </div>
  );
};

export default Page;