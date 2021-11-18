import * as React from 'react';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

    
export function MovieEdit({ movies, setMovies }) {
    const history = useHistory();
    const { id } = useParams();
    const movie = movies[id];
    const [title, setTitle] = useState(movie.title);
    const [picture, setPicture] = useState(movie.picture);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);


    return (
        <div className="movie-edit">
            <TextField className="movie-title" value={title} placeholder="Edit Movie title"
                onChange={(event) => { setTitle(event.target.value); }} variant="standard" />
            <TextField className="movie-title" value={picture} placeholder="Edit Movie picture"
                onChange={(event) => { setPicture(event.target.value); }} variant="standard" />
            <TextField className="movie-title" value={rating} placeholder="Edit Movie Rating"
                onChange={(event) => { setRating(event.target.value); }} variant="standard" />
            <TextField className="movie-title" value={summary} placeholder="Edit Movie summary"
                onChange={(event) => { setSummary(event.target.value); }} variant="standard" />
            <TextField className="movie-title" value={trailer} placeholder="Edit Movie trailer"
                onChange={(event) => { setTrailer(event.target.value); }} variant="standard" />
            <Button onClick={() => {
                const mcopy = [...movies];
                mcopy[id] = {title,picture,rating,summary,trailer};
                setMovies(mcopy);
                history.push("/Mvs")
            }} variant="contained" className="add-button">Edit Movie</Button>
        </div >
    );
}