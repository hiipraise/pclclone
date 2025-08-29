import React from "react";

const Buttongreen = ({ btntext }) => {
  return (
    <button className="bg-green-900 text-white font-bold uppercase px-10 py-3 flex-grow relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-950 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10">
      {btntext}
    </button>
  );
};

export default Buttongreen;
