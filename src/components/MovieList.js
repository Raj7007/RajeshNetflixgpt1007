import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieList = () => {

    const movieList= useSelector((store)=>store.movies?.nowPlayingMovies)
  return (
    <div className='flex'>{movieList?.map((data)=><MovieCard title={"Now Playing Movies"} posterPath={data.poster_path} />)}</div>
  )
}

export default MovieList