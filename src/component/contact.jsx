import './contact.css';
function Contact() {

  return (
    <section className="page">

      <div className="page-container">

        <div className="page-label">
          04 / CONTACT
        </div>

        <h1 className="page-title">
          Let's <span>Connect.</span>
        </h1>

        <p className="page-description">
          Have a project idea, collaboration opportunity or
          simply want to talk about technology? Feel free
          to get in touch.
        </p>

        <div className="contact-box">

          <div className="contact-info">

            <div className="contact-item">
              <small>NAME</small>
              <p>Pratham Sogalad</p>
            </div>

            <div className="contact-item">
              <small>EDUCATION</small>
              <p>2nd Year AIML Engineering</p>
            </div>

            <div className="contact-item">
              <small>COLLEGE</small>
              <p>SDM College of Engineering</p>
            </div>

            <div className="contact-item">
              <small>LOCATION</small>
              <p>India</p>
            </div>

          </div>


          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              placeholder="Write your message..."
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;