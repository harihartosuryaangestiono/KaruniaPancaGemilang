import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { BusinessAreas } from "@/components/home/BusinessAreas";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { ProductApplications } from "@/components/home/ProductApplications";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { TransportationPreview } from "@/components/home/TransportationPreview";
import { OurApproach } from "@/components/home/OurApproach";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      {/* 01 HERO */}
      <HeroSection />

      {/* 02 WHO WE ARE */}
      <WhoWeAre />

      {/* 03 OUR BUSINESS */}
      <BusinessAreas />

      {/* 04 PRODUCTS */}
      <ProductsPreview />

      {/* 05 WHERE OUR PRODUCTS FIT */}
      <ProductApplications />

      {/* 06 HOW WE OPERATE */}
      <CapabilitiesSection />

      {/* 07 TRANSPORTATION */}
      <TransportationPreview />

      {/* 08 OUR APPROACH */}
      <OurApproach />

      {/* 09 CONTACT */}
      <ContactCTA />
    </>
  );
}
