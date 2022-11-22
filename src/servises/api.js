import axios from 'axios';
const KEY_API = '301d018a3b09052968e9ce18b1793bab'

axios.defaults.baseURL='https://api.themoviedb.org/3'


export const getTrendingFilms = async () => {
    const { data: { results} } = await axios.get(`/trending/movie/day?api_key=${KEY_API}`);
    
    return results;
}

export const getFilmsById = async (id) => {
    const {data} = await axios.get(`/movie/${id}?api_key=${KEY_API}&language=en-US`);
    return data;
}

export const getFilmsByQuery = async query => {
    const { data: {results} } = await axios.get(`/search/movie?api_key=${KEY_API}&query=${query}&language=en-US&page=1&include_adult=false`);
    return results
}

export const getCast = async movieId => {
    const {data:{cast}} = await axios.get(`/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`);
   
    return cast;
}

export const getReviews = async movieId => {
    const {data} = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`);

    return data.results;
}