const API_URL = "http://127.0.0.1:8000/api/blog/"

export const loadBlogPostFromAPI = () => {
    return fetch(`${API_URL}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify()
    }).then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            console.log("Bad request ! code: 400");
        }
    })
}