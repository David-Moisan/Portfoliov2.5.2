import React from "react";
import { Link } from "react-router-dom";
import AnimLetter from "../../../hooks/AnimLetter";

export default function ProjectList(props) {
  return (
    <section className="all-projects">
      <h1 className="all-projects__head">
        <AnimLetter letter="A" />
        <AnimLetter letter="l" />
        <AnimLetter letter="l" />
        <span className="animation__space"></span>
        <AnimLetter letter="p" />
        <AnimLetter letter="r" />
        <AnimLetter letter="o" />
        <AnimLetter letter="j" />
        <AnimLetter letter="e" />
        <AnimLetter letter="c" />
        <AnimLetter letter="t" />
        <AnimLetter letter="s" />
      </h1>
      <ul className="all-projects__list">
        {props.project.map((project, index) => (
          <li className="all-projects__item" key={index} id={project.id}>
            <div className="all-projects__content">
              <div>
                <h2 className="all-projects__title">{project.title}</h2>
                <div className="all-projects__description">
                  <p>{project.description}</p>
                </div>
                <div className="all-projects__link">
                  <Link
                    to={`/project/${project.id}`}
                    className="all-projects__detail--view"
                  >
                    Case study
                  </Link>
                  <a href={project.link} className="all-projects__github--link">
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </div>
                <ul className="all-projects__languages">
                  {project.languages.map((lang, index) => (
                    <li key={index}>{lang.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="all-projects__image">
              <Link
                to={`/project/${project.id}`}
                className="all-projects__detail--view"
              >
                <div className="all-projects__image--block">
                  <div className="all-projects__image--wrapper">
                    <img src={project.thumbnails} alt={project.title} />
                  </div>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
