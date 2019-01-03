import React from 'react';

import './grid.css'

export const PropertyInput = ({
  cssProperty,
  options,
  placeholder,
  propertyName,
  tooltipDesc,
  type,
  updateValue
}) => {
  return ( 
    <>
      <h3 className='PropertyName' >
          {propertyName}
          <span className='Tooltip'><h5>{tooltipDesc}</h5></span>
        </h3>
        {type === 'select' ?
          <select className='Input' onChange={(e) => updateValue(e, cssProperty)}>
            { options.map(option => <option value={`${option}`}>{option}</option>)}
          </select> : 
          <input
            placeholder={placeholder}
            onChange={(e) => updateValue(e, cssProperty)}
            className='Number Input' type="text" />
        }
      </>
  );
}
