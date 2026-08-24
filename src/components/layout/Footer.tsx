import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_CONFIG } from "@/config/company";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kpg-green-900 text-white pt-16 pb-10 border-t-4 border-kpg-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Summary */}
          <div className="md:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-kpg-gold-500 rounded-2xl bg-white p-3.5 sm:p-4 shadow-xl border border-white/20 transition-transform duration-300 hover:scale-[1.02]"
              aria-label="PT Karunia Panca Gemilang Home"
            >
              <Image
                src="/brand/kpg-logo-card.png"
                alt="PT Karunia Panca Gemilang Logo"
                width={450}
                height={160}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                priority
              />
            </Link>

            <p className="text-xs font-bold text-kpg-gold-400 uppercase tracking-wider">
              Wood Processing • Plywood & Veneer • Transportation & Freight
            </p>
            
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              {COMPANY_CONFIG.description}
            </p>

            <div className="pt-2 text-xs text-gray-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-kpg-gold-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_CONFIG.address}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="flex items-center gap-1.5 hover:text-kpg-gold-400 transition-colors font-mono">
                  <Phone className="w-3.5 h-3.5 text-kpg-gold-400" />
                  <span>{COMPANY_CONFIG.phone}</span>
                </a>
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="flex items-center gap-1.5 hover:text-kpg-gold-400 transition-colors font-mono">
                  <Mail className="w-3.5 h-3.5 text-kpg-gold-400" />
                  <span>{COMPANY_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="md:col-span-2 space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-kpg-gold-500">
              Company
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-white transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="md:col-span-2 space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-kpg-gold-500">
              Products
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/products/plywood" className="hover:text-white transition-colors">
                  Plywood
                </Link>
              </li>
              <li>
                <Link href="/products/veneer" className="hover:text-white transition-colors">
                  Veneer
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Portfolio Index
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Transportation */}
          <div className="md:col-span-3 space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-kpg-gold-500">
              Transportation
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/transportation" className="hover:text-white transition-colors">
                  Transportation & Freight
                </Link>
              </li>
              <li>
                <Link href="/transportation#heavy-duty" className="hover:text-white transition-colors">
                  Tronton Fleet Logistics
                </Link>
              </li>
              <li>
                <Link href="/transportation#distribution" className="hover:text-white transition-colors">
                  Product Distribution
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 PT Karunia Panca Gemilang. All rights reserved.</p>
          <p className="text-gray-400">
            Temanggung, Jawa Tengah • Wood Processing, Plywood & Freight Logistics
          </p>
        </div>
      </div>
    </footer>
  );
};
