import styled from "@emotion/styled"
import { FaMusic, FaUser } from "react-icons/fa"
import { IoIosAlbums } from "react-icons/io"
import { Artist, Song } from "../../features/interfaces"
import { MiniList } from "../../components/MiniList"
import { ArtistCard } from "./ArtistCard"

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

interface ArtistsProp {
    songs: Song[];
    artists: Artist[];
}
const Artists = ({ artists, songs }: ArtistsProp) => {

    const getArtistSongs = (artist: Artist) => {
        const songsByArtist = songs.filter((song) => song.artist.name === artist.name);
        return songsByArtist;
    }

    const getArtistAlbums = (artist: Artist) => {
        const filteredSongs = getArtistSongs(artist);

        const albumsByArtist = new Set<string>();
        for (const song of filteredSongs) {
            albumsByArtist.add(song.album.name)
        }
        console.log(albumsByArtist);
        return [...albumsByArtist];
    }
    // useEffect(() => {
    //     setSongCount(songs.length);
    //     setArtistCount(artists.length);
    // }, [songs, artists]);
    return (
        <GridContainer>
            {
                artists.map((artist, index) => (
                    <ArtistCard key={index}>
                        <div>
                            <span>
                                <FaUser />
                            </span>
                            <p> {artist.name}</p>
                        </div>
                        <div>
                            <span>
                                <h6>{getArtistSongs(artist).length}</h6>
                                <FaMusic />
                            </span>
                            <MiniList>
                                {getArtistSongs(artist).map((song, index) => (
                                    <div key={index}>
                                        <span>{song.title}</span>
                                    </div>
                                ))}
                            </MiniList>
                        </div>
                        <div>
                            <span>
                                <h6>{getArtistAlbums(artist).length}</h6>
                                <IoIosAlbums />
                            </span>
                            <MiniList>
                                {getArtistAlbums(artist).map((album, index) => (
                                    <div key={index}>
                                        <span>{album}</span>
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

export default Artists