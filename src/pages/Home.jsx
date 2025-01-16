import Navbar from "../components/Navbar"
import MoviesCard from "../components/MoviesCard"

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API_MOVIES

function Home() {
  return (
    <>
      <header className="w-full max-w-7xl mx-auto">
        <Navbar />
      </header>
      <main className="w-full max-w-7xl mx-auto">
        <section className="w-full grid grid-cols-1 gap-8 p-8 min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <MoviesCard moviesEndpoint={`${moviesURL}popular?language=pt-BR&${apiKey}`} />
        </section>
      </main>
    </>
  )
}

export default Home
