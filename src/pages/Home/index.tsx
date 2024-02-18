import { CardContainer } from "../../components/styled/Card"
import { FaMusic, FaUsers } from "react-icons/fa"
import { IoIosAlbums } from "react-icons/io"
import { GiSoundWaves } from "react-icons/gi"
import { rootState } from "../../features/interfaces"
import { MiniList } from "../../components/styled/MiniList"
import PieChart from "./Components/PieChart"
import { GridContainer } from "../../components/styled/GridContainer"
import { Container, RightSide } from "./Components"
import { Container as TableContainer } from "../Songs/components/Container"
import { useSelector } from "react-redux"
import PageLayout from "../Layout"
import { Table } from "../../components/styled/TableLayout"
import { TableTitleText } from "../Songs/components/TitleText"


const Home = () => {
    const songs = useSelector((state: rootState) => state.songs.songs);
    const albums = useSelector((state: rootState) => state.albums.albums);
    const artists = useSelector((state: rootState) => state.artists.artists);
    const genres = useSelector((state: rootState) => state.genres.genres);

    return (
        <PageLayout>
            <Container>
                <GridContainer>
                    <CardContainer>
                        <span>
                            <FaMusic />
                        </span>
                        <div>
                            <span>{songs.length} Songs</span>
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
                            <span>{artists.length} Artists</span>
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
                            <span>{albums.length} Albums</span>
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
                            <span>{genres.length} Genres</span>
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

            <TableContainer>
                <TableTitleText>
                    Recently Added Songs
                </TableTitleText>
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Artist</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.slice().reverse().slice(0, 10).map((song, index) => (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.album.name}</td>
                                <td>{song.artist.name}</td>
                                <td>{song.genre}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </PageLayout>
    )
}

export default Home