import React from 'react';
import './App.css';
const Item = ({ name, image }) => {
  return (
    <div className="item">
      <img src={require(`./images/${image}`)} alt={name} />
      <p className='item-name'>{name}</p>
    </div>
  );
};

export default Item;
