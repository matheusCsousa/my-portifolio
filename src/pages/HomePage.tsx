import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectShowcases from "../components/ProjectShowcases";
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <main id="main-content" className="editorial-home">
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            {t("home.availability")}
          </p>
          <h1>
            {t("redesign.headline")}
            <br />
            <em>{t("redesign.headline_em")}</em>
          </h1>
          <p className="hero-intro">{t("redesign.intro")}</p>
          <div className="hero-actions">
            <a className="button" href="#selected-work">
              {t("home.projects_button")} ↓
            </a>
            <a className="text-link" href={`/${t("nav.resume_file")}`} download>
              {t("nav.resume")} ↗
            </a>
          </div>
        </div>
        <div className="paper-note" aria-hidden="true">
          {t("redesign.note")}
        </div>
        <div className="hero-bottom">
          <span>MATHEUS CORREIA DE SOUSA</span>
          <span>{t("home.location_value")} ↗</span>
        </div>
      </section>
      <section className="content-section" id="selected-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / {t("redesign.selected")}</p>
            <h2>
              {t("redesign.work_title")}
              <br />
              <em>{t("redesign.work_em")}</em>
            </h2>
          </div>
          <p>{t("redesign.work_intro")}</p>
        </div>
        <ProjectShowcases />
      </section>
      <section id="about" className="about-section content-section">
        <div className="portrait-frame">
          <div className="about-art" aria-hidden="true"><span className="about-art-star">✳</span><span className="about-art-initials">mcs.</span></div>
          <span className="portrait-label">
            {t("redesign.portrait_note")} ✳
          </span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">02 / {t("redesign.about")}</p>
          <h2>
            {t("redesign.about_title")}
            <br />
            <em>{t("redesign.about_em")}</em>
          </h2>
          <p>{t("home.description")}</p>
          <p>{t("home.education.items.0")}</p>
          <div className="exploring">
            <span className="eyebrow">{t("redesign.exploring")}</span>
            <p>{t("redesign.exploring_topics")}</p>
          </div>
        </div>
      </section>
      <section className="content-section capabilities">
        <p className="eyebrow">03 / {t("redesign.capabilities")}</p>
        <h2>{t("redesign.capabilities_title")}</h2>
        <div className="capability-grid">
          {["web", "systems", "graphics"].map((key, index) => (
            <div key={key}>
              <span className="capability-symbol" aria-hidden="true">
                {["⌘", "⌥", "✳"][index]}
              </span>
              <h3>{t(`redesign.${key}_title`)}</h3>
              <p>{t(`redesign.${key}_description`)}</p>
              <span className="capability-tools">
                {
                  [
                    "React · TypeScript · PHP",
                    "Rust · PostgreSQL · MySQL",
                    "C++ · OpenGL · CMake",
                  ][index]
                }
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="contact-banner">
        <p className="eyebrow">{t("redesign.next")}</p>
        <h2>
          {t("redesign.contact_title")}
          <br />
          <em>{t("redesign.contact_em")}</em>
        </h2>
        <Link className="button" to="/contact">
          {t("home.contact_button")} ↗
        </Link>
        <a className="contact-email" href="mailto:matheuscds.contato@gmail.com">
          matheuscds.contato@gmail.com
        </a>
      </section>
    </main>
  );
}
