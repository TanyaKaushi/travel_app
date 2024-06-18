import React from "react";
import Slider from "react-slick";
import "../styles/Stays.css";
import i1 from "../assets/i1.gif";
import i2 from "../assets/i2.gif";
import i3 from "../assets/i3.gif";

const Stays = () => {
  const destinations = [
    {
      id: 1,
      destination_name: "Home Stays",
      destination_image:
        "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960",
    },
    {
      id: 1,
      destination_name: "Hotels",
      destination_image:
        "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1932196766v2.jpg",
    },
    {
      id: 1,
      destination_name: "Villas",
      destination_image:
        "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1674030135/blog/bnbtltnp5nqbdevfcbmn.jpg",
    },
    {
      id: 1,
      destination_name: "Guest Houses",
      destination_image:
        "https://lp-cms-production.imgix.net/2024-05/shutterstockRF704449474-color.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
    },
    {
      id: 1,
      destination_name: "Apartments",
      destination_image:
        "https://cdn.kimkim.com/files/a/images/522b8c7df4a45dabe356d755db157db84acaaa95/original-4accc57f4a3dec9de99e689892431dac.jpg",
    },
    {
      id: 1,
      destination_name: "Resorts",
      destination_image:
        "https://cdn.kimkim.com/files/a/images/522b8c7df4a45dabe356d755db157db84acaaa95/original-4accc57f4a3dec9de99e689892431dac.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 2000,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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

  return (
    <div className="stays-main">
      <div className="stays-slider">
        <div className="title">Why Choose Us ?</div>
        <div className="sub-title">
          Choose us for your vacation because we're available seven days a week
          to ensure your needs are met promptly. With our extensive expertise in
          hospitality, we offer personalized recommendations and exceptional
          attention to detail. Your satisfaction is our top priority, and we're
          committed to making your vacation unforgettable with dedicated service
          and memorable experiences.
        </div>
        <div className="card-list">
          <div className="card">
            <img src={i1} />
            <div className="t1">Knowledge & Expertise</div>
            <div className="t2">
              We know the island and we personally view every stay we represent
            </div>
          </div>
          <div className="card">
            <img src={i2} />
            <div className="t1">Customer Service</div>
            <div className="t2">
              We are here to answer your questions about the stays you choose
            </div>
          </div>
          <div className="card">
            <img src={i3} />
            <div className="t1">Finishing Touches</div>
            <div className="t2">
              We can assist you with your rental vehicle ,private chef and much
              more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stays;
