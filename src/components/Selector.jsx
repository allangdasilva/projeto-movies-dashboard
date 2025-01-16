import { useState } from "react"

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API_MOVIES
const seriesURL = import.meta.env.VITE_API_SERIES

function Selector({setContent}){
    const [background, setBackground] = useState(true)

    return (
        <ul className="col-span-full w-full max-w-fit flex items-center border-2">
            <li className={`px-2 py-1 cursor-pointer text-white ${background ? 'text-teal-800 bg-white' : ''} transition-all duration-1000`} 
            onClick={()=> {
              setContent(`${moviesURL}popular?language=pt-BR&${apiKey}`)
              setBackground(true)
              }
            }>
              Filmes Populares
            </li>
            <li className={`px-2 py-1 cursor-pointer text-white ${!background ? 'text-teal-800 bg-white' : ''} transition-all duration-1000`} 
            onClick={()=> {
              setContent(`${seriesURL}popular?language=pt-BR&${apiKey}`)
              setBackground(!background)
              }
            }>
              Séries Populares
            </li>
          </ul>
    )
}

export default Selector