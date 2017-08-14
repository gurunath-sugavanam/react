import '../scss/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

const colorList = ['blue','pink','green','yellow','red','teal','black'];


ReactDOM.render(
  <div>
    <ColorTool headerText="Color Tool" colors={colorList} />
  </div>,
  document.querySelector('main')
);

