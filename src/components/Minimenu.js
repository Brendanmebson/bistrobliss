import React from 'react'
import "./Components.css";
import mini1 from "../assets/mini1.png";
import mini2 from "../assets/mini2.png";
import mini3 from "../assets/mini3.png";
import mini4 from "../assets/mini4.png";

function Minimenu() {
  return (

    <div className="bar2"> 
    <div className='BOM'>Browse Our Menu</div>
    <div className="menminicontainer"> 
      <div className="block">
        <div>
          <img src={mini1} alt="mini1" className="minilogo"/>
        </div>
       <div>
        <p className='mentext1'>Breakfast</p>
        </div>
        <div>
          <p className='mentext2'>Lorem ipsum dolor sit amet consectetur. Mauris at sed diam orci. Quam imperdie</p>
          </div>
        <div>
        <a href="/Menu" className='minimenu' >Explore Menu</a>
        </div>
        </div>

      <div className="block">
        <div>
          <img src={mini2} alt="mini2" className="minilogo"/>
        </div>
        <div>
          <p className='mentext1'>Main Dishes</p>
          </div>
       <div>
        <p className='mentext2'>Lorem ipsum dolor sit amet consectetur. Mauris at sed diam orci. Quam imperdie</p>
        </div>
        <div>
        <a href="/Menu" className='minimenu' >Explore Menu</a>
        </div>
      </div>

      <div className="block">
      <div>
        <img src={mini3} alt="mini3" className="minilogo"/>
        </div>
        <div>
          <p className='mentext1'>Drinks</p>
          </div>
        <div>
          <p className='mentext2'>Lorem ipsum dolor sit amet consectetur. Mauris at sed diam orci. Quam imperdie</p>
          </div>
          <div>
          <a href="/Menu" className='minimenu' >Explore Menu</a>
        </div>
      </div>

      <div className="block">
        <div>
          <img src={mini4} alt="mini4" className="minilogo"/>
          </div>
        <div>
          <p className='mentext1'>Desserts</p>
          </div>
        <div>
          <p className='mentext2'>Lorem ipsum dolor sit amet consectetur. Mauris at sed diam orci. Quam imperdie</p>
          </div>
          <div>
          <a href="/Menu" className='minimenu' >Explore Menu</a>
        </div>
        </div>
        </div>


    </div>
  );
}

export default Minimenu;