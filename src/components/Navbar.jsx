import { Link, useNavigate } from "react-router-dom"
import { Search } from "lucide-react"
import { Popcorn } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event){
    event.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`)

    setSearch('')
  }

  return (
    <>
      <nav className="w-full flex flex-col gap-4 justify-between items-center p-8 sm:flex-row sm:gap-0">
        <h2>
            <Link to='/' className="flex items-center gap-2 text-white">
                <Popcorn color="#79D7BE" /> MoviesDash
            </Link>
        </h2>
        <form className="relative w-full max-w-60 flex items-center" onSubmit={handleSubmit}>
            <input type="text" placeholder="Buscar..." 
            className="w-full px-4 py-2 pr-10 rounded-3xl outline-none shadow-md" 
            onChange={(event)=> setSearch(event.target.value)} value={search}/>
            <button type="submit" 
            className="absolute right-0 p-2">
                <Search color="#79D7BE" />
            </button>
        </form>
      </nav>
    </>
  )
}

export default Navbar