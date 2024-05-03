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

const RaisingIssueForm = () => {
  const data = {
    created_by: "John Doe",
    // email: 'hello@example.com',
    issue_description: "",
  };
  const [formData, setFormData] = useState({
    created_by: data?.created_by,
    email: data?.email,
    issue_description: data?.issue_description,
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
      axios
        .post("http://localhost:8080/issues/", formData)
        .then(function (response) {
          console.log(response);
          setSubmitSuccess(true);
          setFormData({ ...formData, issue_description: "" });
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 2000);
          navigator("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.created_by.trim()) {
      newErrors.created_by = "Created by name is required";
      valid = false;
    }

    // if (!formData.email.trim()) {
    //   newErrors.email = "Email is required";
    //   valid = false;
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   newErrors.email = "Email is invalid";
    //   valid = false;
    // }

    if (!formData.issue_description.trim()) {
      newErrors.issue_description = "Issue description is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className={`raising-issue-form`}>
      <div className="row">
        <h5>Raise Issue</h5>
        <Form onSubmit={handleSubmit} aria-label="sample form">
          <FormGroup>
            <TextInput
              id="created_by"
              name="created_by"
              labelText="Created By"
              value={formData.created_by}
              onChange={handleChange}
              invalid={!!errors.created_by}
              invalidText={errors.created_by}
              disabled
            />
            {/* <TextInput
              id="email"
              name="email"
              labelText="Email"
              value={formData.email}
              onChange={handleChange}
              invalid={!!errors.email}
              invalidText={errors.email}
            /> */}

            <TextArea
              id="issue_description"
              name="issue_description"
              labelText="Issue Description"
              value={formData.issue_description}
              onChange={handleChange}
              invalid={!!errors.issue_description}
              invalidText={errors.issue_description}
              placeholder="Plese describe your issues here..."
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

export default RaisingIssueForm;
