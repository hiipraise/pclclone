// components/sections/WhoWeAreSection.jsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WhoWeAreSection = () => {
  const { ref, controls } = useScrollAnimation();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const paragraphs = [
    "The flexibility to mobilize the right people to deliver unique solutions, an unwavering focus to delivering value to your business bottom line; and the capability to leverage innovation to meet emerging challenges and keep you at the fore. This is PCL.",
    "As a company that is 100 percent employee-owned, we collaborate and innovate to help our partners thrive. Our culture of ownership drives your success",
    "Whether you are in the buildings, civil, or industrial market, partnering with PCL means you're gaining a proven, reliable and trusted full-service partner with a mobile network of more than 5,200 employees, experts and seasoned professionals across Canada, the United States, Australia and the Caribbean. ",
    "From advanced digital construction technologies to innovative offsite modular manufacturing, to the cutting edge of sustainable construction, we lead the industry as we have for more than 100 years. We leverage the expertise from this vast experience to help our clients and partners build lasting legacies.",
  ];

  const stats = [
    { value: "119", label: "years in Operation" },
    { value: "$11.3B+", label: "Annual Construction Volume" },
    { value: "#10", label: "Rank in ENK's list of Top $400 Contractors" },
  ];

  return (
    <section ref={ref} className="h-full bg-white flex items-center p-[5vw]">
      <div className="flex gap-[4vmin] justify-center">
        <div className="h-[2px] w-20 bg-black flex" />
        <div className="space-y-[5vmin]">
          <div className="space-y-3">
            <motion.p
              className="uppercase font-light text-xl"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
            >
              who we are
            </motion.p>
            <motion.p
              className="capitalize font-bold text-2xl md:text-4xl"
              variants={fadeUp}
              initial="hidden"
              animate={controls}
            >
              focused and future ready
            </motion.p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-6">
            <div className="space-y-[3vmin] w-full">
              {paragraphs.map((text, index) => (
                <motion.p
                  key={index}
                  className="md:w-4/5"
                  variants={fadeUp}
                  initial="hidden"
                  animate={controls}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
              <motion.button
                className="uppercase text-green-600 border border-green-600 p-4 relative overflow-hidden before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-green-900 before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full hover:text-white z-10"
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.6 }}
              >
                About Us
              </motion.button>
            </div>
            <div className="space-y-5">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  variants={fadeUp}
                  initial="hidden"
                  animate={controls}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
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
