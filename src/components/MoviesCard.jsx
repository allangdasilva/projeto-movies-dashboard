import { useEffect, useState } from "react"
import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API
const imagesURL = import.meta.env.VITE_IMG
const genresURL = import.meta.env.VITE_GENRES

function MoviesCard() {
    const [popularMovies, setPopuplarMovies] = useState([])
    const [genreMovies, setGenreMovies] = useState([])

    useEffect(()=>{
        getPopularMovies()
        getGenresMovies()
    },[])

    function getPopularMovies(){
        axios.get(`${moviesURL}popular?language=pt-BR&${apiKey}`)
        .then(response =>{
            setPopuplarMovies(response.data.results)
            console.log(response.data)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    function getGenresMovies(){
        axios.get(`${genresURL}?language=pt-BR&${apiKey}`)
        .then(response =>{
            setGenreMovies(response.data.genres)
        })
        .catch(error => {
            console.error(error)
        })
    }
    function mapGenresIdsToName(genresIds){
        return genresIds.map((ele)=>{
            const genre = genreMovies.find(gen => gen.id === ele)
            return genre ? genre.name : 'Desconhecido'
        })
    }

    return (
      <>
        {popularMovies.length === 0 && <div>Carregando...</div>}
        {popularMovies.length > 0 && popularMovies.map((ele)=>(
            <div key={ele.id} className="w-full">
                <img src={imagesURL + ele.poster_path} alt={ele.title} />
                <h3>{ele.title}</h3>
                <p>{mapGenresIdsToName(ele.genre_ids).join(', ')}</p>
            </div>
        ))}
      </>
    )
  }
  
  export default MoviesCard