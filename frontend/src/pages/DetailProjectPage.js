import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../utils/hooks'

/**
 * Pour chaque projet cette page détails l'ensemble du projet
 * @returns
 */
export default function DetailProjectPage() {
    const { id } = useParams()

    const { data, isLoading, error } = useFetch(
        `https://davprocode.com/api/project/${id}/`
    )

    const project = data

    if (isLoading)
        return <i className="fa fa-spinner spinner" aria-hidden="true"></i>
    if (error)
        return <i className="fa fa-times error-cross" aria-hidden="true"></i>

    /**
     * createProject fonction qui permet récupérer l'ensemble du text du summernote django
     * @returns _html le content du projet
     */
    const createProject = () => {
        return {
            __html: project.content,
        }
    }

    return (
        <section className="case__project full-page">
            <header>
                <div className="case__project--back">
                    <Link to="/">
                        <i
                            className="fa fa-long-arrow-alt-left"
                            aria-hidden="true"
                        ></i>
                        Back
                    </Link>
                </div>
            </header>
            <main className="case__project--wrapper">
                <section>
                    <div className="case__project--title">
                        <h1>{project.title}</h1>
                        <p className="case__project--date">
                            {project.month} - {project.day}
                        </p>
                        <div className="case__project--link">
                            <a target="_blank" href={project.link}>
                                <i
                                    className="fa fa-github fa-2x"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </div>
                    </div>
                    <section className="case__info">
                        <aside
                            className="case__content"
                            dangerouslySetInnerHTML={createProject()}
                        />
                        <div className="case__thumbnails">
                            <img src={project.thumbnails} alt={project.title} />
                        </div>
                    </section>
                </section>
            </main>
        </section>
    )
}
