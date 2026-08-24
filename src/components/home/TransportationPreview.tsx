import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Truck, ArrowRight, ShieldCheck, MapPin, PackageCheck, Route } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const TransportationPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-kpg-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium border-2 border-kpg-border bg-kpg-green-900">
              <div className="relative h-[380px] sm:h-[460px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                  alt="KPG Heavy Transportation Tronton Freight Truck"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kpg-green-900/80 via-kpg-green-900/20 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-kpg-gold-500 text-kpg-green-900 text-xs font-bold px-3.5 py-1.5 rounded-md shadow-md uppercase tracking-wider">
                  Tronton & Heavy Fleet
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-400">
                    KPG Transportation & Freight
                  </span>
                  <h3 className="font-heading text-2xl font-bold">
                    Moving Products. Supporting Operations.
                  </h3>
                  <p className="text-xs text-gray-300">
                    Heavy-duty cargo transportation supporting wood product distribution and industrial logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Right */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="Logistics & Distribution"
              title="Reliable Transportation for Your Supply Chain."
              subtitle="PT Karunia Panca Gemilang provides transportation and freight services to support the movement of products and operational materials efficiently."
            />

            <p className="text-sm sm:text-base text-kpg-text-secondary leading-relaxed">
              Our transportation operations utilize heavy-duty Tronton cargo trucks, designed to carry bulk raw materials, plywood sheets, veneer products, and general industrial freight across regional routes.
            </p>

            {/* Service Use Cases Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-kpg-bg-offwhite border border-kpg-border flex items-center gap-3">
                <PackageCheck className="w-5 h-5 text-kpg-gold-500 shrink-0" />
                <span className="text-xs font-bold text-kpg-text-primary">Product Distribution</span>
              </div>
              <div className="p-3.5 rounded-lg bg-kpg-bg-offwhite border border-kpg-border flex items-center gap-3">
                <Truck className="w-5 h-5 text-kpg-gold-500 shrink-0" />
                <span className="text-xs font-bold text-kpg-text-primary">Material Delivery</span>
              </div>
              <div className="p-3.5 rounded-lg bg-kpg-bg-offwhite border border-kpg-border flex items-center gap-3">
                <Route className="w-5 h-5 text-kpg-gold-500 shrink-0" />
                <span className="text-xs font-bold text-kpg-text-primary">Intercity Cargo</span>
              </div>
              <div className="p-3.5 rounded-lg bg-kpg-bg-offwhite border border-kpg-border flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-kpg-gold-500 shrink-0" />
                <span className="text-xs font-bold text-kpg-text-primary">Supply Chain Support</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/transportation"
                className="inline-flex items-center gap-3 bg-kpg-green-900 hover:bg-kpg-green-800 text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                <span>Discuss Your Transportation Needs</span>
                <ArrowRight className="w-4 h-4 text-kpg-gold-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
