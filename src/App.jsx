import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './layouts/pages/Home';
import Navbar from './layouts/components/Navbar';
import Footer from './layouts/components/Footer';
import MenuPage from './layouts/pages/Menu';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
