import React from "react";

function Sidebar({
  children,
  isOpen,
  onClickClose,
}: {
  children?: React.ReactNode;
  isOpen: boolean;
  onClickClose: React.MouseEventHandler;
}) {
  return (
    <div>
      <div
        className={`p-5 fixed right-0 top-0 z-50 shadow-lg md:w-[50%] lg:w-[35%] h-full w-full bg-white transition transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 text-black font-bold"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />
      )}
    </div>
  );
}

export default Sidebar;
