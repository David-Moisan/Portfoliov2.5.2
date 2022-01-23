import React from 'react';
import AnimLetter from '../../hooks/AnimLetter';
import ScrollDown from '../ScrollDown';


export default function AboutPage() {
  return (
    <section className="section-full about-page" id="about">
      <ScrollDown />
      <div className="about-page__text">
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
      <div className="skill-zone about-page__skill">
        <div id="skill"></div>  
      </div>
    </section>
  );
}
