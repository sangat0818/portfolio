import type { Profile } from "./types";

export const profile: Profile = {
  name: "Paban Kumar Adhikari",
  role: "Director • Educator • Master Trainer",
  eyebrow: "DIRECTOR • EDUCATOR • MASTER TRAINER",
  headline: "Empowering people through meaningful learning experiences.",
  introduction:
    "Dynamic development professional with over 30 years of experience in child-friendly education, life and financial skills, curriculum and material design, training facilitation, social mobilization, disaster response, and advocacy.",
  email: "paban@samunnatnepal.org.np",
  phone: "9851133843",
  linkedIn: "[LinkedIn URL]",
  location: "Kathmandu, Nepal",
  availability: "[Availability]",
  cvUrl: "/resume.doc",
  siteUrl: "https://example.com",
  portrait: {
    src: "/portfolio.jpeg",
    alt: "Professional portrait of Paban Kumar Adhikari",
    caption: "Professional portrait",
    isPlaceholder: false,
  },
  isPlaceholder: false,
};

export const about = {
  heading: "Learning that creates lasting change.",
  intro:
    "I design learning spaces where people feel welcome to participate, reflect, and put new ideas into practice.",
  paragraphs: [
    "Proven leadership as a Director and Trainer, with a strong track record in curriculum development, project coordination, training delivery, monitoring, and policy-level collaboration across Nepal’s education and social sectors.",
    "My approach combines careful listening, participatory methods, and context-sensitive design—from Master Training of Trainers to grassroots facilitation—shaped around the people in the room and the change they need to create.",
  ],
  expertise: [
    "Formal & Non-Formal Education",
    "Curriculum & Materials",
    "Training Design & Facilitation",
    "Child-Centered / ABL",
    "Life Skills & Financial Literacy",
    "Policy & Org Development",
    "Community Engagement & Research",
  ],
  snapshot: [
    { value: "30+", label: "Years of experience" },
    { value: "MA, MBA & BEd", label: "Education & training" },
    { value: "50+", label: "Districts reached across Nepal" },
  ],
};

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Experience", href: "/#experience" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
];
