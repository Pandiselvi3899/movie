// import { Input } from '@mui/material';
import './App.css';

import { useState } from 'react';
import { MiniDrawer} from './Box'
import React from "react";

export default function App(){
  const mov = [{title:"Oh My Kadavule", picture:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4be74b22448379cf71c60d1ff7b98e9bc0d82e7825f96eee63bc5882c5b63260._UY500_UX667_RI_V_TTW_.jpg", rating: 8.1,summary:"Two childhood friends, Anu and Arjun, decide to get married. However, their marital life becomes complicated due to misunderstandings and miscommunication which leads to a divorce.",trailer:"https://www.youtube.com/embed/5lUWBM2uYaQ"},
  {title:"3", picture:"http://im.rediff.com/movies/2011/nov/28pic5.jpg", rating: 7.3,summary:"Ram and Janani are high school sweethearts who eventually get married. However, Janani is mystified when Ram commits suicide all of a sudden and she tries to find out the truth behind his death.",trailer:"https://www.youtube.com/embed/OJLzgwUMTHs"},
  {title:"Raja Rani", picture:"https://wallpapers.oneindia.com/ph-1024x768/2013/08/raja-rani_137724291400.jpg", rating: 7.6,summary:"John and Regina, who dislike each other, are forced to get married and lead troubled lives. However, things take a turn when the couple suffers a sudden tragedy.",trailer:"https://www.youtube.com/embed/wZm38_0aIXk"},
  {title:"96", picture:"https://www.quirkybyte.com/wp-content/uploads/2018/10/96-movie-750x506.jpg", rating: 8.6,summary:"K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.",trailer:"https://www.youtube.com/embed/r0synl-lI4I"},
  {title:"Sachein", picture:"https://www.91-cdn.com/metareel-images/content/backdrops-1539465164-1aIXPolVqkaeJfnq1Z0Lb36915o.jpg?tr=,w-450,q-60&version=2", rating: 7.4,summary:"Sachein and Shalini, who study in the same college, become close friends after he saves her injured father during an accident. However, their ego does not allow them to disclose their feelings.",trailer:"https://www.youtube.com/embed/3gDvH5ajShQ"},
  {title:"Ratsasan", picture:"https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2020/8/19/ratsasan.jpg", rating: 8.4,summary:"Arun gives up on his dream of becoming a filmmaker and takes up the job of a police officer after his father's death. He then attempts to track down a psychotic killer who targets schoolgirls.",trailer:"https://www.youtube.com/embed/GsrN7rNch9Y"}];

  const [movies,setMovies] = useState(mov);
  return(
    <div className="App">
        <MiniDrawer movies={movies} setMovies={setMovies}/>
    </div>
  )
}



