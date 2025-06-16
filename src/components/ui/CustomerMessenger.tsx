"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

function DigitalTwinsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const customerTwins = [
    {
      name: "Alice",
      churnRisk: "High",
      usage: 120,
      complaints: 3,
      strategy: "Offer Loyalty Discount & Personal Call",
    },
    {
      name: "Bob",
      churnRisk: "Medium",
      usage: 210,
      complaints: 1,
      strategy: "Send Personalized Email & Feedback Form",
    },
    {
      name: "Charlie",
      churnRisk: "Low",
      usage: 300,
      complaints: 0,
      strategy: "Continue Current Engagement Plan",
    },
    {
      name: "Diana",
      churnRisk: "High",
      usage: 80,
      complaints: 4,
      strategy: "Immediate Callback & Incentivized Offer",
    },
    {
      name: "Ethan",
      churnRisk: "Medium",
      usage: 160,
      complaints: 2,
      strategy: "Monitor Usage, Send App Tips",
    },
  ];

  return (
    <div className="mt-20 px-6 py-10 bg-white min-h-screen text-gray-900 w-full">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl font-extrabold text-center mb-12"
      >
        🧬 Digital Twins: AI-Driven Churn Prevention
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className=" mx-auto bg-white border border-gray-200 p-8 rounded-2xl shadow-xl"
      >
        <p className="text-lg mb-6 leading-relaxed">
          Your AI-powered Digital Twins are designed to fight churn by mimicking real customer behavior, usage trends, and risk factors.
          Below is a real-time dashboard showcasing proactive strategies tailored for each customer`s twin.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {customerTwins.map((twin, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-gradient-to-br from-white to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">👤 {twin.name}</h3>
              <p>📉 <strong>Risk:</strong> {twin.churnRisk}</p>
              <p>📊 <strong>Usage:</strong> {twin.usage} mins</p>
              <p>📢 <strong>Complaints:</strong> {twin.complaints}</p>
              <p className="mt-2">🛠️ <strong>Strategy:</strong> {twin.strategy}</p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 p-4 bg-indigo-100 rounded-xl text-sm text-indigo-800 shadow-sm"
              >
                🤖 <strong>AI Message Sent:</strong> Hello {twin.name}, we’ve noticed some recent activity. {twin.strategy}. Let’s stay connected! 💖
              </motion.div>
            </div>
          ))}
        </motion.div>

       
      </motion.div>
    </div>
  );
}

export default DigitalTwinsPage;