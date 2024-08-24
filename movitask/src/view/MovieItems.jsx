import React from 'react'

function MovieItems({movies}) {
  
  
    return (
    <>
    

    <div class="movie-card">
    <div class="movie-poster">
     <img src={"https://image.tmdb.org/t/p/w500"+ movies.poster_path} alt="" />   
 </div>
  <div className='description'>
    <h4>{movies.title}</h4>
    <p>{movies.vote_average}</p>
  </div>
</div>




    </>
  )
}

export default MovieItems