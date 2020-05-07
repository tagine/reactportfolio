import React from 'react';
import '../App.css';
import steel from "../img/steel.jpeg"
import { Button, Form, Container, List, TextArea, Input, Icon, Label, Header, Textarea } from 'semantic-ui-react'
import emailjs from 'emailjs-com';
// import { Mailer } from 'nodemailer-react';

export default function Contactform() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'user_AbRRbyk5OYMNtRngB2Fco')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    // <Container>
      // <img src={steel} />
    // </Container>
    <Container>
        {/* <Form className="contact-form" onSubmit={sendEmail}>
      <Input type="hidden" name="contact_number" />
      <Label>Name</Label>
      <Input type="text" name="user_name" />
      <Label>Email</Label>
      <Input type="email" name="user_email" />
      <Label>Message</Label>
      <TextArea name="message" />
      <Input type="submit" value="Send" />
    </Form> */}

    <Container>
    <Container textAlign="left">
    <Header as="h3">Connect</Header>
    <List>
    <List.Item><List.Icon name="linkedin"/><a href="https://www.linkedin.com/in/ranafayez/">LinkedIn</a></List.Item>
    <List.Item><List.Icon name="github"/><a href="https://github.com/tagine">Github</a></List.Item>
    <List.Item><List.Icon name="twitter"/><a href="https://www.twitter.com/meetRanaFayez">Twitter</a></List.Item>
    <List.Item><List.Icon name="mail"/><a href="mailto:fayezrdev@gmailDOTcom">E-mail</a></List.Item>
    </List>
    </Container>
    </Container>
    </Container>

  )
}
