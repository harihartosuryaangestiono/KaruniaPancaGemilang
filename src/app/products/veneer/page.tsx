import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Veneer | PT Karunia Panca Gemilang",
  description:
    "Processed veneer materials for plywood manufacturing and industrial wood applications by PT Karunia Panca Gemilang.",
};

export default function VeneerPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-kpg-gold-600">
              PRODUCTS / VENEER
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-kpg-green-900 mt-2">
              Veneer Materials
            </h1>
            <p className="text-base text-kpg-text-secondary font-light max-w-2xl mt-3">
              Processed veneer materials supporting plywood manufacturing and industrial applications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-24 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text */}
            <AnimatedSection direction="left" className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-kpg-gold-600">
                PRODUCT OVERVIEW & PROCESSING CONTEXT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-kpg-green-900 leading-tight">
                Veneer Processing
              </h2>
              <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
                PT Karunia Panca Gemilang processes wood materials into veneer sheets tailored for plywood production and industrial wood manufacturing. Our processing operations emphasize operational focus and product supply reliability.
              </p>

              <ul className="space-y-2 pt-1 text-sm text-kpg-text-secondary">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
                  <span>Processed veneer sheets for core and face layer manufacturing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
                  <span>Suitable for plywood production and wood manufacturing plants</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
                  <span>Supported by KPG freight logistics and delivery</span>
                </li>
              </ul>

              <div className="pt-2">
                <p className="text-xs text-kpg-text-muted italic">
                  * Product specifications available upon request.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-kpg-green-900 hover:bg-kpg-green-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-colors group"
                >
                  <span>Inquire About Veneer</span>
                  <ArrowRight className="w-4 h-4 text-kpg-gold-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Large Image */}
            <AnimatedSection direction="right" className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-kpg-border h-[400px] w-full img-zoom-container shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Veneer Processing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimatedSection direction="up" className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold text-kpg-gold-600">
              APPLICATIONS
            </span>
            <h2 className="text-3xl font-bold text-kpg-green-900">
              Primary Applications
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedStaggerItem className="border-t-2 border-kpg-gold-500 pt-6 space-y-2">
              <h3 className="text-lg font-bold text-kpg-green-900">Plywood Core Layers</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Core veneer sheets processed for plywood layer lamination.
              </p>
            </AnimatedStaggerItem>
            <AnimatedStaggerItem className="border-t-2 border-kpg-gold-500 pt-6 space-y-2">
              <h3 className="text-lg font-bold text-kpg-green-900">Plywood Face Layers</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Face veneer sheets supporting outer plywood surface requirements.
              </p>
            </AnimatedStaggerItem>
            <AnimatedStaggerItem className="border-t-2 border-kpg-gold-500 pt-6 space-y-2">
              <h3 className="text-lg font-bold text-kpg-green-900">Wood Manufacturing</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Raw veneer stock supplied to industrial wood manufacturing plants.
              </p>
            </AnimatedStaggerItem>
          </AnimatedStagger>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
