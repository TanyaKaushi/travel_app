import React, { useRef } from "react";
import d1 from "../assets/d1.jpg";
import "../styles/MostPopular.css";
import Slider from "react-slick";

const MostPopular = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    prevArrow: (
      <button onClick={handlePrevClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="black"
          className="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button onClick={handleNextClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="black"
          className="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const topDestinations = [
    {
      id: 1,
      destination_name: "Sri Lanka",
      destination_image:
        "https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-superJumbo.jpg",
      tour_days: "4 Days 3 Nights",
      flight_number: "1",
      hotel_number: "4",
      transfer_number: "2",
      activity_number: "10",
      line_1: "Tour combo with return airport transfer",
      line_2: "City Tour",
      line_3: "Curious Corner",
      tour_price: "18,623",
      discount_price: "12,780",
    },
    {
      id: 1,
      destination_name: "France",
      destination_image:
        "https://cms-b-assets.familysearch.org/dims4/default/92f0f61/2147483647/strip/true/crop/750x500+0+0/resize/1240x827!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2Fcb%2F2b%2Fab7608ce1f477c824c31846ed2f3%2Feiffel-tower-sunrise.jpg",
      tour_days: "21 Days 20 Nights",
      flight_number: "2",
      hotel_number: "3",
      transfer_number: "1",
      activity_number: "6",
      line_1: "Tour combo with return airport transfer",
      line_2: "City Tour",
      line_3: "Curious Corner",
      tour_price: "64,113",
      discount_price: "60,890",
    },
    {
      id: 1,
      destination_name: "Australia",
      destination_image:
        "https://wise.com/imaginary-v2/f5a77aebab4c5250a89ba867feeadc12.jpg?width=1200",
      tour_days: "14 Days 13 Nights",
      flight_number: "1",
      hotel_number: "3",
      transfer_number: "4",
      activity_number: "8",
      line_1: "Tour combo with return airport transfer",
      line_2: "City Tour",
      line_3: "Curious Corner",
      tour_price: "35,000",
      discount_price: "34,110",
    },
    {
      id: 1,
      destination_name: "Switzerland",
      destination_image:
        "https://www.routeperfect.com/blog/wp-content/uploads/2023/06/swiss_first_timer_top_5_cities_to_visit_in_switzerland.jpeg",
      tour_days: "18 Days 17 Nights",
      flight_number: "1",
      hotel_number: "4",
      transfer_number: "2",
      activity_number: "14",
      line_1: "Tour combo with return airport transfer",
      line_2: "City Tour",
      line_3: "Curious Corner",
      tour_price: "88,623",
      discount_price: "66,890",
    },
  ];

  return (
    <div className="most-popular-main">
      <div className="title-2">Trending Destinations</div>
      <div>
        <Slider {...settings}>
          {topDestinations.map((destination, index) => (
            <div className="main-card" key={index}>
              <div className="feature-word">featured</div>
              <div className="fav-icon">
                <i class="bi bi-suit-heart-fill" style={{ color: "white" }}></i>
              </div>
              <div className="zoom">
                <img
                  className="image"
                  src={destination.destination_image}
                  alt="image"
                />
              </div>
              <div>
                <div className="tour-name">{destination.destination_name}</div>
                <div className="location">{destination.tour_days}</div>
                <div className="d-flex justify-content-between text-center mb-2 mt-2">
                  <div className="count">
                    <i class="bi bi-airplane"></i>
                    <div>{destination.flight_number} Flights</div>
                  </div>
                  <div className="count">
                    <i class="bi bi-building"></i>
                    <div>{destination.hotel_number} Hotel</div>
                  </div>
                  <div className="count">
                    <i class="bi bi-car-front"></i>
                    <div>{destination.transfer_number} Transfers</div>
                  </div>
                  <div className="count">
                    <i class="bi bi-controller"></i>
                    <div>{destination.activity_number} Activities</div>
                  </div>
                </div>
                <div className="line">{destination.line_1}</div>
                <div className="line">{destination.line_2}</div>
                <div className="line">{destination.line_3}</div>
                <div className="d-flex gap-4">
                  <div className="price">$ {destination.tour_price}</div>
                  <div className="discount">
                    $ {destination.discount_price} <span>per person</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MostPopular;
