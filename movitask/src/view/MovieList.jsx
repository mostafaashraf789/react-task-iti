
import React, { useEffect, useState } from 'react'
import MovieController from '../controller/MovieController'
import MovieItems from './MovieItems';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

function MovieList() {
    
const [data, setdata] = useState({movies:[],loading:true,error:null})

const fetchMovies = async() => {
try{
 const movies =   await MovieController.fetchMovie()
    setdata({movies:movies,loading:false})

}
    catch(error){
        setdata({error:error.message,loading:false})
    }
 }
useEffect(() => { 
    setTimeout(() => {
        fetchMovies()
    }, 3000);
 },[data])
 

return (
  
data.loading?
<Loading/>
:
<div className='container'>
     <Header/>
     <p></p>
     <p>{data.error?data.error.message:null}</p>
    <div className='Items'>
         {data.movies.map((movie) =>  <MovieItems movies={movie}/> )}
    </div>
   <Footer/>
   </div>


  )
}

export default MovieList