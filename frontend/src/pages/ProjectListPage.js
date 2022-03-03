import React from 'react'
import ProjectList from '../components/project/components/ProjectList'
import { useFetch } from '../utils/hooks'

/**
 * ProjectListPage appel l'API project
 * @returns tous les projets
 */
export default function ProjectListPage() {
    const { data, isLoading, error } = useFetch(
        `https://davprocode.com/api/project/`
    )

    if (isLoading)
        return <i className="fa fa-spinner spinner" aria-hidden="true"></i>
    if (error)
        return <i className="fa fa-times error-cross" aria-hidden="true"></i>

    return (
        <>
            <ProjectList project={data} />
        </>
    )
}
