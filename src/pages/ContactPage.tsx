import { useState } from "react";
import { useTranslation } from "react-i18next";
import whiteImage from "../assets/white.jpg";
import { GithubIcon, LinkedInIcon } from "../components/Icons";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      // Reset status after a few seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
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
        <div className="grid gap-12 md:grid-cols-12 items-start">
          {/* Quick Channels Column */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
              {t("contact.contacts.quick")}
            </h2>
            
            {/* Email Card */}
            <a
              href={email.url}
              className="group glow-border flex items-center space-x-4 rounded-2xl border border-white/5 bg-slate-900/20 p-5 backdrop-blur-sm hover:bg-slate-900/50 transition duration-300"
            >
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

          {/* Form Column */}
          <div className="md:col-span-7 bg-slate-900/30 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
              {t("contact.contacts.form_title")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {t("contact.contacts.form_name")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {t("contact.contacts.form_email")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {t("contact.contacts.form_message")}
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition duration-300 resize-none"
                />
              </div>

              {/* Status Message */}
              {submitStatus === "success" && (
                <div className="text-sm text-emerald-400 font-medium">
                  {t("contact.contacts.form_success")}
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-sm text-rose-400 font-medium">
                  {t("contact.contacts.form_error")}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-6 py-3.5 font-semibold text-slate-950 hover:brightness-110 active:scale-95 transition disabled:opacity-50 cursor-pointer shadow-lg shadow-teal-500/10"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span>{t("contact.contacts.form_submit")}</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
