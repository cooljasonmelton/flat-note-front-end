import React from 'react';
import { Menu, Segment, Button, Form, Input } from 'semantic-ui-react'

 

const Login = () => {
    return (
      <div>
        <Segment inverted>
            <Menu inverted secondary>
            <Menu.Item className="title"
                name="flat note"
            />
            </Menu>
        </Segment>
        <Form className="login-form">
            <Form.Group className="login-form-stuff">
                <Form.Input
                placeholder='username'
                name='username'
                value={null}
                onChange={null}
                />
                <Form.Button className="form-button" content='login' />

            </Form.Group>
        </Form>
      </div>
    );
};

export default Login
