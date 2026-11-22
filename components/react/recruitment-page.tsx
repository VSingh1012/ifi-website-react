import data from "../../static/data/recruitment.json";
export default function RecruitmentPage() {
  if (!data.isRecruiting)
    return (
      <main className="recruitment-page">
        <section className="recruitment-hero">
          <h1 className="recruitment-heading">Join Us</h1>
          <div id="recruitment-content">
            <section className="recruitment-closed">
              <h2 className="recruitment-cycle">Recruitment Closed</h2>
              <p className="recruitment-announcement">
                {data.announcementWhenClosed}
              </p>
            </section>
          </div>
        </section>
      </main>
    );
  return (
    <main className="recruitment-page">
      <section className="recruitment-hero">
        <h1 className="recruitment-heading">Join Us</h1>
        <div id="recruitment-content">
          <section className="recruitment-open">
            <h2 className="recruitment-cycle">
              {data.cycleTitle || "Recruitment Timeline"}
            </h2>
            {data.apply?.url && (
              <div className="apply-wrapper">
                <a
                  href={data.apply.url}
                  className="apply-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.apply.text || "Apply"}
                </a>
              </div>
            )}
            <div className="timeline-wrapper">
              <ul className="timeline">
                {(data.timeline || []).map((event) => (
                  <li
                    className="timeline-item"
                    key={`${event.date}-${event.title}`}
                  >
                    <div className="timeline-card">
                      <p className="timeline-date">{event.date}</p>
                      <p className="timeline-title">{event.title}</p>
                      {event.location && (
                        <>
                          <p className="timeline-label">Location</p>
                          <p className="timeline-text">{event.location}</p>
                        </>
                      )}
                      {event.time && (
                        <>
                          <p className="timeline-label">Time</p>
                          <p className="timeline-text">{event.time}</p>
                        </>
                      )}
                    </div>
                    <div className="timeline-marker">
                      <span className="timeline-dot" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
