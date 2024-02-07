import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerPlayList:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addNewTrailer:(state,action)=>{
            state.trailerPlayList=action.payload
        }
    }

});
export const {addNowPlayingMovies,addNewTrailer}=moviesSlice.actions;
export default moviesSlice.reducer;

