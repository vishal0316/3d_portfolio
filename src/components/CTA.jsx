import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <div className="cta-buttons">
        <a
          href="https://twitter.com/vishalll141"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="cta-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/vishal-rajput-1603v/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cta-icon" />
        </a>
        <a href="mailto:vishal.rajput.work@gmail.com">
          <FaEnvelope className="cta-icon" />
        </a>
      </div>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
