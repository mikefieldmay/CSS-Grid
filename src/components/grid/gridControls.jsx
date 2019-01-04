import React from 'react';

import { PropertyInput } from './propertyInput'
import './grid.css';

export const GridControls = ({addItem, toggleItemType, resetGrid, styleUpdate, styles}) => {

  const updateValue = (e, property) => {
    styleUpdate(property, e.target.value)
  }

  return ( 
    <div className='Controls'>
      <button className='Add Button' onClick={addItem}>Add Grid Item</button>
      <button className='Add Button' onClick={toggleItemType}>Toggle Item Type</button>
      <PropertyInput
        cssProperty='gridAutoFlow'
        options={["row", "column"]}
        propertyName='grid-auto-flow'
        tooltipDesc='grid-auto-flow defines how new content is added to the grid'
        type='select'
        updateValue={updateValue} />
      <PropertyInput
        cssProperty='gridTemplateColumns'
        placeholder={styles.gridTemplateColumns}
        propertyName='grid-template-columns'
        tooltipDesc='grid-template-columns defines the amount and size of the columns in the grid'
        type='input'
        updateValue={updateValue} />
      <PropertyInput
        cssProperty='gridTemplateRows'
        placeholder={styles.gridTemplateRows}
        propertyName='grid-template-rows'
        tooltipDesc='grid-template-rows defines the amount and size of the columns in the grid'
        type='input'
        updateValue={updateValue} />
      <PropertyInput
        cssProperty='gridColumnGap'
        placeholder={styles.gridColumnGap}
        propertyName='grid-column-gap'
        tooltipDesc='grid-column-gap defines the gaps between the columns'
        type='input'
        updateValue={updateValue} />
      <PropertyInput
        cssProperty='gridRowGap'
        placeholder={styles.gridRowGap}
        propertyName='grid-row-gap'
        tooltipDesc='grid-row-gap defines the gaps between the rows'
        type='input'
        updateValue={updateValue} />
      <PropertyInput
        cssProperty='justifyItems'
        options={["stretch", "start", "center", "end"]}
        propertyName='justify-items'
        tooltipDesc='justify-items positions the grid-items relative to the column'
        type='select'
        updateValue={updateValue} />
      <PropertyInput
        cssProperty='alignItems'
        options={["stretch", "start", "center", "end"]}
        propertyName='align-items'
        tooltipDesc='align-items positions the grid-items relative to the row'
        type='select'
        updateValue={updateValue} />
      <button
        className='Reset Button'
        onClick={resetGrid}>Reset Grid</button>
    </div>
  );
}
