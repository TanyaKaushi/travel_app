import React, { useRef } from "react";
import d1 from "../assets/d1.jpg";
import "../styles/MostPopular.css";
import Slider from "react-slick";

const BestChoice = () => {
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
    autoplaySpeed: 9000,
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
      destination_name: "Bali",
      destination_image:
        "https://www.thaiairways.com/static/common/imgscontent/lifestyle/Indonesia/Pura_Ulun_Danu_Bratan.jpg",
      tour_days: "8 Days 7 Nights",
      flight_number: "1",
      hotel_number: "3",
      transfer_number: "4",
      activity_number: "8",
      line_1: "Tour combo with return airport transfer",
      line_2: "City Tour",
      line_3: "Curious Corner",
      tour_price: "35,623",
      discount_price: "31,890",
    },
    {
      id: 1,
      destination_name: "Canada",
      destination_image:
        "https://media.cnn.com/api/v1/images/stellar/prod/140630124917-12-canada-most-beautiful-places.jpg?q=w_2000,h_1363,x_0,y_0,c_fill",
      tour_days: "23 Days 22 Nights",
      flight_number: "4",
      hotel_number: "3",
      transfer_number: "2",
      activity_number: "15",
      line_1: "Tour combo with return airport transfer",
      line_2: "City Tour",
      line_3: "Curious Corner",
      tour_price: "72,999",
      discount_price: "64,766",
    },
    {
      id: 1,
      destination_name: "Maldives",
      destination_image:
        "https://afar.brightspotcdn.com/dims4/default/dd4ced2/2147483647/strip/true/crop/3000x1592+0+323/resize/1440x764!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg",
      tour_days: "7 Days 6 Nights",
      flight_number: "1",
      hotel_number: "1",
      transfer_number: "3",
      activity_number: "10",
      line_1: "Tour combo with return airport transfer",
      line_2: "City Tour",
      line_3: "Curious Corner",
      tour_price: "12,000",
      discount_price: "8,890",
    },
    {
      id: 1,
      destination_name: "Bangkok",
      destination_image:
        "https://i0.wp.com/travelgangtok.com/blog/wp-content/uploads/2023/12/Bangkok-Thailand.jpg?resize=741%2C437&ssl=1",
      tour_days: "3 Days 4 Nights",
      flight_number: "2",
      hotel_number: "1",
      transfer_number: "1",
      activity_number: "3",
      line_1: "Tour combo with return airport transfer",
      line_2: "City Tour",
      line_3: "Curious Corner",
      tour_price: "44,988",
      discount_price: "36,000",
    },
  ];

  return (
    <div className="most-popular-main">
      <div className="title-2">Find Best Choice For You</div>
      <div>
        <Slider {...settings}>
          {topDestinations.map((destination, index) => (
            <div className="main-card" key={index}>
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

export default BestChoice;
