import React, { Component } from 'react';

import { PropertyInput } from './propertyInput';
import './grid.css';

const defaultStyles = {
  gridColumnStart: 'auto',
  gridColumnEnd: 'auto',
  gridRowStart: 'auto',
  gridRowEnd: 'auto',
  alignSelf: 'auto',
  justifySelf: 'auto',
}

// grid-column-start: 3; // start at column 3
//     grid-column-end: 5; // end at column 5
//     grid-row-start: 1; // start at row 1
//     grid-row-end: 3; // end at row 3

export class GridItem extends Component {

  state = {
    itemType: 'dumb',
    styles: defaultStyles
  }

  updateValue = (e, property) => {
    const updatedStyles = {
      ...this.state.styles,
      [property]: e.target.value
    }
    this.setState ({
      ...this.state,
      styles: updatedStyles
    })
  }

  render() {
    return (
    <>
    { this.props.itemType === 'dumb' ?
    <div className='GridItem' style={{backgroundColor: `var(${this.props.backgroundColor})`}}>
      <h1>Hi I'm an item</h1>
    </div>
    :
    <div className='GridItem Smart' style={{...this.state.styles, backgroundColor: `var(${this.props.backgroundColor})`}}>
      <PropertyInput
        cssProperty='gridColumnStart'
        placeholder={this.state.styles.gridColumnStart}
        propertyName='grid-column-start'
        tooltipDesc='grid-column-start tells the element to begin at the specified column number'
        type='input'
        updateValue={this.updateValue} />
      <PropertyInput
        cssProperty='gridColumnEnd'
        placeholder={this.state.styles.gridColumnEnd}
        propertyName='grid-column-end'
        tooltipDesc='grid-column-end tells the element to end at the specified column number'
        type='input'
        updateValue={this.updateValue} />
      <PropertyInput
        cssProperty='gridRowStart'
        placeholder={this.state.styles.gridRowStart}
        propertyName='grid-row-start'
        tooltipDesc='grid-row-start tells the element to begin at the specified row number'
        type='input'
        updateValue={this.updateValue} />
      <PropertyInput
        cssProperty='gridRowEnd'
        placeholder={this.state.styles.gridRowEnd}
        propertyName='grid-row-end'
        tooltipDesc='grid-row-end tells the element to end at the specified column number'
        type='input'
        updateValue={this.updateValue} />
      <PropertyInput
          cssProperty='justifySelf'
          placeholder={this.state.styles.justifySelf}
          propertyName='justify-self'
          tooltipDesc='justify-self positions the element relative to the column'
          type='input'
          updateValue={this.updateValue} />
      <PropertyInput
        cssProperty='alignSelf'
        placeholder={this.state.styles.alignSelf}
        propertyName='align-self'
        tooltipDesc='align-self positions the element relative to the row'
        type='input'
        updateValue={this.updateValue} />
    </div> }
  </>)
  }
}

// export const GridItemOld = ({backgroundColor, itemType}) => {
//   return (
//     <>
//       { itemType === 'dumb' ?
//       <div className='GridItem' style={{backgroundColor: `var(${backgroundColor})`}}>
//         <h1>Hi I'm an item</h1>
//       </div>
//       :
//       <div className='GridItem' style={{backgroundColor: `var(${backgroundColor})`}}>
//         <h1>Hi I'm a smart item</h1>
//         <PropertyInput
//         cssProperty='gridTemplateColumns'
//         placeholder={this.state.styles.gridTemplateColumns}
//         propertyName='grid-template-columns'
//         tooltipDesc='grid-template-columns'
//         type='input'
//         updateValue={updateValue} />
//         <PropertyInput
//         cssProperty='gridTemplateColumns'
//         placeholder={styles.gridTemplateColumns}
//         propertyName='grid-template-columns'
//         tooltipDesc='grid-template-columns'
//         type='input'
//         updateValue={updateValue} />
//         <PropertyInput
//         cssProperty='gridTemplateColumns'
//         placeholder={styles.gridTemplateColumns}
//         propertyName='grid-template-columns'
//         tooltipDesc='grid-template-columns defines the amount and size of the columns in the grid'
//         type='input'
//         updateValue={updateValue} />
//         <PropertyInput
//         cssProperty='gridTemplateColumns'
//         placeholder={styles.gridTemplateColumns}
//         propertyName='grid-template-columns'
//         tooltipDesc='grid-template-columns defines the amount and size of the columns in the grid'
//         type='input'
//         updateValue={updateValue} />
//         <PropertyInput
//         cssProperty='gridTemplateColumns'
//         placeholder={styles.gridTemplateColumns}
//         propertyName='grid-template-columns'
//         tooltipDesc='grid-template-columns defines the amount and size of the columns in the grid'
//         type='input'
//         updateValue={updateValue} />
//       </div> }
//     </>
//   );
// }
