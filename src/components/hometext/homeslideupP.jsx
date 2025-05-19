import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HomeSlideupP = ({ headertext, headerdetail, readmorelink }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false); // Trigger exit animation
    const timer = setTimeout(() => {
      setIsVisible(true); // Trigger enter animation after a short delay
    }, 300); // Adjust delay to match your desired fade-out duration

    return () => clearTimeout(timer);
  }, [headertext, headerdetail, readmorelink]);

  return (
    <motion.div
      className="min-h-screen flex flex-col text-start items-start justify-center p-0 bg-transparent"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on isVisible
      exit={{ opacity: 0, y: -50 }} // Fade out animation
      transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust duration and easing
    >
      <motion.p
        key={headertext} // Add key to force remount/re-render for animation
        className="font-bold text-white text-xl mb-4 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }} // Stagger the appearance
      >
        {headertext}
      </motion.p>
      <motion.p
        key={headerdetail} // Add key
        className="font-bold text-3xl text-start md:text-7xl text-white mb-4 capitalize"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        {headerdetail}
      </motion.p>
      <motion.p
        key={readmorelink} // Add key
        className="font-bold text-white text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <a
          href={readmorelink}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          READ THE STORY{" "}
          <span className="inline-block w-6 h-[2px] bg-white ml-1 align-middle" />
        </a>
      </motion.p>
    </motion.div>
  );
};

export default HomeSlideupP;
