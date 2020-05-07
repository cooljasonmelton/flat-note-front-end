import React from 'react';
import { Input, TextArea, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';


 
class EditForm extends React.Component{
    constructor(){
      super()
      this.state = {
        redirect: false,  
        name: "",
        text: "", 
        tags: ""
      }
    }

    componentDidMount(){
        const noteId = parseInt(this.props.noteId)
        if (this.props.state.notes !== undefined){
            const thisEditNote = this.props.state.notes.filter(note => {
                return note.id === noteId
            })
            const {name, text, tags} = thisEditNote[0]
               this.setState({
                redirect: false,
                name: name,
                text: text,
                tags: tags
            })
        }
    }
  
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  
    handleSubmit = e => {
        e.preventDefault();
        const formData = {
            userId: this.props.state.id,
            noteId: this.props.noteId,
            name: this.state.name,
            text: this.state.text,
            tags: this.state.tags
        }   

        const reqObj = {
            method: "PATCH",
            headers: {      
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
  
        fetch(`http://localhost:3000/notes/${this.props.noteId}`, reqObj)
        .then(r=>r.json())
        .then(user=> {
            this.props.loginUsername({
                id: user.id,
                username: user.name,
                notes: user.notes
            })
            this.setState({redirect: true})
        })
    }
  
  render(){
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />   
    }
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
              style={{height: "300px"}}
              value={this.state.text}
              onChange={this.handleChange}
            />
            {/* <Form.Field
              name="tags"
              control={Input}
              label='Tags (separate by comma):'
              placeholder='Tags'
              value={this.state.tags}
              onChange={this.handleChange}
            /> */}
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
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);


