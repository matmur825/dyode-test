import { Currency } from '../../helpers';

import './ProductCard.scss'

const ProductCard = ({ product, className }) => {

  let cls = 'product-card';

  if (className)
    cls += ` ${className}`;

  return (
    <div className={cls}>

      <img src={product.image} />

      <p className='product__title lato regular'>{product.title}</p>
      <p className='product__category lato light'>{product.category}</p>
      <p className='product__price pacifico regular'>{Currency(product.price)}</p>

    </div>
  );
}

export default ProductCard;