import React from "react";
import Metadata from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ShieldCheck, Target, Award, Compass, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Learn about PT Karunia Panca Gemilang's company overview, operational commitment, approach, vision, and mission in wood processing and transportation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Company Profile"
            title="About PT Karunia Panca Gemilang"
            subtitle="Engaged in wood processing, veneer production, plywood trading, and heavy-duty transportation services."
          />
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
                Company Overview
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-kpg-green-900 leading-tight">
                An Integrated Industrial Wood & Logistics Operation.
              </h2>
              <p className="text-base text-kpg-text-secondary leading-relaxed">
                PT Karunia Panca Gemilang is a company engaged in the wood processing and plywood industry, with a focus on the production of veneer and plywood. We support industrial needs through wood processing operations that prioritize quality, efficiency, product consistency, reliable supply, and professional service.
              </p>
              <p className="text-base text-kpg-text-secondary leading-relaxed">
                In addition to plywood manufacturing and trading activities, PT Karunia Panca Gemilang also provides transportation and freight services, supporting the distribution of finished products as well as the delivery of materials required for operational needs.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-premium border-2 border-kpg-border bg-kpg-green-900 h-[380px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1200&auto=format&fit=crop"
                  alt="PT Karunia Panca Gemilang Processing Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach & Our Commitment */}
      <section className="py-20 bg-kpg-bg-offwhite border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Approach */}
            <div className="bg-white p-8 rounded-2xl border border-kpg-border shadow-subtle space-y-4">
              <div className="w-12 h-12 rounded-lg bg-kpg-green-50 text-kpg-gold-500 flex items-center justify-center border border-kpg-green-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-kpg-green-900">
                Our Approach
              </h3>
              <p className="text-sm text-kpg-text-secondary leading-relaxed">
                We believe reliable business partnerships are built through a simple formula:
              </p>
              <div className="p-4 rounded-xl bg-kpg-green-900 text-white font-semibold text-center text-sm tracking-wide border-t-2 border-kpg-gold-500">
                Quality + Consistency + Reliability + Trust
              </div>
            </div>

            {/* Our Commitment */}
            <div className="bg-white p-8 rounded-2xl border border-kpg-border shadow-subtle space-y-4">
              <div className="w-12 h-12 rounded-lg bg-kpg-green-50 text-kpg-gold-500 flex items-center justify-center border border-kpg-green-100">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-kpg-green-900">
                Our Commitment
              </h3>
              <p className="text-sm text-kpg-text-secondary leading-relaxed">
                We are committed to continuously improving our operational capabilities and delivering dependable products and services to our customers and business partners throughout Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Our Direction) */}
      <section className="py-24 bg-white border-b border-kpg-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Strategic Direction"
            title="Our Direction"
            subtitle="Guiding our operational growth and long-term customer partnerships."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Vision */}
            <div className="lg:col-span-5 bg-kpg-green-900 text-white p-8 sm:p-10 rounded-2xl border-t-4 border-kpg-gold-500 shadow-premium flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-kpg-gold-400">
                  <Compass className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Vision Statement
                  </span>
                </div>
                <h3 className="font-heading text-3xl font-bold leading-snug">
                  To become a trusted partner in wood products, plywood supply, and transportation services in Indonesia.
                </h3>
              </div>
              <p className="text-xs text-gray-300 pt-8">
                PT Karunia Panca Gemilang Strategic Goals
              </p>
            </div>

            {/* Mission */}
            <div className="lg:col-span-7 bg-kpg-bg-offwhite p-8 sm:p-10 rounded-2xl border border-kpg-border space-y-6">
              <div className="flex items-center gap-2 text-kpg-gold-600">
                <Target className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Mission Directives
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-kpg-green-900">
                Operational Objectives
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Deliver reliable wood and plywood products tailored to commercial needs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Maintain consistent product quality across all veneer and plywood output.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Provide dependable transportation support for regional distribution.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Improve operational efficiency continuously across processing and logistics.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kpg-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-kpg-text-primary">
                    Build long-term relationships with customers and business partners.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
