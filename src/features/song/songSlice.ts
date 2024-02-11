import { createSlice } from "@reduxjs/toolkit";
import { SongState } from "../interfaces";

const initialState: SongState = {
  songs: [],
  isLoading: false,
  errorMessage: null,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {

    // get songs actions
    getSongsFetch: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    getSongsSuccess: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    getSongsFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // add song actions
    addSongFetch: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    addSongSuccess: (state, action) => {
      state.isLoading = false;
      state.songs.push(action.payload);
    },
    addSongFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // Update song actions
    updateSongFetch: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    updateSongSuccess: (state, action) => {
      const updatedSong = action.payload;
      const songIndex = state.songs.findIndex(
        (song) => song._id === updatedSong._id
      );

      if (songIndex !== -1) {
        state.songs[songIndex] = updatedSong;
        state.isLoading = false;
        state.errorMessage = null;
      }
    },
    updateSongFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // delete song actions
    deleteSongFetch: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    deleteSongSuccess: (state, action) => {
      const songId = action.payload;
      state.isLoading = false;
      state.songs = state.songs.filter((song) => song._id !== songId);
      state.errorMessage = null;
    },
    deleteSongFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  addSongFetch,
  addSongSuccess,
  addSongFailure,
  updateSongFetch,
  updateSongSuccess,
  updateSongFailure,
  deleteSongFetch,
  deleteSongSuccess,
  deleteSongFailure,
} = songSlice.actions;

export default songSlice.reducer;
