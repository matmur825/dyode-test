import { FaShoppingCart } from 'react-icons/fa';
import { Burger } from '../../../components';

import './Header.scss';

import logo from '../../../assets/images/Logo.svg';

const links = [
  {
    title: 'Womens',
    to: '#'
  },
  {
    title: 'Mens',
    to: '#'
  },
  {
    title: 'Accessories',
    to: '#'
  },
  {
    title: 'Sale!',
    to: '#'
  },
];

const Header = () => (
  <header className='header'>
    <Burger className='desktop-hide'>
      {
        links.map((e, index) => <a className='menu-link' key={index} href={e.to}>{e.title}</a>)
      }
    </Burger>

    <a className='menu-link' href="/"><img className='icon-logo' src={logo} /></a>

    <div className='links mobile-hide'>
      {
        links.map((e, index) => <a className='menu-link lato light' key={index} href={e.to}>{e.title}</a>)
      }
    </div>
    <a className='menu-link desktop-hide' style={{ fontSize: 12 }} href="/"><FaShoppingCart /></a>
  </header>
)

export default Header;