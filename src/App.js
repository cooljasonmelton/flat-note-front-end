import React from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NoteFormContainer from './components/NoteFormContainer';
import BigNoteContainer from './components/BigNoteContainer'

function App() {
  return (
    <Router>
      <div className="App">
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={Login} />
        
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/note/new" component={NoteFormContainer} />
          <Route path="/note/:noteId" component={BigNoteContainer} />
        </Switch>
      </div>
    </Router>
  );
}
 
export default App;


