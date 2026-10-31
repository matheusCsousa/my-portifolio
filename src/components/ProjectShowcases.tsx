import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { featuredProjects } from "../data/projects";
import anki from "../assets/anki-my.webp";
import pet from "../assets/pet-adopt.webp";
import engine from "../assets/game-engine.webp";
const images: Record<string, string> = {
  anki,
  petadopt: pet,
  firstgameengine: engine,
};
export default function ProjectShowcases() {
  const { t } = useTranslation();
  return (
    <div className="project-list">
      {featuredProjects.map((project, index) => (
        <article
          className={`project-showcase project-${project.key}`}
          key={project.key}
        >
          <Link
            className="project-image"
            to={`/projects/${project.slug}`}
            aria-label={`${t("projects.case_study")}: ${t(`projects.projects_list.${project.key}.title`)}`}
          >
            <div className="window-bar">
              <span />
              <span />
              <span />
              <span className="window-title">{project.githubName}</span>
            </div>
            <img
              src={images[project.key]}
              alt={t(`projects.projects_list.${project.key}.title`)}
              loading="lazy"
              width="1000"
              height="650"
            />
          </Link>
          <div className="project-copy">
            <div className="eyebrow">
              0{index + 1} / {t(`projects.projects_list.${project.key}.type`)}
            </div>
            <h3>{t(`projects.projects_list.${project.key}.title`)}</h3>
            <p>{t(`redesign.project_${project.key}`)}</p>
            <div className="tech-tags">
              {project.techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <Link className="button" to={`/projects/${project.slug}`}>
                {t("projects.case_study")} ↗
              </Link>
              <a
                href={`https://github.com/matheusCsousa/${project.githubName}`}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
