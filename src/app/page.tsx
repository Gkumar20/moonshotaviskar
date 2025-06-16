'use client';

import React from "react";
import { HeroSection } from "../components/ui/HeroSection";
import { ChurnDNAEngineSection } from "../components/ui/ChurnDNAEngineSection";
import { RoadmapSection } from "../components/ui/RoadmapSection";
import { MermaidMap } from "../components/ui/MermaidMap";
import { DigitalTwinsSection } from "../components/ui/DigitalTwinsSection";
import { GenerativeAIRulesSection } from "../components/ui/GenerativeAIRulesSection";
import  AboutSection  from "../components/ui/Bottom";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-100 to-gray-300 text-black px-8 py-20">
      <div className="w-full backdrop-blur-lg bg-white bg-opacity-60 border border-gray-300 rounded-lg shadow-2xl p-8">
        <HeroSection />
        <div className="space-y-16 mt-12">
          <ChurnDNAEngineSection />
          <RoadmapSection />
          <MermaidMap />
          <DigitalTwinsSection />
          <GenerativeAIRulesSection />
        </div>
        <AboutSection />
      </div>
    </div>
  );
}

