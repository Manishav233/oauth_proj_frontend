import React from 'react'
import { useLocation } from "react-router";
import { movies } from "../data";
import { Link } from 'react-router-dom';

export default function Movie() {
// const movie=movies[0];
     const location = useLocation();
     const path = location.pathname.split("/")[2];
  
     const movie = movies.find((p) => p.id.toString() === path);
  
     console.log(location); // we get object with /movie/id as pathname
  return (
    <div className='Movie'>
      <img className="Mimage" src={movie.Movie_Poster} alt="Movie_poster"/>
      <h2 className="Mtitle" style={{color:'teal'}}>{movie.Movie_Name}</h2>
      <p className="Mdesc">{movie.Long_Summary}</p>
   <Link to='/'><button type="button" class="btn btn-primary">Back</button></Link>   
   
   </div>
  )
}
