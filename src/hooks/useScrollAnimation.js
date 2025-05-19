// hooks/useScrollAnimation.js
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false, // <-- allow re-triggering
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // <-- allows reverse animation on scroll up
    }
  }, [controls, inView]);

  return { ref, controls };
};
