import React from "react";
import "./Footer.css";
import AppLogo from "../../Assets/Discard-logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-link-container">
        <div className="footer-link-header-container">
          <h1>IMAGINE A PLACE</h1>
          <div
            style={{ marginTop: "1rem", color: "white", fontSize: "1.5rem" }}
          >
            <i
              class="bi bi-twitter"
              style={{ marginRight: "1rem", cursor: "pointer" }}
            ></i>
            <i
              class="bi bi-instagram"
              style={{ marginRight: "1rem", cursor: "pointer" }}
            ></i>
            <i
              class="bi bi-facebook"
              style={{ marginRight: "1rem", cursor: "pointer" }}
            ></i>
            <i
              class="bi bi-youtube"
              style={{ marginRight: "1rem", cursor: "pointer" }}
            ></i>
          </div>
        </div>
        <ul className="footer-link-1">
          <li className="footer-nav-item">Product</li>
          <li className="footer-nav-item">Download</li>
          <li className="footer-nav-item">Nitro</li>
          <li className="footer-nav-item">Status</li>
        </ul>
        <ul className="footer-link-2">
          <li className="footer-nav-item">Company</li>
          <li className="footer-nav-item">About</li>
          <li className="footer-nav-item">Jobs</li>
          <li className="footer-nav-item">Branding</li>
          <li className="footer-nav-item">Newsroom</li>
        </ul>
        <ul className="footer-link-3">
          <li className="footer-nav-item">Resources</li>
          <li className="footer-nav-item">College</li>
          <li className="footer-nav-item">Safety</li>
          <li className="footer-nav-item">Blogs</li>
          <li className="footer-nav-item">Feedback</li>
          <li className="footer-nav-item">Developers</li>
          <li className="footer-nav-item">StreamKit</li>
        </ul>
        <ul className="footer-link-4">
          <li className="footer-nav-item">Terms</li>
          <li className="footer-nav-item">Privacy</li>
          <li className="footer-nav-item">Cookie Settings</li>
          <li className="footer-nav-item">Guidelines</li>
          <li className="footer-nav-item">Acknowledgements</li>
          <li className="footer-nav-item">Licenses</li>
          <li className="footer-nav-item">Moderation</li>
        </ul>
      </div>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#5865f2",
        }}
      />
      <div style={{ marginTop: "2rem", display: "flex" }}>
        <img src={AppLogo} alt="AppLogo" />
        <button
          className="button section-4-2-btn"
          style={{ margin: "0 0 0 auto" }}
        >
          Sign up
        </button>
      </div>
    </footer>
  );
};

export default Footer;
