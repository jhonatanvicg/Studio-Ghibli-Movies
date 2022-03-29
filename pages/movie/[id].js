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
  console.log("Cargando componente")
  const { getMovieById } = useContext(AppContext)

  const router = useRouter()
  movieSelected = getMovieById(router.query.id)
  if(movieSelected == undefined){
    movieSelected =     {
      "id": "",
      "title": "",
      "original_title": "",
      "original_title_romanised": "",
      "image": "",
      "movie_banner": "",
      "description": "",
      "director": "",
      "producer": "",
      "release_date": "",
      "running_time": "",
      "rt_score": "",
      "people": [
        "https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
        "https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9",
        "https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11",
        "https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d",
        "https://ghibliapi.herokuapp.com/people/d39deecb-2bd0-4770-8b45-485f26e1381f",
        "https://ghibliapi.herokuapp.com/people/591524bc-04fe-4e60-8d61-2425e42ffb2a",
        "https://ghibliapi.herokuapp.com/people/c491755a-407d-4d6e-b58a-240ec78b5061",
        "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
        "https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19",
        "https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a"
      ],
      "species": [
        "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
        "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
        "https://ghibliapi.herokuapp.com/species/74b7f547-1577-4430-806c-c358c8b6bcf5"
      ],
      "locations": [
        "https://ghibliapi.herokuapp.com/locations/"
      ],
      "vehicles": [
        "https://ghibliapi.herokuapp.com/vehicles/"
      ],
      "url": "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
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