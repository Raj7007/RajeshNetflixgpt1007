import React from 'react'
import useNowPlayingMovies from "./hooks/useNowPlayingMovies"
import MainConatiner from './MainConatiner'
import SecondaryContainer from './SecondaryContainer'
import Header from './Header'
const Browse = () => {

  useNowPlayingMovies()

  return (
    <div>
      <Header/>
      <MainConatiner/>
      <div className=''>
      <MainConatiner/>
      </div>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse