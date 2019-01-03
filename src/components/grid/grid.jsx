import React from 'react';

import { GridItem } from './gridItem';
import './grid.css'

export const Grid = ({items, styles}) => {

  let gridItems =[]

  items.map((item) => {
    gridItems.push(
      <GridItem
        key={`${item.itemNum}`} />
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
