import React from 'react';
import HeroSection from '../components/homePage_components/HeroSection';
import AboutSection from '../components/homePage_components/AboutSection';
import ProductsSection from '../components/homePage_components/ProductsSection';
import PackagesSection from '../components/homePage_components/Packages';
import HowItWorksSection from '../components/homePage_components/HowItWorks';
import TestimonialsSection from '../components/homePage_components/TestimonialSection';
import ContactSection from '../components/homePage_components/ContactSection';
import VideoSection from '../components/homePage_components/VideoSection';
import ParalaxSection from '../components/homePage_components/ParalaxSection';
import CompensationSection from '../components/homePage_components/CompensationSection';

const Home = () => {
  return (
    <main className='HomePageContent'>
      <dic className="color"></dic>
      <dic className="color"></dic>
      <dic className="color"></dic>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <VideoSection />
        <ParalaxSection />
        <CompensationSection />
        {/* <PackagesSection /> */}
        {/* <HowItWorksSection /> */}
        {/* <TestimonialsSection /> */}
        {/* <ContactSection /> */}
    </main>
  );
};

export default Home;
