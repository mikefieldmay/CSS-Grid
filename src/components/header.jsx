import React from 'react';

import './header.css'

export const Header = ({
  updateView
}) => {
  return ( 
    <div onClick={() => updateView('A')} className='Header'>
      <h1>CSS GRID</h1>
    </div>
  );
}
