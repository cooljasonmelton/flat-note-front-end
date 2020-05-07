import React from 'react';
import { Button } from 'semantic-ui-react';
import { useParams, Link  } from 'react-router-dom';
import { connect } from 'react-redux';

const BigNote = (props) => {

    const bigNoteId = useParams().noteId 

    if (props.state === undefined) {
        return <div>note not found</div>
    }

    props.setActiveItem(parseInt(bigNoteId))
    const noteData = props.state.filter(note => note.id === parseInt(bigNoteId))[0]
    const {id, name, text} = noteData


    const handleDelete = () => {
      
      const targetUrl = `http://localhost:3000/notes/${bigNoteId}`

      fetch(targetUrl, {method: "DELETE"})
      .then(r=>r.json())
      .then(user=>{
        props.loginUsername({
          id: user.id,
          username: user.name,
          notes: user.notes
        })
      })
    }

   
    return (
    <>
    <div id={`bignote-${id}`} className="big-note">

      <div className="flat-note-div"> 

        <div className="note-display-name">
            <h2>{name}</h2>
        </div>
        <div className="note-display-text">
            <p>{text}</p>
        </div>
        {/* <div className="note-tags">
          <p>{tags}</p>
        </div> */}
        <div className="edit-note">
          <Link to={`/note/${id}`}><Button size='mini'>EDIT</Button></Link>
          <Link to={`/dashboard`}><Button onClick={handleDelete} size='mini'>DELETE</Button></Link>
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

const mapDispatchToProps = dispatch => {
  return {
    loginUsername: formData => dispatch({ type: 'LOGIN_USERNAME', payload: formData })
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(BigNote);