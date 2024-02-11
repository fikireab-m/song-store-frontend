export interface Album {
  name: string;
  albumArt?: string;
}

export interface Artist {
  name: string;
  avatarUrl?: string;
}

export interface Song {
  _id?: string;
  title: string;
  artist: Artist;
  album: Album;
  genre: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SongState {
  songs: Song[];
  isLoading: boolean;
  errorMessage: string | null;
}

export interface AlbumState {
  albums: Album[];
  isLoading: boolean;
  errorMessage: string | null;
}

export interface ArtistState {
  artists: Artist[];
  isLoading: boolean;
  errorMessage: string | null;
}

export interface GenreState {
  genres: string[];
  isLoading: boolean;
  errorMessage: string | null;
}

export interface rootState {
  songs: SongState;
  albums:AlbumState;
  artists:ArtistState;
  genres:GenreState;
}

export interface SongActionType {
  type: string;
  payload: Song;
}
