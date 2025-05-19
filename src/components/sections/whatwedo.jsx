import React from 'react'
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WhatWedo = () => {
    const { ref, controls } = useScrollAnimation();
      const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
  return (
    <section
        ref={ref}
        className="h-full bg-[#f9f9f9] flex items-center p-[5vw]"
      >
        <div className="flex gap-[4vmin] justify-center">
          <div className="h-[2px] w-20 bg-black flex"></div>
          <div className="space-y-14">
            <div className="space-y-3">
              <motion.p
                className="uppercase font-light text-xl text-black"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
              >
                what we do
              </motion.p>
              <motion.p
                className="text-black capitalize font-bold text-2xl md:text-4xl md:w-2/3"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                // transition={{ delay: 0.1 }}
              >
                we have a vision for the future of construction.
              </motion.p>
            </div>
            <motion.ul
              className="hidden md:flex space-x-[4vmin] md:space-x-5"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
            >
              {[
                "Buildings",
                "Civil Infrastructure",
                "Heavy Industrial",
                "Special Projects",
              ].map((item, i) => (
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
              ))}
            </motion.ul>
            <motion.div
              className="flex gap-[4vmin] flex-wrap md:flex-nowrap"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
            >
              <img
                src="https://www.pcl.com/content/dam/project-profiles-2024/BMO%20Centre%20Expansion%20MAIN.jpg"
                alt=""
                className="object-cover md:w-[50vw] md:h-[30vw]"
              />
              <div className="space-y-10">
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate={controls}
                  transition={{ delay: 0.1 }}
                  className="font-bold text-2xl md:text-4xl"
                >
                  Stunning structures, sustainably built
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
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate={controls}
                  transition={{ delay: 0.1 }}
                  className=""
                >
                  <Link className="uppercase gap-5 text-green-600 flex items-center">
                    learn more <div className="h-[2px] w-12 bg-green-600"></div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default WhatWedo