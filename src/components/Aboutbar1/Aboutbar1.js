import React from 'react'
import "../Components.css";
import Abtbar1 from "../../assets/Abtbar1.png"



function Aboutbar1 () {
  return (

    <div className="abtbar1"> 
     <div>
        <img src={Abtbar1} alt="Abtbar1" className="Abtbar1img" />
      </div>
      <div className='text-container'>
      <div className="text-header">
        <p>We provide Healthy Food <br/>For your Family </p>
      </div>
      <div className='abttext'>
        <p className="liltext" >Lorem ipsum dolor sit amet consectetur. Posuere nibh aliquam lorem ac odio. Diam feugiat volutpat eget sed sagittis neque. Risus sollicitudin lorem</p>
        <p className='liltext'>Lorem ipsum dolor sit amet consectetur. Posuere nibh aliquam lorem ac odio. Diam feugiat volutpat eget sed sagittis neque. Risus sollicitudin lorem</p>
        <p className='liltext'>Lorem ipsum dolor sit amet consectetur. Posuere nibh aliquam lorem ac odio. Diam feugiat volutpat eget sed sagittis neque. Risus sollicitudin lorem</p>
      </div>
      </div>
      </div>
  );
}

export default Aboutbar1;