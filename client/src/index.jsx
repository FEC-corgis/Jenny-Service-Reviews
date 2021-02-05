import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Route, BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Route exact path={"/rooms/:id"} component={App}/>
</Router>,
document.getElementById('Reviews'))