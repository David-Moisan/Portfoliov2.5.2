import React from 'react'
import Button from '../Button/Button'
import AnimLetter from '../AnimLetter/AnimLetter'
import { Link } from 'react-router-dom'
import BigBackgroundFont from '../BigFont/BigBackgroundFont'
import { useFetch } from '../../utils/hooks'

/**
 * WorkPrésentation
 * @returns une liste des 4 derniers projet trié par ordre de sortie
 */
export default function WorkPresentation() {
    const { data, isLoading, error } = useFetch(
        `https://davprocode.com/api/project/`
    )

    const project = data

    if (isLoading)
        return <i className="fa fa-spinner spinner" aria-hidden="true"></i>
    if (error)
        return <i className="fa fa-times error-cross" aria-hidden="true"></i>

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
                            Here is a small gallery of projects that I carried
                            out during my retraining, or in my personal time.{' '}
                            <br />
                            Are you interested? go see{' '}
                            <Link to="/project" className="header__text--link">
                                my work
                            </Link>{' '}
                        </p>
                    </header>
                </div>
                <div>
                    <Button route="/project" text="See more !" />
                </div>
            </div>
            <section className="projects">
                <ul className="projects__list">
                    {project.slice(0, 4).map((project) => (
                        <li
                            className="project__item"
                            key={project.id}
                            data-aos="fade-left"
                        >
                            <div className="project__content">
                                <div>
                                    <h2 className="project__title">
                                        {project.title}
                                    </h2>
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
                                        <a
                                            href={project.link}
                                            className="project__github--link"
                                        >
                                            <i
                                                className="fa fa-github fa-2x"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </div>
                                    <ul className="project__languages">
                                        {project.languages.map(
                                            (lang, index) => (
                                                <li key={index}>{lang.name}</li>
                                            )
                                        )}
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
                                            <img
                                                src={project.thumbnails}
                                                alt={project.title}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}
