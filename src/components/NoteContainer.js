import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Note from './Note'
import { connect } from 'react-redux';



class NoteContainer extends Component {
  state = {}
  
  renderNotes = () => {
    if (!!this.props.state.notes){
      return this.props.state.notes.map(note =>{
        return <Note note={note} 
        handleItemClick={this.handleItemClick} 
        activeItem={this.state.activeItem}
        />
      })
    } else {
      return <div></div>
    }
  }

 
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>            
        <Menu.Item>
          NOTES:
        </Menu.Item>
        
        {/* <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item> */}

        {this.renderNotes()}

      </Menu>
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