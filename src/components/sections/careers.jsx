import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import YouTubeWithThumbnail from "../youtubevideo/youtubewiththumbnail";

const Careers = () => {
    const { ref, controls } = useScrollAnimation();
      const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
  return <section
        ref={ref}
        className="h-full w-full bg-[#f9f9f9] flex items-center p-[5vw]"
      >
        <div className="flex flex-col gap-[6vmin] w-full">
          <div className="flex gap-[4vmin] justify-start">
            <div className="h-[2px] w-10 bg-black flex"></div>
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
              <button className="bg-green-900 text-white font-bold uppercase px-10 py-3 flex-grow relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-950 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10">
                Professionals
              </button>
              <button className="bg-green-900 text-white font-bold uppercase px-10 py-3 flex-grow relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-950 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10">
                skilled trades + craft
              </button>
              <button className="bg-green-900 text-white font-bold uppercase px-10 py-3 flex-grow relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-950 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10">
                students
              </button>
            </div>
          </motion.div>
        </div>
      </section>;
};

export default Careers;
