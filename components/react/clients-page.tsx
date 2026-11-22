import data from "../../static/data/clients.json";
import { ExperienceList } from "./experience-list";
export default function ClientsPage() {
  const projects = [...data.projects.internal, ...data.projects.external];
  return (
    <main className="clients-page">
      <div className="clients-inner">
        <section className="clients-hero">
          <h1 className="clients-title">Our Clients</h1>
          <div className="clients-stat">
            <span className="clients-stat-number">
              {data.summary.statNumber}
            </span>
            <span className="clients-stat-label">{data.summary.statLabel}</span>
          </div>
          <p className="clients-intro">{data.summary.intro}</p>
        </section>
        <section className="clients-experience" id="our-experience">
          <h2 className="section-heading">Our Experience</h2>
          <ExperienceList items={data.experience} />
        </section>
        <section className="clients-projects" id="internal-clients">
          <h2 className="section-heading section-heading--spaced">
            Internal Projects
          </h2>
          <div className="projects-grid">
            {data.projects.internal.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>
        <section className="clients-projects" id="external-clients">
          <h2 className="section-heading section-heading--spaced">
            External Projects
          </h2>
          <div className="projects-grid">
            {data.projects.external.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>
        <section className="clients-cta">
          <h2>{data.cta.title}</h2>
          <p>{data.cta.body}</p>
          <a href={data.cta.buttonHref} className="clients-cta-button">
            {data.cta.buttonText}
          </a>
        </section>
      </div>
    </main>
  );
}
type Project =
  | (typeof data.projects.internal)[number]
  | (typeof data.projects.external)[number];
function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="project-card">
      <div
        className={`project-thumb${p.thumbImage ? " project-thumb--transparent" : ""}`}
      >
        {p.thumbImage ? (
          <img src={p.thumbImage} alt={p.name} />
        ) : (
          p.thumbLetter || p.name[0]
        )}
      </div>
      <div className="project-body">
        <h3 className="project-title">{p.name}</h3>
        <p
          className={`project-tag${p.type.toLowerCase().includes("external") ? " project-tag--external" : ""}`}
        >
          {p.type}
        </p>
        {p.description && <p className="project-desc">{p.description}</p>}
        {"link" in p && p.link && (
          <a
            className="project-link"
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        )}
      </div>
    </article>
  );
}
