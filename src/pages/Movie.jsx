import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API
const imagesURL = import.meta.env.VITE_IMG

function Movie() {
  const {id} = useParams()
  const [movie, setMovie] = useState([])

  useEffect(()=>{
    axios.get(`${moviesURL}${id}?language=pt-BR&${apiKey}`)
    .then(response =>{
      setMovie(response.data)
      console.log(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])

    return (
      <>
        <main>
          <h2>{movie.title}</h2>
          <ul>
            <li>{movie.vote_average}</li>
            <li>{movie.release_date}</li>
            <li></li>
            <li></li>
          </ul>
          <p></p>
          <p></p>
        </main>
      </>
    )
  }
  
  export default Movie