import React from 'react';

import './grid.css'

export const GridControls = ({addItem, resetGrid, styleUpdate, styles}) => {

  const updateValue = (e, property) => {
    styleUpdate(property, e.target.value)
  }

  return ( 
    <div className='Controls'>
      <button className='Add Button' onClick={addItem}>Add Grid Item</button>
      <h3>grid-auto-flow</h3>
      <select className='Input' onChange={(e) => updateValue(e, 'gridAutoFlow')}>
        <option value="row">row</option>
        <option value="column">column</option>
      </select>
      <h3>grid-column-gap</h3>
      <input
        placeholder={`${styles.gridColumnGap}`}
        onChange={(e) => updateValue(e, 'gridColumnGap')}
        className='Number Input' type="text"/>
      <h3>grid-row-gap</h3>
      <input
        placeholder={`${styles.gridRowGap}`}
        onChange={(e) => updateValue(e, 'gridRowGap')}
        className='Number Input' type="text"/>
      <h3>grid-template-columns</h3>
      <input
        placeholder={`${styles.gridTemplateColumns}`}
        onChange={(e) => updateValue(e, 'gridTemplateColumns')}
        className='Number Input' type="text"/>
      <h3>grid-template-rows</h3>
      <input
        placeholder={`${styles.gridTemplateRows}`}
        onChange={(e) => updateValue(e, 'gridTemplateRows')}
        className='Number Input' type="text"/>
      <h3>align-items</h3>
      <select className='Input' onChange={(e) => updateValue(e, 'alignItems')}>
        <option value="stretch">stretch</option>
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
      </select>
      <h3>justify-items</h3>
      <select className='Input' onChange={(e) => updateValue(e, 'justifyItems')}>
        <option value="stretch">stretch</option>
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
      </select>
      <button
        className='Reset Button'
        onClick={resetGrid}>Reset Grid</button>
    </div>
  );
}
