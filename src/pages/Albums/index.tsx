import { Album, rootState } from "../../features/interfaces"
import { AlbumCard } from "./Components";
import { GridContainer } from "../../components/styled/GridContainer";
import PageLayout from "../Layout";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Albums = () => {
    const songs = useSelector((state: rootState) => state.songs.songs);
    const albums = useSelector((state: rootState) => state.albums.albums);

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
        <PageLayout pageIndex={3} pageTitle="Melody-Mall/Albums">
            <GridContainer>
                {
                    albums.map((album, index) => (
                        <motion.div
                            initial={{ y: 150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 * index }}>
                            <AlbumCard key={index}>
                                <div>
                                    <div />
                                </div>
                                <div>
                                    <span>{album.name}</span>
                                    <div>
                                        <div>
                                            <span>{songsInAlbum(album).length}</span>
                                            <span>{songsInAlbum(album).length > 1 ? "Songs" : "Song"}</span>
                                        </div>
                                        <div>
                                            <span>{genresInAlbum(album).length}</span>
                                            <span>{genresInAlbum(album).length > 1 ? "Genres" : "Genre"}</span>
                                        </div>
                                    </div>
                                </div>
                            </AlbumCard>
                        </motion.div>
                    ))
                }
            </GridContainer>
        </PageLayout>
    )
}

export default Albums