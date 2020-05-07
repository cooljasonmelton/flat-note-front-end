import React from 'react';
import { Input, TextArea, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


 

class NoteForm extends React.Component{
    constructor(){
      super()
      this.state = {
          name: "",
          text: "", 
          tags: ""
      }
    }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props)

    const formData = {
      userId: this.props.id,
      name: this.state.name,
      text: this.state.text,
      tags: this.state.tags
    }

    const reqObj = {
        method: "POST",
        headers: {      
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    console.log(formData)
  
    fetch('http://localhost:3000/notes', reqObj)
    .then(r=>r.json())
    .then(user=> {
        this.props.loginUsername({
            id: user.id,
            username: user.name,
            notes: user.notes
        })
    })
  }
  
  render(){
    return (
      <div className="big-note">  
        <Form className="flat-note-div" onSubmit={this.handleSubmit}>
            <Form.Field
            name="name"
            control={Input}
            label='Title:'
            placeholder='Title'
            value={this.state.name}
            onChange={this.handleChange}
            />
            <Form.Field
            name="text"
            control={TextArea}
            label='Notes:'
            placeholder='Notes'
            value={this.state.text}
            onChange={this.handleChange}
            />
            <Form.Field
            name="tags"
            control={Input}
            label='Tags (separate by comma):'
            placeholder='Tags'
            value={this.state.tags}
            onChange={this.handleChange}
            />
          <Button className="form-button" type='submit'> Save </Button>
        </Form>
      </div>
    );
  };
} 

const mapDispatchToProps = dispatch => {
  return {
    loginUsername: formData => dispatch({ type: 'LOGIN_USERNAME', payload: formData })
  };
};

const mapStateToProps = state => {
  return {
    id: state.id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);


// first set the state so it changes and updates onchange
//
// set up the fetch
//
// set up the back end to create new notes, tags, etc
// upon success of fetch:
// have the user update thus updating all notes (repeat logon action)
//
//