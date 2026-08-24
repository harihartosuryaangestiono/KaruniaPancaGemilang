import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRODUCT_APPLICATIONS } from "@/lib/constants";
import { Factory, HardHat, Armchair, Trees, Network, Truck } from "lucide-react";

const ICONS = [Factory, HardHat, Armchair, Trees, Network, Truck];

export const ProductApplications: React.FC = () => {
  return (
    <section className="py-24 bg-kpg-bg-offwhite border-b border-kpg-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Product Applications"
          title="Where Our Products Fit"
          subtitle="Our products are designed to support a range of industrial and commercial requirements, subject to product specifications and customer needs."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_APPLICATIONS.map((app, idx) => {
            const IconComp = ICONS[idx % ICONS.length];
            return (
              <div
                key={app.title}
                className="bg-white p-8 rounded-xl border border-kpg-border hover:border-kpg-gold-500 shadow-subtle hover:shadow-premium transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-kpg-green-50 text-kpg-green-900 flex items-center justify-center border border-kpg-green-100">
                  <IconComp className="w-6 h-6 text-kpg-gold-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-kpg-green-900">
                  {app.title}
                </h3>
                <p className="text-sm text-kpg-text-secondary leading-relaxed">
                  {app.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
