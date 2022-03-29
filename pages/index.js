import React,{useEffect, useState, useContext} from "react";
import Main from "../Container/Main";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import useGetMovies from "hooks/useGetMovies";
import AppContext from "context/AppContext";

const HomePage = ()=>{

  const { setMovieData, movieListIsEmpty, settingDataFromLocalStorage } = useContext(AppContext)
  const movies = useGetMovies('https://ghibliapi.herokuapp.com/films')
  setMovieData(movies)
  const isEmpty = movieListIsEmpty()
  if(isEmpty == 0){
    settingDataFromLocalStorage() 
  }
  
  return(
    <>
      <div className="HeaderContainer">
        <Banner pathNow="Home" dataMovie={movies[ Math.floor(Math.random() * movies.length + 1) ]} />
      </div>
      <Main movies={movies} />
      <Footer />
    </>
  )
}


export default HomePage;