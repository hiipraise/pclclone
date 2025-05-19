import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Counter = ({ to, duration = 1, suffix = "", start = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startCount = 0;
    const end = parseInt(to);
    const totalSteps = 30;
    const increment = Math.ceil(end / totalSteps);
    const stepTime = (duration * 1000) / totalSteps;

    let current = startCount;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(timer);
  }, [to, duration, start]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const AnimatedSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUp}
      className="space-y-16"
    >
      <ul className="hidden md:flex space-x-[4vmin] md:space-x-5">
        {["Canada", "United States", "Caribbean", "Australia"].map(
          (item, i) => (
            <li
              key={i}
              className={`font-bold ${
                item === "Canada"
                  ? "underline underline-offset-4 text-yellow-400"
                  : "text-white relative inline-block cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-current before:transition-all before:duration-300 hover:before:w-full"
              }`}
            >
              {item}
            </li>
          )
        )}
      </ul>

      <div className="flex flex-wrap md:flex-nowrap justify-center space-y-8 md:space-x-36">
        <img
          src="https://www.pcl.com/content/dam/maps/Maps_Canada_US_Aus-2024-07-10_Canada.png"
          alt=""
          className="md:h-[45vw]"
        />
        <div className="space-y-10 md:space-y-24 text-center md:text-left">
          <div className="space-y-10">
            <div className="">
              <p className="text-yellow-400 text-5xl md:text-7xl font-semibold">
                <Counter to={100} suffix="%" duration={1} start={inView} />
              </p>
              <p className="text-white font-medium">Employee Owned</p>
            </div>
            <div>
              <p className="text-yellow-400 text-5xl md:text-7xl font-semibold">
                <Counter to={1000} suffix="+" duration={1} start={inView} />
              </p>
              <p className="text-white font-medium">Active Projects</p>
            </div>
          </div>
          <div className="space-y-4">
            <button className="uppercase px-5 py-2  bg-white relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-900 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10">
              view our offices
            </button>
            <p className="text-white">See the offices behind our projects</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedSection;
