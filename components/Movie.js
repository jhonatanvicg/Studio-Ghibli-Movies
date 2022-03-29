import React, {useContext} from "react";
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import Star from '../public/images/star.png';
import Close from '../public/images/close.svg';
import AppContext from "context/AppContext";

const Movie = ({movieInfo})=>{

  let globalClose = false;
  const { removeFromMovieList } = useContext(AppContext);

  function handleClick(){
    if(globalClose){
      //Eliminamos el elemento de la lista
      removeFromMovieList(movieInfo.id)
    }else{
      Router.push(`/movie/${movieInfo.id}`)
    }
  }


  return(
    <div className="Movie Movie--Favorite" onClick={()=>{handleClick()}} >
      {
        Router.pathname == "/FavoriteMovies" ? 
          <div className="deleteMovie" onClick={()=>globalClose = true}>
            <Image src={Close} width={25} height={25} alt="Delete Movie"/>
          </div>
        :
        null
      }
      <div className="Movie__ContainerImage">
        <img src={movieInfo.image} alt="" />
      </div>
      <div className="Movie__HoverContainer">
        <div className="HoverContainer__BasicInfo">
          <div className="BasicInfo__Title">
            <p>{movieInfo.title}</p>
          </div>
          <div className="BasicInfo__RaitingContainer">
            <p className="RaitingContainer__Score">Rating Score:</p>
            <div className="BasicInfo__RaitingContainerNumber">
              <p className="RaitingContainer__ScoreNumber">{movieInfo.rt_score/10}</p>
              <Image src={Star} width={15} height={15} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;