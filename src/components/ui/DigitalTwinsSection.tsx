import React from "react";
import { motion } from "framer-motion";

export function DigitalTwinsSection() {
  return (
    <div className="mt-32 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl border border-blue-200 px-10 py-14">
      <motion.h2
        className="text-5xl font-bold text-center text-blue-700"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🧍 Digital Twins
      </motion.h2>
      <motion.p
        className="text-center text-lg text-gray-700 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Each customer gets a virtual avatar – track behavior, risk, and actions in a personal profile.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-blue-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-700">📅 Behavior Timeline</h3>
          <p className="text-gray-600 text-sm">Track customer actions over time to identify churn risks.</p>
        </motion.div>
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-purple-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-purple-700">⚠️ Risk Zones</h3>
          <p className="text-gray-600 text-sm">Highlight areas where customers are most likely to churn.</p>
        </motion.div>
      </div>
    </div>
  );
}
