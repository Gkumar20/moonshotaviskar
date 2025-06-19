import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function ChurnDNAEngineSection() {
  const router = useRouter();

  return (
    <div className="mt-16 md:mt-32 bg-white/15 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 px-6 md:px-8 py-8 md:py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🧬 ChurnDNA Engine
      </motion.h2>
      <motion.p
        className="text-center text-base md:text-lg text-gray-600 mt-2 md:mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Dive into the intelligent layers of ChurnDNA.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-8">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg border border-white/20 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => router.push("/churnDNA")}
        >
          <h3 className="text-lg md:text-xl font-semibold text-blue-600">📉 Churn Signals</h3>
          <p className="text-gray-500 text-sm md:text-base">Visualize customer issues: network drops, low usage, complaints.</p>
        </motion.div>
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg border border-white/20 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => router.push("/builder")}
        >
          <h3 className="text-lg md:text-xl font-semibold text-purple-600">🧠 AI Agentic Analysis</h3>
          <p className="text-gray-500 text-sm md:text-base">Smart bots like RiskBot 🤖 scan and score customer behavior patterns.</p>
        </motion.div>
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg border border-white/20 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          onClick={() => router.push("/digitaltwins")}
        >
          <h3 className="text-lg md:text-xl font-semibold text-pink-600">🧍 Digital Twins</h3>
          <p className="text-gray-500 text-sm md:text-base">Each user gets a virtual avatar – track behavior, risk, and actions.</p>
        </motion.div>
      </div>
      <div className="mt-6 md:mt-8 text-center">
        <button
          onClick={() => router.push("/churnDNA")}
          className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          <span className="animate-pulse">Explore ChurnDNA</span>
        </button>
      </div>
    </div>
  );
}
