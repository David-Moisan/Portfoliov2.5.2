import React, { useEffect, useState } from "react";
import { loadProjectFromAPI } from "../components/project/api/http";
import ProjectList from "../components/project/components/ProjectList";

/**
 * ProjectListPage appel l'API project 
 * @returns tous les projets
 * ! Refactoring: appel de l'API avec un hook perso "useFetch"
 */
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

  if (loading) return <i className="fa fa-spinner spinner" aria-hidden="true"></i>;
  if (error) return <i className="fa fa-times error-cross" aria-hidden="true"></i>;

  return (
    <>
      <ProjectList project={project} />
    </>
  );
}
