import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-slate-950 py-8 text-center text-slate-500 text-sm">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-slate-400">Matheus Correia de Sousa</span> &copy; {currentYear}
        </div>
        <div className="flex space-x-6 text-slate-400">
          <a
            href="https://github.com/matheusCsousa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            {t("footer.github")}
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-correia-de-sousa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
          >
            {t("footer.linkedin")}
          </a>
          <a
            href="mailto:matheuscds.contato@gmail.com"
            className="hover:text-teal-400 transition"
          >
            {t("footer.email")}
          </a>
        </div>
      </div>
    </footer>
  );
}
