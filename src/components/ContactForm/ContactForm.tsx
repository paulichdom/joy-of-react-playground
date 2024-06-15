import React from 'react';
import styled from 'styled-components';

const ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

function ContactForm() {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const id = React.useId();
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        email,
        message,
      }),
    });

    const json = await response.json();
    console.log(json);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label htmlFor={emailId}>Email</Label>
        <Input
          required={true}
          id={emailId}
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </Row>
      <Row>
        <Label htmlFor={messageId}>Message</Label>
        <Textarea
          required={true}
          id={messageId}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </Row>
      <Row>
        <ButtonSpacer />
        <Button>Submit</Button>
      </Row>
    </Form>
  );
}

export default ContactForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
  min-height: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
`;

const Label = styled.label`
  width: 6.5rem;
  text-align: right;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  min-width: 200px;
  outline-offset: 4px;
`;

const Textarea = styled.textarea`
  flex: 1;
  padding: 8px;
  min-width: 200px;
  outline-offset: 4px;
`;

const ButtonSpacer = styled.span`
  width: 6.5rem;
`;

const Button = styled.button`
  display: block;
  padding: 8px 32px;
  margin: 0px auto;
`;
