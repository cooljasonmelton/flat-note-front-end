import React from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;



