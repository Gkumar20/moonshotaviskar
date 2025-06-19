// app/about/page.tsx or /about-us/page.tsx
"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white py-40 text-black px-6 py-12 md:px-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          🧬 MoonShot Aviskar – Powering the Do-It-Yourself Telco
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">
          Born from a Moonshot. Engineered at Aviskar. Designed to transform the future of customer retention through creativity, code, and collective genius.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">🚀 Our Mission</h2>
          <p className="text-gray-700 text-base md:text-lg">
            We envisioned a future where **Telcos build their own AI-powered retention stacks** without relying on massive enterprise suites. Our mission: democratize churn prevention through intuitive design, **Generative AI**, and **Digital Twins**.
          </p>
        </div>
        <Image
          src="https://cdn1-public.infotech.com/infographics/uploads/45738/DESIGN-5895-HERO-Gen-AI-in-Digital-Twins-1920x1080-v1-1_original.png"
          width={500}
          height={500}
          alt="ChurnDNA"
          className="rounded-xl shadow-xl w-full max-w-xs md:max-w-full mx-auto"
        />
      </section>

      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">🧑‍💻 The Team Behind It</h2>
        <div className="mb-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold">Team TelcoMinds</h3>
          <p className="text-gray-600 text-sm md:text-base">Strategy, Architecture & AI</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="shadow-xl hover:scale-105 transition-transform p-6 rounded-lg bg-white">
            <h3 className="text-lg md:text-xl font-bold">Ganesh Kumar</h3>
            <p className="text-gray-600 text-sm md:text-base">Amdocs</p>
          </div>
          <div className="shadow-xl hover:scale-105 transition-transform p-6 rounded-lg bg-white">
            <h3 className="text-lg md:text-xl font-bold">Jatin Sharma</h3>
            <p className="text-gray-600 text-sm md:text-base">Amdocs</p>
          </div>
          <div className="shadow-xl hover:scale-105 transition-transform p-6 rounded-lg bg-white">
            <h3 className="text-lg md:text-xl font-bold">Jayesh Singh</h3>
            <p className="text-gray-600 text-sm md:text-base">Amdocs</p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">📊 What We Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <table className="w-full table-fixed border-collapse text-left text-gray-700 text-xs md:text-sm shadow-lg rounded-xl overflow-hidden">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="p-2 md:p-4">Feature</th>
                <th className="p-2 md:p-4">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2 md:p-4">🌍 Animated Landing Page</td>
                <td className="p-2 md:p-4">With floating molecules, slogan, CTA</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 md:p-4">📉 Churn Signals Simulation</td>
                <td className="p-2 md:p-4">Live behavior + churn drivers</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 md:p-4">🤖 AI Agents</td>
                <td className="p-2 md:p-4">Personalized churn explanations</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 md:p-4">🧞‍♂️ GenAI Rule Builder</td>
                <td className="p-2 md:p-4">Let AI design churn strategies</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 md:p-4">🧍 Digital Twin Cards</td>
                <td className="p-2 md:p-4">Simulated virtual users</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 md:p-4">📊 Live Dashboard</td>
                <td className="p-2 md:p-4">Tables + Graphs + GeoMap</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 md:p-4">🛠️ DIY Builder</td>
                <td className="p-2 md:p-4">Fully configurable AI stack</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 md:p-4">🎯 Final Impact Page</td>
                <td className="p-2 md:p-4">Before/After Retention Simulation</td>
              </tr>
            </tbody>
          </table>
          <div>
            <Line
              data={{
                labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                datasets: [
                  {
                    label: "Predicted Churn Reduction (%)",
                    data: [5, 12, 20, 35],
                    backgroundColor: "rgba(99, 102, 241, 0.4)",
                    borderColor: "#6366f1",
                    tension: 0.4,
                  },
                ],
              }}
              options={{ responsive: true, plugins: { legend: { display: true } } }}
            />
          </div>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">💡 Why This Matters</h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-700">
          Retaining a customer is more valuable than acquiring one. With ChurnDNA, any telco can **understand churn drivers, act with AI, and retain customers** – with no external vendor dependency. That’s true **DIY Telco Power**. ⚡
        </p>
      </section>

      <footer className="mt-20 text-center text-gray-500 text-xs md:text-sm">
        🚀 Built at Moonshot Aviskar | Made with ❤️ by Team ChurnDNA
      </footer>
    </div>
  );
};

export default AboutUs;
