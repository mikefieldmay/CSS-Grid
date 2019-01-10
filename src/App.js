import React, { Component } from 'react';
import { MainView } from './views/main';
import './App.css';
import { GridAreaExample } from './components/grid/gridAreaExample';

class App extends Component {

  state = {
    view: 'A'
  }

  getView() {
    return this.state.view === 'A' ? <MainView updateView={(viewKey) => this.updateView(viewKey)} /> : <GridAreaExample />
  }

  updateView(viewKey) {
    this.setState({
      ...this.state,
      view: viewKey
    })
  }

  render() {
    return (
      this.getView()
    );
  }
}

export default App;
