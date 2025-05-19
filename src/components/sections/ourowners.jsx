import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel from "../owners/owners";

const OurOwners = () => {
  const { ref, controls } = useScrollAnimation();
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section
      ref={ref}
      className="h-full w-full bg-[#fff] flex items-center p-[5vw]"
    >
      <div className="space-y-24">
        <div className="flex gap-[4vmin] justify-center">
          <div className="h-[2px] w-20 bg-black flex"></div>
          <div className="flex flex-wrap md:flex-nowrap gap-[5vmin]">
            <div className="flex flex-col space-y-3 w-full">
              <motion.p
                className="uppercase font-light text-xl text-black"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
              >
                our owners
              </motion.p>
              <motion.p
                className="text-black capitalize font-bold text-2xl md:text-4xl"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1 }}
              >
                invested in your success
              </motion.p>
            </div>
            <div className=" flex flex-col space-y-3">
              <motion.p
                className="text-black/60 font-normal"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1 }}
              >
                As owners, we are more accountable to you and more invested in
                your success. Across all levels of our organization, our
                experienced, innovative solution providers put our culture of
                ownership to work for you. When you succeed, we succeed.
              </motion.p>

              <Link
                className="uppercase gap-5 text-green-600 flex items-center"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1 }}
              >
                learn more <div className="h-[2px] w-12 bg-green-600"></div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default OurOwners;
