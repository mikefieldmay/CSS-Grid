import React, { Component } from 'react';

import { GridControls } from '../components/grid/gridControls'
import { Grid } from '../components/grid/grid'

export class GridContainer extends Component {

  state = { 
    items: [],
    gridStyles: {
      gridAutoFlow: 'rows',
      gridColumnGap: '0',
      gridRowGap: '0',
      gridTemplateColumns: 'auto',
      gridTemplateRows: 'auto',
      alignItems: 'stretch',
      justifyItems: 'stretch'
    }
  }

  onAddItem = () => {
    const itemNum = this.state.items.length
    const item = { itemNum }
    this.setState({
      ...this.state,
      items: [...this.state.items, item]
    })
  }

  onResetGrid = () => {
    this.setState({
      ...this.state,
      items: []
    })
  }

  onChangeStyles = (property, value) => {
    const updatedStyles = {
      ...this.state.gridStyles,
      [property]: value
    }
    this.setState ({
      ...this.state,
      gridStyles: updatedStyles

    })
  }


  render() { 
    return ( 
      <>
        <GridControls
          addItem={this.onAddItem}
          resetGrid={this.onResetGrid}
          styleUpdate={this.onChangeStyles}
          styles={this.gridStyles}/>
        <Grid
          items={this.state.items}
          styles={this.state.gridStyles} />
      </>
    );
  }
}

