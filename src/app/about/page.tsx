import React from "react";
import Image from "next/image";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata = {
  title: "About Us | PT Karunia Panca Gemilang",
  description:
    "Company overview, operational capabilities, approach, commitment, and direction of PT Karunia Panca Gemilang in wood processing and transportation services.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
            COMPANY PROFILE
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-kpg-green-900 mt-2">
            About PT Karunia Panca Gemilang
          </h1>
          <p className="text-base text-kpg-text-secondary font-light max-w-2xl mt-3">
            Engaged in wood processing, veneer processing, plywood trading, and transportation & freight services.
          </p>
        </div>
      </section>

      {/* 01 WHO WE ARE */}
      <section className="py-20 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-kpg-gold-600">
                01 / WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-kpg-green-900 leading-tight">
                An Integrated Timber & Freight Operation.
              </h2>
              <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
                PT Karunia Panca Gemilang is an Indonesian company engaged in the wood processing and plywood industry, with operational focus on veneer processing, plywood supply, and cargo freight logistics.
              </p>
              <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
                We support industrial and commercial requirements by combining processing operations, material supply, and reliable heavy cargo transport.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-kpg-border h-[380px] w-full img-zoom-container">
                <Image
                  src="https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 WHAT WE DO */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold text-kpg-gold-600">
              02 / WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-kpg-green-900">
              Three Integrated Business Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-3">
              <h3 className="text-xl font-bold text-kpg-green-900">Wood Processing</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Processing wood materials through controlled operations to support product supply requirements.
              </p>
            </div>

            <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-3">
              <h3 className="text-xl font-bold text-kpg-green-900">Plywood & Veneer</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Providing plywood products and processed veneer sheets for industrial and commercial applications.
              </p>
            </div>

            <div className="border-t-2 border-kpg-gold-500 pt-6 space-y-3">
              <h3 className="text-xl font-bold text-kpg-green-900">Transportation & Freight</h3>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Heavy-duty cargo transportation supporting product distribution and raw material logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 OUR APPROACH */}
      <section className="py-20 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold text-kpg-gold-600">
              03 / OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-kpg-green-900">
              Factual Operational Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-kpg-border pt-6 space-y-2">
              <span className="text-xs font-mono text-kpg-gold-600 font-bold">01. PRODUCT</span>
              <h4 className="text-base font-bold text-kpg-green-900">Product Sourcing</h4>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Understanding product requirements for industrial and commercial applications.
              </p>
            </div>

            <div className="border-t border-kpg-border pt-6 space-y-2">
              <span className="text-xs font-mono text-kpg-gold-600 font-bold">02. PROCESS</span>
              <h4 className="text-base font-bold text-kpg-green-900">Operational Execution</h4>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Consistent execution across processing, veneer, and trading.
              </p>
            </div>

            <div className="border-t border-kpg-border pt-6 space-y-2">
              <span className="text-xs font-mono text-kpg-gold-600 font-bold">03. QUALITY</span>
              <h4 className="text-base font-bold text-kpg-green-900">Process Consistency</h4>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Focus on product and process consistency to meet client expectations.
              </p>
            </div>

            <div className="border-t border-kpg-border pt-6 space-y-2">
              <span className="text-xs font-mono text-kpg-gold-600 font-bold">04. DELIVERY</span>
              <h4 className="text-base font-bold text-kpg-green-900">Freight Logistics</h4>
              <p className="text-xs text-kpg-text-secondary font-light leading-relaxed">
                Supporting product movement through KPG Transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 OUR COMMITMENT */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4 text-left">
          <span className="text-xs font-mono font-bold text-kpg-gold-600">
            04 / OUR COMMITMENT
          </span>
          <h2 className="text-3xl font-bold text-kpg-green-900">
            Operational Reliability
          </h2>
          <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
            We are committed to maintaining operational focus across our processing activities, product supply channels, and transportation services, delivering dependable service to our clients and business partners.
          </p>
        </div>
      </section>

      {/* 05 OUR DIRECTION */}
      <section className="py-20 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4 text-left">
          <span className="text-xs font-mono font-bold text-kpg-gold-600">
            05 / OUR DIRECTION
          </span>
          <h2 className="text-3xl font-bold text-kpg-green-900">
            Strategic Direction
          </h2>
          <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
            Our goal is to build long-term corporate relationships by maintaining consistency in wood processing, veneer supply, plywood trading, and cargo logistics services.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
