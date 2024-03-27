import { rootState } from "../../features/interfaces"
import { GridContainer } from "../../components/styled/GridContainer";
import PageLayout from "../Layout";
import { useSelector } from "react-redux";
import { GenreCard } from "./Components";
import { motion } from "framer-motion";

const Genres = () => {

    const songs = useSelector((state: rootState) => state.songs.songs);
    const genres = useSelector((state: rootState) => state.genres.genres);

    const getSongsInGenre = (genre: string) => {
        const songsInGenre = songs.filter((song) => song.genre.name === genre);
        return songsInGenre;
    }

    const getAlbumsInGenre = (genre: string) => {
        const filteredSongs = getSongsInGenre(genre);

        const albumsInGenre = new Set<string>();
        for (const song of filteredSongs) {
            albumsInGenre.add(song.album.name)
        }
        return [...albumsInGenre];
    }
    return (
        <PageLayout pageIndex={4} pageTitle="Melody-Mall/Genres">
            <GridContainer>
                {
                    genres.map((genre, index) => (
                        <motion.div
                            initial={{ y: 150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 * index }}>
                            <GenreCard key={index}>
                                <div>
                                    <div />
                                </div>
                                <div>
                                    <span>{genre.name[0].toUpperCase() + genre.name.slice(1,)}</span>
                                    <div>
                                        <div>
                                            <span>{getSongsInGenre(genre.name).length}</span>
                                            <span>{getSongsInGenre(genre.name).length > 1 ? "Songs" : "Song"}</span>
                                        </div>
                                        <div>
                                            <span>{getAlbumsInGenre(genre.name).length}</span>
                                            <span>{getAlbumsInGenre(genre.name).length > 1 ? "Albums" : "Album"}</span>
                                        </div>
                                    </div>
                                </div>
                            </GenreCard>
                        </motion.div>
                    ))
                }
            </GridContainer>
        </PageLayout>
    )
}

export default Genres