export type ProjectKey = "anki" | "petadopt" | "firstgameengine";

export interface FeaturedProject {
  key: ProjectKey;
  slug: string;
  category: "web" | "systems";
  techs: string[];
  githubName: string;
  accent: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    key: "anki",
    slug: "anki-my",
    category: "web",
    techs: ["React", "Rust", "Rocket", "PostgreSQL"],
    githubName: "Anki-my",
    accent: "from-cyan-500/20 to-teal-500/10",
  },
  {
    key: "petadopt",
    slug: "pet-adoption-system",
    category: "web",
    techs: ["PHP", "MySQL", "JavaScript", "CSS"],
    githubName: "pet-adopt-system",
    accent: "from-emerald-500/20 to-lime-500/10",
  },
  {
    key: "firstgameengine",
    slug: "first-game-engine",
    category: "systems",
    techs: ["C++", "OpenGL", "GLFW", "GLEW"],
    githubName: "FirstGameEngine",
    accent: "from-indigo-500/20 to-cyan-500/10",
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return featuredProjects.find((project) => project.slug === slug);
}
