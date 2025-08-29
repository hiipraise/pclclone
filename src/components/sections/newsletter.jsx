import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";

const NewsLetter = () => {
  const { ref, controls } = useScrollAnimation();
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section
      ref={ref}
      className="bg-green-950 h-full flex items-center
      "
    >
      <div className="sm:p-[5vw] px-[5vw] py-20 flex flex-wrap gap-10 sm:gap-[4vmin] md:flex-nowrap">
        <div className="space-y-5">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.1 }}
            className="text-white font-bold text-3xl"
          >
            Get our insights delivered straight to your inbox!
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.1 }}
            className="text-white font-normal"
          >
            Subscribe now to get the latest about construction trends,
            innovation and best practices from PCL.
          </motion.p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-[3vmin]">
          <div>
            <motion.input
              type="email"
              placeholder="Enterr your email"
              className="h-11 rounded px-4 outline-none w-72"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.1 }}
            />
          </div>
          <div>
            <motion.button
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.1 }}
              className="uppercase border-2 border-white text-white font-medium px-4 py-2 rounded relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-white before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-green-900 z-10"
            >
              subscribe
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
