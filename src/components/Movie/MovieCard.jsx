import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Popcorn, ArrowBigLeft } from "lucide-react"
import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API_MOVIES
const imagesURL = import.meta.env.VITE_IMG_BACKDROP

function MovieCard(){
    const {id} = useParams()
    const [movie, setMovie] = useState([])
    const [movieVideo, setMovieVideo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`${moviesURL}${id}?language=pt-BR&${apiKey}`)
        .then(response => setMovie(response.data))
        .catch(error => console.log(error))

        getMovieVideo()
    }, [])

    function getMovieVideo(){
        axios.get(`${moviesURL}${id}/videos?language=pt-BR&${apiKey}`)
        .then(response => {
            setMovieVideo(response.data.results)
        })
        .catch(error => console.log(error))
    }

    return (

        <section className="w-full max-w-screen-md min-h-screen flex flex-col gap-4 justify-center p-8">
            <h2>
                <button onClick={()=> navigate(-1)} className="flex flex-wrap items-center gap-2 max-w-max break-all text-lg text-white">
                    <ArrowBigLeft color="#F9F9F9" /> <Popcorn color="#79D7BE" size={28} /> MoviesDash 
                </button>
            </h2>
            <h2 className="text-4xl font-bold break-words text-white">{movie.title}</h2>
            <ul className="flex flex-wrap items-center gap-2">
              <li className="px-2 text-white shadow-md bg-gradient-to-t from-amber-500 to-yellow-400">
                {movie.vote_average && movie.vote_average.toFixed(1)}
              </li>
              <li className="text-white">{movie.release_date && movie.release_date.substr(0,4)}</li>
              <li className="text-white">{movie.runtime} Min</li>
            </ul>
            <p className="text-gray-300">{movie.overview}</p>
            <p className="text-white">{movie.genres && movie.genres.map((genre) => genre.name).join(", ")}</p>

            <div className="text-white">{movieVideo.map((ele)=>(
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${ele.key}`} title={`${ele.name}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen key={ele.id}></iframe>
            ))}</div>

            {
            isLoading && 
            <div className="absolute top-0 left-0 w-full min-h-screen flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full border-t-2 border-teal-400 animate-spin"></div>
            </div>
            }
            <img src={imagesURL + movie.backdrop_path} alt={movie.title} 
            className={`absolute top-0 left-0 w-full h-full object-cover -z-20 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}
            onLoad={()=> setIsLoading(false)}/>
            <div className="absolute left-0 w-full h-full object-cover -z-10 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    )
}

export default MovieCard