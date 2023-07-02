import Config from "./config/config.json";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${Config.API_KEY}&language=en-US`,
    fetchNetflixOriginal:`/discover/tv?api_key=${Config.API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${Config.API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${Config.API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${Config.API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${Config.API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${Config.API_KEY}&with_genres=10749`,
    fetchDocumentries:`/discover/movie?api_key=${Config.API_KEY}&with_genres=99`,
    fetchTrailers:`?api_key=${Config.API_KEY}&language=en-US&append_to_response=videos`,
};

export default requests;