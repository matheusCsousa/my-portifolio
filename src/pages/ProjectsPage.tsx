import { useTranslation } from "react-i18next";
import ProjectShowcases from "../components/ProjectShowcases";
export default function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <main id="main-content" className="content-section projects-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t("redesign.selected")}</p>
          <h1>{t("projects.title")}</h1>
        </div>
        <p>{t("projects.subtitle")}</p>
      </div>
      <ProjectShowcases />
    </main>
  );
}
