import React from "react";
import { motion } from "framer-motion";

interface SparklesCoreProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: string;
  particleColor?: string;
  particleDensity?: number;
  minSize?: number;
  maxSize?: number;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  className,
  background = "transparent",
  particleColor = "#ffffff",
  particleDensity = 60,
  minSize = 0.4,
  maxSize = 1.6,
  ...props
}) => {
  const sparkles = new Array(particleDensity).fill(0).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * (maxSize - minSize) + minSize}rem`,
    delay: `${Math.random() * 5}s`,
  }));

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background,
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
      {...props}
    >
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: particleColor,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: parseFloat(sparkle.delay),
          }}
        />
      ))}
    </div>
  );
};

export default SparklesCore;