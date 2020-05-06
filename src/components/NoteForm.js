import React from 'react';
import { Input, TextArea, Button, Form } from 'semantic-ui-react'

 

const NoteForm = () => {
    return (
      <div>  
        <Form className="flat-note-div">
            <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Title:'
            placeholder='Title' 
            />
            <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Notes:'
            placeholder='Notes'
            />
          <Button className="form-button" type='submit'> Save </Button>
        </Form>
      </div>
    );
};

export default NoteForm