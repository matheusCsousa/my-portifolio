import { Link } from "react-router-dom";
import redImage from "../assets/red.jpeg";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* Background Header */}
      <div className="relative w-full max-w-4xl h-96 mb-10 rounded-2xl overflow-hidden flex items-center justify-center">
        <img
          src={redImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-left brightness-75"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            {t("projects.title")}
          </h1>
          <p className="text-lg md:text-xl text-white">
            {t("projects.subtitle")}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        <Link
          to="/contact"
          className="px-6 py-3 bg-rose-600 text-white rounded-2xl shadow hover:bg-rose-900 transition"
        >
          {t("projects.contact_button")}
        </Link>
        <Link
          to="/"
          className="px-6 py-3 border border-gray-400 rounded-2xl text-gray-700 hover:bg-gray-200 transition"
        >
          {t("projects.home_button")}
        </Link>
      </div>

      {/* Project Cards */}
      <div className="text-center max-w-4xl w-full">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            "anki",
            "json",
            "gameoflife",
            "movie",
            "compiler_rust",
            "compiler_cpp",
          ].map((key) => (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t(`projects.projects_list.${key}.title`)}
              </h2>
              <p className="text-gray-600 mb-4">
                {t(`projects.projects_list.${key}.description`)}
              </p>
              <a
                href={`https://github.com/matheusCsousa/${
                  key === "json"
                    ? "JSON-editor"
                    : key === "gameoflife"
                    ? "Game-of-Life"
                    : key === "movie"
                    ? "Movie-finder-react"
                    : key === "compiler_rust"
                    ? "compiler-rust-br"
                    : key === "compiler_cpp"
                    ? "Compiler-cpp-hydro"
                    : "anki-my"
                }`}
                target="_blank"
                className="text-blue-600 hover:underline font-medium"
                rel="noopener noreferrer"
              >
                {t("projects.projects_list.github_link")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
