import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

export const ProductsPreview: React.FC = () => {
  return (
    <section className="py-24 bg-kpg-bg-offwhite border-b border-kpg-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            badge="Product Portfolio"
            title="Veneer & Plywood Products"
            subtitle="Engineered wood products manufactured and traded to meet exact industrial standards."
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-kpg-green-900 hover:bg-kpg-green-800 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all shadow-sm shrink-0 self-start md:self-auto"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 text-kpg-gold-400" />
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PRODUCT_CATEGORIES.map((prod) => (
            <div
              key={prod.title}
              className="bg-white rounded-2xl border border-kpg-border p-6 sm:p-8 shadow-subtle hover:shadow-premium transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 gap-6"
            >
              <div className="sm:col-span-6 relative h-56 sm:h-auto rounded-xl overflow-hidden bg-kpg-green-900">
                <Image
                  src={prod.image}
                  alt={`${prod.title} - PT Karunia Panca Gemilang`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 30vw"
                />
              </div>

              <div className="sm:col-span-6 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-kpg-gold-600">
                    Industrial Grade
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-kpg-green-900 mt-1">
                    {prod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-kpg-text-secondary mt-2 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Feature list */}
                  <ul className="mt-4 space-y-2">
                    {prod.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-kpg-text-primary">
                        <Check className="w-3.5 h-3.5 text-kpg-gold-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-kpg-border/60">
                  <p className="text-[11px] text-kpg-text-muted italic mb-3">
                    Product specifications available upon request.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kpg-green-900 hover:text-kpg-gold-600 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-kpg-gold-500" />
                    <span>Request Product Info</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
