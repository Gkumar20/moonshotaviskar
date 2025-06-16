"use client";

import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

export function MermaidMap() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "default", // Change to "forest" or "neutral" for variants
    });

    const chartDefinition = `
      graph TD
        A[🏠 Home] --> B[🧪 ChurnDNA Engine]
        B --> B1[📉 Churn Signals]
        B --> B2[🧠 AI Agentic Analysis]
        B --> B3[⚙️ Manual + GenAI Rules]
        B --> B4[🧍 Digital Twins]
        A --> C[📊 Live Dashboard]
        A --> D[🛠️ DIY Builder]
        A --> E[🚀 Final Impact]
        A --> J[🧠 Solution Focus]
    `;

    if (chartRef.current) {
      mermaid.render("churn-roadmap", chartDefinition)
        .then(result => {
          if (chartRef.current) {
            chartRef.current.innerHTML = result.svg;
          }
        });
    }
  }, []);

  return (
    <div className="mt-24 max-w-screen mx-auto px-6">
      <div className="rounded-3xl bg-white/20 backdrop-blur-lg shadow-2xl border border-white/30 p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          🗺️ Platform Roadmap
        </h2>
        <div ref={chartRef} className="overflow-x-auto"></div>
      </div>
    </div>
  );
}
