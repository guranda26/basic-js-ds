import React from "react";

const Timeline = ({ data }) => {
  return (
    <section id="education">
      <h>Education</h>
      <div className="timeline">
        <div className="timeline-container">
          {data.map((event, index) => (
            <div className="timeline-event" key={index}>
              <div className="event-date">
                {event.date} <div className="timeline-line"></div>
              </div>
              <div className="event-details">
                <div className="event-title">{event.title}</div>
                <div className="event-text">{event.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Timeline };
