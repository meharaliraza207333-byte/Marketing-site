export type ProjectCategory = "Email Marketing" | "Automation" | "Social Media" | "Content Strategy";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  format: string;
  description: string;
  palette: "lime" | "lavender" | "coral" | "blue";
  cover: { kicker: string; headline: string; caption: string };
  featured?: boolean;
  concept?: boolean;
  overview: string;
  challenge: string;
  goals: string[];
  strategy: string;
  execution: string[];
  results?: string[];
  lessons: string;
};

export const services = [
  {
    number: "01",
    title: "Email campaign strategy",
    copy: "A clear brief, a sharper offer, and a sequence that respects the person on the other side of the send.",
    group: "Email",
  },
  {
    number: "02",
    title: "Newsletter design",
    copy: "Editorial layouts that feel collectible—readable on a phone, distinctive in a crowded inbox.",
    group: "Email",
  },
  {
    number: "03",
    title: "Email automation",
    copy: "Welcome, nurture, and post-purchase flows that sound like a person, not a drip machine.",
    group: "Email",
  },
  {
    number: "04",
    title: "Audience segmentation",
    copy: "Smarter lists, quieter sends, and messages that match where someone actually is.",
    group: "Email",
  },
  {
    number: "05",
    title: "Campaign optimization",
    copy: "Subject lines, timing, creative, and cadence reviewed against what the data actually says.",
    group: "Email",
  },
  {
    number: "06",
    title: "Social media strategy",
    copy: "A point of view, content pillars, and a presence that can be sustained without burning out the brand.",
    group: "Social",
  },
  {
    number: "07",
    title: "Content calendars",
    copy: "A practical monthly rhythm so the feed stays intentional instead of last-minute.",
    group: "Social",
  },
  {
    number: "08",
    title: "Content creation coordination",
    copy: "Briefs, reviews, and a shared language between strategy, design, and whoever is making the work.",
    group: "Social",
  },
  {
    number: "09",
    title: "Account management",
    copy: "Day-to-day care for the channels: publishing, community responses, and a calm operating rhythm.",
    group: "Social",
  },
  {
    number: "10",
    title: "Performance reporting",
    copy: "Plain-language reporting that explains what moved, what didn’t, and what we should try next.",
    group: "Both",
  },
];

export const serviceGroups = [
  {
    number: "01",
    title: "Email, with a point of view.",
    copy: "Campaign strategy, newsletter design, lifecycle automation, segmentation, and ongoing optimization—built around the people receiving it.",
    items: services.filter((item) => item.group === "Email").map((item) => item.title),
  },
  {
    number: "02",
    title: "Social that earns attention.",
    copy: "A practical social presence with an editorial rhythm: strategy, calendars, coordination, community-minded management, and reporting.",
    items: [
      ...services.filter((item) => item.group === "Social").map((item) => item.title),
      "Performance reporting",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Listen & locate",
    copy: "We start with the real question: who needs to hear this, and what should they feel, know, or do next?",
  },
  {
    number: "02",
    title: "Shape the system",
    copy: "Insight becomes a campaign architecture, content calendar, or automation map that a team can actually run.",
  },
  {
    number: "03",
    title: "Make it land",
    copy: "Art direction, copy, and coordination—tight enough to ship, open enough for a good idea to survive.",
  },
  {
    number: "04",
    title: "Learn out loud",
    copy: "Reporting that is honest about what worked, then a next move that is more precise than the last.",
  },
];

export const projects: Project[] = [
  {
    slug: "studio-sunday-launch",
    title: "The Sunday Edit",
    client: "Studio Sunday",
    category: "Email Marketing",
    format: "Launch campaign",
    description: "A calm, collectible weekly email concept for a considered homeware label.",
    palette: "lime",
    cover: { kicker: "Issue 01 · Sunday", headline: "Objects\nwith a pause.", caption: "A weekly edit, not a weekly shout." },
    featured: true,
    concept: true,
    overview:
      "Studio Sunday is a demonstration brand: quiet homeware, strong materials, and a customer who would rather be invited than interrupted.",
    challenge: "Create a launch email system that feels like an editorial destination, not another promotion in the inbox.",
    goals: ["Set an identifiable editorial rhythm", "Make product discovery feel considered", "Create reusable campaign modules"],
    strategy:
      "A weekly ‘Sunday Edit’ anchors the concept: one cultural prompt, a tightly curated product selection, and an invitation to slow down. The system is designed around repeatable story slots rather than rigid templates.",
    execution: ["Editorial content architecture", "Responsive newsletter art direction", "Reusable modular layout", "Campaign rollout plan"],
    lessons: "Consistency is more memorable when the format has room for a fresh point of view each week.",
  },
  {
    slug: "the-good-kind-welcome-flow",
    title: "The Good Kind Welcome",
    client: "The Good Kind",
    category: "Automation",
    format: "Lifecycle flow",
    description: "A values-led welcome sequence that turns a first click into a relationship.",
    palette: "lavender",
    cover: { kicker: "Flow 01 · Welcome", headline: "A better\nhello.", caption: "Four notes. One relationship." },
    featured: true,
    concept: true,
    overview:
      "The Good Kind is a demonstration skincare brand with a values-led voice and a first impression that should feel like hospitality, not a funnel.",
    challenge: "Design a welcome experience that introduces an intentional brand voice without front-loading every selling point.",
    goals: ["Orient new subscribers", "Create preference signals", "Build a gentle path to first purchase"],
    strategy:
      "The concept reframes the welcome flow as a mini field guide. Each message has one job: introduce, invite, reassure, then recommend based on the reader’s expressed interests.",
    execution: ["Flow mapping", "Preference capture concept", "Copy direction", "Message hierarchy"],
    lessons: "The best automation can feel less like automation when each message is useful on its own.",
  },
  {
    slug: "common-thread-social-system",
    title: "Common Thread",
    client: "Common Thread",
    category: "Social Media",
    format: "Social system",
    description: "A content-led social direction for a community-minded apparel studio.",
    palette: "coral",
    cover: { kicker: "System 03 · Social", headline: "Made.\nWorn.\nShared.", caption: "A cadence a small team can keep." },
    featured: true,
    concept: true,
    overview:
      "Common Thread is a demonstration apparel studio: handmade pieces, a loyal community, and a feed that had more product than personality.",
    challenge: "Turn a visually varied product world into a social presence that feels connected, human, and easy to sustain.",
    goals: ["Establish clear content pillars", "Balance product and community stories", "Create a manageable monthly cadence"],
    strategy:
      "A three-part system—Made, Worn, Shared—creates an editorial container for product details, real-world styling, and community conversation.",
    execution: ["Social strategy", "Monthly content calendar", "Creative briefing framework", "Community response guidance"],
    lessons: "A content system becomes useful when it makes creative decisions easier, not more numerous.",
  },
  {
    slug: "field-notes-content-direction",
    title: "Field Notes",
    client: "Verde Journal",
    category: "Content Strategy",
    format: "Editorial direction",
    description: "A seasonal content plan designed to make an independent journal more shareable.",
    palette: "blue",
    cover: { kicker: "Season 02 · Notes", headline: "Go\ndeeper.", caption: "Long stories, shorter ways in." },
    concept: true,
    overview:
      "Verde Journal is a demonstration independent title: long features, careful photography, and a social presence that struggled to carry the nuance.",
    challenge: "Give long-form, thoughtful stories a livelier social life without flattening their nuance.",
    goals: ["Extend the life of each feature", "Create an adaptable editorial calendar", "Strengthen cross-channel cohesion"],
    strategy:
      "Every feature is translated into a small ecosystem of pull-quotes, field observations, reading prompts, and newsletter moments—each native to its channel.",
    execution: ["Content atomization map", "Channel-specific editorial calendar", "Creative coordination guide"],
    lessons: "Repurposing works best when every adaptation adds a new way into the original idea.",
  },
];

export const tools = [
  "Klaviyo",
  "Mailchimp",
  "Figma",
  "Notion",
  "Later",
  "Meta Business Suite",
  "Google Analytics",
  "Canva",
];
