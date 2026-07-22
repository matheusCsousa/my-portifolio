import { useState } from "react";
import { useTranslation } from "react-i18next";
import whiteImage from "../assets/white.webp";
import { GithubIcon, LinkedInIcon } from "../components/Icons";

export default function ContactPage() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const email = t("contact.contacts.email", { returnObjects: true }) as {
    label: string;
    url: string;
    text: string;
  };

  const linkedin = t("contact.contacts.linkedin", { returnObjects: true }) as {
    label: string;
    url: string;
    text: string;
  };

  const github = t("contact.contacts.github", { returnObjects: true }) as {
    label: string;
    url: string;
    text: string;
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email.text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="relative min-h-screen w-full px-6 py-12">
      {/* Background ambient light blobs */}
      <div className="absolute top-1/4 left-1/3 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 bg-blob" />
      <div className="absolute bottom-1/4 right-1/3 -z-10 h-72 w-72 rounded-full bg-emerald-500/5 bg-blob-reverse" />

      <div className="mx-auto max-w-6xl">
        {/* HEADER HERO */}
        <div className="relative w-full h-80 md:h-96 mb-16 rounded-3xl overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
          <img
            src={whiteImage}
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.35] saturate-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-glow-teal text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              {t("contact.contacts.title")}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto">
              {t("contact.contacts.subtitle")}
            </p>
          </div>
        </div>

        {/* CONTACT CONTENT SECTION */}
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            <h2 className="md:col-span-3 text-center text-2xl font-bold text-white mb-2 tracking-tight">
              {t("contact.contacts.quick")}
            </h2>
            
            <div className="group glow-border flex flex-col gap-4 rounded-2xl border border-white/5 bg-slate-900/20 p-5 backdrop-blur-sm transition duration-300 hover:bg-slate-900/50">
              <a href={email.url} className="flex items-center space-x-4">
              <div className="rounded-xl bg-slate-950 p-3 text-teal-400 border border-white/5 group-hover:scale-105 transition duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {email.label}
                </h3>
                <p className="text-slate-200 font-medium truncate group-hover:text-teal-400 transition">
                  {email.text}
                </p>
              </div>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-full border border-teal-500/30 bg-teal-500/5 px-4 py-2 text-xs font-semibold text-teal-300 transition hover:bg-teal-500/10"
              >
                {copied ? t("contact.contacts.email_copied") : t("contact.contacts.copy_email")}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glow-border flex items-center space-x-4 rounded-2xl border border-white/5 bg-slate-900/20 p-5 backdrop-blur-sm hover:bg-slate-900/50 transition duration-300"
            >
              <div className="rounded-xl bg-slate-950 p-3 text-teal-400 border border-white/5 group-hover:scale-105 transition duration-300">
                <LinkedInIcon className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {linkedin.label}
                </h3>
                <p className="text-slate-200 font-medium truncate group-hover:text-teal-400 transition">
                  {linkedin.text}
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glow-border flex items-center space-x-4 rounded-2xl border border-white/5 bg-slate-900/20 p-5 backdrop-blur-sm hover:bg-slate-900/50 transition duration-300"
            >
              <div className="rounded-xl bg-slate-950 p-3 text-teal-400 border border-white/5 group-hover:scale-105 transition duration-300">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {github.label}
                </h3>
                <p className="text-slate-200 font-medium truncate group-hover:text-teal-400 transition">
                  {github.text}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
