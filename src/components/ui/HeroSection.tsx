import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center space-y-12">
      <motion.h1
        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🔮 Predict. ✨ Personalize. 💡 Prevent. <br /> – With ChurnDNA.
      </motion.h1>
      <motion.div
        className="flex flex-wrap gap-6 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={() => router.push("/churnDNA")}
          className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg backdrop-blur-sm bg-opacity-70"
        >
          Explore ChurnDNA
        </button>
        <button
          onClick={() => router.push("/churnDNA")}
          className="px-8 py-4 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-lg backdrop-blur-sm bg-opacity-70"
        >
          Try Demo
        </button>
        <button
          onClick={() => router.push("/aboutus")}
          className="px-8 py-4 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg backdrop-blur-sm bg-opacity-70"
        >
          How It Works
        </button>
      </motion.div>
    </div>
  );
}
