import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Header from './components/header';
import Login from './components/login';
import SignUp from './components/signup';
import HomePage from './components/homePage'


function App() {
  return (
    <Router>
    <div style={{height:'100vh'}}>
        <Header />
        <HomePage />
        <div style={{marginTop:'7%'}}>
        <Route path="/signin" component={Login} />
        </div>
        <div style={{marginTop:'2%'}}>>
        <Route path="/signup" component={SignUp} />
        </div>
    </div>
    </Router>
  );
}

export default App;
