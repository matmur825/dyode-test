import { MainLayout } from './layouts';
import { Homepage } from './pages';

import './Global.scss';

function App() {
  return (
    <div>
      <MainLayout>
        <Homepage />
      </MainLayout>
    </div>
  );
}

export default App;
