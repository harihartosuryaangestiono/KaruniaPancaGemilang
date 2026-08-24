import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <AnimatedSection direction="left" className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="Who We Are"
              title="A Reliable Partner in Wood Products and Logistics."
            />

            <p className="text-base sm:text-lg text-kpg-text-secondary leading-relaxed">
              PT Karunia Panca Gemilang is a company engaged in wood processing, veneer, plywood, plywood trading, and transportation services.
            </p>

            <p className="text-sm sm:text-base text-kpg-text-secondary leading-relaxed">
              We combine product quality, operational efficiency, and reliable logistics to support the needs of our customers and industry partners throughout Indonesia.
            </p>

            {/* Key Pillar Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-kpg-text-primary">Quality & Consistency</h4>
                  <p className="text-xs text-kpg-text-secondary">Strict standards applied in veneer processing & plywood trading.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-kpg-text-primary">Dependable Supply Chain</h4>
                  <p className="text-xs text-kpg-text-secondary">Stable sourcing and inventory management for commercial clients.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-kpg-text-primary">KPG Freight Support</h4>
                  <p className="text-xs text-kpg-text-secondary">Integrated transportation fleet ensuring seamless product distribution.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-kpg-green-900 font-bold hover:text-kpg-gold-600 transition-colors text-base group"
              >
                <span>Discover KPG</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-kpg-gold-500" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Image */}
          <AnimatedSection direction="right" className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-premium border-2 border-white img-zoom-container">
              <div className="relative h-[360px] sm:h-[450px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Industrial Wood & Veneer Processing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-kpg-green-900/30 to-transparent" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
