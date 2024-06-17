import axios from "axios"

const fetchData = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export default fetchData
