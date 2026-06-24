export interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: string;
  image: string;
  links: ProjectLink[];
  page: boolean;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ThemeConfig {
  dark: boolean;
}

export interface SiteConfig {
  name: string;
  username: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  avatarUrl: string;
  bio: string;
  skills: Skill[];
  projects: Project[];
  socialLinks: SocialLink[];
  theme: ThemeConfig;
  seo: {
    title: string;
    description: string;
    ogImage: string;
    author: string;
    keywords: string[];
    canonical: string;
    twitterHandle: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "[Your Name]",
  username: "@username",
  title: "Creator & Designer",
  tagline: "Nice to meet you 👋",
  email: "hello@example.com",
  location: "Your City, Country",
  avatarUrl: "",
  bio: "I'm a creative professional based in Your City, Country. I believe in the power of thoughtful design and meaningful storytelling. When I'm not creating, you'll find me exploring new techniques, reading about design theory, or finding inspiration in the everyday.",
  skills: [
    { name: "Design", icon: "mdi:palette" },
    { name: "Typography", icon: "mdi:format-letter-case" },
    { name: "Photography", icon: "mdi:camera" },
    { name: "Illustration", icon: "mdi:draw-pen" },
    { name: "Branding", icon: "mdi:shape" },
    { name: "UI/UX", icon: "mdi:monitor-dashboard" },
    { name: "Writing", icon: "mdi:file-document-edit" },
    { name: "Strategy", icon: "mdi:chart-box-outline" },
  ],
  projects: [
    {
      id: 1,
      slug: "project-one",
      name: "Project One",
      description: "A short description of this project.",
      longDescription:
        "A longer walkthrough of the project — what problem it solved, how it was built, and what the outcome was.",
      tags: ["Design", "Branding"],
      category: "Branding",
      image: "https://placehold.co/600x400/213169/f4f6fb?text=Project+One",
      links: [
        { label: "Live Site", url: "https://example.com" },
        { label: "Case Study", url: "https://example.com/case-study" },
      ],
      page: true,
    },
    {
      id: 2,
      slug: "project-two",
      name: "Project Two",
      description: "Another project description.",
      longDescription:
        "Details about this project — the approach, tools used, and key results.",
      tags: ["Photography", "UI/UX"],
      category: "Photography",
      image: "https://placehold.co/600x400/869ce9/090b15?text=Project+Two",
      links: [],
      page: false,
    },
    {
      id: 3,
      slug: "project-three",
      name: "Project Three",
      description: "A third project to showcase.",
      longDescription:
        "More in-depth information about this project and what made it special.",
      tags: ["Illustration", "Strategy"],
      category: "Illustration",
      image: "https://placehold.co/600x400/162b79/eaecf6?text=Project+Three",
      links: [{ label: "GitHub", url: "https://github.com" }],
      page: true,
    },
    {
      id: 4,
      slug: "project-four",
      name: "Project Four",
      description: "Yet another creative project.",
      longDescription:
        "The full story behind this project — from concept to completion.",
      tags: ["Writing", "Creative Direction"],
      category: "Writing",
      image: "https://placehold.co/600x400/32353e/eaecf6?text=Project+Four",
      links: [],
      page: false,
    },
  ],
  socialLinks: [
    {
      label: "Instagram",
      icon: "fa-brands fa-instagram",
      url: "https://instagram.com",
    },
    {
      label: "Twitter",
      icon: "fa-brands fa-square-x-twitter",
      url: "https://twitter.com",
    },
    {
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: "https://linkedin.com",
    },
  ],
  theme: {
    dark: false,
  },

  seo: {
    title: "[Your Name] — Portfolio",
    description:
      "Portfolio of [Your Name] — showcasing work in design, art, and creative projects.",
    ogImage: "",
    author: "[Your Name]",
    keywords: ["portfolio", "design", "art", "creative", "photography"],
    canonical: "https://yourdomain.com",
    twitterHandle: "@yourhandle",
  },
};
