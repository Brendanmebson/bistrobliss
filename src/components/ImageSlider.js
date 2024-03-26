import React, { useState, useEffect } from 'react';
import './Components.css'; 
import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.png";
import comment1 from "./Comments/comment1";
import comment2 from "./Comments/comment2";
import comment3 from "./Comments/comment3";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const data = [
    { image: customer1, username: "Dollypizzle", comment: comment1, location: "Lagos, Nigeria" },
    { image: customer2, username: "Brendan", comment: comment2, location: "Islington, London" },
    { image: customer3, username: "Dapo", comment: comment3, location: "Gwaha, Kano" }
  ];
  const [startX, setStartX] = useState(0);

  // Function to handle moving to the next image
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle moving to the previous image
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  // Function to handle swipe gestures
  const handleSwipe = (e) => {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const deltaX = startX - endX;

    if (deltaX > 50) {
      handleNext();
    } else if (deltaX < -50) {
      handlePrev();
    }
  };
  
  useEffect(() => {
    // Set up timer to automatically move to the next image every 3 seconds
    const intervalId = setInterval(handleNext, 2000);

    // Clear the timer when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once after initial render

  return (
    <div className="container" onTouchStart={(e) => setStartX(e.touches ? e.touches[0].clientX : e.clientX)} onTouchEnd={handleSwipe} onMouseDown={(e) => setStartX(e.clientX)} onMouseUp={handleSwipe}>
      <div className='commenttitle'>
        <p>What Our Customers Says</p>
      </div>
      <div data-aos="fade-left" className='slider'>
        <div className='topsection'>
          <img src={data[index].image} alt="dp" className="dp" />
          <div className='details'>
            <p className='username'>{data[index].username}</p>
            <p className='location'>{data[index].location}</p>
          </div>
        </div>
        <p className='comment'>{data[index].comment}</p>
      </div>
      <div className="dot-indicators">
        {data.map((_, idx) => (
          <span key={idx} className={idx === index ? 'dot active' : 'dot'}></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
