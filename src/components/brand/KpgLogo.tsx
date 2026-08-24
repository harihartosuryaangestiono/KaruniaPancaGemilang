import React from "react";
import Link from "next/link";
import Image from "next/image";

interface KpgLogoProps {
  variant?: "default" | "light" | "compact";
  className?: string;
  imageClassName?: string;
}

export const KpgLogo: React.FC<KpgLogoProps> = ({
  variant = "default",
  className = "",
  imageClassName = "",
}) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-kpg-gold-500 rounded-lg py-1 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="PT Karunia Panca Gemilang Home"
    >
      <div className="relative flex items-center">
        <Image
          src="/brand/kpg-logo.png"
          alt="PT Karunia Panca Gemilang Logo"
          width={360}
          height={130}
          className={`${
            imageClassName ||
            (variant === "compact"
              ? "h-10 sm:h-11 w-auto"
              : "h-12 sm:h-14 md:h-16 lg:h-18 w-auto")
          } object-contain`}
          priority
        />
      </div>
    </Link>
  );
};
