import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-9000 text-white w-full fixed bottom-0 text-center sm:text-left">
      <div className="bg-black md-flex md:justify-between md:items-center sm:px-8 px-4 bg-[#fffffff19] py-7">
        <h1 className="lg:text-1xl text-1xl md:mb-0 mb-6 lg:leading-normal">
          <p>Copyright © {year} by Soumyajyoti</p>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
