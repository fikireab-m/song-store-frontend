
import { FaMusic } from "react-icons/fa"
import { rootState } from "../../features/interfaces"
import { MiniList } from "../../components/styled/MiniList"
import { ArtistCard } from "../Artists/Components";
import { GiSoundWaves } from "react-icons/gi";
import { GridContainer } from "../../components/styled/GridContainer";
import PageLayout from "../Layout";
import { useSelector } from "react-redux";

const Genres = () => {

    const songs = useSelector((state: rootState) => state.songs.songs);
    const genres = useSelector((state: rootState) => state.genres.genres);
    const getSongsInGenre = (genre: string) => {
        const songsByArtist = songs.filter((song) => song.genre === genre);
        return songsByArtist;
    }

    return (
        <PageLayout pageIndex={4}>
            <GridContainer>
                {
                    genres.map((genre, index) => (
                        <ArtistCard key={index}>
                            <div>
                                <span>
                                    <GiSoundWaves />
                                </span>
                                <p> {genre}</p>
                            </div>
                            <div>
                                <span>
                                    <h6>{getSongsInGenre(genre).length}</h6>
                                    <FaMusic />
                                </span>
                                <MiniList>
                                    {getSongsInGenre(genre).map((song, index) => (
                                        <div key={index}>
                                            <span>{song.title}</span>
                                        </div>
                                    ))}
                                </MiniList>
                            </div>
                        </ArtistCard>
                    ))
                }
            </GridContainer>
        </PageLayout>
    )
}

export default Genres