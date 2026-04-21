/**
 * Single source of truth for every positioning variant on phidea.eu.
 * Every page registers itself with a variant id; that id is injected into
 * hidden form fields and into PostHog as a super-property, so ad spend,
 * form submissions, and product analytics all share one vocabulary.
 */

export type VariantId =
  // Umbrella + retired
  | "flagship-observability"
  | "distribution"
  | "evidence"
  | "developers"
  | "synthetic"
  | "presence-test"
  | "newsletter"
  | "angles-index"
  // Tier 1 — Growth / distribution narrow hooks
  | "ai-visibility"
  | "competitor-share"
  | "custom-gpt"
  | "ai-channel"
  | "ai-attribution"
  // Tier 2 — AI-ops narrow hooks
  | "ai-monitoring"
  | "model-drift"
  | "hallucination-guardrail"
  | "audit-bundle"
  // Tier 3 — Compliance / governance narrow hooks
  | "regulator-mapping"
  | "ais-program"
  | "adverse-decision-trail"
  | "ecdis-oversight"
  | "bias-testing"
  // Tier 4 — Actuarial / MRM narrow hooks
  | "mrm-llms"
  | "predictive-monitoring"
  | "augmented-underwriting"
  | "portfolio-drift"
  // Industries
  | "insurance"
  | "banking"
  | "healthcare"
  | "pharma"
  | "legal"
  | "aviation";

export interface Variant {
  id: VariantId;
  path: string;
  title: string;
  description: string;
  shortLabel: string;
  primaryKpi: string;
  audience: string;
}

export const variants: Record<VariantId, Variant> = {
  "flagship-observability": {
    id: "flagship-observability",
    path: "/",
    title: "Phidea — AI governance for insurers",
    description:
      "Phidea is the AI governance layer for insurers — umbrella over observability, evidence, and synthetic testing on every model in underwriting, claims, and distribution.",
    shortLabel: "Flagship",
    primaryKpi: "Demo request",
    audience: "Umbrella — Heads of AI, insurance CTOs, AI-ops leads",
  },
  distribution: {
    id: "distribution",
    path: "/distribution.html",
    title: "Phidea — Your carrier inside every AI assistant",
    description:
      "Scan your share of answer on ChatGPT, Claude, Gemini, Perplexity. See who's cited instead. Ship a governed AI app.",
    shortLabel: "Distribution",
    primaryKpi: "Scorecard signup",
    audience: "CMO, Head of Digital, Head of Distribution",
  },
  evidence: {
    id: "evidence",
    path: "/evidence.html",
    title: "Phidea — Your AIS Program in production",
    description:
      "ECDIS log, adverse-decision trail, policy-pack mapping to NAIC, NY DFS, Colorado, EU AI Act, DORA, IDD.",
    shortLabel: "Governance",
    primaryKpi: "Sample bundle request",
    audience: "Compliance, legal, risk leads",
  },
  developers: {
    id: "developers",
    path: "/developers.html",
    title: "Phidea",
    description: "",
    shortLabel: "Developers",
    primaryKpi: "—",
    audience: "Retired — redirects to flagship",
  },
  synthetic: {
    id: "synthetic",
    path: "/synthetic.html",
    title: "Phidea — Catch model drift between audits",
    description:
      "Continuous synthetic-buyer probes. Hallucination classifier. Policy gate. For AI agents in production.",
    shortLabel: "Monitoring",
    primaryKpi: "Demo request",
    audience: "Head of AI, AI-ops, QA at carriers with live AI",
  },
  "presence-test": {
    id: "presence-test",
    path: "/presence-test.html",
    title: "Phidea — Test your AI presence",
    description:
      "Free scorecard. Where your carrier shows up across ChatGPT, Claude, Gemini, Perplexity — and where you don't.",
    shortLabel: "Presence test",
    primaryKpi: "Scorecard signup",
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
      "Internal index of every positioning variant currently under test on phidea.eu.",
    shortLabel: "Angles",
    primaryKpi: "—",
    audience: "Internal / visitor navigation",
  },

  // Tier 1 — Growth / distribution narrow hooks
  "ai-visibility": {
    id: "ai-visibility",
    path: "/ai-visibility.html",
    title: "Phidea — Your insurance products, findable in ChatGPT",
    description:
      "Make your IPIDs grokkable to ChatGPT, Claude, Gemini, Perplexity. Measure coverage weekly.",
    shortLabel: "AI visibility",
    primaryKpi: "Scorecard signup",
    audience: "Distribution, digital — carrier not yet cited by AI",
  },
  "competitor-share": {
    id: "competitor-share",
    path: "/competitor-share.html",
    title: "Phidea — The competitor cited instead of you",
    description:
      "Share of answer per query, per surface, per named competitor. Forty queries per LOB.",
    shortLabel: "Competitor share",
    primaryKpi: "Scorecard signup",
    audience: "CMO, Head of Digital — competitive-intel angle",
  },
  "custom-gpt": {
    id: "custom-gpt",
    path: "/custom-gpt.html",
    title: "Phidea — A Custom GPT compliance will sign off on",
    description:
      "Governed AI app — grounded, classified for IDD, price-checked, audit-logged. Reference agent included.",
    shortLabel: "Custom GPT",
    primaryKpi: "Technical walkthrough",
    audience: "Platform, digital, product teams",
  },
  "ai-channel": {
    id: "ai-channel",
    path: "/ai-channel.html",
    title: "Phidea — AI as a new distribution channel",
    description:
      "Measure AI-assistant traffic to quote, to bind. Attribution inside your existing channel P&L.",
    shortLabel: "AI channel",
    primaryKpi: "Walkthrough",
    audience: "Head of Distribution",
  },
  "ai-attribution": {
    id: "ai-attribution",
    path: "/ai-attribution.html",
    title: "Phidea — Which AI session. Which query. Which bind.",
    description:
      "Tag every AI-assistant conversation at source. Attribution flows to Salesforce, HubSpot, Duck Creek, Guidewire.",
    shortLabel: "AI attribution",
    primaryKpi: "Walkthrough",
    audience: "Growth, analytics, revenue ops",
  },

  // Tier 2 — AI-ops narrow hooks
  "ai-monitoring": {
    id: "ai-monitoring",
    path: "/ai-monitoring.html",
    title: "Phidea — Observability for AI agents in production",
    description:
      "Prompt, response, tool calls, grounding, policy decision — structured traces for every live AI agent.",
    shortLabel: "AI monitoring",
    primaryKpi: "Demo request",
    audience: "Head of AI, AI-ops",
  },
  "model-drift": {
    id: "model-drift",
    path: "/model-drift.html",
    title: "Phidea — Catch vendor model-update drift",
    description:
      "Persona-tagged probes every hour. You know when a provider update breaks your agent.",
    shortLabel: "Model drift",
    primaryKpi: "Demo request",
    audience: "Head of AI, model governance",
  },
  "hallucination-guardrail": {
    id: "hallucination-guardrail",
    path: "/hallucination-guardrail.html",
    title: "Phidea — Block hallucinations before delivery",
    description:
      "Three-layer policy gate. Grounding check, price-accuracy check, hallucination classifier. Safe fallback on flag.",
    shortLabel: "Hallucinations",
    primaryKpi: "Demo request",
    audience: "AI-ops, compliance, product",
  },
  "audit-bundle": {
    id: "audit-bundle",
    path: "/audit-bundle.html",
    title: "Phidea — Regulator audit bundle in one click",
    description:
      "Manifest, signed sessions, policy pack, ECDIS register, flagged-incident list. Pre-mapped to NAIC, NY DFS, EIOPA, DORA.",
    shortLabel: "Audit bundle",
    primaryKpi: "Sample bundle request",
    audience: "Compliance, legal, AI-ops",
  },

  // Tier 3 — Compliance / governance narrow hooks
  "regulator-mapping": {
    id: "regulator-mapping",
    path: "/regulator-mapping.html",
    title: "Phidea — Six regulator frameworks. One mapping.",
    description:
      "Policy packs for NAIC Model Bulletin, NY DFS No. 7, Colorado SB21-169, EU AI Act, DORA, IDD — maintained live.",
    shortLabel: "Regulator mapping",
    primaryKpi: "Walkthrough",
    audience: "Compliance, regulatory affairs",
  },
  "ais-program": {
    id: "ais-program",
    path: "/ais-program.html",
    title: "Phidea — The AIS Program your board signed off on",
    description:
      "Live AI inventory built from gateway traffic. Reconciles against the spreadsheet you maintained by hand.",
    shortLabel: "AIS Program",
    primaryKpi: "Sample inventory",
    audience: "Compliance, risk, AI governance",
  },
  "adverse-decision-trail": {
    id: "adverse-decision-trail",
    path: "/adverse-decision-trail.html",
    title: "Phidea — Adverse-decision explanations, automatically",
    description:
      "Statutorily shaped explanation for every AI-informed adverse decision. Matches NY DFS, NAIC, Colorado SB21-169 tests.",
    shortLabel: "Adverse decisions",
    primaryKpi: "Sample request",
    audience: "Compliance, legal, actuarial",
  },
  "ecdis-oversight": {
    id: "ecdis-oversight",
    path: "/ecdis-oversight.html",
    title: "Phidea — Every ECDIS your models touched, logged",
    description:
      "Automatic tracking of External Consumer Data and Information Sources across all AI inferences.",
    shortLabel: "ECDIS oversight",
    primaryKpi: "Sample register",
    audience: "Compliance, vendor risk, data governance",
  },
  "bias-testing": {
    id: "bias-testing",
    path: "/bias-testing.html",
    title: "Phidea — Protected-class testing per jurisdiction",
    description:
      "Continuous proxy-variable detection on live traffic plus scheduled stress testing against calibrated personas.",
    shortLabel: "Bias testing",
    primaryKpi: "Sample report",
    audience: "Compliance, actuarial, risk",
  },

  // Tier 4 — Actuarial / MRM narrow hooks
  "mrm-llms": {
    id: "mrm-llms",
    path: "/mrm-llms.html",
    title: "Phidea — MRM extended to LLMs",
    description:
      "The instrumentation layer beneath your existing SR 11-7 / SS1/23 framework. Effective challenge generated from the trace.",
    shortLabel: "MRM for LLMs",
    primaryKpi: "Working session",
    audience: "Model risk, actuarial, chief risk",
  },
  "predictive-monitoring": {
    id: "predictive-monitoring",
    path: "/predictive-monitoring.html",
    title: "Phidea — Rate adequacy monitored between reviews",
    description:
      "Rate relativity drift, loss-pick drift, portfolio mix shift — tracked live against plan.",
    shortLabel: "Pricing monitoring",
    primaryKpi: "Working session",
    audience: "Pricing, actuarial, reserving",
  },
  "augmented-underwriting": {
    id: "augmented-underwriting",
    path: "/augmented-underwriting.html",
    title: "Phidea — Augmented underwriting with policy-as-code",
    description:
      "Codify referral rules as policy. Triage, straight-through, refer — without a dev cycle.",
    shortLabel: "UW policy-as-code",
    primaryKpi: "Walkthrough",
    audience: "Chief underwriter, head of UW ops",
  },
  "portfolio-drift": {
    id: "portfolio-drift",
    path: "/portfolio-drift.html",
    title: "Phidea — Portfolio drift against appetite, live",
    description:
      "Live composition vs the risk appetite statement the board signed. Paged before the quarterly review.",
    shortLabel: "Portfolio drift",
    primaryKpi: "Working session",
    audience: "Portfolio manager, chief UW, CRO",
  },
  insurance: {
    id: "insurance",
    path: "/insurance.html",
    title: "Phidea — AI in insurance",
    description: "The primary regulatory frameworks governing AI in insurance — NAIC, NY DFS, Colorado, EU AI Act, DORA, IDD — plus the eighteen operational topics they require.",
    shortLabel: "Insurance",
    primaryKpi: "Newsletter signup",
    audience: "Heads of AI, compliance, risk, actuarial at carriers and reinsurers",
  },
  banking: {
    id: "banking",
    path: "/banking.html",
    title: "Phidea — AI in banking",
    description: "The primary frameworks governing AI in banking — SR 11-7, OCC 2011-12, PRA SS1/23, EU AI Act credit-scoring provisions, DORA, CFPB guidance, Basel.",
    shortLabel: "Banking",
    primaryKpi: "Newsletter signup",
    audience: "Model risk, credit risk, compliance at banks and credit unions",
  },
  healthcare: {
    id: "healthcare",
    path: "/healthcare.html",
    title: "Phidea — AI in healthcare",
    description: "FDA SaMD, HIPAA, ONC HTI-1, EU MDR/IVDR, EU AI Act (medical devices as high-risk), GDPR — the primary texts governing AI in healthcare.",
    shortLabel: "Healthcare",
    primaryKpi: "Newsletter signup",
    audience: "Digital health, clinical informatics, compliance at providers and device makers",
  },
  pharma: {
    id: "pharma",
    path: "/pharma.html",
    title: "Phidea — AI in pharma",
    description: "21 CFR Part 11, FDA AI guidance for drug development, EMA reflection paper, ICH E6(R3), EU AI Act — the primary frameworks for AI in pharma.",
    shortLabel: "Pharma",
    primaryKpi: "Newsletter signup",
    audience: "Regulatory affairs, clinical operations, quality, pharmacovigilance",
  },
  legal: {
    id: "legal",
    path: "/legal.html",
    title: "Phidea — AI in legal practice",
    description: "ABA Opinion 512, state bar guidance, federal and state court standing orders, EU AI Act, SRA and Law Society guidance, GDPR — the professional-responsibility framework for AI in law.",
    shortLabel: "Legal",
    primaryKpi: "Newsletter signup",
    audience: "General counsel, partners, professional responsibility leads at law firms",
  },
  aviation: {
    id: "aviation",
    path: "/aviation.html",
    title: "Phidea — AI in aviation",
    description: "EASA AI Concept Paper, FAA AI roadmap, ICAO study group, UK CAA strategy, EUROCAE WG-114 / SAE G-34 draft standard ED-324 / AS6983 — the primary frameworks for AI in aviation safety assurance.",
    shortLabel: "Aviation",
    primaryKpi: "Newsletter signup",
    audience: "Safety, certification, systems engineering, and pilot-union AI leads",
  },
};
