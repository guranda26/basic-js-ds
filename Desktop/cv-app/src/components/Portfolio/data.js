import React from "react";

const PortfolioInfo = ({ title, text, description, url }) => {
  return (
    <div className="portfolio-info">
      <h3>{title}</h3>
      <p>{text}</p>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Source
      </a>
    </div>
  );
};

export default PortfolioInfo;
