import axios, { AxiosResponse } from "axios";
import { Song, Album, Artist } from "../features/interfaces";
// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://addiss-software-test.onrender.com";

/**
 * Song related calls
 */
export const getSongs = (params?: {
  artist?: string;
  album?: string;
  genre?: string;
}): Promise<AxiosResponse<Song[]>> => {
  let url = `${BASE_URL}/songs`
  url = new URLSearchParams(params).toString() ? `${url}?${new URLSearchParams(params).toString()}` : url
  return axios.get<Song[]>(url);
};

export const addSong = (song: Song): Promise<AxiosResponse<Song>> => {
  return axios.post<Song>(`${BASE_URL}/songs/add`, song);
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
