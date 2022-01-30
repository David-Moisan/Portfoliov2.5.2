const API_URL = "https://davprocode.com/api/blog/"

export const loadBlogPostFromAPI = async () => {
    const response = await fetch(`${API_URL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    });
    if (response.ok) {
        return response.json();
    } else {
        console.log("Bad request ! code: 400");
    }
}