import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Plywood | PT Karunia Panca Gemilang",
  description:
    "Plywood products for industrial, commercial, and construction requirements by PT Karunia Panca Gemilang.",
};

export default function PlywoodPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
            PRODUCTS / PLYWOOD
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-kpg-green-900 mt-2">
            Plywood Products
          </h1>
          <p className="text-base text-kpg-text-secondary font-light max-w-2xl mt-3">
            Plywood products available to support various industrial, commercial, and construction requirements.
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-24 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-kpg-gold-600">
                PRODUCT OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-kpg-green-900 leading-tight">
                Plywood Supply & Trading
              </h2>
              <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
                PT Karunia Panca Gemilang provides plywood products tailored for commercial trading, construction, and manufacturing needs. Our plywood supply operations focus on product consistency and dependable logistics delivery.
              </p>

              <ul className="space-y-2 pt-1 text-sm text-kpg-text-secondary">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
                  <span>Suitable for construction, furniture, and packaging applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
                  <span>Available for wholesale supply and trading contracts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
                  <span>Supported by KPG transportation & freight delivery</span>
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
                  <span>Inquire About Plywood</span>
                  <ArrowRight className="w-4 h-4 text-kpg-gold-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Large Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-kpg-border h-[400px] w-full img-zoom-container">
                <Image
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Plywood Supply"
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
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold text-kpg-gold-600">
              APPLICATIONS
            </span>
            <h2 className="text-3xl font-bold text-kpg-green-900">
              Primary Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-2">
              <h3 className="text-lg font-bold text-kpg-green-900">Construction</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Plywood panels utilized for structural formwork and building requirements.
              </p>
            </div>
            <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-2">
              <h3 className="text-lg font-bold text-kpg-green-900">Furniture</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Plywood boards suitable for furniture and cabinetry production.
              </p>
            </div>
            <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-2">
              <h3 className="text-lg font-bold text-kpg-green-900">Packaging</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Wood sheets for industrial crating and protective packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
