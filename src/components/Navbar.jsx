import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constant";

export default function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple Image" width={14} height={18} />
        <div className="flex items-center flex-1 justify-center max-sm:hidden">
          {navLists.map((navItem, index) => (
            <div
              key={navItem}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {navItem}
            </div>
          ))}
        </div>
        <div className="flex items-baseline max-sm:justify-end max-sm:flex-1 gap-7 ">
          <img src={searchImg} alt="Search Image" width={18} height={18} />
          <img src={bagImg} alt="Search Image" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}
