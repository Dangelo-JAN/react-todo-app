import React from 'react';
import ReactDOM from 'react-dom';

// Component files
import TodoContainer from './functionBased/components/TodoContainer';

// Style sheets
import './functionBased/App.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
