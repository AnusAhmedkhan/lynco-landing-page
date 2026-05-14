import CallToActionSection from "@/components/home/CallToActionSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import PricingSection from "@/components/pricing/PricingSection";

export default function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 pt-32 sm:pt-36 md:pt-40">
      <PricingSection />
      <StatisticsSection />
      <CallToActionSection />
    </div>
  );
}
