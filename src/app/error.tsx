"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error internally if monitoring service is configured
    console.error("Unhandled component error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-kpg-bg-offwhite px-4 py-20">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-kpg-border shadow-subtle text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200/60">
          <AlertCircle className="w-7 h-7 text-kpg-gold-600" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-kpg-gold-600">
            SYSTEM NOTICE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-kpg-green-900">
            Unexpected Error
          </h1>
          <p className="text-xs sm:text-sm text-kpg-text-secondary font-light leading-relaxed">
            An unexpected error occurred while loading this section. Please try again or return to the homepage.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-kpg-green-900 hover:bg-kpg-green-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-kpg-gold-400" />
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-kpg-bg-offwhite hover:bg-kpg-border text-kpg-green-900 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg border border-kpg-border transition-colors"
          >
            <Home className="w-4 h-4 text-kpg-gold-600" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
