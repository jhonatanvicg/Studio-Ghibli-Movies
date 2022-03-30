import {useContext, useEffect, useState} from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import BtnFavorites from "components/BtnFavorites";
import AppContext from "context/AppContext";
import useGetMovies from "hooks/useGetMovies"
import axios from "axios";


let movieSelected = ''
let response = ''
let auxId = ''

const MovieDetail = ()=>{
  const[prove,setProve] = useState([])
  const router = useRouter()
  
  /* 
  if(typeof window !== "undefined"){
    console.log("Cargando componente")
    const { getMovieById } = useContext(AppContext)
    
    movieSelected = getMovieById(router.query.id)
    if(movieSelected == undefined){
      movieSelected =     JSON.parse(localStorage.getItem(router.query.id))
      auxId = router.query.id
    }
    
  }
  */
  
  
    useEffect( async()=>{
      console.log(router.query.id)
      try{
        response = await axios.get(`https://ghibliapi.herokuapp.com/films/${router.query.id}`);
        setProve(response.data)
      }catch(error){
      }
     },[router.query.id])


  return(
    <>
      <div className="Container__Detail">
        <Banner pathNow="Movie" bannerMovieSelected={prove.movie_banner} />
        <div className="MovieDetail__Container">

          <div className="MovieDetail__Info">      
            <div className="Info__Movie-Left">
              <img src={prove.image} alt="" />
              <div className="Movie-Left__Rate">
                <p>Rating Score:</p>
                <p>{prove.rt_score/10}</p>
                <img src="/images/star.png" alt="" />
              </div>
            </div>

            <div className="Info__Movie-Right">
              <div className="Movie-Right__Title">
                <p>{prove.title}</p>
              </div>
              <div className="Movie-Right__Image">  
                <img src={prove.image} alt="" />
                <div className="Movie-Left__Rate">
                <p>Rating Score:</p>
                <p>{prove.rt_score}</p>
                <img src="/images/star.png" alt="" />
              </div>
              </div>
              <div className="Movie-Right__Description">
                <p>
                {prove.description}
                </p>
              </div>
              <div className="Movie-Right__Duration">
                <p>Duration: </p>
                <p>{prove.running_time} Minutes</p>
              </div>


              <div className="Movie-Right__Button" >
                <BtnFavorites className="btn__MovieDetail" dataMovie={prove}/>
              </div>
              
              <div className="Movie-Right__More-Detail">
                <p>Original Title:</p>
                <p>{prove.original_title}</p>
              </div>
              <div className="Movie-Right__More-Detail">
                <p>Director:</p>
                <p>{prove.director}</p>
              </div>
              <div className="Movie-Right__More-Detail">
                <p>Producer:</p>
                <p>{prove.producer}</p>
              </div>
              <div className="Movie-Right__More-Detail">
                <p>Release Year:</p>
                <p>{prove.release_date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}


export default MovieDetail;