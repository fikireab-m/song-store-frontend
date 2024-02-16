import { createSlice } from "@reduxjs/toolkit";
import { ArtistState } from "../interfaces";

const initialState: ArtistState = {
    artists: [],
    isLoading: false,
    errorMessage: null,
};

const artistSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {
        // Get artists actions
        getArtistsRequest: (state) => {
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
    getArtistsRequest,
    getArtistsSuccess,
    getArtistsFailure,
} = artistSlice.actions;

export default artistSlice.reducer;
