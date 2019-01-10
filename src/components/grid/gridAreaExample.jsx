import React, { Component } from 'react';

import { PropertyInput } from './propertyInput'
import '../header.css';
import './grid.css';

export class GridAreaExample extends Component {
  state = { 
    gridAreaExampleStyles: {
      gridTemplateRows: 'auto',
      gridTemplateColumns: 'auto',
    },
    controlStyles: {
      gridArea: 'auto'
    },
    gridStyles: {
      gridArea: 'auto'
    },
    footerStyles: {
      gridArea: 'auto'
    },
    headerStyles: {
      gridArea: 'auto'
    }
  }

  updateValue(e, property, thing) {
    console.log(e, property, thing)
    this.setState({
      ...this.state,
      [thing]: {
        ...this.state[thing],
        [property]: e.target.value
      }
    })

  }
  render() { 
    console.log(this.state)
    return ( 
      <div className='GridAreaExample' style={this.state.gridAreaExampleStyles}>
        <div className='Footer' style={this.state.footerStyles}>
          <h1>I should be the Footer</h1>
        </div>
        <div>
          <h1>I should be the grid area</h1>
    
        </div>
        <div className='Controls' style={this.state.controlStyles}>
          <h1>This should be a control panel</h1>
          <PropertyInput
            cssProperty='gridArea'
            placeholder={'auto'}
            propertyName='grid-area'
            type='input'
            updateValue={(e, property, thing='controlStyles') => this.updateValue(e, property, thing)} />
        </div>
        <div className='Header' style={this.state.headerStyles}>
          <div>
          <h1>I should be the header</h1>
            <PropertyInput
              cssProperty='gridArea'
              placeholder={'auto'}
              propertyName='grid-area'
              type='input'
              updateValue={(e, property, thing='headerStyles') => this.updateValue(e, property, thing)} />
            <PropertyInput
              cssProperty='gridTemplateColumns'
              placeholder={'auto'}
              propertyName='Parent grid-template-columns'
              type='input'
              updateValue={(e, property, thing='gridAreaExampleStyles') => this.updateValue(e, property, thing)} />
            <PropertyInput
              cssProperty='gridTemplateRows'
              placeholder={'auto'}
              propertyName='Parent grid-template-rows'
              type='input'
              updateValue={(e, property, thing='gridAreaExampleStyles') => this.updateValue(e, property, thing)} />
          </div>
        </div>
      </div>
    );
  }
}
