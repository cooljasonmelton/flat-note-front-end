import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect, useParams } from "react-router-dom";
import Note from './Note'
import BigNote from './BigNote'
import Navbar from './Navbar'

class BigNoteContainer extends Component {
  
  state = { 
    activeItem: 2, 
    redirect: false
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
        this.setState({redirect: true});
    }
    this.setState({ activeItem: name })
  }

  setActiveItem = id => {
    this.setState({ activeItem: id })
  }

  render() {
    if (this.state.redirect) {
        return <Redirect push to="/dashboard" />;
    }
    return (
    <>
      <Navbar/>
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
        <BigNote setActiveItem={this.setActiveItem}/>
      </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(BigNoteContainer);

