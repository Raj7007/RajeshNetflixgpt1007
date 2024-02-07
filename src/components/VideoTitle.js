import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (

    <div className='absolute w-screen aspect-video pt-36 px-24 text-white bg-gradient-to-r from-black'>
      <div style={{marginTop:"-141px"}}>
      </div>

    <h1 className='text-6xl font-bold no-underline'>{title}</h1>
    <p className='py-6 text-lg w-1/4 no-underline'>{overview}</p>

    <div>
    <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-50'>Play</button>
    <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-50'>MoreInfo</button>
    </div>


    </div>
  )
}

export default VideoTitle