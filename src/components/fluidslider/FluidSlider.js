import Slick from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FluidSlider.scss';

const Slider = ({ children, className }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  let cls = 'slider-fluid';
  
  if (className)
    cls = `${cls} ${className}`;

  return (
    <div className={cls}>
      <Slick {...settings}>
        {children}
      </Slick>
    </div>
  )
}

export default Slider;