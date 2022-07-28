import { SquareButton as Button } from '../../../components';

import './Trade.scss';

import demo from '../../../assets/images/HeroImage2.png';

const Trade = () => {
  return (
    <div className='homepage--trade'>
      <img src={demo} width="100%" alt='trade'/>

      <div className='content-wrapper'>
        <h2 className='pacifico regular'>Title Goes Here</h2>
        <p className='lato light'>Tagline will go right here.</p>
        <Button>SHOP NOW</Button>
      </div>
    </div>
  )
}

export default Trade;