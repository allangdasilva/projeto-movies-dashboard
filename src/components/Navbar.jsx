import { Link, useNavigate } from "react-router-dom"
import { PiPopcornDuotone } from "react-icons/pi"
import { LuSearch } from "react-icons/lu"
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
      <nav className="w-full flex flex-col gap-4 justify-between items-center p-8 pb-4 sm:flex-row sm:gap-0">
        <h2>
            <Link to='/' className="flex flex-wrap justify-center items-center gap-2 text-lg text-white">
                <PiPopcornDuotone color="#79D7BE" size={28} /> MoviesDash
            </Link>
        </h2>
        <form className="relative w-full max-w-60 flex items-center" onSubmit={handleSubmit}>
            <input type="text" placeholder="Buscar..." 
            className="w-full px-4 py-2 pr-10 rounded-3xl outline-none shadow-md" 
            onChange={(event)=> setSearch(event.target.value)} value={search}/>
            <button type="submit" 
            className="absolute right-0 p-2">
                <LuSearch color="#79D7BE" size={20} />
            </button>
        </form>
      </nav>
    </>
  )
}

export default Navbar