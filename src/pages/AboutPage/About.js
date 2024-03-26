import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import Aboutbar1 from '../../components/Aboutbar1/Aboutbar1'
import Aboutbar2 from '../../components/Aboutbar2'
import Footer from '../../components/Footer'
import "./About.css";
import ImageSlider from '../../components/ImageSlider'
import Aboutbar1txt from '../../components/Aboutbar1/Aboutbar1txt'

const About = () => {
  return (
    <div className='About'>
    <Navbar/>
    <Aboutbar1/>
    <Aboutbar1txt/>
    <div className='abouttext'>
      <p>Lorem ipsum dolor sit amet consectetur. Non quis dui ultrices sed quam in vehicula orci lacus. Non egestas eget libero elit consequat. Orci mi ornare faucibus dignissim tellus purus velit nibh ut. Eu amet faucibus amet elementum volutpat. Non nisl fermentum vitae lectus dolor et orci turpis integer. Quis a blandit auctor semper tellus eget diam nullam dignissim. Dictum nisi urna suscipit ultrices etiam. Consectetur sem lacus quisque vehicula ac nunc.<br/>Posuere amet non dolor libero urna magna dolor arcu venenatis. Pretium id mauris lorem ultricies eu. Et volutpat duis varius massa magna neque purus nunc. Dui sed enim gravida sit semper senectus tellus nisl varius. Vel purus mauris blandit semper leo egestas neque. Nunc sit ipsum odio laoreet neque porttitor. Sit ac justo nisl penatibus magna tortor velit eget. Egestas libero urna sed curabitur odio ut. Cursus dictumst diam fermentum proin etiam ultrices dui. Tellus montes varius gravida ultrices eu. Lectus est interdum vestibulum praesent neque accumsan eget. Aliquet id sed amet lorem scelerisque nibh.<br/>Ipsum aenean quisque morbi morbi. Et blandit quis phasellus nunc ultrices ipsum. Nullam elementum mi cras diam. Mattis tellus vitae leo pulvinar. Egestas nunc libero vulputate quam a diam dui ipsum. Ut proin enim egestas sodales bibendum ultrices a est </p>
    </div>
    <Aboutbar2/>
    <ImageSlider/>
    <Footer/>
    </div>
  )
}

export default About