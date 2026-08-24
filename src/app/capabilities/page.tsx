import React from "react";
import Image from "next/image";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CAPABILITIES_LIST } from "@/lib/constants";

export const metadata = {
  title: "Our Capabilities | PT Karunia Panca Gemilang",
  description:
    "Discover PT Karunia Panca Gemilang's operational capabilities across wood processing, veneer processing, plywood supply, and transportation.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
            HOW WE OPERATE
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-kpg-green-900 mt-2">
            Our Capabilities
          </h1>
          <p className="text-base text-kpg-text-secondary font-light max-w-2xl mt-3">
            Core operational capabilities connecting material processing, product supply, quality inspection, and cargo freight logistics.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {CAPABILITIES_LIST.map((cap, idx) => (
            <div
              key={cap.id}
              id={cap.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-kpg-border pt-12 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:col-span-6 space-y-4 ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <span className="text-xs font-mono font-bold text-kpg-gold-600">
                  CAPABILITY 0{idx + 1}
                </span>

                <h2 className="text-3xl font-bold text-kpg-green-900">
                  {cap.title}
                </h2>

                <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div
                className={`lg:col-span-6 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden border border-kpg-border h-[320px] w-full img-zoom-container">
                  <Image
                    src={cap.image}
                    alt={`${cap.title} - PT Karunia Panca Gemilang`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
