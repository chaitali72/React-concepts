import React from 'react'
import { useState } from 'react';
import "./Search.css";


export default function () {
    const[search,setSearch] = useState("");
   
  return (
    <div className='search'>
        <input type="search" className='searchbar-input' placeholder='Search movies here...' />
        <span> <i class="fa-solid fa-magnifying-glass"></i></span>
<div className='movie-listitems'>
 
</div>
    </div>
  )
}
