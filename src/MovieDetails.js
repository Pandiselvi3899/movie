import * as React from 'react';
import { useParams } from "react-router-dom";

export function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  return (
    <div className="movie-div-select">
      <h1 className="movie-title"> {movie.title} </h1>
      <iframe width="530" height="330" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3 className="movie-rating"> 🌟: {movie.rating} </h3>
      <p> {movie.summary} </p>
    </div>
  );
}