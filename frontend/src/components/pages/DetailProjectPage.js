import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function DetailProjectPage() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const projectId = useParams();

  useEffect(() => {
    const API_URL = "https://davprocode.com/api/project/";
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

  if (loading) return <i className="fa fa-spinner spinner" aria-hidden="true"></i>;
  if (error) return <i className="fa fa-times error-cross" aria-hidden="true"></i>;

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
            <i className="fa fa-long-arrow-alt-left" aria-hidden="true"></i>
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
              <a target="_blank" href={project.link}>
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
