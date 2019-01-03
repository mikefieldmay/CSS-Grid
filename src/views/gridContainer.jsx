import React, { Component } from 'react';

import { GridControls } from '../components/grid/gridControls'
import { Grid } from '../components/grid/grid'

export class GridContainer extends Component {
  gridStyles = {
    gridAutoFlow: 'rows'
  }

  state = { 
    items: [],
    gridStyles: this.gridStyles
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
          styleUpdate={this.onChangeStyles}/>
        <Grid
          items={this.state.items}
          styles={this.state.gridStyles} />
      </>
    );
  }
}

