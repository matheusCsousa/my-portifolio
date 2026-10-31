import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        {t("redesign.skip")}
      </a>
      <div className="nav-pill">
        <Link to="/" className="wordmark" aria-label="Matheus — home">
          mcs<span>✳</span>
        </Link>
        <nav aria-label={t("nav.menu")}>
          <NavLink to="/" end>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/projects">{t("nav.projects")}</NavLink>
          <NavLink to="/contact">{t("nav.contact")}</NavLink>
        </nav>
        <div className="nav-actions">
          <div className="languages" aria-label={t("redesign.language")}>
            {["en", "pt"].map((lang) => (
              <button
                key={lang}
                aria-pressed={i18n.resolvedLanguage === lang}
                onClick={() => {
                  void i18n.changeLanguage(lang);
                  localStorage.setItem("language", lang);
                  document.documentElement.lang = lang;
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            className="button small nav-cv"
            href={`/${t("nav.resume_file")}`}
            download
          >
            {t("nav.resume")} ↗
          </a>
        </div>
      </div>
    </header>
  );
}
