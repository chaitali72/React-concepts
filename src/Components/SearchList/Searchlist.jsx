import React from 'react'
import MovieCard from '../MovieCard/MovieCard';

export default function Searchlist({filterdList}) {
    const filtered = filterdList.map(item => <MovieCard key={item.imdbID} /> )
  return (
    <div>
{filtered}
    </div>
  )
}
