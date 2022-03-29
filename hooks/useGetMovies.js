import { useEffect, useState } from "react";
import axios from 'axios';


const useGetMovies =  (API)=>{
  const [movies,setMovies] = useState([])

	useEffect( async ()=>{
		const response = await axios.get(API);
		setMovies(response.data);
	},[])

  return movies
}

export default useGetMovies;