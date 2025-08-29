import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Safety = () => {
  const { ref, controls } = useScrollAnimation();
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section ref={ref} className="h-full bg-[#f9f9f9] flex items-center">
      <motion.div
        className="flex gap-[5vmin] flex-wrap md:flex-nowrap sm:p-[5vw] px-[5vw] py-20 items-center"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        <img
          src="https://www.pcl.com/content/dam/people-working/PCL%20-%20Nisku%20Mod%20Yard%20-%20June%2010,%202016-57-min.jpg"
          alt=""
          className="object-cover md:w-[600px]"
        />
        <div className="space-y-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.1 }}
            className="font-bold text-2xl md:text-4xl"
          >
            Safety: A Way of Life
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.1 }}
            className="text-black/60"
          >
            Our culture of safety is one that extends beyond the job site to
            ensure everyone returns home safely every day.
          </motion.p>
          <Link className="gap-5 flex items-center">
            <motion.button
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.1 }}
              className="uppercase border-2 border-green-900 text-green-900 font-semibold px-6 py-4 rounded relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-900 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10"
            >
              learn more
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Safety;
