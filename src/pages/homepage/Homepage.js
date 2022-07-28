import { HeroBanner, Instagram, Subscribe } from '../../components';
import Collections from './collections';
import NewArrivals from './new-arrivals';
import Trade from './trade';

import './Homepage.scss';

const Homepage = () => (
  <div>
    <HeroBanner />
    <Collections />
    <NewArrivals />
    <Trade />
    <Instagram />
    <Subscribe />
  </div>
)

export default Homepage;