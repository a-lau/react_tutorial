import React from 'react';
import ReactDOM from 'react-dom';
import KeyLists from './KeyLists';
import './index.css';

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <KeyLists numbers={numbers} />,
  document.getElementById('root')
);
