import { useEffect, useState } from "react"
import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API
const imagesURL = import.meta.env.VITE_IMG
const genresURL = import.meta.env.VITE_GENRES

function MoviesCard({moviesEndpoint, query}) {
    const [movies, setMovies] = useState([])
    const [genreMovies, setGenreMovies] = useState([])

    useEffect(()=>{
        getMovies()
        getGenresMovies()
    },[query])

    function getMovies(){
        axios.get(moviesEndpoint)
        .then(response =>{
            setMovies(response.data.results)
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
        {movies.length === 0 && <div>Carregando...</div>}
        {movies.length > 0 && movies.map((ele)=>(
            <div key={ele.id} className="w-full flex flex-col gap-1">
                <div className="relative">
                    <img src={imagesURL + ele.poster_path} alt={ele.title} className="shadow-xl" />
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