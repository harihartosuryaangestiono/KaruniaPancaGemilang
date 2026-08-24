import React from "react";
import { Trees, Layers, Boxes, Truck, Workflow } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CAPABILITIES_LIST } from "@/lib/constants";

const ICON_MAP = {
  Trees: Trees,
  Layers: Layers,
  Boxes: Boxes,
  Truck: Truck,
  Workflow: Workflow,
};

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-24 bg-kpg-bg-offwhite border-b border-kpg-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Focus"
          title="Our Capabilities"
          subtitle="Integrated processing, trading, and logistics services designed for industrial reliability."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES_LIST.map((cap, idx) => {
            const IconComp = ICON_MAP[cap.icon as keyof typeof ICON_MAP] || Workflow;
            return (
              <div
                key={cap.title}
                className="bg-white rounded-xl p-8 border border-kpg-border hover:border-kpg-gold-500 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-kpg-green-50 text-kpg-green-900 flex items-center justify-center border border-kpg-green-100">
                    <IconComp className="w-6 h-6 text-kpg-gold-500" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-kpg-gold-600">
                    Capability 0{idx + 1}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-kpg-green-900">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-kpg-text-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-kpg-border/60 flex items-center justify-between text-xs text-kpg-text-muted">
                  <span>PT Karunia Panca Gemilang</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
