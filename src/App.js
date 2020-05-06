import React from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NoteForm from './components/NoteForm'
import NoteDisplay from './components/NoteDisplay'

function App() {
  return (
    <Router>
      <div className="App">
          {/* <Redirect exact from="/" to="/login" /> */}

          <Route exact path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/note/new" component={NoteForm} />
          <Route path="/note/1" component={NoteDisplay} />

      </div>
    </Router>
  );
}

export default App;


