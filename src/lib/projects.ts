/**
 * Projects Data
 * ===============================
 * Strongly-typed project data with full TypeScript support
 * Provides better IDE autocomplete and type safety
 */

export interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  language: string;
  tags: string[];
  category: "AI" | "Software" | "Systems" | "Web";
  url: string;
  preview?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Gemini_CLI",
    description: "A multimodal CLI chatbot with Google's Generative AI. Features live responses and a sleek Rich UI.",
    longDescription: "An advanced command-line chatbot that leverages Google's Generative AI to provide multimodal capabilities. Built with Python, it offers a beautiful terminal interface using the Rich library for enhanced user experience with streaming responses.",
    language: "Python",
    tags: ["AI", "CLI", "Python", "Google AI"],
    category: "AI",
    url: "https://github.com/asaadzx/Gemini_CLI",
    preview: "",
    featured: false
  },
  {
    id: 2,
    name: "Epyac_AI",
    description: "An AI Model made with PyTorch and Transformers.",
    longDescription: "A sophisticated machine learning model built from scratch using PyTorch and Hugging Face Transformers. This project demonstrates deep learning concepts and advanced NLP techniques.",
    language: "Python",
    tags: ["AI", "PyTorch", "Machine Learning", "NLP"],
    category: "AI",
    url: "https://github.com/asaadzx/Epyac_AI",
    preview: "",
    featured: false
  },
  {
    id: 3,
    name: "AI-Linux-APP",
    description: "Electron-based desktop applications for various AI chat platforms.",
    longDescription: "Cross-platform desktop applications built with Electron that provide seamless integration with multiple AI chat services, offering a unified interface for AI interactions.",
    language: "JavaScript",
    tags: ["Electron", "Desktop App", "AI", "JavaScript"],
    category: "Software",
    url: "https://github.com/asaadzx/AI-Linux-APP",
    preview: "",
    featured: false
  },
  {
    id: 4,
    name: "Epyac_TTS_CLI",
    description: "A customizable Text-to-speech AI model and CLI tool.",
    longDescription: "Advanced text-to-speech system with customizable voice parameters and multiple language support. Provides both a Python library and command-line interface for flexible usage.",
    language: "Python",
    tags: ["TTS", "AI", "Python", "Audio Processing"],
    category: "AI",
    url: "https://github.com/asaadzx/Epyac_TTS_CLI",
    preview: "",
    featured: false
  },
  {
    id: 5,
    name: "Epmail",
    description: "A Gmail client built with Tauri.",
    longDescription: "Modern, lightweight Gmail client built with Tauri (Rust + Web technologies). Offers fast performance and native application experience with secure credential management.",
    language: "Rust, JavaScript",
    tags: ["Tauri", "Rust", "Email", "Desktop"],
    category: "Software",
    url: "https://github.com/asaadzx/Epmail",
    preview: "",
    featured: false
  },
  {
    id: 6,
    name: "Zenshell",
    description: "A C++ based shell with Lua plugins.",
    longDescription: "A high-performance Unix shell implementation written in C++ with an extensible plugin system using Lua scripting. Perfect for developers who want customizable shell environments.",
    language: "C++, Lua, Makefile",
    tags: ["Shell", "C++", "Lua", "Systems Programming"],
    category: "Systems",
    url: "https://github.com/GhostFreakOS/Zenshell",
    preview: "",
    featured: false
  },
  {
    id: 7,
    name: "GhostFreak OS",
    description: "A Linux Distro based on arch linux",
    longDescription: "A custom Linux distribution built on top of Arch Linux with custom kernel optimizations, package management, and system utilities. Tailored for performance and developer experience.",
    language: "Bash, C++, Linux",
    tags: ["Linux", "Distro", "Systems", "Open Source"],
    category: "Systems",
    url: "https://github.com/GhostFreakOS",
    preview: "",
    featured: false
  },
  {
    id: 8,
    name: "Anas Ibn Malik School Website",
    description: "A website for Anas Ibn Malik School built with SvelteKit.",
    longDescription: "Professional school website featuring responsive design, event management, student portal, and administrative dashboard. Built with modern web technologies for optimal performance and SEO.",
    language: "SvelteKit, Tailwind CSS, PostgreSQL",
    tags: ["Web", "SvelteKit", "Full-stack", "Education"],
    category: "Web",
    url: "https://anas-ibn-malik-school.vercel.app/",
    preview: "",
    featured: false
  },
  {
    id: 9,
    name: "Epyac Enhanced Model",
    description: "An enhanced version of Epyac AI with improved performance and features for Everyday students use on there mid Laptops.",
    longDescription: "Optimized AI model designed specifically for mid-range laptops and everyday student use. Features include quantization support with ONNX, Ollama integration, and efficient memory usage.",
    language: "Python, PyTorch, Transformers, ONNX, Ollama",
    tags: ["AI", "ML", "Optimization", "Education"],
    category: "AI",
    url: "https://epyac-enhanced.vercel.app/",
    preview: "",
    featured: false
  }
];
