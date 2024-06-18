import React from "react";
import "../styles/Destinations.css";
import d1 from "../assets/d1.jpg";

const Destinations = () => {
  return (
    <div className="destination-main">
      <div className="title-2">Go Exotic Places</div>
      <div className="card-set">
        <div className="line-1">
          <div className="card">
            <div className="overlay"></div>
            <img
              className="image"
              src="https://imageio.forbes.com/specials-images/imageserve/65280003a36cd6aea36f399a/Maldives-hotel-beach-resort-on-tropical-Island-with-aerial-drone-view/0x0.jpg?format=jpg&height=1406&width=2501"
            />
            <div className="title">Maldives</div>
          </div>
          <div className="card">
            <div className="overlay"></div>
            <img
              className="image"
              src="https://cms-b-assets.familysearch.org/dims4/default/92f0f61/2147483647/strip/true/crop/750x500+0+0/resize/1240x827!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2Fcb%2F2b%2Fab7608ce1f477c824c31846ed2f3%2Feiffel-tower-sunrise.jpg"
            />
            <div className="title">France</div>
          </div>
        </div>

        <div className="line-2">
          <div className="card">
            <div className="overlay"></div>
            <img
              className="image"
              src="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg"
            />
            <div className="title">India</div>
          </div>
        </div>

        <div className="line-1">
          <div className="card">
            <div className="overlay"></div>
            <img
              className="image"
              src="https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3ODA1Njk5NjgwNDQ1NzQx/japancitiesmain2023.jpg"
            />
            <div className="title">Japan</div>
          </div>
          <div className="card">
            <div className="overlay"></div>
            <img
              className="image"
              src="https://luxuryescapes.com/inspiration/wp-content/uploads/2023/02/shutterstock_1499136152-scaled.jpg"
            />
            <div className="title">Thailand</div>
          </div>
        </div>
      </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
