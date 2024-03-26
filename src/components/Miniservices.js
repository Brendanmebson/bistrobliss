import React from 'react'
import "./Components.css";
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import service4 from "../assets/service4.png"

function Miniservices() {
  return (

    <div className="servicebar"> 
    <div id='sertitle'>We Also Offer Unique Services For <br/> Your Events </div>
    <div className="serminicontainer"> 
      <div className="serblock">
        <div>
          <img src={service1} alt="catering" className="miniimg"/>
        </div>
       <div>
        <p className='sertext1'>Catering</p>
        </div>
        <div>
          <p className='sertext2'>Lorem ipsum dolor sit amet consectetur. Nunc.Lorem ipsum dolor sit amet </p>
          </div>
       </div>

      <div className="serblock">
        <div>
          <img src={service2} alt="birthday" className="miniimg"/>
        </div>
        <div>
          <p className='sertext1'>Birthday</p>
          </div>
       <div>
        <p className='sertext2'>Lorem ipsum dolor sit amet consectetur. Nunc.Lorem ipsum dolor sit amet </p>
        </div>
      </div>

      <div className="serblock">
      <div>
        <img src={service3} alt="wedding" className="miniimg"/>
        </div>
        <div>
          <p className='sertext1'>Wedding</p>
          </div>
        <div>
          <p className='sertext2'>Lorem ipsum dolor sit amet consectetur. Nunc.Lorem ipsum dolor sit amet </p>
          </div>
      </div>

      <div className="serblock">
        <div>
          <img src={service4} alt="events" className="miniimg"/>
          </div>
        <div>
          <p className='sertext1'>Events</p>
          </div>
        <div>
          <p className='sertext2'>Lorem ipsum dolor sit amet consectetur. Nunc.Lorem ipsum dolor sit amet </p>
          </div>
          
        </div>
        </div>


    </div>
  );
}

export default Miniservices;