import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TriciaImg from "../../assets/image/Gibney_Tricia_Saskatoon.jpg";
import MendesImg from "../../assets/image/Mendes_Pedro_Ind_Hori.jpg";
import ChiassonImg from "../../assets/image/Chiasson_Marc_CGY_2-51.jpg";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

const people = [
  {
    name: "Tricia Pollock",
    role: "HSE Manager",
    description:
      "Tricia loves the rattle and hum of a construction site and seeing the inner workings of a job site. She prides herself on her people skills, knowing that workers can sit down with her to talk about any concerns. At the end of the day, Tricia's goal is to send everyone home safely every day.",
    image: TriciaImg,
  },
  {
    name: "Marc Chiasson",
    role: "Vice President, Civil Infrastructure",
    description:
      "Marc provides strategic assistance on major civil projects across Canada. He has been an integral part of growing our civil expertise in transportation and water and wastewater infrastructure. His 35 years of experience in estimating, risk management and operations a wealth of knowledge to deliver quality projects for our clients.",
    image: ChiassonImg,
  },
  {
    name: "Pedro Mendes",
    role: "Senior Superintendent",
    description:
      "Pedro is an expert in welding and pipefitting with more than 28 years of experience in his trade. Over the years, he's enjoyed working with great people who share his work philosophies and who he can put his full confidence in. Pedro likes knowing the structures he's worked on will be around for many years to come.",
    image: MendesImg,
  },
];

const variants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

export default function Carousel() {
  const { ref, controls } = useScrollAnimation();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    if (
      (newDirection === -1 && index > 0) ||
      (newDirection === 1 && index < people.length - 1)
    ) {
      setDirection(newDirection);
      setIndex((prev) => prev + newDirection);
    }
  };

  return (
    <div
      ref={ref}
      className="w-full max-w-6xl mx-auto bg-[#f9f9f9] shadow-md flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
    >
      {/* Image Section - appears first on mobile, second on desktop */}
      <div className="order-1 md:order-2 flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={people[index].image}
            src={people[index].image}
            alt={people[index].name}
            className="w-full md:h-screen object-cover"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        </AnimatePresence>
      </div>

      {/* Text Section - appears second on mobile, first on desktop */}
      <div className="order-2 md:order-1 flex-1 p-[5vw]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <h2 className="text-3xl font-bold">{people[index].name}</h2>
            <p className="text-lg font-semibold mt-2">{people[index].role}</p>
            <p className="mt-4 text-gray-700 max-w-xl">
              {people[index].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-6 mt-8 md:mt-24">
          <button
            onClick={() => paginate(-1)}
            disabled={index === 0}
            className={`p-2 border rounded-full transition ${
              index === 0
                ? "cursor-not-allowed opacity-40"
                : "hover:bg-green-900 hover:text-white"
            }`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={index === people.length - 1}
            className={`p-2 border rounded-full transition ${
              index === people.length - 1
                ? "cursor-not-allowed opacity-40"
                : "hover:bg-green-900 hover:text-white"
            }`}
          >
            <ChevronRight />
          </button>

          <div className="flex gap-2 ml-4">
            {people.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-green-700" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
