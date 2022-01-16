import React, { useEffect, useState } from "react";
import { loadProjectFromAPI } from "./api/http";
import ProjectList from "./components/ProjectList";

export default function ProjectListPage() {
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

  if (loading) return <i className="fas fa-spinner spinner"></i>;
  if (error) return <i className="fas fa-times error-cross"></i>;

  return (
    <>
      <ProjectList project={project} />
    </>
  );
}
