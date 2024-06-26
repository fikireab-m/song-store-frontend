import axios, { AxiosResponse } from "axios";
import { Song, Album, Artist } from "../features/interfaces";
const BASE_URL = "http://localhost:5000/api";
// const BASE_URL = "https://addiss-software-test.onrender.com";
type Qparams = {
  key?: string,
  title?: string,
  album?: string,
  artist?: string,
  genres?: string[]
};
/**
 * Song related calls
 */
export const getSongs = (): Promise<AxiosResponse<Song[]>> => {
  const url = `${BASE_URL}/songs`
  return axios.get<Song[]>(url);
};
/**
 * Song related calls
 */
export const searchSongs = (qParams: Qparams): Promise<AxiosResponse<Song[]>> => {
  return axios.get<Song[]>(`${BASE_URL}/songs/search`, {
    params: {
      key: qParams.key,
      title:qParams.title,
      artist:qParams.artist,
      album:qParams.album,
      genres:qParams.genres
    }
  });
};

export const addSong = (song: Song): Promise<AxiosResponse<Song>> => {
  return axios.post<Song>(`${BASE_URL}/songs/`, song);
};

export const updateSong = (song: Song): Promise<AxiosResponse<void>> => {
  return axios.put(`${BASE_URL}/songs/${song._id}`, song);
};

export const deleteSong = (song: Song): Promise<AxiosResponse<string>> => {
  return axios.delete(`${BASE_URL}/songs/${song._id}`);
};

/**
 * Album call
 */
export const getAlbums = (): Promise<AxiosResponse<Album[]>> => {
  return axios.get<Album[]>(`${BASE_URL}/albums`);
};

/**
 * Artist call
 */
export const getArtists = (): Promise<AxiosResponse<Artist[]>> => {
  return axios.get<Artist[]>(`${BASE_URL}/artists`);
};

/**
 * Genre call
 */
export const getGenres = (): Promise<AxiosResponse<string[]>> => {
  return axios.get<string[]>(`${BASE_URL}/genres`);
};
