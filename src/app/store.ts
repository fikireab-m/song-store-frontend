/* eslint-disable no-unused-vars */
import createSagaMiddleWare from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import SongReducer from "../features/song/songSlice";
import AlbumReducer from "../features/album/albumSlice";
import ArtistReducer from "../features/artist/artistSlice";
import Saga from "../features/saga";

const saga = createSagaMiddleWare();
export const store = configureStore({
  reducer: {
    songs: SongReducer,
    albums: AlbumReducer,
    artists: ArtistReducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: false,
}).concat(saga),
});

saga.run(Saga);
