const API_URL = "http://127.0.0.1:8000/api/project/"

/**
 * Récupère les données de tous les projets via l'API Django
 * @returns fetching data
 */
export const loadProjectFromAPI = () => {
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

/**
 * Récupère spécifiquement via l'id le détail d'un projet 
 * @param {int} id 
 * @returns fetching specific data
 */
export const loadDetailProjectFromAPI = (id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify()
    }).then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            console.log("This project don't exist !");
        }
    })
}