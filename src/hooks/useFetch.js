import { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        setTimeout(function () {
            fetch(url, { method })
                .then(resp => resp.json())
                .then(json => setResponse({
                    data: json,
                    loading: false
                }))
        }, 3000);
    }, [url, method])

    return response
}