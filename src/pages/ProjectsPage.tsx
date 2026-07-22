import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import redImage from "../assets/red.webp";
import { ArrowRightIcon, ExternalLinkIcon } from "../components/Icons";
import { featuredProjects } from "../data/projects";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <main className="relative min-h-screen w-full px-6 py-12">
      <div className="absolute top-1/3 right-1/4 -z-10 h-96 w-96 rounded-full bg-rose-500/10 bg-blob" />
      <div className="absolute bottom-1/3 left-1/4 -z-10 h-72 w-72 rounded-full bg-teal-500/5 bg-blob-reverse" />

      <div className="mx-auto max-w-6xl">
        <div className="relative mb-16 flex min-h-[22rem] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <img
            src={redImage}
            alt="Projects background"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.38] saturate-75"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="relative z-10 max-w-3xl px-6 text-center">
            <h1 className="text-glow-teal mb-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              {t("projects.title")}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              {t("projects.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.key}
              className="group grid overflow-hidden rounded-3xl border border-white/5 bg-slate-900/20 backdrop-blur-sm transition duration-300 hover:border-teal-500/20 hover:bg-slate-900/40 md:grid-cols-12"
            >
              <div
                className={`relative min-h-48 bg-gradient-to-br ${project.accent} md:col-span-4`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,0.18),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.25),rgba(2,6,23,0.7))]" />
                <div className="relative flex h-full min-h-48 flex-col justify-between p-6">
                  <span className="text-sm font-semibold text-teal-300">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {t(`projects.projects_list.${project.key}.type`)}
                    </p>
                    <h2 className="text-2xl font-bold text-white">
                      {t(`projects.projects_list.${project.key}.title`)}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 md:col-span-8 md:p-8">
                <div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/5 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                    {t(`projects.projects_list.${project.key}.description`)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 border-t border-white/5 pt-5">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group/link flex items-center space-x-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                  >
                    <span>{t("projects.case_study")}</span>
                    <ArrowRightIcon className="h-4 w-4 transition group-hover/link:translate-x-1" />
                  </Link>
                  <a
                    href={`https://github.com/matheusCsousa/${project.githubName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-full border border-slate-800 bg-slate-950/60 px-5 py-2.5 text-sm font-semibold text-teal-300 transition hover:border-slate-700 hover:text-teal-200"
                  >
                    <span>{t("projects.projects_list.github_link")}</span>
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
