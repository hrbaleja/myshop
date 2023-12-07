import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./YourSliderComponent.css";
import he from '../Images/3237265.jpg'



const YourSliderComponent = () => {
  const slides = [
    {
      image: he,
    //   heading: "OUR CHRISTMAS SELECTION",
    //   content: "Discover all the creations of our Master Chocolatiers for this Christmas. Created to delight your beloved. Discover the perfect gifts for every occasion.",
    //   link: "https://www.chocolate.lindt.com/christmas",
    //   buttonText: "DISCOVER",
    },
    {
      image: "https://cdn.britannica.com/60/190360-050-0A5E06CB/Cocoa-powder-cocoa-beans.jpg",
      heading: "EXCELLENCE COCOA PURE",
      content: "Discover the new, limited edition EXCELLENCE COCOA PURE made 100% from the cocoa fruit - with nothing else added, without refined sugar.",
      link: "https://www.chocolate.lindt.com/excellence/new-excellence-cocoa-pure",
      buttonText: "DISCOVER",
    },
    {
      image: "https://www.chocolate.lindt.com/media/wysiwyg/Master-chocolatier-pouring-chocolate-1440x800.jpg",
      heading: "Welcome to the World of Lindt Chocolate",
      content: "Experience Lindt: the ultimate chocolate delight brought to you by our passionate Master Chocolatiers. Since 1845, our exquisite creations have provided moments of bliss for you to savour.",
      link: "https://www.chocolate.lindt.com/our-chocolate",
      buttonText: "EXPLORE our Products",
    },
    {
      image: "https://www.chocolate.lindt.com/media/wysiwyg/Lindor-Salted-Caramel-box-1440x800_1.jpg",
      heading: "Discover our Newest Creation",
      content: "Conjured fresh from the kitchen, LINDOR Salted Caramel laces smooth milk chocolate with buttery caramel and salt flakes to create an enhanced bittersweet flavour.",
      link: "https://www.chocolate.lindt.com/lindt-lindor-salted-caramel-truffles-200g",
      buttonText: "READ MORE",
    },
    {
      image: "https://www.chocolate.lindt.com/media/wysiwyg/Praline1440x800_2.jpg",
      heading: "What is The Lindt Difference?",
      content: "A combination of the highest quality ingredients, unrivalled care and unparalleled skill that goes into crafting each chocolate, and – most importantly – our chocolate’s smooth texture and glossy finish. That is what makes us unique.",
      link: "https://www.chocolate.lindt.com/world-of-lindt/the-lindt-difference",
      buttonText: "READ MORE",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
      };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div
              className="pagebuilder-slide-wrapper"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="pagebuilder-collage-content">
                <h1 className="pagebuilder-slide-heading">{slide.heading}</h1>
                <div className="pagebuilder-slide-content">
                  <p>
                    <span style={{ fontWeight: 400 }}>{slide.content}</span>
                  </p>
                </div>
                <a
                  className="pagebuilder-slide-link"
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="pagebuilder-slide-button">
                    {slide.buttonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default YourSliderComponent;
