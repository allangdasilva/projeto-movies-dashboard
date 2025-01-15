function ApiGenresMap(genresIds, genreMovies){
    return (
        genresIds.map((ele)=>{
            const genre = genreMovies.find(g => g.id === ele)
            return genre ? genre.name : 'Desconhecido'
        })
    )
}

export default ApiGenresMap