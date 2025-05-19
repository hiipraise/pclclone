import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const insights = [
  {
    title: "PCL Construction Joins SickKids in the Fight for Every Birthday",
    category: "PRESS RELEASE",
    date: "May 14, 2025",
    location: "Toronto Buildings and Civil",
    image:
      "https://www.pcl.com/content/dam/news-release-images/DSC07895-Enhanced-NR_V2.jpg",
  },
  {
    title: "PCL Earns Key Nuclear Certifications",
    category: "PRESS RELEASE",
    location: "Toronto Buildings and Civil",
    date: "Apr 22, 2025",
    image:
      "https://www.pcl.com/content/dam/news-release-images/24UW-PlanePull-PCL(2)-min%20(2).jpg",
  },
  {
    title: "How to Build a People-First Construction Safety Program",
    category: "AWARDS",
    date: "Apr 22, 2025",
    location: "North America Headquarters",
    image:
      "https://www.pcl.com/content/dam/news-release-images/25_Top-100_GREENEST_Newsroom_V1_(1920x1080)_EN%20(2)-min.jpg",
  },
  {
    title: "The Future of Sustainable Buildings",
    category: "PRESS RELEASE",
    date: "April 29, 2025",
    location: "North America Headquarters",
    image:
      "https://www.pcl.com/content/dam/news-release-images/United%20Way.jpg",
  },
  {
    title:
      "Minimal Disruption, Maximum Care: Prioritizing Patients while Building Hospitals",
    category: "PRESS RELEASE",
    location: "North America Headquarters",
    date: "May 15, 2025",
    image:
      "https://www.pcl.com/content/dam/news-release-images/Andrew%20Moles.jpg",
  },
  {
    title: "PCL Earns Key Nuclear Certifications",
    category: "AWARDS",
    date: "May 7, 2025",
    location: "North America Headquarters",
    image:
      "https://www.pcl.com/content/dam/news-release-images/CCSC-Logo-01.jpg",
  },
  {
    title: "How to Build a People-First Construction Safety Program",
    category: "PRESS RELEASE",
    date: "May 7, 2025",
    location: "Toronto Buildings and Civil",
    image:
      "https://www.pcl.com/content/dam/news-release-images/Safety%20Award.jpg",
  },
  {
    title: "The Future of Sustainable Buildings",
    category: "PRESS RELEASE",
    date: "April 29, 2025",
    location: "Toronto Buildings and Civil",
    image:
      "https://www.pcl.com/content/dam/news-release-images/ARTIST%20RENDERING%20QEII%20HIEP%20(Mar%2027%202024)%20FINAL%20(1).jpg",
  },
  {
    title: "The Future of Sustainable Buildings",
    category: "AWARDS",
    date: "April 29, 2025",
    location: "North America Headquarters",
    image:
      "https://www.pcl.com/content/dam/news-release-images/Alberta's%20Top%20Employers%202025%20wide.jpg",
  },
];

// Helper: Chunk array into slides
const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

// Hook: Get screen width to determine mobile/desktop
const useScreenSize = () => {
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

export default function LatestNews() {
  const screenWidth = useScreenSize();
  const isMobile = screenWidth < 768;
  const itemsPerSlide = isMobile ? 1 : 3;
  const slides = chunkArray(insights, itemsPerSlide);

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="max-w-screen-xl mx-auto p-[5vw] space-y-7">
      {/* Header & Desktop Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
        <h2 className="text-2xl md:text-4xl font-bold">Latest News</h2>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dots */}
          <div className="flex space-x-2">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-green-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
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
              onClick={handleNext}
              disabled={index === slides.length - 1}
              className={`p-2 border rounded-full transition ${
                index === slides.length - 1
                  ? "cursor-not-allowed opacity-40"
                  : "hover:bg-green-900 hover:text-white"
              }`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Slides */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={`grid gap-6 ${
              isMobile ? "grid-cols-1" : "grid-cols-3"
            } min-h-[354px] md:min-h-0`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {slides[index].map((item, i) => (
              <div key={i} className="bg-white shadow-sm overflow-hidden">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:border-l-8 hover:border-b-8 border-yellow-500"
                />
                <div className="p-4">
                  <p className="text-sm uppercase font-semibold text-gray-500">
                    {item.category}
                  </p>
                  <Link className="hover:underline hover:text-green-950 mt-2 text-lg font-bold">
                    {item.title}
                  </Link>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.location} | {item.date}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Controls */}
      <div className="flex flex-col items-center gap-5 md:hidden">
        <div className="flex space-x-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-green-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
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
            onClick={handleNext}
            disabled={index === slides.length - 1}
            className={`p-2 border rounded-full transition ${
              index === slides.length - 1
                ? "cursor-not-allowed opacity-40"
                : "hover:bg-green-900 hover:text-white"
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
