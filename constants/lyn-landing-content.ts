export const LYN_NAV = [
  { href: "#how-it-works", labelKey: "lynLanding.nav.howItWorks" },
  { href: "#features", labelKey: "lynLanding.nav.features" },
  { href: "/pricing", labelKey: "lynLanding.nav.plans" },
  { href: "/contactus", labelKey: "lynLanding.nav.support" },
  { href: "#download", labelKey: "lynLanding.nav.downloadApp" },
] as const;

export const LYN_AUTOMATION_STEPS = [
  {
    title: "Customer sends message",
    body: "The customer makes contact via WhatsApp.",
  },
  {
    title: "Automated service",
    body: "Understands questions, responds like a customer service representative, and suggests appointment times, 24 hours a day, 7 days a week.",
  },
  {
    title: "Automated service",
    body: "Understands questions, responds like a customer service representative, and suggests appointment times, 24 hours a day, 7 days a week.",
  },
  {
    title: "Automated service",
    body: "Understands questions, responds like a customer service representative, and suggests appointment times, 24 hours a day, 7 days a week.",
    stepNumber: "04",
  },
] as const;

export const LYN_POS_FEATURES = [
  "Payments synchronized with Lynco",
  "Complete financial control",
  "Simple and automatic reconciliation",
] as const;

export const LYN_APP_CONTROL = [
  {
    title: "Organized schedule",
    body: "View confirmed times, reschedulings, and real-time availability.",
  },
  {
    title: "Customer management",
    body: "Track each customer's history and have all the information in one place.",
  },
  {
    title: "Instant notifications",
    body: "Receive alerts whenever a customer schedules, pays, or interacts with your business.",
  },
] as const;

export const LYN_PRICING_AUTONOMOUS_FEATURES = [
  "**Automated customer service** via WhatsApp powered by AI.",
  "Unlimited **appointments**",
  "**Intelligent solutions** based on your business.",
  "**Integration** with calendar",
  "Real-time customer **management**",
] as const;

export const LYN_PRICING_MULTI_FEATURES = [
  "**Automated customer service** via WhatsApp powered by AI.",
  "Unlimited **appointments**",
  "**Intelligent solutions** based on your business.",
  "**Integration** with calendar",
  "Real-time customer **management**",
  "**Multiple** professionals (staff)",
  "User **permissions** (without access to **financials**)",
  "**Automatic billing** (0% to 100%)",
  "Automatic **reminders**",
  "Reactivation **campaigns**",
  "Complete payment **center**",
  "**Reports** and metrics",
] as const;

export const LYN_FAQ_ITEMS = [
  {
    q: "How do I sign up for Lynco?",
    a: "You can create your account directly on our website. Once subscribed, simply log in to the mobile app to start managing your business.",
  },
  {
    q: "How much does Lynco cost?",
    a: "Plans start at R$497/month for the Autonomous Plan and R$997/month for the Multiprofessional Plan. See the pricing section above for included features.",
  },
  {
    q: "How do payments work?",
    a: "Lynco helps you collect payments through integrated flows on WhatsApp and the POS, with reconciliation aligned to your operation.",
  },
  {
    q: "What happens if a payment fails?",
    a: "Failed payments can be retried or followed up automatically depending on your configuration, so you can recover revenue without manual chasing.",
  },
] as const;
