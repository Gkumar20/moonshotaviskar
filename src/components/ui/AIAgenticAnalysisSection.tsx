import React from "react";
import { motion } from "framer-motion";

export function AIAgenticAnalysisSection() {
  return (
    <div className="mt-16 md:mt-32 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl border border-blue-200 px-6 md:px-10 py-10 md:py-14">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-blue-700"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🧠 AI Agentic Analysis
      </motion.h2>
      <motion.p
        className="text-center text-base md:text-lg text-gray-700 mt-4 md:mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Harness the power of AI to analyze customer behavior and predict churn risks effectively.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 md:mt-10">
        <motion.div
          className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border border-blue-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-blue-700">📊 Behavioral Insights</h3>
          <p className="text-sm text-gray-600 mt-2">Analyze patterns in customer interactions to identify churn signals.</p>
        </motion.div>
        <motion.div
          className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border border-green-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-green-700">🤖 Predictive Models</h3>
          <p className="text-sm text-gray-600 mt-2">Leverage AI models to predict customer churn and suggest actions.</p>
        </motion.div>
      </div>
    </div>
  );
}
