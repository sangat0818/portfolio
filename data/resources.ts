import type { Resource } from "./types";

export const resources: Resource[] = [
  {
    slug: "drr-teacher-support-materials",
    category: "Resource",
    title: "DRR-Based Teacher Support Materials (Parts I & II)",
    excerpt:
      "Co-authored activity books for ECD to secondary-level teachers, published in 2072 by NCED and UNICEF Nepal.",
    date: "2072 B.S.",
    readTime: "5 min read",
    body: [
      "These Post-DRR Teacher Activity Books (Parts I & II) support teachers from ECD through secondary level with child-centered activities grounded in disaster risk reduction and education in emergency contexts.",
      "Developed with the National Center for Educational Development (NCED) and the Nepal Education Cluster / UNICEF Nepal, the materials help educators bring DRR themes into classroom practice after disaster and as part of preparedness.",
      "They sit alongside related work on local curriculum-based DRR guidebooks for primary teachers and wider Education in Emergencies training delivered across Nepal.",
    ],
    image: {
      src: "https://picsum.photos/seed/drr-materials/1200/760",
      alt: "Placeholder for DRR-based teacher support materials",
      isPlaceholder: true,
    },
    published: true,
    isPlaceholder: false,
  },
  {
    slug: "cfs-activity-book",
    category: "Resource",
    title: "CFS Activity Book & Child-Centered Learning Guides",
    excerpt:
      "Co-authored child-centered activity collections and CFS-focused guidebooks for primary teachers and trainers, including UNICEF DRR local curriculum materials (2070).",
    date: "2067–2070 B.S.",
    readTime: "5 min read",
    body: [
      "The CFS Activity Book (बालकेन्द्रित क्रियाकलापको सङ्गालो भाग-१), published in 2067, gathers child-centered activities for primary-level teachers and trainers promoting child-friendly schooling practice.",
      "A related DRR-based local curriculum guidebook on Child-Friendly Schools (CFS) activities for primary teachers was co-authored and published in 2070 by UNICEF Nepal.",
      "Together these resources reflect a long-standing focus on child-centered pedagogy, Activity-Based Learning, and practical tools teachers can use in formal and non-formal settings.",
    ],
    image: {
      src: "https://picsum.photos/seed/cfs-activity/1200/760",
      alt: "Placeholder for CFS and child-centered learning materials",
      isPlaceholder: true,
    },
    published: true,
    isPlaceholder: false,
  },
  {
    slug: "nfe-alp-and-aflateen-materials",
    category: "Resource",
    title: "NFE–ALP Curriculum & Aflateen+ Learning Materials",
    excerpt:
      "Co-authored NFE–ALP curricula and materials with CEHRD, UNICEF, and CARE Nepal, plus Aflateen+ manuals on gender, life skills, and financial education for youth.",
    date: "Ongoing contributions",
    readTime: "6 min read",
    body: [
      "As a curriculum and materials developer, contributions include co-authoring NFE–ALP curriculum, textbooks, learning cards, facilitator guides, and training manuals (Levels 1–3) with CEHRD, UNICEF, and CARE Nepal.",
      "Financial and life skills education work includes the Aflateen+ manual and workbook on gender, life skills, and financial education for youth, as well as activity-based manuals and posters developed with Save the Children (Rolpa Livelihood Project).",
      "Related out-of-school and flexible learning resources include UOSP textbooks, facilitator guidebooks for non-formal education, and materials for Flexible and Mobile Learning Centres—supporting learners beyond the formal classroom.",
    ],
    image: {
      src: "https://picsum.photos/seed/nfe-aflateen/1200/760",
      alt: "Placeholder for NFE–ALP and Aflateen+ learning materials",
      isPlaceholder: true,
    },
    published: true,
    isPlaceholder: false,
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
