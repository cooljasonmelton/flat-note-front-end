import React from 'react';

const NoteDisplay = (props) => {
    const {id, name, text} = props.note
    return (
    <div id={id} className="note-display">
      <div className="flat-note-div"> 
        <div className="note-display-name">
            <h1>{name}</h1>
        </div>
        <div className="note-display-text">
            <p>{text}</p>
        </div>
      </div>
    </div>
    );
};

export default NoteDisplay