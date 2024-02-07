import React from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import Header from './Header'

const MainConatiner = () => {

  const firstMovieList = useSelector((store) => store.movies?.nowPlayingMovies)
  if (firstMovieList == null) return
  const { title, overview, id } = firstMovieList[0]
  return (
    <div>
       <Header />
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainConatiner