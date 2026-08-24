import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BUSINESS_AREAS } from "@/lib/constants";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "@/components/ui/AnimatedSection";

export const BusinessAreas: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-kpg-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up" className="mb-16 max-w-2xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-kpg-gold-600 uppercase">
            02 — OUR BUSINESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-kpg-green-900 mt-2">
            Business Capabilities
          </h2>
          <p className="text-base text-kpg-text-secondary font-light mt-3">
            Three integrated capabilities supporting timber operations, product supply, and logistics.
          </p>
        </AnimatedSection>

        {/* Editorial 3-Column Pillars */}
        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BUSINESS_AREAS.map((item) => (
            <AnimatedStaggerItem key={item.id}>
              <div className="group flex flex-col justify-between h-full border-t border-kpg-border pt-6 space-y-6">
                <div className="space-y-4">
                  {/* Large Section Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-4xl lg:text-5xl font-bold text-kpg-gold-500">
                      {item.id}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-kpg-text-secondary">
                      {item.badge}
                    </span>
                  </div>

                  {/* Editorial Photography */}
                  <div className="relative h-64 w-full rounded-xl overflow-hidden img-zoom-container border border-kpg-border">
                    <Image
                      src={item.image}
                      alt={`${item.title} - PT Karunia Panca Gemilang`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-kpg-green-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-kpg-text-secondary font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kpg-green-900 group-hover:text-kpg-gold-600 transition-colors"
                  >
                    <span>Explore Capability</span>
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
