import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (        
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item className="title"
            name="flat note"
          />
          <Menu.Item
            name='new note'
            position='right'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='sign out'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
