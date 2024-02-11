import { call, all, put, takeEvery } from "redux-saga/effects";
import {
  getSongsSuccess,
  getSongsFailure,
  addSongSuccess,
  addSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
  updateSongSuccess,
  updateSongFailure,
} from "./song/songSlice";

import { addSong, deleteSong, updateSong, getSongs, getAlbums, getArtists } from "../api";
import { AxiosResponse } from "axios";
import { Album, Artist, Song, SongActionType } from "./interfaces";
import { getAlbumsFailure, getAlbumsSuccess } from "./album/albumSlice";
import { getArtistsFailure, getArtistsSuccess } from "./artist/artistSlice";

// Saga for fetching songs
function* fetchSongs() {
  try {
    const response: AxiosResponse<Song[]> = yield call(getSongs);
    const songs: Song[] = response.data;
    yield put(getSongsSuccess(songs));
  } catch (e: unknown) {
    yield put(getSongsFailure(e));
  }
}

function* addsong(action: SongActionType) {
  try {
    const response: AxiosResponse<Song> = yield call(
      addSong,
      action.payload
    );
    const song: Song = response.data;
    yield put(addSongSuccess(song));
  } catch (e: unknown) {
    yield put(addSongFailure(e));
  }
}

function* updatesong(action: SongActionType) {
  try {
    const song: AxiosResponse<Song> = yield call(updateSong, action.payload);
    yield put(updateSongSuccess(song.data));
  } catch (e: unknown) {
    yield put(updateSongFailure(e));
  }
}

function* deletesong(action: SongActionType) {
  try {
    const songs: AxiosResponse<string> = yield deleteSong(action.payload);
    yield put(deleteSongSuccess(songs));
  } catch (e: unknown) {
    yield put(deleteSongFailure(e));
  }
}

// Saga for fetching albums
function* fetchAlbums() {
  try {
      const response: AxiosResponse<Album[]> = yield call(getAlbums);
      const albums: Album[] = response.data;
      yield put(getAlbumsSuccess(albums));
  } catch (e: unknown) {
      yield put(getAlbumsFailure(e));
  }
}

// Saga for fetching artists
function* fetchArtists() {
  try {
      const response: AxiosResponse<Album[]> = yield call(getArtists);
      const artists: Artist[] = response.data;
      yield put(getArtistsSuccess(artists));
  } catch (e: unknown) {
      yield put(getArtistsFailure(e));
  }
}
// watcher saga
function* watcherSaga() {
  yield takeEvery("songs/addSongFetch", addsong);
  yield takeEvery("songs/getSongsFetch", fetchSongs);
  yield takeEvery("songs/deleteSongFetch", deletesong);
  yield takeEvery("songs/updateSongFetch", updatesong);
  yield takeEvery("albums/getAlbumsFetch", fetchAlbums);
  yield takeEvery("artists/getArtistsFetch", fetchArtists);
}

//root saga
export default function* rootSaga() {
  yield all([watcherSaga()]);
}


