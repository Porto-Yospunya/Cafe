import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuPage from './pages/Menu';

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
