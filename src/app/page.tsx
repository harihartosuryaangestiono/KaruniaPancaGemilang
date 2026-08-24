import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { BusinessAreas } from "@/components/home/BusinessAreas";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { ProductApplications } from "@/components/home/ProductApplications";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { TransportationPreview } from "@/components/home/TransportationPreview";
import { QualityReliability } from "@/components/home/QualityReliability";
import { WhyChooseKpg } from "@/components/home/WhyChooseKpg";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <BusinessAreas />
      <ProductsPreview />
      <ProductApplications />
      <CapabilitiesSection />
      <TransportationPreview />
      <QualityReliability />
      <WhyChooseKpg />
      <ContactCTA />
    </>
  );
}
