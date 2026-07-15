import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GithubIcon } from "./Icons";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium tracking-wide transition duration-300 ${
      isActive
        ? "text-teal-400 bg-teal-400/5 px-3 py-1.5 rounded-full border border-teal-500/20"
        : "text-slate-400 hover:text-slate-100"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block text-2xl font-bold tracking-tight transition duration-300 ${
      isActive ? "text-teal-400" : "text-slate-200 hover:text-teal-400"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500 bg-clip-text text-xl font-bold tracking-wider text-transparent hover:brightness-110 transition duration-300">
            MCS.DEV
          </span>
        </Link>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" end className={navLinkClass}>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            {t("nav.projects")}
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            {t("nav.contact")}
          </NavLink>
        </nav>

        {/* Desktop Action Controls (Language + Resume + Github) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Resume Download */}
          <a
            href="/matheus-cv.txt"
            download="matheus-cv.txt"
            className="flex items-center space-x-1.5 rounded-full border border-teal-500/30 bg-teal-500/5 px-4 py-1.5 text-xs font-semibold text-teal-400 hover:bg-teal-500/10 hover:border-teal-500/50 transition duration-300"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{t("nav.resume")}</span>
          </a>

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

        {/* Mobile: Language + Hamburger */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Language Switcher (compact) */}
          <div className="flex bg-slate-900 border border-white/10 rounded-full p-0.5">
            <button
              onClick={() => changeLanguage("en")}
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full transition-all duration-300 ${
                i18n.language === "en"
                  ? "bg-teal-500 text-slate-950"
                  : "text-slate-400"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("pt")}
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full transition-all duration-300 ${
                i18n.language === "pt"
                  ? "bg-teal-500 text-slate-950"
                  : "text-slate-400"
              }`}
            >
              PT
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 flex flex-col items-center justify-center space-y-1.5 text-slate-300 hover:text-teal-400 transition"
            aria-label={isMenuOpen ? t("nav.close") : t("nav.menu")}
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-slate-950/98 backdrop-blur-xl mobile-menu-open"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col items-start px-8 pt-12 space-y-8">
            <NavLink to="/" end className={mobileNavLinkClass}>
              {t("nav.home")}
            </NavLink>
            <NavLink to="/projects" className={mobileNavLinkClass}>
              {t("nav.projects")}
            </NavLink>
            <NavLink to="/contact" className={mobileNavLinkClass}>
              {t("nav.contact")}
            </NavLink>

            <div className="w-full h-px bg-white/10 my-2" />

            {/* Resume Download */}
            <a
              href="/matheus-cv.txt"
              download="matheus-cv.txt"
              className="flex items-center space-x-2 text-lg font-semibold text-teal-400 hover:text-teal-300 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{t("nav.resume")}</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a
                href="https://github.com/matheusCsousa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 transition"
                aria-label="GitHub"
              >
                <GithubIcon className="w-7 h-7" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
