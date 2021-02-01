import React from 'react';
import '../styles/Card.css';
import Fridge from '../images/fridge.webp';

const Card = () => (
  <div className="card">
    <h1 className="product-name">The Fridge</h1>
    <img src={Fridge} alt="The Fridge" />
  </div>
);

export default Card;
