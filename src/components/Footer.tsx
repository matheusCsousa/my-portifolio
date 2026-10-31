import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Matheus Correia de Sousa</span>
      <div>
        <a
          href="https://github.com/matheusCsousa"
          target="_blank"
          rel="noreferrer"
        >
          {t("footer.github")} ↗
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-correia-de-sousa"
          target="_blank"
          rel="noreferrer"
        >
          {t("footer.linkedin")} ↗
        </a>
        <a href="mailto:matheuscds.contato@gmail.com">{t("footer.email")} ↗</a>
      </div>
    </footer>
  );
}
