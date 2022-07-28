import './ImageCard.scss';

const Card = ({ image, tag, className }) => {

  let cls = 'image-card';
  
  if (className)
    cls += ` ${className}`;

  return (
    <div className={cls}>
      <img src={image} />
      <p className='pacifico regular'>{tag}</p>
    </div>
  )
}

export default Card;