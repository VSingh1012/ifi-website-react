export default function ContactPage() {
  return (
    <>
      <div className="breadcrumb">
        <a href="/">Home</a> / <span>Contact Us</span>
      </div>
      <main className="contact-container">
        <h1>Contact Us</h1>
        <p>
          Drop us a message through the form below and we&apos;ll get back to
          you
        </p>
        <form method="post" action="#INSERT HERE">
          <div className="input-wrapper">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
              className="form-input"
              aria-label="First Name"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
              className="form-input"
              aria-label="Last Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your e-mail address"
              required
              className="form-input"
              aria-label="Your e-mail address"
            />
          </div>
          <textarea
            className="form-input"
            id="message"
            name="message"
            placeholder="Your Message"
            cols={40}
            rows={10}
            required
            aria-label="Your Message"
          />
          <button name="submit" type="submit" className="form-btn">
            <span>Send Message</span>
          </button>
        </form>
      </main>
    </>
  );
}
