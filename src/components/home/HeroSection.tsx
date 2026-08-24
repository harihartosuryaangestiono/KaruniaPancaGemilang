"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white -mt-[110px] sm:-mt-[130px] lg:-mt-[150px] pt-[140px] sm:pt-[180px] lg:pt-[220px] pb-24 sm:pb-32">
      {/* Background Video Player - 100% Unobstructed Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000"
        >
          {/* Official video file */}
          <source src="/videos/factory-hero.mp4" type="video/mp4" />
          {/* High-quality fallback stock video stream */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-heavy-machinery-cutting-wood-in-a-factory-41484-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Minimal Soft Dark Overlay - NO CARDS - 100% Open Video */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/35 z-10" />
      </div>

      {/* Hero Content Container - Pure Floating Text directly on Video (NO CARDS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-2xl space-y-6 text-left">
          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06] drop-shadow-lg">
            Building Reliable{" "}
            <span className="text-kpg-gold-400 font-normal italic">Foundations</span>{" "}
            <br className="hidden sm:inline" />
            for Industry.
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-gray-100 leading-relaxed font-light drop-shadow-md max-w-xl">
            Wood processing, plywood and veneer manufacturing, supported by reliable transportation logistics.
          </p>

          {/* Clean Action Button */}
          <div className="pt-2">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-3 bg-kpg-gold-500 hover:bg-kpg-gold-400 text-kpg-green-900 font-bold text-sm lg:text-base px-8 py-3.5 rounded-lg transition-all duration-200 shadow-xl group"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
