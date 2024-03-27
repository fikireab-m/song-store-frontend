import { CardContainer } from "../../components/styled/Card"
import { FaMusic, FaUsers } from "react-icons/fa"
import { IoIosAlbums } from "react-icons/io"
import { GiSoundWaves } from "react-icons/gi"
import { rootState } from "../../features/interfaces"
import { MiniLink, MiniList } from "../../components/styled/MiniList"
import PieChart from "./Components/PieChart"
import { GridContainer } from "../../components/styled/GridContainer"
import { Container, LinkContainer, RightSide } from "./Components"
import { Container as TableContainer, TitleContainer } from "../Songs/components/Container"
import { useSelector } from "react-redux"
import PageLayout from "../Layout"
import { Table } from "../../components/styled/TableLayout"
import { TableTitleText } from "../Songs/components/TitleText"
import { Link } from "react-router-dom"


const Home = () => {
    const songs = useSelector((state: rootState) => state.songs.songs);
    const albums = useSelector((state: rootState) => state.albums.albums);
    const artists = useSelector((state: rootState) => state.artists.artists);
    const genres = useSelector((state: rootState) => state.genres.genres);
  
    return (
        <PageLayout pageTitle="Melody-Mall">
            <Container>
                <GridContainer>
                    <CardContainer>
                        <span>
                            <FaMusic />
                        </span>
                        <div>
                            <span>{songs.length}{songs.length > 1 ? " Songs" : " Song"}</span>
                            <MiniList>
                                {songs.slice(0, 10).map((song, index) => (
                                    <div key={index}>
                                        {index === 9
                                            ? <MiniLink>
                                                <Link to="/songs">View more</Link>
                                            </MiniLink>
                                            : <span>{song.title}</span>
                                        }
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
                            <span>{artists.length}{artists.length > 1 ? " Artists" : " Artist"}</span>
                            <MiniList>
                                {artists.slice(0, 10).map((artist, index) => (
                                    <div key={index}>
                                        {index === 9
                                            ? <MiniLink>
                                                <Link to="/artists">View more</Link>
                                            </MiniLink>
                                            : <span>{artist.fname} {artist.lname}</span>
                                        }
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
                            <span>{albums.length}{albums.length > 1 ? " Albums" : " Albums"}</span>
                            <MiniList>
                                {albums.slice(0, 10).map((album, index) => (
                                    <div key={index}>
                                        {index === 9
                                            ? <MiniLink>
                                                <Link to="/albums">View more</Link>
                                            </MiniLink>
                                            : <span>{album.name}</span>
                                        }
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
                            <span>{genres.length}{genres.length > 1 ? " Genres" : " Genre"}</span>
                            <MiniList>
                                {genres.slice(0, 10).map((genre, index) => (
                                    <div key={index}>
                                        {index === 9
                                            ? <MiniLink>
                                                <Link to="/genres">View more</Link>
                                            </MiniLink>
                                            : <span>{genre.name}</span>
                                        }
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

            <TableContainer>
                <TitleContainer>
                    <TableTitleText>
                        Recently Added Songs
                    </TableTitleText>
                    <LinkContainer>
                        <Link to="/songs">view more</Link>
                    </LinkContainer>
                </TitleContainer>
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Artist</th>
                            <th>Genre</th>
                            <th>Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.slice().reverse().slice(0, 10).map((song, index) => (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.album.name}</td>
                                <td>{song.artist.fname} {song.artist.lname}</td>
                                <td>{song.genre.name}</td>
                                <td>{new Date(song.createdAt!).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </PageLayout>
    )
}

export default Home