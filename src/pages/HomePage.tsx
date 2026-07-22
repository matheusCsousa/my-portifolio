import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import backgroundImage from "../assets/image.webp";
import { ArrowRightIcon } from "../components/Icons";
import { useInView } from "../hooks/useInView";
import { featuredProjects } from "../data/projects";

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

function Reveal({
  children,
  delay = "",
}: {
  children: ReactNode;
  delay?: string;
}) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className={`reveal ${delay} ${isInView ? "visible" : ""}`}>
      {children}
    </div>
  );
}

function TypingText({ text }: { text: string }) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    setVisibleText("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, 58);

    return () => window.clearInterval(interval);
  }, [text]);

  return (
    <>
      {visibleText}
      <span className="typing-cursor" aria-hidden="true" />
    </>
  );
}

export default function HomePage() {
  const { t } = useTranslation();

  const skillsCategories: SkillCategory[] = [
    {
      key: "languages",
      titleKey: "home.tech_categories.languages",
      glowColor:
        "group-hover:shadow-blue-500/10 group-hover:border-blue-500/30",
      items: [
        {
          name: "C",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        },
        {
          name: "C++",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "C#",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        },
        {
          name: "Rust",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
        },
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
      ],
    },
    {
      key: "frameworks_tools",
      titleKey: "home.tech_categories.frameworks_tools",
      glowColor:
        "group-hover:shadow-teal-500/10 group-hover:border-teal-500/30",
      items: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Express",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
          name: "CMake",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg",
        },
        {
          name: "OpenGL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-original.svg",
        },
        {
          name: "Vite",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      key: "databases",
      titleKey: "home.tech_categories.databases",
      glowColor:
        "group-hover:shadow-emerald-500/10 group-hover:border-emerald-500/30",
      items: [
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
      ],
    },
    {
      key: "os",
      titleKey: "home.tech_categories.os",
      glowColor:
        "group-hover:shadow-indigo-500/10 group-hover:border-indigo-500/30",
      items: [
        {
          name: "Windows",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg",
        },
        {
          name: "Linux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        },
      ],
    },
  ];

  const stats = [
    { value: t("home.stats.systems_value"), label: t("home.stats.systems") },
    { value: t("home.stats.fullstack_value"), label: t("home.stats.fullstack") },
    { value: t("home.stats.architecture_value"), label: t("home.stats.architecture") },
  ];
  const learningItems = t("home.learning.items", {
    returnObjects: true,
  }) as string[];
  const educationItems = t("home.education.items", {
    returnObjects: true,
  }) as string[];
  const bookItems = t("home.books.items", {
    returnObjects: true,
  }) as string[];
  const projectLabels: Record<string, string> = {
    anki: "Rust + React",
    petadopt: "PHP + MySQL",
    firstgameengine: "C++ + OpenGL",
  };
  const projectLinks: Record<string, string> = {
    anki: "Anki-my",
    petadopt: "pet-adopt-system",
    firstgameengine: "FirstGameEngine",
  };
  const projectSlugByKey: Record<string, string> = {
    anki: "anki-my",
    petadopt: "pet-adoption-system",
    firstgameengine: "first-game-engine",
  };
  const iconMap: Record<string, string> = {
    anki: "AK",
    petadopt: "PA",
    firstgameengine: "GE",
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden px-6 py-12 md:py-24">
      {/* Background ambient light blobs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-teal-500/10 bg-blob" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 bg-blob-reverse" />

      <div className="mx-auto max-w-6xl">
        {/* HERO SECTION */}
        <section className="grid gap-12 md:grid-cols-12 items-center mb-24">
          <div className="md:col-span-7 flex flex-col items-start space-y-6">
            <Reveal>
              <div className="inline-flex items-center space-x-2 rounded-full border border-teal-500/30 bg-teal-500/5 px-3 py-1 text-xs text-teal-400">
                <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                <span>{t("home.availability")}</span>
              </div>
            </Reveal>
            <Reveal delay="reveal-delay-1">
              <h1 className="text-glow-teal min-h-[96px] text-4xl md:min-h-[144px] md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <TypingText text={t("home.title")} />
              </h1>
            </Reveal>
            <Reveal delay="reveal-delay-2">
              <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {t("home.subtitle")}
              </h2>
            </Reveal>
            <Reveal delay="reveal-delay-3">
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
                {t("home.description")}
              </p>
            </Reveal>

            <Reveal delay="reveal-delay-3">
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/projects"
                  className="group flex items-center space-x-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 px-6 py-3 font-semibold text-slate-950 hover:brightness-110 active:scale-95 transition shadow-lg shadow-teal-500/15"
                >
                  <span>{t("home.projects_button")}</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
                </Link>
                <a
                  href={`/${t("nav.resume_file")}`}
                  download={t("nav.resume_file")}
                  className="rounded-full border border-teal-500/30 bg-teal-500/5 px-6 py-3 font-semibold text-teal-300 hover:text-teal-200 hover:bg-teal-500/10 active:scale-95 transition"
                >
                  {t("home.resume_button")}
                </a>
                <Link
                  to="/contact"
                  className="rounded-full border border-slate-800 bg-slate-950/80 px-6 py-3 font-semibold text-slate-300 hover:text-white hover:bg-slate-900 hover:border-slate-700 active:scale-95 transition"
                >
                  {t("home.contact_button")}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Hero Decorative Image/Card */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <Reveal delay="reveal-delay-2">
              <div className="relative group max-w-sm w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 p-3 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />
                <img
                  src={backgroundImage}
                  alt="Matheus"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition duration-500 brightness-95"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                    {t("home.location_label")}
                  </p>
                  <h3 className="text-lg font-bold text-white">
                    {t("home.location_value")}
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT / STATS SECTION */}
        <Reveal>
          <section className="mb-24 rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8 backdrop-blur-sm">
            <div className="mb-8 grid gap-8 md:grid-cols-12 md:text-left">
              <div className="text-center md:col-span-7 md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                {t("home.about_title")}
              </h2>
              <p className="text-slate-400 max-w-2xl">
                {t("home.about_description")}
              </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-950/50 p-5 md:col-span-5">
                <h3 className="mb-3 text-lg font-bold text-white">
                  {t("home.education.title")}
                </h3>
                <ul className="space-y-2">
                  {educationItems.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-slate-950/50 p-5 text-center"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-teal-300">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* LEARNING SECTION */}
        <Reveal>
          <section className="mb-24 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
                {t("home.learning.title")}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                {t("home.learning.description")}
              </p>
              <div className="flex flex-wrap gap-2">
                {learningItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-teal-500/20 bg-teal-500/5 px-3 py-1 text-xs font-semibold text-teal-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
                {t("home.books.title")}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-400">
                {t("home.books.description")}
              </p>
              <ul className="space-y-3">
                {bookItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* TECH STACK SECTION */}
        <Reveal>
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
        </Reveal>

        {/* FEATURED PROJECTS PREVIEW */}
        <Reveal>
          <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                {t("projects.title")}
              </h2>
              <p className="text-slate-400 max-w-md">
                {t("projects.subtitle")}
              </p>
            </div>
            <Link
              to="/projects"
              className="mt-4 md:mt-0 flex items-center justify-center space-x-1 text-sm font-semibold text-teal-400 hover:text-teal-300 transition"
            >
              <span>{t("home.view_all_projects")}</span>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.key}
                className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/50 p-6 backdrop-blur-sm transition duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
                      {projectLabels[project.key]}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-slate-950 text-xs font-bold text-teal-300">
                      {iconMap[project.key]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition">
                    {t(`projects.projects_list.${project.key}.title`)}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {t(`projects.projects_list.${project.key}.description`)}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/projects/${projectSlugByKey[project.key]}`}
                    className="flex items-center space-x-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition"
                  >
                    <span>{t("projects.case_study")}</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
                  </Link>
                  <a
                    href={`https://github.com/matheusCsousa/${projectLinks[project.key]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-500 transition hover:text-slate-300"
                  >
                    {t("projects.projects_list.github_link")}
                  </a>
                </div>
              </div>
            ))}
          </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
