import React from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NoteForm from './components/NoteForm'



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/note/new" component={NoteForm} />
      </div>
    </Router>
  );
}

export default App;



