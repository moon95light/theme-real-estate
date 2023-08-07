import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonial1 from "../../../../../images/testimonial/1.png";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={`slider-arrow-home owl-next`} onClick={onClick}>
      <i className="las la-long-arrow-alt-right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={`slider-arrow-home owl-prev`} onClick={onClick}>
      <i className="las la-long-arrow-alt-left" />
    </div>
  );
}

const PropertySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="home-slider">
      <Slider {...settings}>
        <div className="items">
          <Link to="/property-details">
            <img
              src={testimonial1}
              alt="#"
              className="w-100 mw-100 mb-3 rounded"
            />
          </Link>
          <h5 className="fs-16 font-w600 mb-0">
            <Link to="/property-details" className="text-black">
              98AB Alexander Court, London
            </Link>
          </h5>
          <span className="fs-14 d-block mb-4">
            45 Connor St. London, 44523
          </span>
          <Link
            to="/"
            className="bgl-primary text-black p-1 pl-2 pr-2 mr-3 font-w600 rounded"
          >
            <svg
              className="mr-2"
              width={20}
              height={13}
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8125 5.54171C17.6264 5.54171 19.1667 7.01538 19.1667 8.89588V11.7709H17.7292V12.7292H16.7708V11.7709H2.39583V12.7292H1.4375V11.7709H0V8.89588C0 7.08201 1.48814 5.54171 3.35417 5.54171H15.8125ZM14.8542 0.270874C16.1425 0.270874 17.2504 1.30663 17.25 2.66671L17.2504 4.95601C16.8146 4.71707 16.3271 4.58337 15.8125 4.58337L14.8542 4.58289C14.8542 3.76226 14.1822 3.14587 13.4167 3.14587H10.5417C10.1735 3.14587 9.8377 3.28427 9.58338 3.51186C9.32939 3.28444 8.99338 3.14587 8.625 3.14587H5.75C4.95625 3.14587 4.31276 3.78921 4.3125 4.58289L3.35417 4.58337C2.83975 4.58337 2.35239 4.71699 1.91667 4.95579V2.66671C1.91667 1.37835 2.95002 0.270874 4.3125 0.270874H14.8542ZM8.625 4.10397C8.88503 4.10397 9.10417 4.34355 9.10417 4.58337L5.27083 4.58289C5.27083 4.28973 5.50427 4.10421 5.75 4.10421L8.625 4.10397ZM13.4167 4.10743C13.6878 4.10397 13.8956 4.33738 13.8958 4.58289H10.0625C10.0625 4.28554 10.2959 4.10421 10.5417 4.10421L13.4167 4.10743Z"
                fill="#3B4CB8"
              />
            </svg>
            4
          </Link>
          <Link
            to="/"
            className="bgl-primary text-black p-1 pl-3 pr-3 font-w600 rounded"
          >
            <svg
              className="mr-2"
              width={13}
              height={15}
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.92 7.00064L12.6744 8.22859C12.2819 10.1913 10.4996 11.6677 8.55634 11.6677H7.95079L9.11756 14.7791H1.5557V7.00064H12.92ZM3.50032 0C4.54604 0 5.44495 0.871336 5.44495 1.94462V5.05602H12.8345V5.83387H5.44495V6.22279H0.777849L0.777769 7.38965C0.327309 7.05126 0 6.47802 0 5.83387V1.94462C0 0.8989 0.851593 0 1.94462 0H3.50032Z"
                fill="#3B4CB8"
              />
            </svg>
            2
          </Link>
          <p className="fs-14 mt-3 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad mini
          </p>
        </div>
        <div className="items">
          <Link to="/property-details">
            <img
              src={testimonial1}
              alt="#"
              className="w-100 mw-100 mb-3 rounded"
            />
          </Link>
          <h5 className="fs-16 font-w600 mb-0">
            <Link to="/property-details" className="text-black">
              98AB Alexander Court, London
            </Link>
          </h5>
          <span className="fs-14 d-block mb-4">
            45 Connor St. London, 44523
          </span>
          <Link
            to="/"
            className="bgl-primary text-black p-1 pl-2 pr-2 mr-3 font-w600 rounded"
          >
            <svg
              className="mr-2"
              width={20}
              height={13}
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8125 5.54171C17.6264 5.54171 19.1667 7.01538 19.1667 8.89588V11.7709H17.7292V12.7292H16.7708V11.7709H2.39583V12.7292H1.4375V11.7709H0V8.89588C0 7.08201 1.48814 5.54171 3.35417 5.54171H15.8125ZM14.8542 0.270874C16.1425 0.270874 17.2504 1.30663 17.25 2.66671L17.2504 4.95601C16.8146 4.71707 16.3271 4.58337 15.8125 4.58337L14.8542 4.58289C14.8542 3.76226 14.1822 3.14587 13.4167 3.14587H10.5417C10.1735 3.14587 9.8377 3.28427 9.58338 3.51186C9.32939 3.28444 8.99338 3.14587 8.625 3.14587H5.75C4.95625 3.14587 4.31276 3.78921 4.3125 4.58289L3.35417 4.58337C2.83975 4.58337 2.35239 4.71699 1.91667 4.95579V2.66671C1.91667 1.37835 2.95002 0.270874 4.3125 0.270874H14.8542ZM8.625 4.10397C8.88503 4.10397 9.10417 4.34355 9.10417 4.58337L5.27083 4.58289C5.27083 4.28973 5.50427 4.10421 5.75 4.10421L8.625 4.10397ZM13.4167 4.10743C13.6878 4.10397 13.8956 4.33738 13.8958 4.58289H10.0625C10.0625 4.28554 10.2959 4.10421 10.5417 4.10421L13.4167 4.10743Z"
                fill="#3B4CB8"
              />
            </svg>
            4
          </Link>
          <Link
            to="/"
            className="bgl-primary text-black p-1 pl-3 pr-3 font-w600 rounded"
          >
            <svg
              className="mr-2"
              width={13}
              height={15}
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.92 7.00064L12.6744 8.22859C12.2819 10.1913 10.4996 11.6677 8.55634 11.6677H7.95079L9.11756 14.7791H1.5557V7.00064H12.92ZM3.50032 0C4.54604 0 5.44495 0.871336 5.44495 1.94462V5.05602H12.8345V5.83387H5.44495V6.22279H0.777849L0.777769 7.38965C0.327309 7.05126 0 6.47802 0 5.83387V1.94462C0 0.8989 0.851593 0 1.94462 0H3.50032Z"
                fill="#3B4CB8"
              />
            </svg>
            2
          </Link>
          <p className="fs-14 mt-3 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad mini
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default PropertySlider;
