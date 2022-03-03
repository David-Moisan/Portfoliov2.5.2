import React from 'react'
import ListBlogPost from '../components/blog/components/ListBlogPost'
import { useFetch } from '../utils/hooks'

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
        return <i className="fa fa-spinner spinner" aria-hidden="true"></i>
    if (error)
        return <i className="fa fa-times error-cross" aria-hidden="true"></i>

    return (
        <div>
            <ListBlogPost blog={data} />
        </div>
    )
}
