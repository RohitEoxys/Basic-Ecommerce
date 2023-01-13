import React from "react";
import Input from "../../../UI/Input";
// import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
} from "../../../util/validators";
import { useForm } from "../../../Hooks/form-hook";
import "./ContactForm.scss";

const initialFormValues = {
  name: {
    value: "",
    isValid: false,
  },
  email: {
    value: "",
    isValid: false,
  },
  phone: {
    value: "",
    isValid: false,
  },
};

const Form = () => {
  const [formState, inputHandler] = useForm(initialFormValues, false);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log("formData", formState);
  };

  return (
    <form className="form_container" onSubmit={placeSubmitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid name."
        onInput={inputHandler}
      />
      <Input
        id="email"
        element="input"
        label="E-Mail"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid mail address "
        onInput={inputHandler}
      />
      <Input
        id="phone"
        element="input"
        type="number"
        label="Phone"
        validators={[
          VALIDATOR_REQUIRE(),
          VALIDATOR_MAXLENGTH(10),
          VALIDATOR_MINLENGTH(10),
        ]}
        errorText="Please enter a valid phone number."
        onInput={inputHandler}
      />
      <button className="button" type="submit" disabled={!formState.isValid}>
        Submit
      </button>
    </form>
  );
};

export default Form;
