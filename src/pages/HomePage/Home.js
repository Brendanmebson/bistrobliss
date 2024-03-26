import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import Foodwheel from '../../components/Foodwheel';
import "./Home.css";
import Minimenu from '../../components/Minimenu';
import Aboutbar1 from '../../components/Aboutbar1/Aboutbar1';
import Footer from '../../components/Footer'
import Miniservices from '../../components/Miniservices';
import Foodbar from '../../components/Foodbar';
import ImageSlider from '../../components/ImageSlider';
import Aboutbar1btn from '../../components/Aboutbar1/Aboutbar1btn';



const Home = () => {
  return (
    <div className='Home'>
    <Navbar/>
    <div className='bar1'>
    <div className="text1container">
    <div>
      <p className='text1'>Best Food For Your <span className="taste-highlight">Taste</span>!</p>
    </div>
    <div>
      <p className='text2'>Lorem ipsum dolor sit amet consectetur. Nunc pellentesque quam in quis pretium.</p>
    </div>
    <div className='bar1links'>
    <a href="/Contact" className='bktable' > Book A Table </a>
    <a href="/Menu" className='expmenu' > Explore Menu </a>
    </div>
    </div>
    <Foodwheel/>
    </div>
    <div className='bar2'>
      <Minimenu/>
    </div>
    <div>
    <Aboutbar1/>
    <Aboutbar1btn/>
    </div>
    <Miniservices/>
    <Foodbar/>
    <ImageSlider/>
    <Footer/>
    </div>
  );
};

export default Home