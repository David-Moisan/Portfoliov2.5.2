import React from "react";
import AnimLetter from "../hooks/AnimLetter";
import BigBackgroundFont from '../hooks/BigBackgroundFont'
import useCursorHandler from "../hooks/useCursorHandler";


export default function ContactPage() {
  const cursorHandlers = useCursorHandler();
  return (
    <>
      <BigBackgroundFont text="@" />
      <section className="contact-page section-full" id="contact" data-aos="fade-right">
        <div className="contact-page__text">
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
              stack mission. Do not hesitate to contact me via this contact
              form.
            </p>
          </header>
          <div className="contact__form">
            <a href="mailto:davprocode@gmail.com" className="submit-btn" {...cursorHandlers}>
              Send !
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
