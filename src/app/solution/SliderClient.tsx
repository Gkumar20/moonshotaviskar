"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Settings } from "react-slick";

// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function SliderClient({ carouselSettings }: { carouselSettings: Settings }) {
  return (
    <Slider {...carouselSettings}>
      <div className="p-6 bg-white shadow-md rounded-lg text-center">
        <h3 className="text-xl font-bold text-blue-600">Use Case 1</h3>
        <p className="text-gray-600">Predict churn for high-value customers.</p>
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg text-center">
        <h3 className="text-xl font-bold text-blue-600">Use Case 2</h3>
        <p className="text-gray-600">Optimize retention strategies with AI.</p>
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg text-center">
        <h3 className="text-xl font-bold text-blue-600">Use Case 3</h3>
        <p className="text-gray-600">Track customer behavior with Digital Twins.</p>
      </div>
    </Slider>
  );
}
