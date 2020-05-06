import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Note from './Note'
import BigNote from './BigNote'
import Navbar from './Navbar'

class BigNoteContainer extends Component {
  
  state = { activeItem: this.props.match.params.noteId }
 
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
    return this.setState({ activeItem: name })
  }

  render() {
      console.log(this.props)
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
        <BigNote/>
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