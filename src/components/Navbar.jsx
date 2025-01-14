import { Link } from "react-router-dom"
import { Search } from "lucide-react"
import { Popcorn } from "lucide-react"

function Navbar() {

  return (
    <>
      <nav>
        <h2>
            <Link>
                <Popcorn color="#000" /> MoviesDash
            </Link>
        </h2>
        <form>
            <input type="text" placeholder="Buscar..." />
            <button type="submit">
                <Search color="#000" />
            </button>
        </form>
      </nav>
    </>
  )
}

export default Navbar