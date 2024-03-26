import React from 'react';
import './Components.css';
import fbaricon1 from "../assets/fbaricon1.png"
import fbaricon2 from "../assets/fbaricon2.png"
import fbaricon3 from "../assets/fbaricon3.png"
import foodbar from "../assets/foodbar.png"

function Foodbar () {
  return (
    <div className="fbar">
        <div>
            <img src={foodbar} alt="Widefbarimg" className='foodbarimg'/>
        </div>
        <div className="minifbar">
            <div className="fbarblock">
                <div className="small-image">
                    <div className="fbaricon1">
                    <img src={fbaricon1} alt="Fbaricon1" className='fbaricon' />
                    </div>
                </div>
                <div>
                    <p className='fbartext1'>Delivery Within 30min</p>
                </div>
                <div>
                    <p className='fbartext2'>Lorem ipsum dolor sit amet consectetur. Sed</p>
                </div>
            </div>
            <div className="fbarblock">
                <div className="small-image">
                    <div className='fbaricon2'>
                    <img src={fbaricon2} alt="Fbaricon2" className='fbaricon'/>
                    </div>
                </div>
                <div>
                    <p className='fbartext1'>Best Offer & Prices</p>
                </div>
                <div>
                    <p className='fbartext2'>Lorem ipsum dolor sit amet consectetur. Sed</p>
                </div>
                </div>
            <div className="fbarblock">
                <div className="small-image">
                    <div className='fbaricon3'>
                        <img src={fbaricon3} alt="Fbaricon3" className='fbaricon' />
                    </div>
                </div>
                <div>
                    <p className='fbartext1'>Oniline Services Available</p>
                </div>
                <div>
                    <p className='fbartext2'>Lorem ipsum dolor sit amet consectetur. Sed</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Foodbar;