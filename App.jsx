import EffectsLayer from "./EffectsLayer";
import "./App.css";
const projects = [
  {
    title: "Data Jobs Market Analysis",
    type: "POWER BI DASHBOARD",
    description:
      "Explore job titles, salaries, locations and remote-work opportunities through an interactive dashboard.",
    tags: ["Power BI", "DAX", "Power Query"],
    link: "https://github.com/gunturudelhiprasanna/data-jobs-power-bi-dashboard",
    icon: "📊",
  },
  {
    title: "RetailRocket Product Funnel",
    type: "PRODUCT ANALYTICS",
    description:
      "Analyse product views, cart activity and purchases to discover conversion opportunities.",
    tags: ["SQL", "Funnel Analysis", "A/B Testing"],
    link: "https://github.com/gunturudelhiprasanna/RetailRocket_product_Analytics_case_study",
    icon: "🛒",
  },
  {
    title: "Business Consultancy Project",
    type: "BUSINESS INSIGHTS",
    description:
      "Translate a real client brief into business gaps, KPI frameworks and practical recommendations.",
    tags: ["Power BI", "KPIs", "Research"],
    link: "/northumbria-business-clinic.html",
    icon: "💡",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Data Visualisation",
    icon: "▥",
    tools: ["Microsoft Power BI", "DAX", "Microsoft Excel"],
    details: "Dashboards · KPI reporting · Data storytelling",
  },
  {
    number: "02",
    title: "Coding & programming",
    icon: "⌘",
    tools: ["SQL", "Python(basic)", "JavaScript", "HTML & CSS"],
    details: "Data extraction · Programming · Scripting . Web-styling",
  },
  {
    number: "03",
    title: "Statistical Tools",
    icon: "↗",
    tools: ["R", "SAS & SPSS"],
    details: "Performance measurement  · Recommendations ",
  },
  {
    number: "04",
    title: "Functional Competencies",
    icon: "◎",
    tools: ["KPI Development", "Root-Cause Analysis", "Product Metrics", "Funnel Analysis", "User Journey Analysis", "Conversion Analysis", "A/B Testing", "Hypothesis Development","Performance Measurement","User Research", "Data Storytelling", "Data-driven Decision Making", "Data analysis","Data cleaning", "stakeholder analysis"],
    details: "performance indicators . Customer journey . Product analysis . Data-driven decision making . tracking . product suscess . Drop-off ",
  },
  {
    number: "05",
    title: "Communication Tools",
    icon: "◫",
    tools:[ "Microsoft PowerPoint", "Microsoft Word", "Microsoft Excel", "Google Slides", "Google Docs ", "Google Sheets", "Google Teams", "Zooms", "outlook"],
    details: "Presentations · Reports · Documentation · Collaboration",
  },
];

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <span className="section-eyebrow">MY TOOLKIT</span>
        <h2>
          Skills that turn <span>data into decisions.</span>
        </h2>
        <p>
          The tools, metrics and thinking I use to understand products
          and uncover opportunities.
        </p>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <article
            className="skill-group-card"
            key={group.title}
            style={{ "--card-index": index }}
          >
            <div className="skill-card-top">
              <span className="skill-icon">{group.icon}</span>
              <span className="skill-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tools">
              {group.tools.map((tool) => (
                <span className="skill-tool" key={tool}>
                  {tool}
                </span>
              ))}
            </div>

            <p>{group.details}</p>
            <div className="skill-card-line" />
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home">PRASANNA<span>.</span></a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>

        <a className="nav-contact" href="mailto:Gunturudelhiprasanna@gmail.com">
          Contact ↗
        </a>
      </header>

      <main>
        <section className="hero" id="home"><EffectsLayer />
          <div className="hero-copy">
            <p className="eyebrow">PRODUCT ANALYST PORTFOLIO · 2026</p>

            <h1
              className="slide-Right-heading"
            >
              Turning data 
              <br />
              <span className="slide-Right-heading">into decisions.</span>
            </h1>

            <h2 className="hero-greeting">
  Hi, I'm <span className="typing-name">Delhi Prasanna</span>
  <span className="typing-cursor">|</span>
</h2>

            <p className="hero-description">
              I explore customer behaviour, analyse product performance
              and turn complex data into clear insights that help
              businesses make better decisions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                ▶ Explore My Work
              </a>
            <a
  href="/Delhi-prasanna-resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-button resume-button"
>
  View My Resume <span>↗</span>
</a>

            </div>

            <p className="hero-skills">SQL · EXCEL · POWER BI · PRODUCT ANALYTICS</p>
          </div>

         
<div className="hero-video-frame">
<video
  className="hero-video"
  src="/intro media.mp4"
  controls
  playsInline
  loop
  preload="metadata"
>
  Your browser does not support video playback.
</video>

  <div className="video-glow" aria-hidden="true" />
</div>
 </section>

        <section className="section about" id="about">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>Curiosity meets <span>analysis.</span></h2>
          <p>
            Level 7 MSc Business Analytics professional with product and business analysis experience, supported by a university consulting project that identified 7 business gaps and developed costed recommendations. Brings client project coordination experience, managing 2–3 concurrent projects and coordinating teams of 8–15. Uses SQL and Power BI to analyse user and business data and turn findings into practical insights for product and business decisions.
          </p>
        </section>

        <SkillsSection />

        <section className="section" id="projects">
          <p className="eyebrow">03 / SELECTED PROJECTS</p>
          <h2>Work that tells <span>a story.</span></h2>
          <p className="section-description">
            Explore my dashboards, product analysis and business insights.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <a
                  className={`project-art art-${index + 1}`}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title}`}
                >
                  <span className="art-index">0{index + 1}</span>
                  <span className="art-icon">{project.icon}</span>
                  <span className="art-caption">{project.type}</span>
                </a>

                <div className="project-info">
                  <p className="eyebrow">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
<div className="experience-card"></div>
        <section className="section" id="experience">
          <p className="eyebrow">04 / MY JOURNEY</p>
          <h2>Experience & education</h2>

          <article className="journey-card">
            <p className="eyebrow">JAN 2024 — MAY 2024</p>
            <h3>Customer Service Team</h3>
            <p className="muted">ValuePitch eTechnology</p>
            <ul>
              <li>Managed 2–3 concurrent client projects lasting 20–25 days, coordinating activities and priorities to deliver within agreed timelines.</li>
              <li>Coordinated teams of 8–15 using Excel and Zoom to track task allocation, progress and communication against deadlines.</li>
              <li>Oversaw pre-submission quality checks with 5–10 team members, coordinating reviews and resolving issues so deliverables met required standards.</li>
              <li>Consolidated project outputs and aligned team activities to complete and submit multiple deliverables within agreed timelines.</li>
            </ul>
          </article>
<div className="experience-card"></div>
          <article className="journey-card">
            <p className="eyebrow">2026</p>
            <h3>MSc Business Analytics</h3>
            <p className="muted">Northumbria University, UK</p>
            <p>Business consulting, KPI frameworks and data visualisation.</p>
          </article>
          <div className="experience-card"></div>
          <article className="journey-card">
            <p className="eyebrow">2022</p>
            <h3> B-tech Electronics and Communication Engineering </h3>
            <p className="muted"> Sri Venkateswara Engineering for Women, India</p>
            <p>Applied sciences and engineering principles.</p>
          </article>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Let's turn your next question into an insight.</h2>
          <a className="button button-primary" href="mailto:Gunturudelhiprasanna@gmail.com">
            Get in touch ↗
          </a>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/delhi-prasanna-gunturu-bb95b8216/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/gunturudelhiprasanna" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="mailto:Gunturudelhiprasanna@gmail.com">Email ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">PRASANNA<span>.</span></a>
        <p>Designed with curiosity by Delhi Prasanna.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
