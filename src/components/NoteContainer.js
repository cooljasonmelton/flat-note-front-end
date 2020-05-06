import React, { Component, Fragment } from 'react'
import { Menu } from 'semantic-ui-react'
import Note from './Note'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import NoteDisplay from './NoteDisplay';


class NoteContainer extends Component {
  constructor(){
    super()
    this.state = {
      activeItem: ""
    }

  }
  
  renderNotes = () => {
    if (!!this.props.state.notes){
      return this.props.state.notes.map(note =>{
        return <Note note={note} 
        handleItemClick={this.handleItemClick} 
        activeItem={this.state.activeItem}
        />
      })
    } else {
      return <div>LOADING...</div>
    }
  }

 
  handleItemClick = (e, { name }) => {
    if (name === this.state.activeItem){
      return this.setState({activeItem: ""})
    }
    return this.setState({ activeItem: name })
  }

  displayNote = () => {   
    if (this.state.activeItem !== ""){
      return this.props.state.notes.map(note => {
        if (note.id === this.state.activeItem){
          return <NoteDisplay note={note} />
        }
      })
    }
  }

  render() {
    return (
      <div className="note-container">
        <Menu vertical style={{overflow: 'auto', height: '500px', maxHeight: '500px' }}>            
          <Menu.Item style={{backgroundColor: "#000000", color: "white"}}>
            NOTES:
          </Menu.Item>
  
          {/* <Menu.Item>
            <Input placeholder='Search...' />
          </Menu.Item> */}
  
          {this.renderNotes()}
  
        </Menu>
        {this.displayNote()}
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loginUsername: formData => dispatch({ type: 'LOGIN_USERNAME', payload: formData })
  };
};

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);