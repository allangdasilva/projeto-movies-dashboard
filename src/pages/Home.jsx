import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import MoviesCard from "../components/MoviesCard"

function Home() {

  return (
    <>
      <header className="w-full max-w-7xl mx-auto">
        <Navbar />
      </header>
      <main className="w-full max-w-7xl mx-auto">
        <section className="w-full grid grid-cols-1 p-6 min-[320px]:grid-cols-2">
          <MoviesCard />
        </section>
      </main>
    </>
  )
}

export default Home
