import React, { useEffect, useState } from "react";

export default function Form() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required !";
    } else if (values.name.length < 3) {
      errors.name = "Name must be more than 3 characters !";
    }
    if (!values.email) {
      errors.email = "Email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format !";
    }
    if (!values.subject) {
      errors.subject = "Subject is required !";
    } else if (values.subject.length < 3) {
      errors.subject = "Subject must be more than 3 characters !";
    }
    if (!values.message) {
      errors.message = "Message is required !";
    } else if (values.message.length < 10) {
      errors.message = "Message must be more than 10 characters !";
    } else if (values.message.length > 500) {
      errors.message = "500/500 characters";
    }
    return errors;
  };

  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="message-success">Message sent successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined)}</pre>
      )}
      {/* <pre>{JSON.stringify(formValues, undefined)}</pre> || pour voir les valeurs du form en direct sur la page */}
      <form action="" method="POST" autoComplete="off" onSubmit={handleSubmit}>
        <ul>
          <li className="half fadeAnim">
            <input
              className="input__field"
              placeholder="Name"
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            <label className="input__label input__label--color input__label--color2"></label>
            <p className="error-msg">{formErrors.name}</p>
          </li>
          <li className="half fadeAnim">
            <input
              className="input__field"
              placeholder="Email"
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <label className="input__label input__label--color input__label--color2"></label>
            <p className="error-msg">{formErrors.email}</p>
          </li>
          <li className="fadeAnim">
            <input
              className="input__field"
              placeholder="Subject"
              type="text"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
            />
            <label className="input__label input__label--color input__label--color2"></label>
            <p className="error-msg">{formErrors.subject}</p>
          </li>
          <li className="fadeAnim">
            <textarea
              className="input__field"
              placeholder="Message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
            <label className="input__label input__label--color input__label--color2"></label>
            <p className="error-msg">{formErrors.message}</p>
          </li>
          <li className="fadeAnim">
            <button className="submit-btn" type="submit">
              Send message !
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}
