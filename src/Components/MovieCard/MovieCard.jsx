import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./Moviecard.css";
import DefaultImg from "../MovieCard/Default_img.jpeg";
export default function MovieCard() {
const [Local,setLocal]  = useState([]);

    useEffect(() => {
        fetch('./data.json')
        .then(((res) => res.json() ))
        .then((data) => {console.log(data)
            setLocal(data) } 
       ).catch( err =>  console.log(err))
    },[]);

    
  return (
    <div className='card'>
      {Local.map((item) => (
<div className='movie-card'>
{/* using ternary to set default image */}
{/* <img src={item.Poster === item.Poster ? item.Poster : DefaultImg} /> */}
   <img src={item.Poster} onError={(e) => {e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1663156242158-5aff9a88b550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}/>
  <h3>{item.Title}</h3> 
  <p>{item.Year}</p>
</div>
      ))}
    </div>
  )
}
 