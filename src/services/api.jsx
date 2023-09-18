import axios from "axios";

// base da url: https://api.themoviedb.org/3/
// url da api: /movie/now_playing?api_key=cddbb0e44307d77c59eef7c6ecf25c5c&language=pt-BR

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export default api;