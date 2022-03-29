import React from "react";
import MovieList from "../components/MovieList";

const Main = ({movies})=>{
  return(
    <>
      <div className="Main">
        <MovieList movies={movies} />
      </div>
    </>
  )
}

export default Main;