import React from 'react'
import ListBlogPost from '../components/blog/components/ListBlogPost'
import { useFetch } from '../utils/hooks'
import { CrossError, Spinner } from '../utils/style/LoadingDataStyle'

/**
 * BlogListPage
 * ! Refactoring: "useFetch" (hook perso)
 * @returns l'ensemble des articles de blog
 */
export default function BlogListPage() {
    const { data, isLoading, error } = useFetch(
        `https://davprocode.com/api/blog/`
    )

    if (isLoading)
        return <Spinner className="fa fa-spinner" aria-hidden="true" />
    if (error) return <CrossError className="fa fa-times" aria-hidden="true" />

    return (
        <div>
            <ListBlogPost blog={data} />
        </div>
    )
}
