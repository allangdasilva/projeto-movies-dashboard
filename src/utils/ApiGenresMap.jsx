function ApiGenresMap(genresIds, genresContent){

    if (!genresContent || genresContent.length === 0) {
        return ['Desconhecido']; // Retorna um valor padrão até os dados serem carregados
    }

    return genresIds.map((ele) => {
        const genre = genresContent.find(g => g.id === ele);
        return genre ? genre.name : 'Desconhecido';
    });
    
}

export default ApiGenresMap