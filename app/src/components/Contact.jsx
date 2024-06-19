import React from "react";
import "../styles/Destinations.css";

const Contact = () => {
  return (
    <div className="destination-main" style={{ marginTop: "-100px" }}>
      <div className="line-3">
        <div className="card">
          <div className="zoom">
            <img
              className="image-card"
              src="https://cdn.prod.website-files.com/61ad20e5b695cc23050e9552/650455e3a55850c27136f6b8_travel-bucket-list.jpg"
            />
          </div>

          <div className="text">
            <div className="title">Plan You Trip With Travel Expert</div>
            <div className="sub-title">
              Out professional advisors can craft your perfect itinerary
            </div>
            <button className="button">Call Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
