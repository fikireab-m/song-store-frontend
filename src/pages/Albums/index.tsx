import { Album, Song } from "../../features/interfaces"
import { AlbumCard } from "./Components";
import { GridContainer } from "../../components/styled/GridContainer";

interface AlbumsProp {
    songs: Song[];
    albums: Album[];
}
const Albums = ({ albums, songs }: AlbumsProp) => {

    const songsInAlbum = (album: Album) => {
        const songsByArtist = songs.filter((song) => song.album.name === album.name);
        return songsByArtist;
    }
    const genresInAlbum = (album: Album) => {
        const filteredSongs = songsInAlbum(album);

        const genresInAlbum = new Set<string>();
        for (const song of filteredSongs) {
            genresInAlbum.add(song.genre.trim());
        }
        return [...genresInAlbum];
    }
    return (
        <GridContainer>
            {
                albums.map((album, index) => (
                    <AlbumCard key={index}>
                        <div>
                            <div />
                        </div>
                        <div>
                            <span>{album.name}</span>
                            <div>
                                <div>
                                    <span>{songsInAlbum(album).length}</span>
                                    <span>Songs</span>
                                </div>
                                <div>
                                    <span>{genresInAlbum(album).length}</span>
                                    <span>Genres</span>
                                </div>
                                {/* <div>
                                    <span>38,631</span>
                                    <span>Contributers</span>
                                </div> */}
                            </div>
                        </div>
                    </AlbumCard>
                ))
            }
        </GridContainer>
    )
}

export default Albums