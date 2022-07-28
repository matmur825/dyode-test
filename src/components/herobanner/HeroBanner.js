import Slider from '../fluidslider';
import SquareButton from '../squarebutton';

import './HeroBanner.scss';

import demo1 from '../../assets/images/HeroImage1.png';
import demo2 from '../../assets/images/HeroImage2.png';

const Slide = ({ img }) => (
  <div className='slide'>
    <img src={img} width="100%" />

    <div className='content'>
      <h1 className='pacifico regular'>Title Goes Here</h1>
      <p className='lato light'>Tagline will go right here</p>
      <SquareButton black>SHOP NOW</SquareButton>
    </div>
  </div>
)

const Hero = () => (
  <Slider className='hero'>
    <Slide img={demo1} />
    <Slide img={demo2} />
  </Slider>
)

export default Hero;