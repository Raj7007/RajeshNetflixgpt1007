import React from 'react'
import { useSelector } from 'react-redux'
import useGetMovies from './hooks/useGetMovies'


const VideoBackground = (movieId) => {
  useGetMovies(movieId)
  const trailerkey= useSelector((store)=>store.movies?.trailerPlayList?.key)

  return (
    <div className=''>

      <iframe
       className=' w-screen aspect-video'
        src={"https://www.youtube.com/embed/r_pUE7OcN8w?si="+trailerkey+" &autoplay=1&mute=1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default VideoBackground