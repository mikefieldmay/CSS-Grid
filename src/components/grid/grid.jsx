import React from 'react';

import { GridItem } from './gridItem';
import './grid.css'

export const Grid = ({items, itemType, styles}) => {

  let gridItems =[]

  items.map((item) => {
    gridItems.push(
      <GridItem
        itemType={itemType}
        key={`${item.itemNum}`}
        backgroundColor={item.backgroundColor}/>
    )
  })

  return ( 
    <div
      className='Grid'
      style={styles}>
      {gridItems}
    </div>
  );
}
