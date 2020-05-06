import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Note = (props) => {
  const {id, name, text} = props.note
    return (
      // <Link to={`/note/${id}`}>
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
              `${text.substring(0, 30)}...`}
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      // </Link>
    );
};

export default Note
 