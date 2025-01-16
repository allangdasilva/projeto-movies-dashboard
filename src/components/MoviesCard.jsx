import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ApiServices from "../utils/ApiServices.jsx"
import ApiGenres from "../utils/ApiGenres.jsx"
import ApiGenresMap from "../utils/ApiGenresMap.jsx"

const apiKey = import.meta.env.VITE_API_KEY
const imagesURL = import.meta.env.VITE_IMG_POSTER
const genresURL = import.meta.env.VITE_GENRES

function MoviesCard({moviesEndpoint, query}) {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(()=>{
        ApiServices(moviesEndpoint, setMovies)
        ApiGenres(`${genresURL}?language=pt-BR&${apiKey}`, setGenres)
    },[query, moviesEndpoint])

    return (
      <>
        {movies.length === 0 && 
        <div className="absolute top-0 left-0 w-full min-h-screen flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-t-2 border-teal-400 animate-spin"></div>
        </div>
        }
        {movies.length > 0 && movies.map((ele)=>(
            <div key={ele.id} className="w-full flex flex-col gap-1 animate-[opacity_1s_ease] transition-all">
                <div className="relative">
                    <Link to={`/movie/${ele.id}`}>
                        <img src={imagesURL + ele.poster_path} alt={ele.title} className="shadow-xl" />
                    </Link>
                    <div className="absolute -right-4 bottom-4 w-8 h-8 flex items-center justify-center rounded-full shadow-xl bg-gradient-to-t from-amber-500 to-yellow-400">
                        <p className="text-sm font-medium text-white">{ele.vote_average && ele.vote_average.toFixed(1)}</p>
                    </div>
                </div>
                
                <h3 className="text-base font-medium pt-1 text-white">{ele.title}{ele.name}</h3>
                <p className="text-sm text-gray-300">{ele.genre_ids && ApiGenresMap(ele.genre_ids, genres).join(', ')}</p>
            </div>
        ))}
      </>
    )
  }
  
  export default MoviesCard