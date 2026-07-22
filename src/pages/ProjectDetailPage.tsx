import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon, ExternalLinkIcon } from "../components/Icons";
import { getProjectBySlug } from "../data/projects";
import ankiMyImage from "../assets/anki-my.webp";
import petAdoptImage from "../assets/pet-adopt.webp";
import gameEngineImage from "../assets/game-engine.webp";

const projectImages: Record<string, string> = {
  anki: ankiMyImage,
  petadopt: petAdoptImage,
  firstgameengine: gameEngineImage,
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-white">
            {t("projects.not_found_title")}
          </h1>
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-teal-300 hover:text-teal-200"
          >
            <span>{t("projects.back_to_projects")}</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  const features = t(`projects.projects_list.${project.key}.features`, {
    returnObjects: true,
  }) as string[];
  const learnings = t(`projects.projects_list.${project.key}.learnings`, {
    returnObjects: true,
  }) as string[];

  return (
    <main className="relative min-h-screen px-6 py-12">
      <div className="absolute top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 bg-blob" />

      <div className="mx-auto max-w-5xl">
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center text-sm font-semibold text-slate-400 transition hover:text-teal-300"
        >
          {t("projects.back_to_projects")}
        </Link>

        <section
          className={`mb-10 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br ${project.accent} p-8 md:p-10`}
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-teal-300">
              {t(`projects.projects_list.${project.key}.type`)}
            </p>
            <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              {t(`projects.projects_list.${project.key}.title`)}
            </h1>
            <p className="text-lg leading-relaxed text-slate-300">
              {t(`projects.projects_list.${project.key}.summary`)}
            </p>
          </div>
        </section>

        {/* Screenshot / Demo Showcase */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/10 p-2 shadow-2xl backdrop-blur-sm">
          <img
            src={projectImages[project.key]}
            alt={`${t(`projects.projects_list.${project.key}.title`)} Screenshot`}
            className="w-full h-auto object-cover rounded-2xl border border-white/5 hover:scale-[1.005] transition duration-500"
          />
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/5 bg-slate-900/60 px-3 py-1 text-xs font-semibold text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          <section className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:col-span-7">
            <h2 className="mb-3 text-2xl font-bold text-white">
              {t("projects.problem_title")}
            </h2>
            <p className="leading-relaxed text-slate-400">
              {t(`projects.projects_list.${project.key}.problem`)}
            </p>
          </section>

          <aside className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:col-span-5">
            <h2 className="mb-3 text-2xl font-bold text-white">
              {t("projects.focus_title")}
            </h2>
            <p className="leading-relaxed text-slate-400">
              {t(`projects.projects_list.${project.key}.focus`)}
            </p>
          </aside>

          <section className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:col-span-6">
            <h2 className="mb-5 text-2xl font-bold text-white">
              {t("projects.features_title")}
            </h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3 text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:col-span-6">
            <h2 className="mb-5 text-2xl font-bold text-white">
              {t("projects.learning_title")}
            </h2>
            <ul className="space-y-3">
              {learnings.map((learning) => (
                <li key={learning} className="flex gap-3 text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Technical Deep-Dive Section (Only for First Game Engine) */}
        {project.key === "firstgameengine" && (
          <section className="mt-12 border-t border-white/5 pt-12">
            <h2 className="mb-8 text-glow-teal text-3xl font-extrabold tracking-tight text-white">
              {t("projects.architecture_title")}
            </h2>

            <div className="grid gap-8 lg:grid-cols-12">
              {/* Architecture & Logic Interface */}
              <div className="lg:col-span-8 space-y-6">
                <div className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8">
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {t("projects.architecture_subtitle")}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">
                    {t("projects.architecture_desc")}
                  </p>
                  
                  {/* Code block Core::Logic */}
                  <div className="relative rounded-2xl border border-white/5 bg-slate-950/90 p-4 font-mono text-xs text-teal-300 overflow-x-auto">
                    <div className="absolute top-2 right-4 text-[10px] text-slate-500 font-sans uppercase">core/Logic/Logic.hpp</div>
                    <pre>{`class Logic {
public:
    virtual void onUpdate() = 0;
    virtual void onRender() = 0;
};`}</pre>
                  </div>

                  <p className="my-4 text-sm leading-relaxed text-slate-400">
                    {t("projects.new_app_desc")}
                  </p>

                  {/* Code block Game App Example */}
                  <div className="relative rounded-2xl border border-white/5 bg-slate-950/90 p-4 font-mono text-xs text-teal-300 overflow-x-auto">
                    <pre>{`#include "core/Game/Game.hpp"
#include "YourLogic.hpp"

int main() {
    Core::GameSpecs specs;
    specs.title = "My Game";
    specs.windowSpec.width = 1280;
    specs.windowSpec.height = 720;

    Core::Game game(specs);
    game.pushLogic<YourLogic>();
    game.run();
}`}</pre>
                  </div>
                </div>

                {/* Subsystems (Camera & Input) */}
                <div className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8 space-y-6">
                  <h3 className="text-xl font-bold text-white">
                    {t("projects.camera_system_title")}
                  </h3>
                  
                  <div>
                    <p className="mb-4 text-sm leading-relaxed text-slate-400">
                      {t("projects.camera_desc")}
                    </p>
                    
                    {/* Key controls table */}
                    <div className="overflow-x-auto rounded-2xl border border-white/5 bg-slate-950/50">
                      <table className="w-full text-left border-collapse text-xs text-slate-300">
                        <thead>
                          <tr className="border-b border-white/10 bg-slate-900/50 text-slate-400 font-semibold">
                            <th className="p-3 font-medium">Key</th>
                            <th className="p-3 font-medium">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="p-3 font-mono text-teal-400">W / S</td>
                            <td className="p-3 text-slate-400">Move forward / backward</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="p-3 font-mono text-teal-400">A / D</td>
                            <td className="p-3 text-slate-400">Strafe left / right</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="p-3 font-mono text-teal-400">Q / E</td>
                            <td className="p-3 text-slate-400">Move down / up</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="p-3 font-mono text-teal-400">Mouse</td>
                            <td className="p-3 text-slate-400">Look around</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="p-3 font-mono text-teal-400">F</td>
                            <td className="p-3 text-slate-400">Toggle mouse capture</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-mono text-teal-400">Escape</td>
                            <td className="p-3 text-slate-400">Close window</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-sm leading-relaxed text-slate-400">
                      {t("projects.input_desc")}
                    </p>

                    {/* Input system code block */}
                    <div className="rounded-2xl border border-white/5 bg-slate-950/90 p-4 font-mono text-xs text-teal-300 overflow-x-auto">
                      <pre>{`enum KeyState { KEY_RELEASED, KEY_PRESSED, KEY_HELD };

Core::Input::isKeyPressed(GLFW_KEY_W);  // true only on the frame it was pressed
Core::Input::isKeyHeld(GLFW_KEY_W);     // true while held down
Core::Input::getDeltaTime();            // frame delta for consistent movement speed`}</pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar: Structure & Build Instructions */}
              <div className="lg:col-span-4 space-y-6">
                <div className="rounded-3xl border border-white/5 bg-slate-900/20 p-6">
                  <h3 className="mb-4 text-lg font-bold text-white">
                    {t("projects.structure_title")}
                  </h3>
                  
                  {/* File structure tree */}
                  <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 font-mono text-[10px] text-slate-400 leading-normal overflow-x-auto">
                    <pre>{`game_engine/
├── core/
│   ├── Game/
│   ├── Window/
│   ├── Input/
│   ├── Logic/
│   ├── Scene/
│   ├── Entity/
│   ├── Event/
│   └── Graphics/
│       ├── Camera/
│       ├── Mesh/
│       └── Renderer/
│           ├── Shader/
│           ├── VAO/
│           ├── VBO/
│           └── EBO/
└── gameApp/
    ├── main.cpp
    ├── GameLogic.cpp
    ├── Camera/
    └── shader/`}</pre>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white">
                    {t("projects.build_run_title")}
                  </h3>
                  
                  <div className="space-y-3">
                    <p className="text-xs text-slate-400">Clone and build from source:</p>
                    <div className="rounded-2xl border border-white/5 bg-slate-950/90 p-3 font-mono text-[10px] text-teal-300 overflow-x-auto">
                      <pre>{`git clone https://github.com/matheusCsousa/FirstGameEngine.git
cd FirstGameEngine
mkdir build && cd build
cmake ..
make`}</pre>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs text-slate-400">Run the application:</p>
                    <div className="rounded-2xl border border-white/5 bg-slate-950/90 p-3 font-mono text-[10px] text-teal-300 overflow-x-auto">
                      <pre>{`./build/gameApp/fersa`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {project.key === "anki" && (
          <section className="mt-12 border-t border-white/5 pt-12">
            <h2 className="mb-8 text-glow-teal text-3xl font-extrabold tracking-tight text-white">
              {t("projects.projects_list.anki.setup.title")}
            </h2>

            <div className="grid gap-8 lg:grid-cols-12">
              {/* Stack & Quick Start */}
              <div className="lg:col-span-8 space-y-6">
                <div className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8">
                  <h3 className="mb-5 text-xl font-bold text-white">
                    {t("projects.projects_list.anki.setup.quick_start")}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-teal-300">
                        {t("projects.projects_list.anki.setup.clone")}
                      </h4>
                      <div className="relative rounded-2xl border border-white/5 bg-slate-950/90 p-4 font-mono text-xs text-teal-300 overflow-x-auto">
                        <pre>{`git clone https://github.com/matheusCsousa/Anki-my.git
cd Anki-my`}</pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-teal-300">
                        {t("projects.projects_list.anki.setup.backend_title")}
                      </h4>
                      <p className="mb-2 text-xs text-slate-400">
                        {t("projects.projects_list.anki.setup.backend_desc")}
                      </p>
                      <div className="relative rounded-2xl border border-white/5 bg-slate-950/90 p-4 font-mono text-xs text-teal-300 overflow-x-auto">
                        <pre>{`cd backend
cp .env.example .env   # fill in variables
cargo run`}</pre>
                      </div>
                      <p className="mt-2 text-xs text-slate-500">
                        {t("projects.projects_list.anki.setup.backend_note")}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-teal-300">
                        {t("projects.projects_list.anki.setup.frontend_title")}
                      </h4>
                      <p className="mb-2 text-xs text-slate-400">
                        {t("projects.projects_list.anki.setup.frontend_desc")}
                      </p>
                      <div className="relative rounded-2xl border border-white/5 bg-slate-950/90 p-4 font-mono text-xs text-teal-300 overflow-x-auto">
                        <pre>{`cd ../frontend
npm install
cp .env.example .env   # set VITE_API_URL=http://localhost:8000
npm run dev`}</pre>
                      </div>
                      <p className="mt-2 text-xs text-slate-500">
                        {t("projects.projects_list.anki.setup.frontend_note")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar: Project Structure & Stack Table */}
              <div className="lg:col-span-4 space-y-6">
                <div className="rounded-3xl border border-white/5 bg-slate-900/20 p-6">
                  <h3 className="mb-4 text-lg font-bold text-white">
                    {t("projects.projects_list.anki.setup.structure")}
                  </h3>
                  
                  <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 font-mono text-[11px] text-slate-400 leading-normal overflow-x-auto">
                    <pre>{`Anki-my/
├── backend/    # Rust/Rocket REST API
└── frontend/   # React/TypeScript SPA`}</pre>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white">
                    {t("projects.projects_list.anki.setup.layers")}
                  </h3>
                  
                  <div className="overflow-x-auto rounded-2xl border border-white/5 bg-slate-950/50">
                    <table className="w-full text-left border-collapse text-xs text-slate-300">
                      <thead>
                        <tr className="border-b border-white/10 bg-slate-900/50 text-slate-400 font-semibold">
                          <th className="p-3 font-medium">
                            {t("projects.projects_list.anki.setup.layer")}
                          </th>
                          <th className="p-3 font-medium">
                            {t("projects.projects_list.anki.setup.technology")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="p-3 font-semibold text-teal-400">
                            {t("projects.projects_list.anki.setup.layer_frontend")}
                          </td>
                          <td className="p-3 text-slate-400">React 19, TS, Vite, TailwindCSS</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="p-3 font-semibold text-teal-400">
                            {t("projects.projects_list.anki.setup.layer_backend")}
                          </td>
                          <td className="p-3 text-slate-400">Rust, Rocket 0.5, SQLx</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="p-3 font-semibold text-teal-400">
                            {t("projects.projects_list.anki.setup.layer_db")}
                          </td>
                          <td className="p-3 text-slate-400">PostgreSQL</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-teal-400">
                            {t("projects.projects_list.anki.setup.layer_auth")}
                          </td>
                          <td className="p-3 text-slate-400">JWT, bcrypt</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {project.key === "petadopt" && (
          <PetAdoptionDeepDive t={t} />
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`https://github.com/matheusCsousa/${project.githubName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 rounded-full bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            <span>{t("projects.projects_list.github_link")}</span>
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 rounded-full border border-slate-800 bg-slate-950/70 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-700 hover:text-white"
          >
            <span>{t("projects.contact_button")}</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}

type Translation = ReturnType<typeof useTranslation>["t"];

function PetAdoptionDeepDive({ t }: { t: Translation }) {
  const setup = "projects.projects_list.petadopt.setup";
  const gatewayHeaders = t(`${setup}.gateway_headers`, { returnObjects: true }) as string[];
  const gatewayRows = t(`${setup}.gateway_rows`, { returnObjects: true }) as string[][];
  const accessHeaders = t(`${setup}.access_headers`, { returnObjects: true }) as string[];
  const accessRows = t(`${setup}.access_rows`, { returnObjects: true }) as string[][];
  const workflowSteps = t(`${setup}.workflow_steps`, { returnObjects: true }) as string[];
  const demoHeaders = t(`${setup}.demo_headers`, { returnObjects: true }) as string[];
  const demoRows = t(`${setup}.demo_rows`, { returnObjects: true }) as string[][];
  const limits = t(`${setup}.limits_list`, { returnObjects: true }) as string[];

  const renderTable = (headers: string[], rows: string[][]) => (
    <div className="overflow-x-auto rounded-2xl border border-white/5 bg-slate-950/50">
      <table className="w-full min-w-[38rem] text-left text-xs text-slate-300">
        <thead>
          <tr className="border-b border-white/10 bg-slate-900/50 text-slate-400">
            {headers.map((header) => <th key={header} className="p-3 font-semibold">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="border-b border-white/5 last:border-0">
              {row.map((cell, index) => (
                <td key={cell} className={`p-3 align-top leading-relaxed ${index === 0 ? "font-semibold text-teal-400" : "text-slate-400"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="mt-12 border-t border-white/5 pt-12">
      <h2 className="mb-8 text-glow-teal text-3xl font-extrabold tracking-tight text-white">
        {t(`${setup}.title`)}
      </h2>

      <div className="space-y-8">
        <section className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8">
          <h3 className="mb-3 text-xl font-bold text-white">{t(`${setup}.routing_title`)}</h3>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">{t(`${setup}.routing_desc`)}</p>
          <pre className="overflow-x-auto rounded-2xl border border-white/5 bg-slate-950/90 p-4 font-mono text-xs leading-relaxed text-teal-300">{`$page = $_GET["page"] ?? "home";
$allowed = ["home", "login", "cadastro", "perfil", "minhas_adocoes",
            "cadastrar_pet", "anunciar_pet", "gerenciar_pets", "logout",
            "listar_pets", "detalhes_pet", "validar_adocoes"];
if (!in_array($page, $allowed)) {
    $page = "home";
}`}</pre>
        </section>

        <section className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8">
          <h3 className="mb-3 text-xl font-bold text-white">{t(`${setup}.gateway_title`)}</h3>
          <p className="mb-5 text-sm leading-relaxed text-slate-400">{t(`${setup}.gateway_desc`)}</p>
          {renderTable(gatewayHeaders, gatewayRows)}
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8">
            <h3 className="mb-3 text-xl font-bold text-white">{t(`${setup}.workflow_title`)}</h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-400">{t(`${setup}.workflow_desc`)}</p>
            <ol className="space-y-4 text-sm leading-relaxed text-slate-400">
              {workflowSteps.map((step) => <li key={step} className="flex gap-3"><span className="font-semibold text-teal-300">{step.split(":")[0]}:</span><span>{step.slice(step.indexOf(":") + 1).trim()}</span></li>)}
            </ol>
          </section>

          <section className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8">
            <h3 className="mb-3 text-xl font-bold text-white">{t(`${setup}.access_title`)}</h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-400">{t(`${setup}.access_desc`)}</p>
            {renderTable(accessHeaders, accessRows)}
          </section>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8">
            <h3 className="mb-3 text-xl font-bold text-white">{t(`${setup}.install_title`)}</h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">{t(`${setup}.install_desc`)}</p>
            <pre className="overflow-x-auto rounded-2xl border border-white/5 bg-slate-950/90 p-4 font-mono text-xs leading-relaxed text-teal-300">{`mysql -u root -p -e "SOURCE src/sql/ong_adocao.sql"
php -S localhost:8000
# Open http://localhost:8000/index.php`}</pre>
          </section>

          <section className="rounded-3xl border border-white/5 bg-slate-900/20 p-6 md:p-8">
            <h3 className="mb-3 text-xl font-bold text-white">{t(`${setup}.demo_title`)}</h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-400">{t(`${setup}.demo_desc`)}</p>
            {renderTable(demoHeaders, demoRows)}
          </section>
        </div>

        <section className="rounded-3xl border border-amber-400/10 bg-amber-400/[0.03] p-6 md:p-8">
          <h3 className="mb-3 text-xl font-bold text-white">{t(`${setup}.limits_title`)}</h3>
          <p className="mb-5 text-sm leading-relaxed text-slate-400">{t(`${setup}.limits_desc`)}</p>
          <ul className="space-y-3">
            {limits.map((limit) => <li key={limit} className="flex gap-3 text-sm leading-relaxed text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />{limit}</li>)}
          </ul>
        </section>
      </div>
    </section>
  );
}
