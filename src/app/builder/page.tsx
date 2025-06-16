"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import AIConfigurator from "@/components/ui/AIConfigurator";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;





export default function AIAnalysisPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-800 px-8 py-20 space-y-20 overflow-hidden">
      <div className="relative h-[40rem] bg-gradient-to-br from-indigo-900 via-black to-gray-900 overflow-hidden rounded-md">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <MotionH1
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            🧠 AI Analysis Toolkit
          </MotionH1>
        </div>
      </div>

      <MotionP
        className="mt-4 text-lg text-gray-600 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Customize churn insights with DIY configurations powered by AI
      </MotionP>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {[
          {
            icon: "📶",
            title: "Select Signals",
            desc: "Choose churn indicators relevant to your business",
          },
          {
            icon: "🤖",
            title: "Pick AI Model",
            desc: "Apply ML/AI models to detect churn probability",
          },
          {
            icon: "⚙️",
            title: "Configure Retention",
            desc: "Set personalized churn-handling strategies",
          },
          {
            icon: "📦",
            title: "Export Strategy",
            desc: "Download configuration as JSON or summary PDF",
          },
        ].map(({ icon, title, desc }) => (
          <MotionDiv
            key={title}
            className="bg-white p-6 rounded-xl shadow-xl border hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="text-4xl mb-2">{icon}</div>
            <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
          </MotionDiv>
        ))}
      </div>

      <AIConfigurator />
    </div>
  );
}
