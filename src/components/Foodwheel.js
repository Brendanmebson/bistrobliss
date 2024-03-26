import React from 'react'
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import "./Components.css";

function Foodwheel() {
  return (
    <div className="foodcontainer rotate-center">
      <div className="column">
        <img src={food1} alt="food1" className="food"/>
        <img src={food4} alt="food4" className="food"/>
      </div>
      <div className="column">
      <img src={food2} alt="food2" className="food"/>
        <img src={food3} alt="food3" className="food"/>
        
      </div>
    </div>
  );
}

export default Foodwheel