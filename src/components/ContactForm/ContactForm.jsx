import React from 'react';
import styled from 'styled-components';

const ContactForm = ({ name, number, onChange, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Label>
      Name:
      <Input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
    </Label>

    <Label>
      Number:
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={onChange}
        required
      />
    </Label>

    <Button type="submit">Add contact</Button>
  </Form>
);
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Button = styled.button`
  width: 150px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 250px;
`;
export default ContactForm;
