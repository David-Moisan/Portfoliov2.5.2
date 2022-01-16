import React from "react";
import Button from "../Button"
import AnimLetter from "../../hooks/AnimLetter";
import { Link } from "react-router-dom"
import BigBackgroundFont from "../../hooks/BigBackgroundFont";

export default function WorkPresentation() {
  return (
    <section className="work section-full" id="work">
      <div className="work__block--text">
        <BigBackgroundFont text="Work"/>
        <div>
          <header className="work__block--header">
            <h2 className="header__title">
              <AnimLetter letter="M" />
              <AnimLetter letter="y" />
              <span className="animation__space"></span>
              <AnimLetter letter="P" />
              <AnimLetter letter="o" />
              <AnimLetter letter="r" />
              <AnimLetter letter="t" />
              <AnimLetter letter="f" />
              <AnimLetter letter="o" />
              <AnimLetter letter="l" />
              <AnimLetter letter="i" />
              <AnimLetter letter="o" />
            </h2>
            <p>
              Here is a small gallery of projects that I carried out during my
              retraining, or in my personal time. <br />
              Are you interested? go see{" "}
              <Link to="/project" className="header__text--link">
                my work
              </Link>{" "}
            </p>
          </header>
        </div>
        <div>
            <Button route="/project" text="See more !" />
        </div>
      </div>
      {/* ProjectList */}
    </section>
  );
}
