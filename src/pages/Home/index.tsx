import styled from "@emotion/styled"
import { CardContainer } from "../../components/Card"
import { FaMusic, FaUsers } from "react-icons/fa"
import { IoIosAlbums } from "react-icons/io"
import { GiSoundWaves } from "react-icons/gi"
import { useEffect, useState } from "react"
import { Album, Artist, Song } from "../../features/interfaces"
import Songs from "../Songs"

const GridContainer = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
gap:1rem;
justify-content:center;
align-items:center;
margin-bottom:2rem;
`
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
            <GridContainer>
                <CardContainer>
                    <span>
                        <FaMusic />
                    </span>
                    <div>
                        <span>{songCount} Songs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </CardContainer>
                <CardContainer>
                    <span>
                        <FaUsers />
                    </span>
                    <div>
                        <span>{artistCount} Artists</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </CardContainer>
                <CardContainer>
                    <span>
                        <IoIosAlbums />
                    </span>
                    <div>
                        <span>{albumtCount} Albums</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </CardContainer>
                <CardContainer>
                    <span>
                        <GiSoundWaves />
                    </span>
                    <div>
                        <span>{genreCount} Genres</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </CardContainer>
            </GridContainer>
            <Songs songs={songs} title="Recently added songs" />
        </>
    )
}

export default Home