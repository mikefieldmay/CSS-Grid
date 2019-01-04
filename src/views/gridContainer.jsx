import React, { Component } from 'react';

import { GridControls } from '../components/grid/gridControls'
import { Grid } from '../components/grid/grid'

const colors = [
  "--grid-item-color-one",
  "--grid-item-color-two",
  "--grid-item-color-three",
  "--burnt-orange",
  "--pale-yellow"
]

const defaultStyles = {
  gridAutoFlow: 'rows',
  gridColumnGap: '0',
  gridRowGap: '0',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto',
  alignItems: 'stretch',
  justifyItems: 'stretch'
}

export class GridContainer extends Component {

  state = {
    items: [],
    itemType: 'dumb',
    gridStyles: defaultStyles
  }

  onAddItem = () => {
    const itemNum = this.state.items.length
    const backgroundColor = colors[Math.floor(Math.random()*colors.length)];

    const item = { itemNum, backgroundColor }
    this.setState({
      ...this.state,
      items: [...this.state.items, item]
    })
  }

  onToggleItemType = () => {
    const itemType = this.state.itemType === 'clever' ? 'dumb' : 'clever';
    this.setState({
      ...this.state,
      itemType
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
          toggleItemType={this.onToggleItemType}
          resetGrid={this.onResetGrid}
          styleUpdate={this.onChangeStyles}
          styles={defaultStyles}/>
        <Grid
          itemType={this.state.itemType}
          items={this.state.items}
          styles={this.state.gridStyles} />
      </>
    );
  }
}

