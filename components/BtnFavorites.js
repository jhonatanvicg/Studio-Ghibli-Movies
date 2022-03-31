import { useContext } from "react";
import Image from 'next/image';
import AppContext from "context/AppContext";
import Star from '../public/images/star.png';
import Trash from '../public/images/trash-can.png';


const BtnFavorites = ({dataMovie})=>{
  
  const { addToMovieList,ifExist,removeFromMovieList } = useContext(AppContext);

  let buttonText = '';
  let imageButton;

  const verifyingButtonText = (dataMovie)=>{
    let isInFavoriteList = ifExist(dataMovie.id)
    if(isInFavoriteList){
      buttonText = "Remove From Favorite Movies"
      imageButton = Trash
    }else{
      buttonText = "Add to Favorite Movies"
      imageButton = Star
    }
  }

  verifyingButtonText(dataMovie);

  const handleClick = dataMovieFromAnyPlace =>{
    let isInFavoriteList = ifExist(dataMovieFromAnyPlace.id)
    if(isInFavoriteList){
      buttonText = "Remove From Favorite Movies"
      imageButton = Trash
      removeFromMovieList(dataMovieFromAnyPlace.id)
    }else{
      buttonText = "Add to Favorit Movies"
      imageButton = Star

      addToMovieList(dataMovieFromAnyPlace)
    }
	}



  
  return (
      <div className="btn__Primary btn__Primary--Outline" onClick={()=> handleClick(dataMovie)}>
          <p>{buttonText}</p>
          <Image src={imageButton} width={25} height={25} />
      </div>  

  )
}

export default BtnFavorites;