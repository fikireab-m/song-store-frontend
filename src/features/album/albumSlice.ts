import { createSlice } from "@reduxjs/toolkit";
import { AlbumState } from "../interfaces";

const initialState: AlbumState = {
    albums: [],
    isLoading: false,
    errorMessage: null,
};

const albumSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {
        // Get albums actions
        getAlbumsFetch: (state) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        getAlbumsSuccess: (state, action) => {
            state.isLoading = false;
            state.albums = action.payload;
        },
        getAlbumsFailure: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
    },
});

export const {
    getAlbumsFetch,
    getAlbumsSuccess,
    getAlbumsFailure,
} = albumSlice.actions;

export default albumSlice.reducer;