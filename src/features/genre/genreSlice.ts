import { createSlice } from "@reduxjs/toolkit";
import { GenreState } from "../interfaces";

const initialState: GenreState = {
    genres: [],
    isLoading: false,
    errorMessage: null,
};

const genreSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {
        // get genres actions
        getGenresFetch: (state) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        getGenresSuccess: (state, action) => {
            state.isLoading = false;
            state.genres = action.payload;
        },
        getGenresFailure: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
    },
});

export const {
    getGenresFetch,
    getGenresSuccess,
    getGenresFailure,
} = genreSlice.actions;

export default genreSlice.reducer;
