import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { logout } from '../actions/logout'
import { NavLink } from 'react-router-dom';



class Navbar extends Component {
  state = { activeItem: '' }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogOut = () =>{
    return this.props.logout();
  }

  render() {
    const { activeItem } = this.state

    return (        
      <Segment inverted>
        <Menu inverted secondary>

          <Menu.Item className="title"
            name="flat note"
          />


          <Menu.Item style={{position: "absolute", left: "50%",  marginLeft: "-75px"}} 
            className="title"
            name={`Hello ${this.props.username}`}
          />

          <Menu.Item header as={NavLink} to="/note/new" 
            name='new note'
            position='right'
            active={activeItem === 'new note'}
            onClick={this.handleItemClick}
          />

          <Menu.Item header as={NavLink} exact to="/login" 
            name='sign out'
            active={activeItem === 'sign out'}
            onClick={this.handleLogOut}   
          />


          <Menu.Item header as={NavLink} exact to="/note/edit/2" 
            name='edit'
            active={activeItem === 'edit'}
            onClick={this.handleItemClick}   
          />

        </Menu>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);



