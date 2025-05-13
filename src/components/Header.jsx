import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-[#1F1B17] py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center space-x-3">
          {/* <img src='' alt="Logo" className="h-10 w-10 object-contain" /> */}
          <h1 className="text-white text-2xl font-semibold font-serif">
            Espresso Emporium
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
