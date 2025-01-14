import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import MoviesCard from "../components/MoviesCard"

function Home() {

  return (
    <>
      <Navbar />
      <MoviesCard />
    </>
  )
}

export default Home
