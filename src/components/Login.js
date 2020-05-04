import React from 'react';
import { Menu, Segment, Button, Form } from 'semantic-ui-react'

 

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
            <Form.Field>
                <label><h1>Login:</h1></label>
                <input placeholder='Username' />
            </Form.Field>
          <Button type='submit'> Submit</Button>
        </Form>
      </div>
    );
};

export default Login
