import React, { Component } from 'react'
import Navbar from './Navbar'
import NoteContainer from './NoteContainer'

import { } from 'semantic-ui-react'

export default class Dashboard extends Component {


  render() {
    return <div>
        <Navbar/>
        <NoteContainer/>
    </div> 
    

  }
}
