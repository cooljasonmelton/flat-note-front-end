import React from 'react';
import { Button } from 'semantic-ui-react'


const BigNote = (props) => {

    // const {id, name, text} = props.note
    return (
    <div id={`bignote${1}`} className="big-note">

      <div className="flat-note-div"> 
        <div className="edit-note">
        <Button size='mini'>EDIT</Button>
        <Button size='mini'>DELETE</Button>
      </div>  
        <div className="note-display-name">
            <h1>{"name"}</h1>
        </div>
        <div className="note-display-text">
            <p>{"text"}</p>
        </div>
        <div className="note-tags">
            <Button size='mini'>#tags</Button>
            <Button size='mini'>#tags</Button>
            <Button size='mini'>#tags</Button>
        </div>
      </div>
    </div>
    );
};

export default BigNote