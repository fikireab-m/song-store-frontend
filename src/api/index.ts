import axios, { AxiosResponse } from "axios";
import { Song, Album, Artist } from "../features/interfaces";
const baseUrl = "http://localhost:5000";

/**
 * Song related calls
 */
export const getSongs = (): Promise<AxiosResponse<Song[]>> => {
  return axios.get<Song[]>(`${baseUrl}/songs`);
};

export const addSong = (song: Song): Promise<AxiosResponse<Song>> => {
  return axios.post<Song>(`${baseUrl}/songs/add`, song);
};

export const updateSong = (song: Song): Promise<AxiosResponse<void>> => {
  return axios.put(`${baseUrl}/songs/${song._id}`, song);
};

export const deleteSong = (song: Song): Promise<AxiosResponse<string>> => {
  return axios.delete<string>(`songs/${song._id}`);
};

/**
 * Album related calls
 */
export const getAlbums = (): Promise<AxiosResponse<Album[]>> => {
  return axios.get<Album[]>(`${baseUrl}/albums`);
};

/**
 * Artist related calls
 */
export const getArtists = (): Promise<AxiosResponse<Artist[]>> => {
  return axios.get<Artist[]>(`${baseUrl}/artists`);
};

/**
 * Genre related calls
 */
export const getGenres = (): Promise<AxiosResponse<string[]>> => {
  return axios.get<string[]>(`${baseUrl}/genres`);
};
