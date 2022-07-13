export const API_KEY = process.env.REACT_APP_APIKEY;
export const baseUrl = "https://api.themoviedb.org/3";

export const Requests = {
    movie: {
        popular: `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024%7C287501`,

        topRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024%7C287501`,

        actionAndAdvenure: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,28&with_keywords=210024%7C287501`,
        
        comedy: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,35&with_keywords=210024%7C287501`,

        romance: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,10749&with_keywords=210024%7C287501`,

        drama: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,18&with_keywords=210024%7C287501`,

        fantasyAndSciFi: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,14&with_keywords=210024%7C287501`,

        family: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,10751&with_keywords=210024%7C287501`
    },

    tv: {
        popular: `${baseUrl}/tv/popular?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024%7C287501`,

        topRated: `${baseUrl}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1&with_genres=16&with_keywords=210024%7C287501`,

        actionAndAdvenure: `${baseUrl}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,10759&with_keywords=210024%7C287501`,
        
        comedy: `${baseUrl}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,35&with_keywords=210024%7C287501`,

        romance: `${baseUrl}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,10749&with_keywords=210024%7C287501`,

        drama: `${baseUrl}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,18&with_keywords=210024%7C287501`,

        fantasyAndSciFi: `${baseUrl}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,10765&with_keywords=210024%7C287501`,

        family: `${baseUrl}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_genres=16,10751&with_keywords=210024%7C287501`
    },
}