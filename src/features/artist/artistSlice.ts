import { createSlice } from "@reduxjs/toolkit";
import { ArtistState } from "../interfaces";

const initialState: ArtistState = {
    artists: [],
    isLoading: false,
    errorMessage: null,
};

const albumSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {
        // Get artists actions
        getArtistsFetch: (state) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        getArtistsSuccess: (state, action) => {
            state.isLoading = false;
            state.artists = action.payload;
        },
        getArtistsFailure: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
    },
});

export const {
    getArtistsFetch,
    getArtistsSuccess,
    getArtistsFailure,
} = albumSlice.actions;

export default albumSlice.reducer;
