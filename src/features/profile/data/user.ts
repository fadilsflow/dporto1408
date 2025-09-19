import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Wahyu",
  lastName: "Akhmad Fadillah",
  displayName: "Fadil",
  username: "fadil",
  gender: "male",
  pronouns: "he/him",
  bio: "Experienced fullstack developer specializing in custom web application development. Providing end-to-end solutions using modern technologies like Next.js, TypeScript, and responsive design.",
  address: "Tegal, Jawa Tengah, Indonesia",
  phoneNumber: "KzYyODUxNTc3Mzk5Nzg=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "d2FoeXVmYWRpbDExNDBAZ21haWwuY29t", // base64 encoded
  website: "https://fadils.xyz",
  jobTitle: "Full Stack Developer",
  flipSentences: ["Design Engineer", "Software Engineer"],
  jobs: [
    {
      title: "Software Engineer",
      company: "Anypeace",
      website: "https://github.com/anypeace-oss/",
    },
  ],
  about: `
Hello, World! I am Wahyu Akhmad Fadillah — a Full Stack Developer from Indonesia passionate about creating efficient, user-centric web solutions from front-end to back-end.

With expertise in Next.js, TypeScript, and React, I specialize in building modern, responsive web applications. Beyond work, I enjoy exploring new technologies and turning innovative ideas into reality through personal projects.

One of my key projects is [Dya Collection](https://dya-collection.vercel.app), an e-commerce platform for MSMEs that I developed as a community service initiative. This project helps digitize local businesses, empowering them to reach wider markets and manage their operations more efficiently.

I also created [Rightsponse](https://rs.fadils.xyz), an AI-powered writing assistant that helps users craft perfect responses. This project highlights my interest in integrating AI technology to solve everyday problems and showcases my skills in AI integration.

Let's connect and collaborate!
`,
  avatar:
    "https://res.cloudinary.com/dxurnpbrc/image/upload/v1758206850/profile_avsqcv.webp",
  ogImage:
    "https://res.cloudinary.com/dxurnpbrc/image/upload/v1758294318/1_pojo5c.png",
  namePronunciationUrl: "/p/fadil.mp3",
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2025-9-20", // YYYY-MM-DD
};
