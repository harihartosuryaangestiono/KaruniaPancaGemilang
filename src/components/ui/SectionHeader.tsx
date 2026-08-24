import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
  light = false,
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${
            light
              ? "bg-white/10 text-kpg-gold-400 border border-white/20"
              : "bg-kpg-green-50 text-kpg-green-900 border border-kpg-green-100"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-kpg-gold-500" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          light ? "text-white" : "text-kpg-text-primary"
        }`}
      >
        {title}
      </h2>

      <div
        className={`h-0.5 w-12 bg-kpg-gold-500 rounded-full ${
          isCenter ? "mx-auto" : ""
        }`}
      />

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-kpg-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
