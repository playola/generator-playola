import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <h1>{ '<%= name %>' } generated successfully!</h1>
  </div>,
  document.getElementById('root'),
);
