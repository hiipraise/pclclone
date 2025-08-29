import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import AnimatedSection from "../animated/animatedsection";

const WhereWework = () => {
  const { ref, controls } = useScrollAnimation();
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return <section
        ref={ref}
        className="h-full bg-[#36383d] flex items-center sm:p-[5vw] px-[5vw] py-20"
      >
        <div className="flex gap-[4vmin] justify-center">
          <div className="h-[2px] hidden sm:flex w-20 bg-white"></div>
          <div className="space-y-12 flex justify-center items-end flex-wrap">
            <div className="flex flex-wrap md:flex-nowrap gap-[3vmin]">
              <div className="space-y-3">
                <motion.p
                  className="uppercase font-light text-xl text-white"
                  variants={fadeUp}
                  initial="hidden"
                  animate={controls}
                >
                  where we work
                </motion.p>
                <motion.p
                  className="text-white capitalize font-bold text-2xl md:text-4xl md:w-2/3"
                  variants={fadeUp}
                  initial="hidden"
                  animate={controls}
                  transition={{ delay: 0.1 }}
                >
                  helping you transform communities across the globe.
                </motion.p>
              </div>
              <motion.p
                className="text-white font-semibold md:w-2/3"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1 }}
              >
                No matter where or what you want to build, we mobilize the right
                resources and experts to drive value and realize your project
                goals. From coast to coast in communities across the country, if
                you're ready, we're ready.
              </motion.p>
            </div>
            <div className="space-y-16">
              <AnimatedSection />
            </div>
          </div>
        </div>
      </section>;
};

export default WhereWework;
