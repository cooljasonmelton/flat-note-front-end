import React from 'react';
import Dashboard from './Dashboard'
import { Button } from 'semantic-ui-react';
import { useParams  } from 'react-router-dom';
import { connect } from 'react-redux';

const BigNote = (props) => {
    const bigNoteId = useParams().noteId    
    if (props.state === undefined) {
        return <div>note not found</div>
    }

    const noteData = props.state.filter(note => note.id === parseInt(bigNoteId))[0]

    const {id, name, text} = noteData
    return (
    <>
    <div id={`bignote-${id}`} className="big-note">

      <div className="flat-note-div"> 
        <div className="edit-note">
        <Button size='mini'>EDIT</Button>
        <Button size='mini'>DELETE</Button>
      </div>  
        <div className="note-display-name">
            <h1>{name}</h1>
        </div>
        <div className="note-display-text">
            <p>{text}</p>
        </div>
        <div className="note-tags">
            <Button size='mini'>#tags</Button>
            <Button size='mini'>#tags</Button>
            <Button size='mini'>#tags</Button>
        </div>
      </div>
    </div>
    </>
    );
};

const mapStateToProps = state => {
    return {
      state: state.notes
    }
  }
  
export default connect(mapStateToProps)(BigNote);