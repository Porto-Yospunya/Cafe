import { Routes, Route, HashRouter as Router } from 'react-router-dom';

import Layout from './Layout';
import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import GalleryPage from './pages/Gallery';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path='/' element={<HomePage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/gallery' element={<GalleryPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

