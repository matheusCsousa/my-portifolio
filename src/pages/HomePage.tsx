import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import backgroundImage from "../assets/image.jpeg";
import { ArrowRightIcon, PlusIcon } from "../components/Icons";

interface SkillItem {
  name: string;
  logo: string;
}

interface SkillCategory {
  key: string;
  titleKey: string;
  glowColor: string;
  items: SkillItem[];
}

export default function HomePage() {
  const { t } = useTranslation();

  const skillsCategories: SkillCategory[] = [
    {
      key: "languages",
      titleKey: "home.tech_categories.languages",
      glowColor: "group-hover:shadow-blue-500/10 group-hover:border-blue-500/30",
      items: [
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
        { name: "Rust", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      ],
    },
    {
      key: "frameworks_tools",
      titleKey: "home.tech_categories.frameworks_tools",
      glowColor: "group-hover:shadow-teal-500/10 group-hover:border-teal-500/30",
      items: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "CMake", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg" },
        { name: "OpenGL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-original.svg" },
        { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      key: "databases",
      titleKey: "home.tech_categories.databases",
      glowColor: "group-hover:shadow-emerald-500/10 group-hover:border-emerald-500/30",
      items: [
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      key: "os",
      titleKey: "home.tech_categories.os",
      glowColor: "group-hover:shadow-indigo-500/10 group-hover:border-indigo-500/30",
      items: [
        { name: "Windows 11", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      ],
    },
  ];

  const featuredKeys = ["anki", "firstgameengine", "gameoflife", "petadopt"];

  return (
    <main className="relative min-h-screen w-full overflow-hidden px-6 py-12 md:py-24">
      {/* Background ambient light blobs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-teal-500/10 bg-blob" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 bg-blob-reverse" />

      <div className="mx-auto max-w-6xl">
        {/* HERO SECTION */}
        <section className="grid gap-12 md:grid-cols-12 items-center mb-24">
          <div className="md:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/30 bg-teal-500/5 px-3 py-1 text-xs text-teal-400">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Available for Collaboration</span>
            </div>
            <h1 className="text-glow-teal text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t("home.title")}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {t("home.subtitle")}
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
              {t("home.description")}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="group flex items-center space-x-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 px-6 py-3 font-semibold text-slate-950 hover:brightness-110 active:scale-95 transition shadow-lg shadow-teal-500/15"
              >
                <span>{t("home.projects_button")}</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-slate-800 bg-slate-950/80 px-6 py-3 font-semibold text-slate-300 hover:text-white hover:bg-slate-900 hover:border-slate-700 active:scale-95 transition"
              >
                {t("home.contact_button")}
              </Link>
            </div>
          </div>

          {/* Hero Decorative Image/Card */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative group max-w-sm w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 p-3 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />
              <img
                src={backgroundImage}
                alt="Matheus"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition duration-500 brightness-95"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">Location</p>
                <h3 className="text-lg font-bold text-white">Brazil / Remote</h3>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section className="mb-24">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              {t("home.tech_stack_title")}
            </h2>
            <div className="h-1 w-20 bg-teal-500 rounded-full mx-auto md:mx-0" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillsCategories.map((category) => (
              <div
                key={category.key}
                className={`group flex flex-col justify-between rounded-3xl border border-white/5 bg-slate-900/10 p-6 backdrop-blur-sm hover:bg-slate-900/30 hover:shadow-lg transition-all duration-500 ${category.glowColor}`}
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-6 group-hover:text-teal-400 transition-colors duration-300">
                    {t(category.titleKey)}
                  </h3>
                  <div className="flex flex-wrap gap-3.5">
                    {category.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="group/item flex flex-col items-center justify-center p-2 rounded-2xl bg-slate-950/60 border border-white/5 hover:bg-slate-950 hover:border-teal-500/20 transition-all duration-300 w-[72px] h-[72px]"
                        title={tech.name}
                      >
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-8 h-8 object-contain filter brightness-90 group-hover/item:brightness-100 group-hover/item:scale-110 transition duration-300"
                          loading="lazy"
                        />
                        <span className="text-[9px] text-slate-500 mt-1.5 truncate max-w-full text-center group-hover/item:text-slate-300 transition duration-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS PREVIEW */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                {t("projects.title")}
              </h2>
              <p className="text-slate-400 max-w-md">{t("projects.subtitle")}</p>
            </div>
            <Link
              to="/projects"
              className="mt-4 md:mt-0 flex items-center justify-center space-x-1 text-sm font-semibold text-teal-400 hover:text-teal-300 transition"
            >
              <span>{t("home.view_all_projects")}</span>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredKeys.map((key) => (
              <div
                key={key}
                className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/50 p-6 backdrop-blur-sm transition duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
                      {key === "anki"
                        ? "Rust + React"
                        : key === "firstgameengine"
                        ? "C++ + OpenGL"
                        : key === "gameoflife"
                        ? "C++ + Raylib"
                        : "Web Fullstack"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition">
                    {t(`projects.projects_list.${key}.title`)}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {t(`projects.projects_list.${key}.description`)}
                  </p>
                </div>
                <a
                  href={`https://github.com/matheusCsousa/${
                    key === "firstgameengine"
                      ? "FirstGameEngine"
                      : key === "gameoflife"
                      ? "Game-of-Life"
                      : key === "petadopt"
                      ? "pet-adopt-system"
                      : "Anki-my"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition"
                >
                  <span>{t("projects.projects_list.github_link")}</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
                </a>
              </div>
            ))}

            {/* OPEN SPACE / COLLABORATION CARD */}
            <Link
              to="/contact"
              className="group flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-800 bg-slate-950/40 hover:border-teal-500/40 hover:bg-teal-500/5 p-8 transition duration-300 text-center min-h-[220px]"
            >
              <div className="rounded-full bg-slate-900 group-hover:bg-teal-500 group-hover:text-slate-950 p-4 border border-white/5 transition duration-300 mb-4 text-teal-400">
                <PlusIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t("projects.projects_list.new_project.title")}
              </h3>
              <p className="text-xs text-slate-500 max-w-[200px]">
                {t("projects.projects_list.new_project.description")}
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
