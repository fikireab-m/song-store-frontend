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

import { addSong, deleteSong, updateSong, getSongs, getAlbums, getArtists, getGenres } from "../api";
import { AxiosResponse } from "axios";
import { Album, Artist, Song, SongActionType } from "./interfaces";
import { getAlbumsFailure, getAlbumsSuccess } from "./album/albumSlice";
import { getArtistsFailure, getArtistsSuccess } from "./artist/artistSlice";
import { getGenresFailure, getGenresSuccess } from "./genre/genreSlice";

/**
 * Saga for fetching songs
 */
function* fetchSongs() {
  // const { payload } = action;
  try {
    // let params: Record<string, string> = {};
    // if (payload && Object.keys(payload).length > 0) {
    //   params = payload;
    // }
    const response: AxiosResponse<Song[]> = yield call(getSongs);
    const songs: Song[] = response.data;
    yield put(getSongsSuccess(songs));
  } catch (e: unknown) {
    yield put(getSongsFailure(e));
  }
}
/**
 * Saga to add a new song
 * @param action 
 * @returns 
 */
function* addsong(action: SongActionType) {
  try {
    const response: AxiosResponse<Song> = yield call(
      addSong,
      action.payload
    );
    const song: Song = response.data;
    yield put(addSongSuccess(song));
    return song;
  } catch (e: unknown) {
    yield put(addSongFailure(e));
  }
  return;
}
/**
 * Saga to edit a song
 * @param action 
 */
function* updatesong(action: SongActionType) {
  try {
    const song: AxiosResponse<Song> = yield call(updateSong, action.payload);
    yield put(updateSongSuccess(song.data));
  } catch (e: unknown) {
    yield put(updateSongFailure(e));
  }
}
/**
 * Saga to delete a song
 * @param action 
 */
function* deletesong(action: SongActionType) {
  try {
    const song: AxiosResponse<string> = yield deleteSong(action.payload);
    yield put(deleteSongSuccess(song));
  } catch (e: unknown) {
    yield put(deleteSongFailure(e));
  }
}

/**
 * Saga for fetching albums
 */
function* fetchAlbums() {
  try {
    const response: AxiosResponse<Album[]> = yield call(getAlbums);
    const albums: Album[] = response.data;
    yield put(getAlbumsSuccess(albums));
  } catch (e: unknown) {
    yield put(getAlbumsFailure(e));
  }
}

/**
 * Saga to fetch artists
 */
function* fetchArtists() {
  try {
    const response: AxiosResponse<Album[]> = yield call(getArtists);
    const artists: Artist[] = response.data;
    yield put(getArtistsSuccess(artists));
  } catch (e: unknown) {
    yield put(getArtistsFailure(e));
  }
}

/**
 * Saga for fetching genres
 */
function* fetchGenres() {
  try {
    const response: AxiosResponse<string[]> = yield call(getGenres);
    const genres: string[] = response.data;
    yield put(getGenresSuccess(genres));
  } catch (e: unknown) {
    yield put(getGenresFailure(e));
  }
}
/**
 * The watcher saga
 */
function* watcherSaga() {
  yield takeEvery("songs/addSongRequest", addsong);
  yield takeEvery("songs/getSongsRequest", fetchSongs);
  yield takeEvery("songs/deleteSongRequest", deletesong);
  yield takeEvery("songs/updateSongRequest", updatesong);
  yield takeEvery("albums/getAlbumsRequest", fetchAlbums);
  yield takeEvery("artists/getArtistsRequest", fetchArtists);
  yield takeEvery("genres/getGenresRequest", fetchGenres);
}

/**
 * The root saga to be passed to the saga middleware
 */
export default function* rootSaga() {
  yield all([watcherSaga()]);
}


