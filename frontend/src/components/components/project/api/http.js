const API_URL = "http://127.0.0.1:8000/api/project/"

/**
 * Récupère les données de tous les projets via l'API Django
 * @returns fetching data
 */
export const loadProjectFromAPI = async () => {
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