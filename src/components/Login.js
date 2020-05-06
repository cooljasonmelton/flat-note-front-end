import React, { Component } from 'react';
import { Menu, Segment, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: "Jason"
        }
    }

    handleChange = e => {
        this.setState({username: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();

        const reqObj = {
            method: "POST",
            headers: {      
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: this.state.username})
        }

        fetch('http://localhost:3000/users', reqObj)
        .then(r=>r.json())
        .then(user=> {
            this.props.loginUsername({
                id: user.id,
                username: user.name,
                notes: user.notes
            })
        })


    }

    render() {
      if (this.props.username !== "") {
          return <Redirect to="/dashboard" />   
      }
      return <div>
            <Segment inverted>
                <Menu inverted secondary>
                <Menu.Item className="title"
                    name="flat note"
                />
                </Menu>
            </Segment>
            <Form className="flat-note-div login" onSubmit={ e => this.handleSubmit(e) }>
                <Form.Group className="login-form-stuff">
                    <Form.Input
                    placeholder='username'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                    <Form.Button className="form-button" content='login' />
                </Form.Group>
            </Form>
        </div>
    };
};

const mapDispatchToProps = dispatch => {
    return {
      loginUsername: formData => dispatch({ type: 'LOGIN_USERNAME', payload: formData })
    };
};

const mapStateToProps = state => {
    return {
      username: state.username
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
