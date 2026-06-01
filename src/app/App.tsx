import { useState } from "react";
import { ArrowUpRight, Mail, Plus, Minus } from "lucide-react";

const projects = [
  {
    id: "01",
    title:
      "«Из конца в конец и как попало»",
    year: "2025",
    category: "CultTech / Исследование",
    role: "Автор концепции, исследователь",
    tools: [
      "ИИ",
      "AR",
      "Биометрия",
      "Нейронауки",
      "Теория зависимости",
    ],
    description:
      "Иммерсивная выставка, исследующая параллели между алкогольным эскапизмом Венедикта Ерофеева и современной цифровой зависимостью. Инсталляция «закольцованный вагон» с ИИ-антагонистом, адаптирующим AR-контент под биометрию зрителя — пульс и движения.",
    context:
      "Культурологическое исследование · МФТИ CultTech",
    researchLink:
      "https://drive.google.com/file/d/1NGfVhtI-Ho8QCH1WX0Mli8sKhhd06wo5/view?usp=sharing",
    presentationLink:
      "https://docs.google.com/presentation/d/e/2PACX-1vRyn-fH5yTN30IYfGpKv-C8VkAb9k3hFmlJdqBEIx8xG3tFMNogUEOxl4dRzXp5uEV2XTL6PXFmzu8b/pub?start=false&loop=false&delayms=5000",
    award: null,
  },
    {
    id: "02",
    title: "L’hommage",
    year: "2024",
    category: "Кинорежиссура",
    role: "Автор идеи, сценарист, режиссёр",
    tools: [
      "Киноисследование",
      "Сценарий",
      "Раскадровка",
      "Работа с актёрами",
      "Монтаж",
      "Adobe Premiere Pro"
    ],
    description:
      "Авторский короткометражный фильм, вдохновлённый эстетикой французской новой волны и творчеством Жана-Люка Годара. Проект исследует механизмы романтической идеализации и разрыв между воображаемым образом человека и реальностью. В основе фильма — история молодого актёра Жан-Люка, который влюбляется в девушку по имени Анна и постепенно превращает её в проекцию собственных ожиданий. Работа включала исследование визуального языка французского кино 1960-х годов, разработку сценария, постановку сцен, работу с актёрами и последующий монтаж.",
    context:
      "Авторский фильм · Gogol School",
    filmLink: 
      "https://drive.google.com/file/d/1IMq5j7tKVMTeBzZlfFF-usmYbxkaJFav/view?usp=sharing",
    scriptLink: 
      "https://fallacious-motion-a74.notion.site/L-hommage-97e6b6950de24c96b989025263a29812?pvs=143",
    award: null,
  },
  {
    id: "03",
    title: "«Золотая запись»",
    year: "2021",
    category: "Архитектура данных",
    role: "Инженер данных, архитектор",
    tools: [
      "Python",
      "PL/SQL",
      "ETL",
      "SCD2",
      "API",
      "Моделирование данных",
      "Интеллектуальный анализ данных",
    ],
    description:
      "Проект по созданию централизованной системы клиентских данных для объединения информации из нескольких независимых CRM-систем. Задача заключалась в проектировании архитектуры, способной автоматически сопоставлять записи о клиентах, выявлять дубликаты, поддерживать актуальность информации и формировать единую точку доступа к данным. Работа находилась на пересечении системного проектирования, исследования качества данных и разработки алгоритмов идентификации сущностей.",
    context: "Выпускная квалификационная работа · НИЯУ МИФИ · Внедрено в MegaFon",
    thesisLink: "https://docs.google.com/presentation/d/e/2PACX-1vTuyYyLHJC-mOIs-noXoigo_749OjPqpm4o7QMjiTOndVoe7r7cpB6RpklPsgibag/pub?start=false&loop=false&delayms=3000&slide=id.p1",
    award: null,
  },
  {
    id: "04",
    title: "Girl with Arrows",
    year: "2020",
    category: "Game Design",
    role: "Разработчик, геймдизайнер",
    tools: [
      "Unity",
      "C#",
      "2D-графика",
      "Проектирование игровых механик",
      "Animation"
    ],
    description:
      "Авторский 2D-платформер, разработанный на C# с использованием Unity. Главная героиня собирает монеты, преодолевает препятствия и спасается от волка, который преследует её на протяжении уровня. Игровой процесс сочетает исследование пространства, управление ресурсами и механику стрельбы из лука, позволяющую победить противника. Проект посвящён проектированию игровых механик и созданию интерактивной среды с собственными правилами взаимодействия.",
    context:
      "Самостоятельный проект · Unity",
    gameplayVideoLink: 
      "https://drive.google.com/file/d/1iCE-odF9yisg38RbtlNpsiMTr88vjFjc/view?usp=sharing",
    githubLink:
      "https://github.com/ol-pg/game-girl-with-arrows",
    award: null,
  },
  {
    id: "05",
    title: "Исследовательские проекты по анализу данных",
    year: "2020",
    category: "Анализ данных",
    role: "Аналитик данных",
    tools: [
    "Предобработка данных",
    "Статистический анализ",
    "Исследовательский анализ данных",
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    ],
    description:
    "Серия исследовательских проектов, посвящённых анализу реальных наборов данных из различных предметных областей: телекоммуникаций, недвижимости и финансов. Работа включала полный цикл подготовки данных — очистку, обработку пропусков и выбросов, объединение источников, исследовательский анализ и проверку статистических гипотез. На основе данных выявлялись закономерности поведения пользователей, факторы, влияющие на бизнес-показатели, и скрытые взаимосвязи между параметрами. Результаты представлялись в виде аналитических выводов и визуализаций, поддерживающих принятие решений.",
    context:
    "Исследовательские проекты по анализу данных",
    githubLinkDataset:
    "https://github.com/ol-pg/yandex-praktikum-projects",
    award: null,
  }
];

const skills = [
  "Исследование",
  "Системное мышление",
  "Art & Science",
  "Проектирование интерактивного опыта",
  "Визуализация данных",
  "Творческое программирование",
  "Системный дизайн",
  "Python",
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-6 py-7 text-left group"
      >
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-xs text-muted-foreground mt-1 shrink-0 w-7"
        >
          {project.id}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
              className="text-xl font-normal text-foreground group-hover:text-accent transition-colors duration-300 leading-snug"
            >
              {project.title}
            </h3>
            <div className="flex items-center gap-4 shrink-0">
              <span
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-xs text-muted-foreground hidden sm:block"
              >
                {project.year}
              </span>
              <span
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-xs text-muted-foreground hidden md:block"
              >
                {project.category}
              </span>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                {open ? (
                  <Minus size={14} />
                ) : (
                  <Plus size={14} />
                )}
              </div>
            </div>
          </div>
        </div>
      </button>

      {open && (
        <div
          className="pb-8"
          style={{ paddingLeft: "3.25rem" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-sm text-foreground/80 leading-relaxed font-light"
              >
                {project.description}
              </p>
              <p
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-xs text-muted-foreground"
              >
                {project.context}
              </p>
              <div className="flex flex-col gap-2 mt-2">
                {project.researchLink && (
                  <a
                    href={project.researchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="inline-flex items-center gap-2 text-xs text-accent hover:underline"
                  >
                    Исследование →
                  </a>
                )}
                {project.presentationLink && (
                  <a
                    href={project.presentationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="inline-flex items-center gap-2 text-xs text-accent hover:underline"
                  >
                    Презентация →
                  </a>
                )}
                {project.gameplayVideoLink && (
                  <a
                    href={project.gameplayVideoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="inline-flex items-center gap-2 text-xs text-accent hover:underline"
                  >
                    Геймплей →
                  </a>
                )} 
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="inline-flex items-center gap-2 text-xs text-accent hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                {project.githubLinkDataset && (
                  <a
                    href={project.githubLinkDataset}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="inline-flex items-center gap-2 text-xs text-accent hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                {project.filmLink && (
                  <a
                    href={project.filmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="inline-flex items-center gap-2 text-xs text-accent hover:underline"
                  >
                    Фильм →
                  </a>
                )}
                {project.scriptLink && (
                  <a
                    href={project.scriptLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="inline-flex items-center gap-2 text-xs text-accent hover:underline"
                  >
                    Сценарий →
                  </a>
                )}
                {project.thesisLink && (
                  <a
                    href={project.thesisLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="inline-flex items-center gap-2 text-xs text-accent hover:underline"
                  >
                    Исследование →
                  </a>
                )}
              </div>
              {project.award && (
                <div className="inline-flex items-center gap-2 border border-accent/30 px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent block shrink-0" />
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                    }}
                    className="text-xs text-accent"
                  >
                    {project.award}
                  </span>
                </div>
              )}
            </div>
            <div className="space-y-5">
              <div>
                <p
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-xs text-muted-foreground uppercase tracking-widest mb-2"
                >
                  Роль
                </p>
                <p
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-sm text-foreground"
                >
                  {project.role}
                </p>
              </div>
              <div>
                <p
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="text-xs text-muted-foreground uppercase tracking-widest mb-2"
                >
                  Инструменты
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                      }}
                      className="text-xs text-foreground/70 border border-border px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-base font-normal tracking-wide"
          >
            Ольга Погодина
          </span>
          <nav className="flex items-center gap-8">
            {["Проекты", "О себе", "Контакт"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-xs text-muted-foreground mt-3 uppercase tracking-widest"
            >
              Портфолио
            </span>
            <div
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-xs text-muted-foreground mt-3 ml-auto"
            >
              2026
            </div>
          </div>

          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-6xl sm:text-8xl lg:text-9xl font-normal leading-none tracking-tight text-foreground"
          >
            Ольга
            <br />
            <em className="italic text-accent">Погодина</em>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4 border-t border-border">
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-sm text-muted-foreground max-w-md leading-relaxed font-light"
            >
              Исследователь и инженер данных, работающий на пересечении искусства, технологий и культуры.
            </p>
            <div
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-xs text-muted-foreground text-right space-y-1"
            >
              <p>Москва</p>
              <p>IT · Data Engineering · CultTech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="Проекты"
        className="max-w-6xl mx-auto px-6 pb-24"
      >
        <div className="flex items-center gap-4 mb-10">
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-xs text-muted-foreground uppercase tracking-widest"
          >
            Избранные работы
          </span>
          <div className="flex-1 h-px bg-border" />
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-xs text-muted-foreground"
          >
            {projects.length} проектов
          </span>
        </div>

        <div className="border-t border-border">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="О себе"
        className="max-w-6xl mx-auto px-6 pb-24"
      >
        <div className="flex items-center gap-4 mb-12">
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-xs text-muted-foreground uppercase tracking-widest"
          >
            О себе
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
              className="text-2xl font-normal leading-relaxed text-foreground"
            >
              Меня интересуют
              <em className="italic text-accent">
                {" "}
                сложные системы
              </em>{" "}
              — технические, культурные и социальные.
            </p>
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-sm text-muted-foreground leading-relaxed font-light"
            >
              В своих проектах я использую исследование как инструмент проектирования:
              анализирую контекст, выявляю скрытые связи и превращаю результаты
              в опыт, с которым можно взаимодействовать.
            </p>
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-sm text-muted-foreground leading-relaxed font-light"
            >
              Мне близок междисциплинарный подход, в котором инженерное мышление
              сочетается с художественной практикой. Я рассматриваю технологии
              не только как инструмент реализации, но и как материал для исследования,
              критического осмысления и создания новых сценариев взаимодействия
              между человеком и средой.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-xs text-muted-foreground uppercase tracking-widest mb-4"
              >
                Навыки
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                    }}
                    className="text-xs text-foreground border border-border px-3 py-1.5 hover:border-accent/50 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-xs text-muted-foreground uppercase tracking-widest mb-4"
              >
                Образование
              </p>
              <div className="space-y-4">
                <div>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-sm text-foreground"
                  >
                    ИТМО — Внутри Art&Science
                  </p>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-xs text-muted-foreground"
                  >
                    Программа повышения квалификации · 2026
                  </p>
                </div>
                <div>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-sm text-foreground"
                  >
                    ИТМО — Премастерс в магистратуру «Искусство и наука»
                  </p>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-xs text-muted-foreground"
                  >
                    Подготовительная программа Art & Science · 2026
                  </p>
                </div>
                <div>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-sm text-foreground"
                  >
                    МФТИ — CultTech
                  </p>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-xs text-muted-foreground"
                  >
                    Программа повышения квалификации · 2025
                  </p>
                </div>
                <div>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-sm text-foreground"
                  >
                    Gogol School
                  </p>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-xs text-muted-foreground"
                  >
                    Курс кинорежиссуры · 2023–2024
                  </p>
                </div>
                <div>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-sm text-foreground"
                  >
                    НИЯУ МИФИ
                  </p>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-xs text-muted-foreground"
                  >
                    Специалитет «Информационно-аналитические системы» · 2015–2021
                  </p>
                </div>
                <div>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-sm text-foreground"
                  >
                    Художественная школа
                  </p>
                  <p
                    style={{ fontFamily: "'DM Mono', monospace" }}
                    className="text-xs text-muted-foreground"
                  >
                    Дополнительное художественное образование · 2005–2015
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="Контакт"
        className="max-w-6xl mx-auto px-6 pb-24"
      >
        <div className="border-t border-border pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
              className="text-4xl font-normal text-foreground mb-2"
            >
              Давайте знакомиться
            </h2>
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-sm text-muted-foreground"
            >
              Открыта к диалогу
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:olgapogodina11@gmail.com"
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
            >
              <Mail size={14} />
              olgapogodina11@gmail.com
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://t.me/ol_pg"
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
            >
              Telegram — @ol_pg
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ol-pg"
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
            >
              LinkedIn — ol-pg
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://github.com/ol-pg"
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
            >
              GitHub — ol-pg
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-xs text-muted-foreground"
        >
          © 2026 Ольга Погодина
        </span>
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-xs text-muted-foreground"
        >
          Портфолио
        </span>
      </footer>
    </div>
  );
}