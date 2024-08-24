import axios from "axios";
import MovieModal from "../model/Moviesmodel";

export default class MovieController {
    
    static async fetchMovie(){
        try{
        const {data} = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7')
            
            return data.results.map(movie => new MovieModal(movie.id,movie.title,movie.poster_path,movie.vote_average))
         } 
         catch(err){
            console.log(err)
            throw err.message
         }
    }
}