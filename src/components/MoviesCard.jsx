import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Heart } from "lucide-react"
import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY
const imagesURL = import.meta.env.VITE_IMG_POSTER
const genresURL = import.meta.env.VITE_GENRES

function MoviesCard({moviesEndpoint, query}) {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(()=>{
        axios.get(moviesEndpoint)
        .then(response => setMovies(response.data.results))
        .catch(error => console.error(error))

        axios.get(`${genresURL}?language=pt-BR&${apiKey}`)
        .then(response => setGenres(response.data.genres))
        .catch(error => console.error(error))
    },[query, moviesEndpoint])

    function ApiGenresMap(genresIds, genres){
        return genresIds.map((ele) => {
            const genre = genres.find(g => g.id === ele);
            return genre ? genre.name : 'Desconhecido';
        });
    }
    function getLocalStorage(id){
        localStorage.setItem("movieId", JSON.stringify(id))
    }

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
                    <Link to='/favorites' className="absolute top-4 -right-4 flex items-center justify-center w-8 h-8 rounded-full bg-red-500"
                    onClick={()=> getLocalStorage(ele.id)}>
                        <Heart />
                    </Link>
                </div>
                
                <h3 className="text-base font-medium pt-1 text-white">{ele.title}{ele.name}</h3>
                <p className="text-sm text-gray-300">{ele.genre_ids && ApiGenresMap(ele.genre_ids, genres).join(', ')}</p>
            </div>
        ))}
      </>
    )
  }
  
  export default MoviesCard