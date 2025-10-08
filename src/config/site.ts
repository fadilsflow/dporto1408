import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://fadils.xyz",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Dilfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
];

export const GITHUB_USERNAME = "fadilsflow";
export const SOURCE_CODE_GITHUB_REPO = "fadilsflow/dporto1408";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/fadilsflow/dporto1408";

export const UTM_PARAMS = {
  utm_source: "fadils.xyz",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
