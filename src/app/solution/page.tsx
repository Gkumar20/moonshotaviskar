"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const MotionH1 = motion("h1");
const MotionP = motion("p");

export default function Solution() {
  const retentionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Before ChurnDNA",
        data: [50, 52, 49, 48, 47, 45],
        borderColor: "#ef4444",
        backgroundColor: "#fecaca",
        tension: 0.3,
      },
      {
        label: "After ChurnDNA",
        data: [55, 62, 68, 72, 80, 88],
        borderColor: "#3b82f6",
        backgroundColor: "#bfdbfe",
        tension: 0.3,
      },
    ],
  };

  const revenueBarData = {
    labels: ["Q1", "Q2"],
    datasets: [
      {
        label: "Revenue ($M)",
        data: [1.2, 2.1],
        backgroundColor: ["#facc15", "#22c55e"],
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen py-40 px-4 md:px-16">
      {/* Header */}
      <MotionH1
        className="text-5xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Solution & Impact 📊
      </MotionH1>
      <MotionP
        className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        A data-backed transformation journey using ChurnDNA AI-based models, improving customer retention by over 80%.
      </MotionP>

      {/* Data Table */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">📋 Before vs After</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Before Table */}
          <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-center mb-4">Before</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700 rounded-xl">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="p-4 text-left font-semibold">Metric</th>
                    <th className="p-4 text-left font-semibold">Value</th>
                    <th className="p-4 text-left font-semibold">Issues</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-600 hover:bg-gray-700 transition">
                    <td className="p-4">Churn Rate</td>
                    <td className="p-4">45%</td>
                    <td className="p-4">High customer dissatisfaction</td>
                  </tr>
                  <tr className="border-t border-gray-600 hover:bg-gray-700 transition">
                    <td className="p-4">Retention</td>
                    <td className="p-4">55%</td>
                    <td className="p-4">Lack of engagement</td>
                  </tr>
                  <tr className="border-t border-gray-600 hover:bg-gray-700 transition">
                    <td className="p-4">Revenue</td>
                    <td className="p-4">$1.2M</td>
                    <td className="p-4">Low subscription renewals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* After Table */}
          <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-center mb-4">After</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-blue-500 rounded-xl">
                <thead>
                  <tr className="bg-blue-700">
                    <th className="p-4 text-left font-semibold">Metric</th>
                    <th className="p-4 text-left font-semibold">Value</th>
                    <th className="p-4 text-left font-semibold">Solutions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-blue-500 hover:bg-blue-600 transition">
                    <td className="p-4">Churn Rate</td>
                    <td className="p-4">15%</td>
                    <td className="p-4">AI-driven churn prediction</td>
                  </tr>
                  <tr className="border-t border-blue-500 hover:bg-blue-600 transition">
                    <td className="p-4">Retention</td>
                    <td className="p-4">88%</td>
                    <td className="p-4">Personalized engagement campaigns</td>
                  </tr>
                  <tr className="border-t border-blue-500 hover:bg-blue-600 transition">
                    <td className="p-4">Revenue</td>
                    <td className="p-4">$2.1M</td>
                    <td className="p-4">Upselling and cross-selling strategies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Line Chart and Bar Chart Side by Side */}
      <div className="mb-20 flex flex-col md:flex-row gap-6">
        {/* Line Chart */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">📈 Retention Trend</h2>
          <div className="bg-gray-50 rounded-xl shadow-md p-6">
            <Line data={retentionData} />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">💰 Revenue Comparison</h2>
          <div className="bg-gray-50 rounded-xl shadow-md p-6">
            <Bar data={revenueBarData} />
          </div>
        </div>
      </div>

      {/* Geo Map Impact */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">🌍 Global Impact Map</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Map Section */}
          <div className="flex-1">
            <Image
              className="rounded-xl shadow-lg w-full"
              src="https://climatecommunication.yale.edu/wp-content/uploads/2021/07/image1-1.png"
              alt="World map impact"
              width={1200}
              height={600}
            />
            <p className="text-center text-gray-500 mt-4 text-sm">
              Countries highlighted where churn dropped drastically after implementing AI.
            </p>
          </div>

          {/* Table Section */}
          <div className="flex-1 bg-gray-50 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-center mb-4">Impact by Subcontinent</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-xl">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-4 text-left font-semibold">Subcontinent</th>
                    <th className="p-4 text-left font-semibold">Impact (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300 hover:bg-gray-100 transition">
                    <td className="p-4">North America</td>
                    <td className="p-4">85%</td>
                  </tr>
                  <tr className="border-t border-gray-300 hover:bg-gray-100 transition">
                    <td className="p-4">Europe</td>
                    <td className="p-4">78%</td>
                  </tr>
                  <tr className="border-t border-gray-300 hover:bg-gray-100 transition">
                    <td className="p-4">Asia</td>
                    <td className="p-4">72%</td>
                  </tr>
                  <tr className="border-t border-gray-300 hover:bg-gray-100 transition">
                    <td className="p-4">South America</td>
                    <td className="p-4">68%</td>
                  </tr>
                  <tr className="border-t border-gray-300 hover:bg-gray-100 transition">
                    <td className="p-4">Africa</td>
                    <td className="p-4">60%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Real Impact Images */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white border shadow-md rounded-xl overflow-hidden">
          <Image
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*STk8K9nT5mYa1HXM8wXwxw.png"
            alt="AI Retention Dashboard"
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
          <p className="text-center p-3 text-gray-600 text-sm">
            AI-powered retention dashboard showing real-time insights.
          </p>
        </div>
        <div className="bg-white border shadow-md rounded-xl overflow-hidden">
          <Image
            src="https://www.slideteam.net/media/catalog/product/cache/1280x720/c/u/customer_lifecycle_stages_funnel_representation_slide01.jpg"
            alt="Customer Lifecycle"
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
          <p className="text-center p-3 text-gray-600 text-sm">
            Lifecycle funnel enhanced through ChurnDNA engagement strategy.
          </p>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mt-20 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">🗣️ Your Thoughts?</h2>
        <p className="text-gray-500 mb-6">
          We`d love to hear your opinion or suggestions about this solution page.
        </p>
        <textarea
          placeholder="Write your feedback or opinion..."
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
        ></textarea>
        <button className="mt-4 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition">
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
