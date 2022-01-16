import React from "react";
import Button from "./Button"

export default function Form() {
  return (
    <form id="form-contact" autoComplete="off">
      <ul>
        <li className="half fadeAnim">
          <input
            className="input__field"
            placeholder="Name"
            type="text"
            name="name"
          />
          <label className="input__label input__label--color input__label--color2"></label>
        </li>
        <li className="half fadeAnim">
          <input
            className="input__field"
            placeholder="Email"
            type="email"
            name="email"
          />
          <label className="input__label input__label--color input__label--color2"></label>
        </li>
        <li className="fadeAnim">
          <input
            className="input__field"
            placeholder="Subject"
            type="text"
            name="subject"
          />
          <label className="input__label input__label--color input__label--color2"></label>
        </li>
        <li className="fadeAnim">
          <textarea
            className="input__field"
            placeholder="Message"
            name="message"
          ></textarea>
          <label className="input__label input__label--color input__label--color2"></label>
        </li>
        <Button text="Send message !" className="fadeAnim" route="/contact" />
      </ul>
    </form>
  );
}
