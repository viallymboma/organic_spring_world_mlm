import React from 'react';
import './assets/css/style.css';
import Page from './components/Page';
import Home from './pages/Home';
import CompensationPlan from './pages/CompensationPlan';
import Registration from './pages/Registration';
import ProductsPage from './pages/ProductsPage';
import VideosPage from './pages/VIdeosPage';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className='BaseTemplate'>

      <div className='BigScreenNavigationBar'>
        BigScreen Navbar
      </div>
      <div className='SmallScreenNavigationBar'>
        Small Screen Navbar
      </div>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="compensation_plan/" element={<CompensationPlan />} />
          <Route path="products_page/" element={<ProductsPage />} />
          <Route path="gallery/" element={<Gallery />} />
          <Route path="videos_page/" element={<VideosPage />} />
          <Route path="registration/" element={<Registration />} />
          <Route path="login/" element={<Login />} />
        </Routes>

      </BrowserRouter>

      <div className='BigScreenAsideBar'>
        Big screen aside
      </div>
      <div className='SmallScreenAsideBar'>
        Small screen Aside
      </div>

      <footer className='FooterContainer'>
        Footer
      </footer>

    </div>
  );
}

export default App;





{/* <nav className='NavigationBar'>
        <div className='BigScreenNavigationBar'>
          BigScreen Navbar
        </div>
        <div className='SmallScreenNavigationBar'>
          Small Screen Navbar
        </div>
      </nav> */}