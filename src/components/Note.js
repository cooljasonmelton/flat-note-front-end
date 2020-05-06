import React from 'react';
import { Menu } from 'semantic-ui-react'

 

const Note = (props) => {
  console.log(props)
    return (
      <Menu.Item 
      active={props.activeItem === props.note.id}
      onClick={props.handleItemClick}
      name={props.note.id}
    >
      {props.note.name}
      <Menu.Menu>
        <Menu.Item>
          {props.note.text.substring(0, 40)}...
        </Menu.Item>
      </Menu.Menu>
    </Menu.Item>
    );
};

export default Note
 