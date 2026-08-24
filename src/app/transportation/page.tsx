import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Truck, ShieldCheck, Route, MapPin, ArrowRight, PackageCheck, Clock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Transportation & Freight Services",
  description:
    "Heavy-duty cargo transportation and Tronton fleet delivery services by PT Karunia Panca Gemilang, supporting product distribution and industrial logistics.",
};

export default function TransportationPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="KPG Logistics Support"
            title="Transportation & Freight Services"
            subtitle="Reliable transportation solutions supporting supply chain movements for wood products and industrial cargo."
          />
        </div>
      </section>

      {/* Hero Transportation Focus */}
      <section className="py-24 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
                Heavy Transportation Services
              </span>
              <h2 className="font-heading text-4xl font-bold text-kpg-green-900 leading-tight">
                Moving Products. Supporting Operations.
              </h2>
              <p className="text-base text-kpg-text-secondary leading-relaxed">
                In addition to wood processing and plywood trading, PT Karunia Panca Gemilang provides transportation and freight services to support the movement of products and operational materials.
              </p>
              <p className="text-base text-kpg-text-secondary leading-relaxed">
                Our transportation operations are designed to support the movement of products and materials efficiently and reliably, helping customers maintain a dependable supply chain across Indonesian land logistics routes.
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-kpg-green-900 hover:bg-kpg-green-800 text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-all shadow-sm"
                >
                  <span>Discuss Your Transportation Needs</span>
                  <ArrowRight className="w-4 h-4 text-kpg-gold-400" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-premium border-2 border-white bg-kpg-green-900 h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                  alt="Tronton Cargo Truck PT Karunia Panca Gemilang"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kpg-green-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-kpg-border">
                  <div className="flex items-center gap-3">
                    <Truck className="w-6 h-6 text-kpg-gold-500 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-kpg-green-900">
                        Tronton / Heavy Cargo Fleet
                      </h4>
                      <p className="text-xs text-kpg-text-secondary">
                        Heavy-duty capacity for bulk timber, plywood stacks, and commercial cargo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Use Cases Breakdown */}
      <section className="py-24 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transportation Scope"
            title="Service Capabilities"
            subtitle="Providing versatile freight solutions tailored for operational demand."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-kpg-border shadow-subtle space-y-3">
              <PackageCheck className="w-6 h-6 text-kpg-gold-500" />
              <h3 className="font-heading text-xl font-bold text-kpg-green-900">
                Product Distribution
              </h3>
              <p className="text-xs text-kpg-text-secondary leading-relaxed">
                Scheduled delivery of finished plywood sheets and processed veneer directly to customer warehouses and project sites.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-kpg-border shadow-subtle space-y-3">
              <Truck className="w-6 h-6 text-kpg-gold-500" />
              <h3 className="font-heading text-xl font-bold text-kpg-green-900">
                Material Transportation
              </h3>
              <p className="text-xs text-kpg-text-secondary leading-relaxed">
                Logistics movement of raw logs, wood timber, and factory input materials required for ongoing operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-kpg-border shadow-subtle space-y-3">
              <Route className="w-6 h-6 text-kpg-gold-500" />
              <h3 className="font-heading text-xl font-bold text-kpg-green-900">
                Intercity Cargo
              </h3>
              <p className="text-xs text-kpg-text-secondary leading-relaxed">
                Long-distance regional transportation connecting processing centers with industrial supply nodes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-kpg-border shadow-subtle space-y-3">
              <ShieldCheck className="w-6 h-6 text-kpg-gold-500" />
              <h3 className="font-heading text-xl font-bold text-kpg-green-900">
                Plywood Delivery
              </h3>
              <p className="text-xs text-kpg-text-secondary leading-relaxed">
                Specialized handling ensuring plywood sheets remain flat, dry, and undamaged throughout transit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-kpg-border shadow-subtle space-y-3">
              <Clock className="w-6 h-6 text-kpg-gold-500" />
              <h3 className="font-heading text-xl font-bold text-kpg-green-900">
                Industrial Cargo Support
              </h3>
              <p className="text-xs text-kpg-text-secondary leading-relaxed">
                Flexible cargo options for commercial business partners requiring heavy load capacity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-kpg-border shadow-subtle space-y-3">
              <MapPin className="w-6 h-6 text-kpg-gold-500" />
              <h3 className="font-heading text-xl font-bold text-kpg-green-900">
                Supply Chain Integration
              </h3>
              <p className="text-xs text-kpg-text-secondary leading-relaxed">
                End-to-end alignment connecting manufacturing output with customer delivery timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
