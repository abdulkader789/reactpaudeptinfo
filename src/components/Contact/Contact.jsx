import React, { useState } from "react";
import './Contact.css'
/** Components */
const Card = (props) => (
  <div className="card">
    {props.children}
  </div>
);

const Form = (props) => (
  <form className="form">{props.children}</form>
);

const TextInput = (props) => (
  <div className="text-input">
    <label
      className={(props.focus || props.value !== "") ? "label-focus" : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      className={(props.focus || props.value !== "") ? "input-focus" : ""}
      type="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </div>
);

const TextArea = (props) => (
  <div className="text-area">
    <label
      className={(props.focus || props.value !== "") ? "label-focus" : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <textarea
      className={(props.focus || props.value !== "") ? "input-focus" : ""}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </div>
);

const Button = (props) => (
  <button className="button">{props.children}</button>
);

/** Root Component */
function Contact() {
  const initialState = {
    name: {
      name: "name",
      label: "Name",
      value: "",
      focus: false,
    },
    email: {
      name: "email",
      label: "Email",
      value: "",
      focus: false,
    },
    message: {
      name: "message",
      label: "Message",
      value: "",
      focus: false,
    },
  };

  const [state, setState] = useState(initialState);

  function handleFocus(e) {
    const name = e.target.name;
    const updatedState = {
      ...state,
      [name]: {
        ...state[name],
        focus: true,
      },
    };
    setState(updatedState);
  }

  function handleBlur(e) {
    const name = e.target.name;
    const updatedState = {
      ...state,
      [name]: {
        ...state[name],
        focus: false,
      },
    };
    setState(updatedState);
  }

  function handleChange(e) {
    const name = e.target.name;
    const updatedState = {
      ...state,
      [name]: {
        ...state[name],
        value: e.target.value,
      },
    };
    setState(updatedState);
  }

  const { name, email, message } = state;

  return (
    <div className="contact-container">
      <Card>
        <h1>Send us a Message!</h1>
        <Form>
          <TextInput
            {...name}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextInput
            {...email}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextArea
            {...message}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Button>Send</Button>
        </Form>
      </Card>
    </div>
  );
}

export default Contact;
