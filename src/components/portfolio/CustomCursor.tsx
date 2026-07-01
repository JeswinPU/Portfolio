import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);
  
  // Smooth spring for the aura glow
  const springConfig = { damping: 40, stiffness: 150, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 20%, transparent) 0%, transparent 60%)"
      }}
    />
  );
}
