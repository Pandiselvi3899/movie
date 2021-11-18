import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

export function MovieInput({ movies, setMovies }) {
  const history = useHistory();
  const [title, setTitle] = useState(movies[0].title);
  const [picture, setPicture] = useState(movies[0].picture);
  const [rating, setRating] = useState(movies[0].rating);
  const [summary, setSummary] = useState(movies[0].summary);
  const [trailer,setTrailer] = useState(movies[0].trailer);
  return (
    <div className="movie-input">
    <TextField placeholder="Enter Movie Title"
      onChange={(event) => setTitle(event.target.value)} variant="standard" />
    <TextField placeholder="Enter Movie image address"
      onChange={(event) => setPicture(event.target.value)} variant="standard"/>
    <TextField placeholder="Enter Movie Rating"
      onChange={(event) => setRating(event.target.value)} variant="standard" />
    <TextField placeholder="Enter Movie Summary"
      onChange={(event) => setSummary(event.target.value)} variant="standard" />
    <TextField placeholder="Enter Movie Trailer"
      onChange={(event) => setTrailer(event.target.value)} variant="standard" />      
    <Button onClick={() => {
      setMovies([...movies, { title, picture, rating, summary, trailer }]);
      history.push("/Mvs")

    }
    } variant="contained" className="add-button">Add Movie</Button>
    
  </div>);
}