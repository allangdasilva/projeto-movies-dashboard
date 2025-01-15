import axios from "axios";

function ApiGenres(url, setter){
    return (
        axios.get(url)
        .then(response => {
            setter(response.data.genres)
        })
        .catch(error => {
            console.error(error)
        })
    )
}

export default ApiGenres