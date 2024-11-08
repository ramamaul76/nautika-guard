import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-col items-start p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div className="col-span-1 px-7 flex items-center">
          <button className="text-2xl font-bold text-gray-500 hover:scale-105 transition-transform duration-200 ease-in-out">
            Nautika Guard
          </button>
        </div>
        <div className="col-span-1">
          <div className="flex justify-center w-full">
            <div className="flex items-center px-20 py-2 font-normal bg-gray-100 text-black border rounded-3xl space-x-12 hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
              <button>Sign up</button>
              <button>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
