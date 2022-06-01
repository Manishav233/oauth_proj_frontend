import React from "react";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <div className="Card">
    <Link className="Clink" to={`/movie/${movie.id}`}>
      <h2 className="title">{movie.Movie_Name}</h2>
      <img className="image" src={movie.Movie_Poster} alt="Movie Poster" />
      <p className="desc">{movie.Summary}</p>
      <button className="Button">Read More</button>
      </Link>
    </div>
  );
}
