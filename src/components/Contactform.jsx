import React from 'react';
import '../App.css';
import { Button, Form, Segment } from 'semantic-ui-react'
// import { Mailer } from 'nodemailer-react';

export default function Contactform() {
  return (
    <Form method="POST" action="/contact">
      <Form.Field>
        <label>Name</label>
        <input placeholder="Name" />
      </Form.Field>
      <Form.Field
      id="form-input-control-error-email"
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below'
      }}>
        <label>E-mail</label>
        <input placeholder="E-mail" />
      </Form.Field>
      <Form.Field>
        <label>Message</label>
        <input placeholder="How can I help?" />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>

    // <Segment>
    //   <a href="https://www.linkedin.com/in/ranafayez/">LinkedIn</a>
    // Github https://github.com/tagine
    // </Segment>
  )
}
