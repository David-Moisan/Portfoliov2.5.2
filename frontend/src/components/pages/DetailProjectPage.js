import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import useCursorHandler from "../hooks/useCursorHandler";

export default function DetailProjectPage() {
  const cursorHandlers = useCursorHandler();
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const projectId = useParams();

  useEffect(() => {
    const API_URL = "http://127.0.0.1:8000/api/project/";
    const fetchDetailProject = async () => {
      try {
        const response = await axios.get(
          `${API_URL}${projectId.id}/` 
        );
        setProject(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchDetailProject();
  }, [projectId]);

  if (loading) return <i className="fas fa-spinner spinner"></i>;
  if (error) return <i className="fas fa-times error-cross"></i>;

  const createProject = () => {
      return {
        __html: project.content
      }
  }

  return (
    <section className="case__project full-page">
      <header>
        <div className="case__project--back">
          <Link to="/">
            <i className="fas fa-long-arrow-alt-left"></i>
            Back
          </Link>
        </div>
      </header>
      <main className="case__project--wrapper">
        <section>
          <div className="case__project--title">
            <h1>{project.title}</h1>
            <p className="case__project--date">{project.month} - {project.day}</p>
            <div className="case__project--link">
              <a target="_blank" href={project.link} {...cursorHandlers}>
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <section className="case__info">
            <aside className="case__content" dangerouslySetInnerHTML={createProject()} />
            <div className="case__thumbnails">
              <img src={project.thumbnails} alt={project.title} />
            </div>
          </section>
        </section>
      </main>
    </section>
  );
}
