import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-24 bg-kpg-bg-offwhite border-b border-kpg-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <AnimatedSection direction="left" className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold tracking-widest text-kpg-gold-600 uppercase">
                01 — WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-kpg-green-900 leading-tight">
                From Wood Processing <br />
                to Reliable Supply.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-kpg-text-secondary leading-relaxed font-light">
              PT Karunia Panca Gemilang is an Indonesian company engaged in wood processing, veneer processing, plywood trading, and transportation services.
            </p>

            <p className="text-sm sm:text-base text-kpg-text-secondary leading-relaxed font-light">
              We integrate processing operations, product sourcing, and cargo freight logistics to support client requirements across industrial and commercial sectors.
            </p>

            <div className="pt-4 border-t border-kpg-border/60">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-kpg-green-900 font-bold hover:text-kpg-gold-600 transition-colors text-sm lg:text-base group"
              >
                <span>Learn More About KPG</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-kpg-gold-500" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Editorial Image */}
          <AnimatedSection direction="right" className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-kpg-border img-zoom-container shadow-sm">
              <div className="relative h-[380px] sm:h-[480px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Industrial Wood Operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
