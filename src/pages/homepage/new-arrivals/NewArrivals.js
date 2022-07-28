import { ArrowSlider, ProductCard } from '../../../components';

import './NewArrivals.scss';

import demo from '../../../assets/images/ProductImage.png';

const demoProduct = {
  image: demo,
  title: 'Product Title',
  category: "Women's T-Shirt",
  price: 19.99,
}

const NewArrivals = () => {
  return (
    <div className='homepage--newarrivals'>
      <h2 className='pacifico regular'>New Arrivals</h2>

      <ArrowSlider>
        <ProductCard product={demoProduct} />
        <ProductCard product={demoProduct} />
        <ProductCard product={demoProduct} />
        <ProductCard product={demoProduct} />
        <ProductCard product={demoProduct} />
        <ProductCard product={demoProduct} />
      </ArrowSlider>
    </div>
  );
}

export default NewArrivals;

