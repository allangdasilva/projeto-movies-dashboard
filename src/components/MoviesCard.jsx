import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import ApiServices from "../utils/ApiServices.jsx"

const apiKey = import.meta.env.VITE_API_KEY
const imagesURL = import.meta.env.VITE_IMG
const genresURL = import.meta.env.VITE_GENRES

function MoviesCard({moviesEndpoint, query}) {
    const [movies, setMovies] = useState([])
    const [genreMovies, setGenreMovies] = useState([])

    useEffect(()=>{
        ApiServices(moviesEndpoint, setMovies)
        getGenresMovies()
    },[query])

    function getGenresMovies(){
        axios.get(`${genresURL}?language=pt-BR&${apiKey}`)
        .then(response =>{
            setGenreMovies(response.data.genres)
        })
        .catch(error =>{
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
        {movies.length === 0 && <div>Carregando...</div>}
        {movies.length > 0 && movies.map((ele)=>(
            <div key={ele.id} className="w-full flex flex-col gap-1">
                <div className="relative">
                    <Link to={`/movie/${ele.id}`}>
                        <img src={imagesURL + ele.poster_path} alt={ele.title} className="shadow-xl" />
                    </Link>
                    <div className="absolute -right-4 bottom-4 w-8 h-8 flex items-center justify-center rounded-full shadow-xl bg-gradient-to-t from-amber-500 to-yellow-400">
                        <p className="text-sm font-medium text-white">{ele.vote_average.toFixed(1)}</p>
                    </div>
                </div>
                <h3 className="text-base font-medium pt-1 text-white">{ele.title}</h3>
                <p className="text-sm text-gray-300">{mapGenresIdsToName(ele.genre_ids).join(', ')}</p>
            </div>
        ))}
      </>
    )
  }
  
  export default MoviesCard