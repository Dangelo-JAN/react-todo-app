import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// Component files
import TodoContainer from './functionBased/components/TodoContainer';

// Style sheets
import './functionBased/App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
