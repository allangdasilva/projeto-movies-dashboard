import axios from "axios"
import { useEffect, useState } from "react"

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API_MOVIES

function Favorites(){
    const [movies, setMovies] = useState([])
    const [getLocalStorage, setGetLocalStorage] = ([JSON.parse(localStorage.getItem('movieId')) || []])

    useEffect(()=>{
        axios.get(`${moviesURL}${getLocalStorage}?language=pt-BR&${apiKey}`)
        .then(response => setMovies(response.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div>
                {movies.title}
            </div>
        </>
    )
}

export default Favorites