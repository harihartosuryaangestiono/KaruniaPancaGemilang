import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_KPG_VALUES } from "@/lib/constants";

export const WhyChooseKpg: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-kpg-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <SectionHeader
              badge="Value Proposition"
              title="Why Choose KPG"
              subtitle="Grounding our partnerships in straightforward operational principles: consistency, reliability, efficiency, and integrated execution."
            />
            
            <div className="p-6 rounded-xl bg-kpg-green-900 text-white border-l-4 border-kpg-gold-500 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-kpg-gold-400">
                Our Corporate Standard
              </p>
              <p className="text-sm leading-relaxed text-gray-200">
                “By combining wood processing, plywood trading, and transportation services, PT Karunia Panca Gemilang is committed to becoming a trusted business partner throughout Indonesia.”
              </p>
            </div>
          </div>

          {/* Right Values Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_KPG_VALUES.map((val) => (
              <div
                key={val.title}
                className="p-8 rounded-xl bg-kpg-bg-offwhite border border-kpg-border hover:border-kpg-gold-500 transition-all space-y-4 hover:shadow-subtle"
              >
                <span className="font-heading text-4xl font-bold text-kpg-gold-500">
                  {val.number}
                </span>
                <h3 className="font-heading text-2xl font-bold text-kpg-green-900">
                  {val.title}
                </h3>
                <p className="text-sm text-kpg-text-secondary leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
