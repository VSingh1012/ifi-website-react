export function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
              <div className="hero-kicker-div">
                <span className="hero-kicker">Innovation For Impact</span>
              </div>
              
            <h1 className="hero-heading">
              University of Michigan
              <br />
              Technical Consulting Group
            </h1>
            <div className="hero-text-div">
              <p className="hero-text">
                Our organization{" "}
                <span className="highlight">focuses on skill development</span>{" "}
                through <span className="highlight">hands-on projects</span> and{" "}
                <span className="highlight">continuous learning</span>. We provide{" "}
                <span className="highlight">real-world experience</span> with{" "}
                <span className="highlight">pro bono consulting</span>.
              </p>
            </div>
            <div className="hero-sub-div">          
              <p className="hero-sub">
                Interested in collaborating?{" "}
                <span className="highlight">Email us or become a client.</span>
              </p>
            </div>
          </div>
          <div className="hero-art">
            <img
              className="hero-blob-image"
              src="/static/images/Gradient_logo.png"
              alt="Abstract gradient artwork"
            />
          </div>
        </div>
      </section>
      <section className="mission-box">
        <div className="mission-inner">
          <div className="mission-copy">
            <h2>
              Student <span className="highlight">Powered.</span>
            </h2>
            <p>
              Innovation for Impact is a{" "}
              <span className="highlight">technical consulting group</span>{" "}
              focused on skill development through{" "}
              <span className="highlight">hands-on projects.</span> Our
              members—studying{" "}
              <span className="highlight">
                CS, UX, Data Science, and Business
              </span>
              —engage in <span className="highlight">pro bono consulting</span>{" "}
              to expand <span className="highlight">coding skills</span> and{" "}
              <span className="highlight">connect with the community.</span>
            </p>
          </div>
          <div className="mission-image">
            <img
              src="/static/images/group-picture-informal.jpg"
              alt="Innovation For Impact members"
            />
          </div>
        </div>
      </section>
      <section className="key-stats">
        <div className="stats-grid">
          {[
            ["30", "Members"],
            ["10+", "Majors"],
            ["7+", "Clients"],
          ].map(([number, label]) => (
            <div className="stats" key={label}>
              <h2>{number}</h2>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {[
            ["💻", "Front-End Development"],
            ["⚙️", "Back-End Development"],
            ["🎨", "UX/UI Design"],
            ["🤖", "AI/Machine Learning"],
          ].map(([icon, title]) => (
            <div className="service-card" key={title}>
              <div className="service-icon" aria-hidden="true">
                {icon}
              </div>
              <p className="service-title">{title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="home-clients">
        <h2>Our Clients</h2>
        <div className="home-clients-logos">
          {[
            ["inora.png", "Inora"],
            ["optilogic.png", "Optilogic"],
            ["newhaptics.png", "New Haptics"],
          ].map(([file, name]) => (
            <img
              key={name}
              src={`/static/images/clients/${file}`}
              alt={`${name} logo`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
