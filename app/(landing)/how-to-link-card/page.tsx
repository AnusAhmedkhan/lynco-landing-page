import GuidedPageHero from "@/components/guides/GuidedPageHero";
import CreditGuideStepsSection from "@/components/guides/CreditGuideStepsSection";

export default function Page() {
  return (
    <div className="flex flex-col">
      <GuidedPageHero
        badgeKey="creditGuide.hero.badge"
        titleKey="creditGuide.hero.title"
        titleHighlightKey="creditGuide.hero.titleHighlight"
        descriptionKey="creditGuide.hero.description"
        requirementsTitleKey="creditGuide.hero.requirements.title"
        requirementsDescriptionKey="creditGuide.hero.requirements.description"
      />
      <CreditGuideStepsSection />
    </div>
  );
}
