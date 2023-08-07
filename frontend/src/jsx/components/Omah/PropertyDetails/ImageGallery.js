import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery1 from "../../../../images/gallery/1.png";
import gallery2 from "../../../../images/gallery/2.png";
import gallery3 from "../../../../images/gallery/3.png";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={`slider-arrow-home owl-next`} onClick={onClick}>
      <i className="fa fa-caret-right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={`slider-arrow-home owl-prev`} onClick={onClick}>
      <i className="fa fa-caret-left" />
    </div>
  );
}

const ImageGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="image-gallery-container">
      <Slider {...settings}>
        <div className="items">
          <img src={gallery1} alt="" />
        </div>
        <div className="items">
          <img src={gallery2} alt="" />
        </div>
        <div className="items">
          <img src={gallery3} alt="" />
        </div>
        <div className="items">
          <img src={gallery1} alt="" />
        </div>
        <div className="items">
          <img src={gallery2} alt="" />
        </div>
        <div className="items">
          <img src={gallery3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageGallery;
