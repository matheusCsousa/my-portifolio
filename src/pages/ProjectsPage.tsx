import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import redImage from "../assets/red.jpeg";
import { ArrowRightIcon, ExternalLinkIcon, PlusIcon } from "../components/Icons";

interface Project {
  key: string;
  category: "web" | "systems";
  techs: string[];
  githubName: string;
}

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<"all" | "web" | "systems">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const projectsList: Project[] = [
    {
      key: "anki",
      category: "systems",
      techs: ["React", "Rust", "Tauri"],
      githubName: "Anki-my",
    },
    {
      key: "firstgameengine",
      category: "systems",
      techs: ["C++", "OpenGL", "GLFW", "GLEW"],
      githubName: "FirstGameEngine",
    },
    {
      key: "gameoflife",
      category: "systems",
      techs: ["C++", "Raylib"],
      githubName: "Game-of-Life",
    },
    {
      key: "petadopt",
      category: "web",
      techs: ["React", "Tailwind CSS", "Node.js", "Express"],
      githubName: "pet-adopt-system",
    },
    {
      key: "compiler_rust",
      category: "systems",
      techs: ["Rust", "Assembly", "Compilers"],
      githubName: "compiler-rust-br",
    },
    {
      key: "compiler_cpp",
      category: "systems",
      techs: ["C++", "Compilers"],
      githubName: "Compiler-cpp-hydro",
    },
  ];

  // Filtering logic
  const filteredProjects = projectsList.filter((project) => {
    const title = t(`projects.projects_list.${project.key}.title`).toLowerCase();
    const desc = t(`projects.projects_list.${project.key}.description`).toLowerCase();
    const search = searchQuery.toLowerCase();
    const matchesSearch = title.includes(search) || desc.includes(search);

    const matchesCategory =
      filter === "all" || project.category === filter;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="relative min-h-screen w-full px-6 py-12">
      {/* Background ambient light blobs */}
      <div className="absolute top-1/3 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 bg-blob" />
      <div className="absolute bottom-1/3 left-1/4 -z-10 h-72 w-72 rounded-full bg-teal-500/5 bg-blob-reverse" />

      <div className="mx-auto max-w-6xl">
        {/* HEADER HERO */}
        <div className="relative w-full h-80 md:h-96 mb-16 rounded-3xl overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
          <img
            src={redImage}
            alt="Projects Background"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4] saturate-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-glow-teal text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              {t("projects.title")}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </div>
        </div>

        {/* CONTROLS (Search & Filter) */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 bg-slate-900/30 border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition duration-300 ${
                filter === "all"
                  ? "bg-teal-500 text-slate-950 border-teal-400 shadow-sm"
                  : "border-slate-800 text-slate-400 bg-slate-950/40 hover:text-white hover:border-slate-700"
              }`}
            >
              {t("projects.filter_all")}
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition duration-300 ${
                filter === "web"
                  ? "bg-teal-500 text-slate-950 border-teal-400 shadow-sm"
                  : "border-slate-800 text-slate-400 bg-slate-950/40 hover:text-white hover:border-slate-700"
              }`}
            >
              {t("projects.filter_web")}
            </button>
            <button
              onClick={() => setFilter("systems")}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition duration-300 ${
                filter === "systems"
                  ? "bg-teal-500 text-slate-950 border-teal-400 shadow-sm"
                  : "border-slate-800 text-slate-400 bg-slate-950/40 hover:text-white hover:border-slate-700"
              }`}
            >
              {t("projects.filter_systems")}
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder={t("nav.projects") + "..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-full py-2.5 pl-5 pr-10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition duration-300"
            />
            <svg
              className="absolute right-4 top-3.5 w-4 h-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.key}
              className="group flex flex-col justify-between rounded-3xl border border-white/5 bg-slate-900/10 hover:bg-slate-900/40 p-6 backdrop-blur-sm transition duration-300"
            >
              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-semibold bg-slate-950/80 border border-white/5 text-slate-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition duration-300">
                  {t(`projects.projects_list.${project.key}.title`)}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  {t(`projects.projects_list.${project.key}.description`)}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <a
                  href={`https://github.com/matheusCsousa/${project.githubName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition"
                >
                  <span>{t("projects.projects_list.github_link")}</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}

          {/* OPEN SPACE / COLLABORATION CARD AT END */}
          <Link
            to="/contact"
            className="group flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-800 bg-slate-950/40 hover:border-teal-500/40 hover:bg-teal-500/5 p-8 transition duration-300 text-center min-h-[300px]"
          >
            <div className="rounded-full bg-slate-900 group-hover:bg-teal-500 group-hover:text-slate-950 p-4 border border-white/5 transition duration-300 mb-4 text-teal-400">
              <PlusIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {t("projects.projects_list.new_project.title")}
            </h3>
            <p className="text-sm text-slate-500 max-w-xs mb-6">
              {t("projects.projects_list.new_project.description")}
            </p>
            <span className="flex items-center space-x-2 text-sm font-semibold text-teal-400 group-hover:text-teal-300 transition">
              <span>{t("projects.projects_list.collab_link")}</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
