import { Accordion } from '../../../components';

import './Footer.scss';

import fb from '../../../assets/images/Facebook.svg';
import ig from '../../../assets/images/Instagram.svg';
import tt from '../../../assets/images/Twitter.svg';

const menu = [
  {
    title: 'Customer Service',
    children: [
      {
        title: 'Accessibility',
        to: '#'
      },
      {
        title: 'Contact Us',
        to: '#'
      },
      {
        title: 'Return Policy',
        to: '#'
      },
      {
        title: 'FAQ',
        to: '#'
      },
      {
        title: 'Gift Certificates',
        to: '#'
      },
      {
        title: 'Wishlist',
        to: '#'
      },
    ]
  },
  {
    title: 'Company',
    children: [
      {
        title: 'About Us',
        to: '#'
      },
      {
        title: 'Careers',
        to: '#'
      },
      {
        title: 'Press',
        to: '#'
      },
      {
        title: 'Affiliates',
        to: '#'
      },
    ]
  }
];

const SubMenu = ({ menu }) => {
  return (
    <div className='submenu mobile-hide'>
      <h5 className='pacifico regular'>{menu.title}</h5>
      {
        menu.children.map((e, index) => <a className='menu-item lato light' key={index} href={e.to}>{e.title}</a>)
      }
    </div>
  );
}

const Footer = () => (
  <footer className='footer'>
    <div className='section'>
      <div className='section__links'>
        {menu.map((e, index) => <SubMenu menu={e} key={index} />)}
        {menu.map((e, index) => (
          <Accordion title={e.title} key={index} className='desktop-hide'>
            {
              e.children.map((e, index) => (
                <a className='menu-item-accordion lato light' key={index} href={e.to}>{e.title}</a>
              ))
            }
          </Accordion>
        ))}
      </div>

      <div className='section__social'>
        <h5 className='pacifico regular'>Follow Us</h5>

        <div className='section__social__links'>
          <a href='#'><img src={fb} /></a>
          <a href='#'><img src={ig} /></a>
          <a href='#'><img src={tt} /></a>
        </div>
      </div>
    </div>
  </footer >
)

export default Footer;