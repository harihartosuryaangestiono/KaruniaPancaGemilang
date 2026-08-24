import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const TransportationPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-kpg-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <AnimatedSection direction="left" className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
              LOGISTICS SUPPORT
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-kpg-green-900 leading-tight">
              Moving Products. <br />
              Supporting Operations.
            </h2>

            <p className="text-base sm:text-lg text-kpg-text-secondary leading-relaxed font-light">
              PT Karunia Panca Gemilang provides transportation and freight services to support product distribution, raw material delivery, and heavy cargo movements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-kpg-border/60">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-kpg-green-900">Heavy-Duty Cargo</h4>
                <p className="text-xs text-kpg-text-secondary font-light">Tronton fleet transport for bulk wood & cargo.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-kpg-green-900">Intercity Delivery</h4>
                <p className="text-xs text-kpg-text-secondary font-light">Scheduled freight support between operational points.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-kpg-green-900">Material Delivery</h4>
                <p className="text-xs text-kpg-text-secondary font-light">Reliable movement of timber & veneer stock.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-kpg-green-900">Logistics Support</h4>
                <p className="text-xs text-kpg-text-secondary font-light">Supporting client supply chain schedules.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/transportation"
                className="inline-flex items-center gap-2 text-kpg-green-900 font-bold hover:text-kpg-gold-600 transition-colors text-sm lg:text-base group"
              >
                <span>View Transportation Services</span>
                <ArrowRight className="w-4 h-4 text-kpg-gold-500 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Image */}
          <AnimatedSection direction="right" className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-kpg-border img-zoom-container shadow-sm">
              <div className="relative h-[360px] sm:h-[460px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Transportation Fleet"
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
