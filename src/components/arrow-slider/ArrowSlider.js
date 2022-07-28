import Slick from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ArrowSlider.scss';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

const Slider = ({ children, className }) => {

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ]
  };

  let cls = 'arrow-slider';

  if (className)
    cls += ` ${className}`;

  return (
    <div className={cls}>
      <Slick {...settings}>
        {children}
      </Slick>
    </div>
  );
}

export default Slider;