import React from 'react'
import { MOVIE_IMAGE_BASE_URL } from './Consts'

const MovieCard = (props) => {
    const { title, posterPath } = props


    return (
        <div>
            <p>{title}</p>
            <div>

                <img height={"300px"} width={"150px"}  src={MOVIE_IMAGE_BASE_URL +`${posterPath}`} />
            </div>
        </div>
    )
}

export default MovieCard