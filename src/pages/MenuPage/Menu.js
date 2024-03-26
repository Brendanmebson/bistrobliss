import React, { useState } from 'react';
import Navbar from '../../components/Navigation/Navbar';
import Footer from '../../components/Footer';
import './Menu.css';
import Foodbar from '../../components/Foodbar';
import menuitem from "../../assets/menuitem.png";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // Set default category to 'all'

  const menuItems = [
    { name: 'All', category: 'all' },
    { name: 'Breakfast', category: 'breakfast' },
    { name: 'Dishes', category: 'dishes' },
    { name: 'Drinks', category: 'drinks' },
    { name: 'Desserts', category: 'desserts' },
  ];

  const items = [
    { name: 'Fried Eggs', description: 'Two fried eggs served with toast and your choice of sides', price: '$6.00', category: 'breakfast', image: menuitem },
    { name: 'Lemonade', description: 'Refreshing homemade lemonade made with freshly squeezed lemons', price: '$4.00', category: 'drinks', image: menuitem },
    { name: 'Pancakes', description: 'Fluffy pancakes served with maple syrup', price: '$7.00', category: 'breakfast', image: menuitem },
    { name: 'French Toast', description: 'Classic French toast with powdered sugar', price: '$8.00', category: 'breakfast', image: menuitem },
    { name: 'Cocktails', description: 'Handcrafted cocktails made with premium spirits and fresh ingredients', price: '$10.00', category: 'drinks', image: menuitem },
    {name: 'Waffles', description: 'Golden Belgian waffles served with fresh berries and whipped cream', price: '$8.00', category: 'breakfast', image: menuitem },
    { name: 'Burger', description: 'Juicy beef patty with lettuce and cheese', price: '$15.00', category: 'dishes', image: menuitem },
    { name: 'Pizza', description: 'Thin-crust pizza with your choice of toppings', price: '$18.00', category: 'dishes', image: menuitem },
    { name: 'Coffee', description: 'Freshly brewed coffee', price: '$3.00', category: 'drinks', image: menuitem },
    { name: 'Ice Cream', description: 'Creamy vanilla ice cream', price: '$4.00', category: 'desserts', image: menuitem },
    { name: 'Smoothie', description: 'Refreshing fruit smoothie', price: '$5.00', category: 'drinks', image: menuitem },
    { name: 'Chocolate Cake', description: 'Decadent chocolate cake', price: '$6.00', category: 'desserts', image: menuitem },
  ];

  const handleMenuItemClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter(item => selectedCategory === 'all' || item.category === selectedCategory);

  return (
    <div className='Menu'>
      <Navbar />
      <div className='mhead'>
        <div className='m1'>
          <div>
            <p id='mtitle'>Our Menu</p>
          </div>
          <div>
            <p className="mtext">
              Lorem ipsum dolor sit amet consectetur. Elit et sed faucibus viverra ac amet. Quam urna elementum enim elementum mauris non dui volutpat. Laoreet morbi quis pulvinar vitae commodo egestas ut massa. Justo eleifend sed arcu convallis enim.
            </p>
          </div>
        </div>
        <div className='m2'>
          <ul className='allmbtn'>
            {menuItems.map(menuItem => (
              <li key={menuItem.category}>
                <button className={`mbtn ${selectedCategory === menuItem.category ? 'active' : ''}`} onClick={() => handleMenuItemClick(menuItem.category)}>{menuItem.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="menu-list">
        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.name} className="menu-item">
              <img src={item.image} alt={item.name} className='menuitemimg' />
              <div>
                <h3>{item.name}</h3>
                <p className='itemdes'>{item.description}</p>
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Foodbar />
      <Footer />
    </div>
  );
};

export default Menu;
