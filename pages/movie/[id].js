import {useContext, useEffect} from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import BtnFavorites from "components/BtnFavorites";
import AppContext from "context/AppContext";
import useGetMovies from "hooks/useGetMovies"


let movieSelected = ''

const MovieDetail = ()=>{

  if(typeof window !== "undefined"){
    console.log("Cargando componente")
    const { getMovieById } = useContext(AppContext)
  
    const router = useRouter()
    movieSelected = getMovieById(router.query.id)
    if(movieSelected == undefined){
      movieSelected =     JSON.parse(localStorage.getItem(router.query.id))
    }

  }


  return(
    <>
      <div className="Container__Detail">
        <Banner pathNow="Movie" bannerMovieSelected={movieSelected.movie_banner} />
        <div className="MovieDetail__Container">

          <div className="MovieDetail__Info">      
            <div className="Info__Movie-Left">
              <img src={movieSelected.image} alt="" />
              <div className="Movie-Left__Rate">
                <p>Rating Score:</p>
                <p>{movieSelected.rt_score/10}</p>
                <img src="/images/star.png" alt="" />
              </div>
            </div>

            <div className="Info__Movie-Right">
              <div className="Movie-Right__Title">
                <p>{movieSelected.title}</p>
              </div>
              <div className="Movie-Right__Image">  
                <img src={movieSelected.image} alt="" />
                <div className="Movie-Left__Rate">
                <p>Rating Score:</p>
                <p>{movieSelected.rt_score}</p>
                <img src="/images/star.png" alt="" />
              </div>
              </div>
              <div className="Movie-Right__Description">
                <p>
                {movieSelected.description}
                </p>
              </div>
              <div className="Movie-Right__Duration">
                <p>Duration: </p>
                <p>{movieSelected.running_time} Minutes</p>
              </div>


              <div className="Movie-Right__Button" >
                <BtnFavorites className="btn__MovieDetail" dataMovie={movieSelected}/>
              </div>
              
              <div className="Movie-Right__More-Detail">
                <p>Original Title:</p>
                <p>{movieSelected.original_title}</p>
              </div>
              <div className="Movie-Right__More-Detail">
                <p>Director:</p>
                <p>{movieSelected.director}</p>
              </div>
              <div className="Movie-Right__More-Detail">
                <p>Producer:</p>
                <p>{movieSelected.producer}</p>
              </div>
              <div className="Movie-Right__More-Detail">
                <p>Release Year:</p>
                <p>{movieSelected.release_date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}


export default MovieDetail;