import React from 'react';
import { Menu } from 'semantic-ui-react'

 

const Note = (props) => {
    return (
      <Menu.Item 
      // active={activeItem === 'one'}
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
    );
};

export default Note
 