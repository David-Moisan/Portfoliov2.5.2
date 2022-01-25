import React from "react";
import AnimLetter from "../hooks/AnimLetter";
import ScrollDown from "./ScrollDown";
import { useMediaQuery } from "react-responsive";
import Cloud from "../hooks/Cloud";

export default function About() {
  const isTablet = useMediaQuery({ maxWidth: 768 });
  return (
    <section
      className={isTablet ? "about-page section-full" : "about section-full"}
      id="about"
    >
      <ScrollDown />
      <div className="about__block--text about-page__text" data-aos="fade-right">
        <header>
          <h2 className="header__title">
            <AnimLetter letter="M" />
            <AnimLetter letter="y" />
            <span className="animation__space"></span>
            <AnimLetter letter="S" />
            <AnimLetter letter="t" />
            <AnimLetter letter="o" />
            <AnimLetter letter="r" />
            <AnimLetter letter="y" />
          </h2>
          <p>
            After a career in the French Army as a parachutist, I decided to
            retrain in the field of web development in 2020. I therefore resumed
            my studies with the WIS Toulouse school to validate a BTS Web and
            mobile web development as well as a Digital Project Manager license.
            Unfortunately, I did not find a work-study program to continue my
            studies in master's degree in computer engineering.
          </p>
          <p>
            Since I discovered IT development, I have never stopped learning
            every day, driven by curiosity and a growing passion.
          </p>
        </header>
      </div>
      <div className="skill-zone about-page__skill" data-aos="fade-left">
        <Cloud />
      </div>
    </section>
  );
}
