import { useState } from "react";

const initialState = {
  movieList: []
}

const useInitialState =()=>{
  const [state,setState] = useState(initialState)
  const [actualMovieData,setactualMovieData] = useState([])

  const setMovieData = (data)=>{
    setactualMovieData(data)
  }


  const getMovieById = (id)=>{
    const movie = actualMovieData.find((movie,index)=>{
      return movie.id == id
    })

    return movie
  }


  const ifExist = (id)=>{
    let movieDuplicated = false;

    let isDuplicated = state.movieList.forEach(movie=>{
      if(movie.id == id){
        movieDuplicated = true;
      }
    })

    return movieDuplicated;
  }


  const addToLocalStorage = (movie)=>{
      if (typeof window !== "undefined") {
      let indexValue = movie.id
      localStorage.setItem(indexValue,JSON.stringify(movie))
    }
  }


  const movieListIsEmpty  = ()=>{
    return state.movieList.length
  }

  const settingDataFromLocalStorage = ()=>{
    let temporaryArray = [];
    if (typeof window !== "undefined") {
      
      for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key) || key == "ally-supports-cache") {
          continue; // se salta claves como "setItem", "getItem" etc
        }
          temporaryArray.push(JSON.parse(localStorage.getItem(key)))
         
          setState({
            movieList: temporaryArray
          })
      }
    }
  }


  const browserDetect = ()=>{
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
      }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
      }else if(userAgent.match(/opr\//i)){
        browserName = "opera";
      } else if(userAgent.match(/edg/i)){
        browserName = "edge";
      }else{
        browserName="No browser detection";
      }


      return browserName
  }


  const localStorageIsEmpty = ()=>{
    let browserName = '';
    let emptyLocal = false;
    if (typeof window !== "undefined") {
      browserName = browserDetect()
      switch(browserName){
        case 'firefox':
          if(localStorage.length == 1){
            emptyLocal = true
          }
        break;
        case 'chrome':
          if(localStorage.length == 0){
            emptyLocal = true
          }
        break;
        default:
          emptyLocal = false;
        break;
      }  
      return emptyLocal
    }
  }

  const addToMovieList = (payload)=>{
    const wouldAddMovie = ifExist(payload.id);

    if(!wouldAddMovie){
      addToLocalStorage(payload)
      setState({
        ...state,
        movieList: [...state.movieList,
          payload]
      })
    }
    }

  const removeFromMovieList = (movieId)=>{
    if (typeof window !== "undefined") {

      setState({
        ...state,
        movieList: state.movieList.filter((items,index)=> items.id != movieId)
      });
      localStorage.removeItem(movieId)
    }    
  }

  return {
    state,
    addToMovieList,
    removeFromMovieList,
    movieListIsEmpty,
    settingDataFromLocalStorage,
    localStorageIsEmpty,
    actualMovieData,
    getMovieById,
    setMovieData,
    ifExist
  }
}

export default useInitialState;












