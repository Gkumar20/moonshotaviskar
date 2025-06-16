import React from "react";
import { motion } from "framer-motion";

export function RoadmapSection() {
  return (
    <div className="mt-20 max-w-screen mx-auto text-center text-lg text-gray-300 rounded-3xl bg-white/15 backdrop-blur-lg shadow-lg border border-white/30">
      <motion.h2
        className="text-3xl font-semibold text-white mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🌐 The Roadmap
      </motion.h2>
      <motion.ul
        className="space-y-6 text-left bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <li>🧪 <strong>ChurnDNA Engine</strong> – Understand churn signals, AI insights, and digital twin behaviors.</li>
        <li>📊 <strong>Live Dashboard</strong> – Demo simulated insights and user journeys with risk visuals.</li>
        <li>🛠️ <strong>DIY Builder</strong> – Build your own AI strategy with visual tools and GenAI.</li>
        <li>🚀 <strong>Final Impact</strong> – Show business transformation, outcomes, and simulated results.</li>
      </motion.ul>
    </div>
  );
}
