import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance / Self-employed",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "2023",
          end: "Present",
        },
        employmentType: "Freelance",
        description: `- Built and maintained several web applications for SMEs and community projects.
- Developed "Dya Collection", an e-commerce platform for a local MSME, using Next.js, Prisma, and PostgreSQL.
- Contributed to "Harber Marketplace", a multi-vendor marketplace for Indonesian SMEs, as a frontend developer.
- Created "SyncRank", a decision support system with AI integration for academic performance ranking.
- Designed and launched personal projects including "Rightsponse" (AI-powered writing assistant) and "Devporto" (developer portfolio template).
- Implemented CI/CD workflows, Dockerized deployments, and SEO optimizations for production-grade apps.`,
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "PostgreSQL",
          "Prisma",
          "Docker",
          "Supabase",
          "shadcn/ui",
        ],
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "UI/UX & Graphic Designer",
        employmentPeriod: {
          start: "2021",
          end: "2023",
        },
        employmentType: "Freelance",
        description: `- Designed logos, posters, and digital ads for local clients.
- Built design systems and wireframes for web projects using Figma.
- Delivered responsive UI prototypes and collaborated with developers for implementation.`,
        icon: "design",
        skills: [
          "UI/UX Design",
          "Wireframing",
          "Figma",
          "Prototyping",
          "Graphic Design",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title:
          "Politeknik Harapan Bersama Tegal — Applied Bachelor (D4) Informatics Engineering",
        employmentPeriod: {
          start: "2023",
          end: "2027",
        },
        icon: "education",
        description: `- Currently pursuing an Applied Bachelor's degree in Informatics Engineering.
- Focus areas: full stack web development, database design, distributed systems, and software project management.
- Active in building real-world projects with peers and mentors, including marketplace platforms and AI-powered applications.
- Developing strong problem-solving, collaboration, and self-learning abilities.`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Algorithms",
          "Software Engineering",
          "Database Design",
          "System Architecture",
          "Teamwork",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "SMK Muhammadiyah 1 Tegal — Multimedia",
        employmentPeriod: {
          start: "2020",
          end: "2023",
        },
        icon: "education",
        description: `- Completed vocational high school specializing in Multimedia.
- Learned digital content creation, photo/video editing, and visual communication.
- Built a solid foundation in design principles and technical tools such as Photoshop, Illustrator, and Premiere.
- Graduated with a strong interest in transitioning multimedia knowledge into web development and software engineering.`,
        skills: [
          "Multimedia Production",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe Premiere",
          "Design Principles",
          "Digital Storytelling",
        ],
      },
    ],
  },
];
