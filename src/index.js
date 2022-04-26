import React from 'react';
import ReactDOM from 'react-dom';

// Component files
import TodoContainer from './components/TodoContainer';

// Style sheets
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
