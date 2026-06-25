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
  cvUrl?: string;
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
  name: "Good Artist",
  username: "@good_artist",
  title: "Visual Artist & Illustrator",
  tagline: "Capturing moments in watercolor and ink ✦",
  email: "luna@marchetti.studio",
  location: "Florence, Italy",
  avatarUrl: "/me.png",
  bio: "I'm a visual artist based in Florence, Italy, where Renaissance light meets rolling Tuscan hills. My work lives at the intersection of traditional watercolor and digital illustration — exploring themes of solitude, nature, and the quiet beauty of everyday moments.",
  skills: [
    { name: "Watercolor", icon: "mdi:palette" },
    { name: "Ink Drawing", icon: "mdi:pen" },
    { name: "Digital Art", icon: "mdi:tablet" },
    { name: "Illustration", icon: "mdi:draw-pen" },
    { name: "Printmaking", icon: "mdi:printer" },
    { name: "Color Theory", icon: "mdi:invert-colors" },
    { name: "Composition", icon: "mdi:grid" },
    { name: "Sketching", icon: "mdi:pencil" },
  ],
  projects: [
    {
      id: 1,
      slug: "echoes-of-tuscany",
      name: "Echoes of Tuscany",
      description:
        "A watercolor series capturing the golden light of the Tuscan countryside at dusk.",
      longDescription:
        "This collection of 12 watercolor studies was painted en plein air across the hills of Chianti and Val d'Orcia over the summer of 2024. Each piece captures a fleeting moment — the way light filters through cypress rows, the shadow of clouds moving across wheat fields, the warm glow of a farmhouse window at sunset.",
      tags: ["Watercolor", "Landscape", "Plein Air"],
      category: "Watercolor",
      image:
        "https://placehold.co/600x400/78125d/fdf2f9?text=Echoes+of+Tuscany",
      links: [{ label: "View Series", url: "https://example.com/echoes" }],
      page: true,
    },
    {
      id: 2,
      slug: "urban-solitude",
      name: "Urban Solitude",
      description:
        "Ink drawings of empty cityscapes exploring stillness in motion.",
      longDescription:
        "A series of ink-on-paper drawings depicting familiar urban spaces emptied of people — train platforms at dawn, rain-slicked streets after midnight, silent piazzas in the off-season. The work examines how architecture holds memory even in the absence of human presence.",
      tags: ["Ink", "Cityscape", "Monochrome"],
      category: "Ink Drawing",
      image: "https://placehold.co/600x400/eb9075/1a0415?text=Urban+Solitude",
      links: [],
      page: false,
    },
    {
      id: 3,
      slug: "botanical-dreams",
      name: "Botanical Dreams",
      description:
        "Digital illustrations inspired by 18th-century botanical engravings.",
      longDescription:
        "Blending reference from centuries-old herbarium specimens with contemporary digital techniques, this collection reimagines botanical illustration for the modern era. Each piece layers scanned textures, hand-drawn linework, and subtle gradients to create dreamlike plant portraits.",
      tags: ["Digital", "Botanical", "Illustration"],
      category: "Digital Art",
      image: "https://placehold.co/600x400/d6b392/1a0415?text=Botanical+Dreams",
      links: [{ label: "Gallery", url: "https://example.com/botanical" }],
      page: true,
    },
    {
      id: 4,
      slug: "the-light-within",
      name: "The Light Within",
      description:
        "A mixed-media exhibition on inner landscapes and emotional geography.",
      longDescription:
        "Exhibited at Galleria dell'Arte in Florence, this series combines watercolor washes with charcoal linework and gold leaf to map the emotional landscapes we carry inside. Each piece is a cartography of feeling — joy as warm amber washes, grief as sharp ink lines, hope as scattered gold.",
      tags: ["Mixed Media", "Exhibition", "Figurative"],
      category: "Mixed Media",
      image: "https://placehold.co/600x400/8a2f14/fbe5f6?text=The+Light+Within",
      links: [],
      page: false,
    },
  ],
  socialLinks: [
    {
      label: "Instagram",
      icon: "fa-brands fa-instagram",
      url: "https://www.instagram.com/good_artist",
    },
    {
      label: "Twitter",
      icon: "fa-brands fa-square-x-twitter",
      url: "https://twitter.com/lunamarchetti",
    },
    {
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: "https://linkedin.com/in/lunamarchetti",
    },
  ],
  cvUrl: "",
  theme: {
    dark: true,
  },

  seo: {
    title: "Luna Marchetti — Visual Artist & Illustrator",
    description:
      "Portfolio of Luna Marchetti — watercolor, ink, and digital illustration based in Florence, Italy.",
    ogImage: "",
    author: "Luna Marchetti",
    keywords: [
      "art",
      "illustration",
      "watercolor",
      "florence",
      "portfolio",
      "digital art",
    ],
    canonical: "https://lunamarchetti.art",
    twitterHandle: "@lunamarchetti",
  },
};
