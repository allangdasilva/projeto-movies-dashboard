import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

function AppRoutes(){
    return (
        <BrowserRouter basename="/projeto-movies-dashboard">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes