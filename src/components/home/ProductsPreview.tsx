import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "@/components/ui/AnimatedSection";

export const ProductsPreview: React.FC = () => {
  return (
    <section className="py-24 bg-kpg-bg-offwhite border-b border-kpg-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up" className="mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-kpg-gold-600">
            PRODUCT PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-kpg-green-900 mt-2">
            Products
          </h2>
          <p className="text-base text-kpg-text-secondary font-light mt-3">
            Plywood and veneer materials supporting industrial, commercial, and construction requirements.
          </p>
        </AnimatedSection>

        {/* Editorial Product Split Showcase */}
        <AnimatedStagger className="space-y-16">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <AnimatedStaggerItem key={cat.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-kpg-border pt-12 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 ${
                    idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative h-[340px] sm:h-[420px] w-full rounded-2xl overflow-hidden border border-kpg-border img-zoom-container shadow-sm">
                    <Image
                      src={cat.image}
                      alt={`${cat.title} - PT Karunia Panca Gemilang`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-kpg-gold-600">
                    Category 0{idx + 1}
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-bold text-kpg-green-900">
                    {cat.title}
                  </h3>

                  <p className="text-base text-kpg-text-secondary font-light leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 pt-2">
                    {cat.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="text-xs sm:text-sm text-kpg-text-secondary flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500 mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Factual Disclaimer */}
                  <p className="text-xs text-kpg-text-muted italic pt-1">
                    * Exact product specifications available upon request.
                  </p>

                  {/* Link */}
                  <div className="pt-3">
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-2.5 bg-kpg-green-900 hover:bg-kpg-green-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-colors shadow-sm group"
                    >
                      <span>View {cat.title} Details</span>
                      <ArrowRight className="w-4 h-4 text-kpg-gold-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
};
