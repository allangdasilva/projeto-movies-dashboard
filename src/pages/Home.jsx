import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import ContentCard from "../components/MoviesCard"
import Selector from "../components/Selector"
import { useEffect, useState } from "react"

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API_MOVIES
const genresURL = import.meta.env.VITE_GENRES

function Home() {
  const [content, setContent] = useState(`${moviesURL}popular?language=pt-BR&${apiKey}`)
  const [genres, setGenres] = useState(`${genresURL}?language=pt-BR&${apiKey}`)

  return (
    <>
      <header className="w-full max-w-7xl mx-auto">
        <Navbar />
      </header>
      <main className="w-full max-w-7xl mx-auto">
        <section className="w-full grid grid-cols-1 gap-8 p-8 min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <Selector setContent={setContent} setGenres={setGenres} />
          <ContentCard contentEndpoint={content} setGenres={genres} />
        </section>
      </main>
    </>
  )
}

export default Home
