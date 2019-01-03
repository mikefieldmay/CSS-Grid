import React from 'react';

import './grid.css'

export const GridControls = ({addItem, resetGrid, styleUpdate}) => {

  const updateValue = (e, property) => {
    styleUpdate(property, e.target.value)
  }

  return ( 
    <div className='Controls'>
      <button className='Add Button' onClick={addItem}>Add Grid Item</button>
      <h3>grid-auto-flow</h3>
      <select onChange={(e) => updateValue(e, 'gridAutoFlow')}>
        <option value="row">row</option>
        <option value="column">column</option>
      </select>
      <button
        className='Reset Button'
        onClick={resetGrid}>Reset Grid</button>
    </div>
  );
}
