import React from 'react';
import './assets/css/style.css';
import complan from './assets/docs/Organic_Spring_World_PPT_AFRICA.pdf';
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
import NavigationBar from './components/BigScreenNavigationBar';
import SmallScreenNavigationBar from './components/SmallScreenNavigationBar';
import BigScreenNavigationBar from './components/BigScreenNavigationBar';
import FooterContainer from './components/Footer';
import BigScreenAsideBar from './components/dashboardComponents/BigScreenAsideBar';
import SmallScreenAsideBar from './components/dashboardComponents/SmallScreenAsideBar';
import CombinedNavigations from './components/CombinedNavigations';


function App() {
  return (
    <div className='BaseTemplate'>

      {/* These sections are static throughout the entire website */}

      <BrowserRouter>
        <CombinedNavigations />
        {/* <BigScreenNavigationBar />      
        <SmallScreenNavigationBar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="compensation_plan/" element={<CompensationPlan />} />
          <Route path="products_page/" element={<ProductsPage />} />
          <Route path="gallery/" element={<Gallery />} />
          <Route path="videos_page/" element={<VideosPage />} />
          <Route path="registration/" element={<Registration />} />
          <Route path="login/" element={<Login />} />
          {/* <Route path="complan/" element={complan} /> */}
        </Routes>

        {/* These sections are static throughout the entire back office after login to account */}
        <BigScreenAsideBar />
        <SmallScreenAsideBar />

        {/* This section is static throughout the entire website */}
        <FooterContainer />
      </BrowserRouter>

      

    </div>
  );
}

export default App;





// {/* <nav className='NavigationBar'>
//         <div className='BigScreenNavigationBar'>
//           BigScreen Navbar
//         </div>
//         <div className='SmallScreenNavigationBar'>
//           Small Screen Navbar
//         </div>
//       </nav> */}


  // {/* <div className='BigScreenNavigationBar'>
  //       BigScreen Navbar
  //     </div> */}


      // {/* <div className='SmallScreenNavigationBar'>
      //   Small Screen Navbar
      // </div> */}


      // {/* <footer className='FooterContainer'>
      //   Footer
      // </footer> */}


      // <div className='BigScreenAsideBar'>
      //   Big screen aside
      // </div>

      // {/* <div className='SmallScreenAsideBar'>
      //   Small screen Aside
      // </div> */}