// ButtonGroup.js
import React from 'react'
import './ButtonGroup.css'

const ButtonGroup = ({ colorClass }) => {
  return (
    <div className="button-group">
      <button className={colorClass}>Saiba Mais</button>
    </div>
  );
}

export default ButtonGroup;
