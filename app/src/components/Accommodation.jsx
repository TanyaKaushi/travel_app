import React, { useEffect, useState } from "react";
import "../styles/Accommodation.css";
import Slider from "react-slick";

const Accommodation = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
  };

  const [accommodation, setAccommodation] = useState([
    'Hotels',
    'Resorts',
    'Villas',
    'Apartments',
    'Home Stays',
    'Cabanas',
    'Guest Houses'
  ]);
  const [currentAccommodationIndex, setAccommodationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAccommodationIndex((prevIndex) =>
        (prevIndex + 1) % accommodation.length
      );
    }, 5000); // Change profession every 5 seconds

    return () => clearInterval(interval);
  }, [accommodation.length]);


  return (
    <div className="info-main">
      <div className="card-item">
        <div className="content">
          <div className="text">
            Find Your Ideal <div className="span">{accommodation[currentAccommodationIndex]}</div>  for a Perfect Getaway.
          </div>
        </div>

        <div className="image-part">
          <Slider {...settings}>
            <div className="image-div">
              <img src="https://images.ctfassets.net/rxqefefl3t5b/6gYazCYOaDRzJSlFI82XUn/1b05d2be8d976b105c9d5d620f84217b/Virgin_Hotels_Dallas_The_Know_Email_1742x1080_copy.png" />
            </div>
            <div className="image-div">
            <img src="https://assets.onthebeach.co.uk/m/19e597f933f15f5b/webimage-A4A7DA80-D1D0-457C-93B924611D7583D4" />
            </div>
            <div className="image-div">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/425135895.jpg?k=45b3c7afa4634c16b292d7aa380c03fe7c68c707fd6c45762fa2f136e3ef7c4a&o=&hp=1" />
            </div>
            <div className="image-div">
            <img src="https://images1.apartments.com/i2/e6u3l-T7FvY1AG9oKhyi8LdGl1ARxbb35YcrnGcDHbo/111/image.jpg" />
            </div>
            <div className="image-div">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/114961172.jpg?k=f47aedef58640e9a1b63aef1a39bbc2914cbaab0a0f36aad33a5754a855c9d97&o=&hp=1" />
            </div>
            <div className="image-div">
            <img src="https://www.balitecture.com/wp-content/uploads/2021/09/Bali-Architects-Balitecture-Portfolio-Modern-Bali-Design-5.jpg" />
            </div>
            <div className="image-div">
            <img src="https://www.home-designing.com/wp-content/uploads/2013/07/1-party-guest-house.jpeg" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
