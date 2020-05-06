import React from 'react';
import { Menu } from 'semantic-ui-react'

 

const Note = (props) => {
  const {id, name, text} = props.note
    return (
      <Menu.Item 
      active={props.activeItem === id}
      onClick={props.handleItemClick}
      name={id}
    >
      {name}
      <Menu.Menu>
        <Menu.Item>
          {text.length < 30 ?
          text :
          `${text.substring(0, 30)}...`
          }
        </Menu.Item>
      </Menu.Menu>
    </Menu.Item>
    );
};

export default Note
 