import { ImageCard } from '../../../components';

import './Collections.scss';

import demo1 from '../../../assets/images/MensImage.png';
import demo2 from '../../../assets/images/WomensImage.png';
import demo3 from '../../../assets/images/AccessoriesImage.png';

const Collections = () => {
  return (
    <div className='homepage--collections'>

      <ImageCard
        image={demo2}
        tag="Womens"
        className="item"
      />

      <ImageCard
        image={demo1}
        tag="Mens"
        className="item"
      />

      <ImageCard
        image={demo3}
        tag="Accessories"
        className="item"
      />

    </div>
  )
}

export default Collections;