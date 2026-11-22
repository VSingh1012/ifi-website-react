export function SiteNav() {
  return (
    <header className="navbar">
      <nav className="header_nav" aria-label="Main navigation">
        <div className="logo">
          <a href="/">
            <img
              src="/static/images/IFI_logo.png"
              alt="Innovation For Impact home"
            />
          </a>
        </div>
        <ul className="nav-links">
          <li className="dropdown">
            <a href="/clients">Clients</a>
          </li>
          <li>
            <a href="/our-team">Team</a>
          </li>
          <li>
            <a href="/recruitment">Recruitment</a>
          </li>
          <li>
            <a href="/contact-us" className="contact-us-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
