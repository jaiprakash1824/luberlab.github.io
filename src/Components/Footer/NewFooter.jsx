// src/Footer.jsx
import "./NewFooter.css";
import { Link } from "react-router-dom";
//import '@fortawesome/fontawesome-free/css/all.min.css';

// Base URL for assets
const baseURL = import.meta.env.BASE_URL;
const uta_engineering = baseURL + "assets/logo/uta_engineering.jpg";
const ut_system = baseURL + "assets/logo/UTSystem.png";
const tacc = baseURL + "assets/logo/tacc.png";
const logo = baseURL + "#";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* About Us Section */}
        <div className="footer-about-us">
          <h4>About Us</h4>
          <ul>
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li>
              <Link to="/Publications">Publications</Link>
            </li>
            <li>
              <Link to="/team">Teams</Link>
            </li>
            <li>
              <Link to="/News">News</Link>
            </li>
            <li>
              <Link to="/contact">Join Us</Link>
            </li>
          </ul>
        </div>

        {/* Sponsors Section */}
        <div className="footer-sponsors">
          <h4>Sponsors</h4>
          <div className="sponsor-logos">
            <img
              src={uta_engineering}
              alt="UTA Engineering"
              className="sponsor-logo"
            />
            <img src={ut_system} alt="UT System" className="sponsor-logo" />
            <img src={tacc} alt="TACC" className="sponsor-logo" />
          </div>
        </div>

        {/* Customer Service Section */}
        <div className="footer-customer-service">
          <h4>Documentation</h4>
          <ul>
            <li>
              <a href="#{archivePDF}" target="_blank" rel="noopener noreferrer">
                Archive
              </a>
            </li>
            <li>
              <a
                href="#{resourcesPDF}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resources
              </a>
            </li>
            <li>
              <a href="#{faqPDF}" target="_blank" rel="noopener noreferrer">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social-media">
          <h4>Get in touch</h4>
          <div className="social-icons">
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; 2024 The University of Texas at Arlington. All Rights Reserved.
          <a href="#privacy"> Privacy Policy</a>
          <a href="#terms"> Terms of Use</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
