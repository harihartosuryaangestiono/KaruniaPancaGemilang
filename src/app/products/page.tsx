import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CheckCircle2, FileText, Layers, Boxes, Info } from "lucide-react";

export const metadata = {
  title: "Products - Veneer & Plywood",
  description:
    "Explore veneer and plywood products by PT Karunia Panca Gemilang. Processed for industrial, commercial, and manufacturing requirements.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Product Portfolio"
            title="Veneer & Plywood Solutions"
            subtitle="Providing high-grade wood materials and plywood trading options for commercial and manufacturing partners."
          />
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-24 bg-white border-b border-kpg-border space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category 1: Veneer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-kpg-green-50 text-kpg-green-900 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4 text-kpg-gold-500" />
                <span>Primary Wood Product</span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-kpg-green-900">
                Veneer Materials
              </h2>
              <p className="text-base text-kpg-text-secondary leading-relaxed">
                Quality veneer materials processed to support plywood manufacturing and industrial applications. Produced with a focus on dimensional accuracy, smooth peel quality, and consistent thickness.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Suitable for core and face layer manufacturing.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Consistent moisture level and grain preparation.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Reliable continuous supply for manufacturing plants.
                  </span>
                </div>
              </div>

              <div className="pt-4 p-4 rounded-xl bg-kpg-bg-offwhite border border-kpg-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-kpg-text-muted">
                  <Info className="w-4 h-4 text-kpg-gold-500 shrink-0" />
                  <span>Product specifications available upon request.</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kpg-green-900 hover:text-kpg-gold-600 transition-colors"
                >
                  <FileText className="w-4 h-4 text-kpg-gold-500" />
                  <span>Request Info</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-premium border-2 border-white bg-kpg-green-900 h-[380px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Veneer Sheet Processing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Category 2: Plywood */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-kpg-green-50 text-kpg-green-900 text-xs font-bold uppercase tracking-wider">
                <Boxes className="w-4 h-4 text-kpg-gold-500" />
                <span>Commercial & Industrial Trading</span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-kpg-green-900">
                Plywood Products
              </h2>
              <p className="text-base text-kpg-text-secondary leading-relaxed">
                Reliable plywood products designed to support various industrial, commercial, and construction requirements. Sourced and traded with an emphasis on core density, face finish, and structural dependability.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Ideal for construction formwork, furniture, & industrial packaging.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Uniform surface finish and structural integrity.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Supported by KPG freight transportation for direct job-site delivery.
                  </span>
                </div>
              </div>

              <div className="pt-4 p-4 rounded-xl bg-kpg-bg-offwhite border border-kpg-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-kpg-text-muted">
                  <Info className="w-4 h-4 text-kpg-gold-500 shrink-0" />
                  <span>Product specifications available upon request.</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kpg-green-900 hover:text-kpg-gold-600 transition-colors"
                >
                  <FileText className="w-4 h-4 text-kpg-gold-500" />
                  <span>Request Info</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-premium border-2 border-white bg-kpg-green-900 h-[380px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Plywood Storage & Warehouse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
