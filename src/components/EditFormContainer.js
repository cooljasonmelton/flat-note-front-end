import React from 'react';
import Navbar from './Navbar'
import NoteContainer from './NoteContainer'
import EditForm from './EditForm'

const EditFormContainer = (props) => {
  return (
  <>
    <Navbar/>
    <div className="note-container">
      <NoteContainer />
      <EditForm noteId={props.match.params.noteId}/>
    </div>
  </>
  )
}
export default EditFormContainer;

