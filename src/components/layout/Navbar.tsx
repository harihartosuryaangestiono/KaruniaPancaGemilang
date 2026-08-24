"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { KpgLogo } from "@/components/brand/KpgLogo";
import { NAV_LINKS } from "@/lib/constants";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Determine if header should be transparent (Only on Homepage when at top)
  const isTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-gradient-to-b from-black/75 via-black/45 to-transparent border-transparent py-3 sm:py-4"
          : "bg-white/95 backdrop-blur-md shadow-subtle border-b border-kpg-border py-2 sm:py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Left - Perfectly Balanced Corporate Proportion */}
          <KpgLogo imageClassName="h-12 sm:h-14 md:h-16 lg:h-18 w-auto" />

          {/* Desktop Menu Center */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm lg:text-base font-semibold transition-all duration-200 rounded-md relative ${
                    isTransparent
                      ? isActive
                        ? "text-white font-bold drop-shadow-md"
                        : "text-gray-100 hover:text-kpg-gold-400 drop-shadow-sm"
                      : isActive
                      ? "text-kpg-green-900 font-bold"
                      : "text-kpg-text-secondary hover:text-kpg-green-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-[2.5px] rounded-full ${
                        isTransparent ? "bg-kpg-gold-400 shadow-md" : "bg-kpg-gold-500"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 text-xs lg:text-sm font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-kpg-gold-500 focus:ring-offset-2 ${
                isTransparent
                  ? "bg-kpg-gold-500 hover:bg-kpg-gold-400 text-kpg-green-900"
                  : "bg-kpg-green-900 hover:bg-kpg-green-800 text-white"
              }`}
            >
              <span>Contact Us</span>
              <ArrowRight className={`w-4 h-4 ${isTransparent ? "text-kpg-green-900" : "text-kpg-gold-400"}`} />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-kpg-gold-500 ${
                isTransparent
                  ? "text-white bg-black/40 hover:bg-black/60"
                  : "text-kpg-green-900 hover:bg-kpg-green-50"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-kpg-border shadow-elevated px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-kpg-green-50 text-kpg-green-900 font-semibold border-l-4 border-kpg-gold-500"
                      : "text-kpg-text-secondary hover:bg-kpg-bg-offwhite hover:text-kpg-green-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-kpg-border">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-kpg-green-900 text-white font-semibold py-3 px-4 rounded-lg text-sm shadow-sm hover:bg-kpg-green-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-kpg-gold-400" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
