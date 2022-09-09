import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { variables } from "../../../../../settings/mainstyles";

import { useState } from "react";
import { CheckBox, Form, Input, Invalid, Label, NewsletterText, SubmitButton, TextArea } from "./styles";

const ContactForm = () => {
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      title: "",
      message: "",
      newsletter: false,
    },

    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().required().email(),
      company: Yup.string().required(),
      title: Yup.string().required(),
    }),

    onSubmit: (values) => {
      localStorage.setItem("registration", JSON.stringify(values));
      formik.resetForm();
    },
  });

  const popupError = (element) => {
    return element && error ? <Invalid>This field can’t be empty</Invalid> : null;
  };

  return (
    <>
      <Form onSubmit={formik.handleSubmit} noValidate>
        <Input
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          validate={formik.errors.name}
        ></Input>
        {popupError(formik.errors.name)}

        <Input
          placeholder="Email Adress"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          validate={formik.errors.email}
        ></Input>
        {popupError(formik.errors.email)}

        <Input
          placeholder="Company Name"
          value={formik.values.company}
          onChange={formik.handleChange}
          name="company"
          validate={formik.errors.company}
        ></Input>
        {popupError(formik.errors.company)}

        <Input
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          name="title"
          validate={formik.errors.title}
        ></Input>
        {popupError(formik.errors.title)}

        <TextArea
          placeholder="Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          name="message"
        ></TextArea>

        <Label>
          <CheckBox
            type="checkbox"
            checked={formik.values.newsletter}
            mark={formik.values.newsletter}
            onChange={() => formik.setFieldValue("newsletter", !formik.values.newsletter)}
          />

          <NewsletterText fontColor={"rgba(54, 83, 107, 1)"}>
            Stay up-to-date with company announcements and updates to our API
          </NewsletterText>
        </Label>
        <SubmitButton
          type="submit"
          onClick={() => (formik.errors ? setError(true) : setError(false))}
          bgColor="transparent"
          fontColor={variables.colors.sec_blue}
          hoverColor={variables.colors.pri_white}
        >
          Submit
        </SubmitButton>
      </Form>
    </>
  );
};

export default ContactForm;
