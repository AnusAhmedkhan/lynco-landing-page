import GuidedPageHero from "@/components/guides/GuidedPageHero";
import WhatsappGuideStepsSection from "@/components/guides/WhatsappGuideStepsSection";

export default function Page() {
  return (
    <div className="flex flex-col">
      <GuidedPageHero
        badgeKey="whatsappGuide.hero.badge"
        titleKey="whatsappGuide.hero.title"
        titleHighlightKey="whatsappGuide.hero.titleHighlight"
        descriptionKey="whatsappGuide.hero.description"
      />
      <WhatsappGuideStepsSection />
    </div>
  );
}
