import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "@/components/ui/AnimatedSection";

export const ProcessStream: React.FC = () => {
  return (
    <section className="py-24 bg-kpg-bg-offwhite border-b border-kpg-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="mb-16">
          <SectionHeader
            badge="Operational Workflow"
            title="Our Process"
            subtitle="End-to-end operational structure connecting raw material sourcing to heavy transportation delivery."
            align="center"
          />
        </AnimatedSection>

        {/* Process Flow Steps */}
        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PROCESS_STEPS.map((proc, index) => (
            <AnimatedStaggerItem key={proc.step}>
              <div className="bg-white rounded-xl p-6 border border-kpg-border hover:border-kpg-gold-500 shadow-subtle hover:shadow-premium hover:-translate-y-1.5 transition-all duration-300 relative flex flex-col justify-between h-full group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl font-bold text-kpg-green-900 group-hover:text-kpg-gold-600 transition-colors">
                      {proc.step}
                    </span>
                    {index < PROCESS_STEPS.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-kpg-gold-500 hidden md:block group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-kpg-green-900">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-kpg-text-secondary leading-relaxed">
                    {proc.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-kpg-border/50 text-[10px] uppercase font-bold text-kpg-gold-600 tracking-wider">
                  Step 0{index + 1}
                </div>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
};
