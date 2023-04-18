
import React from 'react';
import Header from '../components/Header';
import Hero from '..//components/Hero';
import Selection from '../components/Selection';
import Bandeau from '../components/Bandeau';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className='box-border'>
    <Header />
    <Hero />
    <Selection />
    <Bandeau />
    <Footer/>
  </div>
  );
  
}

export default Home;