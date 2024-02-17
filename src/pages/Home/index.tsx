import { CardContainer } from "../../components/styled/Card"
import { FaMusic, FaUsers } from "react-icons/fa"
import { IoIosAlbums } from "react-icons/io"
import { GiSoundWaves } from "react-icons/gi"
import { useEffect, useState } from "react"
import { Album, Artist, Song } from "../../features/interfaces"
import Songs from "../Songs"
import { MiniList } from "../../components/styled/MiniList"
import PieChart from "./Components/PieChart"
import { GridContainer } from "../../components/styled/GridContainer"
import { Container, RightSide } from "./Components"

interface HomeProp {
    songs: Song[];
    albums: Album[];
    artists: Artist[];
    genres: string[];
}
const Home = ({ songs, albums, artists, genres }: HomeProp) => {
    const [artistCount, setArtistCount] = useState<number>();
    const [albumtCount, setAlbumCount] = useState<number>();
    const [genreCount, setGenreCount] = useState<number>();
    const [songCount, setSongCount] = useState<number>();

    useEffect(() => {
        setSongCount(songs.length);
        setAlbumCount(albums.length);
        setArtistCount(artists.length);
        setGenreCount(genres.length);
    }, [songs, albums, artists, genres])
    console.log(genres)
    return (
        <>
            <Container>
                <GridContainer>
                    <CardContainer>
                        <span>
                            <FaMusic />
                        </span>
                        <div>
                            <span>{songCount} Songs</span>
                            <MiniList>
                                {songs.slice(0, 10).map((song, index) => (
                                    <div key={index}>
                                        <span>{song.title}</span>
                                    </div>
                                ))}
                            </MiniList>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <span>
                            <FaUsers />
                        </span>
                        <div>
                            <span>{artistCount} Artists</span>
                            <MiniList>
                                {artists.slice(0, 10).map((artist, index) => (
                                    <div key={index}>
                                        <span>{artist.name}</span>
                                    </div>
                                ))}
                            </MiniList>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <span>
                            <IoIosAlbums />
                        </span>
                        <div>
                            <span>{albumtCount} Albums</span>
                            <MiniList>
                                {albums.slice(0, 10).map((album, index) => (
                                    <div key={index}>
                                        <span>{album.name}</span>
                                    </div>
                                ))}
                            </MiniList>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <span>
                            <GiSoundWaves />
                        </span>
                        <div>
                            <span>{genreCount} Genres</span>
                            <MiniList>
                                {genres.slice(0, 10).map((genre, index) => (
                                    <div key={index}>
                                        <span>{genre}</span>
                                    </div>
                                ))}
                            </MiniList>
                        </div>
                    </CardContainer>
                </GridContainer>
                <RightSide>
                    <PieChart
                        dataValue={[songs.length, artists.length, albums.length, genres.length]} />
                </RightSide>
            </Container>

            <Songs songs={songs} title="Recently added songs" />
        </>
    )
}

export default Home