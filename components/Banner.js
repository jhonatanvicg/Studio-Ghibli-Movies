import React, { useContext } from "react";
import Image from 'next/image';
import Link from 'next/link';
import BannerImage from '../public/images/TotoroBanner.jpg';
import SearchImage from '../public/images/search.png';
import BtnFavorites from "./BtnFavorites";
import AppContext from "context/AppContext";

const Banner = ({pathNow, dataMovie, bannerMovieSelected})=>{
    
  const auxiliarData =  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "original_title": "天空の城ラピュタ",
    "original_title_romanised": "Tenkū no shiro Rapyuta",
    "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
    "movie_banner": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "running_time": "124",
    "rt_score": "95",
    "people": [
      "https://ghibliapi.herokuapp.com/people/598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "https://ghibliapi.herokuapp.com/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "https://ghibliapi.herokuapp.com/people/3bc0b41e-3569-4d20-ae73-2da329bf0786",
      "https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583",
      "https://ghibliapi.herokuapp.com/people/5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
      "https://ghibliapi.herokuapp.com/people/e08880d0-6938-44f3-b179-81947e7873fc",
      "https://ghibliapi.herokuapp.com/people/2a1dad70-802a-459d-8cc2-4ebd8821248b"
    ],
    "species": [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
    ],
    "locations": [
      "https://ghibliapi.herokuapp.com/locations/"
    ],
    "vehicles": [
      "https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb"
    ],
    "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
  }

  if(dataMovie == undefined){
    dataMovie = auxiliarData;
  }

  return(
    pathNow == "Home" ?
      <div className="Banner">
        <div className="Banner__ImageContainer">
          <img className="imageBanner" src={dataMovie.movie_banner} />
        </div>
        <div className="Banner__ImageFilter">
        </div>
        <div className="Banner__InfoMovie">
          <div className="Banner__InfoMovie--Title">
            <p>{dataMovie.title}</p>
          </div>
          <div className="Banner__InfoMovie--Description">
            <p>
              {dataMovie.description}
            </p>
          </div>
          <div className="Banner__InfoMovie--Buttons-Containers">
            <Link href={`/movie/${dataMovie.id}`}>
            <div className="btn__Primary">
                <p>More Info</p>
                <Image src={SearchImage} width={20} height={20} />
              </div>
            </Link>
            <BtnFavorites dataMovie={dataMovie}/>
          </div>
        </div>
      </div>
    :
    <div className="Banner">
      <div className="Banner__ImageContainer">
        <img className="imageBanner" src={bannerMovieSelected == undefined ? "images/TotoroBanner.jpg" : bannerMovieSelected} />
      </div>
      <div className="Banner__ImageFilter">
      </div>
      
    </div>
  )
}

export default Banner;