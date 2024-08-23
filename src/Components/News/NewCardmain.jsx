import PropTypes from "prop-types";
import React, { useState } from "react";
import "./NewCardMain.css";

const NewCardMain = ({ member }) => {
  return (
    <div className="news-card">
      <div className="news-card-inner">
        <div className="news-card-title">
          {member.link ? (
            <a href={member.link} className="link">
              {member.date}
            </a>
          ) : (
            <span>{member.date}</span>
          )}
        </div>

        {/* New Title/Headline */}
        {member.title && (
          <div className="news-card-headline">{member.title}</div>
        )}

        <div className="news-card-subtitle">{member.content}</div>

        {member.link && (
          <div className="news-card-learn-more">
            <a href={member.link} className="link" target="_blank">
              Learn More <span className="arrow">→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

NewCardMain.propTypes = {
  member: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string, // New prop for title
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
};

export default NewCardMain;
