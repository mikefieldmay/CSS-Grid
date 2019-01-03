import React from 'react';

import { GridContainer } from './gridContainer';
import { Header } from '../components/header';

import './main.css';

export const MainView = () => {
  return ( 
    <div className='Main'>
      <Header />
      <GridContainer />
    </div>
  );
}
