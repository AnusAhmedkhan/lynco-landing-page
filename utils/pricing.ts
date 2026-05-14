export const getPlanColor = (planId: string) => {
  switch (planId) {
    case "starter":
      return "text-bluish-cyan-dark";
    case "pro":
      return "text-orangeCream";
    case "team":
      return "text-primary";
    default:
      return "text-primary";
  }
};

export const getPlanNameKey = (name: string): string => {
  const nameMap: Record<string, string> = {
    Starter: "pricing.plans.starter.name",
    Pro: "pricing.plans.pro.name",
    Team: "pricing.plans.team.name",
  };
  return nameMap[name] || name;
};

export const getPlanDescriptionKey = (name: string): string => {
  const descriptionMap: Record<string, string> = {
    Starter: "pricing.plans.starter.description",
    Pro: "pricing.plans.pro.description",
    Team: "pricing.plans.team.description",
  };
  return descriptionMap[name] || name;
};
