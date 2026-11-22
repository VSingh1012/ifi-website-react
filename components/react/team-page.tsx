import members from "../../static/data/team_members/board.json";
export default function TeamPage() {
  return (
    <main className="team-page">
      <section className="team-hero">
        <div className="team-hero-image-wrapper">
          <img
            src="/static/images/group-photo-header.png"
            alt="IFI Team"
            className="team-hero-image"
          />
          <div className="team-hero-overlay" />
          <h1 className="team-hero-title">Meet The Team</h1>
        </div>
      </section>
      <section className="team-main">
        <section className="team-section">
          <div className="team-section-header">
            <h2 className="team-section-title">Executive Board</h2>
            <div className="team-section-divider" />
          </div>
          <div className="board-grid">
            {members.map((member) => (
              <article className="member" key={member.name}>
                <img
                  className="profile-photo"
                  src={member.image}
                  alt={member.name}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <img
                    className="linkedin"
                    src="/static/images/linkedin-icon.png"
                    alt="LinkedIn"
                  />
                </a>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
