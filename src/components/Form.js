import React, { useState } from 'react';
import './styles/Theme.css';
import Button from "react-bootstrap/Button";
import { Container, Form} from "react-bootstrap";
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function FormHandler() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [Message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    // Based on the input type, we set the state of either email, username, and Message
    if (inputType === 'email') {
      setEmail(inputValue);
      if (inputValue === '') {
        setErrorMessage('Email is required');
      } else {
        setErrorMessage('');
      }
    } else if (inputType === 'userName') {
      setUserName(inputValue);
      if (inputValue === '') {
        setErrorMessage('Name is required');
      } else {
        setErrorMessage('');
      }
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Thank you for your message, ${userName}. I will get back to you shortly`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setEmail('');
    setUserName('');
    setMessage('');
  };

  return (
      <Container>
          <h1 className="text-center m-3">Contact Me</h1>
      <Form className="form">
        <input className='rounded p-1'
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input className='bg-light rounded  p-1'
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={handleInputChange}
          type="text"
          placeholder="Name"
              />
        <div className = "d-flex flex-column">
        <textarea className='my-3 bg-light rounded  p-1'
          value={Message}
          name="Message"
          onChange={handleInputChange}
            type="text"
            placeholder="Message"
          rows = "10"
        />
        <Button type="button" className = "bg-dark" onClick={handleFormSubmit}>Submit</Button>
        </div>
      </Form>
      {errorMessage && (
        <div>
          <h5 className="error-text text-warning text-center">{errorMessage}</h5>
        </div>
      )}
    </Container>
  );
}

export default FormHandler;