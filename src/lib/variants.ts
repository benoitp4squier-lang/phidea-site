/**
 * Single source of truth for every positioning variant on phidea.eu.
 * Every page registers itself with a variant id; that id is injected into
 * hidden form fields and into PostHog as a super-property, so ad spend,
 * form submissions, and product analytics all share one vocabulary.
 */

export type VariantId =
  | "flagship-observability"
  | "insurance"
  | "distribution"
  | "evidence"
  | "developers"
  | "synthetic"
  | "presence-test"
  | "newsletter"
  | "angles-index";

export interface Variant {
  id: VariantId;
  path: string; // URL path (without leading slash for /)
  title: string; // browser tab title
  description: string; // meta description
  shortLabel: string; // pill shown in the nav subtitle
  primaryKpi: string;
  audience: string;
}

export const variants: Record<VariantId, Variant> = {
  "flagship-observability": {
    id: "flagship-observability",
    path: "/",
    title: "Phidea — See every AI answer. Prove every regulation.",
    description:
      "Phidea is the observability and governance layer for AI in regulated insurance. Synthetic buyers, live regulatory tests, session traces, and cross-model visibility — in one dashboard.",
    shortLabel: "Observability",
    primaryKpi: "Demo request",
    audience: "Heads of AI, insurance CTOs, AI-ops leads",
  },
  insurance: {
    id: "insurance",
    path: "/insurance.html",
    title: "Phidea — AI governance for insurance.",
    description:
      "One platform for observability, evidence, and synthetic testing on every AI model running in underwriting, distribution, and claims. Aligned to NAIC, NYDFS, EU AI Act, DORA, and IDD.",
    shortLabel: "Insurance",
    primaryKpi: "Demo request",
    audience: "AI, compliance, and actuarial leads at carriers, reinsurers, Lloyd's syndicates, EU specialty",
  },
  distribution: {
    id: "distribution",
    path: "/distribution.html",
    title: "Phidea — Be the insurance answer inside every AI agent",
    description:
      "Your products, natively inside ChatGPT, Claude, Gemini, and Perplexity. Grounded in your IPIDs, governed by your compliance policy, tracked end-to-end.",
    shortLabel: "Distribution",
    primaryKpi: "Demo request",
    audience: "CMOs, Heads of Distribution, D2C carrier growth teams",
  },
  evidence: {
    id: "evidence",
    path: "/evidence.html",
    title: "Phidea — Audit-ready AI. By default.",
    description:
      "Policy-as-code, immutable session ledger, one-click regulator bundles. The evidence layer for AI in regulated insurance.",
    shortLabel: "Evidence",
    primaryKpi: "Sample bundle request",
    audience: "Heads of Compliance, Legal, Risk at carriers",
  },
  developers: {
    id: "developers",
    path: "/developers.html",
    title: "Phidea — The governed MCP for insurance",
    description:
      "One MCP tool, policy packs, open reference agent (insurance-agent-v1). The platform for CTOs and engineering leads shipping AI in regulated insurance.",
    shortLabel: "Developers",
    primaryKpi: "Technical walkthrough",
    audience: "CTOs, platform leads, insurance engineering teams",
  },
  synthetic: {
    id: "synthetic",
    path: "/synthetic.html",
    title: "Phidea — Let AI test your AI, 24/7",
    description:
      "Continuous red-teaming for AI in insurance. Behavioral personas, adversarial probes, regression alerts. Catch drift before regulators do.",
    shortLabel: "Synthetic buyers",
    primaryKpi: "Demo request",
    audience: "Heads of AI / AI-ops / QA at carriers with live AI",
  },
  "presence-test": {
    id: "presence-test",
    path: "/presence-test.html",
    title: "Phidea — Test your AI presence",
    description:
      "Free scorecard. See where your carrier shows up across ChatGPT, Claude, Gemini, and Perplexity — and where you don't.",
    shortLabel: "Presence test",
    primaryKpi: "Scorecard signup (email)",
    audience: "Cold traffic — LinkedIn, Twitter, paid ads",
  },
  newsletter: {
    id: "newsletter",
    path: "/newsletter.html",
    title: "Phidea — AI in insurance, weekly",
    description:
      "A weekly briefing on AI in insurance: regulatory moves, model launches, carrier experiments. One email, Tuesdays.",
    shortLabel: "Newsletter",
    primaryKpi: "Email subscription",
    audience: "Everyone else — content-driven social, SEO, referrals",
  },
  "angles-index": {
    id: "angles-index",
    path: "/angles.html",
    title: "Phidea — Angles under test",
    description:
      "Internal index of the positioning variants currently under test on phidea.eu.",
    shortLabel: "Angles",
    primaryKpi: "—",
    audience: "Internal / visitor navigation",
  },
};
