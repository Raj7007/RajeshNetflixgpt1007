import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addNewTrailer} from "../../utils/moviesSlice"
import { API_OPTIONS } from "../Consts";
const useGetMovies = (movieId) => {
  const dispatch = useDispatch()
  const getMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId.movieId + "/videos?language=en-US", API_OPTIONS)
    const json = await data.json();
    console.log("get movies api ", json);
    if (Array.isArray(json.results)) {
      const filterData = json.results.filter((video) => video.type == "Trailer")
      const trailer = filterData.length ? filterData[0] : json.results[0]
      dispatch(addNewTrailer(trailer))
    }
  }

  useEffect(() => {
    getMovies()
  }, [])
}

export default useGetMovies;