import React from 'react';

import './grid.css'

export const GridItem = ({backgroundColor, itemType}) => {
  console.log(itemType)
  return (
    <>
      { itemType === 'dumb' ?
      <div className='GridItem' style={{backgroundColor: `var(${backgroundColor})`}}>
        <h1>Hi I'm an item</h1>
      </div>
      :
      <div className='GridItem' style={{backgroundColor: `var(${backgroundColor})`}}>
        <h1>Hi I'm a smart item</h1>
      </div> }
    </>
  );
}
