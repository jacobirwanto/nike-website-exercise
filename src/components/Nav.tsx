import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";

const routes: string[] = ["Home", "About", "Services", "Pricing", "Contact"];

function Nav({
  onClickShopping,
}: {
  onClickShopping: React.MouseEventHandler;
}) {
  const [isMobile, setMobile] = useState<boolean>(false);
  return (
    <nav className="flex flex-wrap justify-between items-center z-10 relative">
      <a href="#">
        <img src={NikeLogo} className="h-20 w-20" />
      </a>

      <button
        onClick={() => setMobile(!isMobile)}
        className="btn-anim focus:ring-2 focus:ring-gray-500 p-2 rounded-lg hover:bg-gray-100 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`w-full lg:block lg:w-auto ${
          isMobile === false && "hidden"
        }`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row text-lg border border-gray-50 p-4 rounded-lg lg:bg-transparent lg:border-none">
          {routes.map((route, i) => {
            return (
              <li
                className={`lg:hover:bg-transparent lg:hover:text-blue-500 py-2 px-3 cursor-pointer rounded ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                } ${(i === 3 || i === 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        onClick={onClickShopping}
        className="fixed bottom-4 left-4 lg:static lg:mr-8"
      >
        <div className="btn-anim h-12 w-12 rounded-full bg-white shadow-md flex-center cursor-pointer">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
