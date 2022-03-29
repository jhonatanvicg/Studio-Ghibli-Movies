import React, { useContext } from "react";
import Image from 'next/image'
import Link from 'next/link'
import HomeImage from '../public/images/HomeImg.png'
import Basket from '../public/images/basket.svg'
import AppContext from "context/AppContext";

const NavBar = ()=>{

  const {state:{movieList}} = useContext(AppContext);
  return(
    <div className="Navbar">
      <Link href="/">
        <div className="Navbar__home">
          <div className="Navbar__home--string">
            <p>Home</p>
          </div>
          <div className="Navbar__home--image">
            <Image width={35} height={35} src={HomeImage} alt="" />
          </div>
        </div>
      </Link>

      <Link href="/FavoriteMovies">
        <div className="Navbar__Fav">
          <div className="Navbar__fav--String">
            <p>Favorite Movies</p>
          </div>
          <div className="Navbar__fav--image">
            <Image  width={30} height={30} src={Basket} alt="" />
            {
              movieList.length > 0 ? <div className="Navbar__fav--image-counter"><p>{movieList.length}</p></div> : null
            }
          </div>
        </div>
      </Link>
    </div>
  )
}


export default NavBar;