import React from "react";
import { PRODUCT_APPLICATIONS } from "@/lib/constants";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "@/components/ui/AnimatedSection";

export const ProductApplications: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-kpg-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up" className="mb-16 max-w-2xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-kpg-gold-600 uppercase">
            04 — WHERE OUR PRODUCTS FIT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-kpg-green-900 mt-2">
            Applications
          </h2>
          <p className="text-base text-kpg-text-secondary font-light mt-3">
            Primary application categories across industrial, commercial, and construction requirements.
          </p>
        </AnimatedSection>

        {/* Editorial 5-Column Typographic Grid */}
        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PRODUCT_APPLICATIONS.map((app, idx) => (
            <AnimatedStaggerItem key={idx}>
              <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-3">
                <span className="text-xs font-mono font-bold text-kpg-gold-600">
                  0{idx + 1}
                </span>
                <h3 className="text-base lg:text-lg font-bold text-kpg-green-900 leading-snug uppercase tracking-tight">
                  {app.title}
                </h3>
                <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                  {app.description}
                </p>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
};
