import styled from "@emotion/styled"
import { FaMusic } from "react-icons/fa"
import { Song } from "../../features/interfaces"
import { MiniList } from "../../components/MiniList"
import { ArtistCard } from "../Artists/components/ArtistCard";
import { GiSoundWaves } from "react-icons/gi";

const GridContainer = styled.div`
display:grid;
flex-grow:1;
grid-template-columns: repeat(auto-fill, minmax(18.5rem, 1fr));
gap:1rem;
justify-content:center;
align-items:center;
margin-top: 5.5rem;
margin-bottom: 1.5rem;
`;


interface GenresProp {
    songs: Song[];
    genres: string[];
}
const Genres = ({ genres, songs }: GenresProp) => {

    const getSongsInGenre = (genre: string) => {
        const songsByArtist = songs.filter((song) => song.genre === genre);
        return songsByArtist;
    }

    return (
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
    )
}

export default Genres