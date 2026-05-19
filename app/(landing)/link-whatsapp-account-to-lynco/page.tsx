import ConnectionGuideStepsSection from "@/components/guides/ConnectionGuideStepsSection";
import GuidedPageHero from "@/components/guides/GuidedPageHero";

export default function Page() {
  return (
    <div className="flex flex-col">
      <GuidedPageHero
        badgeKey="connectionGuide.hero.badge"
        titleKey="connectionGuide.hero.title"
        titleHighlightKey="connectionGuide.hero.titleHighlight"
        descriptionKey="connectionGuide.hero.description"
        requirementsTitleKey="connectionGuide.hero.requirements.title"
        requirementsDescriptionKey="connectionGuide.hero.requirements.description"
      />
      <ConnectionGuideStepsSection />
    </div>
  );
}
