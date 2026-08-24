import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CAPABILITIES_LIST } from "@/lib/constants";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "@/components/ui/AnimatedSection";

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-24 bg-kpg-bg-offwhite border-b border-kpg-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up" className="mb-16 max-w-2xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-kpg-gold-600 uppercase">
            05 — HOW WE OPERATE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-kpg-green-900 mt-2">
            Operational Framework
          </h2>
          <p className="text-base text-kpg-text-secondary font-light mt-3">
            Core operational capabilities connecting material processing, quality inspection, and cargo freight logistics.
          </p>
        </AnimatedSection>

        {/* 6 Capabilities Grid */}
        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES_LIST.map((cap, idx) => (
            <AnimatedStaggerItem key={cap.id}>
              <div className="border-t border-kpg-border pt-6 space-y-4 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-kpg-gold-600">
                    0{idx + 1}
                  </span>
                </div>

                <div className="relative h-48 w-full rounded-xl overflow-hidden img-zoom-container border border-kpg-border">
                  <Image
                    src={cap.image}
                    alt={`${cap.title} - PT Karunia Panca Gemilang`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="text-xl font-bold text-kpg-green-900 leading-tight">
                  {cap.title}
                </h3>

                <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>

        <div className="pt-12 text-left">
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-kpg-green-900 font-bold hover:text-kpg-gold-600 transition-colors text-sm lg:text-base group"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight className="w-4 h-4 text-kpg-gold-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
