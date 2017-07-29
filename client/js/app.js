import 'bootstrap-loader';
import '../scss/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from './components/hello-world';

ReactDOM.render(
  <HelloWorld message="Bonjour le monde!" />,
  document.querySelector('main'),
);