import React, { useState, useEffect } from "react";
import Categories from "./Categories";
// import image1 from "../Assets/Images/CategoryImages/Glass.jpeg";
import './HeroSection.css'

//IMAGES
import scrapProduct01 from "../img/scrap-product-02.jpg";
import scrapProduct02 from "../img/scrap-product-01.jpg";
import scrapProduct03 from "../img/scrap-product-05.jpg";
import scrapProduct04 from "../img/scrap-product-04.jpg";

const Slider = () => {
  const [screensize, setScreensize] = useState(window.innerWidth);
  const comparison = 900;

  useEffect(() => {
    const handleResize = () => {
      setScreensize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount


  const sliderItems = [
    {
      //   image: "https://placehold.it/1200x400",
      image: scrapProduct01,
      title: "First Slide Title",
      text: "Some text related to the first slide.",
    },
    {
      image: scrapProduct02,
      title: "Second Slide Title",
      text: "Some text related to the second slide.",
    },
    {
      image: scrapProduct03,
      title: "Third Slide Title",
      text: "Some text related to the second slide.",
    },
    {
      image: scrapProduct04,
      title: "Fourth Slide Title",
      text: "Some text related to the second slide.",
    },
  ];
  return (
    <div className="container-fluid ">
      <div className="row" id="hero-section">
        <div className="">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {sliderItems.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
