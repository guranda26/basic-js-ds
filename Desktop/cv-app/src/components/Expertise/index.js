import React from "react";

const Expertise = ({ data }) => {
  return (
    <section id="expertise">
      <h2>Experience</h2>
      <div className="expertise-list">
        {data.map((experience, index) => (
          <div className="experience-item" key={index}>
            <div className="date">{experience.date}</div>
            <div className="info">
              <div className="company">{experience.info.company}</div>
              <div className="job">{experience.info.job}</div>
              <div className="description">{experience.info.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
