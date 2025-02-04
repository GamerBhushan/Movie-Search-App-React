
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;


const movieSearchApi = "http://www.omdbapi.com/?t=[]&apikey="+ API_KEY;

export async function fetchMovieDetailsByTitle(movieTitle:any) {
    try {
        const req = movieSearchApi.replace("[]",movieTitle);
        const response = await fetch(req);
        if(!response.ok){
            // console.log(`HTTP error! status: ${response.status}`);
            // return ({ error: response.status });
            throw response.status;
        }
        // console.log(req);
        const data = await response.json();
        return data;
    } catch (error) {
        // return ({ error: error });
        throw error;
    }
}