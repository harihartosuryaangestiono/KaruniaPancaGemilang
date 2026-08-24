import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata = {
  title: "Products | PT Karunia Panca Gemilang",
  description:
    "Explore veneer and plywood products by PT Karunia Panca Gemilang, processed for industrial, commercial, and construction requirements.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
            PRODUCT PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-kpg-green-900 mt-2">
            Plywood & Veneer Portfolio
          </h1>
          <p className="text-base text-kpg-text-secondary font-light max-w-2xl mt-3">
            Providing wood veneer and plywood supply options for commercial and manufacturing partners.
          </p>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-24 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Category 1: Plywood */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-kpg-gold-600">
                PRODUCT 01
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-kpg-green-900">
                Plywood Products
              </h2>
              <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
                Plywood products available to support various industrial, commercial, and construction requirements. Supplied with an emphasis on product consistency and reliable logistics delivery.
              </p>

              <ul className="space-y-2 pt-1 text-sm text-kpg-text-secondary">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
                  <span>Suitable for construction, furniture, and industrial packaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
                  <span>Available for commercial supply and trading contracts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
                  <span>Supported by KPG transportation & freight delivery</span>
                </li>
              </ul>

              <p className="text-xs text-kpg-text-muted italic pt-1">
                * Exact product specifications available upon request.
              </p>

              <div className="pt-2">
                <Link
                  href="/products/plywood"
                  className="inline-flex items-center gap-2 bg-kpg-green-900 hover:bg-kpg-green-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-colors"
                >
                  <span>Explore Plywood Details</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-kpg-border h-[360px] w-full img-zoom-container">
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

          {/* Category 2: Veneer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-xs font-mono font-bold text-kpg-gold-600">
                PRODUCT 02
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-kpg-green-900">
                Veneer Materials
              </h2>
              <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
                Processed veneer materials produced to support plywood manufacturing operations and industrial wood applications.
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

              <p className="text-xs text-kpg-text-muted italic pt-1">
                * Exact product specifications available upon request.
              </p>

              <div className="pt-2">
                <Link
                  href="/products/veneer"
                  className="inline-flex items-center gap-2 bg-kpg-green-900 hover:bg-kpg-green-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-colors"
                >
                  <span>Explore Veneer Details</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-kpg-border h-[360px] w-full img-zoom-container">
                <Image
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Veneer Processing"
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
