const API_URL = import.meta.env.VITE_URL
const API_IMAGE = import.meta.env.VITE_GET_IMAGE
const API_TOKEN = import.meta.env.VITE_TOKEN
const API_KEY = import.meta.env.VITE_API_KEY

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`
    }
}

export async function getMovies() {
    try {
        const res = await fetch(`${API_URL}?api_key=${API_KEY}&language=es-ES&page=1`,{
            method: 'GET',
            headers:{
                accept: 'application/json',
                Authorization: `Bearer ${API_TOKEN}`
            },
        })
        if(!res.ok) throw new Error("Error al cargar películas")
        const data = await res.json()
        return data.results
    } 
    catch(err) {
        console.error(err)
        return []
    }
}

export async function searchMovies(query) {
    if(!query) return []
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=es-ES`
    try {
        const res = await fetch(searchUrl, options)
        if(!res.ok) throw new Error("Error al buscar película")
        const data = await res.json()
        return data.results
    }
    catch(err) {
        console.error(err)
        return []
    }
}

export function getPoster(posterPath) {
    return posterPath ? `${API_IMAGE}${posterPath}` : null
}