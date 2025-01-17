import { useSearchParams } from 'react-router-dom'
import MoviesCard from '../components/MoviesCard'
import Navbar from '../components/Navbar'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  
    return (
      <>
        <header className="w-full max-w-7xl mx-auto">
          <Navbar />
          <p className='px-8 text-2xl pt-4 text-white'>Resultados para: <span className='text-teal-400'>{query}</span></p>
        </header>
        <main className="w-full max-w-7xl mx-auto">
          <section className="w-full grid grid-cols-1 gap-8 p-8 min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <MoviesCard moviesEndpoint={`${searchURL}?query=${query}&language=pt-BR&${apiKey}`} query={query}/>
          </section>
        </main>
        
      </>
    )
  }
  
  export default Search