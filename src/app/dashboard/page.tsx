"use client";

import React from "react";
import { motion } from "framer-motion";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const customerChurnStats = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Churn Rate (%)",
      data: [3, 4, 6, 5, 8, 7],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      fill: true,
    },
  ],
};

const churnBehaviorData = {
  labels: ["Low Usage", "Network Issues", "Late Payments", "High Complaints"],
  datasets: [
    {
      label: "Contributing Factors",
      data: [30, 25, 20, 25],
      backgroundColor: [
        "rgba(255, 159, 64, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
    },
  ],
};

export default function ChurnDNA() {

  return (
    <div className="relative min-h-screen bg-white text-gray-800 px-6 py-40 space-y-16 overflow-hidden">
      {/* Title */}
      <div className="relative z-10 w-full flex justify-center items-center">
        <MotionH1
          className="text-4xl md:text-6xl font-bold text-center text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🧬 ChurnDNA Engine Live Dashboard
        </MotionH1>
      </div>

      <MotionP
        className="relative z-10 text-center text-lg md:text-xl text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Analyze behavioral patterns and uncover churn signals with futuristic insights
      </MotionP>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-6 rounded-xl shadow-lg bg-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Churn Rate Trend</h3>
          <Line data={customerChurnStats} />
        </div>
        <div className="p-6 rounded-xl shadow-lg bg-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Customer Behavior Patterns</h3>
          <Bar data={churnBehaviorData} />
        </div>
      </div>

      {/* AI Modules Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "📉 Churn Signals",
            content:
              "Visualize customer issues: network drops, low usage, complaints – all feeding the churn brain.",
            
          },
          {
            title: "🧠 AI Agentic Analysis",
            content:
              "Smart bots like RiskBot 🤖 scan and score customer behavior patterns in real time.",
          },
          {
            title: "🧩 Manual + Generative AI Rules",
            content:
              "Mix human logic and AI creativity to auto-build retention strategies that adapt and learn.",
          },
          {
            title: "🧍 Digital Twins",
            content:
              "Each user gets a virtual avatar – track behavior, risk, and actions in a personal profile.",
          },
        ].map(({ title, content }, idx) => (
          <MotionDiv
            key={title}
            className="cursor-pointer bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-600 text-sm">{content}</p>
          </MotionDiv>
        ))}
      </div>

      {/* Churn Signals Section */}
      {(
        <div className="mt-24 p-10 bg-blue-50 border border-blue-200 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">📉 Churn Signals Deep Dive</h2>
          <p className="text-gray-700 mb-4">
            This section provides deeper insights into churn-causing signals such as poor service quality, complaint frequency,
            and declining user engagement. Use these diagnostics to take proactive action.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Drop in weekly activity beyond 30%</li>
            <li>High number of unresolved complaints</li>
            <li>Frequent service disruptions in specific regions</li>
            <li>Negative sentiment from support interactions</li>
          </ul>
        </div>
      )}

      {/* Diagnostic Customer Explorer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Diagnostic Tracker</h3>
          <p className="text-sm text-gray-600">
            Explore customer history, lifetime journey, escalations, resolution status, engagement graphs, risk score, etc.
          </p>
          <ul className="mt-4 text-sm text-gray-500 space-y-2">
            <li>• Last login activity: 2 days ago</li>
            <li>• Average usage/week: 32 mins</li>
            <li>• Support cases in 30 days: 4</li>
            <li>• Engagement score: 68%</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Excel / Model Upload</h3>
          <div className="border-2 border-dashed border-gray-300 p-10 text-center rounded-lg">
            <p className="text-gray-500">Drag & Drop your churn model data or click to upload Excel files.</p>
          </div>
        </div>
      </div>
    </div>
  );
}