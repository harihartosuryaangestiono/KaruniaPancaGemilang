import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-kpg-green-900 text-white relative overflow-hidden">
      {/* Decorative Gold Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kpg-gold-500 via-kpg-gold-400 to-kpg-gold-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-kpg-gold-400">
              08 — CONTACT
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Have a Requirement? Let&apos;s Talk.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-light">
              Whether you are looking for plywood products, veneer, material supply, or transportation support, our team is ready to discuss your business requirements.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-start lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-kpg-gold-500 hover:bg-kpg-gold-400 text-kpg-green-900 font-bold text-base px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-kpg-green-900" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
