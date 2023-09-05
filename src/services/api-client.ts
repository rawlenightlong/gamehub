import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "aac155adfca0434dafe331cab90e6db3"
    }
})