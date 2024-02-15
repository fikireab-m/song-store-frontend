import styled from "@emotion/styled"
import { CardContainer } from "../../components/Card"
import { FaMusic, FaUsers } from "react-icons/fa"
import { IoIosAlbums } from "react-icons/io"
import { GiSoundWaves } from "react-icons/gi"
import { useEffect, useState } from "react"
import { Album, Artist, Song } from "../../features/interfaces"
import Songs from "../Songs"
import { MiniList } from "../../components/MiniList"
import PieChart from "../../components/charts/PieChart"

const GridContainer = styled.div`
display:grid;
flex-grow:1;
grid-template-columns: repeat(auto-fill, minmax(18.5rem, 1fr));
gap:1rem;
justify-content:center;
align-items:center;
margin-top: 0.5rem;
margin-bottom: 1.5rem;
`;

const HomeContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:1rem;
    
    @media only screen and (max-width: 760px) {
    & {
        display:block;
    }
    }
`;

const RightSide = styled.div`
width:18rem;
padding:2rem 0;
max-height:max-content;
background-color: white;
border-radius:1rem;
box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2), 
-0.2rem -0.2rem 0.2rem #c0c0c095 inset, 
0.2rem 0.2rem 0.2rem #c0c0c095 inset;

@media only screen and (max-width: 760px) {
  & {
    margin:1rem 0;
    width:100%;
  }
}
`;

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
            <HomeContainer>
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
            </HomeContainer>

            <Songs songs={songs} title="Recently added songs" />
        </>
    )
}

export default Home