import './Instagram.scss';

import demo1 from '../../assets/images/Social1.png';
import demo2 from '../../assets/images/Social2.png';
import demo3 from '../../assets/images/Social3.png';
import demo4 from '../../assets/images/Social4.png';
import demo5 from '../../assets/images/Social5.png';

const Instagram = () => {
  return (
    <div className='instagram'>
      <h3 className='pacifico regular'>Follow us on Instagram</h3>

      <div className='link-list'>
        <img src={demo1} className='item' />
        <img src={demo2} className='item' />
        <img src={demo3} className='item' />
        <img src={demo4} className='item mobile-hide' />
        <img src={demo5} className='item mobile-hide' />
      </div>
    </div>
  )
}

export default Instagram;