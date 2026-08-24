import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CAPABILITIES_LIST } from "@/lib/constants";
import { CheckCircle2, Trees, Layers, Boxes, Truck, Workflow } from "lucide-react";

export const metadata = {
  title: "Our Capabilities",
  description:
    "Discover PT Karunia Panca Gemilang's operational capabilities across wood processing, veneer production, plywood trading, and transportation.",
};

const ICONS = [Trees, Layers, Boxes, Truck, Workflow];

export default function CapabilitiesPage() {
  return (
    <>
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Operational Pillars"
            title="Our Capabilities"
            subtitle="Integrated wood processing, veneer manufacturing, plywood supply, and heavy transportation capabilities."
          />
        </div>
      </section>

      <section className="py-24 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {CAPABILITIES_LIST.map((cap, idx) => {
            const IconComp = ICONS[idx % ICONS.length];
            return (
              <div
                key={cap.title}
                id={cap.title.toLowerCase().replace(/\s+/g, "-")}
                className="bg-kpg-bg-offwhite rounded-2xl p-8 sm:p-10 border border-kpg-border shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-kpg-green-900 text-kpg-gold-400 flex items-center justify-center font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
                      Capability Focus
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-kpg-green-900">
                    {cap.title}
                  </h3>
                  <p className="text-base text-kpg-text-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <div className="w-20 h-20 rounded-2xl bg-white text-kpg-green-900 flex items-center justify-center border-2 border-kpg-border shadow-md">
                    <IconComp className="w-10 h-10 text-kpg-gold-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
