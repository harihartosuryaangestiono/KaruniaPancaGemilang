import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldAlert, Award, FileCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const QualityReliability: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-kpg-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="Quality Commitment"
              title="Consistency in Every Process."
            />

            <p className="text-base sm:text-lg text-kpg-text-secondary leading-relaxed">
              From material processing to product handling and transportation, PT Karunia Panca Gemilang focuses on maintaining reliable operational standards and consistent service for its customers and business partners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-kpg-bg-offwhite border border-kpg-border space-y-2">
                <FileCheck className="w-5 h-5 text-kpg-gold-500" />
                <h4 className="text-sm font-bold text-kpg-green-900">Process Inspection</h4>
                <p className="text-xs text-kpg-text-secondary leading-relaxed">
                  Careful evaluation of raw timber moisture, veneer thickness, and bonding consistency.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-kpg-bg-offwhite border border-kpg-border space-y-2">
                <Award className="w-5 h-5 text-kpg-gold-500" />
                <h4 className="text-sm font-bold text-kpg-green-900">Standardized Handling</h4>
                <p className="text-xs text-kpg-text-secondary leading-relaxed">
                  Proper stacking, moisture protection, and secure warehouse storage prior to dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Imagery Stack */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-premium border-2 border-white bg-kpg-green-900">
              <div className="relative h-[360px] sm:h-[440px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop"
                  alt="Quality Control Plywood Sheets PT Karunia Panca Gemilang"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kpg-green-900/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-kpg-border shadow-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-kpg-gold-500 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-kpg-green-900">
                        Operational Consistency
                      </h4>
                      <p className="text-xs text-kpg-text-secondary">
                        Every batch of veneer, plywood, and freight delivery meets defined quality criteria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
