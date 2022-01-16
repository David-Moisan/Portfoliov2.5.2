import React from "react";
import { Link } from "react-router-dom";

export default function ProjectList(props) {
  return (
    <section className="projects">
      <ul className="projects__list">
        {props.project.map((project, index) => (
          <li className="project__item" key={index} id={project.id}>
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
                  >
                    Case study
                  </Link>
                  <a href={project.link} className="project__github--link">
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </div>
                <ul className="project__languages">
                    {/* Languages */}
                </ul>
              </div>
            </div>
            <div className="project__image">
              <Link
                to={`/project/${project.id}`}
                className="project__detail--view"
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
  );
}
