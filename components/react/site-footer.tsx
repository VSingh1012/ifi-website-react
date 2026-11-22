export function SiteFooter() {
  const socials = [
    [
      "IFI_linkedin_logo.png",
      "LinkedIn",
      "https://www.linkedin.com/company/impact-umich",
    ],
    ["IFI_email_logo.png", "Email", "mailto:innovationforimpact@umich.edu"],
    [
      "IFI_github_logo.png",
      "GitHub",
      "https://github.com/Innovation-for-Impact",
    ],
    [
      "IFI_instagram_logo.png",
      "Instagram",
      "https://www.instagram.com/impact_umich?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    ],
    [
      "IFI_linktree_logo.png",
      "Linktree",
      "https://linktr.ee/impact_umich?fbclid=PAZXh0bgNhZW0CMTEAAabuHmaHrQlNc-iIg4xMbH4U7ltBHkzfRUpjrZRNFAOoMw9meYGAwGJKNKQ_aem_6xi5ZtZt0rFpC1Udza4p_Q",
    ],
  ];
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <div className="footer-logo">
            <a href="/">
              <img src="/static/images/IFI_logo.png" alt="IFI Logo" />
              <strong>Innovation For Impact</strong>
            </a>
          </div>
          <div className="social-icons">
            {socials.map(([file, label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <img src={`/static/images/${file}`} alt="" />
              </a>
            ))}
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <div>
            <strong>ABOUT US</strong>
            <a href="/our-team">Our Team</a>
            <a href="/recruitment">Recruitment</a>
          </div>
          <div>
            <strong>CLIENTS</strong>
            <a href="/clients#external-clients">External</a>
            <a href="/clients#internal-clients">Internal</a>
          </div>
        </nav>
      </div>
      <div className="footer-bottom">
        © Copyright Innovation For Impact 2024 - 2025
      </div>
    </footer>
  );
}
