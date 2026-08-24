import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Boxes, CheckCircle2, FileText, Info, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Plywood Products - PT Karunia Panca Gemilang",
  description:
    "Reliable plywood products for industrial, commercial, and construction requirements. Supplied and traded by PT Karunia Panca Gemilang.",
};

export default function PlywoodPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-kpg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600&auto=format&fit=crop"
            alt="Plywood Production PT Karunia Panca Gemilang"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-kpg-green-900 via-kpg-green-900/90 to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-400">
              Product Portfolio • Plywood
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Plywood Solutions
            </h1>
            <p className="text-base sm:text-xl text-gray-200 leading-relaxed">
              Reliable plywood solutions for industrial, commercial, and construction requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-24 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
                Product Overview
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-kpg-green-900 leading-tight">
                Engineered for Structural Dependability
              </h2>
              <p className="text-base text-kpg-text-secondary leading-relaxed">
                PT Karunia Panca Gemilang provides plywood products tailored to commercial trading, structural formwork, and industrial manufacturing demands. Our plywood supply operations focus on product consistency, uniform surface quality, and dependable delivery schedules.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Uniform bonding integrity & flat surface finish.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Available for wholesale trading and project distribution.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Supported by KPG heavy transportation fleet for direct delivery.
                  </span>
                </div>
              </div>

              <div className="pt-4 p-4 rounded-xl bg-kpg-bg-offwhite border border-kpg-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-kpg-text-muted">
                  <Info className="w-4 h-4 text-kpg-gold-500 shrink-0" />
                  <span>Product specifications available upon request.</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kpg-green-900 hover:text-kpg-gold-600 transition-colors shrink-0"
                >
                  <FileText className="w-4 h-4 text-kpg-gold-500" />
                  <span>Request Specifications</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-premium border-2 border-kpg-border h-[400px] w-full bg-kpg-green-900">
                <Image
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Plywood Storage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Use Cases"
            title="Applications"
            subtitle="Suitable applications vary according to product specifications and customer requirements."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-kpg-border space-y-3">
              <h3 className="font-heading text-xl font-bold text-kpg-green-900">
                Construction & Formwork
              </h3>
              <p className="text-xs text-kpg-text-secondary leading-relaxed">
                Plywood panels utilized for structural concrete formwork and site building needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-kpg-border space-y-3">
              <h3 className="font-heading text-xl font-bold text-kpg-green-900">
                Industrial Packaging
              </h3>
              <p className="text-xs text-kpg-text-secondary leading-relaxed">
                Heavy-duty wood sheets for industrial crates, pallets, and protective shipping containers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-kpg-border space-y-3">
              <h3 className="font-heading text-xl font-bold text-kpg-green-900">
                Furniture Manufacturing
              </h3>
              <p className="text-xs text-kpg-text-secondary leading-relaxed">
                Core plywood boards processed for commercial furniture and cabinet making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
