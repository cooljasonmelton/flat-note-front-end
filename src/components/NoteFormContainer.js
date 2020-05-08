import React from 'react';
import Navbar from './Navbar'
import NoteForm from './NoteForm'
import NoteContainer from './NoteContainer'


const NoteFormContainer = () => {
  return (
    <>
      <Navbar/>
      <div className="note-container">
        <NoteContainer />
        <NoteForm/>
      </div>
    </>
  )
}

export default NoteFormContainer;

