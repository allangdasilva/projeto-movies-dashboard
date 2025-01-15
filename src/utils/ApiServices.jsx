import axios from "axios";

function ApiServices(url, setter){
    return (
    axios.get(url)
    .then(response => {
        setter(response.data.results)
    })
    .catch(error => {
        console.error(error)
    }))
}

export default ApiServices