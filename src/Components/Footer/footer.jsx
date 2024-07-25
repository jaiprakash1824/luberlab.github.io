import "./footer.css";

const Footer = () => {
  const baseURL = import.meta.env.BASE_URL;
  const uta_engineering = baseURL + "assets/logo/uta_engineering.jpg";
  const ut_system = baseURL + "assets/logo/UTSystem.png";
  const tacc = baseURL + "assets/logo/tacc.png";
  return (
    <footer className="home-footer-container">
      <div className="home-footer-logos">
        <img
          src={uta_engineering}
          alt="UTA Logo"
          className="home-footer-logo"
        />
        <img
          src={ut_system}
          alt="UT System Logo"
          className="home-footer-logo"
        />
        <img src={tacc} alt="TACC Logo" className="home-footer-logo" />
      </div>
      <div className="home-footer-link-container">
        <div className="home-footer-address">
          <h2>Health Data Science Lab</h2>
          <address>
            SEIR Building Rooms 417, 422, & 428
            <br />
            The University of Texas at Arlington
            <br />
            655 West Mitchell Street
            <br />
            Arlington, Texas 76010
            <br />
            (Maps, Directions)
          </address>
        </div>
        <div className="home-footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="home-footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
