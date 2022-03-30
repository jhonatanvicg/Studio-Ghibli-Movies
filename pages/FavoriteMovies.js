import Banner from "components/Banner";
import Footer from "../components/Footer";
import Movie from "components/Movie";
import Link from "next/link";
import AppContext from "context/AppContext"
import { useContext, useState } from "react";





let scrollPerClick = 250 + 20;
let scrollAmount = 0;





let scrollLeft = ()=>{
  let Carrousel = document.querySelector('.List__Container');
  Carrousel.scrollTo({
    top:0,
    left:(scrollAmount -= scrollPerClick),
    behavior:"smooth"
  })
  
  if(scrollAmount < 0){
    scrollAmount = 0
  }
  
}

let scrollRight = ()=>{
  let Carrousel = document.querySelector('.List__Container');

  if(scrollAmount <= Carrousel.scrollWidth - Carrousel.clientWidth){
    Carrousel.scrollTo({
      top:0,
      left:(scrollAmount += scrollPerClick),
      behavior:"smooth"
    })
  }

}

const FavoriteMovies = ()=>{


  const { movieListIsEmpty, settingDataFromLocalStorage, localStorageIsEmpty } = useContext(AppContext)
  const {state:{movieList}} = useContext(AppContext)
 
  if(localStorageIsEmpty()){
    console.log("estas vacio")
  }else{
    console.log("No estas vacio")
  }

  const isEmpty = movieListIsEmpty()
  if(isEmpty == 0){
      settingDataFromLocalStorage()
  }

  return(
    <>
      <div className="Container__Detail">
        <Banner pathNow="Movie" />
        <div className="FavoriteMovies">
          <div className="FavoriteMovies__Title">
            <p>Your Favorite Movies</p>
            <img src="/images/lover.png" alt="" />
          </div>

          {
             localStorageIsEmpty() ?


             <div className="FavoriteMovies__List">
                <div className="List__Container">
                  <div className="Container__Empty">
                    <img src="/images/empty.png" alt="" />
                    <p>Your Favorite List is Empty</p>
                  </div>
                </div>
              </div>
         :

              <div className="FavoriteMovies__List">
              <div className="Navigator__Left" onClick={()=>scrollLeft()}>
                <img src="images/right.png" alt="" />
              </div>
              <div className="Navigator__Right" onClick={()=>scrollRight()}>
                <img src="images/right.png" alt="" />
              </div>
              <div className="List__Container">
                {
                  movieList.map(movie=>{
                    return(
                      
                            <Movie  movieInfo={movie} key={movie.id}/>
                        
                    )
                    })

                }
              </div>
            </div>
         
          }



          
        </div>
      </div>
      <Footer />
    </>
  )

}


export default FavoriteMovies;