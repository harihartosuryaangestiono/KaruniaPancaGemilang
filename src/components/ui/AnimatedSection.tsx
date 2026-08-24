"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 30 };
      case "down":
        return { opacity: 0, y: -30 };
      case "left":
        return { opacity: 0, x: 30 };
      case "right":
        return { opacity: 0, x: -30 };
      case "none":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Smooth custom cubic bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedStagger: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = "", staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedStaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
