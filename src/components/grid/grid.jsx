import React from 'react';

import { GridItem } from './gridItem';
import './grid.css'

export const Grid = ({items, styles}) => {
  console.log(styles)
  console.log(items)

  let gridItems =[]

  items.map((item) => {
    console.log(item)
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
