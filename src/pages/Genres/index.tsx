import { rootState } from "../../features/interfaces"
import { GridContainer } from "../../components/styled/GridContainer";
import PageLayout from "../Layout";
import { useSelector } from "react-redux";
import { GenreCard } from "./Components";

const Genres = () => {

    const songs = useSelector((state: rootState) => state.songs.songs);
    const genres = useSelector((state: rootState) => state.genres.genres);

    const getSongsInGenre = (genre: string) => {
        const songsInGenre = songs.filter((song) => song.genre === genre);
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
        <PageLayout pageIndex={4}>
            <GridContainer>
                {
                    genres.map((genre, index) => (
                        <GenreCard key={index}>
                            <div>
                                <div />
                            </div>
                            <div>
                                <span>{genre[0].toUpperCase() + genre.slice(1,)}</span>
                                <div>
                                    <div>
                                        <span>{getSongsInGenre(genre).length}</span>
                                        <span>Songs</span>
                                    </div>
                                    <div>
                                        <span>{getAlbumsInGenre(genre).length}</span>
                                        <span>Albums</span>
                                    </div>
                                </div>
                            </div>
                        </GenreCard>
                    ))
                }
            </GridContainer>
        </PageLayout>
    )
}

export default Genres