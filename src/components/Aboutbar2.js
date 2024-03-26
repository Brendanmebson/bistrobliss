import React from 'react';
import './Components.css';
import abtbar2 from "../assets/abtbar2.png"
import playbtn from "../assets/playbtn.png"

function Foodbar () {
  return (
    <div className="abtbar">
        <div>
            <div className='abarimg'>
            <img src={abtbar2} alt="Wideabtbarimg" className='abtbarimg'/>
            <div className='circle'>
            <img src={playbtn} alt="playbtn" className='playbtn'/>
            </div>
            </div>
        </div>
        <div className="miniabar">
            <div className="abarblock">
                <p className='a2text1'>3</p>
                <p className='a2text2'>Locations</p>
            </div>
            <div className="abarblock">
                <p className='a2text1'>2021</p>
                <p className='a2text2'>Founded</p>
            </div>
            <div className="abarblock">
                <p className='a2text1'>100+</p>
                <p className='a2text2'>Staff members</p>
                
            </div>
            <div className="abarblock">
                <p className='a2text1'>100%</p>
                <p className='a2text2'>Customers rating</p>
            </div>
        </div>
    </div>
  );
};

export default Foodbar;