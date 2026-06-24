import { error } from "@sveltejs/kit";
import { siteConfig, type Project } from "$lib/config.js";
import { generateSEO } from "$lib/seo.js";

export const prerender = true;

export function entries() {
  return siteConfig.projects.filter((p: Project) => p.page).map((p: Project) => ({ slug: p.slug }));
}

export function load({ params }: { params: { slug: string } }) {
  const project = siteConfig.projects.find((p: Project) => p.slug === params.slug);

  if (!project || !project.page) {
    throw error(404, "Project not found");
  }

  const seo = generateSEO({
    title: `${project.name} — ${siteConfig.seo.title}`,
    description: project.description,
    canonical: `${siteConfig.seo.canonical}/projects/${project.slug}`,
  });

  return { project, seo };
}
