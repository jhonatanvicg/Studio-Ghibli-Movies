import React, {useState, useEffect} from "react";
import Link from 'next/link';
import Movie from "./Movie";

const MovieList = ({movies})=>{



  return(
    <div className="MovieList">
      <div className="MovieList__Title">
        <p>Studios Ghibli Collection</p>
      </div>
      <div className="MovieList__Container">
        {
          movies.map(movie=>{
            return(
         
                  <Movie movieInfo={movie} key ={movie.id}/>
           

            )
          })
        }
      </div>
    </div>
  )
}

export default MovieList;