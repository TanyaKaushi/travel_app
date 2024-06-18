import React, { useState } from "react";
import "../styles/Header.css";
import video from "../assets/video1.mp4";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Slider from "react-slick";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
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

  const destinations = [
    {
      id: 1,
      destination_name: "Bali",
      destination_image:
        "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960",
    },
    {
      id: 1,
      destination_name: "Singapore",
      destination_image:
        "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1932196766v2.jpg",
    },
    {
      id: 1,
      destination_name: "Japan",
      destination_image:
        "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1674030135/blog/bnbtltnp5nqbdevfcbmn.jpg",
    },
    {
      id: 1,
      destination_name: "Switzerland",
      destination_image:
        "https://lp-cms-production.imgix.net/2024-05/shutterstockRF704449474-color.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
    },
    {
      id: 1,
      destination_name: "Malaysia",
      destination_image:
        "https://cdn.kimkim.com/files/a/images/522b8c7df4a45dabe356d755db157db84acaaa95/original-4accc57f4a3dec9de99e689892431dac.jpg",
    },
  ];

  return (
    <>
      <div className="header-main">
        <video className="video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="content">
          <div className="title-1">Let's explore</div>
          <div className="title-2">Where Would You Like To Go ?</div>
          <div className="title-3">
            Checkout Beautiful Places Around the World
          </div>
          {/* <div className="search-bar">
            <div>
              <input
                className="form-input"
                type="text"
                placeholder="Enter the destination"
              />
              &nbsp;&nbsp;|
            </div>
            <div>
              <input type="date" className="calender-input" placeholder="checkin"/>
              &nbsp;|
            </div>
            <div>
              {" "}
              <input type="date" className="calender-input" placeholder="checkin"/> &nbsp;|
            </div>
            <div>
              <button className="button">Search</button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="slider">
        <Slider {...settings}>
          {destinations.map((des, index) => (
            <div className="card">
              <img class="image" src={des.destination_image} alt="image"></img>
              <p className="name">{des.destination_name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Header;
