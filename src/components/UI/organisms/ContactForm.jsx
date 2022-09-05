import React from "react";
import styled, { css } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { variables, FontDefault } from "../../../settings/mainstyles";
import checkIcon from "../../files/assets/shared/desktop/icon-check.svg";
import { Button } from "../atoms/ButtonsV2";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputStyle = css`
  padding: 20px;
  background-color: transparent;
  font-family: ${variables.fonts.textFont};
  font-size: 15px;
  border: none;
  border-bottom: 1px solid ${(props) => (props.validate ? `rgba(255, 0, 0, 0.5)` : `rgba(54, 83, 107, 0.5)`)};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => (props.validate ? `rgba(255, 0, 0, 0.5)` : `rgba(54, 83, 107, 1)`)};
    &::placeholder {
      opacity: 100%;
    }
  }

  &::placeholder {
    font-family: ${variables.fonts.textFont};
    color: ${(props) => (props.validate ? "rgba(255, 0, 0, 1)" : variables.colors.sec_blue)};
    opacity: 50%;
    font-size: 15px;
  }
`;

const Input = styled.input`
  ${InputStyle};
`;

const TextArea = styled.textarea`
  ${InputStyle}
`;

const CheckBox = styled.input`
  appearance: none;
  min-width: 24px;
  height: 24px;
  background-color: ${(props) => (props.mark ? `#BA4270` : `rgba(54, 83, 107, 0.25)`)};
  position: relative;
  margin-right: 26px;

  &:before {
    content: "";
    display: ${(props) => (props.mark ? "block" : "none")};
    mask: url(${checkIcon}) no-repeat 50% 50%;
    mask-size: contain;
    position: absolute;
    width: 60%;
    height: 100%;
    background-color: white;
    left: 0;
    right: 0;
    top: 42%;
    bottom: 41.71%;
    margin: auto;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;

const Invalid = styled.p`
  color: #ff0000;
  opacity: 50%;
  margin-bottom: 0;
  font-size: 11px;
  font-family: ${variables.fonts.textFont};
`;

const NewsletterText = styled(FontDefault)`
  letter-spacing: -0.115385px;
  line-height: 25px;
  margin: 0;
`;

const SubmitButton = styled(Button)`
  align-self: flex-start;
`;

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
