
import axios from "axios"

  const axiosIns = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/"
})

export default axiosIns