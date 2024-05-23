// import React from "react";
import "./temp.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure this is installed

const CoverCard = () => {
  return (
    <div className="cover">
      <div className="cover-image">
        <a href="/papers/compression">
          <img
            src="https://fredhohman.com/images/featured/compression.png"
            alt="Compression"
          />
        </a>
      </div>

      <div className="cover-inner">
        <div className="cover-top">
          <div className="cover-title">
            <a href="/papers/compression">Model Compression in Practice</a>
          </div>
          <div className="cover-subtitle">
            Lessons learned from practitioners creating on-device machine
            learning experiences
          </div>
          <div className="cover-venue">CHI 2024</div>
        </div>

        <div className="cover-footer-wrapper">
          <div className="cover-links">
            <span className="pub-misc">
              <a href="/papers/compression">
                <i className="fas fa-link" aria-hidden="true"></i> Project
              </a>
              <a href="https://arxiv.org/abs/2310.04621">
                <i className="fas fa-file-pdf" aria-hidden="true"></i> PDF
              </a>
              <a href="https://www.youtube.com/watch?v=i4mZqkaA1d4">
                <i className="fas fa-film" aria-hidden="true"></i> Video
              </a>
              <a href="https://www.youtube.com/watch?v=sSDgEiKB7bg">
                <i className="fas fa-eye" aria-hidden="true"></i> Preview
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverCard;
