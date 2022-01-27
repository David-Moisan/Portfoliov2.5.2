import React, { useState, useEffect } from "react";
import Button from "../Button";
import AnimLetter from "../../hooks/AnimLetter";
import { Link } from "react-router-dom";
import BigBackgroundFont from "../../hooks/BigBackgroundFont";
import { loadProjectFromAPI } from "./api/http";
import useCursorHandler from "../../hooks/useCursorHandler";

export default function WorkPresentation() {
  const cursorHandlers = useCursorHandler();
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProjectFromAPI()
      .then((project) => {
        setProject(project);
      })
      .catch((error) => {
        console.error("Error fetching data : ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <i className="fa fa-spinner spinner" aria-hidden="true"></i>;
  if (error) return <i className="fa fa-times error-cross" aria-hidden="true"></i>;

  return (
    <section className="work section-full" id="work">
      <BigBackgroundFont text="Work" />
      <div className="work__block--text" data-aos="fade-right">
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
              <Link to="/project" className="header__text--link" {...cursorHandlers}>
                my work
              </Link>{" "}
            </p>
          </header>
        </div>
        <div>
          <Button route="/project" text="See more !" />
        </div>
      </div>
      <section className="projects">
        <ul className="projects__list">
          {project.slice(0, 4).map((project, index) => (
            <li className="project__item" key={index} id={project.id} data-aos="fade-left">
              <div className="project__content">
                <div>
                  <h2 className="project__title">{project.title}</h2>
                  <div className="project__description">
                    <p>{project.description}</p>
                  </div>
                  <div className="project__link">
                    <Link
                      to={`/project/${project.id}`}
                      className="project__detail--view"
                      {...cursorHandlers}
                    >
                      Case study
                    </Link>
                    <a href={project.link} className="project__github--link" {...cursorHandlers}>
                      <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                    </a>
                  </div>
                  <ul className="project__languages">
                    {project.languages.map((lang, index) => (
                      <li key={index}>{lang.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="project__image">
                <Link
                  to={`/project/${project.id}`}
                  className="project__detail--view"
                  {...cursorHandlers}
                >
                  <div className="project__image--block">
                    <div className="project__image--wrapper">
                      <img src={project.thumbnails} alt={project.title} />
                    </div>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
