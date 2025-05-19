import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";

const WhatWeBuild = () => {
  const { ref, controls } = useScrollAnimation();
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section ref={ref} className="h-full bg-[#fff] flex items-center p-[5vw]">
      <div className="flex gap-[4vmin] justify-center">
        <div className="h-[2px] w-20 bg-black flex"></div>
        <div className="space-y-24">
          <div>
            <motion.p
              className="uppercase font-light text-xl"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
            >
              what we build
            </motion.p>
            <motion.p
              className="capitalize font-bold text-2xl md:text-4xl md:w-2/3"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.1 }}
            >
              We look beyond your immediate construction needs to develop
              comprehensive solutions for each project
            </motion.p>
          </div>
          <motion.div
            className="flex gap-[4vmin] flex-wrap md:flex-nowrap"
            variants={fadeUp}
            initial="hidden"
            animate={controls}
          >
            <img
              src="https://www.pcl.com/content/dam/project-profiles-2025/160%20Front%20Street-High%20Res.jpg"
              alt=""
              className="object-cover md:w-[500px]"
            />
            <div className="space-y-5 md:space-y-10">
              <motion.ul
                className="hidden md:flex space-x-[4vmin] md:space-x-5"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1 }}
              >
                {["Buildings", "Civil", "Industrial", "Special Projects"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className={`font-bold ${
                        item === "Buildings"
                          ? "underline underline-offset-4 text-green-800"
                          : "text-green-800 relative inline-block cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full"
                      }`}
                    >
                      {item}
                    </li>
                  )
                )}
              </motion.ul>
              <motion.p
                className="uppercase font-normal text-sm"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1 }}
              >
                project showcase
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1 }}
                className="font-bold text-2xl md:text-4xl"
              >
                160 Front Street West
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1 }}
                className="text-black/60"
              >
                PCL’s network of construction professionals rise to the
                challenges associated with a diverse buildings portfolio,
                bringing added value to every educational, institutional,
                residential and commercial construction project. PCL offers
                substantial construction experience, competitive pricing,
                financial strength, integrity and a commitment to your project
                that is supported by a foundation of quality and workplace
                safety.
              </motion.p>

              <Link
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1 }}
                className="uppercase gap-5 text-green-600 flex items-center"
              >
                learn more <div className="h-[2px] w-12 bg-green-600"></div>
              </Link>

              <motion.button
                className="uppercase text-green-600 border border-green-600 p-4 rounded relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-900 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.6 }}
              >
                read more
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
