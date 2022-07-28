import Header from './header';
import Footer from './footer';

import './MainLayout.scss';

const AnnounceBar = () => {

  const promoText = 'FREE SHIPPING ON ALL ORDERS OVER $75';

  return (
    <div className='announce-bar'>
      <p className='lato light'>{promoText}</p>
    </div>
  )
}

const MainLayout = ({ children }) => (
	<>
    <AnnounceBar />
		<Header />
		{children}
		<Footer />
	</>
)
export default MainLayout;