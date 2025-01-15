import MovieCard from "../components/Movie/MovieCard.jsx"

function Movie() {
    return (
      <>
      {/* <img src={imagesURL + movie.backdrop_path} alt="" className="absolute w-full min-h-screen -z-10"/>
      <div className="absolute w-full -z-10 bg-gradient-to-t from-black to-transparent"></div> */}
        <main className="w-full max-w-7xl mx-auto">
          <MovieCard />
        </main>
      </>
    )
  }
  
  export default Movie