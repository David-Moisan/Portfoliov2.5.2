import { useEffect, useState } from 'react'

/**
 * useFetch est un hook perso pour limiter le code dans l'app
 * @param {string} url
 * @returns
 */
export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return

        setLoading(true)

        async function fetchData() {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(),
                })

                if (!response.ok) {
                    const { errorMessage } = await response.json()
                    throw new Error(errorMessage)
                } else {
                    const data = await response.json()
                    setData(data)
                }
            } catch (error) {
                console.log('Bad request !')
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { data, isLoading, error }
}
