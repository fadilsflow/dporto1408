import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "harber-marketplace",
    title: "Harber Marketplace Frontend",
    period: {
      start: "03.2024",
      end: "06.2024",
    },
    link: "https://github.com/Marketplace-UMKM-Harapan-Bersama/harber-marketplace-frontend/",
    skills: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    description: `A frontend web application for a multi-vendor marketplace supporting Indonesian MSMEs. Provides catalog browsing, cart system, and real-time product updates. Built collaboratively in a team project with industry mentorship.`,
    logo: "/p/mphb.svg",
  },
  {
    id: "dya-collection",
    title: "Dya Collection — E-commerce Platform",
    period: {
      start: "11.2023",
      end: "02.2024",
    },
    link: "https://dya-collection.vercel.app",
    skills: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Cloudinary",
      "shadcn/ui",
    ],
    description: `A full-stack e-commerce platform built for a local women's bag store (MSME) to digitize sales operations. Includes product catalog, online ordering, and admin dashboard for transaction management.`,
    logo: "/p/dya.svg",
  },
  {
    id: "syncrank",
    title: "SyncRank — Student Ranking System",
    period: {
      start: "05.2024",
      end: "07.2024",
    },
    link: "https://syncrank.bulba.cloud",
    skills: ["Next.js", "PostgreSQL", "Clerk", "Gemini API"],
    description: `A decision support system (DSS) for ranking students' academic achievements. Implements the SAW method and integrates AI for recommendations. Features Excel import/export, dashboard, and instant PDF reporting.`,
    logo: "/p/syncrank.svg",
    isExpanded: true,
  },
  {
    id: "rightsponse",
    title: "Rightsponse — AI Writing Assistant",
    period: {
      start: "04.2024",
      end: "05.2024",
    },
    link: "https://rs.fadils.xyz",
    skills: ["Next.js", "Gemini API", "shadcn/ui"],
    description: `An AI-powered writing assistant that generates chat, email, and comment responses. Supports multiple tones and formats with a clean, modern UI.`,
    logo: "/p/rightsponse.svg",
  },
  {
    id: "devporto",
    title: "Devporto — Developer Portfolio Template",
    period: {
      start: "01.2024",
      end: "02.2024",
    },
    link: "https://github.com/fadilsflow/devporto",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    description: `An open-source portfolio template for developers with GitHub integration, dark mode, SEO optimization, and fully responsive layouts.`,
    logo: "/p/devporto.svg",
  },
];
