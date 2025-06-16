import React from "react";
import { motion } from "framer-motion";

export function ChurnDNAEngineSection() {
  return (
    <div className="mt-32 bg-white/15 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 px-8 py-12">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🧬 ChurnDNA Engine
      </motion.h2>
      <motion.p
        className="text-center text-lg text-gray-600 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Dive into the intelligent layers of ChurnDNA.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg border border-white/20"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-600">📉 Churn Signals</h3>
          <p className="text-gray-500 text-sm">Visualize customer issues: network drops, low usage, complaints.</p>
        </motion.div>
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg border border-white/20"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-purple-600">🧠 AI Agentic Analysis</h3>
          <p className="text-gray-500 text-sm">Smart bots like RiskBot 🤖 scan and score customer behavior patterns.</p>
        </motion.div>
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg border border-white/20"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-green-600">🧩 Manual + Generative AI Rules</h3>
          <p className="text-gray-500 text-sm">Mix human logic and AI creativity to auto-build retention strategies.</p>
        </motion.div>
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg border border-white/20"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-pink-600">🧍 Digital Twins</h3>
          <p className="text-gray-500 text-sm">Each user gets a virtual avatar – track behavior, risk, and actions.</p>
        </motion.div>
      </div>
    </div>
  );
}
