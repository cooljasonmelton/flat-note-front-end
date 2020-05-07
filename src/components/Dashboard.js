import React, { Component } from 'react';
import Navbar from './Navbar';
import NoteContainer from './NoteContainer';
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return <>
      <Navbar/>
      <NoteContainer/>



    </> 
  }
}

