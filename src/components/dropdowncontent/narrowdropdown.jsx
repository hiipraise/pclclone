import React from "react";

const NarrowDropdown = ({ items }) => {
  return (
    <div className="fixed left-0 top-[72px] w-screen bg-white shadow-md py-12 z-40 border-t border-gray-200 min-h-[300px]">
      <div className="max-w-screen-md mx-auto px-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-gray-800 hover:text-green-500 block py-2"
                onClick={(e) => e.preventDefault()}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NarrowDropdown;
