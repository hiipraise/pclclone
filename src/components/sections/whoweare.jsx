// components/sections/WhoWeAreSection.jsx
import { motion } from "framer-motion";
import { paragraphs, stats } from "../../data/pcldata";

const WhoWeAreSection = () => {
  return (
    <section className="h-full bg-white flex items-center sm:p-[5vw] px-[5vw] py-20">
      <div className="flex gap-[4vmin] justify-center">
        <div className="h-[2px] hidden sm:flex w-20 bg-black" />
        <div className="space-y-[5vmin]">
          <div className="space-y-3">
            <motion.p className="uppercase font-light text-xl">
              who we are
            </motion.p>
            <motion.p className="capitalize font-bold text-2xl md:text-4xl">
              focused and future ready
            </motion.p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <div className="space-y-[3vmin] w-full">
              {paragraphs.map((text, index) => (
                <motion.p key={index}>{text}</motion.p>
              ))}
              <motion.button className="uppercase text-green-600 border border-green-600 p-4 relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-900 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10">
                About Us
              </motion.button>
            </div>
            <div className="space-y-5">
              {stats.map((item, index) => (
                <motion.div key={index} className="space-y-2">
                  <p className="text-green-900 font-bold text-2xl">
                    {item.value}
                  </p>
                  <p className="font-bold text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
