import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Note from './Note'


export default class MenuExampleSubMenu extends Component {
  state = {}


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>

        {/* <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item> */}

        <Menu.Item 
          active={activeItem === 'one'}
          onClick={this.handleItemClick}
          name="one"
        >
          NOTE 1
          <Menu.Menu>
            <Menu.Item>
              Some of the text from note one ...
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item 
          active={activeItem === 'two'}
          onClick={this.handleItemClick}
          name="two"
        >
          NOTE 2
          <Menu.Menu>
            <Menu.Item>
              Some of the text from note two ...
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item 
          active={activeItem === 'three'}
          onClick={this.handleItemClick}
          name="three"
        >
          NOTE 3
          <Menu.Menu>
            <Menu.Item>
              Some of the text from note three ...
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}