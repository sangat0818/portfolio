import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "samunnat-nepal-director",
    title: "Director & Training Leadership",
    client: "Samunnat Nepal, Kathmandu",
    year: "2021–Present",
    audience: "Organisation staff, trainers & partners",
    participants: "Organisation-wide capacity development",
    duration: "Director from Oct 2022; HR, Material Development & Training Manager Oct 2021–Oct 2022",
    focusAreas: ["HR & organisational policy", "Curriculum & manuals", "Staff capacity development"],
    role: "Director (from 18 Oct 2022); previously HR, Material Development & Training Manager",
    overview:
      "Lead human resource development, organisational policy formulation, and staff capacity development at Samunnat Nepal—aligning training needs with education and advocacy project goals, and developing curricula, modules, manuals, and course materials for educational interventions.",
    challenge:
      "[Describe the organisational learning or capacity need this leadership role was designed to address.]",
    objectives: [
      "Strengthen organisational policy, HR, and staff capacity systems",
      "Identify and meet training needs linked to education and advocacy projects",
      "Develop and adapt training curricula and materials for educational interventions",
    ],
    approach:
      "Combine policy and HR leadership with hands-on materials development—researching and reviewing existing training approaches for relevance and effectiveness, then adapting modules and manuals for the contexts they serve.",
    highlights: [
      "Lead HR development, organisational policy formulation, and staff capacity building",
      "Identify training needs aligned with education and advocacy project goals",
      "Develop and adapt training curricula, modules, manuals, and course materials",
      "Conduct research and review of training approaches and materials for relevance",
    ],
    outcomes: [
      "[Verified organisational or programme outcome]",
      "[Verified capacity or materials outcome]",
    ],
    image: {
      src: "https://picsum.photos/seed/samunnat-director/1200/820",
      alt: "Placeholder for Samunnat Nepal leadership and training work",
      isPlaceholder: true,
    },
    gallery: [
      {
        src: "https://picsum.photos/seed/samunnat-a/1000/760",
        alt: "Placeholder for a training or materials development photograph",
        isPlaceholder: true,
      },
      {
        src: "https://picsum.photos/seed/samunnat-b/1000/760",
        alt: "Placeholder for an organisational capacity-building photograph",
        isPlaceholder: true,
      },
    ],
    isPlaceholder: false,
  },
  {
    slug: "umn-education-trainer-manager",
    title: "Education Trainer – Manager",
    client: "United Mission to Nepal (UMN), Thapathali / Kapilvastu",
    year: "2019–2021",
    audience: "Partners, local government & education stakeholders",
    participants: "Implementing partners and Rural Municipality networks",
    duration: "15 May 2019 – 17 October 2021",
    focusAreas: ["Partner coordination", "Teacher training", "Curriculum & packages"],
    role: "Education Trainer – Manager",
    overview:
      "Built and maintained strong relationships with implementing partners and local government stakeholders while coordinating education and child/youth-focused project delivery—designing and revising training curricula, manuals, and packages in collaboration with government agencies.",
    challenge:
      "[Describe the partner, government, or programme-delivery challenge this role addressed.]",
    objectives: [
      "Coordinate project implementation with Rural Municipalities and networks",
      "Identify training needs for education and child/youth-focused projects such as CYCC",
      "Design and revise training curricula, manuals, and packages with government partners",
    ],
    approach:
      "Work closely with partners and local government to identify needs, improve training methodology through research, plan and roll out teacher training programmes, and maintain updated records of curricula and manuals.",
    highlights: [
      "Build relationships with implementing partners and local government stakeholders",
      "Coordinate implementation with Rural Municipalities and relevant networks",
      "Design and revise training curricula, manuals, and packages",
      "Collaborate with government agencies to plan and roll out teacher training",
    ],
    outcomes: [
      "[Verified partner or training outcome]",
      "[Verified curriculum or delivery outcome]",
    ],
    image: {
      src: "https://picsum.photos/seed/umn-trainer/1200/820",
      alt: "Placeholder for UMN education training and partner coordination work",
      isPlaceholder: true,
    },
    gallery: [
      {
        src: "https://picsum.photos/seed/umn-a/1000/760",
        alt: "Placeholder for a teacher training session photograph",
        isPlaceholder: true,
      },
      {
        src: "https://picsum.photos/seed/umn-b/1000/760",
        alt: "Placeholder for a stakeholder coordination meeting photograph",
        isPlaceholder: true,
      },
    ],
    isPlaceholder: false,
  },
  {
    slug: "master-trainer-facilitator-nepal",
    title: "Master Trainer & Facilitator",
    client: "UNICEF, Plan International, Save the Children, ActionAid, World Vision, UMN & local NGOs",
    year: "1994–Present",
    audience: "Trainers, teachers, facilitators & community stakeholders",
    participants: "393 training groups across 50+ districts",
    duration: "Since September 1994 – Present",
    focusAreas: ["CFS/CCLP & ABL", "Life skills & peer education", "EiE & DRR"],
    role: "Master Trainer and Facilitator",
    overview:
      "Delivered training and facilitation across 50+ districts of Nepal for major national and international organisations—covering child-friendly schooling, non-formal education, life skills, Education in Emergencies, disaster response, and Activity-Based Learning, with 393 training groups facilitated in total.",
    challenge:
      "[Describe the scale or context challenge of delivering training nationwide across diverse districts and partners.]",
    objectives: [
      "Deliver high-quality ToT and grassroots training across formal and non-formal education",
      "Strengthen child-centered, life skills, and emergency education practice",
      "Reach educators and facilitators in districts from the east to the far west of Nepal",
    ],
    approach:
      "Design and facilitate training from MToT to community level—CFS/CCLP ToTs, teacher and headteacher orientations, NFE and out-of-school facilitator training, EiE and post-disaster teacher training, ABL for basic-level teachers, and life and financial skills programmes for youth.",
    highlights: [
      "CFS/CCLP ToT and Grade I–III teacher training (formal education) at scale",
      "Non-formal education ToTs, supervisor training, and CCOSP/OSP/CLC facilitator training",
      "Education in Emergencies, post-disaster teacher training, and SBDRR local curriculum work",
      "Activity-Based Learning training for basic-level teachers (42 groups) and life skills / peer education ToTs",
    ],
    outcomes: [
      "393 training groups facilitated nationwide",
      "Coverage across 50+ districts of Nepal",
    ],
    image: {
      src: "https://picsum.photos/seed/master-trainer/1200/820",
      alt: "Placeholder for nationwide master training and facilitation work",
      isPlaceholder: true,
    },
    gallery: [
      {
        src: "https://picsum.photos/seed/trainer-a/1000/760",
        alt: "Placeholder for a master training of trainers session",
        isPlaceholder: true,
      },
      {
        src: "https://picsum.photos/seed/trainer-b/1000/760",
        alt: "Placeholder for a grassroots teacher training workshop",
        isPlaceholder: true,
      },
    ],
    isPlaceholder: false,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
