import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BUSINESS_AREAS } from "@/lib/constants";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "@/components/ui/AnimatedSection";

export const BusinessAreas: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-kpg-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="mb-16">
          <SectionHeader
            badge="Our Core Pillars"
            title="Our Business"
            subtitle="Three integrated operational capabilities driving PT Karunia Panca Gemilang forward."
            align="center"
          />
        </AnimatedSection>

        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_AREAS.map((item) => (
            <AnimatedStaggerItem key={item.id}>
              <div className="kpg-card group overflow-hidden flex flex-col justify-between h-full">
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-kpg-green-900 img-zoom-container">
                    <Image
                      src={item.image}
                      alt={`${item.title} - PT Karunia Panca Gemilang`}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kpg-green-900/85 via-kpg-green-900/30 to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md border border-kpg-border font-heading font-bold text-kpg-green-900 text-lg shadow-sm">
                      {item.id}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-kpg-gold-400">
                        {item.badge}
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-kpg-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kpg-green-900 group-hover:text-kpg-gold-600 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 text-kpg-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
};
