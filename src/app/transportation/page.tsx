import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Transportation & Freight | PT Karunia Panca Gemilang",
  description:
    "Heavy-duty cargo transportation and Tronton fleet services by PT Karunia Panca Gemilang, supporting product distribution and industrial logistics.",
};

export default function TransportationPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
            BUSINESS CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-kpg-green-900 mt-2">
            Transportation & Freight Services
          </h1>
          <p className="text-base text-kpg-text-secondary font-light max-w-2xl mt-3">
            Heavy-duty cargo transportation supporting product distribution and industrial logistics.
          </p>
        </div>
      </section>

      {/* Hero Transportation Focus */}
      <section className="py-24 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-kpg-gold-600">
                KPG TRANSPORTATION
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-kpg-green-900 leading-tight">
                Moving Products. <br />
                Supporting Operations.
              </h2>

              <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
                In addition to wood processing, veneer processing, and plywood trading, PT Karunia Panca Gemilang provides heavy cargo transportation services to support product distribution and raw material delivery.
              </p>

              <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
                Our transportation capabilities support cargo delivery efficiently and reliably across regional logistics routes.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-kpg-green-900 hover:bg-kpg-green-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-colors group"
                >
                  <span>Discuss Transportation Needs</span>
                  <ArrowRight className="w-4 h-4 text-kpg-gold-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-kpg-border h-[400px] w-full img-zoom-container">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Tronton Cargo Fleet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Scope */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold text-kpg-gold-600">
              SERVICE SCOPE
            </span>
            <h2 className="text-3xl font-bold text-kpg-green-900">
              Logistics & Freight Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-2">
              <h3 className="text-lg font-bold text-kpg-green-900">Product Distribution</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Scheduled delivery of finished plywood sheets and veneer stock directly to customer destinations.
              </p>
            </div>

            <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-2">
              <h3 className="text-lg font-bold text-kpg-green-900">Material Delivery</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Transportation of raw timber logs and factory materials required for ongoing operations.
              </p>
            </div>

            <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-2">
              <h3 className="text-lg font-bold text-kpg-green-900">Intercity Cargo</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Long-distance regional transportation connecting processing facilities with commercial clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
