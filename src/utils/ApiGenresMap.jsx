function ApiGenresMap(genresIds, genres){
    return genresIds.map((ele) => {
        const genre = genres.find(g => g.id === ele);
        return genre ? genre.name : 'Desconhecido';
    });
}

export default ApiGenresMap