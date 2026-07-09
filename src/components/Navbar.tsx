import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GithubIcon } from "./Icons";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500 bg-clip-text text-xl font-bold tracking-wider text-transparent hover:brightness-110 transition duration-300">
            MCS.DEV
          </span>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition duration-300 ${
                isActive
                  ? "text-teal-400 bg-teal-400/5 px-3 py-1.5 rounded-full border border-teal-500/20"
                  : "text-slate-400 hover:text-slate-100"
              }`
            }
          >
            {t("nav.home")}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition duration-300 ${
                isActive
                  ? "text-teal-400 bg-teal-400/5 px-3 py-1.5 rounded-full border border-teal-500/20"
                  : "text-slate-400 hover:text-slate-100"
              }`
            }
          >
            {t("nav.projects")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition duration-300 ${
                isActive
                  ? "text-teal-400 bg-teal-400/5 px-3 py-1.5 rounded-full border border-teal-500/20"
                  : "text-slate-400 hover:text-slate-100"
              }`
            }
          >
            {t("nav.contact")}
          </NavLink>
        </nav>

        {/* Action Controls (Language + Github) */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="flex bg-slate-900 border border-white/10 rounded-full p-1">
            <button
              onClick={() => changeLanguage("en")}
              className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 ${
                i18n.language === "en"
                  ? "bg-teal-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("pt")}
              className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 ${
                i18n.language === "pt"
                  ? "bg-teal-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              PT
            </button>
          </div>

          {/* Github Shortcut */}
          <a
            href="https://github.com/matheusCsousa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition duration-300"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
