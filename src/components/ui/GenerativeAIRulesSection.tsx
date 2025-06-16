import React from "react";
import { motion } from "framer-motion";

export function GenerativeAIRulesSection() {
  return (
    <div className="mt-32 bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl shadow-xl border border-purple-200 px-10 py-14">
      <motion.h2
        className="text-5xl font-bold text-center text-purple-700"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🧩 Generative AI Rules
      </motion.h2>
      <motion.p
        className="text-center text-lg text-gray-700 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Mix human logic and AI creativity to auto-build retention strategies that adapt and learn.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-green-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-green-700">🧞 AI Assistant</h3>
          <p className="text-gray-600 text-sm">Let AI craft retention strategies tailored to your needs.</p>
        </motion.div>
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-pink-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-pink-700">🔧 Rule Builder</h3>
          <p className="text-gray-600 text-sm">Create custom rules with a low-code interface.</p>
        </motion.div>
      </div>
    </div>
  );
}
