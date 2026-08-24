import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center space-y-6 max-w-md">
        <span className="font-heading text-7xl font-bold text-kpg-gold-500">404</span>
        <h1 className="font-heading text-3xl font-bold text-kpg-green-900">
          Page Not Found
        </h1>
        <p className="text-sm text-kpg-text-secondary leading-relaxed">
          The requested page could not be located on the PT Karunia Panca Gemilang website.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-kpg-green-900 text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-kpg-green-800 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-kpg-gold-400" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
