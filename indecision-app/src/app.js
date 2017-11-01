import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp options={['one', 'two']} />, document.getElementById('app'))
