"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const churnSignalChartData = {
  labels: ["Network Drops", "Low Usage", "Late Payments", "Negative Feedback", "Frequent Complaints"],
  datasets: [
    {
      label: "Signal Intensity",
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
    },
  ],
};

export default function ChurnSignalsPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-800 px-8 py-20 space-y-20 overflow-hidden">
      <div className="text-center">
        <MotionH1
          className="text-4xl md:text-6xl font-bold text-blue-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📉 Churn Signals Overview
        </MotionH1>
        <MotionP
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Visualize and analyze customer churn triggers with dynamic diagnostics
        </MotionP>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "📶 Network Dropouts",
            value: "23% affected",
            desc: "Frequent disconnections impacting customer retention.",
          },
          {
            title: "📉 Low Engagement",
            value: "42% idle",
            desc: "Inactive usage patterns identified from user logs.",
          },
          {
            title: "😠 Complaints Spike",
            value: "+61% rise",
            desc: "Increased support cases and customer dissatisfaction.",
          },
          {
            title: "⏳ Late Payments",
            value: "17% accounts",
            desc: "Missed billing cycles and recurring delays.",
          },
          {
            title: "💬 Negative Feedback",
            value: "35% surveys",
            desc: "Customer NPS scores dipping below thresholds.",
          },
          {
            title: "🔄 Plan Switches",
            value: "9% churn-prep",
            desc: "Users shifting to lower-tier plans or exiting.",
          },
        ].map(({ title, value, desc }) => (
          <MotionDiv
            key={title}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
            <p className="text-gray-700 text-lg font-semibold">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{desc}</p>
          </MotionDiv>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <div className="bg-blue-50 p-10 rounded-xl shadow-inner md:col-span-1">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">📊 Signal Intensity Chart</h2>
          <div className="w-full h-64">
            <Bar data={churnSignalChartData} />
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-md md:col-span-1">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🔍 Real-time Diagnostics</h3>
          <table className="w-full border-collapse border border-gray-200 rounded-lg text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="border border-gray-300 px-4 py-2 text-left">Metric</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Avg complaint resolution time</td>
                <td className="border border-gray-300 px-4 py-2">36 hours</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Customer activity dip after week</td>
                <td className="border border-gray-300 px-4 py-2">Week 3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Support request escalation rate</td>
                <td className="border border-gray-300 px-4 py-2">28%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Flagged churn risk segment</td>
                <td className="border border-gray-300 px-4 py-2">Tier B - Urban 25-34</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🗺️ Churn Geo-Map</h3>
          <div className="h-64 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000000!2d78.9629!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM1JzM3LjMiTiA3OMKwNTcnNDYuMyJF!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 mt-20 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">📂 Data Ingestion & Model Insights</h3>
        <p className="text-gray-600 text-sm">
          Upload churn prediction models or customer data snapshots. View predictive churn score, probability matrix, and triggered signal summary.
        </p>
        <div className="mt-4 border-2 border-dashed border-gray-300 p-10 rounded-lg text-center text-gray-500">
          Drag & drop or click to upload CSV / Excel
        </div>
      </div>
    </div>
  );
}