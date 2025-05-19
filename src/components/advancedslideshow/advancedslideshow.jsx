import React, { useState, useEffect, useRef } from "react";
import { slides, slidesUp } from "../../data/pcldata";
import HomeSlideupP from "../hometext/homeslideupP";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const AdvancedSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const circleRef = useRef(null); // Ref for the circle element

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setDirection("next");
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    clearTimeout(timeoutRef.current); // Clear any pending timeout immediately
  };

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 1200); // Adjust to match transition times

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(nextSlide, 5000);
      // Restart the circle animation
      if (circleRef.current) {
        circleRef.current.style.animationPlayState = "running";
      }
    } else {
      // Pause the circle animation
      if (circleRef.current) {
        circleRef.current.style.animationPlayState = "paused";
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isPlaying]);

  useEffect(() => {
    // Reset circle animation when the slide changes and it's playing
    if (isPlaying && circleRef.current) {
      circleRef.current.style.animation = "none"; // Temporarily remove animation
      void circleRef.current.offsetWidth; // Trigger reflow to reset
      circleRef.current.style.animation = "borderGrowCircle 5s linear forwards"; // Re-apply animation
    }
  }, [currentIndex, isPlaying]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans object-cover bg-center bg-cover">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full opacity-0 z-1 transition-opacity duration-1000 ease ${
            index === currentIndex ? "opacity-100 z-2" : ""
          } ${
            animating
              ? index === currentIndex
                ? direction === "next"
                  ? index === 0
                    ? "animate-slideInLeft"
                    : index === 1
                    ? "animate-slideInBottom"
                    : "animate-slideInRight"
                  : direction === "prev"
                  ? index === 0
                    ? "animate-slideInRight"
                    : index === 1
                    ? "animate-slideOutBottom"
                    : "animate-slideOutLeft"
                  : ""
                : ""
              : ""
          }`}
          data-index={index}
        >
          <div
            className={`absolute w-full h-full bg-green-200 opacity-0 pointer-events-none transition-transform duration-400 ease-in-out ${
              index === currentIndex
                ? "translate-y-0 opacity-20"
                : "translate-y-full"
            }`}
          />
          <div
            className={`absolute w-full h-full bg-green-200 opacity-0 pointer-events-none transition-transform duration-400 ease-in-out ${
              index === currentIndex &&
              (index === 0 || index === slides.length - 1)
                ? "translate-x-0 translate-y-0 opacity-20"
                : "translate-x-[-100%] translate-y-[-100%]"
            }`}
          />
          <img
            src={slide.url}
            alt={slide.alt}
            className={`w-full h-full object-cover transform transition-transform duration-[4s] linear ${
              index === currentIndex ? "scale-[1.3]" : "scale-100"
            }`}
          />
        </div>
      ))}

      <div className="flex absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 z-30">
        <HomeSlideupP
          headertext={slidesUp[currentIndex].headertext}
          headerdetail={slidesUp[currentIndex].headerdetail}
          readmorelink={slidesUp[currentIndex].readmorelink}
        />
      </div>

      <div className="hidden md:flex absolute bottom-10 left-0 md:left-10 z-40 gap-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`text-white font-bold text-lg py-2 px-4  rounded-md border-t-3 border-transparent relative ${
              index === currentIndex ? "border-orange-500" : ""
            }`}
            data-index={index}
          >
            {slide.text}
            {index === currentIndex && (
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-orange-500 animate-borderGrow" />
            )}
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-10 right-10 z-40">
        <button
          onClick={togglePlay}
          className="relative w-12 h-12 rounded-full bg-white text-black font-bold flex items-center justify-center focus:outline-none"
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="lg" />
          {isPlaying && (
            <span
              ref={circleRef}
              className="absolute inset-0 rounded-full border-2 border-orange-500 pointer-events-none"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default AdvancedSlideshow;
