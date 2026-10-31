import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function ContactPage() {
  const { t } = useTranslation();
  const [copyState, setCopyState] = useState("");
  const email = "matheuscds.contato@gmail.com";
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState(t("contact.contacts.email_copied"));
    } catch {
      setCopyState(t("redesign.copy_failed"));
    }
  }
  return (
    <main id="main-content" className="content-section contact-page">
      <p className="eyebrow">{t("redesign.next")}</p>
      <h1>
        {t("redesign.contact_title")}
        <br />
        <em>{t("redesign.contact_em")}</em>
      </h1>
      <p className="contact-intro">{t("contact.contacts.subtitle")}</p>
      <div className="contact-options">
        <div>
          <span className="eyebrow">EMAIL</span>
          <a href={`mailto:${email}`}>{email} ↗</a>
          <button className="button" onClick={() => void copyEmail()}>
            {t("contact.contacts.copy_email")}
          </button>
          <p role="status">{copyState}</p>
        </div>
        <a
          href="https://github.com/matheusCsousa"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗<span>@matheusCsousa</span>
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-correia-de-sousa"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗<span>Matheus Correia de Sousa</span>
        </a>
      </div>
    </main>
  );
}
