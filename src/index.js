import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import './index.css';


//Esse caminho é do index.js
import App from './pages/home/App';
import Desejo from './pages/Desejo/Desejo';


import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound/NotFound';



const routing = (
  <Router>
    <div>
      <Switch>
        <Route    exact path= "/"component = {App}/>
        <Route    path = "/Desejo" component ={Desejo} />
        <Route    path = "/NotFound" component = {NotFound}/>
        <Redirect to = "/NotFound" component = {NotFound}/>
      </Switch>
    </div>
  </Router>
)




ReactDOM.render(routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
