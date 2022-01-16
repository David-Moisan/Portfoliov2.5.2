import React from "react";
import Form from "./Form"
import Map from "./Map"
import AnimLetter from "../hooks/AnimLetter";

export default function Contact() {
  return (
    <section className="contact section-full" id="contact">
      <div className="contact__block--text">
        <header>
          <h2 className="header__title">
            <AnimLetter letter="C" />
            <AnimLetter letter="o" />
            <AnimLetter letter="n" />
            <AnimLetter letter="t" />
            <AnimLetter letter="a" />
            <AnimLetter letter="c" />
            <AnimLetter letter="t" />
            <span className="animation__space"></span>
            <AnimLetter letter="m" />
            <AnimLetter letter="e" />
          </h2>
          <p>
            I'm available immediately for any kind of web development || full
            stack mission. Do not hesitate to contact me via this contact form.
          </p>
        </header>
        <div className="contact__form">
            <Form />
        </div>
      </div>
      <div className="contact__map">
        <Map />
      </div>
    </section>
  );
}
