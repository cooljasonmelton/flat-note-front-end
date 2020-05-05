import React, { Component } from 'react';
import { Menu, Segment, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: ""
        }
    }

    handleChange = e => {
        this.setState({username: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();

        // fetch('')
        // .then(r=>r.jsoin())
        // .then(data=>console.log(data))

        this.props.loginUsername(this.state)

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
            <Form className="login-form" onSubmit={ e => this.handleSubmit(e) }>
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
