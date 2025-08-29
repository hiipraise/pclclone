import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WorkTogether = () => {
  const { ref, controls } = useScrollAnimation();
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section ref={ref} className="h-full bg-[#f9f9f9] flex items-center">
      <div className="sm:p-[5vw] px-[5vw] py-20 space-y-7">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.1 }}
          className="font-bold text-4xl sm:text-5xl"
        >
          Ready to work together?
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.1 }}
          className="font-normal text-black/90 text-base sm:w-3/5"
        >
          Whether you have a project in mind and you’re looking for a reliable
          construction partner or you’re looking to take the next step in your
          career, we want to hear from you!
        </motion.p>
        <div className="sm:space-x-10 space-y-4 sm:space-y-0 ">
          <motion.button
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.1 }}
            className="uppercase bg-green-900 text-[#f9f9f9] font-medium px-4 py-2 rounded relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-950 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10"
          >
            {" "}
            Build a project with us{" "}
          </motion.button>
          <motion.button
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.1 }}
            className="uppercase border-2 border-green-900 text-green-900 font-medium px-4 py-2 rounded relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-900 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10"
          >
            build a career with us
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
