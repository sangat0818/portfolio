export type ImageAsset = {
  src: string;
  alt: string;
  caption?: string;
  isPlaceholder?: boolean;
};

export type Profile = {
  name: string;
  role: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  email: string;
  phone: string;
  linkedIn: string;
  location: string;
  availability: string;
  cvUrl?: string;
  siteUrl: string;
  portrait: ImageAsset;
  isPlaceholder: boolean;
};

export type Service = {
  id: string;
  icon: "workshop" | "educator" | "capacity" | "facilitation";
  title: string;
  description: string;
  details: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  audience: string;
  participants: string;
  duration: string;
  focusAreas: string[];
  role: string;
  overview: string;
  challenge: string;
  objectives: string[];
  approach: string;
  highlights: string[];
  outcomes: string[];
  image: ImageAsset;
  gallery: ImageAsset[];
  testimonial?: Testimonial;
  isPlaceholder: boolean;
};

export type ImpactStat = {
  value: string;
  label: string;
  isPlaceholder: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  organisation: string;
  image?: ImageAsset;
  isPlaceholder: boolean;
};

export type Resource = {
  slug: string;
  category: "Article" | "Resource" | "Reflection";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
  image: ImageAsset;
  published: boolean;
  isPlaceholder: boolean;
};
