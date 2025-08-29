import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import YouTubeWithThumbnail from "../youtubevideo/youtubewiththumbnail";
import Buttongreen from "../common/button/buttongreen";

const Careers = () => {
  const { ref, controls } = useScrollAnimation();
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section
      ref={ref}
      className="h-full w-full bg-[#f9f9f9] flex items-center sm:p-[5vw] px-[5vw] py-20"
    >
      <div className="flex flex-col gap-[6vmin] w-full">
        <div className="flex gap-[4vmin] justify-start">
          <div className="h-[2px] hidden w-10 bg-black sm:flex"></div>
          <div className="space-y-16">
            <div className="space-y-3">
              <motion.p
                className="uppercase font-light text-xl text-black"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
              >
                careers
              </motion.p>
              <motion.p
                className="text-black font-bold text-2xl md:text-4xl"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1 }}
              >
                Shape Your Future With PCL Construction
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <YouTubeWithThumbnail />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.1 }}
            className="font-bold text-black text-xl md:text-3xl"
          >
            PCL is more than a job. it's your career and it matters. Explore a
            career with PCL.
          </motion.p>
          <div className="flex flex-wrap gap-[3vmin]">
            <Buttongreen btntext="Professionals" />
            <Buttongreen btntext="Skilled trades + craft" />
            <Buttongreen btntext="Students" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
