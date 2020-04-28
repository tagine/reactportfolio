import React from 'react';
import '../App.css';
import { Button, Form } from 'semantic-ui-react'

export default function Contactform() {
  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <input placeholder="Name" />
      </Form.Field>
      <Form.Field>
        <label>E-mail</label>
        <input placeholder="E-mail" />
      </Form.Field>
      <Form.Field>
        <label>Message</label>
        <input placeholder="How can I help?" />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
