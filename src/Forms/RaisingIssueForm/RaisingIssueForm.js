import React, { useState } from "react";
import {
  TextInput,
  Button,
  Form,
  FormGroup,
  TextArea,
  InlineNotification,
} from "@carbon/react";
import "./RaisingIssueForm.scss";
import axios from "axios";

const RaisingIsssueForm = () => {
  const data = {
    name: 'Hello',
    email: 'hello@example.com',
    message: 'This is for testing purpose only ...',
  }
  const [formData, setFormData] = useState({
    name: data?.name,
    email: data?.email,
    message: data?.message,
    // select: ""
  });

 
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit your form data here
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      axios.post('/user', formData)
      .then(function (response) {
        console.log(response);
        navigator('/')
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="raising-issue-form">
      <div className="row">
        <h5>Raise Issue</h5>
        <Form onSubmit={handleSubmit} aria-label="sample form">
          <FormGroup>
            <TextInput
              id="name"
              name="name"
              labelText="Name"
              value={formData.name}
              onChange={handleChange}
              invalid={!!errors.name}
              invalidText={errors.name}
            />
            <TextInput
              id="email"
              name="email"
              labelText="Email"
              value={formData.email}
              onChange={handleChange}
              invalid={!!errors.email}
              invalidText={errors.email}
            />
            
            <TextArea
              id="message"
              name="message"
              labelText="Message"
              value={formData.message}
              onChange={handleChange}
              invalid={!!errors.message}
              invalidText={errors.message}
            />
            
            {submitSuccess && (
              <InlineNotification
                kind="success"
                title="Success"
                subtitle="Form submitted successfully"
              />
            )}
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default RaisingIsssueForm;
