
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = false,
}: FadeInProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  const motionProps = {
    initial: {
      opacity: 0,
      ...directionOffset[direction],
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
    viewport: { once },
  };

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
