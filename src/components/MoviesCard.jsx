import { useEffect, useState } from "react"
import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API
const imagesURL = import.meta.env.VITE_IMG

function MoviesCard() {
    const [popularMovies, setPopuplarMovies] = useState([])

    useEffect(()=>{
        getPopularMovies()
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
    return (
      <>
        {popularMovies.map((ele)=>(
            <div key={ele.id}>
                <img src={imagesURL + ele.poster_path} alt="" />
                <h3>{ele.title}</h3>
                <p></p>
            </div>
        ))}
      </>
    )
  }
  
  export default MoviesCard