import { useContext } from "react";
import Image from 'next/image';
import AppContext from "context/AppContext";
import Star from '../public/images/star.png';


const BtnFavorites = ({dataMovie})=>{
  
  const { addToMovieList,ifExist } = useContext(AppContext);

  let buttonText = '';

  const verifyingButtonText = (dataMovie)=>{
    let isInFavoriteList = ifExist(dataMovie.id)
    if(isInFavoriteList){
      buttonText = "In Favorites List"
    }else{
      buttonText = "Add to Favorite Movies"
    }
  }

  verifyingButtonText(dataMovie);

  const handleClick = dataMovieFromAnyPlace =>{
    console.log("Verificando existencia")
    console.log(isInFavoriteList)
    let isInFavoriteList = ifExist(dataMovieFromAnyPlace.id)
    if(isInFavoriteList){
      buttonText = "In Wish List"
    }else{
      buttonText = "Add to Favorit Movies"
      addToMovieList(dataMovieFromAnyPlace)
    }
	}



  
  return (
      <div className="btn__Primary btn__Primary--Outline" onClick={()=> handleClick(dataMovie)}>
          <p>{buttonText}</p>
          <Image src={Star} width={20} height={20} />
      </div>  

  )
}

export default BtnFavorites;