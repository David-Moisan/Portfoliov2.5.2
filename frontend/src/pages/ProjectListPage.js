import React from 'react'
import ProjectList from '../components/project/components/ProjectList'
import { useFetch } from '../utils/hooks'
import { Spinner, CrossError } from '../utils/style/LoadingDataStyle'

/**
 * ProjectListPage appel l'API project
 * @returns tous les projets
 */
export default function ProjectListPage() {
    const { data, isLoading, error } = useFetch(
        `https://davprocode.com/api/project/`
    )

    if (isLoading)
        return <Spinner className="fa fa-spinner" aria-hidden="true" />
    if (error) return <CrossError className="fa fa-times" aria-hidden="true" />

    return (
        <>
            <ProjectList project={data} />
        </>
    )
}
