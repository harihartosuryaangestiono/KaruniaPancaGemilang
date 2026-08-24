import React from "react";
import { OUR_APPROACH } from "@/lib/constants";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "@/components/ui/AnimatedSection";

export const OurApproach: React.FC = () => {
  return (
    <section className="py-24 bg-kpg-bg-offwhite border-b border-kpg-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up" className="mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
            OPERATIONAL PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-kpg-green-900 mt-2">
            Our Approach
          </h2>
          <p className="text-base text-kpg-text-secondary font-light mt-3">
            Factual principles guiding product sourcing, operational execution, process consistency, and cargo delivery.
          </p>
        </AnimatedSection>

        {/* 4 Pillars Grid */}
        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OUR_APPROACH.map((item) => (
            <AnimatedStaggerItem key={item.number}>
              <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-3">
                <span className="text-xs font-mono font-bold text-kpg-gold-600">
                  {item.number}
                </span>

                <h3 className="text-xl font-bold text-kpg-green-900 leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-kpg-gold-600 uppercase tracking-wider">
                  {item.subtitle}
                </p>

                <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
};
