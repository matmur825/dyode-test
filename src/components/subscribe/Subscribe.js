import SubscribeForm from '../subscribe-form';

import './Subscribe.scss';

import mailSvg from '../../assets/images/Group.svg';

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className='section'>
        <div className='section__title'>
          <img src={mailSvg} />
          <h3 className='pacifico regular'>Sign up & Stay Connected</h3>
        </div>

        <div className='section__content'>
          <div className='section__content__text'>
            <span className='lato regular'>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</span>
          </div>

          <div className='section__content__form'>
            <SubscribeForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;